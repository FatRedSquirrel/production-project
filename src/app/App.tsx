import React, { Suspense } from "react";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { useTheme } from "app/providers/ThemeProvider";
import { Counter } from "entitites/Counter/ui/Counter";

const App = () => {
  const { theme } = useTheme();

  document.body.className = theme ? theme : "";

  return (
    <div className="app">
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
