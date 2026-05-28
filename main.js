const updateBtn = document.getElementById("updateBtn");

const tractors = document.getElementById("tractors");
const fuel = document.getElementById("fuel");
const temp = document.getElementById("temp");
const area = document.getElementById("area");

updateBtn.addEventListener("click", () => {

  const tractorValue = Math.floor(Math.random() * 20) + 5;
  const fuelValue = Math.floor(Math.random() * 15) + 10;
  const tempValue = Math.floor(Math.random() * 20) + 70;
  const areaValue = Math.floor(Math.random() * 500) + 100;

  tractors.textContent = tractorValue;
  fuel.textContent = `${fuelValue} L/h`;
  temp.textContent = `${tempValue}°C`;
  area.textContent = `${areaValue} ha`;

  updateBtn.textContent = "Dados Atualizados ✅";

  setTimeout(() => {
    updateBtn.textContent = "Atualizar Dados";
  }, 2000);
});