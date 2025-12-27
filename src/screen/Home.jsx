import React, { useState } from "react";
import { useSelector } from "react-redux";
import SavedLocations from "../components/SavedLocations";

const Home = ({ setActive }) => {
  const userName = useSelector((state) => state.app.userData.name);
  const { walletBalance } = useSelector((state) => state.app.userData);
  const [destinationLocation, setDestinationLocation] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const savedPlaces = useSelector((store) => store.app.savedPlaces);

  return (
    <div className="bg-neutral-900 p-4 pb-24 space-y-4">
      {/* Top Card (same style as Profile header) */}
      <div className="bg-neutral-800 rounded-2xl p-6 shadow-lg text-neutral-200 flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-400">Good Evening</p>
          <p className="text-xl font-semibold">{userName}</p>
        </div>

        <button
          onClick={() => {
            setActive("profile");
          }}
          className="px-4 py-2 rounded-xl bg-neutral-700 hover:bg-neutral-600 transition text-sm font-medium"
        >
          ₹ {walletBalance}
        </button>
      </div>

      {/* Ride Card (same visual language as Wallet / Saved Locations) */}
      <div className="bg-neutral-800 rounded-2xl p-6 shadow-lg text-neutral-200 space-y-5">
        <p className="text-lg font-semibold">Where to?</p>

        <input
          onChange={(event) => {
            setPickupLocation(event.target.value);
          }}
          value={pickupLocation}
          id="pickup"
          type="text"
          placeholder="Pickup location"
          className="w-full px-4 py-3 rounded-xl bg-neutral-700 border border-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          onChange={(event) => {
            setDestinationLocation(event.target.value);
          }}
          value={destinationLocation}
          id="destination"
          type="text"
          placeholder="Destination"
          className="w-full px-4 py-3 rounded-xl bg-neutral-700 border border-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-white"
        />

        {/* Saved Places – styled like Profile cards */}
        <div className="space-y-2">
          {savedPlaces.map((data) => {
            return (
              <div
                key={data.id}
                onClick={() => {
                  setDestinationLocation(data.address);
                }}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-neutral-700 hover:bg-neutral-600 cursor-pointer transition"
              >
                <p className="text-sm font-medium text-neutral-300">
                  {data.type}
                </p>
              </div>
            );
          })}
        </div>

        <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-neutral-200 transition">
          Start Ride
        </button>
      </div>
      <SavedLocations
        changeDestinationFlag={true}
        setDestinationLocation={setDestinationLocation}
      />
    </div>
  );
};

export default Home;
