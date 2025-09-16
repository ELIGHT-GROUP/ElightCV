"use client";

import * as React from "react";
import { motion, type Transition } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type GradientTextProps = React.ComponentProps<"span"> & {
  text: string;
  gradient?: string;
  neon?: boolean;
  transition?: Transition;
};

function GradientText({
  text,
  className,
  gradient,
  neon = false,
  transition = { duration: 3, repeat: Infinity, ease: "linear" },
  ...props
}: GradientTextProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting for client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Define gradients for different themes
  const defaultGradient = React.useMemo(() => {
    if (gradient) return gradient;

    // Use light mode gradient as default during SSR and until theme is determined
    if (!mounted || theme === "light" || theme === "system" || !theme) {
      // Matte black gradient for light mode
      return "linear-gradient(90deg, #374151 0%, #1f2937 20%, #111827 50%, #1f2937 80%, #374151 100%)";
    } else if (theme === "dark") {
      // Silver gradient for dark mode
      return "linear-gradient(90deg, #e5e7eb 0%, #d1d5db 20%, #9ca3af 50%, #d1d5db 80%, #e5e7eb 100%)";
    } else {
      // Fallback to light mode
      return "linear-gradient(90deg, #374151 0%, #1f2937 20%, #111827 50%, #1f2937 80%, #374151 100%)";
    }
  }, [theme, gradient, mounted]);

  const baseStyle: React.CSSProperties = {
    backgroundImage: defaultGradient,
  };

  return (
    <span
      data-slot="gradient-text"
      className={cn("relative inline-block", className)}
      {...props}
    >
      <motion.span
        className="m-0 text-transparent bg-clip-text bg-[length:200%_100%]"
        style={baseStyle}
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        transition={transition}
      >
        {text}
      </motion.span>

      {neon && (
        <motion.span
          className="m-0 absolute top-0 left-0 text-transparent bg-clip-text blur-[8px] mix-blend-plus-lighter bg-[length:200%_100%]"
          style={baseStyle}
          animate={{ backgroundPositionX: ["0%", "200%"] }}
          transition={transition}
        >
          {text}
        </motion.span>
      )}
    </span>
  );
}

export { GradientText, type GradientTextProps };
