
//МЕНЮ-БУРГЕР

var burgerMenu = document.querySelector('.header__burger');
var menu = document.querySelector('.header__list');
if (burgerMenu) {
	burgerMenu.addEventListener('click', function () {
		document.body.classList.toggle('_lock');
		burgerMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
	})
}


// ФУНКЦИЯ IBG

function ibg() {

	var ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


// СЛАЙДЕР

var main = new Swiper('.main', {
	navigation: {
		nextEl: '.main__next',
		prevEl: '.main__prev',
	},

	keyboard: {
		enabled: true,
		onlyInViewport: true,
	},

	loop: true,

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},

	speed: 900,
});

// ТАБЫ
var tabs = document.querySelectorAll('.properties__tab');
var contents = document.querySelectorAll('.properties__content');

tabs.forEach(function (tab, index) {
	tab.addEventListener("click", function () {


		// To remove active class from previous tab
		tabs.forEach(function (tab) {
			return tab.classList.remove("active");
		});

		tab.classList.add("active");

		//TO SHOW CONTENT ACCORDING TO PREVIOUS TAB

		//To hide previous tab content
		contents.forEach(function (c) {
			return c.classList.remove("active");
		});


		contents[index].classList.add("active");
	});

});

// To run the animation initially when the page loads
tabs[0].click();




// ДОБАВЛЯЕМ IBG НА ДИСПЛЕЯХ < 1050px
var ibgs = document.querySelectorAll('.items__ibg');


function unloadImages() {

	if (document.documentElement.offsetWidth < 1050) {

		ibgs[0].classList.add('ibg');
		ibgs[1].classList.add('ibg');
		ibgs[2].classList.add('ibg');

	}

}

unloadImages();

// НАВИГАЦИЯ
var menuLinks = document.querySelectorAll(".nav__link[data-goto]");
if (menuLinks.length > 0) {
	menuLinks.forEach(function (menuLink) {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		var menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			var goToBlock = document.querySelector(menuLink.dataset.goto);
			var goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			if (burgerMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				burgerMenu.classList.remove('_active');
				menu.classList.remove('_active');
			}

			window.scrollTo({
				top: goToBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}