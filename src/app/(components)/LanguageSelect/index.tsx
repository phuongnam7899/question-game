"use client";

import { useLocalStorage } from "@uidotdev/usehooks";

interface LanguageItemProps {
  language: string;
  active: boolean;
  position: "first" | "middle" | "last";
  changeLanguage: (language: string) => void;
}

const LanguageItem = ({
  language,
  active,
  position,
  changeLanguage,
}: LanguageItemProps) => {
  const activeStyle = active
    ? "text-sky-900 bg-sky-50"
    : "text-sky-50 bg-sky-900";

  let borderRadiusStyle = "";
  if (position === "first") {
    borderRadiusStyle = "rounded-l-full";
  } else if (position === "last") {
    borderRadiusStyle = "rounded-r-full";
  }

  return (
    <div
      onClick={() => changeLanguage(language)}
      className={`flex-1 text-center py-1 border border-sky-50 transition-all ${activeStyle} ${borderRadiusStyle}`}
    >
      {language}
    </div>
  );
};

export const LanguageSelect = () => {
  const [activeLanguage, setActiveLanguage] = useLocalStorage("language", "VI");
  const changeLanguage = (language: string) => {
    setActiveLanguage(language);
  };
  return (
    <div className="flex w-20 h-8">
      <LanguageItem
        language="EN"
        position="first"
        active={activeLanguage === "EN"}
        changeLanguage={changeLanguage}
      />
      <LanguageItem
        language="VI"
        position="last"
        active={activeLanguage === "VI"}
        changeLanguage={changeLanguage}
      />
    </div>
  );
};
