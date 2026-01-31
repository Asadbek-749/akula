const boxes = document.querySelectorAll(".box");
const restartBtn = document.getElementById("restartBtn");

let sharkIndex = null;
let timer = null;

function placeShark() {
  boxes.forEach((box) => (box.textContent = ""));

  sharkIndex = Math.floor(Math.random() * boxes.length);
  boxes[sharkIndex].textContent = "🦈";

  timer = setTimeout(() => {
    alert("❌ Vaqt tugadi, siz yutqazdingiz!");
    boxes[sharkIndex].textContent = "";
  }, 2000);
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (index === sharkIndex) {
      clearTimeout(timer);
      alert("🎉 Siz yutdingiz!");
    } else {
      alert("❌ Siz yutqazdingiz!");
    }
  });
});

restartBtn.addEventListener("click", () => {
  clearTimeout(timer);
  placeShark();
});

placeShark();
