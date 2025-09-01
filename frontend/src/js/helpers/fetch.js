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
    alert(error.message);
  }
};

const postData = async (url, body) => {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`Fetch response NOK: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};

export { getData, postData };
