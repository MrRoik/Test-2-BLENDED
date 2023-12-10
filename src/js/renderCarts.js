import {createMarkup} from "../services/markupService"
import { getAllProducts } from "../requests/products"

const allProducts = document.querySelector("#allProducts")

// allProducts.insertAdjacentHTML("beforeend", createMarkup())
// console.log(createMarkup())

export async function renderCarts() {
   const render = await getAllProducts()
   allProducts.insertAdjacentHTML("beforeend", createMarkup(render.products))
}

