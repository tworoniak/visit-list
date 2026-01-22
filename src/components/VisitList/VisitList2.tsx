// import type { Visit } from "../types";
import { useState } from "react";
import VisitItem from "../VisitItem/VisitItem";
import FilterInput from "../FilterInput/FilterInput";
import SortSelector from "../SortSelector/SortSelector";
import { useGetVisitsQuery } from "../../store/api/visitApi";
import styles from "./VisitList.module.scss";

const VisitList: React.FC = () => {
  const { data: visits = [], isLoading: loading, error } = useGetVisitsQuery();
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("date_desc");

  const filteredVisits = visits
    .filter((visit) => {
      return visit.patient.toLowerCase().includes(filter.toLowerCase());
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "date_asc":
          return a.date.localeCompare(b.date);
        case "date_desc":
          return b.date.localeCompare(a.date);
        default:
          return 0;
      }
    });

  return (
    <div className={styles.visit_list}>
      <h2>Visit List</h2>
      <FilterInput filter={filter} onFilterChange={setFilter} />
      <SortSelector sortBy={sortBy} onSortChange={setSortBy} />

      {loading && <p>Loading visits...</p>}
      {error && (
        <div className='error'>
          Error:{" "}
          {error && "status" in error
            ? `${error.status}`
            : error && "message" in error
              ? error.message
              : "An error occurred"}
        </div>
      )}
      <div className={styles.visit_list__content}>
        {filteredVisits.length > 0 ? (
          filteredVisits.map((visit) => (
            <VisitItem key={visit.id} visit={visit} />
          ))
        ) : (
          <p>No visits match your filter.</p>
        )}
      </div>
    </div>
  );
};

export default VisitList;
