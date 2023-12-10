import getAllProducts from "../requests/products.js";
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
