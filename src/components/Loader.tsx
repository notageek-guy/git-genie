import React from "react";

import { FaSpinner } from "react-icons/fa";
export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <FaSpinner className="w-10 h-10 text-blue-500 animate-spin" />
    </div>
  );
}
