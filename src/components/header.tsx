"use client";

import {ArrowLeftIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import SearchBar from "./parts/searchbar";
import SearchButton from "./parts/searchbutton";

export default function Header() {
  const [isCovered, setIsCovered] = useState(false);
  console.log(isCovered);

  return (
    <>
      <header className="sticky top-0 flex items-center justify-between bg-gray-50 p-2">
        {/* ロゴ */}
        <Link className="flex items-center gap-1" href="/">
          <Image src="/icon.svg" width={40} height={40} alt="" />
          <div className="hidden text-2xl font-bold text-neutral-700 md:inline-block">
            Onave.
          </div>
        </Link>

        {/* 検索フォームと検索ボタン */}
        <SearchBar
          className="hidden md:inline-block"
          placeholeder="Seach Onave"
        />
        <SearchButton
          className="ml-auto mr-[5%] md:hidden"
          onClick={() => {
            setIsCovered(true);
          }}
        />

        {/* 検索ボタンを押した後のヘッダー */}
        <header
          className={`absolute inset-0 flex items-center justify-center bg-gray-50 ${isCovered ? "" : "hidden"}`}
        >
          <button
            className="absolute left-2"
            onClick={() => {
              setIsCovered(false);
            }}
          >
            <ArrowLeftIcon className="size-5" />
          </button>
          <SearchBar className="max-w-[60%]" placeholeder="Search Onave" />
        </header>

        {/* ログインボタン */}
        <Link href="/login">
          <button className="rounded-full bg-neutral-700 px-4 py-2 text-sm text-white hover:bg-red-700 active:bg-red-700">
            ログイン
          </button>
        </Link>
      </header>
    </>
  );
}
