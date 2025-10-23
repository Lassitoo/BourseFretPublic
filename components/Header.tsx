"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-[#00A6B8]">
                BFP
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/expediteurs"
              className="text-sm font-medium text-gray-700 hover:text-[#00A6B8] transition-colors"
            >
              Expéditeurs
            </Link>
            <Link
              href="/transporters"
              className="text-sm font-medium text-gray-700 hover:text-[#00A6B8] transition-colors"
            >
              Transporteurs
            </Link>
            <Link
              href="/commissionnaires"
              className="text-sm font-medium text-gray-700 hover:text-[#00A6B8] transition-colors"
            >
              Commissionnaires
            </Link>
            <div className="relative group">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-[#00A6B8] transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl">🇫🇷</span>
              <span className="text-sm font-medium text-gray-700">FR</span>
            </div>
            <Button className="bg-[#00A6B8] hover:bg-[#008a9a]">
              Commencer
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/expediteurs"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Expéditeurs
            </Link>
            <Link
              href="/transporters"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Transporteurs
            </Link>
            <Link
              href="/commissionnaires"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Commissionnaires
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
            >
              Services
            </Link>
            <div className="pt-4">
              <Button className="w-full bg-[#00A6B8] hover:bg-[#008a9a]">
                Commencer
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
