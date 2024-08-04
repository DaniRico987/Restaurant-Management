"use client";

import { FC, useState } from 'react';
import './addingSwitch.css';

interface SwitchItem {
  id: string;
  label: string;
}

interface SwitchGroupProps {
  items: SwitchItem[];
}

const SwitchGroup: FC<SwitchGroupProps> = ({ items = [] }) => {
  const [switchStates, setSwitchStates] = useState<Record<string, boolean>>(
    items.reduce((acc, item) => {
      acc[item.id] = false; // Inicializa todos los switches en falso
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleSwitchChange = (id: string) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id], // Alterna el estado del switch
    }));
  };

  return (
    <div className="flex justify-center items-center h-full">
  <div className="grid grid-cols-2 gap-4 p-4">
    {items.map((item) => (
      <div key={item.id} className="flex items-center space-x-4">
        <label className="flex items-center cursor-pointer space-x-2">
          <span className="text-white">{item.label}</span>
          <input
            type="checkbox"
            checked={switchStates[item.id]}
            onChange={() => handleSwitchChange(item.id)}
            className="hidden"
          />
          <span
            className={`relative w-12 h-7 flex items-center rounded-full transition-colors duration-300 ease-in-out ${
              switchStates[item.id] ? 'bg-[#FAA307]' : 'bg-[#FAA307] bg-opacity-50'
            }`}
            style={{ padding: 0 }}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 circle rounded-full shadow-md transition-transform duration-300 ease-in-out ${
                switchStates[item.id] ? 'translate-x-5' : ''
              }`}
              style={{ margin: 0 }}
            />
          </span>
        </label>
      </div>
    ))}
  </div>
</div>

  );
};

export default SwitchGroup;
