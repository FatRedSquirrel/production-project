import React, { Suspense } from "react";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";

import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  const additional = theme ? [theme] : [];

  return (
    <div className={classNames("app", {}, additional)}>
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
