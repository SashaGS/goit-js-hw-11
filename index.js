import{S as m,a as d,i as f}from"./assets/vendor-DaKTFKe4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();let l;function p(t,a){const s=h(t);a.innerHTML=s,l=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),l.refresh()}function y(t){return`<li class="gallery-item"> 
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
    </li>`}function h(t){return t.map(y).join("")}function c(t){t.innerHTML="",l!==void 0&&l.destroy()}function g(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const L="56294384-c3e46a2de7dfa7e052cf699f1";d.defaults.baseURL="https://pixabay.com/api/";function w(t){g();const a=new URLSearchParams({key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),s=d.get(`?${a}`).then(o=>o.data.hits);return b(),s}const n=document.querySelector("ul.gallery"),u=document.querySelector(".form");u.addEventListener("submit",t=>{t.preventDefault(),c(n);const s=new FormData(u).get("search-text");w(s).then(o=>{const e=o;Array.isArray(e)&&e.length!==0?(console.log(e.length),p(e,n)):(f.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}),c(n))}).catch(o=>console.log(o))});
//# sourceMappingURL=index.js.map
