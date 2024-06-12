import React from "react";
import EmblaCarouselVideo from "./partikel/EmblaCarouselVideo";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function OurVideos() {
  return (
    <section className="bg-[#0E0E0E]">
      <div className="py-20">
        <h2 className="font-bold text-center text-[64px] bg-clip-text text-transparent bg-gradient-to-r from-[#19F456] via-[#44D140] to-[#A1FF80]">
          OUR VIDEOS
        </h2>
        <p className="text-[20px] text-white text-center">
          well known on TIktok with millions of views
        </p>
        <EmblaCarouselVideo slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

export default OurVideos;
