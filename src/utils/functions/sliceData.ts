export function sliceData<T extends string[]>(arr:T): string[]{
   const res: string[] = [] 
   if(arr.length === 0){
      return arr
   }
   arr.map(el => res.push(el.split("/").pop()!) )  
   return res
}