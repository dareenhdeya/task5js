/////////// POST (async/await) ///////////

document
  .getElementById("submitBtn")
  .addEventListener("click", async function () {
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;

    const data = { title, body };

    const url = "https://jsonplaceholder.typicode.com/posts";
    const options = {
      method: "POST",
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error("Error:", err);
    }
  });

/////////// GET (async/await) ///////////

async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}

getPosts();
