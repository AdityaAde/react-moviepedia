import React from "react";

function TraillerVideo() {
  return (
    <div className="flex-col justify-center items-center min-h-60vh mx-auto flex">
      <div className="h-[30rem] w-[50rem]">
        <h1 className=" text-xl text-white font-semibold">Official Trailler</h1>
        <div className="aspect-video flex  w-full h-full mt-4">
          <iframe
            className=" h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
            width="100%"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default TraillerVideo;
