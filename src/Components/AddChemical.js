import React from 'react'
import { Input, Button } from 'reactstrap';
import { useState } from 'react';
export default function AddChemical(props) {
const {handle_add}=props
const [name,setName]=useState("")
const [formula,setFormula]=useState("")
const hande_add_form=()=>{
    if(name==="")
    {
        alert("bạn  nhập thiếu name")
    }
    else if (formula===""){
        alert("bạn  nhập thiếu formula")
    }
    else {
        handle_add({name:name,formula:formula})
        setName("")
        setFormula("")
    }

}

  return (
    <div>
       <Input placeholder="Nhập Name" value={name}  onChange={(e)=>setName(e.target.value)} />
       <Input placeholder="Nhập Formula" value={formula}  onChange={(e)=>setFormula(e.target.value)} />
       <Button  onClick={()=>hande_add_form()}>Thêm Mới</Button>
    </div>
  )
}
