import Link from "next/link";
import Image from "next/image";
import styles from "./Work.module.css";

export const metadata = {
  title: "Work — Francis Igwe",
  description: "Selected work by Francis Igwe. A collection demonstrating range across persuasive copy, long-form thinking, scripts, and short-form writing.",
};

export default function WorkPage() {
  return (
    <>
      <section className={`${styles.pageIntro} container`}>
        <div className={styles.introEyebrow}>Selected work</div>
        <h1 className={styles.introHeading}>
          Some things need selling.<br />
          Some need explaining.<br />
          All of them need the right words.
        </h1>
        <div className={styles.introBody}>
          <p>I’ve written across different formats, subjects, and industries. The work changes. The question usually doesn’t:</p>
          <p>What does this need to say — and what’s the best way to say it?</p>
          <p>Here are six answers.</p>
        </div>
      </section>

      {/* Campaigns & Sales */}
      <section className={`${styles.workCategory} container`}>
        <div className={styles.categoryHeader}>
          <h2 className={styles.categoryTitle}>Campaigns & Sales</h2>
          <p className={styles.categoryIntro}>Writing that needs to catch attention, create interest, and give people a reason to act.</p>
        </div>
        
        <div className={styles.projectList}>
          {/* Insatiable Eats */}
          <article className={styles.projectItem}>
            <div className={`${styles.projectImageWrapper} ${styles.ratioStandard}`}>
              <Image 
                src="/images/projects/insatiable-eats/insatiable_eats_preview.png"
                alt="A beautifully plated dish in a warm, inviting restaurant setting"
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectType}>Restaurant & Catering Copy</div>
              <h3 className={styles.projectTitle}>Insatiable Eats</h3>
              <p className={styles.projectLine}>Making a restaurant sound as good as the food should taste.</p>
              <blockquote className={styles.projectExcerpt}>
                We can’t help it. We all love amazing food.
              </blockquote>
              <p className={styles.projectDescription}>Promotional copy built around the pleasure, variety, and convenience of a restaurant and catering experience in New York’s East End.</p>
              <Link href="/work/insatiable-eats" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>

          {/* Online Shop Sales Copy */}
          <article className={`${styles.projectItem} ${styles.variantA}`}>
            <div className={`${styles.projectImageWrapper} ${styles.ratioSquare}`}>
              <Image 
                src="/images/projects/online-shop/online_shop_1.png"
                alt="Online shopping concept"
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectType}>Sales Copy</div>
              <h3 className={styles.projectTitle}>Online Shop Sales Copy</h3>
              <p className={styles.projectLine}>Selling the value of an online shop without sounding like another sales pitch.</p>
              <blockquote className={styles.projectExcerpt}>
                Your products are the coolest things since Nike launched Jordans. The problem is, only a few people know that right now.
              </blockquote>
              <p className={styles.projectDescription}>A playful sales piece that uses humour and familiar observations to make one point clear: the market is online.</p>
              <Link href="/work/online-shop" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>
        </div>
      </section>

      {/* Ideas & Articles */}
      <section className={`${styles.workCategory} container`}>
        <div className={styles.categoryHeader}>
          <h2 className={styles.categoryTitle}>Ideas & Articles</h2>
          <p className={styles.categoryIntro}>Longer pieces for subjects that need more than a catchy line.</p>
        </div>
        
        <div className={styles.projectList}>
          {/* The Power of Blue */}
          <article className={`${styles.projectItem} ${styles.variantB}`}>
            <div className={`${styles.projectImageWrapper} ${styles.ratioWide}`}>
              <Image 
                src="/images/projects/power-of-blue/power_of_blue_1.png"
                alt="Indigo dyeing process"
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectType}>Educational Brand Content</div>
              <h3 className={styles.projectTitle}>The Power of Blue</h3>
              <p className={styles.projectLine}>Turning the story of natural indigo into something worth reading.</p>
              <blockquote className={styles.projectExcerpt}>
                You’ve probably seen a cloth you liked and wondered how long the fabric could last. You were right to wonder.
              </blockquote>
              <p className={styles.projectDescription}>An educational article exploring natural indigo, synthetic dyes, and the case for a more natural approach to fabric.</p>
              <Link href="/work/power-of-blue" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>

          {/* Walking the Gemba Walk */}
          <article className={`${styles.projectItem} ${styles.variantC}`}>
            <div className={styles.projectContent}>
              <div className={styles.projectType}>Business Thought Leadership</div>
              <h3 className={styles.projectTitle}>Walking the Gemba Walk</h3>
              <p className={styles.projectLine}>A closer look at why improvement starts where the work actually happens.</p>
              <blockquote className={styles.projectExcerpt}>
                From Fortune 500 companies to single-employee outfits, every business wants to improve.
              </blockquote>
              <p className={styles.projectDescription}>A researched business article examining gemba kaizen, leadership, and why companies struggle to improve when decision-makers become disconnected from the work itself.</p>
              <div className={`${styles.projectImageWrapper} ${styles.ratioWide}`} style={{ margin: "1.5rem 0" }}>
                <Image 
                  src="/images/projects/gemba-walk/gemba_walk_preview.jpg"
                  alt="Abstract representation of a modern workspace"
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <Link href="/work/gemba-walk" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>
        </div>
      </section>

      {/* Scripts & Short Copy */}
      <section className={`${styles.workCategory} container`}>
        <div className={styles.categoryHeader}>
          <h2 className={styles.categoryTitle}>Scripts & Short Copy</h2>
          <p className={styles.categoryIntro}>Writing for the ear, the eye, and the few seconds before attention moves somewhere else.</p>
        </div>
        
        <div className={styles.projectList}>
          {/* Autovest */}
          <article className={styles.projectItem}>
            <div className={`${styles.projectImageWrapper} ${styles.ratioStandard}`}>
              <Image 
                src="/images/projects/autovest/autovest_preview.png"
                alt="Classic or high-end vintage automobile"
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectType}>Video Script</div>
              <h3 className={styles.projectTitle}>Autovest</h3>
              <p className={styles.projectLine}>Making an investment proposition easier to follow in a conversational script.</p>
              <blockquote className={styles.projectExcerpt}>
                Some facts just sound more fantastic than fiction.
              </blockquote>
              <p className={styles.projectDescription}>A promotional video script written to introduce an automobile investment proposition in simple, spoken language.</p>
              <Link href="/work/autovest" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>

          {/* Short & Sharp */}
          <article className={`${styles.projectItem} ${styles.variantA}`}>
            <div className={`${styles.projectImageWrapper} ${styles.ratioSquare}`}>
              <Image 
                src="/images/projects/short-and-sharp/short_sharp_preview.png"
                alt="Minimalist editorial still life with an ink pen"
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectType}>Headlines, Hooks & Taglines</div>
              <h3 className={styles.projectTitle}>Short & Sharp</h3>
              <p className={styles.projectLine}>Small spaces. Very little room for wasted words.</p>
              <blockquote className={styles.projectExcerpt}>
                This vintage perfume bottle can pay your mortgage.
              </blockquote>
              <p className={styles.projectDescription}>A curated collection of headlines, hooks, taglines, and compact promotional copy written across different subjects and formats.</p>
              <Link href="/work/short-and-sharp" className={styles.primaryAction}>See the collection</Link>
            </div>
          </article>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeading}>Need words for something else?</h2>
          <div className={styles.ctaBody}>
            <p>This portfolio is a selection, not a list of everything I can write.</p>
            <p>If you have something that needs selling, explaining, shaping, or sharpening, I’d like to hear about it.</p>
          </div>
          <Link href="/contact" className={styles.ctaPrimary}>Start a conversation</Link>
        </div>
      </section>
    </>
  );
}
