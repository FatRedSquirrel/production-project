import React, { Suspense } from "react";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";

const App = () => {

  const { theme } = useTheme();
  document.body.className = theme;

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar/>
        <div className='content-page'>
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
