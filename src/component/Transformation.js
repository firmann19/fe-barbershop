import React from "react";
import EmblaCarousel from "./partikel/EmblaCarousel";

const OPTIONS = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Transformation() {
  return (
    <section className="bg-[#0E0E0E]">
      <div className="py-20">
        <h2 className="font-bold text-center text-[64px] bg-clip-text text-transparent bg-gradient-to-r from-[#19F456] via-[#44D140] to-[#A1FF80] mb-10">
          TRANSFORMATION
        </h2>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}

export default Transformation;
