import React, { useContext } from "react";
import { Button } from "@mui/material";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
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

export default function AboutMe() {
  const { theme, setTheme } = useContext(ThemeContext);
  const journey = [
    {
      icon: <FaHtml5 />,
      title: "HTML",
      text: "بداية رحلتي في بناء الويب",
      color: "#ff7a00",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS",
      text: "تعلمت التصميم والتنسيق",
      color: "#2563eb",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      text: "أضفت التفاعل للحياة",
      color: "#facc15",
    },
    {
      icon: <FaReact />,
      title: "React",
      text: "بنيت تطبيقات حديثة وسريعة",
      color: "#38bdf8",
    },
  ];

  return (
    <div
      className="page-shell page-about"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(135deg, #f8fafc, #e2e8f0 45%, #cbd5e1)"
            : "linear-gradient(135deg, #111418, #1f2937)",
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

      <div className="about-grid" style={{ color: "#0f172a" }}>
        <div
          className="section-card glass-card"
          style={{ background: theme === "light" ? " #fff" : " #111827" }}
        >
          <div className="badge" style={{ color: "#7c3aed" }}>
            من أنا؟
          </div>
          <h2
            className="hero-title"
            style={{ color: theme === "light" ? "#111827" : "#ffffff" }}
          >
            شخص عنده افكار حابب يشوفها.. قرر يعملها هو بنفسه
          </h2>
          <span
            className="hero-copy"
            style={{ color: theme === "light" ? "#475569" : "#fff" }}
          >
            أركز على البساطة، الوضوح، واللمسة البصرية التي تجعل المشروع يبرز.
          </span>

          <div className="social-row">
            <Button
              className="social-btn"
              href="https://www.instagram.com/youssif_goo_/"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme === "light" ? "#111827" : "#ffffff",
                background: "rgba(15,23,42,0.08)",
              }}
            >
              <InstagramIcon />
            </Button>
            <Button
              className="social-btn"
              href="https://github.com/youssewael21-collab"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme === "light" ? "#111827" : "#fff",
                background: "rgba(15,23,42,0.08)",
              }}
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

        <div
          className="visual-card glass-card"
          style={{
            background: theme === "light" ? " #fff" : " #111827",
          }}
        >
          {journey.map((step) => (
            <div
              key={step.title}
              className="timeline-card"
              style={{ borderColor: "rgba(15,23,42,0.08)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 24, color: step.color }}>
                  {step.icon}
                </div>
                <div>
                  <h3
                    style={{ color: theme === "dark" ? "#e2e8f0" : "#111827" }}
                  >
                    {step.title}
                  </h3>
                  <span
                    style={{
                      color: theme === "dark" ? "#9a9da1" : "#475569",
                      marginTop: 4,
                    }}
                  >
                    {step.text}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
