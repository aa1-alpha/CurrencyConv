function convert() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const apiKey = "938e7e711bbe4256585a9bbc"; // Replace with your actual key
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.result === "success") {
        document.getElementById("result").innerText =
          `${amount} ${from} = ${data.conversion_result} ${to}`;
      } else {
        document.getElementById("result").innerText = "Conversion failed.";
      }
    })
    .catch(error => {
      document.getElementById("result").innerText = "Error fetching data.";
      console.error("Error:", error);
    });
}
