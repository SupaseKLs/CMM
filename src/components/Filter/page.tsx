"use client"
import React, { useState } from "react";
import { DropdownFilter } from "@/components/ui/filter";
import { RefreshCcw } from "lucide-react";

// Define the types for the props
interface FilterProps {
  categories: string[];
  prices: string[];
  brands: string[];
  categoryPlaceholder: string;
  pricePlaceholder: string;
  brandPlaceholder: string;
}

function Filter({
  categories,
  prices,
  brands,
  categoryPlaceholder,
  pricePlaceholder,
  brandPlaceholder,
}: FilterProps) {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [priceFilters, setPriceFilters] = useState<string[]>([]);
  const [brandFilters, setBrandFilters] = useState<string[]>([]);

  const onResetFilters = () => {
    setCategoryFilters([]);
    setPriceFilters([]);
    setBrandFilters([]);
  };

  return (
    <div className="min-h-full bg-gray-100 p-2">
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between gap-6">
          {/* Left side (3 Dropdowns) */}
          <div className="grid grid-cols-3 gap-4 w-[45%]">
            <DropdownFilter
              options={categories}
              selectedOptions={categoryFilters}
              onChange={setCategoryFilters}
              placeholder={categoryPlaceholder}
            />
            <DropdownFilter
              options={prices}
              selectedOptions={priceFilters}
              onChange={setPriceFilters}
              placeholder={pricePlaceholder}
            />
            <DropdownFilter
              options={brands}
              selectedOptions={brandFilters}
              onChange={setBrandFilters}
              placeholder={brandPlaceholder}
            />
          </div>

          {/* Right side (Reset Button) */}
          <div className="w-[15%] self-start">
            <button
              onClick={onResetFilters}
              className="flex items-center justify-center gap-2 w-full border border-gray-300 bg-white text-black py-2 rounded-lg"
            >
              Reset Filters
              <RefreshCcw size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
