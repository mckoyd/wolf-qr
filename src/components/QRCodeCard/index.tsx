import Image from "next/image";
import { content } from "./config";
import styles from "./styles.module.css";

interface IQRCodeCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

/**
 * QRCodeCard Component
 *
 * A card so simple, yet I'm using:
 * - TS interfaces
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
    <article className={styles.card} aria-label="QR Code Card" role="region">
      <div className={styles.imageWrapper}>
        <Image
          src={content.imageSrc}
          alt={content.imageAlt}
          width={288}
          height={288}
          className={styles.image}
          priority
          quality={100}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.description}>{content.description}</p>
      </div>
    </article>
  );
};

export default QRCodeCard;
