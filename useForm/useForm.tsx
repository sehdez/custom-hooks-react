import { useState } from "react";


export const useForm = ( initialState: any = {} ) => {

    const [values, setValues] = useState( initialState );
    
    const reset = () => {
        setValues( initialState )
    }

    const handleInputChange = ( e: any ) => {
        const { name:input, value } = e.target;
        setValues({
            ...values,
            [input]: value
        })
    }

    return [ values, handleInputChange, reset ]


}

