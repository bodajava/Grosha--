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
  seasonalCalendar: number[]; // 0 for off, 1 for peak
  storage: string;
}

export const products: Product[] = [
  {
    id: "artichokes",
    name: "Artichokes",
    category: "Vegetables",
    shortDescription: "Either bottoms or quarters, Frosty Foods offers high-quality standards for all types of processed artichokes tailored for the consumer preferences.",
    fullDescription: "Either bottoms or quarters, Frosty Foods offers high-quality standards for all types of processed artichokes tailored for the consumer preferences. Artichoke lovers can enjoy them in several ways, they can have them mixed with vegetables, meat, or even stuffed with seafood.\nThe “globe” can also be deep-fried, sauteed in oil, or barbecued, and the most popular part, the “heart” of the artichoke to be utilized in main dishes!",
    image: "/assets/products/artichokes.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Bottoms", "Quarters"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "strawberry",
    name: "Strawberry",
    category: "Fruits",
    shortDescription: "Frosty Foods provides the beloved fruit all year long, preserving its delicious taste and nutritional value through the best freezing technologies.",
    fullDescription: "Frosty Foods provides the beloved fruit all year long, preserving its delicious taste and nutritional value through the best freezing technologies. Besides being everyone’s favorite fruit, strawberries can also be an excellent source of vitamin C and an antioxidant necessary for immune and skin health that people can now enjoy all year long!",
    image: "/assets/products/strawberry.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Diced", "Whole calibrated", "Quarters", "Whole uncalibrated"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "mixed-vegetables",
    name: "Mixed vegetables",
    category: "Vegetables",
    shortDescription: "Because of our IQF technology, green beans, peas, and carrots are now delivered around the world with a better quality and taste than ever.",
    fullDescription: "Because of our IQF technology, green beans, peas, and carrots are now delivered around the world with a better quality and taste than ever. Our mixed vegetables can do a lot more than just be a side dish, they can easily be the star of any meal. Mix things up and cook new and more creative recipes. With the right seasoning and cooking, you can create a burst of flavor that everyone will love.",
    image: "/assets/products/mixed-vegetables.png",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "broccoli",
    name: "Broccoli",
    category: "Vegetables",
    shortDescription: "Throughout our process we care about preserving the amount of nutrients of the product, its natural appearance, premium quality, and safety.",
    fullDescription: "Throughout our process we care about preserving the amount of nutrients of the product, its natural appearance, premium quality, and safety, so that the broccoli can reach you in the best shape possible. Broccoli is low in calories but high in nutrients and antioxidants that are important different aspects of our bodies. Also, it can be one of the most delicious additions to any meal plan if cooked right.",
    image: "/assets/products/broccoli.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "molokhia",
    name: "Molokhia",
    category: "Vegetables",
    shortDescription: "Tastier and greener than ever, our frozen molokhia is farmed and manufactured to provide the rich oriental taste you love.",
    fullDescription: "Tastier and greener than ever, our frozen molokhia is farmed and manufactured to provide the rich oriental taste you love. Not only is Molokhia the most delicious oriental food there is, but did you know that there are more than 30 vitamins, minerals, and minerals in molokhia, as well as certain organic compounds that are also important to human health?",
    image: "/assets/products/molokhia.jpg",
    packingTypes: ["400 grams"],
    types: ["Minced", "Leaves"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "green-peas",
    name: "Green peas",
    category: "Vegetables",
    shortDescription: "Picked and frozen with technologies that keep their sweetness and crispness, our frozen green peas are just the best out there.",
    fullDescription: "Picked and frozen with technologies that keep their sweetness and crispness, our frozen green peas are just the best out there. No matter what season it is, we’ve made it possible for everyone to enjoy high quality green peas and be able to always incorporate greens into their meals.",
    image: "/assets/products/green-peas.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "spinach",
    name: "Spinach",
    category: "Vegetables",
    shortDescription: "Thanks to our high standard IQF process, our frozen spinach is especially high in Vitamin K, C and B2 that helps with cell growth and function.",
    fullDescription: "Thanks to our high standard IQF process, our frozen spinach is especially high in Vitamin K, C and B2 that helps with cell growth and function. It’s always possible to go creative and enjoy endless possibilities when you’re cooking Frosty Foods’ IQF spinach.",
    image: "/assets/products/spinach.jpg",
    packingTypes: ["400 grams"],
    types: ["Chopped", "Leaves"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "okra",
    name: "Okra",
    category: "Vegetables",
    shortDescription: "Enjoy the warm feeling, the same taste and flavor of okra anytime of the year with our top quality IQF Okra.",
    fullDescription: "Enjoy the warm feeling, the same taste and flavor of okra anytime of the year with our top quality IQF Okra. Besides its mouthwatering taste, okra is also rich in vitamins A and C, as well as antioxidants that help reduce the risk of serious health conditions.",
    image: "/assets/products/okra.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Extra(0:2.5)", "One(3.5:4.5)", "Zero(2.5:3.5)", "Two(4.5:5.5)"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "colocasia",
    name: "Colocasia",
    category: "Vegetables",
    shortDescription: "Cleanly prepared, cut and froze for the taste our customers deserve. Colocasia is known for its benefits for higher amounts of energy.",
    fullDescription: "Cleanly prepared, cut and froze for the taste our customers deserve. Colocasia is known for its benefits for higher amounts of energy, promoting weight loss, lowering blood pressure, improving muscular health and more. Many countries enjoy traditional dishes prepared with colocasia leaves.",
    image: "/assets/products/colocasia.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Diced"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "cut-green-beans",
    name: "Cut green beans",
    category: "Vegetables",
    shortDescription: "Get your cut green beans with incomparable quality and ready to be steamed and perfectly cooked in minutes.",
    fullDescription: "Get your cut green beans with incomparable quality and ready to be steamed and perfectly cooked in minutes. Nothing compares to the delicious bite of cooked green beans that has a crunch to it. Complete your meal with nutritional benefits as well as great taste with Frosty Foods.",
    image: "/assets/products/cut-green-beans.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Cut", "Whole"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "broad-beans",
    name: "Broad beans",
    category: "Vegetables",
    shortDescription: "Whether you like your beans stir-fried, as a cold dressing, and or in other various options, you can always count on Frosty Foods’ broad beans.",
    fullDescription: "Whether you like your beans stir-fried, as a cold dressing, and or in other various options, you can always count on Frosty Foods’ broad beans for the best side dishes. Broad beans are popular all around the world and are considered an ingredient used in a variety of dishes. They are particularly popular in vegan and vegetarian dishes as the bean is a great source of protein, vitamins, fibre, antioxidants, and folate and with their low number of calories.",
    image: "/assets/products/broad-beans.png",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Single peeled", "Double peeled"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "cauliflower",
    name: "Cauliflower",
    category: "Vegetables",
    shortDescription: "Combine all the traits you love about fresh cauliflower including fresh flavour, color, nutrients and vitamins.",
    fullDescription: "Combine all the traits you love about fresh cauliflower including fresh flavour, color, nutrients and vitamins, with the convenience and longer shelf life of frozen products and get that with Frosty Foods’ IQF Cauliflower.",
    image: "/assets/products/cauliflower.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  },
  {
    id: "pomegranate",
    name: "Pomegranate",
    category: "Fruits",
    shortDescription: "Sweet and crunchy yet juicy, our IQF pomegranate provides you with a nutritious and delicious treat all year long.",
    fullDescription: "Sweet and crunchy yet juicy, our IQF pomegranate provides you with a nutritious and delicious treat all year long. Frosty Foods provides easy, clean and tasty IQF pomegranate for everyone to always enjoy.",
    image: "/assets/products/pomegranate.jpg",
    packingTypes: ["400 grams", "1 kilo", "2.5 kilos", "10 kilos"],
    types: ["Kernels"],
    nutrition: {
      vitamins: [],
      minerals: []
    },
    seasonalCalendar: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    storage: "Keep frozen below -18° C"
  }
];
