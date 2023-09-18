import axios from "axios";

const SEARCH_URL = 'https://6503525ca0f2c1f3faebccd8.mockapi.io/cars';
// SEARCH_URL.searchParams.append('page', 1);
// SEARCH_URL.searchParams.append('limit', 8);

export const getAllCars = (currentPage) => {

    

const searchParameters = new URLSearchParams({
            page: Number(currentPage),
            limit: 8,
        })

    try {
        return axios.get(`${SEARCH_URL}/?${searchParameters}`)
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getFavoriteCar = (id) => {
    try {
        return axios.get(`${SEARCH_URL}`/`:${id}`)
    } catch (error) {
        throw new Error(error.message);
    }
}