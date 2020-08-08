import axios from 'axios'

export function request(config) {
    
    let instance = axios.create({
        baseURL: 'http://127.0.0.1:3000',
        timeout: 10000,
    });

    return instance(config);
}