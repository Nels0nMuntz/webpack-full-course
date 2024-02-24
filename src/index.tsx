import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import App from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AboutLazy } from '@/pages/about/About.lazy';
import { ShopLazy } from '@/pages/shop/Shop.lazy';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback='Loading...'>
            <AboutLazy />
          </Suspense>
        ),
      },
      {
        path: '/shop',
        element: (
          <Suspense fallback='Loading...'>
            <ShopLazy />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
