import React from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title">{t("home")}</h1>
      </div>
      <div className="content">
        <p className="intro">{t("language")}:</p>
        <div className="languages">
          <span className="language">{t("english")}</span>
          <span className="separator">|</span>
          <span className="language">{t("hindi")}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
