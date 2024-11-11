import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedSection } from "../../../Redux/slices/navigationSlice";
import { toast } from "react-toastify";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet's CSS
import { PulseLoader } from "react-spinners";
import moment from "moment";

const LocationPickup = () => {
  const [address, setAddress] = useState("");
  const [nearestBusStop, setNearestBusStop] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const { trashAmount } = useSelector((state) => state.trash);
  const dispatch = useDispatch();

  // Retrieve location when the checkbox is selected
  const handleLocationEnable = (e) => {
    const enabled = e.target.checked;
    setLocationEnabled(enabled);

    if (enabled) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            toast.success("Location retrieved successfully!");
          },
          (error) => {
            toast.error("Unable to retrieve location. Please try again.");
            console.error(error);
          }
        );
      } else {
        toast.error("Geolocation is not supported by your browser.");
      }
    } else {
      setLocation(null); // Reset location if disabled
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Prompt the user to enable location if location is not available
    if (locationEnabled && !location) {
      toast.error("Please enable location services before proceeding.");
      setLoading(false);
      return;
    }

    // Proceed if location is available or not enabled
    if (locationEnabled && location) {
      setTimeout(() => {
        dispatch(withdrawWallet(amount));
        dispatch(
          addToNotifications(
            `Notification sent for pickup, please confirm pickup to get funded`
          )
        );
        dispatch(
          newTransaction({
            name: "Funding",
            date: moment().format("Do MMM YYYY, h:mm:ss a"),
            trashAmount,
            status: "Pending",
          })
        );
        toast.success("Notification send successfully");
        dispatch(setSelectedSection("confirm"));
        setLoading(false);
      }, 4000);
    } else {
      toast.error("Please Enable your location");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] bg-white shadow-2xl shadow-gray-900 rounded-lg p-6 sm:p-8 lg:p-10 border border-blue-300 relative">
      <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6">
        Help us locate you for a quick and easy pickup.
      </h2>
      <div className="mb-4 sm:mb-6">
        <div className="mb-4">
          <label className="block mb-2 text-sm sm:text-base">Address</label>
          <input
            type="text"
            placeholder="Your Address"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-sm sm:text-base"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm sm:text-base">
            Nearest Bus Stop
          </label>
          <input
            type="text"
            placeholder="Your Nearest Bus Stop"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-sm sm:text-base"
            value={nearestBusStop}
            onChange={(e) => setNearestBusStop(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label className="mr-2 text-xs sm:text-sm md:text-base">
            Enable your location to help us find you on the map.
          </label>
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={locationEnabled}
            onChange={handleLocationEnable}
          />
        </div>
      </div>

      {/* Display map and location */}
      {location ? (
        <div className="text-center mb-4">
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={15}
            style={{ height: "300px", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker
              position={[location.latitude, location.longitude]}
              icon={
                new L.Icon({
                  iconUrl: "/assets/svg/location-icon.svg",
                  iconSize: [25, 25],
                })
              }
            >
              <Popup>Your location</Popup>
            </Marker>
          </MapContainer>
          <p className="text-sm">
            Location: {location.latitude}, {location.longitude}
          </p>
        </div>
      ) : (
        <img
          src="/assets/svg/map.svg"
          alt="Map Placeholder"
          className="w-full rounded-lg mb-4"
        />
      )}

      <button
        className="bg-black text-white py-3 w-full rounded-lg font-semibold hover:bg-gray-800 transition disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={!address || !nearestBusStop || !location}
      >
        {loading ? <PulseLoader size={10} color="#fff" /> : "Submit"}
      </button>
    </div>
  );
};

export default LocationPickup;
