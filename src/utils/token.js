import { TOKEN } from './constants'
import jwt_decode from 'jwt-decode'


export const setToken = ( token )=> {
    localStorage.setItem(TOKEN, token)
}

export const getToken = () => {
    return localStorage.getItem(TOKEN)
}

export const decodeToken = ( token )=> {
    return jwt_decode(token)
}