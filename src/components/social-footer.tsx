import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

export function SocialFooter() {
  return (
    <footer className="w-full max-w-md mx-auto">
      <div className="flex justify-center gap-4 my-4">
        <Facebook className="size-6 text-[#1877F2]" />
        <Twitter className="size-6 text-[#1DA1F2]" />
        <Youtube className="size-6 text-[#FF0000]" />
        <Linkedin className="size-6 text-[#0A66C2]" />
      </div>
      <p className="text-center text-xs text-muted-foreground pb-4">
        © {new Date().getFullYear()} AutoCheck24. Visas tiesības aizsargātas.
      </p>
    </footer>
  );
}
