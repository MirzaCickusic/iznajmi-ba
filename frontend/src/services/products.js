import axios from "axios";
const baseUrl = 'http://localhost:3001/api/products'

//Get user products by ID
const getUserProducts = async userId => {
    const response = await axios.get(baseUrl, userId)
    return response.data
}

export default {getUserProducts}
