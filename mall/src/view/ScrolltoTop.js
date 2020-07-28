import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrolltoTop(){
    const pathName = useLocation()
    console.log('pathName=>',pathName)
    useEffect(()=>{
        console.log(123)
        window.scrollTo(1000,0)

    },[pathName])
    return false
}

