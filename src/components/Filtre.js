import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

  import { vesibtodos } from '../redux/actions';
  import {  useDispatch } from "react-redux";
  export const Filtre = (todos) => {
    const dispatch = useDispatch();
    const handlefilter=(e)=>{
        //console.log(e.target.id)
        dispatch(vesibtodos(e.target.id))
    }
      return (


        <div style ={{marginTop:"10px"}}>
            <ButtonGroup  >
            <Button  onClick ={handlefilter}id='done' variant="dark">Done</Button>
            <Button onClick ={handlefilter}id='undone' variant="dark">Undone</Button>
            <Button  onClick ={handlefilter}  id='all' variant="dark">All</Button>
        </ButtonGroup>
        </div>
          
      )
  }