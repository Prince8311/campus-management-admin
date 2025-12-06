import { Bounce, ToastContainer } from "react-toastify";
import Routers from "./Router/Router";

function App() {
  return (
    <>
      <ToastContainer
        toastClassName="custom_toast"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Routers />
    </>
  );
}

export default App;
