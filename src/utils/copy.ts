import { toast } from "react-toastify";
const copy = () => {
  toast.success("Copied to clipboard", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default copy;
