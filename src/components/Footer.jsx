import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 flex items-center justify-center">
      {/* Centered text */}
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Diya Ghosh Portfolio. All rights reserved.
      </p>

      {/* Arrow button on right side */}
      <a
        href="#hero"
        className="absolute right-4 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
