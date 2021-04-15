const nombre = document.getElementById("Nombre");
const email = document.getElementById("Email");
const materia = document.getElementById("Materia");
const boton = document.getElementById("Mesa")
const resultado = document.getElementsById('.Resultado')

boton.addEventListener("click",(e)=>){
	e.preventDefault();
	let error = validarCampos();
	if(error){
		Resultado.innerHTML = error[1];
		Resultado.classList.add("red")
	} else {
		Resultado.innerHTML = "Solicitud enviada correctamente";
		Resultado.classList.add("green")
	}
}


const validarCampos = ()=> {
	let error = [];
	if (Nombre.value.length < 5) {
		error[0] = true;
		error[1] = "El nombre no puede contener menos de 5 caracteres."
		return error;
	}else if (Nombre.value.length > 40) {
		error[0] = true;
		error[1] = "El nombre no puede contener mas de 40 caracteres."
		return error;
	}
	return [0] = false;
	return error;
}