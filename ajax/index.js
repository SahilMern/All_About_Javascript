let xhr = new XMLHttpRequest();

// 2. Define the request (GET method)
xhr.open("GET", "https://dummyjson.com/products", true);

// 3. Handle the response
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the JSON response
    let response = JSON.parse(xhr.responseText);

    // Process the response data
    console.log(response);
  } else {
    // Handle the case where the request failed
    console.error("Request failed with status:", xhr.status);
  }
};

// Handle errors during the request
xhr.onerror = function () {
  console.error("Network error occurred.");
};

// 4. Send the request
xhr.send();
