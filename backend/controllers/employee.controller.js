const Employee = require("../models/employee");

const EmployeeController = {};

EmployeeController.getEmployees = async (req, res) => {
  // Esta es una manera de decir que busque todos los empleados
  const employees = await Employee.find();
  res.json(employees);
};

EmployeeController.getEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = await Employee.findById(id);
  res.json(employee);
};

EmployeeController.createEmployee = async (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  // El guardado en la db toma tiempo
  await employee.save();
  res.json({
    status: "Employee Saved",
  });
};

EmployeeController.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const employee = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  };
  await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
  res.json({
    status: "Employee Update",
  });
};

EmployeeController.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  await Employee.findByIdAndRemove(id);
  res.json({
    status: "Employee Deleted",
  });
};

module.exports = EmployeeController;
