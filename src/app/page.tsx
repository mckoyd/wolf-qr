import QRCodeCard from "@/components/QRCodeCard";
import styles from "./page.module.css";

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <h1 className="sr-only">Wolf's QR Code Component</h1>
      <QRCodeCard />
    </main>
  );
};

export default Home;
