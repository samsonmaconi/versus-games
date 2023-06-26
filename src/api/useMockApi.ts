import { useEffect } from 'react';
import mockData from "./mockData.json";
import { loadQuestionsData } from '../redux/slices/gameQuestionsSlice';
import { useAppDispatch } from '../redux/hooks';

export const useMockApi = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const data = mockData.questions;
                dispatch(loadQuestionsData(data));
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        fetchDataFromApi();
    }, [dispatch]);
};
