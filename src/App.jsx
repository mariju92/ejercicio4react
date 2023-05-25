import { Container } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return (
    <>
    <h1 className='display-4 py-3 text-center bg-black text-light'>Lista de tareas</h1>
    <Container className='mainPage'>
      <hr className='text-light'/>
      {/*aqui se agrega el formulario*/}
    </Container>
<footer className='bg-black text-secondary text-center py-2'>
  <p>&copy; Todos los derechos reservados</p>
</footer>

    </>
  )
}

export default App
