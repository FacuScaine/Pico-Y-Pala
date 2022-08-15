/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const btn = document.getElementById('Button');

document.getElementById('contactForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_o1hkxrf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


//Iniciar las alturas máxima y mínima del bloque contenedor.
//mínima es con el texto oculto, máxima con el texto visible.
var caja = document.getElementById("caja");
var moreText = document.getElementById("more");
caja.max = caja.offsetHeight + 'px';
moreText.style.display = 'none';
caja.min = caja.offsetHeight + 'px';
caja.style.height = caja.min;
caja.style.transition = "height 1500ms";
//Esta función cambia la altura y oculta los botones si está abriendo
//y muestra el texto completo
function toggle() {
  var dots = document.getElementById("dots");
  if (caja.style.height != caja.min && caja.style.height != '') {
    caja.style.height = caja.min;
  } else {
    dots.style.display = "none";
    caja.style.height = caja.max;
    moreText.style.display = "inline";
  }
}

//Función para el evento fin de transición 
function cambiarAlto() {
  var dots = document.getElementById("dots");
  var btnText = document.getElementById("myBtn");
  //Si está cerrando el botón pone Read less  
  //Tb se puede comprobar con la altura de caja.
  if (btnText.innerHTML == "¡Te dije que NO!") {
    dots.style.display = "inline";
    btnText.innerHTML = "No hagas click";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "¡Te dije que NO!";
    moreText.style.display = "inline";
  }
}
//asigna el evento, por esto debe estar al final
document.getElementById("caja").addEventListener("transitionend", cambiarAlto, false);