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
                const marray = response.data.hits;
                if (Array.isArray(marray) && marray.length !== 0 ) {
                    console.log(marray.length);
                    createGallery(marray);               
                } else {                   
                    console.log(marray); 
                    iziToast.show({
                    title: 'icon',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    backgroundColor: '#EF4040',
                    position:'topRight',
                    radius: 35,
                    maxWidth:500}) 
                }     
            })
            .catch(err=> console.log(err));
        // console.log();
    });


