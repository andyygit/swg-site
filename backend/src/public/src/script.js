const upload = document.getElementById('upload');
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById('my-form');
const output = document.getElementById('output');
const MAX_WIDTH = 960;
const MAX_HEIGHT = 800;
const uploadUrl = '/images/upload';

// helper functions
/**
 *
 * @param {String} url
 */
const urlToFile = (url) => {
  let arr = url.split(',');
  let regex = /:(.*?);/;
  let mimeType = arr[0].match(regex)[1];
  let data = arr[1];
  let decoded64Data = atob(data);
  let n = decoded64Data.length;
  let dataArr = new Uint8Array(n);
  while (n--) {
    // convert to Utf16 and push to array
    dataArr[n] = decoded64Data.charCodeAt(n);
  }
  let file = new File([dataArr], 'imageFilename.jpg', {
    type: mimeType,
  });
  // console.log(file);
  return file;
};

const uploadImage = async (file) => {
  let payload = new FormData();
  payload.append('file', file);
  try {
    const res = await fetch(uploadUrl, {
      method: 'POST',
      body: payload,
    });
    if (!res.ok) {
      throw new Error(`API response error code: ${res.status}`);
    }
    const json = await res.json();
    console.log(json);
  } catch (err) {
    console.error(err.message);
    form.outerHTML = `<div>${err.message}</div>`;
  }
};

// event listeners
upload.addEventListener('change', (event) => {
  const imageFile = event.target.files[0];
  const pattern = /image\/\w+/i;
  if (!imageFile.type.match(pattern)) {
    form.reset();
    alert('Fisier nesuportat!');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    const imageUrl = event.target.result;

    let img = new Image();
    img.src = imageUrl;
    img.onload = async (event) => {
      const canvas = document.createElement('canvas');
      if (event.target.width > event.target.height) {
        const ratio = MAX_WIDTH / event.target.width;
        canvas.width = MAX_WIDTH;
        canvas.height = event.target.height * ratio;
      } else if (event.target.width < event.target.height) {
        const ratio = MAX_HEIGHT / event.target.height;
        canvas.height = MAX_HEIGHT;
        canvas.width = event.target.width * ratio;
      } else {
        canvas.height = 800;
        canvas.width = 800;
      }
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      let newImageUrl = ctx.canvas.toDataURL('image/jpeg', 90);

      // display on the dom
      // let newImg = new Image();
      // newImg.src = newImageUrl;
      // output.appendChild(newImg);

      let imageFile = urlToFile(newImageUrl);
      await uploadImage(imageFile);
      // console.log(imageFile);
      form.reset();
      form.outerHTML = `<div>Imaginea a fost incarcata</div>`;
    };
  };
  reader.readAsDataURL(imageFile);
});
