import api from './api'

export const getCharacters = async () => {
    const response = await api.get('/random/character')

    return response.data
}