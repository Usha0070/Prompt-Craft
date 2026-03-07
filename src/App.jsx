import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Home        from './pages/Home';
import TextTo3D    from './pages/TextTo3D';
import ImageTo3D   from './pages/ImageTo3D';
import ModelMarket from './pages/ModelMarket';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<Home />}        />
        <Route path="/text-to-3d"   element={<TextTo3D />}    />
        <Route path="/image-to-3d"  element={<ImageTo3D />}   />
        <Route path="/model-market" element={<ModelMarket />} />
      </Routes>
    </BrowserRouter>
  );
}
