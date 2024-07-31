import React from 'react'
import { Input, Button } from 'reactstrap';
import Swal from 'sweetalert2'
export default function SearchBar(props) {
    const {namesearch,setNameSearch,setFlags}=props
  return (
    <div>
           <Input placeholder="nhập name cần tìm" value={namesearch}  onChange={(e)=>setNameSearch(e.target.value)}  
       />

       <Button onClick={()=>setFlags("search")} className="mt-3">Tìm Kiếm</Button>
       <Button onClick={()=>setFlags("all")} className="mx-5 mt-3" >Trả về Danh sách</Button>
    </div>
  )
}
