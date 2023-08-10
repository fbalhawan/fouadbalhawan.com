import Link from 'next/link';
import '../../styles/global.css';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-wrapper">
      {children}
    </div>
  );
}
