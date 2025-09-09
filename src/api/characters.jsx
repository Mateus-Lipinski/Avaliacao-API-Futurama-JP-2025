import api from './api'

export const getCharacters = async (params) => {
    const response = await api.get('/characters', { params })

    if (response.status != 200) {
        throw new Error(response.status)
    }

    return response.data.items
}