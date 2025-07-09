"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin, Layers, Package, FileText, TrendingDown, Archive, LogOut } from "lucide-react";
import AssetLocationsSection from '@/components/assets/AssetLocationsSection';
import AssetCategoriesSection from '@/components/assets/AssetCategoriesSection';
import AssetsSection from '@/components/assets/AssetsSection';
import AssetMovementReportsSection from '@/components/assets/AssetMovementReportsSection';
import AssetDepreciationSection from '@/components/assets/AssetDepreciationSection';

const menuItems = [
  { icon: MapPin, label: "Asset Locations" },
  { icon: Layers, label: "Asset Categories" },
  { icon: Package, label: "Assets Register" },
  { icon: FileText, label: "Asset Movement Reports" },
  { icon: TrendingDown, label: "Asset Depreciation" },
];

export default function AssetRegisterDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Asset Locations");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 lg:block`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Archive className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Assets</span>
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
              <h1 className="text-2xl font-bold text-gray-900">Asset Register</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.location.href = '/'}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {activeSection === "Asset Locations" && <AssetLocationsSection />}
          {activeSection === "Asset Categories" && <AssetCategoriesSection />}
          {activeSection === "Assets Register" && <AssetsSection />}
          {activeSection === "Asset Movement Reports" && <AssetMovementReportsSection />}
          {activeSection === "Asset Depreciation" && <AssetDepreciationSection />}
        </main>
      </div>
    </div>
  );
} 