import axios from 'axios';

export const GetManager =async () =>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/all_managers');
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    
}