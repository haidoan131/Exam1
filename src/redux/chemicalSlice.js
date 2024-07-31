import{createSlice} from "@reduxjs/toolkit"

const initialState={
    chemicals: [
        {
            id:1,
            name:"Hydrochloric Acid",
            formula:"HCL"
           
        },
        {
            id:2,
            name:"Sodium Chloride",
            formula:"NaCL"
        },
        {
           
            id:3,
            name:"Sulfuric Acid",
            formula:"NaCL"
        },
        {
           
            id:4,
            name:"Ammonia",
            formula:"NaCL"
        }
    
        ,
        {
           
            id:5,
            name:"Ethanol",
            formula:"NaCL"
        }
       
        ]
        
        
}
if(localStorage.getItem(("chemicals"))){
    initialState.chemicals = JSON.parse(localStorage.getItem("chemicals"));
}

const listSlice=createSlice({
  
    name:"chemicals",
    initialState,
    reducers:{
       addChemical(state,action){
        let idmax=state.chemicals.reduce((max_value,chemical)=>Math.max(max_value,chemical.id),-Infinity)
        // state.students=[...state.students,{id:stat.stuedents.length===0?1:idmax+1,name:action.payload,checked:true}]
        state.chemicals=[...state.chemicals,  {id:state.chemicals.length===0?1:idmax+1,...action.payload}]
        localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
      
        },
       deleteChemical(state,action){
        state.chemicals=state.chemicals.filter(item=>item.id!==action.payload)

        localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
       }
       ,edit(state,action){
        state.chemicals=state.chemicals.map(item=>item.id===action.payload.id?{...item,...action.payload}:item)
        localStorage.setItem("chemicals", JSON.stringify(state.chemicals));
       }
    }
})

export const{addChemical,deleteChemical,edit}=listSlice.actions
export default listSlice.reducer