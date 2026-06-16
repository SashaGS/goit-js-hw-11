
import axios from "axios";
import { showLoader,hideLoader } from './render-functions'

const myApiKey = "56294384-c3e46a2de7dfa7e052cf699f1";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    showLoader();
    const searchParams = new URLSearchParams({
    key:myApiKey,
    q:query,
    image_type:"photo",
    orientation:"horizontal",
    safesearch:"true" 
    });
    
    // const resp = axios.get(`?${searchParams}`);
    return axios.get(`?${searchParams}`);

}


// https://pixabay.com/api/?key=56294384-c3e46a2de7dfa7e052cf699f1&q=yellow+flowers&image_type=photo&pretty=true

// https://pixabay.com/api/key=56294384-c3e46a2de7dfa7e052cf699f1&q=yellow%2Bflowers&image_type=photo&orientation=horizontal&safesearch=true