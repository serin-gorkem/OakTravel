import { useState } from "react";

export function useReturnTripState() {
  const [returnDate, setReturnDate] = useState(localStorage.getItem("returnDate"));
  const [returnHour, setReturnHour] = useState(localStorage.getItem("returnHour"));
  const [personCount, setPersonCount] = useState(localStorage.getItem("returnPassengerCount"));
  const [shouldRenderButton, setShouldRenderButton] = useState(localStorage.getItem("shouldShowReturnUI"));
  const [showDateSetError, setShowDateSetError] = useState(false);

  return {
    returnDate,
    setReturnDate,
    returnHour,
    setReturnHour,
    personCount,
    setPersonCount,
    shouldRenderButton,
    setShouldRenderButton,
    showDateSetError,
    setShowDateSetError
  };
}
