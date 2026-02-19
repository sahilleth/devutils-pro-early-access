const Footer = () => (
  <footer className="py-12 px-4 border-t border-border">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono text-sm text-muted-foreground">
        devutils<span className="text-primary">.local</span>
      </span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} DevUtilsLocal. Privacy-first developer tools.
      </p>
    </div>
  </footer>
);

export default Footer;
