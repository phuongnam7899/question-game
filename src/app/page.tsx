"use client";

import { AccountMenu, LanguageSelect, MainMenu } from "./(components)";
import { Logo } from "@/components/atoms";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative flex justify-between items-center">
        <LanguageSelect />
        <AccountMenu />
      </div>
      <div className="flex flex-col items-center text-sky-50 my-16">
        <Logo className="text-8xl" />
        <div className="text-center">
          Hãy để những cuộc gặp gỡ của bạn trở nên thú vị và nhiều ý nghĩa hơn
        </div>
      </div>
      <MainMenu />
    </main>
  );
}
