import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import { Provider } from "react-redux";
import Toaster from "../src/components/Helpers/Toaster";
import DefaultLayout from "../src/components/Partials/DefaultLayout";
import store from "../src/store/store";
import "../styles/globals.css";
import "../styles/loader.css";
import "../styles/selectbox.css";

/*page loader
 *package name:nProgress
 * github: https://github.com/rstacruz/nprogress */

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";
import MaintenanceWrapper from "../src/components/Partials/Headers/MaintenanceWrapper";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
//page loader end

//font awesome
library.add(fas, fab, far);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    
      <Provider store={store}>
        <DefaultLayout>
          <MaintenanceWrapper>
           <Component {...pageProps} />
          </MaintenanceWrapper>
        </DefaultLayout>
      </Provider>
      <Toaster />
    </>
  );
}

export default MyApp;
