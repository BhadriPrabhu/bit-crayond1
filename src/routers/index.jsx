import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact } from "../screens";

import { Router } from "./routers";
import { Layout } from "../components";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Router.Home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Router.Contact} element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}