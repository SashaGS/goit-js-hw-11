import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

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
        if (searchText === "") {
           iziToast.show({
                    title: 'Error',
                    message: `Empty search field`,
                    backgroundColor: '#c4501b',
                    position:'topRight',
                    radius: 35,
                    maxWidth:500});  
            return;        
        }
        const arrayData = getImagesByQuery(searchText)
            .then(data => {
                const marray = data.hits;
                if (marray.length !== 0 ) {
                    console.log(marray.length);
                    createGallery(marray,elemGalary);               
                } else {                               
                    iziToast.show({
                    title: 'Error',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    backgroundColor: '#EF4040',
                    position:'topRight',
                    radius: 35,
                    maxWidth:500}); 
                }     
            })
            .catch(err => iziToast.error({
                    title: 'Error',
                    message: `${err}`,
                    backgroundColor: '#EF4040',
                    position:'topRight',
                    radius: 35,
                    maxWidth:500})).finally(() => hideLoader());
    });

