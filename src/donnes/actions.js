export const Addtransaction=(trans)=>{
     return {type:'Addtransaction', payload:trans}
}

export const Deletetransaction=(id)=>{
     return {type:'Deletetransaction', payload:id}
}