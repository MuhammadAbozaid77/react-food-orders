import Navigations from "./Navigations";
import ReactQueryProvider from "./ReactQueryProvider";
import ReactRouterDomProvider from "./ReactRouterDomProvider";
import "./../i18n";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useEffect } from 'react';
export default function AppProvider() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
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
            padding: "5px 10px",
          },
        }}
      />
    </ReactQueryProvider>
  );
}
