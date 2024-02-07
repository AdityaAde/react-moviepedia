import React from "react";
import { HeaderComponent } from "./components/components";

function Homepage() {
  return (
    <div>
      <HeaderComponent />

      <section>
        <div className="h-96 w-full bg-slate-500">
          <div className="relative">
            <img
              src="https://cdn.oneesports.id/cdn-data/sites/2/2023/12/Anime_DemonSlayer_TotheHashiraTrainingmovie_OfficialPoster-1024x576-1.jpg"
              alt="demon slayer"
            />

            <div class="absolute inset-0 flex items-center justify-center">
              <button
                className=" bg-red-600 px-2 py-2 text-white mx-2 rounded-md
              "
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
