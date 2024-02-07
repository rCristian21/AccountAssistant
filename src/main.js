import { footer } from "./templates/footer/Footer";
import { facturaElement } from "./utils/Calls";
import { listenerBtn } from "./utils/listeners";
import { firstPrintTable, updatePage } from "./utils/utils";
import { writeProducts } from "./utils/writeProducts";

footer();
export const elementMod = document.querySelector(".spanResultPrice");
export const generarRecibo = document.querySelector("#generarRecibo");
export const generarReciboAlt = document.querySelector("#generarReciboAlt");
writeProducts("arepas", "#unidades");
writeProducts("paquetes", "#paquetes");
writeProducts("bebidas", "#bebidas");
writeProducts("huevos", "#huevos");

listenerBtn();

firstPrintTable();

export function btnViewBill() {
  if (facturaElement.style.display === "none") {
    facturaElement.style.display = "flex";
    generarRecibo.style.display = "block";
    generarReciboAlt.style.display = "block";
    updatePage();
  } else {
    facturaElement.style.display = "none";
    generarRecibo.style.display = "none";
    generarReciboAlt.style.display = "none";
  }
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("../sw.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
