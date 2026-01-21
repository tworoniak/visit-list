interface FilterInputProps {
  filter: string;
  onFilterChange: (filter: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ filter, onFilterChange }) => {
  return (
    <div className='filter w-full'>
      <input
        type='text'
        name='filter'
        placeholder='Filter patients...'
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
