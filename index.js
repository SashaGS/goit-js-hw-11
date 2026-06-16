import{S as d,a as u,i as f}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();let s;function m(e,o){const a=y(e);o.innerHTML=a,s=new d(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s.refresh()}function p(e){return`<li class="gallery-item"> 
        <a class="gallery-link" href="${e.largeImageURL}">    
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />          
          <ul class="caption">
              <li class="cap-item">
                  <label>Likes</label>
                  <p>${e.likes}</p>
              </li>
              <li class="cap-item">
                  <label>Views</label>
                  <p>${e.views}</p>
              </li>
              <li class="cap-item">
                  <label>Comments</label>
                  <p>${e.comments}</p>
              </li>
              <li class="cap-item">
                  <label>Downloads</label>
                  <p>${e.downloads}</p>
              </li>
          </ul>        
        </a>        
    </li>`}function y(e){return e.map(p).join("")}function h(e){e.innerHTML="",s!==void 0&&s.destroy()}function g(){document.querySelector(".loader")!==void 0&&document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader")!==void 0&&document.querySelector(".loader").classList.add("hidden")}const L="56294384-c3e46a2de7dfa7e052cf699f1";u.defaults.baseURL="https://pixabay.com/api/";function w(e){const o=new URLSearchParams({key:L,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`?${o}`).then(a=>a.data)}const n=document.querySelector("ul.gallery"),c=document.querySelector(".form");c.addEventListener("submit",e=>{e.preventDefault(),h(n),g();const a=new FormData(c).get("search-text");w(a).then(l=>{const t=l.hits;Array.isArray(t)&&t.length!==0?(console.log(t.length),m(t,n)):f.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}).catch(l=>console.error(l)).finally(b)});
//# sourceMappingURL=index.js.map
