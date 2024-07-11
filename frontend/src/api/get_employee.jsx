import axios from 'axios';

export const GetEmployee =async () =>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/all_employee');
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    
}