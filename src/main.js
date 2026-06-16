import { getImagesByQuery } from './js/pixabay-api'
import { createGallery,clearGallery,showLoader,hideLoader } from './js/render-functions'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const elemGalary = document.querySelector('ul.gallery');
// elemGalary.innerHTML = `<span class="loader hidden"></span>`;

// Pixabay
const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        showLoader();
                 
        const formData = new FormData(form);
        const searchText = formData.get('search-text');
        // console.log(searchText);
        const arrayData = getImagesByQuery(searchText)
            .then(response => {
                const marray = response.data.hits;
                if (Array.isArray(marray) && marray.length !== 0 ) {
                    console.log(marray.length);
                    createGallery(marray,elemGalary);  
                    // hideLoader();             
                } else {                   
                    // console.log(marray);              
                    iziToast.show({
                    title: 'icon',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    backgroundColor: '#EF4040',
                    position:'topRight',
                    radius: 35,
                    maxWidth:500}); 
                    clearGallery(elemGalary);
                }     
            })
            .catch(err=> console.log(err)).finally(hideLoader());
        // console.log();
    });


