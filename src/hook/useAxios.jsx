import axios from "axios";

const axiosInstans= axios.create({
    baseURL: 'http://localhost:3000/'
})

const useAxios=()=>{
    return axiosInstans;
}

export default useAxios;