import{a as f,S as p,i as c}from"./assets/vendor-DaKTFKe4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="56294384-c3e46a2de7dfa7e052cf699f1";f.defaults.baseURL="https://pixabay.com/api/";function y(t){const a=new URLSearchParams({key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`?${a}`).then(o=>o.data)}let s;const l=document.querySelector(".loader");function g(t,a){const o=L(t);a.innerHTML=o,s=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s.refresh()}function b(t){return`<li class="gallery-item"> 
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
    </li>`}function L(t){return t.map(b).join("")}function w(t){t.innerHTML="",s!==void 0&&s.destroy()}function $(){l&&l.classList.remove("hidden")}function u(){l&&l.classList.add("hidden")}const d=document.querySelector("ul.gallery"),m=document.querySelector(".form");m.addEventListener("submit",t=>{t.preventDefault(),w(d),$();const o=new FormData(m).get("search-text");if(o===""){u(),c.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500});return}y(o).then(i=>{const e=i.hits;e.length!==0?(console.log(e.length),g(e,d)):c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}).catch(i=>c.error({title:"Error",message:`${i}`,backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})).finally(()=>u())});
//# sourceMappingURL=index.js.map
