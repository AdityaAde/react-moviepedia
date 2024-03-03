import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { Link } from "react-router-dom";

function ListItem({ title, listMovie }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <section className="mb-8">
      <div className="flex flex-row justify-between">
        <h1 className="text-lg font-semibold border-b-2 pb-1 border-red-500">
          {title}
        </h1>
        <p className="text-sm border rounded-full px-4 text-center flex items-center">
          View All
        </p>
      </div>
      <div className=" pt-8">
        <div class="flex relative items-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={slideLeft}
            className="opacity-40 cursor-pointer hover:opacity-100 h-6 pr-4"
          />
          <div
            id="slider"
            className="flex w-full h-full overflow-x-scroll scroll whitespace-normal scroll-smooth space-x-4 scrollbar-hide">
            {listMovie.slice(0, 12).map((item, index) => (
              <Link to="/detail-movie">
                <div className="relative" key={index}>
                  <div
                    className="flex flex-col"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}>
                    <img
                      src={`${process.env.REACT_APP_BASEIMGURL}${item.poster_path}`}
                      alt={`${item.title ?? item.name}`}
                      className="h-56 w-40 max-w-40 inline-block cursor-pointer ease-in-out duration-300 rounded-md z-0"
                    />
                    <p className="mx-auto mt-2 text-opacity-50 text-white line-clamp-1 text-center">
                      {item.title ?? item.name}
                    </p>
                    {hoveredItem === index && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 text-red-500 hover:bg-black h-[88%] w-40 hover:rounded-md hover:bg-opacity-50 transition-all opacity-100 duration-300 cursor-pointer">
                        <FontAwesomeIcon icon={faYoutube} className="h-10" />
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={slideRight}
            className="opacity-40 cursor-pointer hover:opacity-100 h-6 pl-4"
          />
        </div>
      </div>
    </section>
  );
}

export default ListItem;
