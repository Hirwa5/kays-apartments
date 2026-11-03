// ─────────────────────────────────────────────────────────────
// Virtual tour (Home page).
//
// Option A (default): a room-by-room photo walkthrough using `rooms`.
// Option B: when you have a video or 3D tour, paste its EMBED link in
//           `embedUrl` and it replaces the photo walkthrough, e.g.
//           YouTube:   'https://www.youtube.com/embed/VIDEO_ID'
//           Matterport:'https://my.matterport.com/show/?m=MODEL_ID'
// ─────────────────────────────────────────────────────────────
import { images } from './images';

export const tour = {
  embedUrl: '',

  rooms: [
    {
      title: 'Living room',
      subtitle: 'Relax and unwind',
      image: images.livingMain,
      description: 'Step into a bright living area with comfortable seating, a natural place to rest after a day out in Kigali.'
    },
    {
      title: 'Kitchen',
      subtitle: 'Furnished and ready',
      image: images.kitchenMain,
      description: 'The furnished kitchen is ready to use, so you can cook breakfast or a full family dinner whenever you like.'
    },
    {
      title: 'Bedroom',
      subtitle: 'Rest well',
      image: images.bedroomMain,
      description: 'Bedrooms are calm and comfortable. Two-bedroom apartments give everyone their own room.'
    },
    {
      title: 'Bathroom',
      subtitle: 'Clean and private',
      image: images.bathroomMain,
      description: 'One-bedroom units have one bathroom; two-bedroom units have two, so mornings run smoothly.'
    },
    {
      title: 'Outside & parking',
      subtitle: 'Arrive with ease',
      image: images.exterior,
      description: 'Find us on KK 393 St in Kicukiro, with a parking space for your car and airport pickup on request.'
    }
  ]
};
