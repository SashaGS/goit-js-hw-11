import{a as i}from"./assets/vendor-CBgSAh9K.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l="56294384-c3e46a2de7dfa7e052cf699f1";i.defaults.baseURL="https://pixabay.com/api/";function u(t){const o=new URLSearchParams({key:l,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return i.get(`?${o}`)}function f(t){return d(t)}function m(t){return`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>
    </li>`}function d(t){return t.map(m).join("")}const p=document.querySelector("ul.gallery"),c=document.querySelector(".form");c.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(c).get("search-text");u(s).then(a=>{const e=f(a.data.hits);p.innerHTML=e,console.log(e)}).catch(a=>console.error(a))});
//# sourceMappingURL=index.js.map
