// const baseSize = 37.5
function setRem() {
  // const scale = document.documentElement.clientWidth / 750
  // document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  // const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  // const htmlDom = document.getElementsByTagName('html')[0];
  const fontSize = document.documentElement.clientWidth / 10;
  document.documentElement.style.fontSize =
    (fontSize > 54 ? 54 : fontSize < 32 ? 32 : fontSize) + "px";
}

setRem();

window.onresize = setRem;
