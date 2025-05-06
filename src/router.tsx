import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Pricing } from './pages/Pricing';
import { Testimonials } from './pages/Testimonials';
import { FAQs } from './pages/FAQs';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'testimonials',
        element: <Testimonials />,
      },
      {
        path: 'faqs',
        element: <FAQs />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
    ],
  },
]);