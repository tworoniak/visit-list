import { useState } from "react";
import VisitItem from "../VisitItem/VisitItem";
import FilterInput from "../FilterInput/FilterInput";
import Loader from "../Loader/Loader";
import EmptyStateAnimation from "../EmptyStateAnimation/EmptyStateAnimation";
import { useGetVisitsQuery } from "../../store/api/visitApi";
import styles from "./VisitList.module.scss";
import { AnimatePresence, motion } from "motion/react";

const VisitList: React.FC = () => {
  const {
    data: visits = [],
    isLoading: loading,
    error,
    refetch,
  } = useGetVisitsQuery();

  console.log(visits);

  const [filter, setFilter] = useState("");

  const filteredVisits = visits
    .filter((visit) =>
      visit.patient.toLowerCase().includes(filter.toLowerCase()),
    )
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className={styles.visit_list}>
      <h2>Visit List</h2>
      <FilterInput
        filter={filter}
        placeholder='Filter patients by name...'
        onChange={setFilter}
      />

      {loading && <Loader />}

      {error && (
        <div className={styles.visit_list__error}>
          <p>
            Error:{" "}
            {error && "status" in error
              ? `${error.status}`
              : error && "message" in error
                ? error.message
                : "An error occurred"}
          </p>
          <button
            onClick={() => refetch()}
            className={styles.visit_list__errorbutton}
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && filteredVisits.length === 0 && (
        <EmptyStateAnimation />
      )}

      <AnimatePresence mode='wait'>
        <motion.div layout className={styles.visit_list__content}>
          {!loading &&
            !error &&
            filteredVisits.length > 0 &&
            filteredVisits.map((visit) => (
              <motion.div layout key={visit.id}>
                <VisitItem visit={visit} />
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default VisitList;
