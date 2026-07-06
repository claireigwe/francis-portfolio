import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";

export const metadata = {
  title: "About — Francis Igwe",
  description: "I started by writing the words. Then I spent years finding out why some work better than others. About Francis Igwe, Copywriter & Copyeditor.",
};

export default function AboutPage() {
  return (
    <main className={`${styles.aboutPage} container`}>
      <header className={styles.aboutHeader}>
        <div className={styles.aboutEyebrow}>About me</div>
        <div className={styles.aboutHeaderGrid}>
          <div className={styles.aboutHeaderText}>
            <h1 className={styles.aboutTitle}>
              I started by writing the words.<br />
              Then I spent years finding out why some work better than others.
            </h1>
            <div className={styles.aboutIntro}>
              <p>I’m Francis Igwe, a Copywriter & Copyeditor.</p>
              <p>I’ve written sales copy, articles, scripts, pitches, website content, and other things that began with someone needing the right words for something.</p>
              <p>But writing is only one side of my work.</p>
              <p>I’ve also spent years reviewing what other people write — improving structure and flow, catching what weakens a piece, training writers, and helping content meet the standard it needs to meet.</p>
            </div>
          </div>
          <div className={styles.aboutHeaderImage}>
            <div className={styles.aboutPortraitWrapper}>
              <Image 
                src="/images/francis_2.jpeg"
                alt="Francis Igwe"
                fill
                className={styles.aboutPortrait}
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </header>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>Where it started</div>
        <h2 className={styles.chapterTitle}>First, I wrote.</h2>
        <div className={styles.chapterBody}>
          <p>Advertising copy. Business pitches. Articles. Website content. Scripts.</p>
          <p>Different subjects. Different formats. Different jobs for the words to do.</p>
          <p>Some needed to sell. Some needed to explain. Some needed to hold attention long enough to make the next sentence matter.</p>
          <p>What interested me was never just putting words on a page. It was figuring out what the writing needed to do — and finding the clearest, most engaging way to get it there.</p>
        </div>
      </section>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>Then the work widened</div>
        <h2 className={styles.chapterTitle}>
          Writing taught me how to make choices.<br />
          Editing taught me how to question them.
        </h2>
        <div className={styles.chapterBody}>
          <p>I moved into work that put me on the other side of the page. Instead of only asking, “What should I write?” I was also asking:</p>
          <p>Why does this section drag?<br />
             Where did the idea get lost?<br />
             Does this sound like the person or brand it is supposed to sound like?<br />
             What can disappear without losing anything?<br />
             What is the writer trying to say — and is that what the reader will actually understand?</p>
          <p>That work sharpened the way I approach my own writing too.</p>
        </div>
      </section>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>Beyond my own drafts</div>
        <h2 className={styles.chapterTitle}>A good eye becomes more useful when you can help someone else see it too.</h2>
        <div className={styles.chapterBody}>
          <p>My experience grew into copyediting and quality control.</p>
          <p>I reviewed scripts, worked on structure and flow, caught grammatical and presentation issues, and helped writers improve the work before it reached an audience.</p>
          <p>I also trained scriptwriters. That meant doing more than fixing a sentence. It meant being able to explain why something was not working and help another writer make a better decision the next time.</p>
          <p style={{ marginTop: "1.5rem", color: "var(--color-editor-red)" }}>
            Writing the work taught me one thing. Helping other writers improve theirs taught me another.
          </p>
        </div>
      </section>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>Words also have consequences</div>
        <h2 className={styles.chapterTitle}>
          Good content should not only sound right.<br />
          It should stand up to scrutiny.
        </h2>
        <div className={styles.chapterBody}>
          <p>My work in content compliance added another layer to how I think about communication.</p>
          <p>I’ve reviewed digital, marketing, and technical content, worked with teams across different functions, identified content risks, and helped create clearer guidelines for the people producing the work.</p>
          <p>That experience made me more attentive to the things good writing can easily overlook:</p>
          <p>What is this claiming?<br />
             Can the claim be supported?<br />
             Is the message clear?<br />
             Could it mislead?<br />
             Does the content meet the standard expected of it?</p>
          <p>The best sentence in the room is not much use if it creates the wrong problem.</p>
        </div>
      </section>

      <div className={styles.chapterHighlight}>
        Write it.<br />
        Shape it.<br />
        Sharpen it.
      </div>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>The thread through it all</div>
        <div className={styles.chapterBody}>
          <p>These parts of my career are not separate to me.</p>
          <p>Writing taught me how to build. Editing taught me how to improve. Quality control taught me how to look beyond one sentence and see the whole piece. Training writers taught me how to explain what good writing is doing. Content compliance taught me to pay attention to what the words are actually claiming.</p>
          <p>They all lead back to the same work: Finding the clearest, sharpest, most engaging way to say the thing.</p>
        </div>
      </section>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>The work</div>
        <h2 className={styles.chapterTitle}>If words are involved, I’m interested.</h2>
        <div className={styles.chapterBody}>
          <p>I’m open to copywriting and copyediting work across industries and formats. That can include:</p>
          <ul>
            <li>sales and promotional copy;</li>
            <li>website copy;</li>
            <li>articles and long-form content;</li>
            <li>scripts;</li>
            <li>headlines and short-form copy;</li>
            <li>copyediting;</li>
            <li>content review and quality control.</li>
          </ul>
          <p>The industry can change. The question remains the same: What does this need to say — and how can the words do their job better?</p>
        </div>
      </section>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>A few chapters so far</div>
        <div className={styles.timelineGrid}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineRole}>Copywriter</div>
            <div className={styles.timelineDesc}>Writing advertising copy, pitches, articles, website content, scripts, and other promotional material.</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineRole}>Copyeditor & Quality Control</div>
            <div className={styles.timelineDesc}>Reviewing scripts and content for grammar, structure, flow, consistency, and overall quality.</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineRole}>Writer Training</div>
            <div className={styles.timelineDesc}>Helping scriptwriters improve how they structure ideas and communicate them clearly.</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineRole}>Content Compliance</div>
            <div className={styles.timelineDesc}>Reviewing content for clarity, risk, standards, and the claims it makes.</div>
          </div>
        </div>
      </section>

      <section className={styles.chapterBlock}>
        <div className={styles.sectionLabel}>Education</div>
        <div className={styles.educationGrid}>
          <div className={styles.eduItem}>
            <div className={styles.eduStatus}>Current</div>
            <div className={styles.eduDegree}>MSc International Business</div>
            <div className={styles.eduInstitution}>University of Salford</div>
          </div>
          <div className={styles.eduItem}>
            <div className={styles.eduStatus}>Previous</div>
            <div className={styles.eduDegree}>BA History & International Relations</div>
            <div className={styles.eduInstitution}>Obafemi Awolowo University</div>
          </div>
        </div>
        <div className={styles.chapterBody}>
          <p>My academic background has taken me through history, international relations, and business.</p>
          <p>Different subjects, perhaps. But all of them involve understanding ideas, asking better questions, and making sense of complicated things. That has been useful for a writer.</p>
        </div>
      </section>

      <section className={styles.chapterBlock}>
        <h2 className={styles.chapterTitle}>The short version?</h2>
        <div className={styles.chapterBody}>
          <p>I like words.</p>
          <p>I like them even more when they are doing something useful.</p>
          <p>Selling the idea. Explaining the difficult thing. Making someone keep reading. Fixing the sentence everyone knew was wrong but could not quite explain why.</p>
          <p>That is the work. And I’m still interested.</p>
        </div>
      </section>

      <section className={styles.closingSection}>
        <h2 className={styles.closingHeadline}>Have something for me to write?</h2>
        <div className={styles.closingFollowUp}>Or something you wish someone would rewrite?</div>
        <div className={styles.chapterBody} style={{ margin: "0 auto var(--spacing-xl)", textAlign: "center" }}>
          Either is a good place to start.
        </div>
        <div className={styles.closingActions}>
          <Link href="/contact" className={styles.primaryAction}>Start a conversation</Link>
          <Link href="/work" className={styles.secondaryAction}>See my work</Link>
        </div>
      </section>
    </main>
  );
}
