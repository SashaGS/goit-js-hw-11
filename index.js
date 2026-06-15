import{a as c,S as l}from"./assets/vendor-C9YsaPxL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const u="56294384-c3e46a2de7dfa7e052cf699f1";c.defaults.baseURL="https://pixabay.com/api/";function f(t){const o=new URLSearchParams({key:u,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return c.get(`?${o}`)}const m=document.querySelector("ul.gallery");function p(t){const o=y(t);m.innerHTML=o,console.log(o),new l(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250})}function d(t){return`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
    </li>`}function y(t){return t.map(d).join("")}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(i).get("search-text");f(n).then(a=>{p(a.data.hits)}).catch(a=>console.error(a))});
//# sourceMappingURL=index.js.map
