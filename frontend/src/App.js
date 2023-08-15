import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
import Header from "./components/Header";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/chats" component={ChatPage} />
      <Route path="/signup" component={SignUp} />
    </>
  );
}

export default App;
