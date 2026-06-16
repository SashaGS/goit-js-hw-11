import{S as d,a as u,i as f}from"./assets/vendor-DaKTFKe4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();let i;function p(t,a){const l=h(t);a.innerHTML=l,i=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),i.refresh()}function y(t){return`<li class="gallery-item"> 
        <a class="gallery-link" href="${t.largeImageURL}">    
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />          
          <ul class="caption">
              <li class="cap-item">
                  <label>Likes</label>
                  <p>${t.likes}</p>
              </li>
              <li class="cap-item">
                  <label>Views</label>
                  <p>${t.views}</p>
              </li>
              <li class="cap-item">
                  <label>Comments</label>
                  <p>${t.comments}</p>
              </li>
              <li class="cap-item">
                  <label>Downloads</label>
                  <p>${t.downloads}</p>
              </li>
          </ul>        
        </a>        
    </li>`}function h(t){return t.map(y).join("")}function g(t){t.innerHTML="",i.destroy()}function m(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const L="56294384-c3e46a2de7dfa7e052cf699f1";u.defaults.baseURL="https://pixabay.com/api/";function w(t){m();const a=new URLSearchParams({key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u.get(`?${a}`)}const n=document.querySelector("ul.gallery"),c=document.querySelector(".form");c.addEventListener("submit",t=>{t.preventDefault(),m();const l=new FormData(c).get("search-text");w(l).then(o=>{const e=o.data.hits;Array.isArray(e)&&e.length!==0?(console.log(e.length),p(e,n)):(f.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}),g(n))}).catch(o=>console.log(o)).finally(b())});
//# sourceMappingURL=index.js.map
