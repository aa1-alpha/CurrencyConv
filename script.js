function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value.toUpperCase();
  const to = document.getElementById("to").value.toUpperCase();
  const apiKey = "938e7e711bbe4256585a9bbc"; // 👈 Replace with your actual key

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;

  fetch(url)
    .then(response => {
      console.log("Status:", response.status);
      return response.json();
    })
    .then(data => {
      console.log(data);
      if (data.result === "success") {
        document.getElementById("result").innerText = 
          `${amount} ${from} = ${data.conversion_result} ${to}`;
      } else {
        document.getElementById("result").innerText = "Error: " + data["error-type"];
      }
    })
    .catch(err => {
      console.error("Error:", err);
      document.getElementById("result").innerText = "Something went wrong!";
    });
}
