const getWeather = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('sunny');
    }, 2000);
  });
};

const getWeathericon = (weather) => {
  console.log('function 2');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${weather} with icon added`);
    }, 2000);
  });
};

const onSuccess = (data) => {
  console.log(`Success: ${data}`);
};

const onError = (err) => {
  console.log(`Error: ${err}`);
};

getWeather().then(getWeathericon).then(onSuccess).catch(onError);
