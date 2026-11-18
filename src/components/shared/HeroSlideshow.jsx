import { useRef } from 'react';
import Photo from './Photo';

export default function HeroSlideshow({ slides, active }) {
  const reached = useRef(0);
  reached.current = Math.max(reached.current, active + 1);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((slide, i) => {
        const isActive = i === active;
        return (
          <div
            key={`${slide.image}-${i}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
          >
            {i <= reached.current && (
              <Photo
                src={slide.image}
                alt=""
                loading="eager"
                className="h-full w-full !bg-ink"
                imgClassName={`transition-transform duration-[7000ms] ease-out motion-reduce:transition-none ${isActive ? 'scale-100' : 'scale-110'}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
