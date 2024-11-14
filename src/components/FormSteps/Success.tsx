import { FaRegThumbsUp } from "react-icons/fa";

export default function Success() {
  return (
    <div className="flex flex-col justify-center text-center bg-transparent">
      <FaRegThumbsUp className="text-[8rem]" />

      <h2 className="font-semibold text-2xl">Thank you!</h2>
      <p>You will get an email with further instructions</p>
    </div>
  );
}
