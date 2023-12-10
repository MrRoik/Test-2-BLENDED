import "./styles/normalize.css";
import "./styles/index.css";
import {getAllProducts} from "./requests/products"
import { renderCarts } from "./js/renderCarts"

getAllProducts()

renderCarts()

// console.log(getAllProducts())