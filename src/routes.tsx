import { createBrowserRouter } from "react-router-dom";

import { Layouts } from "./components/layouts/Layouts";
import { Home } from "./pages/Home";
import { Reservar } from "./pages/Reservar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: 
        <Layouts />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/new-reserva',
                element: <Reservar />
            },
        ]
    }
])