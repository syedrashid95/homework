-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "departments" (
    "dept_no" INTEGER   NOT NULL,
    "dept_name" VARCHAR   NOT NULL,
    CONSTRAINT "pk_departments" PRIMARY KEY (
        "dept_no"
     )
);

CREATE TABLE "dept_emp" (
    "emp_no" INT   NOT NULL,
    "dept_no" VARCHAR(10)   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL
);

CREATE TABLE "Employees" (
    "emp_no" INT   NOT NULL,
    "birth_date" DATE   NOT NULL,
    "gender" varchar(1)   NOT NULL,
    "First_Name" VARCHAR(30)   NOT NULL,
    "Last_Name" VARCHAR   NOT NULL,
    "hire_date" date   NOT NULL,
    CONSTRAINT "pk_Employees" PRIMARY KEY (
        "emp_no"
     )
);

CREATE TABLE "Titles" (
    "emp_no" INTEGER   NOT NULL,
    "title" varchar(30)   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL,
    CONSTRAINT "pk_Titles" PRIMARY KEY (
        "emp_no"
     )
);

CREATE TABLE "Salaries" (
    "emp_no" int   NOT NULL,
    "salary" decimal   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL,
    CONSTRAINT "pk_Salaries" PRIMARY KEY (
        "emp_no"
     )
);

CREATE TABLE "Dept_Managers" (
    "dept_no" int   NOT NULL,
    "emp_no" varchar(10)   NOT NULL,
    "from_date" date   NOT NULL,
    "to_date" date   NOT NULL,
    CONSTRAINT "pk_Dept_Managers" PRIMARY KEY (
        "dept_no"
     )
);

ALTER TABLE "dept_emp" ADD CONSTRAINT "fk_dept_emp_emp_no" FOREIGN KEY("emp_no")
REFERENCES "Employees" ("emp_no");

ALTER TABLE "dept_emp" ADD CONSTRAINT "fk_dept_emp_dept_no" FOREIGN KEY("dept_no")
REFERENCES "departments" ("dept_no");

ALTER TABLE "Employees" ADD CONSTRAINT "fk_Employees_emp_no" FOREIGN KEY("emp_no")
REFERENCES "Employees" ("emp_no");

ALTER TABLE "Titles" ADD CONSTRAINT "fk_Titles_emp_no" FOREIGN KEY("emp_no")
REFERENCES "Employees" ("emp_no");

ALTER TABLE "Salaries" ADD CONSTRAINT "fk_Salaries_emp_no" FOREIGN KEY("emp_no")
REFERENCES "Employees" ("emp_no");

ALTER TABLE "Dept_Managers" ADD CONSTRAINT "fk_Dept_Managers_dept_no" FOREIGN KEY("dept_no")
REFERENCES "Employees" ("emp_no");

