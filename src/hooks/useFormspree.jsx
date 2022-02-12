import {useRef, useState, useEffect, useCallback} from "react";
import validationForm from "components/Contact/Form/validateForm";
import { useForm } from '@formspree/react';

export default function useFormspree(){
    const mounted = useRef(false);
    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [state, handleSubmit] = useForm(process.env.REACT_APP_ID_FORM);
    const [response, setResponse] = useState(null);
    useEffect( () => {
            if(mounted.current === false){
                mounted.current = true;
            }else{
                setLoading(state.submitting);
                if(state.submitting === false){
                    setResponse(state.succeeded);
                    setTimeout(()=>{
                        setResponse(null);
                    },5000);
                }
            }
    },[state.submitting, state.succeeded]);

    const sendMail = useCallback((e) => {
        e.preventDefault();
        if(validationForm(name,email,message,setErrors)){
            handleSubmit(e);
            e.target.reset();
            setName("");
            setEmail("");
            setMessage("");
            setErrors({});
        }
    },[name, email, message, handleSubmit]);
    const changeData = useCallback(({e,setData}) => {
        setData(e.target.value);
    },[]);

    return {setName, setEmail, setMessage, state, response, errors, sendMail, changeData, loading}
}