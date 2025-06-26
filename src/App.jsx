import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Body,
      children: [
        { path: "/", Component: MainContainer },
        { path: "watch", Component: WatchPage },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};
export default App;
