
// import { Sidebar } from "@/components/layout/sidebar";
import { Sidebar } from "@/components/layout/sidebar";
import React from "react";
import { Toaster } from "sonner";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-nova-dark">
      {/* Sidebar */}
      <Sidebar role="user" />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardLayout;
