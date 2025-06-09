import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifMeMore } from './GifMeMoreApp.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifMeMore />
  </StrictMode>
);
