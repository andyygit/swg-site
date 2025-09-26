class Showerrors {
  constructor(errors) {
    this.errors = errors;
  }
  render() {
    this.errors[0].field
      .closest('form')
      .querySelectorAll('.text-sm.text-red-600')
      .forEach((item) => item.remove());
    this.errors.forEach((error) => {
      let alert = document.createElement('p');
      alert.className = 'text-sm text-red-600';
      alert.textContent = error.message;
      error.field.insertAdjacentElement('afterend', alert);
    });
  }
}

export { Showerrors };
