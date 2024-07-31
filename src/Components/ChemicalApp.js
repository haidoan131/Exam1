import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import ChemicalItem from './ChemicalItem';
import AddChemical from './AddChemical';
import {addChemical,deleteChemical,edit} from "./../redux/chemicalSlice"
import SearchBar from './SearchBar';
import Swal from 'sweetalert2'

export default function ChemicalApp(args) {
  const dispatch = useDispatch();
  const chemicals = useSelector((state) => state.chemicals.chemicals);
const [namesearch,setNameSearch]=useState("")
const [flags,setFlags]=useState("")
  const [modal, setModal] = useState(false);
  const Swal = require('sweetalert2')
  const toggle = () => setModal(!modal);

 const handle_add=(che)=>{
    dispatch(addChemical(che))
    Swal.fire({
        title: "Thêm Thành Công!",
        text: "You clicked the button!",
        icon: "success"
      });
 }
 const handle_delete=(id)=>{
    dispatch(deleteChemical(id))
    Swal.fire({
        title: "Xóa Thành Công!",
        text: "You clicked the button!",
        icon: "success"
      });
 }

 const handle_edit=(che)=>{
    dispatch(edit(che))
    Swal.fire({
        title: "Sửa Thành Công!",
        text: "You clicked the button!",
        icon: "success"
      });
 }

 const filterSeach=(list,flag)=>{
        if(flag==="search"){
            console.log(list.filter(item=>item.name===namesearch))
            const kq=list.filter(item=>item.name===namesearch)
            if(kq.length>=1){
                Swal.fire({
                    title: "Tìm Thấy",
                    text: "You clicked the button!",
                    icon: "success"
                  });
            }
            else {
                Swal.fire({
                    title: "không Tìm Thấy",
                    text: "You clicked the button!",
                    icon: "error"
                  });
            }
            return list.filter(item=>item.name===namesearch)
           

        }    
        else if(flag==="all")
          return list
        return list
 }

  return (
    <div>
      <Container>
        <h1 className="text-center">Bài Thi Kết Thúc Môn Học </h1>
       <SearchBar namesearch={namesearch} setNameSearch={setNameSearch} setFlags={setFlags} />
        <Table dark className="mt-5">
          <thead>
            <tr>
              <th>id</th>
              <th> Name</th>
              <th>Formula</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
           
          {
            filterSeach(chemicals,flags).map((item)=><ChemicalItem  item={item} handle_delete={handle_delete} handle_edit={handle_edit}/>)
          }
           
          </tbody>
        </Table>

        <Button color="danger" onClick={toggle}>Thêm Mới</Button>
      </Container>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add Chemical</ModalHeader>
        <ModalBody>
          <AddChemical handle_add={handle_add}/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
