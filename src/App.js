import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';

function App() {

  const btnHandle = () =>{
  toast.success("done",{position:'top-center'

});
  };  

  return (
    <div>
      <Router>
      <ToastContainer/>
      <Container>
      <Header/>
      <Row>
        <Col md={4}><Menu/></Col>
        <Col md={8}>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/view-courses" Component={AllCourses} exact />
          <Route path="/add-course" Component={AddCourse} exact />
          </Routes>
        </Col>
      </Row>
      </Container>
      </Router>
  </div>
  );
}

export default App;
