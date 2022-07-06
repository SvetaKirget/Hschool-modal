const btn = document.querySelector(`.btn`);
const result = document.querySelector(".result");

const checkName = (val) => {
  if (val.value.length === 0) throw new Error("Введите имя!");
  if (!isNaN(val)) throw new Error(`Это число, введите имя текстом`);
  return true;
};

const checkEmail = (param) => {
  if (param.value.length === 0) throw new Error("Введите мэйл!");
  if (!/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/g.test(param))
    throw new Error(`Введите корректный адрес почты`);
  return true;
};

const checkPassword = (str) => {
  if (str.value.length === 0) throw new Error("Введите пароль!");
  if (str.length <= 7) throw new Error(`Введите корректный пароль`);
  return true;
};

const checkConfirmPassword = (str) => {
  if (checkPassword !== str) throw new Error("Неверный пароль");
  return true;
};

btn.addEventListener("click", () => {
  try {
    const name = document.querySelector(".name");
    const email = document.querySelector(".email");
    const password = document.querySelector(".password");
    const confirmPas = document.querySelector(".confirmPas");
    if (
      checkName(name) &&
      checkEmail(email) &&
      checkPassword(password) &&
      checkConfirmPassword(confirmPas)
    ) {
      result.innerHTML = alert(`Вы успешно зарегистрированы`);
    }
  } catch (er) {
    result.innerHTML = er.message;
    alert(result);
  }
});
