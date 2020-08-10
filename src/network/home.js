import {request} from './request'

export function getHomeMultidata() {
    return request({
        url: 'home/multidata'
    })
}

export function getHomeGoodsList(type, page) {
    return request({
        url: 'home/goods',
        params: {
            type,
            page
        }
    })
}