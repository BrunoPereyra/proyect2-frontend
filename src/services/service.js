import axios from "axios"
const baseUrl = 'http://localhost:3001'
var token = null

const setToken = (newObject) => {
    token = newObject
}
const LoginUser = async (newObject) => {
    const config = {
        headers: {
            Authorization: `bearer ${token}`
        }
    }
    const res = await axios.post(`${baseUrl}/login`, newObject, config)
    return res
}

const exportedObject = {
    LoginUser,
    setToken
}
export default exportedObject