export const products = [
  {
    slug: 'cushion',
    name: 'Cushion',
    preview: 'Soft-fill decorative cushions with premium fabric finish.',
    description:
      'Available in modern prints, textured solids, and festive styles for sofas, beds, and lounges.',
    useCases: ['Living room styling', 'Hotel lounge setup', 'Accent decor upgrade']
  },
  {
    slug: 'pillow',
    name: 'Pillow',
    preview: 'Comfort-focused pillows with balanced loft and support.',
    description:
      'Designed for daily comfort with breathable outer fabric and durable stitching for longer life.',
    useCases: ['Home bedding', 'Guest room setup', 'Hospitality supply']
  },
  {
    slug: 'cushion-cover',
    name: 'Cushion Cover',
    preview: 'Designer cushion covers with zip fit and clean edges.',
    description:
      'Mix-and-match cover options in embroidered, printed, and jacquard patterns for quick seasonal refresh.',
    useCases: ['Sofa revamp', 'Festive collection', 'Retail display']
  },
  {
    slug: 'doormat',
    name: 'Doormat',
    preview: 'Durable doormats designed to trap dust and moisture effectively.',
    description:
      'Functional entry mats in modern patterns and anti-slip bases for home and commercial entrances.',
    useCases: ['Main door entry', 'Office entrance', 'Utility zones']
  },
  {
    slug: 'carpet',
    name: 'Carpet',
    preview: 'Soft-touch carpets that elevate comfort and interior aesthetics.',
    description:
      'Area carpets and runner styles available in multiple textures, tones, and easy-care constructions.',
    useCases: ['Living room decor', 'Bedroom comfort', 'Hotel corridors']
  },
  {
    slug: 'table-cover',
    name: 'Table Cover',
    preview: 'Table covers that protect surfaces and enhance presentation.',
    description:
      'From casual family dining to formal events, these covers combine utility, style, and easy maintenance.',
    useCases: ['Dining table protection', 'Event setup', 'Restaurant use']
  },
  {
    slug: 'table-mat',
    name: 'Table Mat',
    preview: 'Anti-slip mats that keep table settings neat and elegant.',
    description:
      'Crafted for everyday meals with heat-resistant texture and modern colorways.',
    useCases: ['Daily dining', 'Cafe service', 'Corporate pantry']
  },
  {
    slug: 'mattress-protector',
    name: 'Mattress Protector',
    preview: 'Water-resistant protectors for hygiene and mattress life.',
    description:
      'Fitted protectors with breathable layers that guard against spills, dust, and wear without noise.',
    useCases: ['Family beds', 'Rental apartments', 'Hotels and hostels']
  },
  {
    slug: 'fridge-top',
    name: 'Fridge Top',
    preview: 'Decorative and protective top covers for refrigerators.',
    description:
      'Utility-friendly top covers with side pockets for storing kitchen essentials and tools.',
    useCases: ['Kitchen organization', 'Surface protection', 'Compact homes']
  },
  {
    slug: 'fridge-roll',
    name: 'Fridge Roll',
    preview: 'Multi-purpose fridge rolls for shelves and storage spaces.',
    description:
      'Cut-to-size rolls that keep shelves clean, fresh, and easier to maintain.',
    useCases: ['Refrigerator shelves', 'Kitchen drawers', 'General storage']
  },
  {
    slug: 'towel',
    name: 'Towel',
    preview: 'Highly absorbent towels in soft and quick-dry variants.',
    description:
      'A complete towel line for home and institutional use with colorfast and skin-friendly fabric.',
    useCases: ['Bath collection', 'Spa and salon', 'Bulk hospitality']
  },
  {
    slug: 'bedsheet',
    name: 'Bedsheet',
    preview: 'Printed and solid bedsheets for modern bedroom styling.',
    description:
      'Wrinkle-friendly sheets in multiple thread counts and sizes, built for comfort and repeat wash cycles.',
    useCases: ['Master bedroom', 'Guest bedroom', 'Retail bedding sets']
  },
  {
    slug: 'yoga-mat',
    name: 'Yoga Mat',
    preview: 'Comfort-cushion yoga mats with anti-slip grip and easy roll storage.',
    description:
      'Practice-friendly mats that support stability, hygiene, and long-term flexibility for daily sessions.',
    useCases: ['Home workouts', 'Yoga studio', 'Travel fitness']
  },
  {
    slug: 'ac-curtain',
    name: 'AC Curtain',
    preview: 'Energy-saving AC curtains for temperature retention and privacy.',
    description:
      'Dense curtain fabrics that help reduce cool-air leakage while adding a clean, modern room finish.',
    useCases: ['Room partitioning', 'Cooling efficiency', 'Commercial cabins']
  },
  {
    slug: 'sofa-cover',
    name: 'Sofa Cover',
    preview: 'Stretchable and fitted sofa covers for quick furniture transformation.',
    description:
      'Protective sofa covers in multiple sizes and styles for a neat look with easy wash maintenance.',
    useCases: ['Sofa protection', 'Rental homes', 'Seasonal decor change']
  },
  {
    slug: 'sofa-pannel',
    name: 'Sofa Pannel',
    preview: 'Decorative sofa panne fabrics with rich drape and visual depth.',
    description:
      'Premium panne options suited for accent styling and custom furniture finishing.',
    useCases: ['Accent upholstery', 'Decorative sofas', 'Designer interiors']
  }
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
