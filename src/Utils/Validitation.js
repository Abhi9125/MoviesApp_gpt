const checkValiditation = (emailValue, passwordValue, nameValue) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordValue);
  const isNameValid = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
    nameValue
  );
  if (isEmailValid === false) return "email is not valid.";
  if (isPasswordValid === false) return "password is not valid.";
  if (isNameValid === false) return "Pls enter right name.";

  return null;
};

export default checkValiditation;
