export interface IFeatureMugs {
  to?: string;
  price: number;
  discountPrice?: number;
  name: string;
  pictureUrl: string;
}
export interface ILifeStyleStory {
  label?: string;
  to?: string;
  thumbnail: string;
  description?: string;
  time: string;
  pictureUrl: string;
  action: string;
}
export const IWorkCard=[
  {
    to: "#",
    price: 99.0,
    discountPrice: 0,
    name: "Pink Premium Ceramic",
    pictureUrl: "feature-mugs-1.jpg"
  },
]
export const FeatureMugList: IFeatureMugs[] = [
  {
    to: "#",
    price: 99.0,
    discountPrice: 0,
    name: "Pink Premium Ceramic",
    pictureUrl: "feature-mugs-1.jpg"
  },
  {
    to: "#",
    price: 69.0,
    discountPrice: 50.0,
    name: "Golden Designers Mug",
    pictureUrl: "feature-mugs-2.jpg"
  }
];
export const MoreMugsList: IFeatureMugs[] = [
  {
    to: "#",
    price: 37.0,
    discountPrice: 25.0,
    name: "Red Love Cup",
    pictureUrl: "coffee-mug-1.jpg"
  },
  {
    to: "#",
    price: 29.0,
    discountPrice: 15.0,
    name: "Black Tea Cup",
    pictureUrl: "coffee-mug-2.jpg"
  },
  {
    to: "#",
    price: 19.0,
    name: "B&W Essentials Mug",
    pictureUrl: "coffee-mug-3.jpg"
  },
  {
    to: "#",
    price: 25.0,
    name: "Winter Style Mug",
    pictureUrl: "coffee-mug-4.jpg"
  },
  {
    to: "#",
    price: 46.0,
    name: "Ceramic Tea",
    pictureUrl: "coffee-mug-5.jpg"
  },
  {
    to: "#",
    price: 34.0,
    name: "No Handle Bar Cup",
    pictureUrl: "coffee-mug-6.jpg"
  },
  {
    to: "#",
    price: 25.0,
    name: "Espresso Cup by Mugs.co",
    pictureUrl: "coffee-mug-7.jpg"
  },
  {
    to: "#",
    price: 99.0,
    name: "Pink Premium Ceramic",
    pictureUrl: "feature-mugs-1.jpg"
  },
  {
    to: "#",
    price: 29.0,
    name: "Summer Designer Cup",
    pictureUrl: "coffee-mug-8.jpg"
  }
];
export const AllCoffeeMugs: IFeatureMugs[] = [
  ...MoreMugsList,
  {
    to: "#",
    price: 69.0,
    discountPrice: 50.0,
    name: "Golden Designers Mug",
    pictureUrl: "feature-mugs-2.jpg"
  },
  {
    to: "#",
    price: 19.0,
    name: "White Mug Essential",
    pictureUrl: "coffee-mug-11.jpg"
  },
  {
    to: "#",
    price: 29.0,
    name: "White Ceramic",
    pictureUrl: "coffee-mug-12.jpg"
  },
  {
    to: "#",
    price: 15.0,
    name: "Basic White Mug",
    pictureUrl: "coffee-mug-9.jpg"
  },

  {
    to: "#",
    price: 39.0,
    name: "Aroma Art Coffee Mug",
    pictureUrl: "coffee-mug-14.jpg"
  },
  {
    to: "#",
    price: 99.0,
    name: "Blue Premium Mug",
    pictureUrl: "coffee-mug-13.jpg"
  }
];
export const LifeStoryList: ILifeStyleStory[] = [
  {
    action: "read the full story",
    to: "#",
    label: "NEW ARTICLE IS LIVE",
    thumbnail:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth",
    time: "OCTOBER 9, 2018",
    pictureUrl: "life-style-1.jpg"
  },
  {
    to: "#",
    action: "read the full story",
    label: "NEW STORE OPENED",
    thumbnail: "How long does a cup of coffee keep you awake?",
    description:
      "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
    time: "OCTOBER 9, 2018",
    pictureUrl: "life-style-2.jpg"
  },
  {
    to: "#",
    action: "read the full story",
    thumbnail:
      "Recent research suggests that heavy coffee drinkers may reap health benefits.",
    description:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth",
    time: "OCTOBER 9, 2018",
    pictureUrl: "life-style-3.jpg"
  }
];
