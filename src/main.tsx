import "./index.css";

import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Router from "@/routes/Router";
import { store } from "@/store/setupStores";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>,
);
