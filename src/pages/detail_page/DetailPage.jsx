import React from "react";

function DetailPage() {
  return (
    <section>
      <div className="min-h-screen bg-opacity-90 text-white">
        <div className="h-screen flex w-full bg-slate-500 space-x-8 items-center">
          <div className="flex w-full space-x-12 flex-row h-80 justify-center items-center">
            <img
              src={`https://m.media-amazon.com/images/M/MV5BMTEyOTQzZjgtMDM1OC00MWMxLWI2ZGUtYWUwOTQxNTRmZTU0XkEyXkFqcGdeQXVyNTU1MDIzMzg@._V1_FMjpg_UX1000_.jpg`}
              alt="No Way Up"
              className=" w-64 rounded-md"
            />
            <div className="space-y-4 mt-auto">
              <h1 className="text-3xl font-semibold">No Way Up</h1>
              <div className="flex-row space-x-2">
                <p className="border rounded-full inline-block px-4 text-center ">
                  Action
                </p>
                <p className="border rounded-full inline-block px-4 text-center ">
                  Comedy
                </p>
                <p className="border rounded-full inline-block px-4 text-center ">
                  Slice of Life
                </p>
              </div>
              <h1 className=" max-w-xl">
                Characters from different backgrounds are thrown together when
                the plane they're travelling on crashes into the Pacific Ocean.
                A nightmare fight for survival ensues with the air supply
                running out and dangers creeping in from all sides.
              </h1>
              <h1 className="text-xl font-bold">Top Casts</h1>
              <div className="flex space-x-4">
                <div className="flex flex-col">
                  <div className=" h-20 w-16 max-w-40 rounded-md bg-slate-400" />
                  <p className="mx-auto mt-2 text-opacity-50 text-white line-clamp-2 text-center w-16">
                    Aditya Ade
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className=" h-20 w-16 max-w-40 rounded-md bg-slate-400" />
                  <p className="mx-auto mt-2 text-opacity-50 text-white line-clamp-2 text-center w-16">
                    Maylida Dwi Chairunnisa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
