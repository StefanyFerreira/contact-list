let contactos = [];
let contactoOne = {
  nombre: "Stefany Torres",
  edad: 19,
  correo: "Stefany-torres@gmail.com",
  telefono: 3008076248,
  ciudad: "Barranquilla",
  Dirreccion: "Carrera 112d #78-66",
};

let contactoTwo = {
  nombre: "Alexandra Torres",
  edad: 22,
  correo: "Alexandra-torres@gmail.com",
  telefono: 321456789,
  ciudad: "Bogotá",
  Dirreccion: "Carrera 113d #75-66",
};

let contactoThree = {
  nombre: "Paula Lemos",
  edad: 12,
  correo: "Paula-lemos@gmail.com",
  telefono: 3123614588,
  ciudad: "Chia-Cundinamarca",
  Dirreccion: "Diagonal 77b #116-51",
};

let contactoFour = {
  nombre: "Santiago Rodriguez",
  edad: 34,
  correo: "Santiago-Rodriguez@gmail.com",
  telefono: 3148526028,
  ciudad: "Medellin",
  Dirreccion: "Calle 113d #78-36",
};

function adicionarContacto(contacto) {
  contactos.push(contacto);
  return contacto;
}
adicionarContacto(contactoOne);
adicionarContacto(contactoTwo);
adicionarContacto(contactoThree);
adicionarContacto(contactoFour);
console.log(contactos);

function eliminarContacto(contactos) {
  contactos.pop(contactos);
  return contactos;
}
eliminarContacto(contactos);
console.log(contactos);

console.log(contactoTwo.ciudad);

function actualizarContacto(contactos) {
  contactoOne.Dirreccion = "Carrera 2";
  return contactos;
}
actualizarContacto(contactos);
console.log(contactos);

function actualizarContacto(contactos) {
  contactoTwo.correo = "ALEXANDRA123";
  return contactos;
}
actualizarContacto(contactos);
console.log(contactos);
