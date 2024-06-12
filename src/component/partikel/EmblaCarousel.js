import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import ClassNames from "embla-carousel-class-names";

// Import videos from assets folder
import video1 from "../../assets/video/section 2/Rayhan2-16.mp4";
import video2 from "../../assets/video/section 2/Rayhan2-17.mp4";
import video3 from "../../assets/video/section 2/Rayhan2-18.mp4";
import video4 from "../../assets/video/section 2/Rayhan2-19.mp4";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()]);

  const videos = [video1, video2, video3, video4];

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {videos.map((videoSrc, index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <video
                className="embla__slide__video"
                controls
                src={videoSrc}
                alt={`Video ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
