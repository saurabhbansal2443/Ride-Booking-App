import React from "react";
import { useSelector } from "react-redux";

const Home = ({ setActive }) => {
  const { name, email, phoneNumber } = useSelector(
    (state) => state.app.userData
  );
  const { walletBalance } = useSelector((state) => state.app.userData);

  return (
    <div className="bg-neutral-900 px-4 pt-6 pb-4">
      <div className="bg-neutral-800 rounded-2xl p-6 shadow-lg text-neutral-200 flex items-center justify-between">
        {/* Greeting */}
        <div>
          <p className="text-sm text-neutral-400">Good Evening</p>
          <p className="text-xl font-semibold">{name}</p>
        </div>

        {/* Wallet Button */}
        <button
          onClick={() => {
            setActive("profile");
          }}
          className="bg-neutral-700 hover:bg-neutral-600 transition px-4 py-2 rounded-xl text-sm font-medium"
        >
          ₹ {walletBalance}
        </button>
      </div>
    </div>
  );
};

export default Home;
