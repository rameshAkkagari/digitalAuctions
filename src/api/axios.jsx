import axios from "axios";

export default axios.create({
    baseURL:'http://ec2-13-200-66-112.ap-south-1.compute.amazonaws.com'
})