//Continuando con lo anterior, tenemos una tabla de las temperaturas medias por mes de los doce meses en grados Fahrenheit; 
//¿cómo hacemos para calcular el promedio anual en Celsius?

const temperaturasFahrenheit = [78, 75, 73, 70, 68, 64, 65, 67, 70, 71, 73, 78];
let sumaTemperaturas=0

for (let i = 0; i < 12; i++) {
    sumaTemperaturas=sumaTemperaturas+temperaturasFahrenheit[i];
  }


promedioFahrenheit=sumaTemperaturas/12


promedioCelsius = (promedioFahrenheit-32)*(5/9)

console.log("El promedio anual en Celsius es:",promedioCelsius)