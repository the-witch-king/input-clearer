document.addEventListener("keydown", (event) => {
  if (event.code === "KeyC" && event.ctrlKey) {
    const input = document.getElementById("user-response");
    input.value = "";
  }
});
