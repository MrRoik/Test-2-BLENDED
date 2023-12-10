import "./styles/normalize.css";
import "./styles/index.css";
import {getAllProducts, getProductById} from "./requests/products"
import { renderCarts } from "./js/renderCarts"
import {createSingleLayout} from "./services/markupService"
getAllProducts()
// getProductById(1)

// renderCarts()

// console.log(getAllProducts())

// Реалізуй пошук та рендер
// інформації про продукт за його ID.

const form = document.querySelector('#singleProductForm')
form.addEventListener('submit', onSubmit)

async function onSubmit(event){
    event.preventDefault();
    const result = await getProductById(event.currentTarget.elements.id.value);
    createSingleLayout(result.data);
}