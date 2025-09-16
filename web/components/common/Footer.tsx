import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

interface FooterProps {
  className?: string;
}

export default function FooterElement({ className }: FooterProps) {
  return (
    <footer
      className={cn("border-t bg-background w-full px-4 py-6", className)}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-sm text-muted-foreground">
          © 2025 EliteCV. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </a>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
