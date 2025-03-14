function Form() {
  const today = new Date().toLocaleString("EN-CA").slice(0, 10) + "T00:00";
  return (
    <form className="bg-base-300 w-full rounded-box p-5 flex flex-col justify-between h-fit gap-3 shadow-xl ">
      <fieldset className="flex gap-3 w-fit">
        <input type="checkbox" className="toggle" aria-label="add return trip"></input>
        <p>I want a return transfer.</p>
      </fieldset>
      <fieldset className="fieldset ">
        <legend className="font-semibold text-sm">From</legend>
        <label className="input focus-within:outline-0 w-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="size-6"
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
          <input type="text" placeholder="Address,airport,hotel..." />
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
            class="size-6"
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
          <input type="text" placeholder="Address,airport,hotel..." />
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
        />
      </fieldset>
      <fieldset className="fieldset flex focus-within:outline-0">
        <legend className="font-semibold text-sm">Passenger Count</legend>
        <input
          type="number"
          className="input validator focus-within:outline-0 w-full"
          placeholder="Passengers (1-10)"
          min="1"
          max="10"
          title="Passenger Count"
        />
      </fieldset>
      <button type="submit" className="btn btn-primary w-full">
        Search
      </button>
    </form>
  );
}

export default Form;
