import { Serie } from "./serie.js";
import { dataSeries } from "./data.js";

let tablaSeries = document.getElementById("idSeries")!;
let tablaPromedio = document.getElementById("promedio")!;

console.log(dataSeries);
mostrarDatos(dataSeries);
promTempSeries(dataSeries);

function mostrarDatos(series: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");
    series.forEach(Serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<th scope="row">${Serie.numero}</th>
                                <td>${Serie.nombre}</td>
                                <td>${Serie.canal}</td>
                                <td>${Serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
  });
  tablaSeries.appendChild(seriesTbody);
}

function promTempSeries(series: Serie[]): void { 
  let numTemporadas = 0;
  let numSeries = 0;
  series.forEach(Serie=> {
    numTemporadas += Serie.temporadas;
    numSeries++;
  })
  let promedio: number = numTemporadas/numSeries;
  let trElement:HTMLElement = document.createElement("tr");
  trElement.innerHTML = `<td><b>Promedio temporadas: <b></td>
                        <td>${promedio}</td>`;
  tablaPromedio.appendChild(trElement);
}
