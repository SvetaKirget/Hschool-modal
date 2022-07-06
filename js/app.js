const btn = document.querySelector(`.btn`);

const checkName = (val) => {
  if (val.length === 0) throw new Error("Введите имя!");
  if (!isNaN(val)) throw new Error(`Это число, введите имя текстом`);
  return true;
};

const checkEmail = (param) => {
  if (param.length === 0) throw new Error("Введите мэйл!");
  if (!/^[a-z0-9.-_]+@[a-z]+\.[a-z]{2,6}$/g.test(param))
    throw new Error(`Введите корректный адрес почты`);
  return true;
};

const checkPassword = (str) => {
  if (str.length === 0) throw new Error("Введите пароль!");
  if (str.length <= 7) throw new Error(`Введите корректный пароль`);
  return true;
};

const checkConfirmPassword = (str_1, str_2) => {
  if (str_1 !== str_2) throw new Error("Неверный пароль");
  return true;
};

btn.addEventListener("click", () => {
  try {
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const confirmPas = document.querySelector(".confirmPas").value;
    if (
      checkName(name) &&
      checkEmail(email) &&
      checkPassword(password) &&
      checkConfirmPassword(confirmPas, password)
    ) {
      alert(`Вы успешно зарегистрированы`);
    }
  } catch (er) {
    alert(er.message);
  }
});
