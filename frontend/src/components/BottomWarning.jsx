import React from "react";
import { Link } from "react-router-dom";

function BottomWarning({ label, to, buttontext }) {
  return (
    <div className="py-2 text-sm flex justify-center">
      <div>{label}</div>
      <Link className="font-bold pointer underline cursor-pointer pl-1" to={to}>
        {buttontext}
      </Link>
    </div>
  );
}

export default BottomWarning;
