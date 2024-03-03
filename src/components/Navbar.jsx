import React from "react";

function Navbar() {
  return (
    <section>
      <nav className="px-4 py-4 font-semibold text-md  fixed top-0 w-full z-10 bg-[#121212] bg-opacity-90">
        <div className="flex flex-row justify-between text-white">
          <div>Moviepedia</div>
          <div className="flex flex-row space-x-4 text-opacity-50">
            <h1>Home</h1>
            <h1>Movies</h1>
            <h1>TV Series</h1>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
