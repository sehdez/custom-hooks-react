import { useEffect, useRef, useState } from 'react';


interface UseState{
    data: null | any;
    loading: boolean;
    error: null | Error;
}

export const useFetch = ( url: string ) => {

    const isMounted = useRef(true)

    const [state, setState] = useState<UseState>({
        // data   : [{ author:'', quote:'', series:''}],
        data: null,
        loading: true,
        error  : null 
    });
    useEffect( ()=> {
        return ()=> {
            isMounted.current = false;
        }
    }, [])
    useEffect( () => {
        setState({
            data: null,
            loading: true,
            error  : null 
        })
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                if (isMounted.current){
                        setState({
                            loading: false,
                            error: null,
                            data 
                        })
                    } else {
                        console.log('setState no se llamó')
                    }
                } )
    }, [url])
    return state; 
}