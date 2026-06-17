import{a as d,S as f,i as n}from"./assets/vendor-DaKTFKe4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const p="56294384-c3e46a2de7dfa7e052cf699f1";d.defaults.baseURL="https://pixabay.com/api/";function h(t){const o=new URLSearchParams({key:p,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return d.get(`?${o}`).then(a=>a.data)}let s;const m=document.querySelector(".loader");function y(t,o){const a=b(t);o.innerHTML=a,s=new f(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),s.refresh()}function g(t){return`<li class="gallery-item"> 
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
    </li>`}function b(t){return t.map(g).join("")}function L(t){t.innerHTML="",s!==void 0&&s.destroy()}function w(){m&&document.querySelector(".loader").classList.remove("hidden")}function S(){m&&document.querySelector(".loader").classList.add("hidden")}const c=document.querySelector("ul.gallery"),u=document.querySelector(".form");u.addEventListener("submit",t=>{t.preventDefault(),L(c),w();const a=new FormData(u).get("search-text");if(a===""){n.show({title:"Error",message:"Empty search field",backgroundColor:"#c4501b",position:"topRight",radius:35,maxWidth:500});return}h(a).then(i=>{const e=i.hits;e.length!==0?(console.log(e.length),y(e,c)):n.show({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})}).catch(i=>n.error({title:"Error",message:`${i}`,backgroundColor:"#EF4040",position:"topRight",radius:35,maxWidth:500})).finally(()=>S())});
//# sourceMappingURL=index.js.map
