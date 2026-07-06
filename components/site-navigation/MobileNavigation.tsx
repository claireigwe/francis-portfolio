import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./SiteNavigation.module.css";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: (restoreFocus?: boolean) => void;
  isActive: (path: string) => boolean;
}

export default function MobileNavigation({ isOpen, onClose, isActive }: MobileNavigationProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Focus management: when menu opens, focus the close button
  useEffect(() => {
    if (isOpen) {
      const closeBtn = document.getElementById("mobile-menu-close");
      closeBtn?.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose(true); // Restore focus to menu button
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select'
        );
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose(false); // Do not restore focus on navigation
  };

  const handleCloseClick = () => {
    onClose(true); // Restore focus when explicitly closing
  };

  return (
    <div 
      id="mobile-menu"
      className={styles.mobileMenu} 
      data-open={isOpen}
      aria-hidden={!isOpen}
      ref={menuRef}
    >
      <div className="container">
        <div className={styles.mobileMenuHeader}>
          <button 
            id="mobile-menu-close"
            className={`${styles.mobileToggle} ${styles.mobileMenuClose}`}
            onClick={handleCloseClick}
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
          >
            Close
          </button>
        </div>

        <nav aria-label="Mobile navigation" className={styles.mobileNavContainer}>
          <ul className={styles.mobileNavList}>
            <li>
              <Link 
                href="/" 
                className={`${styles.mobileNavLink} ${isActive('/') ? styles.mobileNavLinkActive : ''}`}
                aria-current={isActive('/') ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={handleLinkClick}
              >
                Francis Igwe
              </Link>
            </li>
            <li>
              <Link 
                href="/work" 
                className={`${styles.mobileNavLink} ${isActive('/work') ? styles.mobileNavLinkActive : ''}`}
                aria-current={isActive('/work') ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={handleLinkClick}
              >
                Work
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`${styles.mobileNavLink} ${isActive('/about') ? styles.mobileNavLinkActive : ''}`}
                aria-current={isActive('/about') ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`${styles.mobileNavLink} ${isActive('/contact') ? styles.mobileNavLinkActive : ''}`}
                aria-current={isActive('/contact') ? 'page' : undefined}
                tabIndex={isOpen ? 0 : -1}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
