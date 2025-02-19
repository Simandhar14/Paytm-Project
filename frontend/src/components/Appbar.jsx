import React from "react";

function Appbar() {
  return (
    <div className="shadow h-14 flex justify-between items-center md:px-10">
      <div className="flex flex-col justify-center h-full ml-4">PayTm App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
