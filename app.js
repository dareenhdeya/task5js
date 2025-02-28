///////////POST(fetch)///////////

document.getElementById("submitBtn").addEventListener("click", function () {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const data = { title, body };

  const url = "https://jsonplaceholder.typicode.com/posts";
  const options = {
    method: "POST",
    body: JSON.stringify(data),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});

/////////GET(fetch)//////////////

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((err) => console.log(err));



/////////GET(promise)////////////////

// let getData = (url) => {
//   return new Promise((resolve, reject) => {
//     var http = new XMLHttpRequest();
//     http.open("GET", url);
//     http.send();
//     http.addEventListener("readystatechange", function () {
//       if (http.readyState === 4) {
//         if (http.status >= 200 && http.status < 300) {
//           resolve(http.response);
//         } else {
//           reject(Error("err"));
//         }
//       }
//     });
//   });
// };

// getData("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
