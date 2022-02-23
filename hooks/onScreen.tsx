import React, {useState, useEffect} from 'react'

// type TonScreen = (ref: any) => boolean

export default function useOnScreen(ref:any):boolean {

    const [isIntersecting, setIntersecting] = useState<boolean>(false)
  
   
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
          )

      observer.observe(ref.current)

     
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
  }