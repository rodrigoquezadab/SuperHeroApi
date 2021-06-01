let number = 0;

function api(numberOk) {
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: "https://superheroapi.com/api.php/10159555609082249/" + numberOk,
      dataType: "json",
      success: function ({
        name,
        biography,
        connections,
        work,
        appearance,
        image,
        powerstats,
      }) {
        $("#super-hero").text(""),
          $("#super-hero").append(
            `
            <div class="container">
            <div class="card mb-3" >
              <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${image.url}" class="card-img" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p>Nombre: ${name}</p> 
                  <p>Ocupacion: ${work.occupation}</p>
                  <p>Conexiones: ${connections["group-affiliation"]}</p>
                  <p>Primera aparicion: ${biography["first-appearance"]}</p>
                  <p>Publicado por: ${biography.publisher}</p>
                  <p>Peso: ${appearance.weight[1]}</p>
                  <p>Altura: ${appearance.height[1]}</p>                 
                  <p>Alias: ${biography.aliases}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 p-3">
                <div id="chartContainer" ></div>
              </div>
            </div>            
                  
            `
          ),
          $("#super-hero").append(
            (window.onload = function () {
              var chart = new CanvasJS.Chart("chartContainer", {
                theme: "light2", // "light1", "light2", "dark1", "dark2"
                exportEnabled: true,
                animationEnabled: true,
                title: {
                  text: `Estadisticas para ${name}`,
                },
                data: [
                  {
                    type: "pie",
                    startAngle: 25,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [
                      {
                        y: `${powerstats.intelligence}`,
                        label: "intelligence",
                      },
                      { y: `${powerstats.strength}`, label: "strength" },
                      { y: `${powerstats.speed}`, label: "speed" },
                      { y: `${powerstats.durability}`, label: "durability" },
                      { y: `${powerstats.power}`, label: "power" },
                      { y: `${powerstats.combat}`, label: "combat" },
                    ],
                  },
                ],
              });
              chart.render();
            })
          );
      },
    });
  });
}

document
  .querySelector("#boton-buscar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let num = document.querySelector("#texto-buscar").value;
    console.log(num);

    if (isNaN(num) || num < 1 || num > 732) {
      alert("Debes ingresar un numero entre 1 y 732!");
    } else {
      let numberOk = num;
      api(numberOk);
    }
  });
