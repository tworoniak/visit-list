// import type { Visit } from "../types";
import { useState } from "react";
import VisitItem from "./VisitItem";
import FilterInput from "./FilterInput";
import SortSelector from "./SortSelector";
import { useGetVisitsQuery } from "../store/api/visitApi";

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
    <div className='bg-gray-400 rounded-lg p-4 text-center flex flex-col items-center gap-4'>
      <h2 className='text-2xl font-semibold text-gray-600 '>Visit List</h2>
      <FilterInput filter={filter} onFilterChange={setFilter} />
      <SortSelector sortBy={sortBy} onSortChange={setSortBy} />

      {loading && <p>Loading visits...</p>}
      {error && <div className='error'>Error: {error}</div>}
      {filteredVisits.length > 0 ? (
        filteredVisits.map((visit) => (
          <VisitItem key={visit.id} visit={visit} />
        ))
      ) : (
        <p>No visits match your filter.</p>
      )}
    </div>
  );
};

export default VisitList;
