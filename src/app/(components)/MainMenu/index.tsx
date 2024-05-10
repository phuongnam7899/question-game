import { Button } from "@/components/ui";
import Link from "next/link";

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

export const MainMenu = () => {
  const menuItems = [
    { link: "/choose-game", label: "Host Game" },
    { link: "/join-game", label: "Tham Gia Game" },
    { link: "/join-game", label: "Bộ Bài" },
    { link: "/join-game", label: "Cài Đặt" },
    { link: "/join-game", label: "Cửa Hàng" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {menuItems.map((item, index) => (
        <MenuItem key={index} link={item.link} label={item.label} />
      ))}
    </div>
  );
};
