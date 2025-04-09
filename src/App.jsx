import AppProvider from "./provider/AppProvider";
import { Provider } from "react-redux";
import storeRedux from "./store/store";
export default function App() {
  return (
    <Provider store={storeRedux}>
      <AppProvider />
    </Provider>
  );
}
