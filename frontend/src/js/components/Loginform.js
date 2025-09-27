import { postData } from '../helpers/fetch.js';
import { Validate } from '../helpers/Validate.js';
import { Showerrors } from '../helpers/Output.js';
import Store from '../helpers/Store.js';

class MyLoginForm extends HTMLElement {
  constructor() {
    super();
  }
  async #handleClick(event) {
    event.preventDefault();
    let validation = new Validate(this);
    validation.checkLoginForm();
    if (validation.passed) {
      let username = this.querySelector('#username').value;
      let password = this.querySelector('#password').value;
      const response = await postData('http://localhost:3000/auth/login', {
        username: username,
        password: password,
      });
      Store.addData('session', response.token);
      this.innerHTML += `<p>Succes! Poti continua catre <a href="/" class="underline" data-link>Prima pagina</a></p>`;
      this.children[0].style.display = 'none';
    } else {
      let errors = new Showerrors(validation.errors);
      errors.render();
    }
  }
  connectedCallback() {
    this.innerHTML = `
      <div id="login-form" class="mx-4 mt-24 md:max-w-1/2 md:mx-auto p-8 rounded-2xl inset-ring inset-ring-gray-200 shadow-xl/30">
        <div class="grid gap-5">
          <h1 class="text-2xl font-bold tracking-tighter text-gray-600">Conectare</h1>
          <p class="text-black/70 text-sm font-light italic">Acces la comunitatea online a cuplurilor swinger din România și
            nu numai...</p>
          <form action="" class="space-y-2 text-sm">
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-user"></i>
              </div>
              <input id="username" name="username" type="text" placeholder="Utilizator"
                class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in">
            </div>
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-lock"></i>
              </div>
              <input id="password" name="password" type="password" placeholder="Parola"
                class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in">
            </div>
            <button type="submit" class="w-full sm:w-80 font-semibold text-gray-900 rounded-full bg-gradient-to-r from-violet-200 to-cyan-200 py-2 transition-transform duration-300 ease-out hover:scale-102">
              Autentificare
            </button>
          </form>
          <div class="grid grid-cols-3 items-center text-gray-400">
            <hr>
            <p class="text-sm text-center">SAU</p>
            <hr>
          </div>
          <div class="space-y-1 text-sm font-extralight">
            <p>
              Ai uitat parola?
              <a href="/resetpassword" class="text-[#2FB8FF] font-semibold cursor-pointer" data-link>Setează o nouă parolă</a>
            </p>
            <p>
              Nu ai cont?
              <a href="/register" class="text-[#2FB8FF] font-semibold cursor-pointer" data-link>Înscrie-te</a>
            </p>
          </div>
        </div>
      </div>
		`;
    this.querySelector('button').addEventListener(
      'click',
      this.#handleClick.bind(this)
    );
  }
  disconnectedCallback() {
    this.querySelector('button').removeEventListener(
      'click',
      this.#handleClick
    );
  }
}

export default MyLoginForm;
