import { getImagesByQuery } from './js/pixabay-api'
import { createGallery } from './js/render-functions'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const elemGalary = document.querySelector('ul.gallery');

// Pixabay
const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => { 
        e.preventDefault();    
        const formData = new FormData(form);
        const searchText = formData.get('search-text');
        // console.log(searchText);
        const arrayData = getImagesByQuery(searchText)
            .then(response => {
                const markup = createGallery(response.data.hits);
                elemGalary.innerHTML = markup;
                console.log(markup);
            })
            .catch(err=>console.error(err));
        // console.log();
    });


