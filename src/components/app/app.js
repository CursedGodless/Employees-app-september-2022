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
		let data = [
			{ name: 'John K.', salary: '1032', id: 0, increase: false, rise: false },
			{ name: 'Barbara D.', salary: '2034', id: 1, increase: false, rise: false },
			{ name: 'Alex A.', salary: '921', id: 2, increase: false, rise: false },
		];
		if (localStorage.getItem('data')) {
			data = JSON.parse(localStorage.getItem('data'));
		}

		this.state = {
			data: data,
			term: '',
			filter: 'all'
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

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				} else {
					return item;
				}
			})
		}))
	}

	searchEmp = (term, data) => {
		if (term === '') return data;
		return data.filter(item => item.name.indexOf(term) > -1)
	}

	onSearch = (e) => {
		this.setState({ term: e.target.value })
	}

	filterEmps = (filter, data) => {
		switch (filter) {
			case 'rise':
				return data.filter(item => item.rise);
			case 'moreThan1000':
				return data.filter(item => item.salary >= 1000);
			case 'all':
			default:
				return data
		}
	}

	onFilter = (e) => {
		this.setState({ filter: e.target.getAttribute('data-filter') })
	}

	render() {
		const { data, term, filter } = this.state;
		const totalEmp = data.length;
		const increased = data.filter(item => item.increase).length;
		const visibleData = this.filterEmps(filter, this.searchEmp(term, data))
		localStorage.setItem('data', JSON.stringify(data));

		return (
			<div className="app">
				<AppInfo totalEmp={totalEmp} increased={increased} />

				<div className="search-panel">
					<SearchPanel onSearch={this.onSearch} inputValue={term} />
					<AppFilter onFilter={this.onFilter} filter={filter} />
				</div>

				<EmployeesList data={visibleData} onDelete={this.onDelete} onToggleProp={this.onToggleProp} />
				<EmployeesAddForm onAdd={this.addEmployee} />
			</div>
		);
	}
}


export default App;
