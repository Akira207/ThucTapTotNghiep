import Home from "./pages/Home";
import { DefaultLayout } from "./components/layout/";

function App() {
  return (
    <div>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </div>
  );
}

export default App;
