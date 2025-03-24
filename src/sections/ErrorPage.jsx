import { useRouteError } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-5 bg-primary p-4 text-base-100 3xl:gap-16"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-center  text-5xl font-bold 3xl:text-[10rem]">
          Oops!
        </h1>
        <hr className="w-80 3xl:w-[40rem]"></hr>
      </div>
      <p className="text-center  text-3xl 3xl:text-[5rem]">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-center  3xl:text-[3rem]">
        <i>{error.statusText || error.message}</i>
      </p>
      <hr className="w-72 3xl:w-[40rem]"></hr>
      <a
        href="mailto:gorkemserin@outlook.com"
        aria-label=" Contact me about the error."
        className="flex gap-4 justify-center items-center text-lg 3xl:text-[3rem]"
      >
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
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        Please contact me about your issue.
      </a>
      <Link to="/OakTravel" className="flex items-center justify-between gap-4">
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
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <button aria-label="Go back home"> Go back to home</button>
      </Link>
    </div>
  );
}
