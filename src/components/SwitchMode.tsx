import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

interface SwitchProps {
  initialChecked: boolean;
  onChange?: (checked: boolean) => void;
}

const SwitchMode: React.FC<SwitchProps> = ({ initialChecked, onChange }) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div
      className={`relative inline-flex items-center cursor-pointer w-14 h-7 rounded-full transition-colors duration-300 ${
        checked ? "bg-gray-800" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`flex items-center justify-center w-6 h-6 rounded-full absolute transition-transform duration-300
            ${checked ? "translate-x-7" : "translate-x-1"} ${
          checked ? "bg-black" : "bg-white"
        }`}
      >
        {!checked ? <FiSun /> : <FiMoon />}
      </div>
    </div>
  );
};

export default SwitchMode;
