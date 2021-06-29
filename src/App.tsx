import PrimerComponente from "./PrimerComponente";
import Producto from "./Producto";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="alert alert-primary" role="alert">
        ¡Hola Mundo!
      </div>
      <PrimerComponente name="Claudio" />
      <Producto
        showChildren
        isFruit = {false}
        price={12}
        color="red"
        detail={{
          title: "Platano",
          text: "Es un fruto comestible, de varios tipos de grandes plantas herbáceas del género Musa",
        }}
      >
        <div>Hola</div>
      </Producto>
    </div>
  );
}
export default App;
