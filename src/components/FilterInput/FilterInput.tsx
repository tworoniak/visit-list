import styles from "./FilterInput.module.scss";

type FilterInputProps = {
  filter: string;
  placeholder: string;
  onChange: (filter: string) => void;
};

const FilterInput = ({ filter, placeholder, onChange }: FilterInputProps) => {
  return (
    <div className={styles.filter}>
      <input
        type='text'
        name='filter'
        placeholder={placeholder}
        value={filter}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
