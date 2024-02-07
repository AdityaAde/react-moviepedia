import React from "react";

function HeaderComponent() {
  return (
    <header>
      <div className=" bg-black text-white w-full px-7 py-8 justify-between flex">
        <h1 className="text-xl font-bold">Moviepedia</h1>
        <form action="">
          {" "}
          <input
            className="px-4 py-1 rounded-full text-black"
            type="text"
            placeholder="Search movies....."
          />
        </form>
      </div>
    </header>
  );
}

export default HeaderComponent;
