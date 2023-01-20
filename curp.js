var nombre_comp = {
    nombre: null,
    apellido: null,
    curp: null,
    saluda(){
        return "hola"+" "+ this.nombre +" "+ this.apellido +" " + "es un placer atenderte";
    },
    curp_r(){
        return "tu curp es el siguiente:" +" "+ this.curp + " " +"tu sexo es:M"
    }
}
function saludar(){
    alert(nombre_comp.saluda());
    alert (nombre_comp.curp_r());
}
function saveregistro(){
    nombre_comp.nombre = document.getElementById('name').value;
    nombre_comp.apellido = document.getElementById('lastname').value; 
    nombre_comp.curp = document.getElementById('curp').value;
}