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
  check() {
    for (let element of this.form.elements) {
      switch (element) {
        case username:
          if (element.value == '') {
            this.addError('Campul Nume utilizator este obligatoriu!');
          } else if (element.value.match(/\s/)) {
            this.addError(
              'Campul Nume utilizator nu trebuie sa contina spatii!'
            );
          }
          break;
        case password:
          if (element.value == '') {
            this.addError('Campul Parola este obligatoriu!');
          } else if (element.value.match(/\s/)) {
            this.addError('Campul Parola nu trebuie sa contina spatii!');
          } else {
            this.password = element.value;
          }
          break;
        case password2:
          if (this.password != '' && element.value != this.password) {
            this.addError('Parolele nu coincid!');
          }
          break;
        case email:
          if (element.value == '') {
            this.addError('Campul email este obligatoriu!');
          } else if (
            !element.value.match(
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/
            )
          ) {
            this.addError(
              'Campul email trebuie sa contina o adresa de mail valida!'
            );
          }
          break;
        case city:
          if (element.value == '') {
            this.addError('Campul Localitate este obligatoriu!');
          }
          break;
        case gender:
          if (element.value == '') {
            this.addError('Campul Tip profil este obligatoriu!');
          }
          break;
      }
    }
    if (this.errors.length == 0) {
      this.passed = true;
    }
  }
  addError(error) {
    this.errors.push(error);
  }
  errors() {
    return this.errors;
  }
  passed() {
    return this.passed;
  }
}
