
import axios from "axios"

const url = "http://localhost:8000/";

axios.defaults.headers['Accept'] = 'application/json';


function getArticle(id) {
    return axios.get(url + 'article/' + id).then((response) => response.data)
}




export default {
    getArticle
}
