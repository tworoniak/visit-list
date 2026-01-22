import styles from "./FilterInput.module.scss";

interface FilterInputProps {
  filter: string;
  placeholder: string;
  onFilterChange: (filter: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({
  filter,
  placeholder,
  onFilterChange,
}) => {
  return (
    <div className={styles.filter}>
      <input
        type='text'
        name='filter'
        placeholder={placeholder}
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
