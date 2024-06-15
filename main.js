let cbuxl = document.getElementById("cbuxl");
let cbu = document.getElementById("cbu");
let nombreApodo = document.getElementById("nombreApodo");
let bienvenida = document.getElementById("modal-button2");
let registrar = document.getElementById("modal-button");
let info = document.getElementById("info");
let retiro = document.getElementById("retiro");
let retiroExitoso = document.getElementById("retiroExitoso");
let premioEnviado = document.getElementById("premioEnviado");
let sistemaDePagos = document.getElementById("sistemaDePagos");
let demorasPagos = document.getElementById("demorasPagos");
let sistemaRecomendacion = document.getElementById("sistemaRecomendacion");
let bonificacion = document.getElementById("bonificacion");
let solicitarComprobante = document.getElementById("solicitarComprobante");
let solicitarUsuario = document.getElementById("solicitarUsuario");
let publicidad = document.getElementById("publicidad");
let noIngreso = document.getElementById("noIngreso");
let cbuEquivocado = document.getElementById("cbuEquivocado");
let mantenimiento = document.getElementById("mantenimiento");
let soporte = document.getElementById("soporte");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];
let usuario2 = document.getElementById("usuario2");
let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("pad-button-reg2");
let span2 = document.getElementsByClassName("close2")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  globalThis.inputNombre = document.getElementById("name").value;
  globalThis.inputCBU = document.getElementById("number").value;
  globalThis.inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbuxl.addEventListener("click", () => {
      const texto = `Buenas! 👋🏼 *RECUERDE CONSULTAR SIEMPRE NUESTRO CBU SEGUNDOS ANTES DE TRANSFERIR* ⚠️ 

*Cuenta a nombre de:* ${inputNombre}
🔹*CBU:* ${inputCBU}
🔹*ALIAS:* ${inputAlias}

Envíe el comprobante de transferencia y su usuario de juego *para poder cargarle las fichas.* 💥 

*MÍNIMO DE CARGA: $1.000*

📲 Para jugar ingrese aquí: https://universegame.best`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

nombreApodo.addEventListener("click", () => {
  const texto = `Para comenzar a jugar con nosotros te pido tu *nombre y apellido* así podemos generarte un usuario! ⬇️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;

  const texto = `👑 *USUARIO CREADO* 👑

📲 Para jugar ingrese aquí https://universegame.best
*SU USUARIO ES:* ${user}
*CONTRASEÑA:* abc123

*Para cargar dinero a su cuenta CONSULTE NUESTRO CBU VIGENTE* 📩`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});


bienvenida.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario2").value;
  console.log(user);

  const texto = `Hola! 👑 *Bienvenido/a Caba Prestige*  
Su casino online de confianza 🤝

📱 *PLATAFORMA:* https://universegame.best
🧑🏻‍💻 *USUARIO*: ${user}
🔐 *CONTRASEÑA*: abc123

🤑 *MÍNIMO DE CARGA*: $1.000
🤑 *MINIMO DE RETIRO*: $2.000
💰 *RETIROS Y PAGOS TODOS LOS DÍAS DE 8 AM A 00 HS*

⚠️ *RECUERDE CONSULTAR SIEMPRE NUESTRO CBU SEGUNDOS ANTES DE TRANSFERIR*

*Cuenta a nombre de:* ${inputNombre}
🔹*CBU:* ${inputCBU}
🔹*ALIAS:* ${inputAlias}

Envíe el *COMPROBANTE DE TRANSFERENCIA* y debajo su *USUARIO ASIGNADO* *para poder cargarle las fichas.* 💥`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario2").value = "";

  modal2.style.display = "none";
});

info.addEventListener("click", () => {
  const texto = `Buenas! 👋🏼 *Somos Caba Prestige*, tu casino online de confianza 🎰
En nuestra plataforma vas a encontrar:
➡️ Slots (maquinitas) 
➡️ Ruletas en vivo
➡️ Apuestas Deportivas
➡️ Blackjack
➡️ Baccarat
➡️ Bingo

🔻*Mínimo* de carga $1.000
🔻*Mínimo* de retiro $2.000
🔻*Máximo* de retiro NO TENEMOS 
🔻Contamos con *sistema de pagos*

💻 Nuestra plataforma es https://universegame.best

*Si queres que te generemos un usuario* para comenzar a jugar envianos tu nombre y apellido / apodo 📨`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiro.addEventListener("click", () => {
  const texto = `Hola! 👋🏼 *Para retirar su dinero* complete los siguientes datos:

➡️ Usuario:
➡️ Nombre que figura en su cuenta bancaria:
➡️ CBU y ALIAS:
➡️ Monto que desea retirar:

🤑 *RETIROS A PARTIR DE $2.000*
Una vez que complete los datos, le retiramos las fichas y lo enviamos al área de pagos para que le abonen su premio.

🙏🏼 *POR FAVOR, SEA PACIENTE Y AGUARDE SU TURNO, EL PAGO PUEDE DEMORAR.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retiroExitoso.addEventListener("click", () => {
  const texto = `*PREMIO EN FILA* 💸
*Su premio ya se encuentra en el sector de pagos* 👏🏼 Le enviaremos el comprobante de pago cuando se haya efectuado! 

*POR FAVOR, NO RESPONDA NI REACCIONE ESTE MENSAJE HASTA QUE LE ENVIEMOS SU PREMIO, SINO PASARÁ A ESTAR ÚLTIMO EN LA FILA Y SE DEMORARÁ MÁS EL PAGO*. ⚠️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

premioEnviado.addEventListener("click", () => {
  const texto = `*TU PREMIO YA FUE ENVIADO* 👏🏼🥳🎉 Felicitaciones! 💘 Gracias por jugar con *Caba Prestige* 🥹🙏🏼 Disfrutalo mucho ✨ No te olvides de recomendarnos @caba.prestige`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `💰 *RETIROS Y PAGOS TODOS LOS DÍAS DE 8 AM A 00 HS*

Los retiros pueden ser *a partir de $2.000*, puede retirar varias veces al día, no hay máximo de retiros diarios (siempre y cuando no retire $2.000 cada 5 / 10 minutos).
El máximo de demora del pago es dependiendo del monto de retiro, de la cantidad de premios en fila que tengamos y con cuanta banca contemos en ese momento. *SE ABONA POR ORDEN DE LLEGADA*
*Si hay mucha demora se informa previamente*. 🔹

*Los pagos pueden ser en su totalidad o en cuotas dependiendo del monto a retirar y la carga realizada anteriormente.*`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

demorasPagos.addEventListener("click", () => {
  const texto = `Estimado cliente, le informamos que *contamos con demoras en los pagos*⏳ 
Se irán abonando de a tandas, por favor le solicitamos que aguarde y respete su lugar en la fila, ya que si envía varios mensajes, tardaremos más en enviar su premio 🙏🏼💸

*Si quiere continuar jugando, puede cargar fichas de su premio* 😁`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaRecomendacion.addEventListener("click", () => {
  const texto = `*¿QUERÉS OBTENER 1000 FICHAS GRATIS?* 🤑🎁

➡️ Por cada conocido que venga de tu parte y comience a jugar con nosotros te *REGALAMOS 1000 FICHAS*.

👇🏼 *¿Cómo debes hacer para recomendarnos?* 👇🏼
A continuación te dejamos nuestro link de WhatsApp para que puedas compartirlo con tus amigos y familiares, *recorda aclararles que nos digan que vienen de tu parte (deben decirnos tu nombre de usuario)*.

wa.link/cabaprestige`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

bonificacion.addEventListener("click", () => {
  const texto = `‼️ *INFO SOBRE LAS BONIFICACIONES* ‼️
Toda bonificación que se le agregue al usuario debe ser usada como una ayuda para que el jugador pueda tener más chances de ganar. 🤑 En el caso que gane, se retira todo pero la bonificación agregada NO SE ABONA junto con el premio ☝🏼💰
Cualquier consulta que tenga estamos a su disposición 📩`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitarComprobante.addEventListener("click", () => {
  const texto = `Por favor te solicito que hagas clic donde dice "Compartir comprobante", ya que necesitamos tener los comprobantes con toda la información de transferencia, de esta manera agilizamos la búsqueda de tu deposito. Gracias!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

solicitarUsuario.addEventListener("click", () => {
  const texto = `Por favor envíeme su usuario asignado debajo del comprobante para poder cargarle las fichas. Recuerde hacerlo siempre 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

publicidad.addEventListener("click", () => {
  const texto = `Le informo que estamos en publicidad y *podemos presentar demoras a la hora de responder*. 
Le pedimos porfavor paciencia ya que contestamos *por orden de llegada* y si envia muchos mensajes, su chat se posiciona *en el último lugar de la fila* y demoramos más en responderle! 🙏🏻`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

noIngreso.addEventListener("click", () => {
  const texto = `Su transferencia aún no ingresó en nuestra cuenta 🤚🏼 En cuanto impacte el pago, le cargaremos las fichas! Aguarde 🙏🏼

*Tenga en cuenta que las transferencias a veces cuentan con demora*.`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

cbuEquivocado.addEventListener("click", () => {
  const texto = `Hola! Le informo que envió dinero a un cbu con el cual no estamos trabajando en este momento ❌ Dejamos especificado previamente que *POR FAVOR CONSULTE EL CBU SEGUNDOS ANTES DE TRANSFERIR*, de lo contrario puede perder su dinero.
Aguarde a que un supervisor chequee si el dinero ingresó en la cuenta a la cual envió por error. Le advierto que si la cuenta está inactiva, su dinero no podrá ser cargado 😕`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

mantenimiento.addEventListener("click", () => {
  const texto = `Buenas 👋🏼 Le informamos que la pagina está siendo interrumpida debido a un mantenimiento.🧑🏻‍🔧 Desde nuestro lado no podemos cargar ni descargar fichas.

Les pedimos paciencia, en cuanto se solucione le avisamos! 

Gracias y disculpen las molestias 🙏🏼`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

soporte.addEventListener("click", () => {
  const texto = `Buenas!👋🏻 Por problemas e inconvenientes con la plataforma *por favor comuníquese con el soporte de la misma página* (lo puede hacer mediante el cuadro de diálogo que se encuentra arriba a su derecha). ♦️
Ya que nosotros no podemos acceder a la configuración de las máquinas!`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

btn2.onclick = function () {
  modal2.style.display = "block";
  usuario2.focus();
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    event.target.style.display = "none";
  }
};
