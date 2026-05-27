import './Filter.css'

function FilterButton({ filterName, currentFilter, onClick }) {
  return (
    <button className={`filter-pill ${filterName === currentFilter ? 'active' : ''}`}
      onClick={onClick}
    >{filterName}</button>
  );
}

export default FilterButton;