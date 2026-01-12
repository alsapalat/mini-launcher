import { BrowserRouter, Routes, Route } from 'react-router';
import { Launcher } from './components/Launcher';
import { AppPlaceholder } from './components/AppPlaceholder';

const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Launcher />} />
        <Route path="/apps/:appId" element={<AppPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
