export interface NutritionValue {
  label: string;
  value: string;
}

export interface NutritionData {
  vitamins: NutritionValue[];
  minerals: NutritionValue[];
}

export interface Product {
  id: string;
  name: string;
  category: "Vegetables" | "Fruits";
  shortDescription: string;
  fullDescription: string;
  image: string;
  packingTypes: string[];
  types?: string[];
  nutrition: NutritionData;
  seasonalCalendar: number[];
  storage: string;
}

export const products: Product[] = [
  {
    id: "strawberry",
    name: "Strawberry",
    category: "Fruits",
    shortDescription:
      "Premium IQF strawberries preserved all year round with their natural sweetness, bright color, and fresh taste.",
    fullDescription:
      "Merv provides premium IQF strawberries all year long, preserving their delicious taste, natural color, and nutritional value through advanced freezing technologies. Strawberries are rich in vitamin C and antioxidants, making them perfect for desserts, smoothies, juices, bakery, and food service applications.",
    image: "/assets/new image/يص.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Diced", "Whole calibrated", "Quarters", "Whole uncalibrated"],
    nutrition: {
      vitamins: [
        { label: "Vitamin C", value: "97% DV" },
        { label: "Folate B9", value: "6% DV" },
        { label: "Vitamin K", value: "3% DV" }
      ],
      minerals: [
        { label: "Manganese", value: "18% DV" },
        { label: "Potassium", value: "4% DV" },
        { label: "Magnesium", value: "3% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "mango",
    name: "Mango",
    category: "Fruits",
    shortDescription:
      "Premium IQF mango cubes with tropical sweetness, golden color, and natural texture preserved through advanced freezing.",
    fullDescription:
      "Merv delivers premium IQF mango all year long, preserving its tropical sweetness, bright golden color, and natural texture through advanced freezing technology. Carefully selected mangoes are cut and individually quick frozen to keep their fresh taste and nutritional value. Perfect for juices, smoothies, desserts, fruit salads, hotels, restaurants, and food service use.",
    image: "/assets/new image/تدت.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Diced", "Chunks"],
    nutrition: {
      vitamins: [
        { label: "Vitamin C", value: "60% DV" },
        { label: "Vitamin A", value: "20% DV" },
        { label: "Vitamin B6", value: "8% DV" }
      ],
      minerals: [
        { label: "Copper", value: "10% DV" },
        { label: "Potassium", value: "5% DV" },
        { label: "Magnesium", value: "3% DV" }
      ]
    },
    seasonalCalendar: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "pomegranate",
    name: "Pomegranate",
    category: "Fruits",
    shortDescription:
      "Sweet, juicy, and crunchy IQF pomegranate kernels available all year with clean premium quality.",
    fullDescription:
      "Merv provides premium IQF pomegranate kernels with a sweet, juicy, and crunchy texture. The product is carefully prepared and frozen to preserve its natural taste, color, and nutritional value. Perfect for desserts, salads, smoothies, juices, toppings, and food service applications.",
    image: "/assets/new image/زععزعزع.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Kernels"],
    nutrition: {
      vitamins: [
        { label: "Vitamin K", value: "16% DV" },
        { label: "Vitamin C", value: "12% DV" },
        { label: "Vitamin B6", value: "4% DV" }
      ],
      minerals: [
        { label: "Potassium", value: "5% DV" },
        { label: "Copper", value: "5% DV" },
        { label: "Manganese", value: "4% DV" }
      ]
    },
    seasonalCalendar: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "mixed-vegetables",
    name: "Mixed vegetables",
    category: "Vegetables",
    shortDescription:
      "A colorful IQF mix of premium vegetables preserved with fresh taste, natural color, and excellent quality.",
    fullDescription:
      "Merv mixed vegetables are carefully selected, cut, and individually quick frozen to preserve their fresh taste, natural color, and nutritional value. This mix usually includes peas, carrots, green beans, sweet corn, and other vegetables depending on the blend. It is ideal for side dishes, soups, rice, casseroles, restaurants, catering, and food service.",
    image: "/assets/new image/jj.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    nutrition: {
      vitamins: [
        { label: "Vitamin A", value: "40% DV" },
        { label: "Vitamin C", value: "15% DV" },
        { label: "Vitamin K", value: "20% DV" }
      ],
      minerals: [
        { label: "Iron", value: "6% DV" },
        { label: "Potassium", value: "5% DV" },
        { label: "Calcium", value: "4% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "broccoli",
    name: "Broccoli",
    category: "Vegetables",
    shortDescription:
      "Premium IQF broccoli florets preserved with natural green color, fresh texture, and high nutritional value.",
    fullDescription:
      "Merv IQF broccoli is carefully selected, cut into florets, and frozen quickly to preserve its natural appearance, texture, color, and nutritional value. Broccoli is low in calories and rich in vitamins, minerals, and antioxidants. It is ideal for healthy meals, soups, side dishes, restaurants, catering, and frozen food service.",
    image: "/assets/new image/عزعزع.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Florets"],
    nutrition: {
      vitamins: [
        { label: "Vitamin C", value: "135% DV" },
        { label: "Vitamin K", value: "116% DV" },
        { label: "Vitamin A", value: "11% DV" }
      ],
      minerals: [
        { label: "Folate", value: "14% DV" },
        { label: "Manganese", value: "10% DV" },
        { label: "Potassium", value: "8% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "molokhia",
    name: "Molokhia",
    category: "Vegetables",
    shortDescription:
      "Rich green frozen molokhia with authentic oriental taste, prepared and frozen to preserve freshness.",
    fullDescription:
      "Merv frozen molokhia is carefully selected, prepared, and frozen to preserve its rich green color, natural taste, and authentic oriental flavor. It is available in minced or leaves form depending on customer needs. Molokhia is known for its vitamins, minerals, and traditional value in many Middle Eastern meals.",
    image: "/assets/new image/ججججج.jpg",
    packingTypes: ["400 grams"],
    types: ["Minced", "Leaves"],
    nutrition: {
      vitamins: [
        { label: "Vitamin A", value: "70% DV" },
        { label: "Vitamin C", value: "40% DV" },
        { label: "Vitamin B6", value: "15% DV" }
      ],
      minerals: [
        { label: "Calcium", value: "20% DV" },
        { label: "Iron", value: "15% DV" },
        { label: "Magnesium", value: "12% DV" }
      ]
    },
    seasonalCalendar: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "green-peas",
    name: "Green peas",
    category: "Vegetables",
    shortDescription:
      "Sweet and tender IQF green peas frozen at peak freshness to preserve their taste and bright green color.",
    fullDescription:
      "Merv IQF green peas are picked and frozen using advanced freezing technology to keep their natural sweetness, crispness, and bright green color. They are perfect for soups, rice, side dishes, salads, catering, restaurants, and food service use.",
    image: "/assets/new image/عل.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    nutrition: {
      vitamins: [
        { label: "Vitamin C", value: "40% DV" },
        { label: "Vitamin K", value: "30% DV" },
        { label: "Vitamin A", value: "20% DV" }
      ],
      minerals: [
        { label: "Manganese", value: "12% DV" },
        { label: "Iron", value: "10% DV" },
        { label: "Phosphorus", value: "10% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "spinach",
    name: "Spinach",
    category: "Vegetables",
    shortDescription:
      "Premium IQF spinach preserved with deep green color, fresh taste, and excellent nutritional value.",
    fullDescription:
      "Merv frozen spinach is carefully prepared and individually quick frozen to preserve its deep green color, natural taste, and nutritional value. Spinach is rich in vitamin K, vitamin A, vitamin C, iron, and minerals. It is suitable for pies, soups, sauces, side dishes, restaurants, and food service.",
    image: "/assets/new image/000000.jpg",
    packingTypes: ["400 grams"],
    types: ["Chopped", "Leaves"],
    nutrition: {
      vitamins: [
        { label: "Vitamin K", value: "460% DV" },
        { label: "Vitamin A", value: "56% DV" },
        { label: "Vitamin C", value: "14% DV" }
      ],
      minerals: [
        { label: "Iron", value: "15% DV" },
        { label: "Calcium", value: "10% DV" },
        { label: "Potassium", value: "8% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "okra",
    name: "Okra",
    category: "Vegetables",
    shortDescription:
      "Top quality IQF okra preserved with its natural shape, green color, and authentic taste.",
    fullDescription:
      "Merv IQF okra is carefully selected, graded, and frozen to preserve its natural shape, fresh green color, and authentic taste. Okra is rich in vitamins A and C and contains antioxidants. It is perfect for traditional dishes, soups, stews, restaurants, catering, and food service.",
    image: "/assets/new image/دبس.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Extra 0:2.5", "Zero 2.5:3.5", "One 3.5:4.5", "Two 4.5:5.5"],
    nutrition: {
      vitamins: [
        { label: "Vitamin C", value: "26% DV" },
        { label: "Vitamin K", value: "26% DV" },
        { label: "Vitamin A", value: "7% DV" }
      ],
      minerals: [
        { label: "Manganese", value: "15% DV" },
        { label: "Magnesium", value: "14% DV" },
        { label: "Calcium", value: "8% DV" }
      ]
    },
    seasonalCalendar: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "colocasia",
    name: "Colocasia",
    category: "Vegetables",
    shortDescription:
      "Cleanly prepared diced colocasia, frozen to preserve its traditional taste and reliable quality.",
    fullDescription:
      "Merv IQF colocasia is cleanly prepared, peeled, diced, and frozen to preserve its taste, texture, and quality. Colocasia is widely used in traditional dishes and is valued for its energy content and rich texture. It is suitable for retail, restaurants, catering, and export markets.",
    image: "/assets/new image/سد.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Diced"],
    nutrition: {
      vitamins: [
        { label: "Vitamin B6", value: "20% DV" },
        { label: "Vitamin E", value: "15% DV" },
        { label: "Vitamin C", value: "5% DV" }
      ],
      minerals: [
        { label: "Manganese", value: "16% DV" },
        { label: "Potassium", value: "13% DV" },
        { label: "Copper", value: "12% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "cauliflower",
    name: "Cauliflower",
    category: "Vegetables",
    shortDescription:
      "Premium IQF cauliflower florets with fresh flavor, natural color, and preserved nutrients.",
    fullDescription:
      "Merv IQF cauliflower combines the fresh flavor, natural color, and nutritional value of fresh cauliflower with the convenience and long shelf life of frozen products. Carefully selected florets are frozen quickly to preserve quality and texture for home cooking, restaurants, catering, and food service.",
    image: "/assets/new image/قرنبيط.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Florets"],
    nutrition: {
      vitamins: [
        { label: "Vitamin C", value: "77% DV" },
        { label: "Vitamin K", value: "20% DV" },
        { label: "Vitamin B6", value: "10% DV" }
      ],
      minerals: [
        { label: "Folate", value: "14% DV" },
        { label: "Potassium", value: "9% DV" },
        { label: "Manganese", value: "8% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },

  {
    id: "french-fries",
    name: "French Fries",
    category: "Vegetables",
    shortDescription:
      "Golden frozen French fries prepared from selected potatoes for crispy texture and delicious taste.",
    fullDescription:
      "Merv frozen French fries are carefully prepared from selected potatoes and frozen to preserve their golden color, consistent cut, and delicious potato taste. They are ideal for restaurants, hotels, catering, quick service, and home cooking. With the right preparation, they deliver a crispy outside and soft inside with reliable quality all year long.",
    image: "/assets/new image/WhatsApp Image 2026-06-09 at 17.31.16.jpeg",
    packingTypes: ["1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Straight Cut", "Shoestring", "Crinkle Cut"],
    nutrition: {
      vitamins: [
        { label: "Vitamin C", value: "15% DV" },
        { label: "Vitamin B6", value: "12% DV" },
        { label: "Vitamin K", value: "4% DV" }
      ],
      minerals: [
        { label: "Potassium", value: "10% DV" },
        { label: "Iron", value: "4% DV" },
        { label: "Magnesium", value: "5% DV" }
      ]
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  }
];