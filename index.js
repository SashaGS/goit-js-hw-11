import{S as m,a as u,i as d}from"./assets/vendor-DaKTFKe4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();let s;function f(t,a){const l=y(t);a.innerHTML=l,s=new m(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s.refresh()}function p(t){return`<li class="gallery-item"> 
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
    </li>`}function y(t){return t.map(p).join("")}function h(t){t.innerHTML="",s!==void 0&&s.destroy()}function g(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const b="56294384-c3e46a2de7dfa7e052cf699f1";u.defaults.baseURL="https://pixabay.com/api/";function w(t){const a=new URLSearchParams({key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"});return u.get(`?${a}`)}const n=document.querySelector("ul.gallery"),c=document.querySelector(".form");c.addEventListener("submit",t=>{t.preventDefault(),n.innerHTML="",g(),setTimeout(()=>{const l=new FormData(c).get("search-text");w(l).then(o=>{const e=o.data.hits;Array.isArray(e)&&e.length!==0?(console.log(e.length),f(e,n)):(d.show({title:"icon",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500}),h(n))}).catch(o=>console.log(o)).finally(L())},1e3)});
//# sourceMappingURL=index.js.map
