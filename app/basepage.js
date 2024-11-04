import "./globals.css";
import Link from "next/link";
import Image from "next/image";


export default function BasePage({ children }) {
  return (
    <div
      id="border"
      className="flex flex-row h-full w-full justify-center items-center"
    >
      <Link
        id="border-s"
        className="absolute top-4 left-4 w-8 h-8 "
        href="http://localhost:3000/"
      >
      </Link>
      {children}
    </div>
  );
}