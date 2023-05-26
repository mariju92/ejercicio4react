import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({ ListaTareas }) => {
  return (
    <ListGroup>
      {
        ListaTareas.map((tarea, indice)=> <ItemTarea key={indice} tarea={tarea}></ItemTarea> )
      }
      
    </ListGroup>
  );
};

export default ListaTareas;
