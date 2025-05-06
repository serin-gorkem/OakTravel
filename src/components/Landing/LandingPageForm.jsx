import { memo, useCallback, useMemo } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import  { useLandingPageFormState } from "../../hooks/useLandingPageFormState";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import {
  GoogleMap,
  useJsApiLoader,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const LandingPageForm = memo(function () {
  // States and variables
    const {
      shouldShowReturnUI,
      setWantsReturnTrip,
      pickupLocation,
      setPickupLocation,
      pickupCity,
      setPickupCity,
      dropOffLocation,
      setDropOffLocation,
      dropOffCity,
      setDropOffCity,
      passengerCount,
      setPassengerCount,
      returnDate,
      setReturnDate,
      returnHour,
      setReturnHour,
      pickupDate,
      setPickupDate,
      pickupHour,
      setPickupHour,
      returnPassengerCount,
      setReturnPassengerCount,
      isPickupOpen,
      setIsPickupOpen,
      isReturnOpen,
      setReturnOpen,
      errorText,
      setErrorText,
    } = useLandingPageFormState();

  const togglePickupDateMenu = () => {
    setIsPickupOpen((prev) => !prev);
  };
  const toggleReturnDateMenu = () => {
    setReturnOpen((prev) => !prev);
  };

  const pickupPlaceRef = useRef(null);
  const dropOffPlaceRef = useRef(null);

  const libraries = ["places"];
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  const options = useMemo(
    () => ({
      types: ["airport"],
    }),
    []
  );

  function handlePickupTimeChange(e) {
    const time = e.target.value;
    setPickupHour(time);
  }

  function handlePickupDaySelect(date) {
    const newDate = date.toString().slice(0, 15);
    setPickupDate(newDate);
  }
  function handleReturnTimeChange(e) {
    const time = e.target.value;
    setReturnHour(time);
  }

  function handleReturnDaySelect(date) {
    const newDate = date.toString().slice(0, 15);
    setReturnDate(newDate);
  }

  const handleOnPlacesChanged = useCallback((ref, setLocation, setCity) => {
    if (!ref.current) return;
    const places = ref.current.getPlaces();
    if (!places || places.length === 0) return;

    const place = places[0];
    if (place.types?.includes("airport")) {
      setLocation(place.name);
      setCity(place.formatted_address);
    } else {
      alert("Please select an airport.");
      setLocation("");
    }
  }, []);
  const handleReturnTripChange = (event) => {
    setWantsReturnTrip(event.target.checked);
    console.log("Return trip selected:", event.target.checked);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      pickupLocation,
      pickupCity,
      dropOffLocation,
      dropOffCity,
      pickupDate,
      pickupHour,
      passengerCount,
      wantsReturnTrip: !shouldShowReturnUI,
      returnDate: shouldShowReturnUI ? returnDate : null,
      returnHour: shouldShowReturnUI ? returnHour : null,
      returnPassengerCount: shouldShowReturnUI ? returnPassengerCount : null,
    });

    if(!pickupLocation || !pickupCity || !dropOffLocation || !dropOffCity || !pickupDate || !pickupHour || !passengerCount) {
      setErrorText("Please fill in all fields.");
      return;
    }
    if(pickupLocation === dropOffLocation) {
      setErrorText("Pickup and drop-off locations cannot be the same.");
      return;
    }
    if(shouldShowReturnUI){
      if(!returnDate || !returnHour || !returnPassengerCount) {
        setErrorText("Please fill in all return fields.");
        return;
      }
    }
    setVariables("pickupLocation", pickupLocation);
    setVariables("pickupCity", pickupCity);
    setVariables("dropOffLocation", dropOffLocation);
    setVariables("dropOffCity", dropOffCity);
    setVariables("pickupDate", pickupDate);
    setVariables("pickupHour", pickupHour);
    setVariables("passengerCount", passengerCount);
    setVariables("shouldShowReturnUI", !shouldShowReturnUI);
    setVariables("returnDate", returnDate);
    setVariables("returnHour", returnHour);
    setVariables("returnPassengerCount", returnPassengerCount);

    navigate("vehicle-features");
  };

  function setVariables(variableName, variableValue) {
    localStorage.setItem(variableName, variableValue);
  }

  return (
    <>
      {isLoaded && (
        <form
          className="bg-base-300 w-full rounded-box p-5 flex flex-col justify-between h-fit gap-3 shadow-xl"
          onSubmit={handleSubmit}
        >
        <p className="font-semibold text-red-500" >{errorText}</p>
          <fieldset className="flex gap-3 w-fit">
            <input
              type="checkbox"
              className="toggle checked:text-warning"
              aria-label="add return trip"
              checked={shouldShowReturnUI}
              onChange={handleReturnTripChange}
            ></input>
            <p>I want a return transfer.</p>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="font-semibold text-sm">From (We only operate on Turkey.)</legend>
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
                  onPlacesChanged={() =>
                    handleOnPlacesChanged(
                      pickupPlaceRef,
                      setPickupLocation,
                      setPickupCity
                    )
                  }
                  options={options}
                >
                  <input
                    type="text"
                    id="autocomplete"
                    required={true}
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="Address,airport,hotel..."
                  />
                </StandaloneSearchBox>
              </div>
            </label>
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="font-semibold text-sm">To (We only operate on Turkey.)</legend>
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
                  onPlacesChanged={() =>
                    handleOnPlacesChanged(
                      dropOffPlaceRef,
                      setDropOffLocation,
                      setDropOffCity
                    )
                  }
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
            <div className="w-full border border-base-300 rounded-box">
              <div
                className="collapse-title text-sm font-semibold bg-base-100 cursor-pointer"
                onClick={togglePickupDateMenu}
              >
                Pickup Date and Time
              </div>
              {isPickupOpen && (
                <div className="md:p-4 bg-base-200 rounded-b-box">
                  <DayPicker
                    mode="single"
                    required={true}
                    disabled={{ before: new Date() }}
                    selected={pickupDate}
                    onSelect={handlePickupDaySelect}
                    className="bg-base-300 rounded-box md:p-3 mb-4 w-full flex flex-col items-center"
                    footer={pickupDate ? `Pickup Date: ${pickupDate}` : ""}
                  />
                  <input
                    type="time"
                    required={true}
                    className="input focus-within:outline-0 w-full text-primary"
                    value={pickupHour}
                    onChange={handlePickupTimeChange}
                  />
                </div>
              )}
            </div>
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
              onChange={(e) => setPassengerCount(parseInt(e.target.value))}
            />
          </fieldset>
          {shouldShowReturnUI && (
            <>
              <fieldset className="fieldset flex">
                <div className="w-full border border-base-300 rounded-box">
                  <div
                    className="collapse-title text-sm font-semibold bg-base-100 cursor-pointer"
                    onClick={toggleReturnDateMenu}
                  >
                    Return Date and Time
                  </div>
                  {isReturnOpen && (
                    <div className="md:p-4 bg-base-200 rounded-b-box">
                      <DayPicker
                        mode="single"
                        required
                        disabled={{ before: pickupDate }}
                        selected={returnDate}
                        onSelect={handleReturnDaySelect}
                        className="bg-base-300 rounded-box md:p-3 mb-4 w-full flex flex-col items-center"
                        footer={returnDate ? `Return Date: ${returnDate}` : ""}
                      />
                      <input
                        type="time"
                        className="input focus-within:outline-0 w-full text-primary"
                        value={returnHour}
                        onChange={handleReturnTimeChange}
                      />
                    </div>
                  )}
                </div>
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
                  onChange={(e) =>
                    setReturnPassengerCount(parseInt(e.target.value))
                  }
                />
              </fieldset>
            </>
          )}
          <button
            type="submit"
            className="btn btn-primary w-full hover:bg-white hover:text-primary"
          >
            Search
          </button>
        </form>
      )}
    </>
  );
});
export default LandingPageForm;
