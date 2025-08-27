const getData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Fetch response NOK: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchAndRenderData = async () => {
  const data = await getData('https://jsonplaceholder.typicode.com/users');
  data.forEach((item) => {
    let { name, email } = item;
    console.log(`${name} - ${email}`);
  });
};

// fetchAndRenderData();
