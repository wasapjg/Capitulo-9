const nombre = document.getElementById("Nombre");
const email = document.getElementById("Email");
const materia = document.getElementById("Materia");
const boton = document.getElementById("Mesa")
const resultado = document.querySelector(".Resultado")

boton.addEventListener("click",(e)=>{
	e.preventDefault();
	const error = validarCampos();
	if(error[0]){
		resultado.innerHTML = error[1];
		resultado.classList.add("red")
	} else {
		resultado.innerHTML = "Solicitud enviada correctamente";
		resultado.classList.add("green")
	}
})

const validarCampos = () => {
  if (Nombre.value.length < 5)
    return [true, "El nombre no puede contener menos de 5 caracteres."];

  if (Nombre.value.length > 40)
    return [true, "El nombre no puede contener mas de 40 caracteres."];

  if (
    Email.value.length < 5 ||
    Email.value.length > 40 ||
    Email.value.indexOf("@") == -1 ||
    Email.value.indexOf(".") == -1
  )
    return [true, "El mail es inaválido"];

  return [false, null];
};


