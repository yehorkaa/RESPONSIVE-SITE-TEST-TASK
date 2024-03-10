import Box from "../../ui/Box/Box";
import Logo from "./Logo";
import styles from "./Header.module.scss";
import Link from "../../ui/Link/Link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header_inner}>
          <a className="logo" href="/">
            <Logo width={104} height={26} />
          </a>
          <Box type="horiz" className={styles.buttons_group}>
            <Link className="btn-primary" href="#users">
              <span>Users</span>
            </Link>
            <Link className="btn-primary"  href="#signup">
              <span>Sign up</span>
            </Link>
          </Box>
        </div>
      </div>
    </header>
  );
};

export default Header;
