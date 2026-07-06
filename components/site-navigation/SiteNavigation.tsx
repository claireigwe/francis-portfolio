"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./SiteNavigation.module.css";
import MobileNavigation from "./MobileNavigation";

export default function SiteNavigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleClose = (restoreFocus: boolean = false) => {
    setIsMobileMenuOpen(false);
    if (restoreFocus && menuButtonRef.current) {
      // Need a tiny delay for React to update focusability if the menu was covering it,
      // but typically focusing right away works if it's not display: none.
      // We will just focus immediately.
      menuButtonRef.current.focus();
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.navContainer}`}>
          <Link 
            href="/" 
            className={`${styles.homeLink} ${isActive('/') ? styles.active : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            Francis Igwe
          </Link>

          <nav aria-label="Main navigation" className={styles.desktopNav}>
            <Link 
              href="/work" 
              className={`${styles.navLink} ${isActive('/work') ? styles.active : ''}`}
              aria-current={isActive('/work') ? 'page' : undefined}
            >
              Work
            </Link>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </nav>

          <button 
            ref={menuButtonRef}
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={handleClose} 
        isActive={isActive}
      />
    </>
  );
}
