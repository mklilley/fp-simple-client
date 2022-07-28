fetch("http://localhost:3000")
    .then((res) => res.json())
    .then((data) => {
        document.getElementById("greeting").textContent = data.greeting;
    })
    .catch((e) => {
        console.log(e);
        document.getElementById("greeting").textContent =
            "Problem getting data from the API";
    });
