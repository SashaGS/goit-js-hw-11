import{a as c,S as l,i as u}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="56294384-c3e46a2de7dfa7e052cf699f1";c.defaults.baseURL="https://pixabay.com/api/";function f(t){const o=new URLSearchParams({key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return c.get(`?${o}`)}const g=document.querySelector("ul.gallery");function y(t){const o=p(t);g.innerHTML=o,console.log(o),new l(".gallery a",{captions:!0,captionPosition:"bottom",captionDelay:250})}function d(t){return`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
    </li>`}function p(t){return t.map(d).join("")}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(i).get("search-text");f(s).then(a=>{const e=a.data.hits;Array.isArray(e)&&e.length!==0?(console.log(e.length),y(e)):(console.log(e),u.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}))}).catch(a=>console.log(a))});
//# sourceMappingURL=index.js.map
