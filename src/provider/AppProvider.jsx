import Navigations from "./Navigations";
import ReactQueryProvider from "./ReactQueryProvider";
import ReactRouterDomProvider from "./ReactRouterDomProvider";
import "./../i18n";

export default function AppProvider() {

    

  return (
    <ReactQueryProvider>
      <ReactRouterDomProvider>
        <Navigations />
      </ReactRouterDomProvider>
    </ReactQueryProvider>
  );
}
