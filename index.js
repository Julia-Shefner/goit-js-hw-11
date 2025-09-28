import{a as m,S as p,i as n}from"./assets/vendor-D8hBcPQM.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="52500093-745b03fff18f695149292f5ed";function g(i){return m.get("https://pixabay.com/api/",{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new p(".gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250});function v(i){const o=i.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:u})=>`
  <li class='gallery-item'>
  <a class='gallery-link' href='${a}'>
    <img class='gallery-image' src='${r}' alt='${e}'/>
  </a>
  <div class='gallery-info'>
    <div class='info-item'>
      <h3>Likes</h3>
      <p>${t}</p>
    </div>
    <div class='info-item'>
      <h3>Views</h3>
      <p>${s}</p>
    </div>
    <div class='info-item'>
      <h3>Comments</h3>
      <p>${f}</p>
    </div>
    <div class='info-item'>
      <h3>Downloads</h3>
      <p>${u}</p>
    </div>
  </div>
</li>
  `).join("");l.innerHTML=o,y.refresh()}function L(){l.innerHTML=""}function b(){c.classList.remove("hidden")}function S(){c.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",$);function $(i){i.preventDefault();const o=i.target.elements["search-text"].value.trim();L(),b(),g(o).then(r=>{r.data.hits.length||n.error({position:"topRight",progressBar:!1,timeout:3e3,message:"Sorry, there are no images matching your search query. Please try again!"}),v(r.data.hits)}).catch(r=>{n.error({position:"topRight",progressBar:!1,timeout:3e3,message:`${r.message}`})}).finally(()=>{S()}),d.reset()}
//# sourceMappingURL=index.js.map
