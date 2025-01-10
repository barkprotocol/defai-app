export function Footer() {
  return (
    <footer className="py-6 md:py-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BARK Protocol. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="/terms"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Terms
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full" />
          </a>
          <a
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Privacy
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full" />
          </a>
          <a
            href="/docs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Documentation
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full" />
          </a>
        </div>
      </div>
    </footer>
  );
}