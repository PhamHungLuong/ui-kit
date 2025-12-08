import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM
import styles from "./index.module.scss";

interface PopupProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Popup: React.FC<PopupProps> = ({ triggerElement, children, className }) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 }); // save popup position
  
  const triggerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  // Calculate position of popup
  useLayoutEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      
      setCoords({
        top: rect.bottom + window.scrollY + 5,
        left: rect.left + window.scrollX,
      });
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("scroll", () => setOpen(false), true);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", () => setOpen(false), true);
    };
  }, [open]);

  const popupContent = open ? (
    ReactDOM.createPortal(
      <div
        ref={popupRef}
        className={`${styles.popup} ${className || ""}`}
        style={{
          position: "absolute",
          top: coords.top,
          left: coords.left,
          zIndex: 99999,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>,
      document.body
    )
  ) : null;

  return (
    <>
      <div ref={triggerRef} onClick={togglePopup} className={styles.trigger}>
        {triggerElement}
      </div>
      {popupContent}
    </>
  );
};

export default Popup;