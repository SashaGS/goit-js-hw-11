
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const elemGalary = document.querySelector('ul.gallery');

export function createGallery(images) { 
    const markup = imagesTamplate(images); 
    elemGalary.innerHTML = markup;
    console.log(markup);   

   let gallery = new SimpleLightbox('.gallery a',{
        captions: true,              // вмикає підписи
        // captionsData: 'alt',         // джерело підпису — атрибут alt
        captionPosition: 'bottom',   // позиція підпису знизу
        captionDelay: 250            // затримка у мілісекундах
   });     

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
          <div class="caption">
              <label>Likes</label>
              <p>lk</p>
          </div>        
        </a>        
    </li>`;
};    

function imagesTamplate(images) { 
    return images.map(imageTamplate).join('');
};