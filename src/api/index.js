import axios from '../utils/request'
import path from './path'

const api = {
    getEcharts(){
        return axios.get(path.baseUrl + path.echarts)
    }
} 
export default api