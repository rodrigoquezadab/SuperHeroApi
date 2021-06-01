$(document).ready(function () {
  $("#boton-buscar").on("click", function () {
    $.ajax({
      type: "GET",
      url:
        "https://superheroapi.com/api.php/10159555609082249/" +
        $("#texto-buscar").val(),
      dataType: "json",
      success: function ({
        name,
        biography,
        connections,
        id,
        work,
        appearance,
      }) {
        $(".resultado").append(
          `<p>Nombre: ${name}</p> 
            <p>Conexiones: ${connections["group-affiliation"]}</p>
            <p>Ocupacion: ${work.occupation}</p>
            <p>Publicado por: ${biography.publisher}</p>
            <p>Primera aparicion: ${biography["first-appearance"]}</p>
            <p>Altura: ${appearance.height[1]}</p>
            <p>Peso: ${appearance.weight[1]}</p>
            <p>Alias: ${biography.aliases}</p>
            <p>numero ${id} </p>
            `
        );
      },
    });
  });
});

$(document).ready(function () {
  $("#boton-buscar").on("click", function () {
    $.ajax({
      type: "GET",
      url:
        "https://superheroapi.com/api.php/10159555609082249/" +
        $("#texto-buscar").val(),
      dataType: "json",
      success: function ({
        name,
        biography,
        connections,
        work,
        appearance,
        image,
      }) {
        $("#super-hero").append(
          `
            <div class="container">
              
              <div class="card" style="width: 400px">
              <img class="card-img-top" src=${image.url} alt="Card image" style="width:100%">
                <div class="card-body">
                  <h4 class="card-title">${name}</h4>
                 
                  <p>Nombre: ${name}</p> 
            <p>Conexiones: ${connections["group-affiliation"]}</p>
            <p>Ocupacion: ${work.occupation}</p>
            <p>Publicado por: ${biography.publisher}</p>
            <p>Primera aparicion: ${biography["first-appearance"]}</p>
            <p>Altura: ${appearance.height[1]}</p>
            <p>Peso: ${appearance.weight[1]}</p>
            <p>Alias: ${biography.aliases}</p>
            
                  <a href="#" class="btn btn-primary">See Profile</a>
                </div>
              </div>
              <br />
            </div>
  
            
            
            `
        );
      },
    });
  });
});

////////////////////////////////////////////////

("use strict");

$(document).ready(function () {
  $("#boton-buscar").on("click", function () {
    $.ajax({
      type: "GET",
      url:
        "https://superheroapi.com/api.php/10159555609082249/" +
        $("#texto-buscar").val(),
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
            
            <div class="row" >
              <div class="col-4" style="width:100%">
                <img class="card-img-top" src=${image.url} alt="Card image" >
              </div>
              <div class="card-body col-8" style="width: 300px">
                <h4 class="card-title">${name}</h4>                 
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
});
