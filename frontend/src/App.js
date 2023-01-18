import "./App.css";
import Cart from "./Components/Payments/Cart";
import {ChakraProvider} from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Cart />
      </ChakraProvider>
    </div>
  );
}

export default App;
