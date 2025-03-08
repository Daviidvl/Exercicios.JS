document.getElementById("botao").addEventListener("click", function () {
  let cor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = cor; 
  this.value = `Cor: ${cor}`; 

  let copiarBtn = document.getElementById("copiar");
  copiarBtn.value = cor;
  copiarBtn.innerText = "Copy"; 
  copiarBtn.classList.remove("success");
});

document.getElementById("copiar").addEventListener("click", function (ev) {
  const button = ev.currentTarget;
  const cor = button.value; 
  
  navigator.clipboard.writeText(cor).then(() => {
      button.innerText = "Copied!";
      button.classList.add("success");

      setTimeout(() => {
          button.innerText = "Copy";
          button.classList.remove("success");
      }, 2000);
  }).catch(err => {
      console.error("Erro ao copiar:", err);
  });
});   