import React, { useState } from "react";
import Profile from "./screen/Profile";
import { House, SquareUser } from "lucide-react";
import Home from "./screen/Home";

const App = () => {
  const [active, setActive] = useState("profile");

  return (
    <div className="min-h-screen bg-neutral-900 relative pb-20">
      {active == "profile" && <Profile />}
      {active == "home" && <Home setActive={setActive} />}

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-neutral-800 border-t border-neutral-700">
        <div className="flex justify-center items-center h-16">
          <div
            onClick={() => {
              setActive("home");
            }}
            className={`flex flex-col items-center gap-1 cursor-pointer transition mx-4
              ${
                active === "home"
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
          >
            <House className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </div>

          <div
            onClick={() => {
              setActive("profile");
            }}
            className={`flex mx-4 flex-col items-center gap-1 cursor-pointer transition
              ${
                active === "profile"
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
          >
            <SquareUser className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
