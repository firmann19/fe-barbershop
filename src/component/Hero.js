import React from "react";
import BgHero from "../assets/bg-hero.png";

function Hero() {
  return (
    <section>
      <div
        class="relative h-screen overflow-hidden bg-cover bg-no-repeat p-12"
        style={{
          backgroundImage: `url(${BgHero})`,
          backgroundSize: "1464px 762px",
        }}
      >
        <div
          className="rounded-[49px] border-2 border-[#ffff] mt-10 mb-20 ms-20"
          style={{
            width: "694px",
            height: "301px",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        >
          <div className="ms-10">
            <h4 className="font-bold text-[64px] text-[#42FF00]">
              HI, I’M RAYHAN
            </h4>
            <p className="font-semibold text-[24px] text-white">
              BEST BARBER IN MELBOURNE
            </p>
            <p className="text-[20px] text-white mt-10">
              I am specializing in design and it only takes one click to change
              everything including your look.
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-5 ms-20">
          <button
            type="button"
            className="text-white border border-[#ffff] hover:bg-white hover:text-black font-bold rounded-full text-[24px] text-center transition-transform transform hover:scale-105 hover:shadow-lg bg-[rgba(0,0,0,0.4)]"
            style={{
              width: "241px",
              height: "70.02px",
            }}
          >
            HAIR
          </button>
          <button
            type="button"
            className="text-white border border-[#ffff] hover:bg-white hover:text-black font-bold rounded-full text-[24px] text-center transition-transform transform hover:scale-105 hover:shadow-lg bg-[rgba(0,0,0,0.4)]"
            style={{
              width: "241px",
              height: "70.02px",
            }}
          >
            HAIR & BEARD
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
