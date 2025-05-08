function getData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data loaded"), 2000);
    });
  }
  
  async function fetchData() {
    let result = await getData();
    console.log(result);
  }
  
  fetchData();
  // Output after 2 seconds: Data loaded
  