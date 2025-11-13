import React from "react";
import GridShape from "../../components/common/GridShape";
import { Link, useLocation } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";
import { HandIcon } from "../../icons";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div className="items-center hidden w-full h-full lg:w-1/2 bg-[#001B31] dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            {/* <!-- ===== Common Grid Shape Start ===== --> */}
            <GridShape />
            <div className="flex flex-col items-center max-w-xs">
              <Link to="/" className="block mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-[49px] h-[49px] bg-brand-500 rounded-lg">
                    <HandIcon className="w-[24px] h-[26px]" />
                  </div>
                  <h3 className="text-white text-[28px] font-semibold">
                    MCA Platform
                  </h3>
                </div>
              </Link>
              <p className="text-center text-gray-400 dark:text-white/60">
                {location.pathname === "/signin"
                  ? "Sign in to securely access the Lead Dashboard"
                  : "Sign up to create your account and manage Lead Dashboard securely."}
              </p>
            </div>
          </div>
        </div>
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
