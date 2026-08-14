
// import Counter from "./Practice/Counter";
// import CounterReducer from "./Practice/CounterReducer";
// import DebouncedSearch from "./Practice/DebouncedSearch";
// import SearchFilter from "./Practice/SearchFilter";
// import TodoAPP from "./Practice/TodoApp";

import ContactFormWithUseState from "./Practice/ContactForm";
import { CounterProvider } from "./Practice/ContextAPI/CounterContext";
// import ReduxCounter from "./Practice/ReduxCounter";
// import CounterWithContextAPI from "./Practice/CounterWithContextAPI";
// import PaginationTable from "./Practice/PaginationTable";
// import ShopingCart from "./Practice/ShopingCart/ShopingCart";

// import Accordian from "./Practice/Accordian";

// import ReactDebounced from "./Practice/ReactDebouncing";


function App() {
  return (
    <CounterProvider>
      <div className="container">
        <h1 className="text-3xl font-bold underline ">Practice app</h1>
        {/* <Counter/> */}
        {/* <TodoAPP/> */}

        {/* <SearchFilter/> */}

        {/* <DebouncedSearch/> */}

        {/* <CounterReducer/> */}


        {/* <ShopingCart/> */}

        {/* <ReactDebounced/> */}

        {/* <Accordian></Accordian> */}
        {/* <PaginationTable /> */}
        {/* <CounterWithContextAPI/> */}
        {/* <ReduxCounter/> */}

        <ContactFormWithUseState />

      </div>
    </CounterProvider>
  );
}

export default App;