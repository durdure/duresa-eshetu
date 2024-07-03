import styles from "./FooterStyles.module.css"

function Footer() {
    return (
      <section id="footer" className={styles.footerContainer}>
        <p>
          &copy;2024 Duresa Eshetu.<br />
          All rights reserved.
        </p>
      </section>
    );
  }
  
  export default Footer;