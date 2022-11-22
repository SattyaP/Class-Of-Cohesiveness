import { animateHeroText } from "./utils/animateHeroText.js";

export class HeroText {
    animateText() {
        return window.setInterval(() => {
            let text = [
              "Selamat Datang",
              "Welcome Bro",
              "Sugeng Rawuh",
              "Irrashaimase",
              "Ahlan Wasahlan",
              "Ben Arrivato",
              "Wilujeng Sumping",
              "Dobro pozhalovat'"
            ]
            animateHeroText(text[Math.floor(Math.random()*text.length)])
          }, 5000);
    }
    animateLine() {
        return window.setInterval(() => {
            $("#garis").toggleClass("garis-ketik")
          }, 750);
    }

}