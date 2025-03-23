import pizza from "./../assets/pics/category/pizza.png";
import burger from "./../assets/pics/category/burger.png";
import hotdogs from "./../assets/pics/category/hot dogs.png";
import ramen from "./../assets/pics/category/ramen.png";
import sushi from "./../assets/pics/category/sushi.png";
//
import burgerPic1 from "./../assets/pics/burger/burge.png";
import cheeseBurger from "./../assets/pics/burger/cheeseburger.jpg";
import fishBurger from "./../assets/pics/burger/fish-burger.jpg";
//
import coneyHotDog from "./../assets/pics/hot-dog/coney.png";
import italianHotDog from "./../assets/pics/hot-dog/italian.png";
//
import Margherita from "./../assets/pics/pizza/margherita-pizza.png";
import Mexican from "./../assets/pics/pizza/mexican-pizza.png";
import Pepperoni from "./../assets/pics/pizza/pepperoni-pizza.png";
import Seafood from "./../assets/pics/pizza/seafood-pizza.jpeg";
//
import Misco from "./../assets/pics/ramen/misco ramen.jpg";
import PorkBone from "./../assets/pics/ramen/pork bone.jpeg";
import Salt from "./../assets/pics/ramen/salt ramen.jpeg";
// Maki
import Maki from "./../assets/pics/sushi/maki-sushi.jpg";
import Temaki from "./../assets/pics/sushi/temaki-sushi.jpg";
import Uramaki from "./../assets/pics/sushi/uramaki-sushi.png";

export const categoriesData = [
  {
    name: "pizza",
    pic: pizza,
  },
  {
    name: "burger",
    pic: burger,
  },
  {
    name: "hot-dogs",
    pic: hotdogs,
  },
  {
    name: "ramen",
    pic: ramen,
  },
  {
    name: "sushi",
    pic: sushi,
  },
];

export const productsJson = [
  {
    id: 1,
    category: "burger",
    name: "Burger",
    pic: burgerPic1,
    price: "20",
    isWishListChecked: false,
  },
  {
    id: 2,
    category: "burger",
    name: "Cheese Burger",
    pic: cheeseBurger,
    price: "25",
    isWishListChecked: false,
  },
  {
    id: 3,
    category: "burger",
    name: "Fish Burger",
    pic: fishBurger,
    price: "22",
    isWishListChecked: false,
  },
  {
    id: 4,
    category: "hot-dogs",
    name: "Coney Hot-Dog",
    pic: coneyHotDog,
    price: "18",
    isWishListChecked: false,
  },
  {
    id: 5,
    category: "hot-dogs",
    name: "Italian Hot-Dog",
    pic: italianHotDog,
    price: "15",
    isWishListChecked: false,
  },
  {
    id: 6,
    category: "pizza",
    name: "Margherita Pizza",
    pic: Margherita,
    price: "40",
    isWishListChecked: false,
  },
  {
    id: 7,
    category: "pizza",
    name: "Mexican Pizza",
    pic: Mexican,
    price: "45",
    isWishListChecked: false,
  },
  {
    id: 8,
    category: "pizza",
    name: "Pepperoni Pizza",
    pic: Pepperoni,
    price: "60",
    isWishListChecked: false,
  },
  {
    id: 9,
    category: "pizza",
    name: "Seafood Pizza",
    pic: Seafood,
    price: "60",
    isWishListChecked: false,
  },
  {
    id: 10,
    category: "ramen",
    name: "Misco Ramen",
    pic: Misco,
    price: "8",

    isWishListChecked: false,
  },
  {
    id: 11,
    category: "ramen",
    name: "Pork Bone Ramen",
    pic: PorkBone,
    price: "12",
    isWishListChecked: false,
  },
  {
    id: 12,
    category: "ramen",
    name: "Salt Ramen",
    pic: Salt,
    price: "14",
    isWishListChecked: false,
  },
  {
    id: 13,
    category: "sushi",
    name: "Maki Sushi",
    pic: Maki,
    price: "30",
    isWishListChecked: false,
  },
  {
    id: 14,
    category: "sushi",
    name: "Temaki Sushi",
    pic: Temaki,
    price: "30",
    isWishListChecked: false,
  },
  {
    id: 15,
    category: "sushi",
    name: "Uramaki Sushi",
    pic: Uramaki,
    price: "32",
    isWishListChecked: false,
  },
];
