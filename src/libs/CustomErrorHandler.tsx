import { useState } from "react";

const useErrorHandler = () =>{
    const [error, setError] = useState<String | null>(null);
    const hanldeError = (error: any) =>{
       if (error.response) {
         setError(`Error: ${error.response.data.message}`);
       } else if (error.message) {
         setError(`Error: ${error.message}`);
       } else {
         setError("An unexpected error occurred");
       }
    }
    const clearError = () =>{
     setError(null);
    }
    return {
      error,
      hanldeError,
      clearError
    }
}

export default useErrorHandler;