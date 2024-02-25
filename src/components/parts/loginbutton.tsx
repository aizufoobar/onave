import Link from "next/link";

interface Props {
  className?: string;
}

export default function LoginButton(props: Props) {
  return (
    <div className={props.className}>
      <Link href="/login">
        <button className="rounded-full bg-neutral-700 px-4 py-2 text-sm text-white hover:bg-red-700 active:bg-red-700">
          ログイン
        </button>
      </Link>
    </div>
  );
}
