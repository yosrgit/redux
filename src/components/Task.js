import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { Delete , Uppdate, toggleTodo } from '../redux/actions';
import cx from "classnames";

 const Task = ({todo}) => {
    let [description, setDescription] = useState(todo.description);
     let [edit, setEdit] = useState(false);
     let  dispatch = useDispatch();
    return (
        <div className="task">
             <div >
                   {edit ? 
                   
                   <input type="text" className="col control form" 
                   value={description}
                   onChange={(e)=>setDescription(e.target.value)} /*modifier la tache*/ />
                 
                   
  
                   : <li className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}> 
                   {/*is done or not done */}
                     {todo && todo.completed ? "👌" : "👋"}{" "}
                       <span className={cx( "todo-item__text",
                         todo && todo.completed && "todo__completed")} >
                           {todo.description}    
                           </span>
                      </li> } {/* validation du tache  */}
            </div>
                  
            <div   >
            <button type="button" className="btn btn-xs  btn-warning img-circle" onClick={() => dispatch(toggleTodo(todo.id))}>
                    {todo.completed ? <i className="fas fa-check-double">done</i>  : <i className="fas fa-times">undone</i>}
                </button>
            <button type="button" className="btn btn-xs  btn-success img-circle" onClick={()=>{
                  dispatch(Uppdate(
                    {
                      ...todo,
                      description: description
                   }
                  ));
                if (edit) {
                setDescription(todo.description) ; 
                }
               setEdit(!edit); // si edit =false recoit true et iversement  
            }}>
              <i class="fas fa-edit"></i>
            {edit?"Update":"Edit"}</button>
           {/* on click sur  le bouton  Edit devient Update*/}

           <button type="button" className="btn btn-xs  btn-danger img-circle" onClick={()=>dispatch(Delete(todo.id))}> <i class="far fa-trash-alt"></i> Delete</button>
        </div>
        </div>
    )
};
export default Task;