/**
 * Centralized Brand Configuration for Leaf & Lush (Leaf'nLush)
 * Pure • Fresh • Healthy — Freshness in Every Bite
 */
export const cafeConfig = {
  name: "Leaf & Lush",
  badgeName: "Leaf'nLush",
  tagline: "Pure • Fresh • Healthy — Freshness in Every Bite",
  description: "Handpicked, hygienic, 100% pure goodness fruit salads, fruit cups, steam vegetable salads, and daily wellness monthly subscriptions.",
  heroHeadline: "Freshness in Every Bite.",
  heroSubtext: "100% Pure Goodness • No Preservatives • No Added Sugar. Handpicked fresh fruit bowls, energy cups, and wholesome steamed vegetable salads.",
  
  // Official WhatsApp & Contact details (Updated)
  whatsappNumber: "917720028998",
  phone: "+91 77200 28998",
  email: "order@leafnlush.com",
  
  // Location
  address: "Leaf & Lush, Civil Lines, Nagpur, Maharashtra - 440001",
  landmark: "Fresh Fruit & Healthy Salad Bar",
  googleMapsUrl: "https://maps.google.com/?q=Leaf+and+Lush+Nagpur",
  
  // Currency symbol
  currency: "₹",
  
  // Delivery Charge Advisory Message
  deliveryChargeMessage: "Delivery charges applicable and will be confirmed by Leaf & Lush on WhatsApp.",
  
  // Opening Hours
  openingHours: {
    monday: "7:00 AM - 10:00 PM",
    tuesday: "7:00 AM - 10:00 PM",
    wednesday: "7:00 AM - 10:00 PM",
    thursday: "7:00 AM - 10:00 PM",
    friday: "7:00 AM - 10:30 PM",
    saturday: "7:00 AM - 10:30 PM",
    sunday: "7:00 AM - 10:30 PM"
  },
  openingHoursSummary: "Mon – Sun: 7:00 AM – 10:30 PM",

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com/leafnlush",
    whatsapp: "https://wa.me/917720028998"
  },

  // Monthly Subscription Plans
  subscriptionPlans: [
    {
      id: "sub-lush-harvest",
      name: "Lush Harvest Bowl",
      type: "Seasonal Fruit Salad",
      weight: "400gm / day",
      description: "Daily fresh cut seasonal fruit salad bowl with watermelon, papaya, banana, apple, dragon fruit & pomegranate seeds.",
      image: "/images/products/seasonal-fruit-salad-bowl.jpg",
      badge: "POPULAR DAILY PLAN",
      benefits: [
        "Freshly cut daily morning delivery",
        "100% pure fruit, no added sugar",
        "Rich in natural vitamins & hydration",
        "Flexible pause & resume anytime"
      ],
      whatsappMsg: "Hi Leaf & Lush! I would like to subscribe to the *Lush Harvest Bowl (Seasonal Fruit Salad)* monthly plan. Please share pricing and delivery schedule."
    },
    {
      id: "sub-lush-royal",
      name: "Lush Royal Bowl",
      type: "Premium Fruit Salad",
      weight: "400gm / day",
      description: "Daily luxury bowl with Kiwi, Strawberries, Blueberries, Dragon fruit, Avocado, Mango, Pineapple & Mint garnish.",
      image: "/images/products/premium-fruit-salad-bowl.jpg",
      badge: "EXOTIC & SUPERFOODS",
      benefits: [
        "Premium exotic superfood fruits daily",
        "High antioxidant & immunity booster",
        "Customized slice preference",
        "Priority morning door delivery"
      ],
      whatsappMsg: "Hi Leaf & Lush! I would like to subscribe to the *Lush Royal Bowl (Premium Fruit Salad)* monthly plan. Please share pricing and delivery schedule."
    },
    {
      id: "sub-leaf-garden",
      name: "Leaf Garden Bowl",
      type: "Vegetable Steam Salad",
      weight: "400gm / day",
      description: "Daily warm & crisp steam salad with Broccoli, Baby Corn, Carrot sticks, Cherry Tomatoes, Sweet Corn & Green Beans.",
      image: "/images/products/vegetable-salad-bowl.jpg",
      badge: "FITNESS & WEIGHT CARE",
      benefits: [
        "Steamed fresh with vital nutrients locked",
        "Zero oil, low calorie & high fiber",
        "Light seasoned dressing provided",
        "Perfect lunch / dinner healthy meal"
      ],
      whatsappMsg: "Hi Leaf & Lush! I would like to subscribe to the *Leaf Garden Bowl (Vegetable Steam Salad)* monthly plan. Please share pricing and delivery schedule."
    }
  ],

  // Key Highlights
  highlights: [
    { label: "Purity", value: "100%", subtext: "Pure & Natural" },
    { label: "Preservatives", value: "Zero", subtext: "No Added Sugar" },
    { label: "Hygiene", value: "A+", subtext: "Handpicked & Hygienic" },
    { label: "Subscriptions", value: "Daily", subtext: "Monthly Doorstep Plans" }
  ]
};
