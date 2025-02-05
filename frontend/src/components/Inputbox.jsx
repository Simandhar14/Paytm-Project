import React from "react";

function Inputbox({ placeholder, label, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border-slate-200"
      />
    </div>
  );
}

export default Inputbox;
