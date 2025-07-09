"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X, Package, Truck, FileText, Users, Download, ClipboardList, RefreshCw, Archive, LogOut } from "lucide-react";
import InventoryItemsSection from '@/components/inventory/InventoryItemsSection';
import SuppliersSection from '@/components/inventory/SuppliersSection';
import SupplierInvoicesSection from '@/components/inventory/SupplierInvoicesSection';
import OutgoingStockSection from '@/components/inventory/OutgoingStockSection';
import BranchTransfersSection from '@/components/inventory/BranchTransfersSection';
import StockMovementReportsSection from '@/components/inventory/StockMovementReportsSection';
import StockStatementSection from '@/components/inventory/StockStatementSection';
import StockTakingSection from '@/components/inventory/StockTakingSection';

const menuItems = [
  { icon: Package, label: "Inventory Items" },
  { icon: Users, label: "Suppliers" },
  { icon: FileText, label: "Supplier Invoices" },
  { icon: Truck, label: "Outgoing Stock" },
  { icon: Truck, label: "Branch Transfers" },
  { icon: Download, label: "Stock Movement Reports" },
  { icon: ClipboardList, label: "Stock Statement" },
  { icon: RefreshCw, label: "Stock Taking" },
];

export default function InventoryDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Inventory Items");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Archive className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Inventory</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-6">
          <div className="px-4 space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={activeSection === item.label ? "default" : "ghost"}
                className={`w-full justify-start ${activeSection === item.label ? "bg-blue-500 text-white" : "text-gray-700"}`}
                onClick={() => {
                  setActiveSection(item.label);
                  setSidebarOpen(false);
                }}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === "Inventory Items" && <InventoryItemsSection />}
          {activeSection === "Suppliers" && <SuppliersSection />}
          {activeSection === "Supplier Invoices" && <SupplierInvoicesSection />}
          {activeSection === "Outgoing Stock" && <OutgoingStockSection />}
          {activeSection === "Branch Transfers" && <BranchTransfersSection />}
          {activeSection === "Stock Movement Reports" && <StockMovementReportsSection />}
          {activeSection === "Stock Statement" && <StockStatementSection />}
          {activeSection === "Stock Taking" && <StockTakingSection />}
        </main>
      </div>
    </div>
  );
} 