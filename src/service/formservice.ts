const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,}$/;
const MESSAGE_CODE_PATTERN =
  /<\/?[a-z][^>]*>|<!--|-->|javascript\s*:|\bon[a-z]+\s*=|\b(?:eval|alert|prompt|confirm)\s*\(|\b(?:document|window|console)\s*\.|\b(?:const|let|var)\s+[A-Za-z_$]|\bfunction\s*[A-Za-z_$]*\s*\(|=>/i;

type ValidationState = "valid" | "invalid" | null;
type ContactApiResponse = {
  success: boolean;
  message: string;
};

function isContactApiResponse(value: unknown): value is ContactApiResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    typeof value.success === "boolean" &&
    "message" in value &&
    typeof value.message === "string"
  );
}

function updateStatus(
  status: HTMLElement,
  state: ValidationState,
  message: string
): void {
  const icon = status.querySelector<HTMLImageElement>("img");
  const messageElement = status.querySelector<HTMLElement>(".validation-message");

  if (!icon || !messageElement) {
    throw new Error("Die Statusanzeige für die Formularvalidierung ist unvollständig.");
  }

  status.classList.toggle("is-valid", state === "valid");
  status.classList.toggle("is-invalid", state === "invalid");
  messageElement.textContent = message;

  if (state === null) {
    icon.removeAttribute("src");
    return;
  }

  icon.src =
    state === "valid"
      ? "/img/icons/susses-icon.svg"
      : "/img/icons/error-icon.svg";
}

