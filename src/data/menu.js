/**
 * Official Centralized Menu Catalogue for Leaf & Lush (Leaf'nLush)
 * Handpicked & Hygienic • No Preservatives • No Added Sugar • 100% Pure Goodness
 */

export const categories = [
  { id: "all", name: "All Items", icon: "Sparkles", accent: "leaf" },
  { id: "Fruit Bowls", name: "Fruit Bowls (400gm)", icon: "Apple", accent: "leaf" },
  { id: "Fruit Cups", name: "Fruit Cups (200gm)", icon: "CupSoda", accent: "citrus" },
  { id: "Veg Salads", name: "Veg Steam Salads (400gm)", icon: "Sprout", accent: "leaf" },
  { id: "Subscriptions", name: "Monthly Plans 📅", icon: "Flame", accent: "gold" },
];

export const menuItems = [
  {
    id: "premium-fruit-cup",
    name: "Premium Fruit Cup",
    subtitle: "Premium Fruits Salad",
    weight: "200gm",
    category: "Fruit Cups",
    price: 89,
    description: "Exotic kiwi, blueberries, strawberry, avocado, dragon fruit, pineapple & melon in a fresh on-the-go cup.",
    image: "/images/products/premium-fruit-cup.jpg",
    isBestseller: true,
    dietary: "vegan",
    goldBadge: "TOP PICK",
    prepTime: "2 mins",
    rating: 5.0,
    reviewsCount: 380,
    highlights: ["200gm Fresh Cup", "Exotic Superfoods", "No Added Sugar"]
  },
  {
    id: "seasonal-fruit-salad-bowl",
    name: "Seasonal Fruit Salad Bowl",
    subtitle: "Mix Fruit Salad",
    weight: "400gm",
    category: "Fruit Bowls",
    price: 89,
    description: "Generous 400gm bowl of crisp watermelon, sweet papaya, banana, apple, dragon fruit & pomegranate seeds.",
    image: "/images/products/seasonal-fruit-salad-bowl.jpg",
    isBestseller: true,
    dietary: "vegan",
    goldBadge: "BEST VALUE",
    prepTime: "3 mins",
    rating: 4.9,
    reviewsCount: 520,
    highlights: ["400gm Bowl", "100% Pure Fruit", "Rich Hydration"]
  },
  {
    id: "premium-fruit-salad-bowl",
    name: "Premium Fruit Salad Bowl",
    subtitle: "Premium Fruit Salad",
    weight: "400gm",
    category: "Fruit Bowls",
    price: 119,
    description: "Luxury 400gm bowl featuring fresh strawberries, blueberries, kiwi, dragon fruit, mango, avocado, pineapple, apple & fresh mint.",
    image: "/images/products/premium-fruit-salad-bowl.jpg",
    isBestseller: true,
    dietary: "vegan",
    goldBadge: "ROYAL HARVEST",
    prepTime: "3 mins",
    rating: 5.0,
    reviewsCount: 490,
    highlights: ["400gm Bowl", "Exotic Berries & Kiwi", "Antioxidant Rich"]
  },
  {
    id: "vegetable-salad-bowl",
    name: "Vegetable Salad",
    subtitle: "Vegetable Steam Salad",
    weight: "400gm",
    category: "Veg Salads",
    price: 109,
    description: "400gm wholesome steamed salad with fresh broccoli florets, baby corn, carrot sticks, cherry tomatoes, sweet corn & green beans.",
    image: "/images/products/vegetable-salad-bowl.jpg",
    isBestseller: false,
    dietary: "vegan",
    goldBadge: "FITNESS SPECIAL",
    prepTime: "4 mins",
    rating: 4.9,
    reviewsCount: 310,
    highlights: ["400gm Steam Salad", "High Fiber", "Nutrient Dense"]
  },
  {
    id: "fruit-burst-cup",
    name: "Fruit Burst Cup",
    subtitle: "Mix Fruit Salad",
    weight: "200gm",
    category: "Fruit Cups",
    price: 79,
    description: "Juicy burst of mixed seasonal fruits, grapes, apple cubes, kiwi & melon chunks packed in a 200gm grab-and-go cup.",
    image: "/images/products/fruit-burst-cup.jpg",
    isBestseller: false,
    dietary: "vegan",
    prepTime: "2 mins",
    rating: 4.8,
    reviewsCount: 260,
    highlights: ["200gm Cup", "Grab & Go", "100% Pure Goodness"]
  },
  {
    id: "seasonal-fruit-cup",
    name: "Seasonal Fruit Cup",
    subtitle: "Seasonal Fruit Salad",
    weight: "200gm",
    category: "Fruit Cups",
    price: 69,
    description: "Fresh daily seasonal fruit mix cut crisp and chilled for light, energizing daily nutrition.",
    image: "/images/products/seasonal-fruit-cup.jpg",
    isBestseller: false,
    dietary: "vegan",
    prepTime: "2 mins",
    rating: 4.8,
    reviewsCount: 210,
    highlights: ["200gm Cup", "Daily Fresh Cut", "Affordable Vitality"]
  }
];

