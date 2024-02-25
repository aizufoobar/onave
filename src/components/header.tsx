"use client";

import Link from "next/link";
import {useState} from "react";
import BackButton from "./parts/backbutton";
import LoginButton from "./parts/loginbutton";
import OnaveIcon from "./parts/onaveicon";
import SearchBar from "./parts/searchbar";
import SearchButton from "./parts/searchbutton";

export default function Header() {
  const [isCovered, setIsCovered] = useState(false);

  return (
    <>
      <header className="sticky top-0 flex items-center justify-between bg-gray-50 p-2 text-neutral-700">
        {/* ロゴ */}
        <Link className="flex items-center gap-1" href="/">
          <OnaveIcon />
          <h2 className="hidden text-2xl font-bold md:inline-block">Onave.</h2>
        </Link>

        {/* 検索フォーム(md以上) or 検索ボタン(md未満) */}
        <SearchBar className="hidden md:inline-block" />
        <SearchButton
          className="ml-auto mr-4 md:hidden"
          onClick={() => {
            setIsCovered(true);
          }}
        />

        {/* ログインボタン */}
        <LoginButton />

        {/* 検索ボタンで現れる検索ヘッダー */}
        <header
          className={`absolute inset-0 flex items-center justify-center bg-inherit p-2 ${isCovered ? "" : "hidden"}`}
        >
          <BackButton
            className="absolute left-2 size-5"
            onClick={() => {
              setIsCovered(false);
            }}
          />
          <SearchBar className="max-w-[70%]" />
        </header>
      </header>
    </>
  );
}
