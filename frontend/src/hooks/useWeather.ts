import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Weather } from '../types';

const fetchWeather = async (city: string): Promise<Weather> => {
    const { data } = await axios.get(`/api/weather/${city}`);
    return data;
};

export const useWeather = (city: string) => {
    return useQuery({
        queryKey: ['weather', city],
        queryFn: () => fetchWeather(city),
    });
};