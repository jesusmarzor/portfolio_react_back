export default function validationForm (name,email,message, setError){
    let errors = {};
    if(name.length === 0) {
        errors.name = "Introduce tu nombre.";
    }
	if(!(/^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/).exec(email)){
		errors.email = "Introduce un email correcto.";
    }
    if(message.length === 0) {
        errors.message = "Introduce tu mensaje.";
    }
    if(Object.keys(errors).length === 0){
        return true;
    }else{
        setError(errors);
        return false;
    }
}