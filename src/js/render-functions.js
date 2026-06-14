
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export function createGallery(images) { 
    return imagesTamplate(images);    
}

function imageTamplate(image) { 
    // console.log(image.largeImageURL);
    return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>
    </li>`;
};    

function imagesTamplate(images) { 
    return images.map(imageTamplate).join('');
};