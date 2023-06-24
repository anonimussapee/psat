import { useEffect, useState } from 'react'

const useLocaleStorage = (name, initialValue) => {

  let [data, setData ]= useState(initialValue)

  useEffect(()=>{
    setTimeout(() => {
      let dataLocal = JSON.parse(window.localStorage.getItem(name)) || initialValue
      setData(dataLocal)
    }, 5)
    
  },[])

  const save = (newData) =>{
    setData(newData)
    let dataLocal = JSON.stringify(newData)
    window.localStorage.setItem(name , dataLocal)
    
  }

  return {data, save}

}
export {useLocaleStorage}