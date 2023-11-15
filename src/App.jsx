import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EditPokemonPage from "./pages/EditPokemonPage";
import HomePage from "./pages/HomePage";
import NewPokemonPage from "./pages/NewPokemonPage";
import PokemonPage from "./pages/PokemonPage";
import AllPokemonsPage from "./pages/AllPokemonsPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <HomePage />,
    children: [
      { index: true, element: <AllPokemonsPage /> },
      { path: "/new", element: <NewPokemonPage /> },
      { path: "/:id", element: <PokemonPage /> },
      { path: "/:id/edit", element: <EditPokemonPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
