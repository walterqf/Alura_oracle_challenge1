function containsSpecialChars(str) {
  const specialChars = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~ABCDEFGHIJKLMNOPQRSTUVWXYZáéíóúÁÉÍÓÚ`;

  const result = specialChars.split("").some((specialChar) => {
    if (str.includes(specialChar)) {
      return true;
    }

    return false;
  });

  return result;
}
function encrypt(enc1) {
  let textEnc1 = "";
  if (!containsSpecialChars(enc1)) {
    for (i = 0; i < enc1.length; i++) {
      switch (enc1.charAt(i)) {
        case "a":
          textEnc1 += "ai";
          break;
        case "e":
          textEnc1 += "enter";
          break;
        case "i":
          textEnc1 += "imes";
          break;
        case "o":
          textEnc1 += "ober";
          break;
        case "u":
          textEnc1 += "ufat";
          break;
        default:
          textEnc1 += enc1.charAt(i);
          break;
      }
    }
    document.querySelector("#vacio").style.display = "none";
    document.querySelector("#imagenSinMensaje").style.display = "none";
    document.querySelector("#sinMensaje").style.display = "none";
    document.querySelector("#descpripcionSinMensaje").style.display = "none";
    document.querySelector("#enc2").style.display = "inline-block";
    document.querySelector("#btncopy").style.display = "inline-block";
    document.querySelector("#enc2").value = textEnc1;
    document.querySelector("#text_area1").value = "";
  } else {
    alert("Solo letras minúsculas y sin acentos");
  }
}
function decrypt(decrypt) {
  document.getElementById("enc2").value = "";
  let newString = decrypt
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  document.getElementById("enc2").value = newString;
  document.querySelector("#text_area1").value = "";
}

function copy() {
  var copyText = document.getElementById("enc2");
  if (copyText.value) {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado: " + copyText.value;
  }
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiar al portapapeles";
}

function mensajeError() {
  var tooltip = document.getElementById("myTooltip1");
  tooltip.innerHTML =
    "<p class='p'><span class='iconify' data-icon='bi:exclamation-circle-fill'></span><em>Solo letras minúsculas y sin acentos</em></p>";
}
window.addEventListener("keydown", CapLock);
window.addEventListener("keyup", CapLock);
function CapLock(e) {
  if (e.getModifierState("CapsLock")) {
    mensajeError();
  } else {
    document.getElementById("myTooltip1").textContent = "";
  }
}

(function () {
  var themeSwitch = document.getElementById("themeSwitch");
  if (themeSwitch) {
    initTheme();
    themeSwitch.addEventListener("change", function (event) {
      resetTheme();
    });

    function initTheme() {
      var darkThemeSelected =
        localStorage.getItem("themeSwitch") !== null &&
        localStorage.getItem("themeSwitch") === "dark";
      themeSwitch.checked = darkThemeSelected;
      darkThemeSelected
        ? document.body.setAttribute("data-theme", "dark")
        : document.body.removeAttribute("data-theme");
    }

    function resetTheme() {
      if (themeSwitch.checked) {
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("themeSwitch", "dark");
      } else {
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("themeSwitch");
      }
    }
  }
})();
