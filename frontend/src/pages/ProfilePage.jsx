import { useState, useRef } from "react";
import useAuthUser from "../hooks/useAuthUser";
import { Camera, User, Globe, MapPin } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../lib/api";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { authUser } = useAuthUser();
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);
  const queryClient = useQueryClient();

  const { mutate: updateProfileMutation, isPending } = useMutation({
    mutationFn: updateProfile,
    onSuccess: (data) => {
      toast.success("Profile picture updated successfully");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to update profile picture");
    },
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Convert file to base64
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      updateProfileMutation({ profilePic: base64Image });
    };
  };

  if (!authUser) return null;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold ">Profile</h1>
            <p className="mt-2">Your profile information</p>
          </div>

          {/* avatar upload section */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={selectedImage || authUser.profilePic || "/avatar.png"}
                alt="Profile"
                className="size-32 rounded-full object-cover border-4 "
              />
              <label
                htmlFor="avatar-upload"
                className={`
                  absolute bottom-0 right-0 
                  bg-base-content hover:scale-105
                  p-2 rounded-full cursor-pointer 
                  transition-all duration-200
                  ${isPending ? "animate-pulse pointer-events-none" : ""}
                `}
              >
                <Camera className="w-5 h-5 text-base-200" />
                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isPending}
                  ref={fileInputRef}
                />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isPending ? "Uploading..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Languages
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">
                Native: {authUser?.nativeLanguage || "Not specified"} | Learning: {authUser?.learningLanguage || "Not specified"}
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.location || "Not specified"}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
