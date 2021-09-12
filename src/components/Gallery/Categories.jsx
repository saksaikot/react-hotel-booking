import React from "react";
export default function Categories({ list, handleFilter }) {
  return (
    <div className=" my-2">
      <button
        onClick={() => handleFilter("all")}
        type="button"
        className="btn btn-light text-capitalize mx-2"
      >
        all
      </button>
      {list.map((item) => (
        <button
          key={item.name}
          onClick={() => handleFilter(item.name)}
          type="button"
          className="btn btn-light text-capitalize  mx-2"
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
