import "./app-filter.css";

const AppFilter = ({ onFilter, filter }) => {
	const btnsData = [
		{ name: 'all', text: 'Все сотрудники' },
		{ name: 'rise', text: 'На повышение' },
		{ name: 'moreThan1000', text: 'З/П больше 1000$' },
	]
	const btns = btnsData.map(({ name, text }) => {
		const active = filter === name;
		const clazz = active ? 'btn-light' : 'btn-outline-light'
		return <button type="button"
			className={`btn ${clazz}`} data-filter={name} key={name} onClick={onFilter}>{text}</button>
	})
	return (
		<div className="btn-group">
			{btns}
		</div>
	)
}

export default AppFilter;
