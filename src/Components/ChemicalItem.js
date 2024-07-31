import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import EditChemical from './EditChemical';

export default function ChemicalItem(props,args) {
    const {item,handle_delete,handle_edit}=props
    const [modal, setModal] = useState(false);
    const [nameUpdate,setNameUpdate]=useState("")
    const [formulaUpdate,setFormulaUpdate]=useState("")
    const [id,setId]=useState("")
    const toggle = (item) =>{ 
          setModal(!modal)
          setNameUpdate(item.name)
          setFormulaUpdate(item.formula)
          setId(item.id)  
    };

   


  return (

      
      <tr>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.formula}</td>
              <td>
                <Button onClick={()=>handle_delete(item.id)} color="danger">Delete</Button>
              
              </td>
              <td>
                <Button  onClick={()=>toggle(item)} color="success">Update</Button>
              
              </td>


              <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Update Chemical</ModalHeader>
        <ModalBody>
          <EditChemical  nameUpdate={nameUpdate} setNameUpdate={setNameUpdate} formulaUpdate={formulaUpdate} setFormulaUpdate={setFormulaUpdate} handle_edit={handle_edit} id={id}/>
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
     </tr>




  )
}
