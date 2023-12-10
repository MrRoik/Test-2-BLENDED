import apiInstance from "../services/api.js"

export async function getAllProducts() {
    const result = await apiInstance.get(`/products`)
    return result.data
}
 
//  getAllProducts()