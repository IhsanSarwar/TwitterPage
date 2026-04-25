function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  return /^\d{10}$/.test(value);
}

function validateField(inputId, errorId, validationFn, errorMessage) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  const isValid = validationFn(input.value);

  if (!isValid) {
    input.classList.add("invalid");
    error.textContent = errorMessage;
  } else {
    input.classList.remove("invalid");
    error.textContent = "";
  }

  return isValid;
}

function validateAll() {
  const firstNameValid = validateField(
    "first-name",
    "first-name-error",
    (v) => v.trim() !== "",
    "First name is required."
  );
  const lastNameValid = validateField(
    "last-name",
    "last-name-error",
    (v) => v.trim() !== "",
    "Last name is required."
  );
  const emailValid = validateField(
    "email",
    "email-error",
    (v) => isValidEmail(v),
    "Please enter a valid email address."
  );
  const phoneValid = validateField(
    "phone",
    "phone-error",
    (v) => isValidPhone(v),
    "Please enter a valid 10-digit phone number."
  );
  const yearValid = validateField(
    "year",
    "year-error",
    (v) => v !== "",
    "Please select your year."
  );
  const majorValid = validateField(
    "major",
    "major-error",
    (v) => v.trim() !== "",
    "Major is required."
  );

  const allValid =
    firstNameValid &&
    lastNameValid &&
    emailValid &&
    phoneValid &&
    yearValid &&
    majorValid;

  document.getElementById("submit-btn").disabled = !allValid;
}

const fields = ["first-name", "last-name", "email", "phone", "year", "major"];

fields.forEach((id) => {
  const el = document.getElementById(id);
  el.addEventListener("input", validateAll);
  el.addEventListener("change", validateAll);
});

document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Registration submitted successfully!");
  });

document.getElementById("reset-btn").addEventListener("click", function () {
  fields.forEach((id) => {
    const el = document.getElementById(id);
    el.value = "";
    el.classList.remove("invalid");
    document.getElementById(id + "-error").textContent = "";
  });
  document.getElementById("submit-btn").disabled = true;
});
