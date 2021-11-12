function multi(){
  var numerouno= document.getElementById('primeraPeticion').value;
  var numerodos= document.getElementById('segundaPeticion').value;
  var resultado= parseInt(numerouno) * parseInt(numerodos);
  alert("El resultado de la multiplicacion es " + resultado);
}
