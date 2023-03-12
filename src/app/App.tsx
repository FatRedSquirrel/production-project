import React, { Suspense, useEffect } from "react";

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { useDispatch } from "react-redux";
import { userActions } from "entitites/User";

const App = () => {

  const dispatch = useDispatch();

  const { theme } = useTheme();
  document.body.className = theme;

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
