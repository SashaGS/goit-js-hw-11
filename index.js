import{a as n,S as c,i as u}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="56294384-c3e46a2de7dfa7e052cf699f1";n.defaults.baseURL="https://pixabay.com/api/";function f(t){const o=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return n.get(`?${o}`)}const p=document.querySelector("ul.gallery");function g(t){const o=y(t);p.innerHTML=o,console.log(o),new c(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250})}function d(t){return`<li class="gallery-item"> 
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />          
          <div class="caption">
              <label>Likes</label>
              <p>lk</p>
              <label>Likes</label>
              <p>lk</p>
              <label>Likes</label>
              <p>lk</p>
          </div>        
        </a>        
    </li>`}function y(t){return t.map(d).join("")}const l=document.querySelector(".form");l.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(l).get("search-text");f(s).then(a=>{const e=a.data.hits;Array.isArray(e)&&e.length!==0?(console.log(e.length),g(e)):(console.log(e),u.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}))}).catch(a=>console.log(a))});
//# sourceMappingURL=index.js.map
