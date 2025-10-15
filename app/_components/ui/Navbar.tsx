"use client";
import { cn } from "@/app/_lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/app/_components/ThemeToggle";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <div className="fixed top-2 sm:top-10 inset-x-0 mx-auto w-max z-[5000] mb-4 sm:mb-0">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex items-center gap-2 sm:gap-4 px-4 sm:px-8 py-2 sm:py-4 rounded-xl border shadow-md backdrop-blur-md transition-colors duration-300",
            "bg-white/80 border-neutral-300 text-neutral-800 dark:bg-dark-200/80 dark:border-dark-700 dark:text-neutral-100",
            className
          )}
        >
          {navItems.map((navItem, idx) => {
            const isActive = pathname === navItem.link;

            return (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 py-1 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
                  "whitespace-nowrap",
                  isActive
                    ? "text-blue-600 dark:text-blue-400 underline underline-offset-4 decoration-blue-500"
                    : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-white"
                )}
              >
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block">{navItem.name}</span>
              </Link>
            );
          })}

          {/* Theme toggle unutar navigacije */}
          <ThemeToggle />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};