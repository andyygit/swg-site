export class Validate {
  constructor(component) {
    /**
     * @type {HTMLFormElement} this.form
     */
    this.form = component.querySelector('form');
    this.passed = false;
    this.errors = [];
    this.password = '';
  }
  checkRegisterForm() {
    for (let element of this.form.elements) {
      switch (element) {
        case username:
          if (element.value == '') {
            this.addError('Campul Nume utilizator este obligatoriu!', element);
          } else if (element.value.match(/\s/)) {
            this.addError(
              'Campul Nume utilizator nu trebuie sa contina spatii!',
              element
            );
          }
          break;
        case password:
          if (element.value == '') {
            this.addError('Campul Parola este obligatoriu!', element);
          } else if (element.value.match(/\s/)) {
            this.addError(
              'Campul Parola nu trebuie sa contina spatii!',
              element
            );
          } else {
            this.password = element.value;
          }
          break;
        case password2:
          if (this.password != '' && element.value != this.password) {
            this.addError('Parolele nu coincid!', element);
          }
          break;
        case email:
          if (element.value == '') {
            this.addError('Campul email este obligatoriu!', element);
          } else if (
            !element.value.match(
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/
            )
          ) {
            this.addError(
              'Campul email trebuie sa contina o adresa de mail valida!',
              element
            );
          }
          break;
        case city:
          if (element.value == '') {
            this.addError('Campul Localitate este obligatoriu!', element);
          }
          break;
        case gender:
          if (element.value == '') {
            this.addError('Campul Tip profil este obligatoriu!', element);
          }
          break;
      }
    }
    if (this.errors.length == 0) {
      this.passed = true;
    }
  }
  checkLoginForm() {
    for (let element of this.form.elements) {
      switch (element) {
        case username:
          if (element.value == '') {
            this.addError('Campul Nume utilizator este obligatoriu!', element);
          } else if (element.value.match(/\s/)) {
            this.addError(
              'Campul Nume utilizator nu trebuie sa contina spatii!',
              element
            );
          }
          break;
        case password:
          if (element.value == '') {
            this.addError('Campul Parola este obligatoriu!', element);
          } else if (element.value.match(/\s/)) {
            this.addError(
              'Campul Parola nu trebuie sa contina spatii!',
              element
            );
          }
          break;
      }
    }
    if (this.errors.length == 0) {
      this.passed = true;
    }
  }
  addError(error, field) {
    this.errors.push({
      message: error,
      field: field,
    });
  }
  errors() {
    return this.errors;
  }
  passed() {
    return this.passed;
  }
}
