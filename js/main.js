function ibg(){for(var e=document.querySelectorAll(".ibg"),t=0;t<e.length;t++)e[t].querySelector("img")&&(e[t].style.backgroundImage="url("+e[t].querySelector("img").getAttribute("src")+")")}function unloadImages(){document.documentElement.offsetWidth<1050&&(ibgs[0].classList.add("ibg"),ibgs[1].classList.add("ibg"),ibgs[2].classList.add("ibg"))}function onMenuLinkClick(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){var n=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector(".header").offsetHeight;burgerMenu.classList.contains("_active")&&(document.body.classList.remove("_lock"),burgerMenu.classList.remove("_active"),menu.classList.remove("_active")),window.scrollTo({top:n,behavior:"smooth"}),e.preventDefault()}}var burgerMenu=document.querySelector(".header__burger"),menu=document.querySelector(".header__list");burgerMenu&&burgerMenu.addEventListener("click",function(){document.body.classList.toggle("_lock"),burgerMenu.classList.toggle("_active"),menu.classList.toggle("_active")}),ibg();var main=new Swiper(".main",{navigation:{nextEl:".main__next",prevEl:".main__prev"},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},speed:900}),tabs=document.querySelectorAll(".properties__tab"),contents=document.querySelectorAll(".properties__content");tabs.forEach(function(e,t){e.addEventListener("click",function(){tabs.forEach(function(e){return e.classList.remove("active")}),e.classList.add("active"),contents.forEach(function(e){return e.classList.remove("active")}),contents[t].classList.add("active")})}),tabs[0].click();var ibgs=document.querySelectorAll(".items__ibg");unloadImages();var menuLinks=document.querySelectorAll(".nav__link[data-goto]");0<menuLinks.length&&menuLinks.forEach(function(e){e.addEventListener("click",onMenuLinkClick)});