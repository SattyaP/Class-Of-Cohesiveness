$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

window.onscroll = scrollFunction;

function scrollFunction() {

  if (document.body.scrollTop > 260 || document.documentElement.scrollTop > 260) {
    document.querySelector("#myBtn").classList.add('myBtn-active')
  } else {
    document.querySelector("#myBtn").classList.remove('myBtn-active')
  }

}

let animGaris = window.setInterval(() => {
  $("#garis").toggleClass("garis-ketik")
}, 750);

let animText = window.setInterval(() => {
  let text = [
    "Selamat Datang",
    "Welcome Bro",
    "Sugeng Rawuh",
    "Irrashaimase",
    "Ahlan Wasahlan",
    "Ben Arrivato",
    "Wilujeng Sumping",
    "Suka Blyat'"
  ]
  animateHeroText(text[Math.floor(Math.random()*text.length)])
}, 5000);

const animationToggleOff = () => {
  window.clearInterval(animGaris);
  window.clearInterval(animText);
}
// animationToggleOff() 

const animateHeroText = (e) => {
  let interv = 70,
    textTo = e,
    currentText = $(".animate-text-1").text();
  // console.log(currentText);
  currentText.split('').forEach((e, x) => {
    window.setTimeout(() => {
      $(".animate-text-1").text(currentText.slice(0, -(x + 1)))
    }, x * interv);
  });
  window.setTimeout(() => {
    textTo.split('').forEach((e, x) => {
      window.setTimeout(() => {
        $(".animate-text-1").text(textTo.slice(0, x+1))
      }, x * interv);
    });
  }, currentText.length * interv + 50);
}

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}



