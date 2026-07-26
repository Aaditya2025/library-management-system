import { BookMarked, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/shared/social-icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-white">
                <BookMarked className="size-5" />
              </span>
              <span className="font-display text-lg font-semibold">{site.name}</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-white/50">
              Founded {site.foundedDate} by {site.ownerName}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 transition-colors hover:text-secondary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
                {site.fullAddress}
              </li>
              <li className="flex gap-2.5">
                <Phone className="size-4 shrink-0 text-secondary" />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-secondary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="size-4 shrink-0 text-secondary" />
                <a href={`mailto:${site.email}`} className="hover:text-secondary">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/90">
              Follow
            </h3>
            <div className="mt-4 flex gap-3">
              <a
                href={site.social.instagram}
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={site.social.facebook}
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.social.youtube}
                aria-label="YouTube"
                className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-secondary"
              >
                <YoutubeIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}, {site.city}. All rights reserved.</p>
          <p>Owned & run by {site.ownerName}</p>
        </div>
      </div>
    </footer>
  );
}
