// DATA

const date = document.getElementById("date");

function updateDate(){

  const now = new Date();

  date.innerHTML =
    now.toLocaleDateString("pt-BR") +
    " • " +
    now.toLocaleTimeString("pt-BR");
}

setInterval(updateDate,1000);

updateDate();

// TELEMETRIA

const speed = document.getElementById("speed");
const fuel = document.getElementById("fuel");
const temp = document.getElementById("temp");
const area = document.getElementById("area");

function updateTelemetry(){

  const speedValue = Math.floor(Math.random()*40)+10;

  const fuelValue = Math.floor(Math.random()*100);

  const tempValue = Math.floor(Math.random()*50)+60;

  const areaValue = (Math.random()*150).toFixed(1);

  speed.innerHTML = speedValue + " km/h";

  fuel.innerHTML = fuelValue + "%";

  temp.innerHTML = tempValue + "°C";

  area.innerHTML = areaValue + " ha";

  updateChart(speedValue);
}

// CHART

const ctx = document.getElementById("chart");

const chart = new Chart(ctx,{

  type:"line",

  data:{
    labels:[],
    datasets:[{
      label:"Velocidade km/h",
      data:[],
      borderColor:"#32d583",
      backgroundColor:"rgba(50,213,131,0.2)",
      fill:true,
      tension:0.4
    }]
  },

  options:{
    responsive:true,

    plugins:{
      legend:{
        labels:{
          color:"#fff"
        }
      }
    },

    scales:{
      x:{
        ticks:{
          color:"#94a3b8"
        }
      },

      y:{
        ticks:{
          color:"#94a3b8"
        }
      }
    }
  }
});

function updateChart(value){

  const time = new Date().toLocaleTimeString();

  if(chart.data.labels.length > 10){

    chart.data.labels.shift();

    chart.data.datasets[0].data.shift();
  }

  chart.data.labels.push(time);

  chart.data.datasets[0].data.push(value);

  chart.update();
}

// UPDATE

updateTelemetry();

setInterval(updateTelemetry,3000);