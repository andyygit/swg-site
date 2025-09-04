const getData = async (url, authToken = null) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : '',
      },
      method: 'GET',
    });
    if (!res.ok) {
      const err = await res.json();
      return {
        message: `${err.message}. Error: ${res.status + ' ' + res.statusText}`,
      };
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};

const postData = async (url, body, authToken = null) => {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: authToken ? `Bearer ${authToken}` : '',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      const err = await res.json();
      return {
        message: `${err.message}. Error: ${res.status + ' ' + res.statusText}`,
      };
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};

export { getData, postData };
