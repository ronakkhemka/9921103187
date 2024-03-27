import axios from 'axios';

const baseURL = 'http://20.244.56.144/test';

export const registerCompany = async (companyData) => {
    try {
        const response = await axios.post(`${baseURL}/register`, companyData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAuthToken = async (authData) => {
    try {
        const response = await axios.post(`${baseURL}/auth`, authData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTopProducts = async (companyName, categoryName, top, minPrice, maxPrice) => {
    try {
        const response = await axios.get(`${baseURL}/companies/${companyName}/categories/${categoryName}/products`, {
            params: { top, minPrice, maxPrice }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
