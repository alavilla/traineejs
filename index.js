// Definicion de Clases 

class Vehiculo{
    constructor (marca, modelo, precio) {
      this.marca = marca;
      this.precio = precio;
      this.modelo = modelo;
    }
  }

  class Auto extends Vehiculo {
    constructor (puertas){
        super()
        this.puertas = puertas;
    }

  }

  class Moto extends Vehiculo {
    constructor (cilindrada){
        super()
        this.cilindrada = cilindrada;
    }

  }
 
  var ArrayVehiculos = new Array();

  var vehiculoTemporal = new Auto ();
  vehiculoTemporal.marca = "Peugeot",
  vehiculoTemporal.modelo = "206";
  vehiculoTemporal.precio = 200000
  vehiculoTemporal.puertas = 4; 

  delete(vehiculoTemporal);
  ArrayVehiculos.push(vehiculoTemporal);
  
  vehiculoTemporal = new Moto ();
  vehiculoTemporal.marca = "Honda",
  vehiculoTemporal.modelo = "Titan";
  vehiculoTemporal.precio = 60000
  vehiculoTemporal.cilindrada = 125; 

  delete(vehiculoTemporal);
  ArrayVehiculos.push(vehiculoTemporal);
  
  vehiculoTemporal = new Auto ();
  vehiculoTemporal.marca = "Peugeot",
  vehiculoTemporal.modelo = "208";
  vehiculoTemporal.precio = 250000
  vehiculoTemporal.puertas = 5; 

  delete(vehiculoTemporal);
  ArrayVehiculos.push(vehiculoTemporal);
  
  vehiculoTemporal = new Moto ();
  vehiculoTemporal.marca = "Yamaha",
  vehiculoTemporal.modelo = "YBR";
  vehiculoTemporal.precio = 80500.5
  vehiculoTemporal.cilindrada = 160; 
  
  delete(vehiculoTemporal);
  ArrayVehiculos.push(vehiculoTemporal);

  
  // Esta función imprimira un array con
  // los vehiculos con el formato informado en el requerimiento

  function imprimeDelimitador ()
  {
    console.log("=============================");
}

  function consoleLogVehiculos () 
  {

    //Storeamos el precio del primer vehiculo para comparar en el foreach

    
    vehiculoMasCaro = ArrayVehiculos[0];
    vehiculoMasBarato = ArrayVehiculos[0];
    vehiculosConY = new Array()

    const formatoPesos = new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"});

    ArrayVehiculos.forEach(vehiculo => {

        

        if (vehiculo.marca.includes("Y") || vehiculo.modelo.includes("Y"))
        vehiculosConY.push(vehiculo);


        if(vehiculo.precio > vehiculoMasCaro.precio)
        vehiculoMasCaro = vehiculo;

        if(vehiculo.precio < vehiculoMasBarato.precio)
        vehiculoMasBarato = vehiculo;

        // Comprueba si es un auto o moto para saber a que propiedad acceder.
        // En caso de que no, deriva en Moto por la naturaleza de nuestro codigo, pero podrìa derivar en mas tipo de vehiculos
        if (vehiculo instanceof Auto) {
        console.log("Marca: " + 
        vehiculo.marca +
         " // " +
        "Modelo: " +
        vehiculo.modelo +
        " // " +
        "Puertas: " +
        vehiculo.puertas +
        " // " +
        "Precio: " +
        formatoPesos.format(vehiculo.precio));



        }
        // Si es una moto
        else {
        console.log("Marca: " + 
        vehiculo.marca +
         " // " +
        "Modelo: " +
        vehiculo.modelo +
        " // " +
        "Cilindrada: " +
        vehiculo.cilindrada +
        "cc // " +
        "Precio: " +
        formatoPesos.format(vehiculo.precio));
        }

    });


      imprimeDelimitador();

      console.log ("Vehículo más caro: " + vehiculoMasCaro.marca + " " + vehiculoMasCaro.modelo);
      console.log ("Vehículo más barato: " + vehiculoMasBarato.marca + " " + vehiculoMasBarato.modelo);

      // En este modelo de ejercicio solo se imprimira uno, en caso de haber más autos funcionara correctamente ya que es un array.
     
     if (vehiculosConY)
      console.log ("Vehículo que contiene en el modelo la letra ‘Y’: " + vehiculosConY[0].marca + " " + vehiculosConY[0].modelo + " " +         formatoPesos.format(vehiculosConY[0].precio));
      else
      console.log("Vehículo que contiene en el modelo la letra ‘Y’: Ninguno");

      imprimeDelimitador();

      ArrayVehiculos.sort(function (b, a) {
        if (a.precio > b.precio) {
          return 1;
        }
        if (a.precio < b.precio) {
          return -1;

        }
        // A es igual a B
        return 0;
      });

      console.log("Vehículos ordenados por precio de mayor a menor:");

      //Ejercicio Extra
      ArrayVehiculos.forEach(vehiculoOrdenado => {
      
        console.log(
        vehiculoOrdenado.marca +
        " " +
        vehiculoOrdenado.modelo);

    })

      //Fin del script
    }

consoleLogVehiculos();
   
