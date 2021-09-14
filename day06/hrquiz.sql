/*NO 1 */
CREATE TABLE projects (
	proj_id SERIAL PRIMARY KEY,
	proj_name VARCHAR(100),
	proj_createdon DATE,
	proj_duedate DATE,
	proj_cust_name varchar(100)
);

CREATE TABLE project_assignment(
	pras_proj_id INTEGER,
	pras_employee_id INTEGER,
	pras_startdate DATE,
	pras_enddate DATE,
	pras_status VARCHAR (15),
	PRIMARY KEY (pras_proj_id , pras_employee_id),
	FOREIGN KEY (pras_proj_id) REFERENCES projects (proj_id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (pras_employee_id) REFERENCES employees (employee_id) ON UPDATE CASCADE ON DELETE CASCADE
);

/* NO 2 */
ALTER TABLE projects
ADD COLUMN proj_description VARCHAR (255),
ADD COLUMN proj_status VARCHAR (15),
ADD COLUMN proj_amount NUMERIC (8, 2)

/* NO 3 */
ALTER TABLE projects
ADD COLUMN proj_account_mgr INTEGER

ALTER TABLE projects
ADD CONSTRAINT fk_projaccountmgr 
      FOREIGN KEY (proj_account_mgr) 
      REFERENCES employees (employee_id);
	  
/* NO 4 */
INSERT INTO projects VALUES
(1,'E-COMMERCE',NOW(),NOW() + INTERVAL '30 DAY','TELKOMSEL','INPROGRESS','INPROGRESS',35000,104),
(2,'TRAVELOKA',NOW(),NOW() + INTERVAL '30 DAY','XL','INPROGRESS','INPROGRESS',50000,105),
(3,'TIKET.COM',NOW(),NOW() + INTERVAL '30 DAY','INDOSAT','INPROGRESS','INPROGRESS',55000,106)

SELECT * FROM projects

/* NO 5 */
INSERT INTO project_assignment VALUES
(1,104,NOW(),NULL,'ASSIGNED'),
(2,105,NOW(),NOW() + INTERVAL '3 DAY','COMPLETED'),
(3,106,NOW(),NULL,'INPROGRESS'),
(4,104,NOW(),NULL,'ASSIGNED'),
(5,105,NOW(),NOW() + INTERVAL '3 DAY','COMPLETED'),
(6,106,NOW(),NOW() + INTERVAL '3 DAY','INPROGRESS')

SELECT * FROM project_assignment

/* NO 6 */
SELECT employees.employee_id, employees.first_name, employees.last_name, project_assignment.pras_status
FROM employees INNER JOIN project_assignment ON employees.employee_id = project_assignment.pras_employee_id
WHERE project_assignment.pras_status = 'COMPLETED'