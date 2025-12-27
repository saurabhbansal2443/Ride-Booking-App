import { ChevronRight, Trash } from "lucide-react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSavedPlaces } from "../Store/appStore";

const SavedLocations = ({ changeDestinationFlag, setDestinationLocation }) => {
  const dispatch = useDispatch();
  const savedPlaces = useSelector((store) => store.app.savedPlaces);

  if (savedPlaces.length == 0) {
    return null;
  }

  function handleDeleteAdress(id) {
    dispatch(deleteSavedPlaces({ id }));
  }

  return (
    <div className="bg-neutral-800 rounded-2xl p-6 text-neutral-200 shadow-lg mt-4">
      <p className="text-lg font-semibold mb-4">Saved Locations</p>

      <div className="space-y-4">
        {savedPlaces.map((data) => {
          return (
            <div
              key={data.id}
              className="flex items-center justify-between bg-neutral-700 rounded-xl p-4 hover:bg-neutral-650 transition"
            >
              <div>
                <p className="text-sm font-medium text-neutral-300">
                  {data.type}
                </p>
                <p className="text-sm text-neutral-400 leading-snug">
                  {data.address}
                </p>
              </div>
              {changeDestinationFlag ? (
                <div
                  onClick={() => {
                    setDestinationLocation(data.address);
                  }}
                >
                  <ChevronRight></ChevronRight>
                </div>
              ) : (
                <div
                  onClick={() => {
                    handleDeleteAdress(data.id);
                  }}
                  className="p-2 rounded-lg hover:bg-red-500/20 text-neutral-400 hover:text-red-400 cursor-pointer transition"
                >
                  <Trash className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SavedLocations;
