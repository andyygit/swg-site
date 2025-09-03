class MyLoginForm extends HTMLElement {
  constructor() {
    super();
  }
  #handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    let username = this.querySelector('#username').value;
    let password = this.querySelector('#password').value;
    let ce = new CustomEvent('postlogin', {
      detail: {
        username,
        password,
      },
    });
    this.dispatchEvent(ce);
  }
  connectedCallback() {
    this.innerHTML = `
		<div id="login-form" class="mx-4 p-8 bg-black/50 rounded-2xl shadow-xl/30">
    <div class="grid gap-5">
      <h1 class="text-[40px] font-bold text-white">Login</h1>
      <p class="text-white/70">Access to 300+ hours of courses, tutorials and livestreams</p>
      <form action="" class="space-y-5 text-white">
        <div class="relative">
          <div class="absolute top-1 left-1 bg-white/25 rounded-full p-2 flex items-center justify-center text-blue-300">
            <i class="fa-solid fa-user"></i>
          </div>
          <input type="text" id="username" placeholder="Utilizator" class="w-full sm:w-80 bg-gradient-to-b from-[#636a9666] to-[#b6bad640] py-2 px-3 pl-12 rounded-full ring-1 ring-white/20 focus:bg-black/50 focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in">
        </div>
        <div class="relative">
          <div class="absolute top-1 left-1 bg-white/25 rounded-full p-2 flex items-center justify-center text-blue-300">
            <i class="fa-solid fa-lock"></i>
          </div>
          <input type="password" id="password" placeholder="Parola" class="w-full sm:w-80 bg-gradient-to-b from-[#636a9666] to-[#b6bad640] py-2 px-3 pl-12 rounded-full ring-1 ring-white/20 focus:bg-black/50 focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in">
        </div>
        <button class="w-full sm:w-80 font-semibold rounded-full bg-gradient-to-r from-blue-400 to-cyan-200 py-2 transition-transform duration-300 ease-out hover:scale-102">
          Autentificare
        </button>
      </form>
      <div class="grid grid-cols-3 items-center text-white/20">
        <hr>
        <p class="text-sm text-center">SAU</p>
        <hr>
      </div>
      <div class="text-white/70 space-y-1 text-sm">
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
