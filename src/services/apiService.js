import config from '../config';

const apiService = {
    getData: async () => {
        try {
            const response = await fetch(`${config.apiBaseUrl}/users`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }
};

export default apiService;
