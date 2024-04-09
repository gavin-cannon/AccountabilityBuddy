import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Friends from "./routes/Friends.jsx";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/friends", element: <Friends /> },
]);


