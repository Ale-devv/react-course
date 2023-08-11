import Todo from "./components/Todo";
import Backdrop from "./components/backdrop";
import Modal from "./components/modal";

function App() {
  return (
    <div>
      <h1> My Todos</h1>
    <Todo text='learn React'/>
    <Todo text='master React'/>
    <Todo text='Explore the full React course'/>
    <Modal />
    <Backdrop />

    </div>
  );
}
export default App;
