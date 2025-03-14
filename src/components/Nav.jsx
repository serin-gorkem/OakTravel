import { useState } from "react";

function Nav() {
  const [selectedCurrency, setSelectedCurrency] = useState(currencyList[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function changeCurrency(currency) {
    setSelectedCurrency(currency);
  }

  function toggleMenu(bool) {
    setIsMenuOpen(bool);
  }

  const renderCurrencyList = currencyList.map((currency) => (
    <li
      key={currency.id}
      className="w-full"
      onClick={() => changeCurrency(currency)}
    >
      <a className="flex p-0 py-2 justify-center items-center">
        {currency.svg}
      </a>
    </li>
  ));
  return (
    <nav className="flex md:px-8 xl:px-0 flex-col gap-2 z-20 lg:max-w-9/12 w-full mx-auto">
      {isMenuOpen ? (
        <div className="h-96 bg-base-100 flex flex-col sm:hidden">
          <ul className=" p-2 flex justify-between items-center">
            <li>
              <a href="#">
                <p className=" font-heading text-primary text-xl">OAK TRAVEL</p>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <details className="dropdown">
                <summary className="flex">
                  {/* Currency Icon */}
                  {selectedCurrency.svg}
                </summary>
                <ul className="menu dropdown-content mt-2 bg-base-100 right-1/2 left-1/2 -translate-x-1/2 rounded-box w-16 flex justify-center items-center shadow-sm">
                  {renderCurrencyList}
                </ul>
              </details>
              {/* Whatsapp Icon */}
              <a href="https://api.whatsapp.com/send?phone=905540161923">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 aspect-square p-1.5 bg-white rounded-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                      fill="#1E272E"
                    ></path>
                  </g>
                </svg>
              </a>
              {/* Close Icon */}
              <div onClick={() => toggleMenu(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              </div>
            </li>
          </ul>
          <div className=" bg-base-300 h-11/12 m-2 p-4">
            <ul className="flex flex-col h-full justify-between">
              {menuItem("Booking")}
              {menuItem("Who we are")}
              {menuItem("Our Vehicles")}
              {menuItem("Reviews")}
              {menuItem("FAQ")}
              {menuItem("How to book your ride")}
              {menuItem("Contact")}
            </ul>
          </div>
        </div>  
      ) : (
        <>
          <ul className=" p-2 md:px-0 flex justify-between items-center">
            <li>
              <a href="#">
                <p className=" font-heading text-white text-xl">OAK TRAVEL</p>
              </a>
            </li>
            <li className="flex items-center gap-4">
              <details className="dropdown">
                <summary className="flex">
                  {/* Currency Icon */}
                  {selectedCurrency.svg}
                </summary>
                <ul className="menu dropdown-content mt-2 bg-base-100 right-1/2 left-1/2 -translate-x-1/2 rounded-box w-16 flex justify-center items-center shadow-sm">
                  {renderCurrencyList}
                </ul>
              </details>
              {/* Whatsapp Icon */}
              <a href="https://api.whatsapp.com/send?phone=905540161923">
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 aspect-square p-1.5 bg-white rounded-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
                      fill="#1E272E"
                    ></path>
                  </g>
                </svg>
              </a>
              {/* Hamburger Icon */}
              <div className="sm:hidden" onClick={() => toggleMenu(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  className=" cursor-pointer w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </li>
          </ul>
          <hr className=" text-white"></hr>
        </>
      )}
    </nav>
  );
}

function menuItem(text) {
  return (
    <li>
      <a href="#">
        <p className=" font-heading text-primary text-xl hover:text-warning">
          {text}
        </p>
      </a>
    </li>
  );
}

const currencyList = [
  {
    id: "0",
    svg: (
      <svg
        fill="#1E272E"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 440 440"
        xmlSpace="preserve"
        stroke="#1E272E"
        className="h-8 aspect-square p-2 bg-white rounded-full"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M344.33,212.5c0,103.857-80.577,189.248-182.5,196.936V197.361l151.76-55.236l-10.26-28.191l-141.5,51.502V121.38 l151.76-55.236l-10.26-28.191l-141.5,51.502V0h-30v100.374l-66.16,24.08l10.261,28.191L131.83,132.3v44.055l-66.16,24.08 l10.261,28.191l55.899-20.346V440h15c60.813,0,117.957-23.651,160.902-66.597c42.946-42.946,66.598-100.089,66.598-160.903H344.33z"></path>{" "}
        </g>
      </svg>
    ),
  },
  {
    id: "1",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 aspect-square p-1 bg-white rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    id: "2",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-8 aspect-square p-1 bg-white rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
];

export default Nav;