export function setupFormInputs(): void {
  const form = document.querySelector<HTMLFormElement>(".contact-form");
  const formFooter = document.querySelector<HTMLElement>(".contact-form-footer");

  if (!form || !formFooter) {
    throw new Error("Das Kontaktformular wurde nicht gefunden.");
  }

  const nameInput = form.querySelector<HTMLInputElement>("#vollname");
  const emailInput = form.querySelector<HTMLInputElement>("#email");
  const messageInput = form.querySelector<HTMLTextAreaElement>("#nachricht");
  const privacyCheckbox = form.querySelector<HTMLInputElement>("#privacy-consent");
  const nameStatus = form.querySelector<HTMLElement>("#name-status");
  const emailStatus = form.querySelector<HTMLElement>("#email-status");
  const messageStatus = form.querySelector<HTMLElement>("#message-status");
  const privacyStatus = form.querySelector<HTMLElement>("#privacy-status");
  const formFeedback = form.querySelector<HTMLParagraphElement>("#form-feedback");

  if (
    !nameInput ||
    !emailInput ||
    !messageInput ||
    !privacyCheckbox ||
    !nameStatus ||
    !emailStatus ||
    !messageStatus ||
    !privacyStatus ||
    !formFeedback
  ) {
    throw new Error("Die Validierungsfelder im Kontaktformular wurden nicht gefunden.");
  }

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "--primary-btn --send";
  submitButton.textContent = "Senden";
  submitButton.disabled = true;
  formFooter.append(submitButton);

  let isSending = false;
  let hasSubmitted = false;
  let nameTouched = false;
  let emailTouched = false;
  let messageTouched = false;
  let privacyTouched = false;

  const updateSubmitButton = (): void => {
    const nameIsValid = nameInput.value.trim().length >= 7;
    const emailIsValid = EMAIL_PATTERN.test(emailInput.value.trim());
    const message = messageInput.value.trim();
    const messageIsValid =
      Array.from(message).length >= 11 && !MESSAGE_CODE_PATTERN.test(message);
    const privacyIsValid = privacyCheckbox.checked;

    submitButton.disabled =
      isSending ||
      !(nameIsValid && emailIsValid && messageIsValid && privacyIsValid);
  };

  const clearFeedback = (): void => {
    formFeedback.textContent = "";
    formFeedback.classList.remove("is-success", "is-error");
  };

  const validateName = (
    showEmptyError = nameTouched || hasSubmitted
  ): void => {
    const name = nameInput.value.trim();

    if (!name) {
      const message = showEmptyError ? "Bitte füllen Sie dieses Feld aus." : "";
      updateStatus(nameStatus, showEmptyError ? "invalid" : null, message);
      nameInput.setCustomValidity(message);
      return;
    }

    const isValid = name.length >= 7;
    const message = isValid
      ? "Name hat ein gültiges Format."
      : "Der Name muss mindestens 7 Zeichen lang sein.";

    updateStatus(nameStatus, isValid ? "valid" : "invalid", message);
    nameInput.setCustomValidity(isValid ? "" : message);
  };

  const validateEmail = (
    showEmptyError = emailTouched || hasSubmitted
  ): void => {
    const email = emailInput.value.trim();

    if (!email) {
      const message = showEmptyError ? "Bitte geben sie ihre Nachricht ein." : "";
      updateStatus(emailStatus, showEmptyError ? "invalid" : null, message);
      emailInput.setCustomValidity(message);
      return;
    }

    const isValid = EMAIL_PATTERN.test(email);
    const message = isValid
      ? "E-Mail-Adresse hat ein gültiges Format."
      : "Bitte gib eine gültige E-Mail-Adresse ein.";

    updateStatus(emailStatus, isValid ? "valid" : "invalid", message);
    emailInput.setCustomValidity(isValid ? "" : message);
  };

  const validateMessage = (
    showEmptyError = messageTouched || hasSubmitted
  ): void => {
    const message = messageInput.value.trim();

    if (!message) {
      const error = showEmptyError ? "Bitte geben sie ihre Nachricht ein." : "";
      updateStatus(messageStatus, showEmptyError ? "invalid" : null, error);
      messageInput.setCustomValidity(error);
      return;
    }

    if (Array.from(message).length < 10) {
      const error = "Die Nachricht muss mindestens 10 Zeichen lang sein.";
      updateStatus(messageStatus, "invalid", error);
      messageInput.setCustomValidity(error);
      return;
    }

    if (MESSAGE_CODE_PATTERN.test(message)) {
      const error = "Bitte geben Sie keinen HTML- oder JavaScript-Code ein.";
      updateStatus(messageStatus, "invalid", error);
      messageInput.setCustomValidity(error);
      return;
    }

    updateStatus(messageStatus, "valid", "Nachricht hat ein gültiges Format.");
    messageInput.setCustomValidity("");
  };

  const validatePrivacy = (
    showError = privacyTouched || hasSubmitted
  ): void => {
    if (!privacyCheckbox.checked) {
      const error = showError
        ? "Bitte stimmen Sie der Datenschutzerklärung zu."
        : "";
      updateStatus(privacyStatus, showError ? "invalid" : null, error);
      privacyCheckbox.setCustomValidity(error);
      return;
    }

    updateStatus(privacyStatus, "valid", "Datenschutzerklärung bestätigt.");
    privacyCheckbox.setCustomValidity("");
  };

  nameInput.addEventListener("input", () => {
    nameTouched = true;
    clearFeedback();
    validateName();
    updateSubmitButton();
  });
  emailInput.addEventListener("input", () => {
    emailTouched = true;
    clearFeedback();
    validateEmail();
    updateSubmitButton();
  });
  messageInput.addEventListener("input", () => {
    messageTouched = true;
    clearFeedback();
    validateMessage();
    updateSubmitButton();
  });
  privacyCheckbox.addEventListener("change", () => {
    privacyTouched = true;
    clearFeedback();
    validatePrivacy();
    updateSubmitButton();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (isSending) {
      return;
    }

    hasSubmitted = true;

    const fields = form.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");

    fields.forEach((field) => {
      field.value = field.value.trim().replace(/[ \t]+/g, " ");
    });

    validateName();
    validateEmail();
    validateMessage();
    validatePrivacy();
    updateSubmitButton();

    const invalidField = Array.from(fields).find(
      (field) => !field.checkValidity()
    );

    if (invalidField) {
      invalidField.reportValidity();
      return;
    }

    isSending = true;
    updateSubmitButton();
    clearFeedback();
    formFeedback.textContent = "Nachricht wird gesendet …";
    submitButton.textContent = "Wird gesendet …";

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
          privacyAccepted: privacyCheckbox.checked,
        }),
      });

      let result: unknown;
      try {
        result = await response.json();
      } catch {
        throw new Error("Der Server hat eine ungültige Antwort zurückgegeben.");
      }

      if (!isContactApiResponse(result)) {
        throw new Error("Der Server hat eine ungültige Antwort zurückgegeben.");
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message);
      }

      form.reset();
      hasSubmitted = false;
      nameTouched = false;
      emailTouched = false;
      messageTouched = false;
      privacyTouched = false;
      validateName(false);
      validateEmail(false);
      validateMessage(false);
      validatePrivacy(false);

      formFeedback.classList.add("is-success");
      formFeedback.textContent = result.message;
         setTimeout(() => {
            formFeedback.textContent = "";
            formFeedback.classList.remove("is-success", "is-error");
        }, 3000);
    } catch (error) {
      formFeedback.classList.add("is-error");
      formFeedback.textContent =
        error instanceof Error
          ? error.message
          : "Die Nachricht konnte nicht versendet werden.";
      console.error("Kontaktformular-Versand fehlgeschlagen.", error);
    } finally {
      isSending = false;
      submitButton.textContent = "Senden";
      updateSubmitButton();
    }
  });
}