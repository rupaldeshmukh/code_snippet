import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilCallback } from "recoil";
import * as atoms from "./recoil/atoms"; // import all your atoms here

const EXCLUDED_PATHS = ["/form", "/editor"];

export default function RecoilResetManager() {
  const location = useLocation();

  const resetAllState = useRecoilCallback(({ reset }) => () => {
    Object.values(atoms).forEach((atom) => {
      reset(atom);
    });
  });

  useEffect(() => {
    const currentPath = location.pathname;

    if (!EXCLUDED_PATHS.includes(currentPath)) {
      resetAllState();
    }
  }, [location.pathname, resetAllState]);

  return null; // invisible component
}


__________________________
import RecoilResetManager from "./RecoilResetManager";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <RecoilResetManager />
        <Routes>
          <Route path="/form" element={<FormPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* other routes */}
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
