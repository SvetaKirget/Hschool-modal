// const btn = document.querySelector('.btn');
// const result = document.querySelector('.result');
// const inp = document.querySelector('.inp');
// let inpValue = [];

// const checkOfInp = (inp) => {
//     if (inp.value.length == 0) throw new Error('Вы не ввели ничего');
//     if (!/^[а-яА-Яa-zA-Z'']+$/g.test(inp.value)) throw new Error('Это не город');
//     return true;
// }

// btn.addEventListener('click', () => {
//     try {
//         if (checkOfInp(inp)) {
//             result.textContent = '';
//             inpValue.push(inp.value);
//             for (let i = 0; i < inpValue.length; i++) {
//                 const p = document.createElement("p");
//                 p.className = class-p${i};
//                 result.appendChild(p);
//                 document.querySelector(.class-p${i}).innerHTML = ${i+1}) ${inpValue[i]};
//             }
//             result.style = 'color: black';
//             inp.value = '';
//         }
//     } catch (error) {
//         result.innerHTML = error.message;
//         result.style = 'color: red';
//         inp.value = '';
//     }
// });

const result = document.querySelector(".result");
const inp = document.querySelector(".inp");

const isValid = (arr) => {
  if (arr.length === 0) throw new Error("Пустой массив");
  // if (!/^[а-яА-Яa-zA-Z'']+$/g.test(arr)) throw new Error('Это не город');
  return true;
};

const isShow = () => {
  const findParag = document.querySelector(".result p");
  if (!findParag) return true;
  else return false;
};

inp.addEventListener("click", () => {
  try {
    if (isShow()) {
      const arr = ["Businessman", "Employee", "Freelancer", "Retired"];
      if (isValid(arr)) {
        for (let i = 0; i < arr.length; i++) {
          const p = document.createElement("p");
          p.className = `class-p${i}`;
          p.style = `
         padding: 16px 0 16px 16px;
        `;

          result.appendChild(p);
          document.querySelector(`.class-p${i}`).innerHTML = arr[i];
        }
      }
    } else {
      result.innerHTML = "";
    }
  } catch (er) {
    alert(er.message);
  }
});

result.addEventListener('click', (event) => {
    try {
        inp.value = event.target.textContent;
    } catch (er) {
        alert(er.message)
    }
})

renderArr(arr);
