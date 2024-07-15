export interface INavigation {
  to: string;
  text: string;
}
export interface IProductTabs {
  title: string;
  tabName: string;
  titleDescription: string;
  component: string;
}
export const navigationList: Array<INavigation> = [
  { to: "/", text: "Home" },
  { to: "products", text: "Products" },
  { to: "#", text: "Blog" },
  { to: "#", text: "About" },
  { to: "#", text: "Contact" },
  { to: "#", text: "StyleGuide" }
  // {to:"#",text:'GrassDeveloper'},
];
export const productsTabs: IProductTabs[] = [
  {
    title: "Our Products",
    titleDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tabName: "all products",
    component: "products-list"
  },
  {
    title: "Coffee Mugs",
    titleDescription:
      "Needless to say it’s very important, content is king and people are beginning to understand that.",
    tabName: "Coffee Mugs",
    component: "coffee-mugs"
  },
  {
    title: "Others",
    titleDescription:
      "Needless to say it’s very important, content is king and people are beginning to understand that.",
    tabName: "Others ",
    component: "products"
  },
  {
    title: "Premium",
    titleDescription:
      "However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase.",
    tabName: "premium",
    component: "products"
  },
  {
    title: "Tea Mugs",
    titleDescription:
      "However, back over in reality some project schedules and budgets don’t allow for web copy to be written before the design phase.",
    tabName: "tea mugs",
    component: "products"
  }
];
