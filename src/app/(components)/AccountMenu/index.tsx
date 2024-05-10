"use client";

import { LockKeyhole, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const AccountMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const heightClass = showMenu ? "h-28" : "h-10";
  return (
    <div
      className={`absolute right-0 top-0 px-4 py-2 bg-sky-700 text-sky-50 rounded-3xl ${heightClass} transition-all ease-in-out`}
    >
      <div className="flex gap-2" onClick={toggleMenu}>
        <UserRound />
        <div>Nguyen Nam</div>
      </div>
      {showMenu && (
        <>
          <div className="border h-px my-2 border-sky-600"></div>
          <div className="flex flex-col gap-2">
            <Link
              href={"/change-password"}
              className={`relative flex items-center gap-2 text-sm`}
            >
              <LockKeyhole size={20} />
              <div>Đổi mật khẩu</div>
            </Link>
            <Link
              href={"/start-page"}
              className={`relative flex items-center gap-2 text-red-200 text-sm`}
            >
              <LogOut size={20} />
              <div>Đăng xuất</div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
