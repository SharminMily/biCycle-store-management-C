import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';

createRoot(document.getElementById('root')!).render(
  <div className="max-w-7xl mx-auto">
  <PrimeReactProvider>
  <StrictMode>  
    <RouterProvider router={router} />
  </StrictMode>
   </PrimeReactProvider>
   </div>
)
