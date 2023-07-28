import axios from 'axios'

const http = axios.create({
    baseURL: 'https://conexaodev.portfolioyansousa.com/back-end/public/api',
    timeout: '3000'
});

export default http;