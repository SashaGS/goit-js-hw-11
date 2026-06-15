import{a as n,S as c,i as u}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="56294384-c3e46a2de7dfa7e052cf699f1";n.defaults.baseURL="https://pixabay.com/api/";function p(t){const o=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return n.get(`?${o}`)}const f=document.querySelector("ul.gallery");function d(t){const o=g(t);f.innerHTML=o,console.log(o),new c(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250})}function y(t){return`<li class="gallery-item"> 
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
    </li>`}function g(t){return t.map(y).join("")}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(i).get("search-text");p(s).then(a=>{const e=a.data.hits;Array.isArray(e)&&e.length!==0?(console.log(e.length),d(e)):(console.log(e),u.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}))}).catch(a=>console.log(a))});
//# sourceMappingURL=index.js.map
