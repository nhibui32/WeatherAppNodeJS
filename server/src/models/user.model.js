//database schema( example with mongoose)
const fetch = require('node-fetch');
const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

export const Get_Weather_Data = async (city) =>{
    const API_URL = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

