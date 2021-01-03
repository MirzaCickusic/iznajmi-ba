import axios from "axios";

const messagesRoute = 'http://localhost:3001/api/users/messages'

const getUserMessages = async userId => {
    const response = await axios.get(messagesRoute, userId)
    return response.data
}

const userDataRoute = 'http://localhost:3001/api/users'

const getUserById = async userId => {
    const response = await axios.get(userDataRoute, userId)
    return response.data
}

export default {getUserMessages, getUserById}
