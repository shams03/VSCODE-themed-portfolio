import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Shams Zaman</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Mumbai, India. I primarily
              work with Go , JavaScript / TypeScript and the React ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on full stack web development alongside learning new DevOps concepts .
              My latest learning was Generative Ai .
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Techsharthi Consultancy Services</span> as
              Software Engineer Intern, working with a lean team of 2 frontend
              engineers and 1 backend engineer to build a techsharthi.ai , an all purpose AI web-app  .
            </p>
            <p className={styles.paragraph}>
              Hyderabad , India
            </p>

            <p className={styles.paragraph}>
              <span className={styles.highlight}> Swapdigit IT services</span> 
              Software Engineer Intern, worked on frontend in react , bug fixing alongside building a logging and monitoring system using prometheus and grafana .
            </p>
            <p className={styles.paragraph}>
              UP , India
            </p>
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}></span>,{' '}
              <span className={styles.highlight}></span>,{' '}
            </p>
          </section> */}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read a good
              dystopian novel, binge series and anime , listen to calm piano music or just laze around.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
