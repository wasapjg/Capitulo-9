const nombre = document.getElementById("Nombre");
const email = document.getElementById("Email");
const materia = document.getElementById("Materia");
const boton = document.getElementById("Mesa")
const resultado = document.querySelector("resultado")

boton.addEventListener("click",(e)=>{
	e.preventDefault();
	let error = validarCampos();
	if(error){
		resultado.innerHTML = error[1];
		resultado.classList.add("red")
	} else {
		resultado.innerHTML = "Solicitud enviada correctamente";
		resultado.classList.add("green")
	}
})


const validarCampos = ()=> {
	let error = [];
	if (Nombre.value.length < 5) {
		error[0] = true;
		error[1] = "El nombre no puede contener menos de 5 caracteres."
		return error;
	}else if (Nombre.value.length > 40) {
		resultado.error[0] = true;
		resultado.error[1] = "El nombre no puede contener mas de 40 caracteres."
		return error;
	}else if (	Email.value.length < 5 ||
	 			Email.value.length > 40 || 
				Email.value.indexOf("@") == -1 ||
				Email.value.indexOf(".") == -1 )  {
		resultado.error[0]= true;
		resultado.error[1]= "El mail es inaválido"
		return error;
	}




	error [0] = false;
	return error;
}