function iniciaSelfie() {
  let selfie = new window.BrScanSDKSelfie.Selfie(
    'sua-chave-aqui'
  )

  // Wizzard
  // selfie.wizzard = true;

  // Parametrização de URL de requisição ao serviço (para o uso de API PROXY)
  // selfie.servico.DOCUMENT_SERVER = "https://document.brscan.com.br"
  // selfie.servico.LIVENESS_SERVER = "https://liveness.brscan.com.br"
  // selfie.LIVENESS_TECH = "https://hml-livenesstech.brscan.com.br"

  // Tipo do processo de inicialização
  // selfie.processType = "liveness" -> 'enrollment' | 'liveness'
  // Mensagem que aparece no final do tipo processo
  // selfie.FacetecLivenessResultScreenSuccessMessage = "Sucesso!" -> 'liveness'
  // selfie.FacetecEnrollmentResultScreenSuccessMessage = "Sucesso!"; -> 'enrollment'
  // ID obrigatório em caso do processType = enrollment
  // selfie.externalDatabaseRefID = ""

  // Modifica elementos da experiência facetec

  // selfie.btnNormalColor = "#660099";
  // selfie.loadingTextColor = "#660099";
  // selfie.btnHighlightColor = "Cor hexadecimal desejada";
  // selfie.btnDisabledColor = "Cor hexadecimal desejada";
  // selfie.btnBorderColor = "Cor hexadecimal desejada";
  // selfie.btnBorderWidth = "Valor da espessura da borda (ex: 20px)";
  // selfie.btnBorderRadius = "Valor do raio da borda (ex: 20px)";
  // selfie.ovalStrokeColor = "Cor hexadecimal desejada";
  // selfie.ovalProgressColor1 = "Cor hexadecimal desejada";
  // selfie.ovalProgressColor2 = "Cor hexadecimal desejada";

  // selfie.resultAnimationSuccessBackgroundColor = "red";
  // selfie.resultAnimationSuccessForegroundColor = "#000"
  // selfie.initialLoadingFont = "Arial Black";
  // selfie.initialButtonFont = "Arial Black";
  // selfie.readyScreenHeaderFont = "Arial Black";
  // selfie.readyScreenHeaderTextColor = "red";
  // selfie.readyScreenSubtextFont = "Arial Black";
  // selfie.readyScreenSubtextColor = "red";

  // selfie.resultAnimationSuccessBackgroundImage = ""
  // selfie.loadingBackgroundColor = 'red';
  // selfie.uploadProgressFillColor = 'red';

  // Callback Opcional
  // selfie.iniciaSelfie(document.getElementById('selfie'), (callback) => {
  //   console.log('callback', callback)
  // })


  selfie.iniciaSelfie(document.getElementById('selfie'))
    .then(selfie => {
      console.log(selfie);
      alert('selfie recebida com sucesso');
    })
    .catch((err) => {
      console.log('err', err);
      // alert(err.desc);
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
  iniciaSelfie();
});