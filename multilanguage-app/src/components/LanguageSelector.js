import React from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-selector">
      <div className="language-text">
        <h2>Choose Your Language</h2>
        <p>Select your preferred language:</p>
      </div>
      <div className="language-buttons">
        <button
          className="language-button"
          onClick={() => changeLanguage("en")}
        >
          English
        </button>
        <button
          className="language-button"
          onClick={() => changeLanguage("hi")}
        >
          Hindi
        </button>
      </div>
    </div>
  );
}

export default LanguageSelector;
