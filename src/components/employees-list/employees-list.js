import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
	const { data, onDelete, onToggleProp } = props
	const employees = data.map((item) => {
		return <EmployeesListItem {...item} key={item.id} onDelete={() => onDelete(item.id)} onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))} />
	})
	return (
		<ul className="app-list list-group">
			{employees}
		</ul>
	)
}

export default EmployeesList;