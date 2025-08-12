import axios from "axios";

const axiosInstans= axios.create({
    baseURL: 'https://portfolio-server-omega-eosin.vercel.app/'
})

const useAxios=()=>{
    return axiosInstans;
}

export default useAxios;