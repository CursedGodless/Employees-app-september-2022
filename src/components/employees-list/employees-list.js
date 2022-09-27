import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {
	const { data, onDelete } = props
	const employees = data.map((item) => {
		return <EmployeesListItem {...item} key={item.id} onDelete={() => onDelete(item.id)} />
	})
	return (
		<ul className="app-list list-group">
			{employees}
		</ul>
	)
}

export default EmployeesList;