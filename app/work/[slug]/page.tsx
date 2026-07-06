import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./Project.module.css";

// --- Project Components ---

function InsatiableEats() {
  return (
    <>
      <div className={styles.projectHeader}>
        <div className="container">
          <div className={styles.projectEyebrow}>Restaurant & Catering Copy</div>
          <h1 className={styles.projectTitle}>Insatiable Eats</h1>
          <div className={styles.projectMetadata}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Industry</span>
              <span className={styles.metaValue}>Food & Hospitality</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Work</span>
              <span className={styles.metaValue}>Headlines · Promotional Copy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ margin: "2rem auto 4rem auto" }}>
        <div className={styles.projectImageWrapper} style={{ aspectRatio: "16/9", maxWidth: "1000px", margin: "0 auto" }}>
          <Image 
            src="/images/projects/insatiable-eats/insatiable_eats_preview.png"
            alt="A beautifully plated dish in a warm, inviting restaurant setting"
            fill
            className={styles.projectImage}
            sizes="(max-width: 1000px) 100vw, 1000px"
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.ieIntro}>
          <h2 className={styles.ieHeadline}>
            We can’t help it.<br />
            We all love amazing food.
          </h2>
          <div className={styles.ieBody}>
            <p>For Insatiable Eats, the job was not simply to list dishes, dining options, and catering services.</p>
            <p>The writing needed to make the experience feel close enough to taste.</p>
            <p>Francis wrote promotional copy that moves through the food, the atmosphere, and the different ways people could enjoy both — from dining at the restaurant to bringing the catering home.</p>
          </div>
          </div>
        </div>
        
        <div className="container" style={{ margin: "4rem auto" }}>
          <div className={styles.projectImageWrapper} style={{ aspectRatio: "16/9", maxWidth: "1000px", margin: "0 auto" }}>
            <Image 
              src="/images/projects/insatiable-eats/insatiable_eats_2.png"
              alt="An elegant luxury catering setup"
              fill
              className={styles.projectImage}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        </div>
  
        <div className={styles.ieExploration}>
        <div className="container">
          <div className={styles.sectionLabel}>Finding the invitation</div>
          <div className={styles.ieBody}>
            <p>Before the longer copy came the shorter question: how do you make people want to come closer?</p>
          </div>
          <div className={styles.ieHeadlinesGrid}>
            <div className={styles.ieHeadlineItem}>“Amazing dishes. Premium catering. That’s Insatiable Eats.”</div>
            <div className={styles.ieHeadlineItem}>“Experience redefined dining and catering.”</div>
            <div className={styles.ieHeadlineItem}>“Experience culinary magic in the East End.”</div>
            <div className={styles.ieHeadlineItem}>“Enjoy the best of cuisines in the East End.”</div>
            <div className={styles.ieHeadlineItem}>“The tastiest dishes, right in the East End.”</div>
          </div>
          </div>
        </div>
  
        <div className="container">
          <div className={styles.ieFeatureBlock}>
          <div className={styles.sectionLabel}>Setting the table</div>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “Imagine this: the best local and international dishes, prepared by master chefs, at a restaurant you can practically stroll to — or at your home, office, parties, and events.”
          </blockquote>
          <div className={styles.ieFollowUp}>
            “Well, you don’t really need to imagine it, because that’s exactly what Chef Marco Barrila and his team are doing at Insatiable Eats.”
          </div>
          <div className={styles.ieEditorialNote}>
            The opening begins with the experience before introducing the business. It gives the reader the food, the convenience, and the possibility first. The brand arrives after there is already something to want.
          </div>
        </div>

        <div className={styles.ieFeatureBlock}>
          <div className={styles.sectionLabel}>Building appetite</div>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “From the tastiest Italian pastaria, salumaria, pizza alla palla, pastries, and desserts to a Mediterranean-style antipasta bar, Insatiable Eats takes diners on yummy tours of cuisines from across the world.”
          </blockquote>
          <div className={styles.ieEditorialNote}>
            The copy keeps moving because the offer does too. Restaurant dining, fresh pasta, signature sauces, private events, and off-premises catering all needed room without turning the piece into a menu of services.
          </div>
        </div>
        
        <div className="container" style={{ margin: "4rem auto" }}>
          <div className={styles.projectImageWrapper} style={{ aspectRatio: "3/2", maxWidth: "800px", margin: "0 auto" }}>
            <Image 
              src="/images/projects/insatiable-eats/insatiable_eats_3.png"
              alt="Professional chef plating a fine dining dish"
              fill
              className={styles.projectImage}
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        </div>

        <div className={styles.ieLargeLine}>Hear me out.</div>

        <div className={styles.ieFeatureBlock}>
          <div className={styles.ieBody}>
            <p>That small line says a lot about the tone of the piece.</p>
            <p>The copy does not speak from a distance. It talks to the reader, moves quickly, and keeps the experience human. That conversational energy runs through both versions of the work.</p>
          </div>
        </div>

        <div className={styles.ieFeatureBlock}>
          <div className={styles.sectionLabel}>More than a restaurant</div>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “Insatiable Eats gives you a customised dining experience, with options for private dining, renting the entire restaurant or part of it with premium catering for your parties and events, or bringing the catering to you.”
          </blockquote>
          <div className={styles.ieBody}>
            <p>The business had several offers to communicate.</p>
            <p>The writing connects them through one idea: the diner’s enjoyment and convenience. That keeps the piece focused on what people get to experience rather than presenting a long list of services.</p>
          </div>
        </div>

        <div className={styles.projectReflection}>
          <h3 className={styles.reflectionHeading}>The work behind the appetite</h3>
          <div className={styles.reflectionBody}>
            <p>Food copy has an obvious job: make people want the food.</p>
            <p>But this piece also had to make people understand the range of the business — restaurant dining, catering, private events, fresh pasta, and more.</p>
            <p>The answer was to keep returning to the experience. What can you taste? Where can you enjoy it? How easy is it to get? The details changed. The appetite held everything together.</p>
          </div>
        </div>

        <div className={styles.projectNav}>
          <div>
            <div className={styles.nextProjectLabel}>Next project</div>
            <h4 className={styles.nextProjectTitle}>The Power of Blue</h4>
            <p className={styles.nextProjectTeaser}>From selling an experience to explaining why a material matters.</p>
            <Link href="/work/power-of-blue" className={styles.nextProjectLink}>Read the next project</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function PowerOfBlue() {
  return (
    <>
      <div className={styles.projectHeader}>
        <div className="container">
          <div className={styles.projectEyebrow}>Educational Brand Content</div>
          <h1 className={styles.projectTitle}>The Power of Blue</h1>
          <div className={styles.projectMetadata}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Industry</span>
              <span className={styles.metaValue}>Textiles & Bedding</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Work</span>
              <span className={styles.metaValue}>Research-led Article · Brand Content</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.pbIntro}>
          <h2 className={styles.ieHeadline}>You were right to wonder.</h2>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “You’ve probably seen a cloth you liked and thought, ‘Who’d say no to a nice shirt like this, especially when it comes at such a cheap price?’ The only problem was, you kept wondering how long the fabric could last. You were right to wonder about that.”
          </blockquote>
          <div className={styles.ieBody}>
            <p>The subject was natural indigo dye.</p>
            <p>The challenge on the page was making a topic involving textiles, synthetic dyes, environmental impact, and fabric longevity feel relevant to an everyday reader.</p>
            <p>The article begins with something familiar: liking a piece of fabric and wondering whether it will last. From there, the subject gets bigger.</p>
          </div>
        </div>

        <div className={styles.sectionLabel}>Building the argument</div>
        <div className={styles.pbStoryMoves}>
          <div className={styles.pbMoveBlock}>
            <div className={styles.pbMoveTitle}>Move 01</div>
            <h3 className={styles.ieHeadline}>A synthetic triumph</h3>
            <div className={styles.pbMoveExcerpt}>
              “To meet the upsurge in demand from a fast-growing global population, synthetic dyes have replaced natural dyes as the go-to option for fabrics because they are cheaper and more useful at an industrial scale.”
            </div>
          </div>
          <div className={styles.pbMoveBlock}>
            <div className={styles.pbMoveTitle}>Move 02</div>
            <h3 className={styles.ieHeadline}>A synthetic bad news</h3>
            <div className={styles.pbMoveExcerpt}>
              “Synthetic dyes do not just affect you when you wear fabrics they were used on. They can cause significant damage to the environment too.”
            </div>
          </div>
          <div className={styles.pbMoveBlock}>
            <div className={styles.pbMoveTitle}>Move 03</div>
            <h3 className={styles.ieHeadline}>The natural good news</h3>
            <div className={styles.pbMoveExcerpt}>
              “You’ve read the bad news, so it only gets better now.”
            </div>
          </div>
        </div>

        <div style={{ margin: "var(--space-9) auto", maxWidth: "1000px" }}>
          <Image 
            src="/images/projects/power-of-blue/power_of_blue_1.png" 
            alt="Macro photography of folded textile dyed in deep natural indigo blue" 
            width={1000} 
            height={562} 
            style={{ width: "100%", height: "auto", display: "block" }} 
          />
        </div>

        <div className={styles.pbIntro}>
          <div className={styles.sectionLabel}>From subject to reader</div>
          <h3 className={styles.ieHeadline}>The science matters. So does the reason to keep reading.</h3>
          <div className={styles.pbQuestion}>
            “What exactly is natural indigo dye, and how does it help your fabric?”
          </div>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “Natural indigo dye is a blue colour-yielding extract, mostly obtained from varieties of the indigofera plant native to tropical regions.”
          </blockquote>
          <div className={styles.ieEditorialNote}>
            The writing moves between explanation and consequence. What is it? Why is it different? Why should the reader care? That rhythm helps keep the subject from becoming a list of technical facts.
          </div>
        </div>

        <div className={styles.pbDetail}>
          Among the Japanese samurai, natural indigo-dyed fabrics were a favourite.
        </div>

        <div style={{ margin: "var(--space-9) auto", maxWidth: "1000px" }}>
          <Image 
            src="/images/projects/power-of-blue/power_of_blue_2.png" 
            alt="Hands working with fabric in a vat of deep natural indigo dye" 
            width={1000} 
            height={562} 
            style={{ width: "100%", height: "auto", display: "block" }} 
          />
        </div>

        <div className={styles.pbIntro}>
          <div className={styles.sectionLabel}>From education to product</div>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “The case for going natural has never been stronger.”
          </blockquote>
          <div className={styles.ieBody}>
            <p>The article spends most of its time building the subject before bringing the brand into the story. Only at the end does it connect the argument to Aizome Bedding and its organic bedding products.</p>
          </div>
          <blockquote className={styles.ieFeaturedExcerpt} style={{marginTop: "2rem"}}>
            “Aizome Bedding has you covered on this. Our luxury organic bedding is made with natural indigo and organic cotton.”
          </blockquote>
        </div>

        <div className={styles.projectReflection}>
          <h3 className={styles.reflectionHeading}>Explain first. Sell second.</h3>
          <div className={styles.reflectionBody}>
            <p>Long-form brand content has to do more than contain information.</p>
            <p>The reader needs a reason to enter the subject, a clear path through it, and enough variation to keep going.</p>
            <p>This piece uses an everyday opening, a clear problem-and-alternative structure, questions to guide the explanation, memorable historical detail, and a final connection to the product. The brand matters. But the story earns the reader’s attention first.</p>
          </div>
        </div>

        <div className={styles.projectNav}>
          <div>
            <div className={styles.nextProjectLabel}>Next project</div>
            <h4 className={styles.nextProjectTitle}>Walking the Gemba Walk</h4>
            <p className={styles.nextProjectTeaser}>From explaining a material to examining how companies improve.</p>
            <Link href="/work/gemba-walk" className={styles.nextProjectLink}>Read the next project</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function GembaWalk() {
  return (
    <>
      <div className={styles.projectHeader}>
        <div className="container">
          <div className={styles.projectEyebrow}>Business Thought Leadership</div>
          <h1 className={styles.projectTitle}>Walking the Gemba Walk</h1>
          <div className={styles.projectMetadata}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Industry</span>
              <span className={styles.metaValue}>Business & Management</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Work</span>
              <span className={styles.metaValue}>Research-led Article · Long-form Writing</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ margin: "2rem auto 4rem auto" }}>
        <div className={styles.projectImageWrapper} style={{ aspectRatio: "16/9", maxWidth: "1000px", margin: "0 auto" }}>
          <Image 
            src="/images/projects/gemba-walk/gemba_walk_preview.jpg"
            alt="Abstract representation of a modern workspace"
            fill
            className={styles.projectImage}
            sizes="(max-width: 1000px) 100vw, 1000px"
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.gwIntro}>
          <div>
            <h2 className={styles.gwHeadline}>Every company wants to improve.</h2>
            <div className={styles.gwFollowUp}>Not every leader wants to go where the problems are.</div>
            <blockquote className={styles.gwExcerpt}>
              “From Fortune 500 companies to single-employee outfits, every business brand wants to improve.”
            </blockquote>
          </div>
          <div className={styles.ieBody}>
            <p>The article begins with a familiar business obsession: improvement. Lean management. Design thinking. Problem-solving frameworks. The Pareto principle. Companies rarely lack ideas for getting better.</p>
            <p>The argument Francis develops is that the problem may sit somewhere else entirely: leaders becoming disconnected from the place where the work actually happens.</p>
          </div>
        </div>

        <div className={styles.sectionLabel}>The argument</div>
        <div className={styles.pbIntro}>
          <h3 className={styles.ieHeadline}>You cannot improve what you refuse to see.</h3>
          <div className={styles.ieBody}>
            <p>The article draws on the idea of gemba kaizen: continuous improvement grounded in direct understanding of the place where value is created and problems actually occur.</p>
            <p>When senior leaders become too removed from day-to-day operations, they are forced to understand problems through reports, summaries, and layers of management. Something gets lost on the way up.</p>
          </div>
          <blockquote className={styles.gwExcerpt}>
            “Without a constantly updated understanding, in person, of what needs to be improved, senior management can only rely on the reports of their subordinates.”
          </blockquote>
        </div>

        <div className="container" style={{ margin: "4rem auto" }}>
          <div className={styles.projectImageWrapper} style={{ aspectRatio: "3/2", maxWidth: "800px", margin: "0 auto" }}>
            <Image 
              src="/images/projects/gemba-walk/gemba_walk_2.jpg"
              alt="A cinematic, abstract shot of a modern manufacturing factory floor"
              fill
              className={styles.projectImage}
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        </div>

        <div className={styles.sectionLabel} style={{marginTop: "4rem"}}>From theory to evidence</div>
        <h3 className={styles.ieHeadline}>$100 million to $400 million.</h3>
        <div className={styles.ieBody}>
          <p>To show what the idea looks like in practice, the article turns to Wiremold and the leadership of Art Byrne. The results create a sharp break in the argument.</p>
        </div>
        
        <div className={styles.gwNumbersGrid}>
          <div className={styles.gwNumberCard}>
            <div className={styles.gwNumberValue}>$100M → $400M</div>
            <div className={styles.gwNumberLabel}>Sales Growth</div>
          </div>
          <div className={styles.gwNumberCard}>
            <div className={styles.gwNumberValue}>50% → 98%</div>
            <div className={styles.gwNumberLabel}>Customer Service Improved</div>
          </div>
          <div className={styles.gwNumberCard}>
            <div className={styles.gwNumberValue}>$30M → $770M</div>
            <div className={styles.gwNumberLabel}>Enterprise Value Rose</div>
          </div>
          <div className={styles.gwNumberCard}>
            <div className={styles.gwNumberValue}>3 → 18</div>
            <div className={styles.gwNumberLabel}>Inventory Turns Increased</div>
          </div>
        </div>
        
        <div className="container" style={{ margin: "4rem auto" }}>
          <div className={styles.projectImageWrapper} style={{ aspectRatio: "3/2", maxWidth: "800px", margin: "0 auto" }}>
            <Image 
              src="/images/projects/gemba-walk/gemba_walk_3.jpg"
              alt="A close-up of a leader's hands holding a clipboard while pointing at a manufacturing process"
              fill
              className={styles.projectImage}
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        </div>

        <div className={styles.gwLargeLine}>
          The people with the most to gain were the first to leave the room.
        </div>

        <div className={styles.pbIntro}>
          <div className={styles.sectionLabel}>Where improvement breaks down</div>
          <h3 className={styles.ieHeadline}>The higher some leaders rise, the further they get from the work.</h3>
          <blockquote className={styles.gwExcerpt}>
            “In America, the higher company executives rise, the more removed they become from the nexus of company base activities, as this becomes the problem of subordinates.”
          </blockquote>
          <div className={styles.ieBody}>
            <p>Senior leaders are expected to focus on the “bigger picture.” The details of the work are delegated downwards.</p>
            <p>But there is a problem with a big picture built from second-hand information. The people closest to the problems may soften them, simplify them, or decide they are too small to send upwards. Meanwhile, the people with the authority to make fundamental changes see less and less of what needs changing.</p>
          </div>
        </div>

        <div className={styles.projectReflection}>
          <h3 className={styles.reflectionHeading}>Making a business argument hold together</h3>
          <div className={styles.reflectionBody}>
            <p>This piece had more moving parts than a short promotional assignment. It brought together a management philosophy, a book chapter, a leadership interview, company performance figures, a problem-solving framework, and examples from American and Japanese business.</p>
            <p>The writing had to keep all of that moving in one direction. The central question did the work: What happens when the people responsible for improvement become disconnected from the place that needs improving? Everything else supports the answer.</p>
          </div>
        </div>

        <div className={styles.projectNav}>
          <div>
            <div className={styles.nextProjectLabel}>Next project</div>
            <h4 className={styles.nextProjectTitle}>Online Shop Sales Copy</h4>
            <p className={styles.nextProjectTeaser}>From a management argument to a sales pitch with a sense of humour.</p>
            <Link href="/work/online-shop" className={styles.nextProjectLink}>Read the next project</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function OnlineShop() {
  return (
    <>
      <div className={styles.projectHeader}>
        <div className="container">
          <div className={styles.projectEyebrow}>Sales Copy</div>
          <h1 className={styles.projectTitle}>Online Shop Sales Copy</h1>
          <div className={styles.projectMetadata}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Industry</span>
              <span className={styles.metaValue}>E-commerce Services</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Work</span>
              <span className={styles.metaValue}>Promotional Copy · Sales Copy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.osProblemBlock}>
          <h2 className={styles.ieHeadline}>Your products are the coolest things since Nike launched Jordans.</h2>
          <div className={styles.gwFollowUp}>The problem is, only a few people know that right now.</div>
          <div className={styles.ieBody} style={{marginTop: "2rem"}}>
            <p>The offer was simple: online shops for sellers. The writing could have started with features, years of experience, or the importance of digital transformation. It did not.</p>
            <p>It started with a compliment and immediately turned it into the problem the service needed to solve.</p>
          </div>
        </div>

        <div style={{ margin: "var(--space-9) auto", maxWidth: "1000px" }}>
          <Image 
            src="/images/projects/online-shop/online_shop_1.png" 
            alt="Stack of shipping parcels with tracking labels" 
            width={1000} 
            height={562} 
            style={{ width: "100%", height: "auto", display: "block" }} 
          />
        </div>

        <div className={styles.osLargeLine}>
          Blame it on not having an online shop.
        </div>

        <div className={styles.pbIntro}>
          <div className={styles.sectionLabel}>Why trust the offer?</div>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “We have been in the business of creating high-converting online shops for sellers since 2006. Our clients have seen increased sales after trusting us to bring the world to their online doorsteps.”
          </blockquote>
          <div className={styles.ieEditorialNote}>
            The copy moves briefly from personality to credibility. The tone stays conversational, but the argument now has something practical behind it: experience and a claimed business outcome.
          </div>
        </div>
      </div>

      <div className={styles.osConversational}>
        <div className="container">
          <div className={styles.sectionLabel}>Making the market shift memorable</div>
          <h3 className={styles.ieHeadline}>Even gran is online.</h3>
          <div className={styles.osJokeGrid}>
            <div className={styles.osJoke}>
              “The world is changing so fast that even gran is ordering her recipes online.”
            </div>
            <div className={styles.osJoke}>
              “With the current lockdown, even gramps has started ordering his socks on ‘The Amazon’ while trying to chat you up on ‘The Facebook.’”
            </div>
          </div>
          <div className={styles.gwLargeLine} style={{color: "var(--color-editor-red)"}}>
            As dry as his jokes are, they also speak one truth: online is where the market is.
          </div>
          <div className={styles.ieBody} style={{textAlign: "center", maxWidth: "600px", margin: "0 auto"}}>
            <p>The humour is doing more than decorating the copy. It makes the shift to online shopping feel obvious, familiar, and difficult to ignore. Instead of explaining digital adoption with statistics, the piece turns it into a family observation.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ margin: "var(--space-9) auto", maxWidth: "1000px" }}>
          <Image 
            src="/images/projects/online-shop/online_shop_2.png" 
            alt="Modern storefront details" 
            width={1000} 
            height={562} 
            style={{ width: "100%", height: "auto", display: "block" }} 
          />
        </div>

        <div className={styles.pbIntro}>
          <div className={styles.sectionLabel}>Keeping the promise simple</div>
          <blockquote className={styles.ieFeaturedExcerpt}>
            “We know how to open that market up for sellers. All you have to do is have a good product or service. The rest is up to us.”
          </blockquote>
        </div>

        <div className={styles.osActionLine}>
          Click now to unleash your sales power.
        </div>

        <div className={styles.projectReflection}>
          <h3 className={styles.reflectionHeading}>Humour with a job to do</h3>
          <div className={styles.reflectionBody}>
            <p>The strongest joke in sales copy is rarely the one that gets the biggest laugh. It is the one that makes the point easier to remember.</p>
            <p>In this piece, the humour supports a simple argument: Your product may not be the problem. Visibility is. The grandparents, “The Amazon,” and “The Facebook” all lead back to the same idea. The market is online. The service helps sellers get there.</p>
          </div>
        </div>

          <div className={styles.projectNav}>
            <div>
              <div className={styles.nextProjectLabel}>Next project</div>
              <h4 className={styles.nextProjectTitle}>Autovest</h4>
              <p className={styles.nextProjectTeaser}>From writing for the page to writing for the ear.</p>
              <Link href="/work/autovest" className={styles.nextProjectLink}>Read the next project</Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  function Autovest() {
  return (
    <>
      <div className={styles.projectHeader}>
        <div className="container">
          <div className={styles.projectEyebrow}>Video Script</div>
          <h1 className={styles.projectTitle}>Autovest</h1>
          <div className={styles.projectMetadata}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Industry</span>
              <span className={styles.metaValue}>Automotive Investment</span>
            </div>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Work</span>
              <span className={styles.metaValue}>Promotional Script · Spoken Copy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ margin: "2rem auto 4rem auto" }}>
        <div className={styles.projectImageWrapper} style={{ aspectRatio: "16/9", maxWidth: "1000px", margin: "0 auto" }}>
          <Image 
            src="/images/projects/autovest/autovest_preview.png"
            alt="Steering wheel of a luxury car"
            fill
            className={styles.projectImage}
            sizes="(max-width: 1000px) 100vw, 1000px"
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.avScriptFlow}>
          <div className={styles.sectionLabel}>Writing for the ear</div>
          <div className={styles.avDialog}>
            “Can you imagine making as high as 20% profit in just five months from an investment in automobiles?”
          </div>
          <div className={styles.avResponse}>
            “I can assure you that I didn’t make this up, though. Honestly.”
          </div>
          <div className={styles.ieBody}>
            <p>A video script has a different job from copy written only for the page. It has to sound natural when someone says it aloud.</p>
            <p>The opening uses a surprising claim, then immediately responds to the doubt that claim might create.</p>
          </div>
        </div>

        <div className="container" style={{ margin: "4rem auto" }}>
          <div className={styles.projectImageWrapper} style={{ aspectRatio: "3/2", maxWidth: "800px", margin: "0 auto" }}>
            <Image 
              src="/images/projects/autovest/autovest_2.png"
              alt="A close-up of a classic vintage car's luxurious leather steering wheel and wooden dashboard"
              fill
              className={styles.projectImage}
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
        </div>

        <div className={styles.avVoiceNote}>
          Honestly.
        </div>

        <div className={styles.avScriptFlow}>
          <div className={styles.ieBody}>
            <p>On the page, it is one word. Spoken aloud, it becomes a pause. A small reassurance. A shift from the surprising opening into something more conversational. The script continues in that voice.</p>
          </div>
          <div className={styles.avDialog} style={{marginTop: "2rem"}}>
            “Just sit back and relax. Let me clue you in on how they make this magic happen.”
          </div>
        </div>

        <div className={styles.avScriptFlow}>
          <div className={styles.sectionLabel}>Making the idea easier to follow</div>
          <div className={styles.avSequence}>
            <div className={styles.avStep}>
              <div className={styles.metaLabel}>Step 01</div>
              <div className={styles.ieHeadline}>Join the investment community</div>
            </div>
            <div className={styles.avStep}>
              <div className={styles.metaLabel}>Step 02</div>
              <div className={styles.ieHeadline}>Find the opportunities</div>
              <div className={styles.ieFeaturedExcerpt}>“With their combined expertise and experience, they know how and where to get the best auto deals with your money.”</div>
            </div>
            <div className={styles.avStep}>
              <div className={styles.metaLabel}>Step 03</div>
              <div className={styles.ieHeadline}>Sell at a higher price</div>
              <div className={styles.ieFeaturedExcerpt}>“From there, it’s just a simple step to sell those vehicles at higher prices.”</div>
            </div>
            <div className={styles.avStep}>
              <div className={styles.metaLabel}>Step 04</div>
              <div className={styles.ieHeadline}>Return to the benefit</div>
            </div>
          </div>
        </div>

        <div className="container" style={{ margin: "4rem auto", paddingBottom: "2rem" }}>
          <div className={styles.projectImageWrapper} style={{ aspectRatio: "16/9", maxWidth: "1000px", margin: "0 auto" }}>
            <Image 
              src="/images/projects/autovest/autovest_3.png"
              alt="A cinematic, dynamic shot of a sleek classic luxury car parked on a scenic coastal road"
              fill
              className={styles.projectImage}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        </div>

        <div className={styles.avRhythmBlock}>
          <div className={styles.sectionLabel} style={{justifyContent: "center"}}>Three short beats</div>
          <span className={styles.avBeat}>It’s simple.</span>
          <span className={styles.avBeat}>It’s effective.</span>
          <span className={styles.avBeat}>And it makes you money without any stress.</span>
        </div>

        <div className={styles.projectReflection}>
          <h3 className={styles.reflectionHeading}>The page can wait. The voice cannot.</h3>
          <div className={styles.reflectionBody}>
            <p>Writing a script means thinking beyond what a sentence looks like. Where does the speaker pause? Which words need room? When does the explanation become too dense to follow? Where should the rhythm change?</p>
            <p>This piece uses questions, reassurance, direct address, and short repeated lines to keep an investment proposition moving in spoken language. The subject is financial. The voice stays conversational.</p>
          </div>
        </div>

        <div className={styles.projectNav}>
          <div>
            <div className={styles.nextProjectLabel}>Next project</div>
            <h4 className={styles.nextProjectTitle}>Short & Sharp</h4>
            <p className={styles.nextProjectTeaser}>From a full script to the few words that have to do the whole job.</p>
            <Link href="/work/short-and-sharp" className={styles.nextProjectLink}>See the collection</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ShortAndSharp() {
  return (
    <>
      <div className={styles.projectHeader}>
        <div className="container">
          <div className={styles.projectEyebrow}>Headlines, Hooks & Taglines</div>
          <h1 className={styles.projectTitle}>Short & Sharp</h1>
          <div className={styles.projectMetadata}>
            <div className={styles.metaBlock}>
              <span className={styles.metaLabel}>Work</span>
              <span className={styles.metaValue}>Short-form Copy · Headlines · Hooks · Taglines</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ margin: "2rem auto 4rem auto" }}>
        <div className={styles.projectImageWrapper} style={{ aspectRatio: "16/9", maxWidth: "1000px", margin: "0 auto" }}>
          <Image 
            src="/images/projects/short-and-sharp/short_sharp_preview.png"
            alt="A high-contrast photo of typography"
            fill
            className={styles.projectImage}
            sizes="(max-width: 1000px) 100vw, 1000px"
            priority
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.pbIntro}>
          <h2 className={styles.ieHeadline}>A few words can do a lot of work.</h2>
          <div className={styles.ieBody}>
            <p>A headline might need to stop someone. A tagline might need to stick. A hook might have only a few seconds to make the next sentence worth reading.</p>
            <p>Here are some of the shorter things I’ve written.</p>
          </div>
        </div>

        <div className={styles.ssGrid}>
          <div className={styles.ssCategory}>
            <div className={styles.ssCategoryTitle}>Make them hungry</div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>Insatiable Eats</div>
              <div className={styles.ssItemCopy}>“Experience culinary magic in the East End.”</div>
            </div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>Insatiable Eats</div>
              <div className={styles.ssItemCopy}>“The tastiest dishes, right in the East End.”</div>
            </div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>BakeTwo</div>
              <div className={styles.ssItemCopy}>“Great taste in every bite.”</div>
            </div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>BakeTwo</div>
              <div className={styles.ssItemCopy}>“Munching BakeTwo’s bagels or buns always feels like a warm cuddle.”</div>
            </div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>Dulce Crema</div>
              <div className={styles.ssItemCopy}>“Taste the yummy.”</div>
            </div>
          </div>
          
          <div className="container" style={{ margin: "2rem auto 4rem auto" }}>
            <div className={styles.projectImageWrapper} style={{ aspectRatio: "3/2", maxWidth: "800px", margin: "0 auto" }}>
              <Image 
                src="/images/projects/short-and-sharp/short_sharp_2.png"
                alt="A minimalist photograph of a vintage typewriter"
                fill
                className={styles.projectImage}
                sizes="(max-width: 800px) 100vw, 800px"
              />
            </div>
          </div>

          <div className={styles.ssCategory}>
            <div className={styles.ssCategoryTitle}>Make them look twice</div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>Rare Items</div>
              <div className={styles.ssItemCopy}>“This vintage perfume bottle can pay your mortgage.”</div>
            </div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>Rare Items</div>
              <div className={styles.ssItemCopy}>“Imagine a perfume bottle that can buy you a new house.”</div>
            </div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>Net Worth</div>
              <div className={styles.ssItemCopy}>“Regis Philbin’s insane net worth wows fans.”</div>
            </div>
            <div className={styles.ssItem}>
              <div className={styles.ssItemBrand}>Still Together</div>
              <div className={styles.ssItemCopy}>“Meryl Streep and Don Gummer still glowing.”</div>
            </div>
          </div>
        </div>

        <div className="container" style={{ margin: "4rem auto", paddingBottom: "2rem" }}>
          <div className={styles.projectImageWrapper} style={{ aspectRatio: "16/9", maxWidth: "1000px", margin: "0 auto" }}>
            <Image 
              src="/images/projects/short-and-sharp/short_sharp_3.png"
              alt="A macro close-up of bold typography printed on thick cotton paper"
              fill
              className={styles.projectImage}
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        </div>

        <div className={styles.avRhythmBlock}>
          <div className={styles.ieHeadline}>Short copy is not one kind of writing.</div>
          <div className={styles.ieBody} style={{maxWidth: "600px", margin: "1rem auto 0"}}>
            <p>Sometimes the job is appetite. Sometimes it is curiosity. Sometimes it is surprise. Sometimes it is simply finding a line that makes the next line impossible to ignore.</p>
            <p>The space may be small. The thinking usually is not.</p>
          </div>
        </div>

        <div className={styles.osLargeLine} style={{textAlign: "center"}}>
          Small spaces. Very little room for wasted words.
        </div>

        <div className={styles.projectNav}>
          <div>
            <div className={styles.nextProjectLabel}>Back to the beginning</div>
            <h4 className={styles.nextProjectTitle}>Insatiable Eats</h4>
            <p className={styles.nextProjectTeaser}>From a handful of words back to a full appetite.</p>
            <Link href="/work/insatiable-eats" className={styles.nextProjectLink}>Read the project</Link>
          </div>
        </div>
      </div>
    </>
  );
}

// --- Main Page Component ---

export async function generateStaticParams() {
  return [
    { slug: "insatiable-eats" },
    { slug: "power-of-blue" },
    { slug: "gemba-walk" },
    { slug: "online-shop" },
    { slug: "autovest" },
    { slug: "short-and-sharp" },
  ];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <main className={styles.projectPage}>
      {slug === "insatiable-eats" && <InsatiableEats />}
      {slug === "power-of-blue" && <PowerOfBlue />}
      {slug === "gemba-walk" && <GembaWalk />}
      {slug === "online-shop" && <OnlineShop />}
      {slug === "autovest" && <Autovest />}
      {slug === "short-and-sharp" && <ShortAndSharp />}
      {![
        "insatiable-eats",
        "power-of-blue",
        "gemba-walk",
        "online-shop",
        "autovest",
        "short-and-sharp"
      ].includes(slug) && notFound()}
    </main>
  );
}
