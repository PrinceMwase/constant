import axios from "axios";

export function tryLogin(){
    const login = async ( emails: string , passwords: string )=>{
        axios.defaults.withCredentials = true;
        
        const authentication = await axios.post('http://localhost/api/login', {
                                    'email' : emails,
                                    'password' : passwords
                                }).then( () => {
                                    axios.get( 'http://localhost/api/user' ).then(response => {
                                    console.log(response);
                                    
                                    })
                                } )
                                ;
        
        
    }

    return {
        login,
    }
}