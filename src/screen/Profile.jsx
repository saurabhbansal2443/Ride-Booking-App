import React from "react";
import ShowProfile from "../components/ShowProfile";
import UpdateWalletBalance from "../components/UpdateWalletBalance";

const Profile = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <ShowProfile />
        <UpdateWalletBalance />
      </div>
    </div>
  );
};

export default Profile;
