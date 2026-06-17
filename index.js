import{a as m,S as f,i as c}from"./assets/vendor-DaKTFKe4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const p="56294384-c3e46a2de7dfa7e052cf699f1";m.defaults.baseURL="https://pixabay.com/api/";function h(e){const a=new URLSearchParams({key:p,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return m.get(`?${a}`).then(o=>o.data)}let s;const l=document.querySelector(".loader");function y(e,a){const o=b(e);a.innerHTML=o,s=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s.refresh()}function g(e){return`<li class="gallery-item"> 
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
    </li>`}function b(e){return e.map(g).join("")}function L(e){e.innerHTML="",s!==void 0&&s.destroy()}function w(){l&&l.classList.remove("hidden")}function $(){l&&l.classList.add("hidden")}const u=document.querySelector("ul.gallery"),d=document.querySelector(".form");d.addEventListener("submit",e=>{e.preventDefault(),L(u),w();const o=new FormData(d).get("search-text");o===""&&c.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500}),h(o).then(i=>{const t=i.hits;t.length!==0?y(t,u):c.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}).catch(i=>c.error({title:"Error",message:`${i}`,backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})).finally(()=>$())});
//# sourceMappingURL=index.js.map
