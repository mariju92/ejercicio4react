import Form from 'react-bootstrap/Form'
import ListaTareas from './ListaTareas';

function Formulario() {
    return (
        <section>
            <Form>
                <Form.Group className="mb-3" controlId="Tarea">
                    <Form.Control type="text" placeholder="Ingresar Tarea" />
                </Form.Group>
            </Form>
            <ListaTareas/>
        </section>
    );
}

export default Formulario;