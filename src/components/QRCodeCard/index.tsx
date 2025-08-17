import Image from "next/image";
import { content } from "./config";
import styles from "./styles.module.css";

/**
 * QRCodeCard Component
 *
 * A card so simple, yet I'm using:
 * - CSS Modules
 * - Next.js Image Optimization
 * - Semantic HTML
 * - ARIA Labels
 *
 * For what is pretty much a div with an image and two text blocks.
 * This is the way.
 */

const QRCodeCard: React.FC = () => {
  return (
    <section className={styles.card} aria-labelledby="qr-title" role="region">
      <div className={styles.imageWrapper}>
        <Image
          src={content.imageSrc}
          alt={content.imageAlt}
          fill
          className={styles.image}
          priority
          quality={100}
        />
      </div>

      <div className={styles.content}>
        <h2 id="qr-title" className={styles.title}>
          {content.title}
        </h2>
        <p className={styles.description}>{content.description}</p>
      </div>
    </section>
  );
};

export default QRCodeCard;
