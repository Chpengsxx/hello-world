// axios
import axios from "axios";
const request = axios.create({
    baseURL:'http://localhost:5081',
    withCredentials:true
})
//采用export default该方式
export default request