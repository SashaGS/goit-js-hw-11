import{a as n,S as c,i as u}from"./assets/vendor-DaKTFKe4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();const m="56294384-c3e46a2de7dfa7e052cf699f1";n.defaults.baseURL="https://pixabay.com/api/";function p(t){const r=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return n.get(`?${r}`)}const f=document.querySelector("ul.gallery");function d(t){const r=g(t);f.innerHTML=r,new c(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function y(t){return`<li class="gallery-item"> 
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
    </li>`}function g(t){return t.map(y).join("")}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const l=new FormData(i).get("search-text");p(l).then(o=>{const e=o.data.hits;Array.isArray(e)&&e.length!==0?(console.log(e.length),d(e)):(console.log(e),u.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}))}).catch(o=>console.log(o))});
//# sourceMappingURL=index.js.map
