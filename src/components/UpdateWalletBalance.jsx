import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wallet, Plus, IndianRupee } from "lucide-react";
import { updateWalletBalance } from "../Store/appStore";

const UpdateWalletBalance = () => {
  const dispatch = useDispatch();
  const { walletBalance } = useSelector((state) => state.app.userData);

  const [addBalance, setAddBalance] = useState(0);
  const [isUpdatingWalletBalance, setIsUpdatingWalletBalance] = useState(false);

  function handleToggle() {
    setIsUpdatingWalletBalance(!isUpdatingWalletBalance);
  }

  function handleAddMoney() {
    dispatch(updateWalletBalance({ type: "increment", balance: addBalance }));
  }

  return (
    <div className="bg-neutral-800 rounded-2xl p-6 mt-4 text-neutral-200 shadow-lg">
      {/* Wallet Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Wallet className="text-neutral-400" />
          <p className="font-medium">Wallet Balance</p>
        </div>

        <button
          onClick={handleToggle}
          className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg bg-neutral-700 hover:bg-neutral-600 transition"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Balance */}
      <div className="text-3xl font-semibold mb-4 flex items-center gap-1">
        <IndianRupee className="w-6 h-6 text-neutral-400" />
        {walletBalance}
      </div>

      {/* Add Money Section */}
      {isUpdatingWalletBalance && (
        <div className="space-y-4">
          {/* Quick Buttons */}
          <div className="grid grid-cols-4 gap-2">
            {[10, 25, 50, 100].map((amt) => (
              <button
                key={amt}
                onClick={() => setAddBalance(amt)}
                className="py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 transition text-sm"
              >
                ₹{amt}
              </button>
            ))}
          </div>

          {/* Custom Input */}
          <input
            type="number"
            value={addBalance}
            onChange={(e) => setAddBalance(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg bg-neutral-700 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Enter amount"
          />

          <button
            onClick={handleAddMoney}
            className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-neutral-200 transition"
          >
            Add Money
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateWalletBalance;
