import axios from 'axios';


const apiPost = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts'
});

export default apiPost;