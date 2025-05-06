import { useState } from "react";

export function useLandingPageFormState() {
    const [shouldShowReturnUI, setWantsReturnTrip] = useState(false);
    const [pickupLocation, setPickupLocation] = useState("");
    const [pickupCity, setPickupCity] = useState("");
    const [dropOffLocation, setDropOffLocation] = useState("");
    const [dropOffCity, setDropOffCity] = useState("");
    const [passengerCount, setPassengerCount] = useState(1);
  
    const [returnDate, setReturnDate] = useState("");
    const [returnHour, setReturnHour] = useState("00:00");
  
    const [pickupDate, setPickupDate] = useState("");
    const [pickupHour, setPickupHour] = useState("00:00");
    const [returnPassengerCount, setReturnPassengerCount] = useState(1);
  
    const [isPickupOpen, setIsPickupOpen] = useState(false);
    const [isReturnOpen, setReturnOpen] = useState(false);

    const [errorText, setErrorText] = useState("");

  return {
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
  };
}
