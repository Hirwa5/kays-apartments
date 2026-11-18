import { images } from './images';

export const unitTypes = {
  oneBedroom: {
    key: 'oneBedroom',
    tag: 'Single',
    label: 'One-bedroom apartment',
    shortLabel: 'One-bedroom',
    bedrooms: 1,
    bathrooms: 1,
    price: 40
  },
  twoBedroom: {
    key: 'twoBedroom',
    tag: 'Double',
    label: 'Two-bedroom apartment',
    shortLabel: 'Two-bedroom',
    bedrooms: 2,
    bathrooms: 2,
    price: 45
  }
};

const ALL_AMENITIES = ['wifi', 'parking', 'kitchen', 'airport'];

export const units = [
  {
    id: 'unit-1',
    number: '01',
    type: 'oneBedroom',
    image: images.unit1,
    amenities: ALL_AMENITIES,
    description:
      'A quiet one-bedroom apartment for solo travellers and couples, with a comfortable bedroom, a lounge to unwind in and a furnished kitchen.'
  },
  {
    id: 'unit-2',
    number: '02',
    type: 'oneBedroom',
    image: images.unit2,
    amenities: ALL_AMENITIES,
    description:
      'Easy to settle into: one bedroom, a private bathroom and a furnished kitchen. A good fit for business trips and longer stays in Kigali.'
  },
  {
    id: 'unit-3',
    number: '03',
    type: 'twoBedroom',
    image: images.unit3,
    amenities: ALL_AMENITIES,
    description:
      'A spacious two-bedroom apartment with two bathrooms, so everyone has their own space. Great for families and small groups.'
  },
  {
    id: 'unit-4',
    number: '04',
    type: 'twoBedroom',
    image: images.unit4,
    amenities: ALL_AMENITIES,
    description:
      'Two bedrooms, two bathrooms and a shared living area, with a furnished kitchen for cooking your own meals.'
  },
  {
    id: 'unit-5',
    number: '05',
    type: 'twoBedroom',
    image: images.unit5,
    amenities: ALL_AMENITIES,
    description:
      'Room for the whole family: two bedrooms, two bathrooms and a lounge to relax in after a day out in Kigali.'
  },
  {
    id: 'unit-6',
    number: '06',
    type: 'twoBedroom',
    image: images.unit6,
    amenities: ALL_AMENITIES,
    description:
      'A comfortable two-bedroom home for colleagues or friends travelling together, with Wi-Fi throughout and two bathrooms.'
  },
  {
    id: 'unit-7',
    number: '07',
    type: 'twoBedroom',
    image: images.unit7,
    amenities: ALL_AMENITIES,
    description:
      'Two bedrooms and two bathrooms with a furnished kitchen and living space. A practical choice for longer stays.'
  },
  {
    id: 'unit-8',
    number: '08',
    type: 'twoBedroom',
    image: images.unit8,
    amenities: ALL_AMENITIES,
    description:
      'A two-bedroom apartment with two bathrooms, a parking space and airport pickup available when you arrive.'
  }
];

export const getUnitType = (unit) => unitTypes[unit.type];

export const getUnitTitle = (unit) => `Unit ${unit.number} · ${unitTypes[unit.type].label}`;

export const unitsOfType = (typeKey) => units.filter((u) => u.type === typeKey);

export const lowestPrice = Math.min(...Object.values(unitTypes).map((t) => t.price));

export const unitInterestGroups = [
  {
    label: 'Apartment type',
    options: [
      { value: 'any', label: 'Not sure yet: show me what is available' },
      ...Object.values(unitTypes).map((t) => ({
        value: `type:${t.key}`,
        label: `Any ${t.shortLabel.toLowerCase()} (${t.tag}) · $${t.price} / night`
      }))
    ]
  },
  {
    label: 'Specific unit',
    options: units.map((u) => ({ value: u.id, label: getUnitTitle(u) }))
  }
];

export function unitInterestLabel(value) {
  for (const group of unitInterestGroups) {
    const match = group.options.find((o) => o.value === value);
    if (match) return match.label;
  }
  return '';
}
