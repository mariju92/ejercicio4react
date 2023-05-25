import Form from 'react-bootstrap/Form'

function Formulario() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="Tarea">
                    <Form.Control type="text" placeholder="Ingresar Tarea" />
                </Form.Group>
            </Form>
        </div>
    );
}

export default Formulario;