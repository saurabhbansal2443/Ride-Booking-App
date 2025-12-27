import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  savedPlaces: [
    { id: uuidv4(), type: "Home", address: "123 Downtown Home" },
    { id: uuidv4(), type: "Work", address: "256 Noida Home" },
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
      if (action.payload.type == "increment") {
        updatedBalance = updatedBalance + action.payload.balance;
      } else if (action.payload.type == "decrement") {
        updatedBalance = updatedBalance - action.payload.balance;
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
    // Pass the id of saved place in this
    deleteSavedPlaces: (state, action) => {
      let filteredPlaces = state.savedPlaces.filter(
        (data) => data.id != action.payload.id
      );
      state.savedPlaces = filteredPlaces;
    },
  },
});

export const {
  updateRidesAndHours,
  updateWalletBalance,
  updateProfileData,
  deleteSavedPlaces,
} = appSlice.actions;

export default appSlice.reducer;
