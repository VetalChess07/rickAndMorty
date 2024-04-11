export const useLocalStorage = (key:string) =>{
   const setItem = (value:unknown) =>{
      
      try{
         window.localStorage.setItem(key, JSON.stringify(value))
      }
      catch(error){
         console.error(error)
      }
      // это я делаю чтобы в лучае елси браузер не поддерживает ls или оно будет переполнено
   }
   const getItem = () =>{
      
      try{
         const item = window.localStorage.getItem(key)
         return item ? JSON.parse(item) : null
      }
      catch(error){
         console.error(error)
      }
      // это я делаю чтобы в лучае елси браузер не поддерживает ls или оно будет переполнено
   }


   return {setItem, getItem}
}