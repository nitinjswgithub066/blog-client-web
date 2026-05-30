import type { Metadata } from "next";
import { FiMail, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About VexiraHub",
  description: "Learn about VexiraHub — our mission, our team, and the story behind the platform.",
};

const teamMembers = [
  { name: "Alex Morgan",   role: "Editor-in-Chief",      initials: "AM" },
  { name: "Priya Sharma",  role: "Technology Lead",       initials: "PS" },
  { name: "Jordan Lee",    role: "AI & Data Writer",      initials: "JL" },
  { name: "Sam Rivera",    role: "Finance & Startups",    initials: "SR" },
];

const accentColors = ["#6366F1", "#EC4899", "#10B981", "#F59E0B"];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroLabel}>Our Story</div>
          <h1 className={styles.heroTitle}>
            Built for curious, <em>ambitious</em> minds.
          </h1>
          <p className={styles.heroDesc}>
            VexiraHub is a modern content platform where Technology, AI, Startups, Finance,
            and Culture converge. We believe great writing can change how you think —
            and we are here to deliver it, daily.
          </p>
        </header>

        {/* Mission */}
        <section className={styles.section} aria-labelledby="mission-heading">
          <h2 id="mission-heading" className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.sectionText}>
            We bridge the gap between complex ideas and curious readers.
            Whether you&apos;re a developer learning new skills, a founder exploring markets,
            or a student navigating your career — VexiraHub is your trusted companion.
          </p>
          <div className={styles.statsGrid}>
            {[
              { value: "12K+",  label: "Subscribers" },
              { value: "200+",  label: "Articles" },
              { value: "14",    label: "Topics covered" },
              { value: "Daily", label: "Publishing cadence" },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className={styles.section} aria-labelledby="team-heading">
          <h2 id="team-heading" className={styles.sectionTitle}>Meet the Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, i) => (
              <div key={member.name} className={styles.teamCard}>
                <div
                  className={styles.teamAvatar}
                  style={{ background: accentColors[i % accentColors.length] }}
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <div className={styles.teamInfo}>
                  <span className={styles.teamName}>{member.name}</span>
                  <span className={styles.teamRole}>{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Socials */}
        <section className={styles.section} aria-labelledby="connect-heading">
          <h2 id="connect-heading" className={styles.sectionTitle}>Stay Connected</h2>
          <div className={styles.socialRow}>
            {[
              { icon: FiTwitter,  label: "Twitter",  href: "https://twitter.com/vexirahub"  },
              { icon: FiLinkedin, label: "LinkedIn",  href: "https://linkedin.com/vexirahub" },
              { icon: FiGithub,   label: "GitHub",    href: "https://github.com/vexirahub"   },
              { icon: FiMail,     label: "Email",     href: "mailto:hello@vexirahub.com"     },
            ].map(({ icon: Icon, label, href }) => (
              <a key={href} href={href} className={styles.socialLink}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon aria-hidden="true" />
                {label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
