import React, { useEffect, useState } from 'react'


const localCache = {}


export const useFetch = (url) => {
    
    const initialState = {
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    };
    
    const [state, setState] = useState(initialState)


    useEffect(() => {
        getFetch();
    }, [url])
    

    const getFetch = async () => {
        setState(initialState)

        if ( localCache[url]){
            console.log('usando caché')
            setState({ 
                ...state, 
                data: localCache[url],
                isLoading: false
            });
            return;
        }

        const resp  = await fetch(url);

        // sleep
        await new Promise( resolve => setTimeout(resolve, 1000))

        if( !resp.ok ) {
            setState({ 
                ...state, 
                isLoading: false,  
                hasError: true,  
                errorMessage: {
                    code: resp.status, 
                    message: resp.statusText 
                }
            });
            return;
        }
         
        const data = await resp.json()
        setState({ 
            ...state, 
            data: data,
            isLoading: false
        });

        localCache[url] = data;
    }
    
    // return {
    //     data: state.data,
    //     isLoading: state.isLoading,
    //     hasError: state.hasError,
    //     error: state.error
    // }


    return {
        ...state
    }
}
