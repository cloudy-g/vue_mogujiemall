import {request} from './request'

export function getDetailsData(iid) {
    return request({
        url: '/details',
        params:{
            iid
        }
    })
}
