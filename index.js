import{a as n,S as u,i as m}from"./assets/vendor-DaKTFKe4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p="56294384-c3e46a2de7dfa7e052cf699f1";n.defaults.baseURL="https://pixabay.com/api/";function f(t){const a=new URLSearchParams({key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return n.get(`?${a}`)}const c=document.querySelector("ul.gallery");function y(t){const a=g(t);c.innerHTML=a,new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function d(t){return`<li class="gallery-item"> 
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
    </li>`}function g(t){return t.map(d).join("")}function h(){c.innerHTML="<p> </p>",gallery.destroy()}const i=document.querySelector(".form");i.addEventListener("submit",t=>{t.preventDefault();const l=new FormData(i).get("search-text");f(l).then(o=>{const e=o.data.hits;Array.isArray(e)&&e.length!==0?(console.log(e.length),y(e)):(m.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}),h())}).catch(o=>console.log(o))});
//# sourceMappingURL=index.js.map
