import { postData } from '../helpers/fetch.js';
import Store from '../helpers/Store.js';

class MyLoginForm extends HTMLElement {
  constructor() {
    super();
  }
  async #handleClick(event) {
    event.preventDefault();
    let username = this.querySelector('#username').value;
    let password = this.querySelector('#password').value;
    const response = await postData('http://localhost:3000/auth/login', {
      username: username,
      password: password,
    });
    Store.addData('session', response);
    this.children[0].style.display = 'none';
    this.innerHTML += `<p>Succes! Poti continua catre <a href="/" class="underline" data-link="">Prima pagina</a></p>`;
  }
  connectedCallback() {
    this.innerHTML = `
		<div id="login-form" class="mx-4 p-8 rounded-2xl inset-ring inset-ring-gray-200 shadow-xl/30">
    <div class="grid gap-5">
      <h1 class="text-[40px] font-bold text-gray-600">Log in</h1>
      <p class="text-black/70">Access to 300+ hours of courses, tutorials and livestreams</p>
      <form action="" class="space-y-5">
        <div class="relative">
          <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-blue-300">
            <i class="fa-solid fa-user"></i>
          </div>
          <input id="username" name="username" type="text" placeholder="Utilizator" class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in">
        </div>
        <div class="relative">
          <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-blue-300">
            <i class="fa-solid fa-lock"></i>
          </div>
          <input id="password" name="password" type="password" placeholder="Parola" class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in">
        </div>
        <button class="w-full sm:w-80 font-semibold text-gray-600 rounded-full bg-gradient-to-r from-blue-400 to-cyan-200 py-2 transition-transform duration-300 ease-out hover:scale-102">
          Autentificare
        </button>
      </form>
      <div class="grid grid-cols-3 items-center text-gray-400">
        <hr>
        <p class="text-sm text-center">SAU</p>
        <hr>
      </div>
      <div class="text-gray-600 space-y-1 text-sm">
        <p>
          Ai uitat parola?
          <a href="#" class="text-[#2FB8FF] font-semibold cursor-pointer">Seteaza o noua parola</a>
        </p>
        <p>
          Nu ai cont?
          <a href="#" class="text-[#2FB8FF] font-semibold cursor-pointer">Inscrie-te</a>
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
