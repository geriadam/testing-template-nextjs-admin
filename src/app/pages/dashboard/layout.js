import Layout from "../../containers/Layout";
import { SidebarProvider } from '../../context/SidebarContext'
export default function DashboardLayout({
  children,
}) {
  return <SidebarProvider><Layout>{children}</Layout></SidebarProvider>
}