import type { Metadata } from "next";
import { FiMail, FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import { authors, primaryAuthor } from "@/data/authors";
import { getAllPosts, getActiveCategories, getTotalViews, getMaxReadingTime } from "@/data/posts";
import { formatNumber } from "@/lib/utils";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About VexiraHub",
  description: "Learn about VexiraHub — our mission, our team, and the story behind the platform.",
};

const accentColors = ["#6366F1", "#EC4899", "#10B981", "#F59E0B"];

export default function AboutPage() {
  const isSoloPublisher = authors.length === 1;

  // Dynamic Stats
  const totalArticles = getAllPosts().length;
  const topicsCovered = getActiveCategories().length;
  const totalViews = getTotalViews();
  const maxReadingTime = getMaxReadingTime();
  
  // Mock subscribers until backend is added
  const subscribersCount = "12K+";

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

        {/* Mission & Stats */}
        <section className={styles.section} aria-labelledby="mission-heading">
          <h2 id="mission-heading" className={styles.sectionTitle}>Our Mission & Impact</h2>
          <p className={styles.sectionText}>
            We bridge the gap between complex ideas and curious readers.
            Whether you&apos;re a developer learning new skills, a founder exploring markets,
            or a student navigating your career — VexiraHub is your trusted companion.
          </p>
          <div className={styles.statsGrid}>
            {[
              { value: subscribersCount, label: "Subscribers" },
              { value: totalArticles.toString(), label: "Articles" },
              { value: topicsCovered.toString(), label: "Topics covered" },
              { value: `${formatNumber(totalViews)}`, label: "Views" },
              { value: `${maxReadingTime} min`, label: "Longest Read" },
            ].map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Team / Creator Section */}
        {isSoloPublisher ? (
          <section className={styles.section} aria-labelledby="creator-heading">
            <h2 id="creator-heading" className={styles.sectionTitle}>About the Creator</h2>
            <div className={styles.teamCard} style={{ maxWidth: 600 }}>
              <div
                className={styles.teamAvatar}
                style={{ background: accentColors[0], width: 64, height: 64, fontSize: "1.5rem" }}
                aria-hidden="true"
              >
                {primaryAuthor.name.charAt(0)}
              </div>
              <div className={styles.teamInfo}>
                <span className={styles.teamName}>{primaryAuthor.name}</span>
                <span className={styles.teamRole}>{primaryAuthor.role}</span>
                <p style={{ marginTop: "12px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {primaryAuthor.bio}
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className={styles.section} aria-labelledby="team-heading">
            <h2 id="team-heading" className={styles.sectionTitle}>Meet the Team</h2>
            <div className={styles.teamGrid}>
              {authors.map((member, i) => (
                <div key={member.id} className={styles.teamCard}>
                  <div
                    className={styles.teamAvatar}
                    style={{ background: accentColors[i % accentColors.length] }}
                    aria-hidden="true"
                  >
                    {member.name.charAt(0)}
                  </div>
                  <div className={styles.teamInfo}>
                    <span className={styles.teamName}>{member.name}</span>
                    <span className={styles.teamRole}>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Socials */}
        <section className={styles.section} aria-labelledby="connect-heading">
          <h2 id="connect-heading" className={styles.sectionTitle}>Stay Connected</h2>
          <div className={styles.socialRow}>
            {[
              { icon: FiTwitter,  label: "Twitter",  href: primaryAuthor.social?.twitter || "https://twitter.com/vexirahub"  },
              { icon: FiLinkedin, label: "LinkedIn",  href: primaryAuthor.social?.linkedin || "https://linkedin.com/in/vexirahub" },
              { icon: FiGithub,   label: "GitHub",    href: primaryAuthor.social?.github || "https://github.com/vexirahub"   },
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
