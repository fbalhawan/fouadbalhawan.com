import Link from "next/link";
import "../../styles/global.css";

export const metadata = {
  title: "Fouad Balhawan - Portfolio",
  description:
    "Welcome to my portfolio website, I'm a full-stack engineer, contact me if you need any help!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="main-wrapper">{children}</div>;
}
