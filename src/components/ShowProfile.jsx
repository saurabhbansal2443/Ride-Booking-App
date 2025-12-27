import { Mail, Phone, Star, User } from "lucide-react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfileData } from "../Store/appStore";

const ShowProfile = () => {
  const dispatch = useDispatch();
  const { name, email, phoneNumber } = useSelector(
    (state) => state.app.userData
  );
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [currentProfileData, setCurrentProfileData] = useState({
    name: name,
    email: email,
    phoneNumber: phoneNumber,
  });

  const { rating, rides } = useSelector((state) => state.app.userStats);

  function HandleEdit() {
    setIsEditingProfile(!isEditingProfile);
  }
  function handleProfileDataChange() {
    dispatch(updateProfileData(currentProfileData));
    setIsEditingProfile(false);
  }
  return (
    <div>
      <div>
        <h1>Profile</h1>
        <button onClick={HandleEdit}>
          {isEditingProfile ? "Cancel" : "Edit"}
        </button>
      </div>
      <div>
        <div>
          <User />
          <p>{name}</p>
          <Star />
          <p>{rating}</p>
          <p>{rides}</p>
        </div>
        {!isEditingProfile && (
          <div>
            <Mail />
            <p>{email}</p>
            <Phone />
            <p>{phoneNumber}</p>
          </div>
        )}
        {isEditingProfile && (
          <div>
            <label htmlFor="name">Name</label>{" "}
            <input
              onChange={(event) => {
                setCurrentProfileData({
                  ...currentProfileData,
                  name: event.target.value,
                });
              }}
              id="name"
              type="text"
              value={currentProfileData.name}
            />
            <label htmlFor="email">Email</label>{" "}
            <input
              onChange={(event) => {
                setCurrentProfileData({
                  ...currentProfileData,
                  email: event.target.value,
                });
              }}
              id="email"
              type="text"
              value={currentProfileData.email}
            />
            <label htmlFor="phoneNumber">Phone Number</label>{" "}
            <input
              id="phoneNumber"
              type="text"
              onChange={(event) => {
                setCurrentProfileData({
                  ...currentProfileData,
                  phoneNumber: event.target.value,
                });
              }}
              value={currentProfileData.phoneNumber}
            />
            {console.log(currentProfileData)}
            <button onClick={handleProfileDataChange}>Save Changes </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowProfile;
