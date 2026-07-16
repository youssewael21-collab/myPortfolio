import React, { useContext } from "react";
import { Button } from "@mui/material";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ArrowForward from "@mui/icons-material/ArrowForward";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderIcon from "@mui/icons-material/Folder";
import HomeIcon from "@mui/icons-material/Home";
import ArrowOutward from "@mui/icons-material/ArrowOutward";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ThemeContext from "./themeContext";

export default function MyPortfolio() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      className="page-shell page-home"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(135deg, #f8fafc, #e2e8f0 45%, #cbd5e1)"
            : "linear-gradient(135deg, #0f172a, #111827 45%, #1f2937)",
      }}
    >
      <nav className="glass-nav">
<Button
  component="a"
  href="https://wa.me/201129788151"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn"
  startIcon={<ArrowOutward />}
>
  Let's Talk
</Button>
        <div className="nav-center">
          <Button
            className="theme-toggle-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="تبديل الثيم"
          >
            {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
          <Button
            component={Link}
            to="/"
            className="nav-pill"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>
          <Button
            component={Link}
            to="/projects"
            className="nav-pill"
            startIcon={<FolderIcon />}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/about"
            className="nav-pill"
            startIcon={<AccountCircleIcon />}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/skills"
            className="nav-pill"
            startIcon={<SettingsSuggestIcon />}
          >
            Skills
          </Button>
        </div>

        <img
          src="/Project2.png"
          alt="logo"
          width="62"
          style={{ borderRadius: "50%" }}
        />
      </nav>

      <div className="hero-grid" dir="ltr">
        <div className="hero-content glass-card">
          <div className="badge">
            <span>●</span>
            Front-end Developer • Designer • Creator
          </div>
          <h1 className="hero-title">مصمم بوسترات بقي مصمم ويب.. ومصمم ينجح</h1>
          <span className="hero-copy" style={{ marginTop: "20px" }}>
            أركز على التفاصيل، البساطة، والتجربة اللطيفة لكل مستخدم.
          </span>

          <div className="hero-actions">
            <Button
              component={Link}
              to="/projects"
              className="primary-btn"
              endIcon={<ArrowForward />}
            >
              شاهد أعمالي
            </Button>
            <Button component={Link} to="/about" className="secondary-btn">
              عني أكثر
            </Button>
          </div>

          <div className="social-row" style={{ marginTop: 18 }}>
            <Button
              className="social-btn"
              href="https://www.instagram.com/youssif_goo_/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </Button>
            <Button
              className="social-btn"
              href="https://github.com/youssewael21-collab"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </Button>
            <Button
              className="social-btn"
              href="https://www.linkedin.com/in/youssef-wael-b07555422/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </Button>
          </div>
        </div>

        <div className="visual-card glass-card">
          <img src="/Project.png" alt="portfolio preview" />
          <div className="stack-row">
            <span className="stack-pill">
              <FaGitAlt />
              GitHub
            </span>
            <span className="stack-pill">
              <FaReact />
              React
            </span>
            <span className="stack-pill">
              <FaJs />
              JavaScript
            </span>
            <span className="stack-pill">
              <FaCss3Alt />
              CSS
            </span>
            <span className="stack-pill">
              <FaHtml5 />
              HTML
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
