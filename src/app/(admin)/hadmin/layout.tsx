
import Layout from "./_layout/layout";
import {AdminLayoutProvider} from "./_layout/context/adminLayoutContext";


interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <AdminLayoutProvider><Layout>{children}</Layout></AdminLayoutProvider>;
}
