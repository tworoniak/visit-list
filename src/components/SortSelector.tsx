const SortSelector = ({ sortBy, onSortChange }) => {
  return (
    <div className='controls '>
      <label htmlFor='sort' className='text-gray-600'>
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
