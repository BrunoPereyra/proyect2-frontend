import axios from "axios"
const baseUrl = 'http://localhost:3001'
var token = null

const setToken = (newObject) => {
    token = newObject
}
const LoginUser = async (newObject) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.post(`${baseUrl}/login`, newObject, config)
    return res
}
const GetChampions = async () => {
    const res = await axios.get(`${baseUrl}/getEvent`)
    return res

}
const SearchChampions = async (newObject) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const res = await axios.post(`${baseUrl}/SearchChampions${newObject.query}`, newObject, config)
    return res
}
const exportedObject = {
    LoginUser,
    GetChampions,
    setToken,
    SearchChampions
}
export default exportedObject