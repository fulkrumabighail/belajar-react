
import Navbar from './Navbar.jsx'
import Content from './Content.jsx'
import Form from './Form.jsx'
import Footer from "./Footer.jsx";
import Hook from "./Hook.jsx";
import List from "./List.jsx";
function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Content></Content>
      </div>
      <br />
      <Hook></Hook>
      <br />
      <Form></Form>
      <br />
      <Footer></Footer>
      <br />
      <br />
      <List></List>
    </div>
  );
}

export default App
