/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { HousePlans } from './pages/HousePlans';
import { FindServices } from './pages/FindServices';
import { JoinProvider } from './pages/JoinProvider';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "house-plans", element: <HousePlans /> },
      { path: "find-services", element: <FindServices /> },
      { path: "join-provider", element: <JoinProvider /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
