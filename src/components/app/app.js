import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{ name: 'John K.', salary: '1032', id: 0, increase: false },
				{ name: 'Barbara D.', salary: '2034', id: 1, increase: false },
				{ name: 'Alex A.', salary: '921', id: 2, increase: true },
			],
		}
		this.maxId = 3;
	}

	onDelete = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	addEmployee = ({ name, salary }) => {
		const newEmp = {
			name,
			salary,
			increase: false,
			id: this.maxId++
		}
		this.setState(({ data }) => ({
			data: [...data, newEmp]
		}))
	}

	render() {
		const { data } = this.state;
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList data={data} onDelete={this.onDelete} />
				<EmployeesAddForm onAdd={this.addEmployee}/>
			</div>
		);
	}
}


export default App;
