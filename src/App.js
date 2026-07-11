import React, { useMemo, useState } from "react";
import "./App.css";

import MyProjects from "./myProjects";
import MyPortfolio from "./myPortfolio";
import AboutMe from "./aboutMe";
import Skills from "./skills";
import ThemeContext from "./themeContext";

import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <div
        className={`app-shell ${theme === "light" ? "theme-light" : "theme-dark"}`}
      >
        <div
          dir="rtl"
          className="main"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "stretch",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div style={{ width: "100%", minHeight: "100vh" }}>
            <Routes>
              <Route path="/" element={<MyPortfolio />} />
              <Route path="/projects" element={<MyProjects />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
