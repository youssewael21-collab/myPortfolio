import React, { useContext } from "react";
import { Button } from "@mui/material";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

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

export default function Skills() {
  const { theme, setTheme } = useContext(ThemeContext);
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#ff7a00" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#2563eb" },
    { name: "JavaScript", icon: <FaJs />, color: "#facc15" },
    { name: "React", icon: <FaReact />, color: "#38bdf8" },
    { name: "APIs", icon: <SettingsSuggestIcon />, color: "#fff" },
    // { name: "Next.js", icon: <RiNextjsFill />, color: theme === "light" ? "#000" : "#fff" },
  ];

  return (
    <div
      className="page-shell page-skills"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(135deg, #f8fafc, #e2e8f0 45%, #cbd5e1)"
            : "linear-gradient(135deg, #020617, #0f172a)",
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
            <span
              style={{
                display: window.innerWidth <= 600 ? "none" : "inline",
              }}
            >
              Home
            </span>
          </Button>
          <Button
            component={Link}
            to="/projects"
            className="nav-pill"
            startIcon={<FolderIcon />}
          >
            <span
              style={{
                display: window.innerWidth <= 600 ? "none" : "inline",
              }}
            >
              projects
            </span>
          </Button>
          <Button
            component={Link}
            to="/about"
            className="nav-pill"
            startIcon={<AccountCircleIcon />}
          >
            <span
              style={{
                display: window.innerWidth <= 600 ? "none" : "inline",
              }}
            >
              About
            </span>
          </Button>
          <Button
            component={Link}
            to="/skills"
            className="nav-pill"
            startIcon={<SettingsSuggestIcon />}
          >
            <span
              style={{
                display: window.innerWidth <= 600 ? "none" : "inline",
              }}
            >
              Skills
            </span>
          </Button>
        </div>

        <img
          src="/Project2.png"
          alt="logo"
          width="62"
          style={{ borderRadius: "50%" }}
        />
      </nav>

      <div className="about-grid">
        <div className="section-card glass-card">
          <div className="badge">مهاراتي</div>
          <h2 className="hero-title">شويه من المهارات اللي أستخدمها في شغلي</h2>
          <span className="hero-copy">
            أجمع بين التصميم والتطوير لتقديم واجهات مهنية ومريحة للمستخدم.
          </span>
          <div className="social-row">
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

        <div className="skill-grid">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{
                background:
                  theme === "light"
                    ? "rgb(255, 255, 255)"
                    : "rgba(255, 255, 255, 0.08)",
                borderRadius: "20px",
              }}
            >
              <div style={{ fontSize: 28, color: skill.color }}>
                {skill.icon}
              </div>
              <h3 style={{ marginTop: 8 }}>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
