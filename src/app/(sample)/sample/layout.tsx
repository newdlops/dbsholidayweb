
import Layout from "../../../layout/layout";
import { LayoutProvider } from "../../../layout/context/layoutcontext";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return <LayoutProvider><Layout>{children}</Layout></LayoutProvider>;
}
