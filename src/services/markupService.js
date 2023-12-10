import getAllProducts from "../requests/products.js";
import refs from "../js/refs.js"
// {title, description, price}
export function createMarkup(arr) {
   return arr.map(({title, description, price}) => 
   `
   <li>
   <h2>${title}</h2>
   <p>Description:${description}</p>
   <p>Price:${price}</p>
   </li>
   `
   ).join("");
}
// createMarkup()
export function createSingleLayout(data){
   console.log(data);
   refs.singleProduct.innerHTML = `<h2>${data.title}</h2>
   <p>Description:${data.description}</p>
   <p>Price:${data.price}</p>
   <img src="${data.images[0]}" alt="${data.description}">`
}