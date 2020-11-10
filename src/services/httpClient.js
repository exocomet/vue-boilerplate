import axios from 'axios';
import {getWebRoot} from '../utils'

// https://www.digitalocean.com/community/tutorials/vuejs-rest-api-axios
// https://www.codementor.io/@capocaccia/keeping-axios-where-it-belongs-o6xidrkrk

const httpClient = axios.create({
  baseURL: getWebRoot(),
  headers: {
    // Authorization: 'Bearer {token}'
  }
});

export default httpClient;