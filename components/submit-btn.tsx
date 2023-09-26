import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex w-[8rem] items-center justify-center gap-1 rounded-md 
      bg-gray-900 py-2 text-sm text-white outline-none transition-all 
      hover:scale-110 hover:bg-gray-950 focus:scale-105 active:scale-105
      disabled:scale-100 disabled:bg-opacity-60"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-80 transition-all
            group-hover:-translate-y-1
            group-hover:translate-x-1"
          />
        </>
      )}
    </button>
  );
}
