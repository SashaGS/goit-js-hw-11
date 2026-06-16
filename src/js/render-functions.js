
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let gallery;
// const elemGalary = document.querySelector('ul.gallery');
// elemGalary.innerHTML = `<span class="loader hidden"></span>`;

export function createGallery(images,elemGalary) { 
    const markup = imagesTamplate(images); 
    elemGalary.innerHTML = markup;
    // console.log(markup);   

    gallery = new SimpleLightbox('.gallery a',{
        captions: true,              // вмикає підписи
        captionsData: 'alt',         // джерело підпису — атрибут alt
        captionPosition: 'bottom',   // позиція підпису знизу
        captionDelay: 250            // затримка у мілісекундах
   });  
    gallery.refresh();
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
          <ul class="caption">
              <li class="cap-item">
                  <label>Likes</label>
                  <p>${image.likes}</p>
              </li>
              <li class="cap-item">
                  <label>Views</label>
                  <p>${image.views}</p>
              </li>
              <li class="cap-item">
                  <label>Comments</label>
                  <p>${image.comments}</p>
              </li>
              <li class="cap-item">
                  <label>Downloads</label>
                  <p>${image.downloads}</p>
              </li>
          </ul>        
        </a>        
    </li>`;
};    

function imagesTamplate(images) { 
    return images.map(imageTamplate).join('');
};

export function clearGallery(elemGalary){

    elemGalary.innerHTML = '';
    gallery.destroy();
};

export function showLoader() {
  document.querySelector('.loader').classList.remove('hidden');
}

export function hideLoader() {
  document.querySelector('.loader').classList.add('hidden');
}
/* <span class="loader"></span> */
