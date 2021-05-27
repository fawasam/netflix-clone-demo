import axios from "axios"
import {baseUrl} from "./constatnts/constants.js"

const instance =axios.create({

    baseURL :baseUrl,
})

export default instance