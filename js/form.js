var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate(".form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: {
      required: "Как вас зовут?",
      minLength: "Имя слишком короткое",
      maxLength: "Имя слишком длинное",
    },
    tel: {
      required: "Укажите ваш телефон",
      function: "Укажите ваш телефон",
    },
    email: {
      required: "Укажите ваш e-mail",
      email: "Укажите ваш e-mail",
    },
  },
  colorWrong: "#D11616",
});
