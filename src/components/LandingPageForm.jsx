import { memo, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useRef } from "react";

const LandingPageForm = memo(function () {
  const today = new Date().toLocaleString("EN-CA").slice(0, 10) + "T00:00";
  const [returnTrip, setReturnTrip] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");

  // Set the default value of pickupDate to today
  const [pickupDate, setPickupDate] = useState("");
  const [passengerCount, setPassengerCount] = useState(1);

  const [returnDate, setReturnDate] = useState("");
  const [returnPassengerCount, setReturnPassengerCount] = useState(1);

  const pickupPlaceRef = useRef(null);
  const dropOffPlaceRef = useRef(null);

  const libraries = ["places"];
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });
  const options = {
    types: ["establishment"],
    componentRestrictions: { country: "tr" },
  };
  
  const handleOnPlacesChanged = (ref,setLocation) => {
    if (!ref.current) return;
    const places = ref.current.getPlaces();
    if (!places || places.length === 0) return;
  
    const place = places[0];

    if (place.types?.includes("airport")) {
      setLocation(place.formatted_address || place.name);
    } else {
      alert("Please select an airport.");
      setLocation("");
    }
  };
  const handleReturnTripChange = (event) => {
    setReturnTrip(event.target.checked);
    console.log("Return trip selected:", event.target.checked);
  };

  return (
    <>
      {isLoaded && (
        <form className="bg-base-300 w-full rounded-box p-5 flex flex-col justify-between h-fit gap-3 shadow-xl ">
          <fieldset className="flex gap-3 w-fit">
            <input
              type="checkbox"
              className="toggle checked:text-warning"
              aria-label="add return trip"
              checked={returnTrip}
              onChange={handleReturnTripChange}
            ></input>
            <p>I want a return transfer.</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="font-semibold text-sm">From</legend>
            <label className="input  focus-within:outline-0 w-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <div className="w-full">
              <StandaloneSearchBox
                onLoad={(ref) => (pickupPlaceRef.current = ref)}
                onPlacesChanged={() => handleOnPlacesChanged(pickupPlaceRef,setPickupLocation)}
                options={options} 
              >
                <input
                  type="text"
                  id="autocomplete"
                  value={pickupLocation}
                  required={true}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="Address,airport,hotel..."
                />
              </StandaloneSearchBox>
              </div>
            </label>
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="font-semibold text-sm">To</legend>
            <label className="input focus-within:outline-0 w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 opacity-80"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <div className="w-full">
              <StandaloneSearchBox
                onLoad={(ref) => (dropOffPlaceRef.current = ref)}
                onPlacesChanged={() => handleOnPlacesChanged(dropOffPlaceRef,setDropOffLocation)}
                options={options} 
              >
                <input
                  type="text"
                  value={dropOffLocation}
                  required={true}
                  onChange={(e) => setDropOffLocation(e.target.value)}
                  placeholder="Address,airport,hotel..."
                />
              </StandaloneSearchBox>
              </div>
            </label>
          </fieldset>
          <fieldset className="fieldset flex">
            <legend className="font-semibold text-sm">
              Pickup Date and Time
            </legend>
            <input
              type="datetime-local"
              className="input focus-within:outline-0 w-full"
              aria-label="Select pickup date and time"
              min={today}
              value={pickupDate}
              required={true}
              onChange={(e) => setPickupDate(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset flex focus-within:outline-0">
            <legend className="font-semibold text-sm">
              Passenger Count (Max - 10)
            </legend>
            <input
              type="number"
              className="input validator focus-within:outline-0 w-full"
              placeholder="Passengers (1-10)"
              min="1"
              max="10"
              title="Passenger Count"
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
            />
          </fieldset>
          {returnTrip && (
            <>
              <fieldset className="fieldset flex focus-within:outline-0">
                <legend className="font-semibold text-sm">
                  Return Date and Time
                </legend>
                <input
                  type="datetime-local"
                  className="input focus-within:outline-0 w-full"
                  aria-label="Select return date and time"
                  min={today}
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </fieldset>
              <fieldset className="fieldset flex focus-within:outline-0">
                <legend className="font-semibold text-sm">
                  Return Passenger Count (Max - 10 )
                </legend>
                <input
                  type="number"
                  className="input validator focus-within:outline-0 w-full"
                  placeholder="Passengers (1-10)"
                  min="1"
                  max="10"
                  title="Passenger Count"
                  value={returnPassengerCount}
                  onChange={(e) => setReturnPassengerCount(e.target.value)}
                />
              </fieldset>
            </>
          )}
          <button type="submit" className="btn btn-primary w-full hover:bg-white hover:text-primary">
            <Link
              smooth
              to="vehicle-features"
              aria-label={`Scroll to the Search section.`}
            >
              Search
            </Link>
          </button>
        </form>
      )}
    </>
  );
});
export default LandingPageForm;
