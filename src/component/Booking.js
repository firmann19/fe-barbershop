import React from "react";

function Booking() {
  return (
    <div className="bg-[#0E0E0E] flex justify-center items-center min-h-screen">
      <div
        className="bg-gradient-to-r from-[#00FF38] to-green-0 rounded-[41px] py-1 px-1 mx-auto"
        style={{ marginTop: "80px", marginBottom: "80px" }}
      >
        <div
          className="mx-auto bg-[#0E0E0E] rounded-[41px] overflow-hidden shadow-lg "
          style={{ width: "1028px", height: "634px" }}
        >
          <div className="mx-20 my-20">
            <h4 className="font-bold text-[64px] text-white">
              BOOK AN APPOINTMENT NOW.
            </h4>
            <h4 className="font-bold text-[64px] text-white">
              <span className="text-[#24FF00]">LIMITED</span> SLOT ONLY!
            </h4>
            <p className="text-center text-[32px] text-white mt-20">
              Life is too short to get a bad haircut.
            </p>
            <div className="flex gap-4 justify-center mt-5">
              <button
                type="button"
                className="text-white border border-[#24FF00] hover:bg-[#24FF00] font-bold rounded-full text-[24px] text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                style={{ width: "241px", height: "70.02px" }}
              >
                HAIR
              </button>
              <button
                type="button"
                className="text-white border border-[#24FF00] hover:bg-[#24FF00] font-bold rounded-full text-[24px] text-center transition-transform transform hover:scale-105 hover:shadow-lg"
                style={{ width: "241px", height: "70.02px" }}
              >
                HAIR & BEARD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
