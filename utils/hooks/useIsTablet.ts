
import { useEffect, useState } from "react";



const useIsTablet = () => {

    if(typeof window == 'undefined') return false
    const [width, setWidth] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
   return width <= 1024;
}

export default useIsTablet
