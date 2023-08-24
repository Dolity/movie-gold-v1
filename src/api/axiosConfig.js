import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.115.1:8000',
    // headers: {
    //     'Access-Control-Allow-Origin': 'http://192.168.115.1:3000'
    // }
});