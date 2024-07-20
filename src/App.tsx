import { Provider } from "react-redux";

import { store } from "./redux/store.ts";
import { RouteProvider } from "./components/providers/route-provider.tsx";
import { ThemeProvider } from "./components/providers/theme-provider.tsx";
import { ToastProvider } from "./components/providers/toast-provider.tsx";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ToastProvider />
        <RouteProvider />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
