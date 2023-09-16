import React from 'react'
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
  return (
    <div>
    <h1>{t("home")}</h1>
    <p>{t("language")}: {t("english")}, {t("hindi")}, {t("malayalam")}</p>
    </div>
  )
}

export default Home