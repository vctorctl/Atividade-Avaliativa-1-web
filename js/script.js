function mudarCor(color) {
  document.body.style.backgroundColor = color;
}

function exibirCreditos() {
  alert(
    "Desenvolvimento de Software para Web\nMembros:\nJoao Victor costa\nLiliane\nAnne"
  );
}

function enviarMensagem() {
  var li = document.createElement("li");
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  var msg_node = document.createTextNode(`${nome}: ${mensagem}`);
  var close = document.getElementsByClassName("excluir");

  if (nome === "" || mensagem === "") {
    alert("Deixe sua mensagem!");
  } else {
    document.getElementById("quadro").appendChild(li);
  }

  li.appendChild(msg_node);

  document.getElementById("nome").value = "";
  document.getElementById("mensagem").value = "";

  var button = document.createElement("BUTTON");
  var txt = document.createTextNode("excluir");
  button.className = "excluir";
  button.appendChild(txt);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
