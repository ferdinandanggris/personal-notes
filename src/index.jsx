import React from 'react';
import NotesApp from './components/NotesApp';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);