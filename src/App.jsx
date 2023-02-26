import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import pizzas from "./pizzas.json";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content__items">
        {pizzas.map((obj) => (
          <Main key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
