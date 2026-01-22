import type { Visit } from "../../types";
import styles from "./VisitItem.module.scss";

const VisitItem = ({ visit }: { visit: Visit }) => {
  const getCategoryClass = () => {
    switch (visit.category) {
      case "A":
        return styles["visit_item--category-a"];
      case "B":
        return styles["visit_item--category-b"];
      case "C":
        return styles["visit_item--category-c"];
      case "D":
        return styles["visit_item--category-d"];
      default:
        return "";
    }
  };

  return (
    <div className={`${styles.visit_item} ${getCategoryClass()}`}>
      <p className={styles.visit_item__text}>Patient Name: {visit.patient}</p>
      <p className={styles.visit_item__text}>
        Visit Date: {new Date(visit.date).toLocaleDateString()}
      </p>
      <p className={styles.visit_item__text}>
        Patient Category: {visit.category}
      </p>
    </div>
  );
};

export default VisitItem;
