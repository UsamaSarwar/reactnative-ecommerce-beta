const validateEmail = (text) => {
  if (text.match("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}")) {
    return [false, ""];
  } else {
    if (text != "") {
      return [true, "*Please enter valid email adress"];
    } else {
      return [true, "*This field is required"];
    }
  }
};

const validatePhone = (text) => {
  if (isNaN(text)) {
    return [true, "Not a valid number"];
  }
  if (!text.match("[0-9]{11}")) {
    return [true, "Length should be equal to 11"];
  }
  return [false, ""];
};

const validateEmpty = (text) => {
  if (text != "") {
    return [false, ""];
  } else {
    return [true, "*This field is required"];
  }
};

const validateText = (text, type) => {
  if (!type) {
    return validateEmpty(text);
  } else if (type === "email") {
    return validateEmail(text);
  } else if (type === "phone") {
    return validatePhone(text);
  } else {
    return validateEmpty(text);
  }
};

export default validateText;
