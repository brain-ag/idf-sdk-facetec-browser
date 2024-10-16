function iniciaSelfie() {
  let selfie = new window.BrScanSDKSelfie.Selfie('')

  console.log(`Versão do SDK Facetec: ${selfie.versaoSdkFacetec}`)

  // audio
  // selfie.vocalGuidanceEnabled = true

  // Wizzard
  // selfie.wizzard = true;

  // Parametrização de URL de requisição ao serviço (para o uso de API PROXY)

  // Tipo do processo de inicialização
  // selfie.processType = "liveness" -> 'enrollment' | 'liveness'
  // Mensagem que aparece no final do tipo processo
  // selfie.FacetecLivenessResultScreenSuccessMessage = "Sucesso!" -> 'liveness'
  // selfie.FacetecEnrollmentResultScreenSuccessMessage = "Sucesso!"; -> 'enrollment'
  // ID obrigatório em caso do processType = enrollment
  // selfie.externalDatabaseRefID = ""

  // Modifica elementos da experiência facetec

  // selfie.btnNormalColor = "#002DD1";
  // selfie.loadingTextColor = "#585858";
  // selfie.btnHighlightColor = "#1d4f91";
  // selfie.btnDisabledColor = "#cccccc";
  // selfie.btnBorderColor = "transparent";
  // selfie.btnBorderWidth = "0px";
  // selfie.btnBorderRadius = "20px";
  // selfie.ovalStrokeColor = "transparent";
  // selfie.ovalProgressColor1 = "#1d4f91";
  // selfie.ovalProgressColor2 = "#1d4f91";

  // selfie.resultAnimationSuccessBackgroundColor = "#008000";
  // selfie.resultAnimationSuccessForegroundColor = "#fff"

  // Cor do icone de sucesso
  // selfie.successBackgroundColor = "#09DEA1"

  // selfie.initialLoadingFont = "Roboto, sans-serif";
  // selfie.initialButtonFont = "Roboto, sans-serif";

  // Tela Inicial textos
  // selfie.readyScreenHeaderFont = "Roboto, sans-serif";
  // selfie.readyScreenHeaderTextColor = "#585858";
  // selfie.readyScreenSubtextFont = "Roboto, sans-serif";
  // selfie.readyScreenSubtextColor = "#585858";

  // Tela Tentar novamente textos
  // selfie.retryScreenHeaderFont = "Roboto, sans-serif"
  // selfie.retryScreenHeaderTextColor = "#585858"
  // selfie.retryScreenSubtextFont = "Roboto, sans-serif"
  // selfie.retryScreenSubtextTextColor = "#585858"
  // selfie.retryScreenImageBorderWidth = "2px"

  // Tela Capturar Selfie - textos de guia
  // selfie.feedbackCustomizationBackgroundColor = "rgba(45, 53, 73, 0.9)"
  // selfie.feedbackCustomizationTextColor = "#fff"
  // selfie.feedbackCustomizationTextFont = "Roboto, sans-serif"
  // selfie.feedbackCustomizationCornerRadius = "8px"
  // selfie.feedbackCustomizationShadow = "0px 6px 12px black";

  // selfie.resultAnimationSuccessBackgroundImage = ""
  // selfie.loadingBackgroundColor = "#1d4f91";
  // selfie.uploadProgressFillColor = "#375AD0";

  // Timeout de conexão lenta
  // selfie.conexaoTimeout = 1;

  selfie.iniciaSelfie(document.getElementById('selfie'))
    .then(selfie => {
      console.log(selfie);
      alert('selfie recebida com sucesso');
    })
    .catch((err) => {
      console.log('err', err);
      alert(err.desc);
    });
}

document.addEventListener("DOMContentLoaded", function (event) {
  iniciaSelfie();
});