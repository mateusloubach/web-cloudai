import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from './lib/react-query/QueryProvider';
import App from '@/App'

// remove StrictMode when testing is complete
import { StrictMode } from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <App />
      </QueryProvider>
    </BrowserRouter>
  </StrictMode>
)