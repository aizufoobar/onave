"use client";

import Image from "next/image";
import Link from "next/link";
import {Searchbar} from "./atoms/searchbar";

export const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between bg-gray-50 p-2">
      {/* ロゴ */}
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icon.svg" width={35} height={35} alt="" />
        <div className="hidden text-2xl font-bold text-neutral-700 lg:inline-block">
          Onave.
        </div>
      </Link>

      {/* 検索フォーム */}
      <Searchbar />

      {/* ログインボタン */}
      <button className="rounded-full bg-neutral-700 px-4 py-2 text-sm text-white hover:bg-red-700">
        ログイン
      </button>
    </header>
  );
};
