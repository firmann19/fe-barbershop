import React from "react";
import reviews1 from "../assets/reviews-1.jpeg";
import reviews2 from "../assets/reviews-2.jpeg";
import reviews3 from "../assets/reviews-3.jpeg";
import reviews4 from "../assets/reviews-4.jpeg";

function Reviews() {
  return (
    <section className="bg-[#0E0E0E]">
      <h2 className="font-bold text-center text-[64px] bg-clip-text text-transparent bg-gradient-to-r from-[#19F456] via-[#44D140] to-[#A1FF80]">
        REVIEWS
      </h2>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="bg-gradient-to-r from-[#21370B] to-[#89F41F] rounded-[41px] py-1 px-1 mx-auto">
          <div className="max-w-[298px] h-[417px] mx-auto bg-[#0F2209] rounded-[41px] overflow-hidden shadow-lg ">
            <div className="text-center my-4">
              <img
                className="h-32 w-32 rounded-full mx-auto my-4"
                src={reviews1}
                alt=""
              />
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.04893 3.92707C9.34828 3.00576 10.6517 3.00576 10.951 3.92707L12.0206 7.21886C12.1545 7.63089 12.5384 7.90985 12.9717 7.90985H16.4329C17.4016 7.90985 17.8044 9.14946 17.0207 9.71886L14.2205 11.7533C13.87 12.0079 13.7233 12.4593 13.8572 12.8713L14.9268 16.1631C15.2261 17.0844 14.1717 17.8506 13.3879 17.2812L10.5878 15.2467C10.2373 14.9921 9.76269 14.9921 9.4122 15.2467L6.61203 17.2812C5.82832 17.8506 4.77384 17.0844 5.07319 16.1631L6.14276 12.8713C6.27663 12.4593 6.12997 12.0079 5.77949 11.7533L2.97932 9.71886C2.1956 9.14946 2.59838 7.90985 3.5671 7.90985H7.0283C7.46153 7.90985 7.84548 7.63089 7.97936 7.21886L9.04893 3.92707Z"
                      fill="#00FF29"
                      style={{
                        background:
                          "linear-gradient(90deg, #21370B 100%, #89F41F 100%)",
                      }}
                    />
                  </svg>
                ))}
              </div>
              <h3 className="text-white  text-center leading-[28px] text-[20px] font-medium pt-5">
                "BEST BARBER"
              </h3>
              <p className="text-sm  text-center mt-[8px] text-white px-4">
                Josh is the best barber I've found in Melbourne! Perfect cut,
                great atmosphere, and friendly service. Can't ask for more!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#21370B] to-[#89F41F] rounded-[41px] py-1 px-1 mx-auto">
          <div className="max-w-[298px] h-[417px] mx-auto bg-[#0F2209] rounded-[41px] overflow-hidden shadow-lg">
            <div className="text-center my-4 ">
              <img
                className="h-32 w-32 rounded-full mx-auto my-4"
                src={reviews2}
                alt=""
              />
              <div className="flex gap-1  justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.04893 3.92707C9.34828 3.00576 10.6517 3.00576 10.951 3.92707L12.0206 7.21886C12.1545 7.63089 12.5384 7.90985 12.9717 7.90985H16.4329C17.4016 7.90985 17.8044 9.14946 17.0207 9.71886L14.2205 11.7533C13.87 12.0079 13.7233 12.4593 13.8572 12.8713L14.9268 16.1631C15.2261 17.0844 14.1717 17.8506 13.3879 17.2812L10.5878 15.2467C10.2373 14.9921 9.76269 14.9921 9.4122 15.2467L6.61203 17.2812C5.82832 17.8506 4.77384 17.0844 5.07319 16.1631L6.14276 12.8713C6.27663 12.4593 6.12997 12.0079 5.77949 11.7533L2.97932 9.71886C2.1956 9.14946 2.59838 7.90985 3.5671 7.90985H7.0283C7.46153 7.90985 7.84548 7.63089 7.97936 7.21886L9.04893 3.92707Z"
                      fill="#00FF29"
                      style={{
                        background:
                          "linear-gradient(90deg, #21370B 100%, #89F41F 100%)",
                      }}
                    />
                  </svg>
                ))}
              </div>
              <h3 className="text-white  text-center leading-[28px] text-[20px] font-medium pt-5">
                "AWESOME EXPERIENCE"
              </h3>
              <p className="text-sm  text-center mt-[8px] text-white px-4">
                Great service and amazing haircut! Josh really knows his stuff
                and makes sure you're comfortable. Definitely coming back.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#21370B] to-[#89F41F] rounded-[41px] py-1 px-1 mx-auto">
          <div className="max-w-[298px] h-[417px] mx-auto bg-[#0F2209] rounded-[41px] overflow-hidden shadow-lg">
            <div className="text-center my-4 ">
              <img
                className="h-32 w-32 rounded-full mx-auto my-4"
                src={reviews3}
                alt=""
              />
              <div className="flex gap-1  justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.04893 3.92707C9.34828 3.00576 10.6517 3.00576 10.951 3.92707L12.0206 7.21886C12.1545 7.63089 12.5384 7.90985 12.9717 7.90985H16.4329C17.4016 7.90985 17.8044 9.14946 17.0207 9.71886L14.2205 11.7533C13.87 12.0079 13.7233 12.4593 13.8572 12.8713L14.9268 16.1631C15.2261 17.0844 14.1717 17.8506 13.3879 17.2812L10.5878 15.2467C10.2373 14.9921 9.76269 14.9921 9.4122 15.2467L6.61203 17.2812C5.82832 17.8506 4.77384 17.0844 5.07319 16.1631L6.14276 12.8713C6.27663 12.4593 6.12997 12.0079 5.77949 11.7533L2.97932 9.71886C2.1956 9.14946 2.59838 7.90985 3.5671 7.90985H7.0283C7.46153 7.90985 7.84548 7.63089 7.97936 7.21886L9.04893 3.92707Z"
                      fill="#00FF29"
                      style={{
                        background:
                          "linear-gradient(90deg, #21370B 100%, #89F41F 100%)",
                      }}
                    />
                  </svg>
                ))}
              </div>
              <h3 className="text-white  text-center leading-[28px] text-[20px] font-medium pt-5">
                "TOP-NOTCH SERVICE"
              </h3>
              <p className="text-sm  text-center mt-[8px] text-white px-4">
                Excellent service and professional staff. Josh always provides
                high-quality haircuts. I highly recommend his services.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#21370B] to-[#89F41F] rounded-[41px] py-1 px-1 mx-auto">
          <div className="max-w-[298px] h-[417px] mx-auto bg-[#0F2209] rounded-[41px] overflow-hidden shadow-lg">
            <div className="text-center my-4 ">
              <img
                className="h-32 w-32 rounded-full mx-auto my-4"
                src={reviews4}
                alt=""
              />
              <div className="flex gap-1  justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M9.04893 3.92707C9.34828 3.00576 10.6517 3.00576 10.951 3.92707L12.0206 7.21886C12.1545 7.63089 12.5384 7.90985 12.9717 7.90985H16.4329C17.4016 7.90985 17.8044 9.14946 17.0207 9.71886L14.2205 11.7533C13.87 12.0079 13.7233 12.4593 13.8572 12.8713L14.9268 16.1631C15.2261 17.0844 14.1717 17.8506 13.3879 17.2812L10.5878 15.2467C10.2373 14.9921 9.76269 14.9921 9.4122 15.2467L6.61203 17.2812C5.82832 17.8506 4.77384 17.0844 5.07319 16.1631L6.14276 12.8713C6.27663 12.4593 6.12997 12.0079 5.77949 11.7533L2.97932 9.71886C2.1956 9.14946 2.59838 7.90985 3.5671 7.90985H7.0283C7.46153 7.90985 7.84548 7.63089 7.97936 7.21886L9.04893 3.92707Z"
                      fill="#00FF29"
                      style={{
                        background:
                          "linear-gradient(90deg, #21370B 100%, #89F41F 100%)",
                      }}
                    />
                  </svg>
                ))}
              </div>
              <h3 className="text-white  text-center leading-[28px] text-[20px] font-medium pt-5">
                "FRIENDLY & PROFESSIONAL"
              </h3>
              <p className="text-sm  text-center mt-[8px] text-white px-4">
                Josh offers friendly, professional service and consistently
                great haircuts. His attention to detail is unparalleled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
