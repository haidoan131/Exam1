import React from 'react'
import { Input, Button } from 'reactstrap';

export default function EditChemical(props) {
    const {nameUpdate,formulaUpdate,setNameUpdate,setFormulaUpdate,handle_edit,id}=props
  return (
    <div>
      <Input value={nameUpdate} onChange={(e)=>setNameUpdate(e.target.value)} />
       <Input  value={formulaUpdate} onChange={(e)=>setFormulaUpdate(e.target.value)}/>
       <Button  onClick={()=>handle_edit({name:nameUpdate,formula:formulaUpdate,id:id})}>Update</Button>
    </div>
  )
}
