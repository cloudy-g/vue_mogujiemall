import axios from 'axios'

export function request(config) {
    
    let instance = axios.create({
        baseURL: 'http://192.168.0.104:3000',
        timeout: 10000,
    });

    return instance(config);
}