import styles from "./SortSelector.module.scss";

interface SortSelectorProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ sortBy, onSortChange }) => {
  return (
    <div className={styles.controls}>
      <label htmlFor='sort'>
        Sort By:{" "}
      </label>
      <select
        id='sort'
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value='date_desc'>Date (Desc)</option>
        <option value='date_asc'>Date (Asc)</option>
      </select>
    </div>
  );
};

export default SortSelector;
