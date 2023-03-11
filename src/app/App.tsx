import React, { Suspense } from "react";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { useTheme } from "app/providers/ThemeProvider";
import { Counter } from "entitites/Counter/ui/Counter";
import { classNames } from "shared/lib/classNames";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar/>
        <Counter/>
        <div className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
