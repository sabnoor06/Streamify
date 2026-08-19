import { Link } from "react-router";
import { Globe, MessageSquare, Video, ArrowRight, Sparkles, ShipWheelIcon } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content overflow-hidden relative selection:bg-primary/30">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <ShipWheelIcon className="w-8 h-8 text-primary animate-pulse" />
          <span className="text-2xl font-bold font-mono tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Streamify
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="btn btn-ghost font-medium">
            Log In
          </Link>
          <Link
            to="/signup"
            className="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-200/50 border border-base-content/5 backdrop-blur-sm mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium">The New Way to Learn Languages</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
          Connect, Chat, and <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
            Learn Together.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-base-content/70 max-w-2xl mb-12 leading-relaxed">
          Break the language barrier. Match with native speakers around the world,
          practice in real-time with crystal-clear video calls, and make lifelong friends.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            to="/signup"
            className="btn btn-primary btn-lg rounded-full px-8 w-full sm:w-auto group shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Start Learning For Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/login"
            className="btn btn-outline btn-lg rounded-full px-8 w-full sm:w-auto hover:bg-base-200 hover:text-base-content hover:-translate-y-1 transition-all duration-300"
          >
            I Already Have an Account
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20 bg-base-200/50 border-t border-base-content/5 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-base-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-content/5 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Matching</h3>
              <p className="text-base-content/70 leading-relaxed">
                Our smart algorithm pairs you with the perfect language exchange partners based on your native and learning languages.
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-content/5 group md:translate-y-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                <MessageSquare className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Messaging</h3>
              <p className="text-base-content/70 leading-relaxed">
                Chat seamlessly with instant delivery, typing indicators, and beautiful chat interfaces designed for quick communication.
              </p>
            </div>

            <div className="bg-base-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-base-content/5 group md:translate-y-8">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Video className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">HD Video Calls</h3>
              <p className="text-base-content/70 leading-relaxed">
                Practice your pronunciation face-to-face with built-in high definition video calling. No third-party apps required.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
