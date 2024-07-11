import axios from 'axios';

export const Department =async () =>{
        try {
            const response = await axios.get('http://127.0.0.1:8000/departments');
            return response.data;
        } catch (error) {
            handleApiError(error);
            throw error;
        }
    
}
