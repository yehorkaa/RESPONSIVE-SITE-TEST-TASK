import Box from "../../ui/Box/Box";
import Title from "../../ui/Title/Title";
import Link from "../../ui/Link/Link";
import styles from "./IntroSection.module.scss";

const IntroSection = () => {
  return (
    <section>
      <div className="container">
        <div className={styles.intro_bg}>
          <Box type="vert" className={styles.intro_content}>
            <Title className="h-primary-white" tag='h1'>
              Test assignment for front-end developer
            </Title>
            <p className="p-primary-white">
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </p>
            <Link className="btn-primary"  href="#signup">
              <span>Sign up</span>
            </Link>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
