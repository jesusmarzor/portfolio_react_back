import React from "react";
import Button from "components/ui/Button";
import Input from "components/Contact/Form/Input";
import Message from "components/Contact/Form/Message";
import useFormspree from "hooks/useFormspree";
import "./styles.scss";

export function Form(){

    const {setName, setEmail, setMessage, state, response, errors, sendMail, changeData, loading} = useFormspree();
    
    return(
        <form className="form" onSubmit={ sendMail }>
            <Input label="Nombre" name="name" changeData={changeData} setData={setName} type="text" placeholder="Introduce tu nombre..." error={errors.name}/>
            <Input label="Email" name="email" changeData={changeData} setData={setEmail} type="text" placeholder="Introduce tu email..." error={errors.email}/>
            <Input label="Mensaje" name="message" changeData={changeData} setData={setMessage} type="message" placeholder="Introduce tu message..." error={errors.message}/>
            <Button label="button" disabled={state.submitting}>{(loading) ? "Cargando" : "Enviar"}</Button>
            <div className="form__response">
                {
                    (response !== null)
                    ?
                        (response)
                        ?
                            <Message result="success">!Mensaje enviado con éxito!</Message>
                        :
                            <Message result="error">!Error al enviar el mensaje!</Message> 
                    :
                        null
                }
            </div>
        </form>
    )
}