
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const elemGalary = document.querySelector('ul.gallery');

export function createGallery(images) { 
    const markup = imagesTamplate(images); 
    elemGalary.innerHTML = markup;
    // elemGalary.innerHTML = `<p>""</p>`;
    // console.log(markup);   

   let gallery = new SimpleLightbox('.gallery a',{
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

export function clearGallery(){
    
    elemGalary.innerHTML = `<p> </p>`;
    gallery.destroy();
    
};