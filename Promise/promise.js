let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Success!");
    } else {
      reject("Failed");
    }
  });
  
  promise
    .then((result) => console.log(result))   // Success!
    .catch((error) => console.log(error));   // If rejected
  