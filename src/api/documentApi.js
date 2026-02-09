import api from './axios'

export const createDocument = () => {
    return api.post('/documents')
}
