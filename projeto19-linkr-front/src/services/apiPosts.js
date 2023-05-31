import axios from "axios";

function postLink(body) {
    const promise = axios.post(`
    ${process.env.REACT_APP_API_URL}/timeline`, body);
    return promise;
};

const apiPosts = { postLink };
export default apiPosts;