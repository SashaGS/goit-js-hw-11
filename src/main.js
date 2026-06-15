import { getImagesByQuery } from './js/pixabay-api'
import { createGallery } from './js/render-functions'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


// Pixabay
const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => { 
        e.preventDefault();    
        const formData = new FormData(form);
        const searchText = formData.get('search-text');
        // console.log(searchText);
        const arrayData = getImagesByQuery(searchText)
            .then(response => {
                createGallery(response.data.hits);
            })
            .catch(err=>console.error(err));
        // console.log();
    });


