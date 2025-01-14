async function fetchDataAsync() {
  try {
    const data = await new Promise((resolve, reject) =>
      setTimeout(() => resolve("Data fetched"), 1000)
    );
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
