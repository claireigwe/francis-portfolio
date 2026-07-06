import styles from "./Contact.module.css";

export const metadata = {
  title: "Contact — Francis Igwe",
  description: "Have something that needs saying? Start a conversation with Francis Igwe, Copywriter & Copyeditor.",
};

export default function ContactPage() {
  return (
    <main className={`${styles.contactPage} container`}>
      <header className={styles.contactHeader}>
        <div className={styles.contactEyebrow}>Contact</div>
        <h1 className={styles.contactTitle}>Have something that needs saying?</h1>
        <div className={styles.contactIntro}>
          <p>Maybe it needs writing from scratch.</p>
          <p>Maybe the words are already there, but they are not quite doing the job.</p>
          <p>Either way, tell me about it.</p>
        </div>
      </header>

      <div className={styles.contactGrid}>
        <section className={styles.contactInvitation}>
          <h2>I’m open to the conversation.</h2>
          <div className={styles.contactBody}>
            <p>I’m interested in copywriting and copyediting opportunities across industries and formats. That could mean:</p>
            <ul>
              <li>writing something new;</li>
              <li>shaping an idea into a stronger piece;</li>
              <li>editing copy that is almost there;</li>
              <li>reviewing content for clarity, structure, flow, and quality.</li>
            </ul>
            <p>If the work involves words and you think I could help, get in touch.</p>
          </div>
        </section>

        <section className={styles.contactMethods}>
          <div className={styles.contactMethod}>
            <div className={styles.methodLabel}>The simplest way</div>
            <div className={styles.methodValue}>francisigwe.biz@gmail.com</div>
            <a href="mailto:francisigwe.biz@gmail.com" className={styles.primaryAction}>Send me an email</a>
          </div>

          <div className={styles.contactMethod}>
            <div className={styles.methodLabel}>Prefer LinkedIn?</div>
            <div className={styles.methodBody}>
              <p>You can find me there too.</p>
            </div>
            {/* Note: Update the href below with Francis's confirmed LinkedIn URL before publication */}
            <a href="https://linkedin.com/in/francis-igwe" target="_blank" rel="noopener noreferrer" className={styles.secondaryAction}>Connect on LinkedIn</a>
          </div>
        </section>
      </div>

      <div className={styles.closingLine}>
        Good words usually start with a conversation.
      </div>
    </main>
  );
}
