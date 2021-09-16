CREATE TABLE t_agent(
	agent_code VARCHAR(200) NOT NULL PRIMARY KEY,
	agent_name VARCHAR(200),
	agent_office VARCHAR(200),
	basic_commission VARCHAR(200)
);

CREATE TABLE t_client(
	client_number VARCHAR(200) NOT NULL PRIMARY KEY,
	client_name VARCHAR(200),
	birth_date DATE
);

CREATE TABLE t_policy(
	policy_number INT NOT NULL PRIMARY KEY,
	policy_submit_date DATE,
	premium NUMERIC(10,2),
	discount INT,
	commission NUMERIC(10,2),
	client_number VARCHAR(200) NOT NULL,
	agent_code VARCHAR(200) NOT NULL,
	policy_status VARCHAR(200),
	policy_due_date DATE,
	FOREIGN KEY (client_number) REFERENCES t_client (client_number) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (agent_code) REFERENCES t_agent (agent_code) ON UPDATE CASCADE ON DELETE CASCADE
);

INSERT INTO t_agent VALUES
('AG001','LIDYA','JAKARTA'),
('AG002','RUDI','BALI'),
('AG003','DICKY','BALI'),
('AG004','DAVID','SURABAYA'),
('AG005','FARIZ','SURABAYA')
SELECT * FROM t_agent

INSERT INTO t_client VALUES
('CL001','WAYNE ROONEY','1956-11-5'),
('CL002','RYAN GIGGS','1972-3-9'),
('CL003','DAVID BECKHAM','1985-3-9'),
('CL004','MICHAEL OWEN','2012-3-9')
SELECT * FROM t_client

INSERT INTO t_policy VALUES
(001,'2018-5-1',18600000,10,930000,'CL001','AG001','INFORCE'),
(002,'2018-5-1',2500000,10,125000,'CL002','AG002','INFORCE'),
(003,'2018-5-10',2500000,10,125000,'CL003','AG003','TERMINATE'),
(004,'2018-5-25',4000000,10,200000,'CL003','AG002','PROPOSAL'),
(005,'2018-5-25',2625000,10,131250,'CL004','AG002','PROPOSAL')
SELECT * FROM t_policy

/* NO A */
SELECT p.policy_submit_date, c.birth_date FROM t_policy p
JOIN t_client c ON p.client_number = c.client_number
WHERE EXTRACT (MONTH from c.birth_date) = 9 AND p.policy_submit_date > '2018-01-15'

/* NO B */
SELECT * FROM t_policy p
JOIN t_agent a ON p.agent_code = a.agent_code
WHERE p.policy_status = 'INFORCE' AND a.agent_office = 'JAKARTA'

/* NO C */
UPDATE t_agent a SET a.basic_commission = (t_policy.commission / t_policy.premium) * 100 WHERE a.agent_code = 'AG001'
UPDATE t_agent a SET a.basic_commission = (t_policy.commission / t_policy.premium) * 100 WHERE a.agent_code = 'AG002'
UPDATE t_agent a SET a.basic_commission = (t_policy.commission / t_policy.premium) * 100 WHERE a.agent_code = 'AG003'
UPDATE t_agent a SET a.basic_commission = (t_policy.commission / t_policy.premium) * 100 WHERE a.agent_code = 'AG004'
UPDATE t_agent a SET a.basic_commission = (t_policy.commission / t_policy.premium) * 100 WHERE a.agent_code = 'AG005'

/* NO D */
UPDATE t_policy SET policy_due_date = policy_submit_date + INTERVAL '30 DAY' WHERE policy_number = 001
UPDATE t_policy SET policy_due_date = policy_submit_date + INTERVAL '30 DAY' WHERE policy_number = 002
UPDATE t_policy SET policy_due_date = policy_submit_date + INTERVAL '30 DAY' WHERE policy_number = 003
UPDATE t_policy SET policy_due_date = policy_submit_date + INTERVAL '30 DAY' WHERE policy_number = 004
UPDATE t_policy SET policy_due_date = policy_submit_date + INTERVAL '30 DAY' WHERE policy_number = 005

/* NO E */
SELECT SUM((premium * discount)/100)produksi_agent FROM t_policy
ORDER BY produksi_agent