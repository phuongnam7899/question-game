import { AccountMenu, LanguageSelect } from "./(components)";
import { Logo } from "@/components/atoms";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MenuItemProps {
  link: string;
  label: string;
}

const MenuItem = ({ link, label }: MenuItemProps) => {
  return (
    <Link href={link}>
      <Button className="w-full bg-sky-600 text-sky-50 font-bold">
        {label}
      </Button>
    </Link>
  );
};

export default function Home() {
  const menuItems = [
    { link: "/choose-game", label: "Host Game" },
    { link: "/join-game", label: "Tham Gia Game" },
    { link: "/join-game", label: "Bộ Bài" },
    { link: "/join-game", label: "Cài Đặt" },
    { link: "/join-game", label: "Cửa Hàng" },
  ];
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
      <div className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem key={index} link={item.link} label={item.label} />
        ))}
      </div>
    </main>
  );
}
