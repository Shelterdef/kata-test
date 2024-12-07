// Нахождение элементов в html и записали их в переменные
const buttonCode = document.getElementById("buttonCode");
const inputBtn = document.getElementById("input");
const result = document.getElementById("result");
const buttonCopy = document.getElementById("buttonCopy");
let textContent = `Результат: `;
let newText = "";

// Получение значения из текстового поля
inputBtn.addEventListener("input", function () {
  textContent = inputBtn.value;
});

// Функция для кнопки "Кодировать"
buttonCode.addEventListener("click", function () {
  newText = countLetters(textContent);
  result.textContent = `Результат: ${newText}`;
});

// Функция для кнопки "Скопировать в буфер обмена"
buttonCopy.addEventListener("click", function () {
  navigator.clipboard
    .writeText(newText)
    .then(() => {})
    .catch(() => {});
});

// Функция для кодирования введеного текста
function countLetters(string) {
  let result = "";
  let count = 1;

  for (let i = 1; i <= string.length; i++) {
    if (string[i] === string[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        result += count + string[i - 1];
      } else {
        result += string[i - 1];
      }
      count = 1;
    }
  }

  return result;
}
