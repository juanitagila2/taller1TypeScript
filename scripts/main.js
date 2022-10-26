import { dataSeries } from "./data.js";
var tablaSeries = document.getElementById("idSeries");
var tablaPromedio = document.getElementById("promedio");
console.log(dataSeries);
mostrarDatos(dataSeries);
promTempSeries(dataSeries);
function mostrarDatos(series) {
    var seriesTbody = document.createElement("tbody");
    series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<th scope=\"row\">".concat(Serie.numero, "</th>\n                                <td>").concat(Serie.nombre, "</td>\n                                <td>").concat(Serie.canal, "</td>\n                                <td>").concat(Serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
    tablaSeries.appendChild(seriesTbody);
}
function promTempSeries(series) {
    var numTemporadas = 0;
    var numSeries = 0;
    series.forEach(function (Serie) {
        numTemporadas += Serie.temporadas;
        numSeries++;
    });
    var promedio = numTemporadas / numSeries;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Promedio temporadas: <b></td>\n                        <td>".concat(promedio, "</td>");
    tablaPromedio.appendChild(trElement);
}
