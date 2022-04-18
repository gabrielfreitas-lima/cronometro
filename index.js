// variaveis iniciam em zero.
var mm = 0;
var ss = 0;
// tempo inicia em 1000 milesimos.
var tempo = 1000;
var btn_iniciar = document.getElementById("btn_iniciar");
var flag = false;

// inicia sem nada para receber a funçao.
var cronometro;

function iniciar() {
  // se flag for diferente de false, entra no if e executa o iniciar. Trocando a cor do botao e flag se torna true.
  if (!flag) {
    // cronometro recebe o setInterval que tem 2 parametros, a funcao e o contador.
    cronometro = setInterval(function () {
      contador();
    }, tempo);
    btn_iniciar.innerText = "Parar";
    btn_iniciar.classList.add("red");
    btn_iniciar.classList.remove("green");
    flag = true;
    // se nao, para o cronometro e troca a cor do botao, retornando flag como false.
  } else {
    btn_iniciar.innerText = "Iniciar";
    btn_iniciar.classList.add("green");
    btn_iniciar.classList.remove("red");
    clearInterval(cronometro);
    flag = false;
  }
}
//zera os segundos e os "transforma" em minutos.
function contador() {
  ss++;
  if (ss === 60) {
    ss = 0;
    mm++;
    if (mm === 60) {
      mm = 0;
    }
  }
  if (ss < 10 && mm < 10) {
    contagem = "0" + mm + ":" + "0" + ss;
  } else if (mm < 10) {
    contagem = "0" + mm + ":" + ss;
  } else if (ss < 10) {
    contagem = mm + ":" + "0" + ss;
  } else {
    contagem = mm + ":" + ss;
  }
  document.getElementById("contador").innerText = contagem;
  return contagem;
}
//limpa o cronometro.
function zerar() {
  if (flag) {
    alert("Pare a aplicação para zerar");
  } else {
    clearInterval(cronometro);
    mm = 0;
    ss = 0;
    document.getElementById("contador").innerText = "00:00";
  }
}