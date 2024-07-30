import React from "react";


const From = ({ onSubmit, children, valor }) => {
  return (
    <div className="w-full ">
      <form className="flex flex-col  gap-3 items-center" onSubmit={onSubmit}>
        <div className="w-[450px] h-[500px] justify-between flex flex-col">
          {children}
        </div>
        <div className="w-full justify-center flex">
          <input
            type="submit"
            className="bg-blue-400 text-white rounded-lg w-40 h-10 cursor-pointer"
            value={valor}
          />
        </div>
      </form>
    </div>
  );
};

export default From;
