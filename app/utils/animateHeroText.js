export const animateHeroText = (e) => {
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