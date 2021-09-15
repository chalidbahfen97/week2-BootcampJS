/* NO 1 */
SELECT r.region_id, region_name, country_id, country_name FROM regions r
JOIN countries c ON r.region_id = c.region_id 
WHERE r.region_name = 'Europe'

/* NO 2 */
SELECT r.region_id, region_name, count(country_name)total_countries FROM regions r
JOIN countries c ON r.region_id = c.region_id 
GROUP BY r.region_id
ORDER BY r.region_id

/* NO 3 */
SELECT c.country_id, country_name, location_id, street_address, postal_code, city, state_province 
FROM countries c JOIN locations l ON c.country_id = l.country_id
WHERE location_id >= 2000
ORDER BY location_id DESC

/* NO 4 */
SELECT d.department_id, department_name, l.location_id FROM departments d
JOIN locations l ON d.location_id = l.location_id
WHERE l.location_id < 2000

/* NO 5 */
SELECT r.region_name, count(department_id)total_department FROM regions r
JOIN countries c ON r.region_id = c.region_id
JOIN locations l ON c.country_id = l.country_id
JOIN departments d ON l.location_id = d.location_id
GROUP BY r.region_name
ORDER BY r.region_name

/* NO 6 */
SELECT c.country_name, count(department_id)total_department FROM countries c
JOIN locations l ON c.country_id = l.country_id
JOIN departments d ON l.location_id = d.location_id
GROUP BY c.country_name
ORDER BY c.country_name

/* NO 7 */
SELECT c.country_name, count(department_id)total_department FROM countries c
JOIN locations l ON c.country_id = l.country_id
JOIN departments d ON l.location_id = d.location_id
GROUP BY c.country_name
ORDER BY c.country_name DESC 
LIMIT 1

/* NO 8 */
SELECT d.department_id, department_name, count(employee_id)total_emps FROM departments d
JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_id
ORDER BY total_emps

/* NO 9 */
SELECT d.department_id, department_name, count(employee_id)total_emps FROM departments d
JOIN employees e ON d.department_id = e.department_id
JOIN locations l ON d.location_id = l.location_id
JOIN countries c ON l.country_id = c.country_id
JOIN regions r ON c.region_id = r.region_id
WHERE r.region_id = 2
GROUP BY d.department_id
ORDER BY total_emps

/* NO.10 */
SELECT employee_id, first_name, last_name, salary,
	EXTRACT(YEAR FROM AGE(NOW(),hire_date))masa_kerja,
	CASE WHEN EXTRACT(YEAR FROM AGE(NOW(),hire_date)) >= 25 THEN salary * 5
	ELSE salary * 3
	END bonus
FROM employees

/* NO 11 */
SELECT masa_kerja,SUM(bonus)bonus_per_masa_kerja FROM (
	SELECT employee_id,first_name,last_name,salary,
		EXTRACT(YEAR FROM age(now(),hire_date)) masa_kerja,
			CASE WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 25 THEN salary * 5 
 				 WHEN EXTRACT(YEAR FROM age(now(),hire_date)) <  25 THEN salary * 2 
			END bonus
FROM employees)t
GROUP BY masa_kerja
ORDER BY masa_kerja

/* NO 12 */
SELECT SUM(mk_satu) "15 <= masa kerja <=25",
	   SUM(mk_dua) " 25 <= masa kerja <=30",
       SUM(mk_tiga) "30 <= masa kerja <=35"
FROM (SELECT 
CASE WHEN EXTRACT (YEAR FROM age(now(),hire_date)) >= 15 AND EXTRACT (YEAR FROM age(now(),hire_date)) <=25
	   THEN COUNT(employees) END mk_satu,
CASE WHEN EXTRACT (YEAR FROM age(now(),hire_date)) > 25 AND EXTRACT (YEAR FROM age(now(),hire_date)) <=30
	   THEN COUNT(employees) END mk_dua,
CASE WHEN EXTRACT(YEAR FROM age(now(),hire_date)) > 30 AND EXTRACT (YEAR FROM age(now(),hire_date)) <=35
	   THEN COUNT(employees) END mk_tiga
FROM employees
GROUP BY hire_date)t

/* NO 13 */
SELECT department_id,department_name, 
SUM(COALESCE (mk_satu,null,0)) "15 <= masa kerja <=25",
SUM(COALESCE (mk_dua,null,0)) " 25 <= masa kerja <=30",
SUM(COALESCE (mk_tiga,null,0)) "30 <= masa kerja <=35" 
FROM(
SELECT d.department_id,department_name,
CASE WHEN EXTRACT(YEAR FROM age(now(),hire_date)) >= 15 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=25
	 THEN COUNT(employee_id) END mk_satu,
CASE WHEN EXTRACT(year from age(now(),hire_date)) > 25 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=30
	 THEN COUNT(employee_id) END mk_dua,
CASE WHEN EXTRACT(YEAR FROM age(now(),hire_date)) > 30 AND EXTRACT(YEAR FROM age(now(),hire_date)) <=35
	 THEN COUNT(employee_id) END mk_tiga
FROM employees e
JOIN departments d ON e.department_id = d.department_id 
GROUP BY d.department_id,department_name,hire_date)t
GROUP BY department_id,department_name
ORDER BY department_name