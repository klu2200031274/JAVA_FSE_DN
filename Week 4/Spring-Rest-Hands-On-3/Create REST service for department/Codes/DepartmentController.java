package com.ctz.springlearn.controller;

import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ctz.springlearn.Department;
import com.ctz.springlearn.Service.DepartmentService;

@RestController
public class DepartmentController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DepartmentController.class);

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/departments") 
    public ArrayList<Department> getAllDepartments() {
        LOGGER.info("Start getAllDepartments");
        ArrayList<Department> departments = departmentService.getAllDepartments();
        LOGGER.info("End getAllDepartments"); 
        return departments;
    }
}
