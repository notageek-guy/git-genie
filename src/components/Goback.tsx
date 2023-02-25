import { BiArrowBack } from "react-icons/bi";
const GoBack = ({ goback }: { goback: () => void }) => {
  return (
    <>
      <button
        className="px-4 py-2 text-white bg-gray-800 rounded-md"
        onClick={goback}
      >
        <BiArrowBack className="inline-block mr-2" />
        Go Back
      </button>
    </>
  );
};
export default GoBack;