export const monthlySubscriptions = [
  {
    id: "lush-harvest-plan",
    name: "Lush Harvest Bowl",
    type: "Seasonal Fruit Salad",
    weight: "400gm daily per meal",
    monthlyPrice: 2599,
    badge: "MOST POPULAR",
    color: "leaf",
    description: "Daily fresh-cut seasonal fruit salad bowl with crisp watermelon, sweet papaya, banana, apple, dragon fruit & ruby pomegranate seeds.",
    image: "/images/subscriptions/lush-harvest-bowl.jpg",
    features: [
      "400gm fresh portion daily",
      "Daily Morning or Evening Doorstep Delivery",
      "Cut fresh within 30 minutes of dispatch",
      "100% pure fruits • No added sugar",
      "Pause / Resume anytime on WhatsApp"
    ],
    whatsappMsg: "Hi Leaf & Lush! I want to subscribe to the *Lush Harvest Bowl (Seasonal Fruit Salad)* monthly plan (₹2,599/month, 400gm daily). Please share activation details."
  },
  {
    id: "lush-royal-plan",
    name: "Lush Royal Bowl",
    type: "Premium Fruit Salad",
    weight: "400gm daily per meal",
    monthlyPrice: 3499,
    badge: "EXOTIC & SUPERFOODS",
    color: "gold",
    description: "Daily luxury superfood bowl with Kiwi, Fresh Strawberries, Blueberries, Dragon fruit, Hass Avocado, Sweet Mango, Pineapple & Mint garnish.",
    image: "/images/subscriptions/lush-royal-bowl.jpg",
    features: [
      "400gm fresh luxury portion daily",
      "Exotic superfoods: Kiwi, Berries, Dragon Fruit & Avocado",
      "Maximum antioxidant & natural immunity boost",
      "Priority early doorstep morning delivery",
      "Free weekly custom fruit selection"
    ],
    whatsappMsg: "Hi Leaf & Lush! I want to subscribe to the *Lush Royal Bowl (Premium Fruit Salad)* monthly plan (₹3,499/month, 400gm daily). Please share activation details."
  },
  {
    id: "leaf-garden-plan",
    name: "Leaf Garden Bowl",
    type: "Vegetable Steam Salad",
    weight: "400gm daily per meal",
    monthlyPrice: 2699,
    badge: "FITNESS & WEIGHT CARE",
    color: "caramel",
    description: "Daily nutrient-packed warm steam salad with Broccoli florets, Baby Corn, Carrot sticks, Cherry Tomatoes, Sweet Corn & Green Beans.",
    image: "/images/subscriptions/leaf-garden-bowl.jpg",
    features: [
      "400gm warm steamed portion daily",
      "Lightly steamed to lock 100% essential nutrients",
      "Zero oil, low calorie & high dietary fiber",
      "Fresh herb seasoning & lime wedge included",
      "Ideal healthy meal replacement"
    ],
    whatsappMsg: "Hi Leaf & Lush! I want to subscribe to the *Leaf Garden Bowl (Vegetable Steam Salad)* monthly plan (₹2,699/month, 400gm daily). Please share activation details."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Neha Kulkarni",
    role: "Monthly Subscriber",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "The Lush Royal Bowl subscription has completely transformed my breakfast routine. Daily fresh dragon fruit, berries, and kiwi at my door!"
  },
  {
    id: 2,
    name: "Dr. Aditya Joshi",
    role: "Fitness Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Finally a place that gives 100% pure fruits with zero syrup or sugar. The 400gm Vegetable Steam Salad is perfect post-workout."
  },
  {
    id: 3,
    name: "Sneha Deshmukh",
    role: "Regular Customer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    comment: "Super hygienic packaging, exact 200gm and 400gm portions, and fast WhatsApp dispatch. 10/10 recommendation!"
  }
];

export const whyChooseUs = [
  {
    icon: "Apple",
    title: "100% Pure Goodness",
    description: "No preservatives, no added syrups, and no artificial sweeteners. Only fresh cut natural goodness."
  },
  {
    icon: "Sprout",
    title: "Handpicked & Hygienic",
    description: "Thoroughly washed with ozonated water, sanitized preparation area, and sealed food-grade containers."
  },
  {
    icon: "Flame",
    title: "Steamed Vegetable Salads",
    description: "Nutrient-locked steamed broccoli, baby corn, and farm veggies seasoned to natural perfection."
  },
  {
    icon: "MessageSquare",
    title: "Instant WhatsApp Ordering",
    description: "No app download needed. Order in seconds on WhatsApp (7720028998) or book monthly plans directly."
  }
];
