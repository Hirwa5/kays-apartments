import Photo from './Photo';

/**
 * Full-size background photos that cross-fade into each other,
 * with a slow zoom on the photo being shown.
 * `active` is the index of the photo to show (controlled by the parent).
 */
export default function HeroSlideshow({ slides, active }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={`${slide.image}-${i}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            <Photo
              src={slide.image}
              alt=""
              loading="eager"
              className="h-full w-full !bg-ink"
              imgClassName={`transition-transform duration-[7000ms] ease-out motion-reduce:transition-none ${isActive ? 'scale-100' : 'scale-110'}`}
            />
          </div>
        );
      })}
    </div>
  );
}
