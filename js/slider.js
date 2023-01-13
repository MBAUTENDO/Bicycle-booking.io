// Permet le fonctionnement du diaporama

var slider = {

    slideIndex: 0,

    // Permet de montrer les slides

    showSlides: function (n) {
        var slides = $(".slide");
        if (n > slides.length - 1) {
            this.slideIndex = 0
        }
        if (n < 0) {
            this.slideIndex = slides.length - 1
        }
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).css("display", "none");
        }
        $(slides[this.slideIndex]).css("display", "block");
    },

    // Affiche les slides suivantes

    nextSlide: function (n) {
        this.showSlides(this.slideIndex += n);
    },

    // Événement clavier

    keyboardEvent: function () {
        var self = this;
        $(document).keydown(function (e) {
            if (e.keyCode === 37) {
                self.nextSlide(-1);
            } else if (e.keyCode === 39) {
                self.nextSlide(1);
            }
        })
    },

    // Événement souris

    mouseEvent: function () {
        var self = this;
        var prev = $(".fa-chevron-left");
        var next = $(".fa-chevron-right");
        
        $(prev).click(function () {
            self.nextSlide(-1);
        })
        
        $(next).click(function (e) {
            self.nextSlide(1);
        })
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}