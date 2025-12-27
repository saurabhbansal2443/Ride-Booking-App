import { Mail, Phone, Star, User } from "lucide-react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileData } from "../Store/appStore";

const ShowProfile = () => {
  const dispatch = useDispatch();
  const { name, email, phoneNumber } = useSelector(
    (state) => state.app.userData
  );
  const { rating, rides } = useSelector((state) => state.app.userStats);

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [currentProfileData, setCurrentProfileData] = useState({
    name,
    email,
    phoneNumber,
  });

  function HandleEdit() {
    setIsEditingProfile(!isEditingProfile);
  }

  function handleProfileDataChange() {
    dispatch(updateProfileData(currentProfileData));
    setIsEditingProfile(false);
  }

  return (
    <div className="bg-neutral-800 rounded-2xl p-6 text-neutral-200 shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">Profile</h1>
        <button
          onClick={HandleEdit}
          className="px-4 py-1.5 text-sm rounded-lg border border-neutral-600 hover:bg-neutral-700 transition"
        >
          {isEditingProfile ? "Cancel" : "Edit"}
        </button>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-neutral-700 flex items-center justify-center">
          <User className="text-neutral-300" />
        </div>

        <div>
          <p className="text-lg font-medium">{name}</p>
          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{rating}</span>
            <span>•</span>
            <span>{rides} rides</span>
          </div>
        </div>
      </div>

      {/* View Mode */}
      {!isEditingProfile && (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-neutral-400" />
            <p className="text-sm">{email}</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-neutral-400" />
            <p className="text-sm">{phoneNumber}</p>
          </div>
        </div>
      )}

      {/* Edit Mode */}
      {isEditingProfile && (
        <div className="space-y-4">
          <Input
            label="Name"
            value={currentProfileData.name}
            onChange={(e) =>
              setCurrentProfileData({
                ...currentProfileData,
                name: e.target.value,
              })
            }
          />
          <Input
            label="Email"
            value={currentProfileData.email}
            onChange={(e) =>
              setCurrentProfileData({
                ...currentProfileData,
                email: e.target.value,
              })
            }
          />
          <Input
            label="Phone Number"
            value={currentProfileData.phoneNumber}
            onChange={(e) =>
              setCurrentProfileData({
                ...currentProfileData,
                phoneNumber: e.target.value,
              })
            }
          />
          <button
            onClick={handleProfileDataChange}
            className="w-full mt-2 bg-white text-black py-2 rounded-lg font-medium hover:bg-neutral-200 transition"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

const Input = ({ label, value, onChange }) => (
  <div>
    <label className="block text-sm text-neutral-400 mb-1">{label}</label>
    <input
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 rounded-lg bg-neutral-700 border border-neutral-600 focus:outline-none focus:ring-2 focus:ring-white"
    />
  </div>
);

export default ShowProfile;
