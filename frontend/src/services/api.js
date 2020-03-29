import axios from 'axios';

//URL PADRÃO DE TODAS AS CHAMADAS
const api = axios.create({
    baseURL:'http://localhost:3333',
});

export default api;