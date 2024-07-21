import { Provider } from "react-redux";
import { Suspense } from "react";

import { store } from "./redux/store.ts";
import { RouteProvider } from "./components/providers/route-provider.tsx";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import { ToastProvider } from "./components/providers/toast-provider.tsx";
import { LanguageProvider } from "./components/providers/language-provider.tsx";
import { CustomError } from "./components/custom-error.tsx";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<CustomError />}>
        <LanguageProvider>
          <ThemeProvider>
            <ToastProvider />
            <RouteProvider />
          </ThemeProvider>
        </LanguageProvider>
      </Suspense>
    </Provider>
  );
}

export default App;
