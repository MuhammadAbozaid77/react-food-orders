import Navigations from "./Navigations";
import ReactQueryProvider from "./ReactQueryProvider";
import ReactRouterDomProvider from "./ReactRouterDomProvider";
import "./../i18n";
import { Toaster } from "react-hot-toast";
export default function AppProvider() {
  return (
    <ReactQueryProvider>
      <ReactRouterDomProvider>
        <Navigations />
      </ReactRouterDomProvider>
      <Toaster
        position={"top-center"}
        containerStyle={{ margin: "8px" }}
        gutter={12}
        toastOptions={{
          success: {
            duration: 10000,
          },
          error: {
            duration: 3000,
          },
          style: {
            maxWidth: "500px",
            fontSize: "16px",
            padding : "5px 10px"
          },
        }}
      />
    </ReactQueryProvider>
  );
}
