import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedPlaces: [
    { type: "Home", address: "123 Downtown Home", icon: "Home" },
    { type: "Work", address: "256 Noida Home", icon: "Work" },
  ],
  userStats: { rating: 4.8, rides: 47, saved: 2.5 },
  userData: {
    name: "Saurabh",
    email: "saurabhbansal2443@gmail.com",
    phoneNumber: "987654321",
    walletBalance: 0,
  },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Pass number of hours to this function
    updateRidesAndHours: (state, action) => {
      state.userStats = {
        ...state.userStats,
        rides: state.userStats.rides + 1,
        saved: state.userStats.saved + action.payload,
      };
    },
    // Pass type as increment/decrement and balance
    updateWalletBalance: (state, action) => {
      let updatedBalance = state.userData.walletBalance;

      if (action.type == "increment") {
        updatedBalance = updatedBalance + action.balance;
      } else if (action.type == "decrement") {
        updatedBalance = updatedBalance - action.balance;
      }

      state.userData = {
        ...state.userData,
        walletBalance: updatedBalance,
      };
    },
    // Send updated userData as object
    updateProfileData: (state, action) => {
      state.userData = {
        ...state.userData,
        ...action.payload,
      };
    },
  },
});

export const { updateRidesAndHours, updateWalletBalance, updateProfileData } =
  appSlice.actions;

export default appSlice.reducer;
