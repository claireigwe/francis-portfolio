import Link from "next/link";
import Image from "next/image";
import styles from "./Home.module.css";

export const metadata = {
  title: "Francis Igwe — Copywriter & Copyeditor",
  description: "I find the words. Then I make them work. Portfolio of Francis Igwe, a copywriter and copyeditor.",
};

export default function Home() {
  return (
    <>
      <section className={`${styles.hero} container`}>
        <div className={styles.heroEyebrow}>Francis Igwe — Copywriter & Copyeditor</div>
        <h1 className={styles.heroHeadline}>
          <span>I find the words.</span>
          <span>Then I make them work.</span>
        </h1>
        <div className={styles.heroIntro}>
          <p>Some words need to sell. Some need to explain. Others just need someone to look at them and say, “We can do better.”</p>
          <p>I write, shape, and sharpen copy until it says what it needs to say — clearly, engagingly, and without wasting anyone’s time.</p>
        </div>
        <div className={styles.heroActions}>
          <Link href="/work" className={styles.primaryAction}>See my work</Link>
          <a href="mailto:francisigwe.biz@gmail.com" className={styles.secondaryAction}>Let’s talk</a>
        </div>
      </section>

      <section className={`${styles.selectedWorkSection} container`}>
        <div className={styles.sectionLabel}>Selected work</div>
        <h2 className={styles.sectionIntroHeading}>
          Different jobs.<br />
          Same question.
        </h2>
        <div className={styles.sectionIntroBody}>
          <p>What does this need to say — and what’s the best way to say it?</p>
          <p>Here are a few of my answers.</p>
        </div>

        <div className={styles.workGrid}>
          {/* Project 1: Insatiable Eats */}
          <article className={styles.projectItem}>
            <div className={styles.projectImageWrapper}>
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
                We can&apos;t help it. We all love amazing food.
              </blockquote>
              <Link href="/work/insatiable-eats" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>

          {/* Project 2: The Power of Blue */}
          <article className={styles.projectItem}>
            <div className={styles.projectImageWrapper}>
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
                You&apos;ve probably seen a cloth you liked and wondered how long the fabric could last. You were right to wonder.
              </blockquote>
              <Link href="/work/power-of-blue" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>

          {/* Project 3: Walking the Gemba Walk */}
          <article className={styles.projectItem}>
            <div className={styles.projectImageWrapper}>
              <Image 
                src="/images/projects/gemba-walk/gemba_walk_preview.jpg"
                alt="Abstract representation of a modern workspace"
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectType}>Business Thought Leadership</div>
              <h3 className={styles.projectTitle}>Walking the Gemba Walk</h3>
              <p className={styles.projectLine}>A closer look at why improvement starts where the work actually happens.</p>
              <blockquote className={styles.projectExcerpt}>
                From Fortune 500 companies to single-employee outfits, every business wants to improve.
              </blockquote>
              <Link href="/work/gemba-walk" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>

          {/* Project 4: Online Shop Sales Copy */}
          <article className={styles.projectItem}>
            <div className={styles.projectImageWrapper}>
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
              <Link href="/work/online-shop" className={styles.primaryAction}>Read the work</Link>
            </div>
          </article>
        </div>

        <div className={styles.allWorkAction}>
          <p className={styles.allWorkSupport}>That’s four. There’s more where those came from.</p>
          <Link href="/work" className={styles.primaryAction}>See all work</Link>
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <div className="container">
          <div className={styles.sectionLabel}>What I do</div>
          <h2 className={styles.sectionIntroHeading}>
            Sometimes the page is blank.<br />
            Sometimes the problem is already on it.
          </h2>
          <div className={styles.sectionIntroBody}>
            <p>Either way, I know where to start.</p>
          </div>

          <div className={styles.capabilitiesGrid}>
            <div className={styles.capabilityItem}>
              <h3>Write it</h3>
              <p>From a rough idea, a brief, or a product that needs the right words.</p>
              <p>I write copy for people who have something to say, sell, explain, or make interesting.</p>
            </div>
            <div className={styles.capabilityItem}>
              <h3>Shape it</h3>
              <p>Good ideas do not always arrive in good sentences.</p>
              <p>I turn complicated, dull, or unclear material into writing people can understand and want to keep reading.</p>
            </div>
            <div className={styles.capabilityItem}>
              <h3>Sharpen it</h3>
              <p>Sometimes the words are already there. They just need a better eye.</p>
              <p>I edit for clarity, structure, flow, tone, and the small things that can quietly weaken a good piece of writing.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.shortSharpSection} container`}>
        <div className={styles.sectionLabel}>Short & Sharp</div>
        <h2 className={styles.sectionIntroHeading}>A few words can do a lot of work.</h2>
        <div className={styles.sectionIntroBody}>
          <p>Headlines, hooks, taglines, and other small spaces where every word has to earn its place.</p>
        </div>

        <div className={styles.shortSharpGallery}>
          <div className={styles.shortSharpLine}>Experience culinary magic in the East End.</div>
          <div className={styles.shortSharpLine}>Munching BakeTwo’s bagels or buns always feels like a warm cuddle.</div>
          <div className={styles.shortSharpLine}>This vintage perfume bottle can pay your mortgage.</div>
          <div className={styles.shortSharpLine}>Your products are the coolest things since Nike launched Jordans.</div>
        </div>

        <Link href="/work/short-and-sharp" className={styles.primaryAction}>See more short copy</Link>
      </section>

      <section className={`${styles.experienceSection} container`}>
        <div className={styles.sectionLabel}>Behind the words</div>
        <h2 className={styles.sectionIntroHeading}>
          I’ve spent years writing them.<br />
          And years making them better.
        </h2>
        <div className={styles.experienceBody}>
          <p>My career started with writing: advertising copy, pitches, articles, website content, and whatever else the brief demanded.</p>
          <p>Then the work widened.</p>
          <p>I moved into content compliance, copyediting, and quality control — reviewing scripts, improving structure and flow, training writers, and helping teams catch what was not working before it reached the audience.</p>
          <p>So yes, I can start with a blank page.</p>
          <p>I also know what to do when the page is already full.</p>
        </div>
        <div className={styles.experienceRoles}>
          Copywriting · Copyediting · Script Review · Writer Training · Content Quality
        </div>
        <Link href="/about" className={styles.primaryAction}>More about me</Link>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaHeading}>Got words to work on?</h2>
          <div className={styles.ctaBody}>
            <p>Maybe it needs writing from scratch. Maybe it is almost there. Maybe you have stared at it for so long that every sentence now looks suspicious.</p>
            <p>Send it my way.</p>
          </div>
          <div className={styles.ctaActions}>
            <a href="mailto:francisigwe.biz@gmail.com" className={styles.ctaPrimary}>Start a conversation</a>
          </div>
        </div>
      </section>
    </>
  );
}
