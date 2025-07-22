package com.ctz.springlearn.Service;



import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ctz.springlearn.Employee;
import com.ctz.springlearn.Dao.EmployeeDao;

@Service // [cite: 25]
public class EmployeeService {

    @Autowired
    private EmployeeDao employeeDao;

    public ArrayList<Employee> getAllEmployees() { // [cite: 26]
        return employeeDao.getAllEmployees();
    }
}
