import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
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

export default function MyProjects() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [projects] = useState([
    {
      name: "الكابتن",
      description:
        "لعبه لخبراء كرة القدم عبارة عن توصيل اللعيبه بنادي او منتخب او انجاز عمله",
      image: "/capten.png",
      link: "https://el-capten.netlify.app/",
    },
    {
      name: "بيع إلكتروني",
      description:
        "متجر بسيط يوضح تجربة إضافة المنتجات إلى السلة وإتمام الطلب بسهولة.",
      image: "/eCommers.png",
      link: "https://fake-e-commers.netlify.app/",
    },
    {
      name: "ريجاسير",
      description:
        "لعبه لخبراء السينما عبارة عن توصيل ممثل لممثل تاني بفيلم او ممثل مساعد",
      image: "/rejaser.png",
      link: "https://rejaser.vercel.app/",
    },
        {
      name: "برنامج كاشير",
      description:
      "برنامج كاشير  للمطاعم والمقاهي لتسهيل عملية البيع وإدارة المخزون.",
      image: "/cashier.png",
      link: "https://cashier-hewk-nine.vercel.app/",
    },
        {
      name: "الطقس",
      description:
        "استخدام API لعرض حالة الطقس الحالية لموقع معين.",
      image: "/weather.png",
      link: "https://wether-api-zeta.vercel.app/",
    },

  ]);

  return (
    <div
      className="page-shell page-projects"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(135deg, #f8fafc, #e2e8f0 45%, #cbd5e1)"
            : "linear-gradient(135deg, #111827, #1f2937)",
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

      <div className="section-grid" style={{ marginTop: 20 }}>
        <div className="section-card glass-card">
          <div className="badge">أعمالي</div>
          <h2 className="hero-title">شويه من المشاريع اللي اشتغلت عليها</h2>
          <span className="hero-copy">
            كل مشروع يضيف تجربة جديدة ويُظهر نهجاً مختلفاً في التفكير.
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

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name} className="project-card glass-card">
              <img src={project.image} alt={project.name} />
              <h3>{project.name}</h3>
              <span className="hero-copy" style={{ marginBottom: 0 }}>
                {project.description}
              </span>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button dir="ltr" className="secondary-btn" endIcon={<ArrowForward />}>
                  دخول المشروع
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
