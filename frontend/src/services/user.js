import axios from "axios";

const baseUrl = 'http://localhost:3001/api/users/messages'

const getUserMessages = async userID => {
    const response = await axios.get(baseUrl, userID)
    return response.data
}

export default {getUserMessages}
