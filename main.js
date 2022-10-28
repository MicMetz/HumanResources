import {Employee} from "./schema/employee.js";
import {Company} from "./schema/company.js";



class ServerSimulation {
    constructor() {
        this.dataURL = './data.json';
        this.data = [];
        this.employees = [];
        this.company = new Company();
        this.employeesQueried = 0;
        this.companies = [];

        this.query = '';
        this.table = document.getElementById('employeeTable');
        // this.table.innerHTML = '';
        // this.init();
    }


    init() {
        this.loadData(this);
        // console.log(this.data);
        this.buildcontainers();
    }


    queryData(query) {
        var result = [];
        for (var i = 0; i < this.data.length; i++) {
            if (this.data.company[0].employees[i].firstName === query) {
                result.push(this.data.employees[i]);
            }
        }
        return result;
    }


    buildTable() {
        let body = document.getElementById('employeeTableBody');
        this.employees.forEach((employee) => {
            console.log(employee.firstName);
            body.innerHTML += `<tr>
              <theader>${this.company.name}</theader>
              </tr>;
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.department}</td>
                <td>${employee.designation}</td>
                <td>${employee.salary}</td>
                <td>${employee.raiseEligible}</td>
            </tr>`;
        });
    }


    loadData(callback) {
        var self = this;
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                self.data = JSON.parse(xhr.responseText);
                console.log(self.data);
            }
        }.bind(self);

        xhr.open('GET', this.dataURL, false);
        xhr.send();
    }


    buildcontainers() {
        this.company.name = this.data.company[0].companyName;
        console.log(this.company.name);
        for (var i = 0; i < this.data.company[0].employees.length; i++) {
            const employee = new Employee(this.data.company[0].employees[i].firstName,
                this.data.company[0].employees[i].department,
                this.data.company[0].employees[i].designation,
                this.data.company[0].employees[i].salary,
                this.data.company[0].employees[i].raiseEligible);
            this.employees.push(employee);
            // console.log(employee.firstName);
        }
        this.company.employees = this.employees;
    }


    resetSearch() {
        this.query = '';
        this.buildTable(this.data);
    }


    addEmployee(value) {
        this.employees.push(value);
    }


    saveData() {

    }
}


init();

function init() {
    var server = new ServerSimulation();
    server.init();
    server.buildTable();

    var addModal = document.getElementById('addModal');
    addModal.addEventListener('clickOff', function () {
        console.log('clicked off');
    });
    addModal.addEventListener('click', function (buttonClicked) {
        if (buttonClicked.target.id === 'btn-add-submit') {
            console.log('submit action test');
        }

        if (buttonClicked.target.id === 'btn-add-dismiss') {
            console.log('dismiss action test');
            addModal.style.display = 'none';
            addModal.style.opacity = "0";
        }
    });

    var removeModal = document.getElementById('removeModal');
    removeModal.addEventListener('click', function (buttonClicked) {
        if (buttonClicked.target.id === 'btn-remove-submit') {
            console.log('submit action test');
        }

        if (buttonClicked.target.id === 'btn-remove-dismiss') {
            console.log('dismiss action test');
            removeModal.style.display = 'none';
            removeModal.style.opacity = "0";
        }
    });

    var editModal = document.getElementById('editModal');
    editModal.addEventListener('click', function (buttonClicked) {
        if (buttonClicked.target.id === 'btn-edit-submit') {
            console.log('submit action test');
        }

        if (buttonClicked.target.id === 'btn-edit-dismiss') {
            console.log('dismiss action test');
            editModal.style.display = 'none';
            editModal.style.opacity = "0";
        }
    });


    var searchButton = document.getElementById('searchButton');
    var searchBar = document.getElementById('searchField');
    searchButton.addEventListener('click', function () {
        var query = searchBar.value;
        var result = server.queryData(query);
        server.buildTable(result);
    });

    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function () {
        var table = document.getElementById('employeeTable');
        table.innerHTML = '';
        server.resetSearch();
    });

    var addEmployeeButton = document.getElementById('addEmployeeButton');
    addEmployeeButton.addEventListener('click', function () {
        addModal.style.display = 'block';
        addModal.style.opacity = '1';
    });

    var removeEmployeeButton = document.getElementById('removeEmployeeButton');
    removeEmployeeButton.addEventListener('click', function () {
        removeModal.style.display = 'block';
        removeModal.style.opacity = '1';
    });

    var editEmployeeButton = document.getElementById('editEmployeeButton');
    editEmployeeButton.addEventListener('click', function () {
        editModal.style.display = 'block';
        editModal.style.opacity = '1';
    });


}


$('body').on('click', function (e) {
    if ($(e.target).closest('#addModal').length !== 0) {
        $('#addModal').hide();
    }

    if ($(e.target).closest('#removeModal').length !== 0) {
        $('#removeModal').hide();
    }

    if ($(e.target).closest('#editModal').length !== 0) {
        $('#editModal').hide();
    }
});


