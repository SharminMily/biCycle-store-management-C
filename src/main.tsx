import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { PrimeReactProvider } from 'primereact/api';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <div className="max-w-8xl mx-auto bg-[#010113]">
  <PrimeReactProvider>
  <StrictMode> 
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
    <RouterProvider router={router} />
    </PersistGate>
    <Toaster />
    </Provider> 
  </StrictMode>
   </PrimeReactProvider>
   </div>
)
