import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [ClassNames()])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide embla__class-names" key={index}>
              <img
                className="embla__slide__img"
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
