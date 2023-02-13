import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const Search = ({ handleOnSearchChange }) => {
  const [city, setCity] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    handleOnSearchChange(city);
    setCity("");
  };

  return (
    // <div className="w-full h-screen">
    //   <img
    //     className="w-full h-full absolute"
    //     src="https://img.freepik.com/free-photo/misty-carpathian-mountain-landscape-with-fir-forest-tops-trees-sticking-out-fog_146671-18437.jpg?w=1380&t=st=1676290465~exp=1676291065~hmac=1931a3ebfd6bec09814b74ea884811da28aa269a607d2de823140e4d4fd83c46"
    //     alt="/"
    //   />
    <div className="flex justify-center">
      <form
        onSubmit={submitHandler}
        className=" w-full max-w-[500px] flex fixed justify-center py-8"
      >
        <input
          className=" bg-slate-100/60 px-8 py-2 pr-20 text-xl text-gray-500 outline-none w-full"
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button className=" text-slate-100 font-bold bg-slate-100/60 p-2">
          <GoSearch size={30} />
        </button>
      </form>
    </div>
    // </div>
  );
};

export default Search;
