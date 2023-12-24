import App from "./App";
import './index.css'
import { createRoot } from 'react-dom/client';

const container = document.querySelector("#root");
const roots = createRoot(container);
roots.render(<App />);