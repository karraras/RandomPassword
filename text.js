let input = document.querySelector("input");
let button = document.querySelector("button");
let copyBTN = document.querySelector(".fa-copy");
let random = "!w3g$g(b)k4&@i=+@1f+-of$".split("");
let newRan = "";

button.onclick = function () {
  input.value = "";
  newRan = "";
  for (let i = 0; i < random.length; i++) {
    if (i <= 10) {
      newRan += random[Math.floor(Math.random() * random.length)];
    }
  }
  input.value = newRan;
  copyBTN.onclick = function () {
    input.select();
    input.setSelectionRange(0, 99999);
  };
};
