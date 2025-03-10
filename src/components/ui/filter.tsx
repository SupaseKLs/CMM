import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

interface DropdownFilterProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

export function DropdownFilter({    
  options,
  selectedOptions,
  onChange,
  placeholder = 'Select options...'
}: DropdownFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    const newSelected = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    onChange(newSelected);
  };

  const removeOption = (optionToRemove: string) => {
    onChange(selectedOptions.filter(option => option !== optionToRemove));
  };

  return (
    <div className="relative w-44">
      <button
        type="button"
        className="w-full px-4 py-2.5 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {selectedOptions.length > 0 ? (
              selectedOptions.map(option => (
                <span
                  key={option}
                  className="inline-flex items-center px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-sm"
                >
                  {option}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(option);
                    }}
                    className="ml-1 hover:text-blue-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))
            ) : (
              <span className="text-gray-500">{placeholder}</span>
            )}
          </div>
          <ChevronDown
            size={20}
            className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="py-1 max-h-60 overflow-auto">
            {options.map(option => (
              <div
                key={option}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleOption(option)}
              >
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3">{option}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}