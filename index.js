import{a as d,S as m,i as n}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const f="56294384-c3e46a2de7dfa7e052cf699f1";d.defaults.baseURL="https://pixabay.com/api/";function p(e){const o=new URLSearchParams({key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`?${o}`).then(a=>a.data)}let s;function y(e,o){const a=g(e);o.innerHTML=a,s=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s.refresh()}function h(e){return`<li class="gallery-item"> 
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
    </li>`}function g(e){return e.map(h).join("")}function b(e){e.innerHTML="",s!==void 0&&s.destroy()}function L(){document.querySelector(".loader")&&document.querySelector(".loader").classList.remove("hidden")}function w(){document.querySelector(".loader")&&document.querySelector(".loader").classList.add("hidden")}const c=document.querySelector("ul.gallery"),u=document.querySelector(".form");u.addEventListener("submit",e=>{e.preventDefault(),b(c),L();const a=new FormData(u).get("search-text");p(a).then(l=>{const t=l.hits;t.length!==0?(console.log(t.length),y(t,c)):n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}).catch(l=>n.error({title:"Error",message:`${l}`,backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})).finally(()=>w())});
//# sourceMappingURL=index.js.map
