import { Suspense, useEffect } from "react";

// ==> Components
import Loading from "@components/Loading";
import Logger from "@common/layout/Logger";

// ==> Pages
import Home from "@pages/Home";

// ==> Contexts
import { MainProvider } from "@utils/providers/MainProvider";

const App = () => {
  useEffect(() => {
    console.clear();

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "var(--color-primary)");
  }, []);

  return (
    <MainProvider>
      <Suspense fallback={<Loading />}>
        <Logger>
          <Home />
        </Logger>
      </Suspense>
    </MainProvider>
  );
};

export default App;
