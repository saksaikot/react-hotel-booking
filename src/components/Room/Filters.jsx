import React from "react";
import Categories from "./Categories";
import DateFilter from "./DateFilter";

export default function Filters() {
  return (
    <div>
      <h1 className="text-center">Filter Rooms</h1>
      <Categories />
      <DateFilter />
    </div>
  );
}
