"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "./button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, description }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
      window.addEventListener("click", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling when modal is closed
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null; // If the modal is not open, render nothing

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full shadow-lg p-6 relative"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-4">
          {title && <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>}
          <Button
            variant="link"
            onClick={onClose}
            className="text-gray-500 dark:text-white hover:text-gray-700 dark:hover:text-gray-400"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Modal Description */}
        {description && (
          <p className="text-sm text-muted-foreground dark:text-gray-400 mb-4">{description}</p>
        )}

        {/* Modal Body (content passed as children) */}
        <div className="space-y-4">{children}</div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={onClose} className="text-gray-500 dark:text-white">
            Cancel
          </Button>
          <Button onClick={() => console.log("Action confirmed")} className="bg-black text-white">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};
