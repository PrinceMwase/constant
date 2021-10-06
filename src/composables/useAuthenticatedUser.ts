

import axios from "axios"




export function useAuthenticatedUser () {

    /**
     * This will check for an authecticated user\n
     * 
     * * 
     * @returns Promise<AxiosResponse<never>>
     */ 

    const getUser = async () => {
        
        const user = await axios.get('http://localhost/api/user')
    };

    return {
        getUser
    };
}
