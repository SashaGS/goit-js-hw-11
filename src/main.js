import { getImagesByQuery } from './js/pixabay-api'
import { createGallery,clearGallery,showLoader,hideLoader } from './js/render-functions'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const elemGalary = document.querySelector('ul.gallery');


// Pixabay
const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => { 
        e.preventDefault(); 
        clearGallery(elemGalary);
        showLoader();
        // setTimeout(() => {
        const formData = new FormData(form);
        const searchText = formData.get('search-text');
        const arrayData = getImagesByQuery(searchText)
            .then(data => {
                const marray = data.hits;
                if (Array.isArray(marray) && marray.length !== 0 ) {
                    console.log(marray.length);
                    createGallery(marray,elemGalary);               
                } else {                               
                    iziToast.show({
                    title: 'icon',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    backgroundColor: '#EF4040',
                    position:'topRight',
                    radius: 35,
                    maxWidth:500}); 
                }     
            })
            .catch(err => console.error(err)).finally(hideLoader);
    });

