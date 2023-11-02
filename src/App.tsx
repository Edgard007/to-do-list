import { Suspense, useEffect } from "react";

// ==> Components
import Loading from "@components/Loading";
import Logger from "@common/layout/Logger";

// ==> Pages
import Home from "@pages/Home";

const App = () => {
  useEffect(() => {
    console.clear();

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "var(--color-primary)");
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Logger>
        <Home />
      </Logger>
    </Suspense>
  );
};

export default App;
