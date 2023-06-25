import mockData from "./mockData.json";

export const useMockApi = () => {
  const { data, error } = {
    data: mockData,
    error: null
  }

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
