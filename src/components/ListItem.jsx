import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function ListItem({ listMovie }) {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <section>
      <div className="flex flex-col pt-24 px-4 py-4 space-y-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg font-semibold">Trending Movies</h1>
          <p className="text-sm border rounded-full px-4 py-1">View All</p>
        </div>

        <div class="flex relative items-center">
          <MdChevronLeft
            size={40}
            onClick={slideLeft}
            className="opacity-40 cursor-pointer hover:opacity-100"
          />
          <div
            id="slider"
            className="flex w-full h-full overflow-x-scroll scroll whitespace-normal scroll-smooth space-x-4 scrollbar-hide"
          >
            {listMovie.map((item) => (
              <div>
                <div className="flex flex-col">
                  <img
                    src={`${item.thumbnail}`}
                    alt={`${item.title}`}
                    className="h-56 w-40 max-w-40 inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-md"
                  />
                  <p className="mx-auto mt-2 text-opacity-50 text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <MdChevronRight
            size={40}
            onClick={slideRight}
            className="opacity-40 cursor-pointer hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}

export default ListItem;
