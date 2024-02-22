import axios from "axios"
const instance = axios.create({
    baseURL:"http://localhost:3000",
})
export default instance
//npm i json-server -g
// tao db.json
//json-server --watch db.json

