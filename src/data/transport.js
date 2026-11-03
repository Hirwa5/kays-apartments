// ─────────────────────────────────────────────────────────────
// Transport page content: the "Why choose our transport" cards.
// Icons come from https://lucide.dev/icons
// ─────────────────────────────────────────────────────────────
import { Clock, CarFront, ShieldCheck, UserCheck } from 'lucide-react';

export const transportFeatures = [
  {
    title: '24/7 Availability',
    icon: Clock,
    description: 'Early-morning arrival or late-night flight, we are available around the clock for pickups and drop-offs.'
  },
  {
    title: 'Premium vehicles',
    icon: CarFront,
    description: 'Clean, comfortable and well-kept vehicles with room for you, your family and your luggage.'
  },
  {
    title: 'Safety',
    icon: ShieldCheck,
    description: 'Careful, calm driving and a vehicle you can trust, so you arrive at your apartment relaxed.'
  },
  {
    title: 'Professional drivers',
    icon: UserCheck,
    description: 'Friendly, experienced drivers who know Kigali well and meet you on time at arrivals.'
  }
];
