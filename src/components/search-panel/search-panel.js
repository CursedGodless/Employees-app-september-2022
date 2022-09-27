import './search-panel.css';

const SearchPanel = ({ onSearch, inputValue }) => {
	return (
		<input type="text"
			className="form-control search-input"
			placeholder="Найти сотрудника"
			onChange={onSearch}
			value={inputValue} />
	)
}

export default SearchPanel;