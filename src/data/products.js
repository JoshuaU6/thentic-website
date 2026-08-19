export const WHATSAPP_NUMBER = '2349029378047';
export const CONTACT_EMAIL = 'thenticmix@gmail.com';

export const products = [
  {
    id: 1,
    slug: 'lagos-long-island',
    name: 'Lagos Long Island',
    type: 'cocktail',
    price: 8000,
    tagline: 'Bold and iconic.',
    description: 'A legendary cocktail with five premium spirits, perfectly balanced with fresh citrus and a splash of cola. Strong, smooth and unforgettable.',
    flavourNotes: ['Vodka, Gin, Rum, Tequila', 'Fresh citrus', 'Cola finish'],
    color: '#8B6914',
    accentLight: '#D4A820',
    image: '/src/assets/products/lagos-long-island.jpg',
  },
  {
    id: 2,
    slug: 'elderflower-gin-tonic',
    name: 'Elderflower Gin & Tonic',
    type: 'cocktail',
    price: 8000,
    tagline: 'Floral and crisp.',
    description: 'A delicate mix of gin, elderflower and tonic for a refreshing experience. Elegant, light, and perfectly balanced.',
    flavourNotes: ['Elderflower', 'Juniper gin', 'Tonic fizz'],
    color: '#2D5A27',
    accentLight: '#5A9E52',
    image: null,
  },
  {
    id: 3,
    slug: 'whiskey-sour',
    name: 'Whiskey Sour',
    type: 'cocktail',
    price: 8000,
    tagline: 'Bold and tangy.',
    description: 'A perfectly balanced cocktail crafted with zesty lemon and smooth whiskey for a refreshingly tangy, timeless experience.',
    flavourNotes: ['Smooth whiskey', 'Zesty lemon', 'Balanced bitters'],
    color: '#A0501A',
    accentLight: '#D4782A',
    image: '/src/assets/products/whiskey-sour.jpg',
  },
  {
    id: 4,
    slug: 'ikoyi-nights',
    name: 'Ikoyi Nights',
    type: 'cocktail',
    price: 8000,
    tagline: 'Citrusy and vibrant.',
    description: 'A smooth, vibrant blend inspired by the luxury and energy of Ikoyi nightlife. Light, refreshing, and made for endless evenings.',
    flavourNotes: ['Vodka base', 'Citrus notes', 'Clean finish'],
    color: '#1A2E5C',
    accentLight: '#3A5EA0',
    image: '/src/assets/products/ikoyi-nights.jpg',
  },
  {
    id: 5,
    slug: 'passion-fruit-mojito',
    name: 'Passion Fruit Mojito',
    type: 'cocktail',
    price: 8000,
    tagline: 'Fresh. Tropical. Irresistible.',
    description: 'A vibrant cocktail crafted with white rum, tropical passion fruit and refreshing mint notes. Fresh, fruity, with the perfect balance of sweetness and citrus.',
    flavourNotes: ['White rum', 'Passion fruit', 'Fresh mint'],
    color: '#7B1A8B',
    accentLight: '#B040D0',
    image: '/src/assets/products/passion-fruit-mojito.jpg',
  },
  {
    id: 6,
    slug: 'tequila-mix',
    name: 'Tequila Mix',
    type: 'cocktail',
    price: 8000,
    tagline: 'Luxury in every sip.',
    description: 'A refined blend of premium tequila with natural flavours, delivering a smooth, vibrant and clean refreshing finish. Perfectly balanced and designed to elevate every celebration.',
    flavourNotes: ['Premium tequila', 'Natural flavours', 'Vibrant finish'],
    color: '#6B8B14',
    accentLight: '#A0C020',
    image: null,
  },
  {
    id: 7,
    slug: 'shirley-temple',
    name: 'Shirley Temple',
    type: 'mocktail',
    price: 6000,
    tagline: 'Sweet. Sparkling. Timeless.',
    description: 'A classic sparkling mocktail crafted with cherry and citrus flavours. Light, refreshing and perfectly balanced for every celebration.',
    flavourNotes: ['Cherry', 'Citrus', 'Sparkling finish'],
    color: '#C41E1E',
    accentLight: '#E84040',
    image: '/src/assets/products/shirley-temple.jpg',
  },
  {
    id: 8,
    slug: 'citrus-sunset',
    name: 'Citrus Sunset',
    type: 'mocktail',
    price: 6000,
    tagline: 'Bright and refreshing.',
    description: 'A citrus blend with tropical notes for the perfect pick-me-up. Sunshine in a can, vibrant, uplifting, and delicious.',
    flavourNotes: ['Orange citrus', 'Tropical passion', 'Uplifting fizz'],
    color: '#D4600A',
    accentLight: '#F0882A',
    image: null,
  },
];

export const cocktails = products.filter(p => p.type === 'cocktail');
export const mocktails = products.filter(p => p.type === 'mocktail');

export function getWhatsAppLink(productName = '') {
  const msg = productName
    ? `Hi Thentic! I'd like to order ${productName}. Please share more details.`
    : `Hi Thentic! I'd like to place an order. Please share more details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}