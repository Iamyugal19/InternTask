import axios from 'axios';

const API_URL  = ` https://jsonplaceholder.typicode.com/users`;
const API_POST = `https://jsonplaceholder.typicode.com/posts?userId=`
export const apiUsers = async () => {
    try{
        const response = axios.get(API_URL)
            return response;
    }catch(err){
        console.log(err);
    }
}

export const apiPosts = async (id) => {
    try{
        const response = axios.get(API_POST + id);
        return response;
    }catch(err){
        console.log(err);
    }
}