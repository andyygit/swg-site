import { postData } from '../helpers/fetch.js';

class MyRegisterForm extends HTMLElement {
  constructor() {
    super();
  }
  #activate(event) {
    const city = this.querySelector('#city');
    city.value = `${event.target.dataset.city} - jud. ${event.target.dataset.county}`;
    city.setAttribute('data-id', event.target.dataset.id);
    if (this.querySelector('#keywordout').childElementCount != 0)
      this.querySelector('#keywordout').firstElementChild.remove();
  }
  async #handleKeyUp(event) {
    let keyPressCount = event.target.value.length;
    let keywordOut = this.querySelector('#keywordout');
    if (keyPressCount > 3) {
      let myKeyword = event.target.value;
      myKeyword = myKeyword.replace(/ă/gi, 'a');
      myKeyword = myKeyword.replace(/â/gi, 'a');
      myKeyword = myKeyword.replace(/î/gi, 'i');
      myKeyword = myKeyword.replace(/ș/gi, 's');
      myKeyword = myKeyword.replace(/ț/gi, 't');
      let mySearchItems = myKeyword.split(',');
      let leftItem = mySearchItems[0];
      let rightItem = mySearchItems[1];
      let pattern1 = /\s+$/;
      let pattern2 = /^\s+/;
      if (pattern1.test(leftItem)) {
        mySearchItems[0] = leftItem.replace(pattern1, '');
      }
      if (mySearchItems.length > 1) {
        if (pattern2.test(rightItem)) {
          mySearchItems[1] = rightItem.replace(pattern2, '');
        }
      }
      const response = await postData('http://localhost:3000/api/getlocation', {
        keyword1: mySearchItems[0],
        keyword2: mySearchItems.length > 1 ? mySearchItems[1] : '',
      });
      if (keywordOut.childElementCount != 0)
        keywordOut.firstElementChild.remove();
      let output = document.createElement('ul');
      response.message.forEach((element) => {
        let line = document.createElement('li');
        line.className = 'cursor-pointer px-4 py-1 hover:bg-gray-100';
        line.setAttribute('data-id', element.id);
        line.setAttribute('data-city', element.city);
        line.setAttribute('data-county', element.county);
        line.appendChild(
          document.createTextNode(`${element.city} - jud. ${element.county}`)
        );
        line.addEventListener('click', this.#activate.bind(this));
        output.appendChild(line);
      });
      keywordOut.appendChild(output);
    } else if (keywordOut.childElementCount != 0) {
      keywordOut.firstElementChild.remove();
    }
  }
  async #handleClick(event) {
    event.preventDefault();
    let username = this.querySelector('#username').value;
    let password = this.querySelector('#password').value;
    let password2 = this.querySelector('#password2').value;
    let email = this.querySelector('#email').value;
    let city = this.querySelector('#city').dataset.id;
    let gender = this.querySelector('#gender').value;
    const response = await postData('http://localhost:3000/auth/register', {
      username: username,
      password: password,
      email: email,
      city: city,
      gender: gender,
    });
    console.log(response);
    this.innerHTML += `<p>${response.message}</p>`;
    this.children[0].style.display = 'none';
  }
  connectedCallback() {
    this.innerHTML = `
      <div id="register-form" class="mx-4 p-8 rounded-2xl inset-ring inset-ring-gray-200 shadow-xl/30">
        <div class="grid gap-5">
          <h1 class="text-4xl font-bold tracking-tighter text-gray-600">Cont nou</h1>
          <p class="text-black/70 text-sm font-light italic">Prin utilizarea funcționalității de creare cont nou și
            autentificare, ești de acord cu <a href="/tos"
              class="font-semibold tracking-tight text-black border-b border-sky-500 hover:border-b-2" data-link>termenii și
              condițiile
              swgsite.ro</a>.</p>
          <form action="" class="space-y-2 text-sm">
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-user"></i>
              </div>
              <input id="username" name="username" type="text" placeholder="Nume utilizator"
                class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in" />
            </div>
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-lock"></i>
              </div>
              <input id="password" name="password" type="password" placeholder="Parola"
                class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in" />
            </div>
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-lock"></i>
              </div>
              <input id="password2" name="password2" type="password" placeholder="Confirmare parola"
                class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in" />
            </div>
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <input id="email" name="email" type="email" placeholder="Adresa e-mail"
                class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in" />
            </div>
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-city"></i>
              </div>
              <input id="city" name="city" type="text" placeholder="Localitate, județ"
                class="w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in" />
            </div>
            <div id="keywordout" class="max-w-72 max-h-64 pl-4 overflow-auto"></div>
            <div class="relative">
              <div class="absolute top-1 left-1 bg-white/50 rounded-full p-2 flex items-center justify-center text-red-300">
                <i class="fa-solid fa-people-arrows"></i>
              </div>
              <div
                class=" flex w-full sm:w-80 bg-gradient-to-t from-gray-200 to-gray-50 py-2 px-3 pl-12 rounded-full focus:outline-none focus:ring focus:ring-[#2FB8FF] focus:drop-shadow-lg transition-shadow duration-300 ease-in">
                <select name="gender" id="gender" class="appearance-none focus:outline-none w-full">
                  <option disabled selected value="">Tip profil</option>
                  <option value="1">Cuplu</option>
                  <option value="2">Bărbat</option>
                  <option value="3">Femeie</option>
                </select>
                <div class="text-gray-500"><i class="fa-solid fa-caret-down"></i></div>
              </div>
            </div>
            <button
              class="w-full sm:w-80 font-semibold text-gray-900 rounded-full bg-gradient-to-r from-violet-400 to-red-200 py-2 transition-transform duration-300 ease-out hover:scale-102">
              Creează cont
            </button>
          </form>
          <div class="grid grid-cols-3 items-center text-gray-400">
            <hr />
            <p class="text-sm text-center">SAU</p>
            <hr />
          </div>
          <div class="space-y-1 text-sm font-extralight">
            <p>
              Ai deja cont?
              <a href="/login" class="text-[#2FB8FF] font-semibold cursor-pointer" data-link>Conectează-te</a>
            </p>
          </div>
        </div>
      </div>
		`;
    this.querySelector('button').addEventListener(
      'click',
      this.#handleClick.bind(this)
    );
    this.querySelector('#city').addEventListener(
      'keyup',
      this.#handleKeyUp.bind(this)
    );
  }
  disconnectedCallback() {
    this.querySelector('button').removeEventListener(
      'click',
      this.#handleClick
    );
    this.querySelector('#city').removeEventListener('keyup', this.#handleKeyUp);
  }
}

export default MyRegisterForm;
