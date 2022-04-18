var btn_iniciar = document.getElementById("btn_iniciar");
// variaveis iniciam em zero
var mm = 0;
var ss = 0;
// tempo inicia em 1000 milesimos
var tempo = 1000;
var flag = false;

// inicia sem nada para receber a funçao
var cronometro;

function iniciar() {
  if(!flag){
    // cronometro recebe o setInterval que tem 2 parametros, a funcao e o contador
    cronometro = setInterval(function () {
      contador();
    }, tempo);
    btn_iniciar.innerText = "parar"
    btn_iniciar.classList.add("red");
    btn_iniciar.classList.remove("green");
    flag = true
  }else{
    btn_iniciar.innerText = "iniciar"
    btn_iniciar.classList.add("green");
    btn_iniciar.classList.remove("red");
    clearInterval(cronometro)
    flag = false
  }

}
//zera os segundos e os "transforma" em minutos
function contador() {
  ss++;
  if (ss === 59) {
    ss = 0;
    mm++;
    if (mm === 59) {
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
//limpa o cronometro
function zerar() {
  if(flag){
    alert("pare para zerar");
  }else{
    clearInterval(cronometro);
    mm = 0;
    ss = 0;
    document.getElementById("contador").innerText = "00:00";
  }
}