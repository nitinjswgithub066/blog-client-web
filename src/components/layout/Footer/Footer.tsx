import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiRss, FiHeart } from "react-icons/fi";
import { footerNav } from "@/data/navigation";
import styles from "./Footer.module.css";

const socialLinks = [
  { href: "https://github.com/vexirahub",   icon: FiGithub,   label: "GitHub"   },
  { href: "https://twitter.com/vexirahub",  icon: FiTwitter,  label: "Twitter"  },
  { href: "https://linkedin.com/vexirahub", icon: FiLinkedin, label: "LinkedIn" },
  { href: "/feed.xml",                       icon: FiRss,      label: "RSS Feed" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Top: brand + nav columns */}
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink}>
            <span className={styles.brandDot} aria-hidden="true" />
            <span className={styles.brandName}>VexiraHub</span>
          </Link>
          <p className={styles.brandTagline}>
            Your premium source for Technology, AI, Startups, and inspiring stories — curated for curious minds.
          </p>
          {/* Socials */}
          <div className={styles.socials}>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={href}
                href={href}
                className={styles.socialLink}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div className={styles.navColumns}>
          {Object.entries(footerNav).map(([key, group]) => (
            <div key={key} className={styles.navGroup}>
              <h3 className={styles.navGroupTitle}>{group.title}</h3>
              <ul className={styles.navList}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.navLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Bottom: copyright */}
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {year} VexiraHub. All rights reserved. Built with{" "}
          <FiHeart className={styles.heartIcon} aria-label="love" /> by the VexiraHub team.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy-policy" className={styles.bottomLink}>Privacy</Link>
          <Link href="/terms"          className={styles.bottomLink}>Terms</Link>
          <Link href="/cookies-policy" className={styles.bottomLink}>Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
