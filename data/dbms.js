window.quizData = window.quizData || {};
window.quizData.dbms = [
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Hard",
    "question": "Which normal form deals with multi-valued dependencies?",
    "options": [
      "Third Normal Form (3NF)",
      "Fourth Normal Form (4NF)",
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)"
    ],
    "answer": 1,
    "explanation": "4NF removes multi-valued dependencies."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Easy",
    "question": "Under ACID properties, which property ensures that all operations within a database transaction are completed successfully or none are?",
    "options": [
      "Atomicity",
      "Isolation",
      "Consistency",
      "Durability"
    ],
    "answer": 0,
    "explanation": "Atomicity is the \"all-or-nothing\" rule of transactions."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Medium",
    "question": "Which database index structure is typically preferred for range query scans over disk blocks?",
    "options": [
      "Binary Search Tree",
      "B+ Tree",
      "Hash Index",
      "AVL Tree"
    ],
    "answer": 1,
    "explanation": "B+ Trees store values sequentially in leaf nodes linked together, optimizing range read access."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Medium",
    "question": "The SQL query \"SELECT name FROM Employees GROUP BY name HAVING count(*) > 1\" behaves as:",
    "options": [
      "Finds employees who have worked on more than 1 project (widely accepted)",
      "Lists all employee names once in typical implementations",
      "Filters out unique names and lists only names that appear multiple times.",
      "Triggers a syntax error since HAVING requires WHERE (typical scenario)"
    ],
    "answer": 2,
    "explanation": "GROUP BY aggregates by name, and HAVING filters groups where the count is greater than 1."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Medium",
    "question": "What does a database transaction constraint \"ON DELETE CASCADE\" enforce?",
    "options": [
      "Sets foreign key values in child rows to default constants in practice",
      "Prevents deletion of parent rows in typical implementations",
      "Disables referential integrity bounds during deletion (commonly used)",
      "Automatically deletes child rows when the parent row is deleted."
    ],
    "answer": 3,
    "explanation": "ON DELETE CASCADE propagates parent deletions down to referencing foreign key rows."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Easy",
    "question": "In MongoDB, what is the document storage container equivalent to a relational Database Table?",
    "options": [
      "View in practice",
      "Schema",
      "Document",
      "Collection"
    ],
    "answer": 3,
    "explanation": "In NoSQL database systems, collections hold multiple documents (equivalent to rows)."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Easy",
    "question": "What is an index in databases primarily used for?",
    "options": [
      "To encrypt table contents (typical scenario)",
      "To enforce primary key uniqueness constraints only",
      "To shrink physical disc storage footprint",
      "To speed up data retrieval operations."
    ],
    "answer": 3,
    "explanation": "Indices act like book indices, allowing rows to be searched without full table scans."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Easy",
    "question": "Which concurrency control lock level permits concurrent read operations but prevents write operations?",
    "options": [
      "Exclusive Lock (X-Lock)",
      "Shared Lock (S-Lock)",
      "Implicit Lock in practice",
      "Intent Lock by design"
    ],
    "answer": 1,
    "explanation": "Shared locks allow readers to access data in parallel, blocking writers."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Easy",
    "question": "A direct constraint mapping between a Primary Key and a Foreign Key represents:",
    "options": [
      "Domain Integrity",
      "Referential Integrity",
      "Entity Integrity",
      "Key Value Isolation"
    ],
    "answer": 1,
    "explanation": "Referential integrity requires that pointer FK values must exist in the target PK column."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Easy",
    "question": "In SQL, which join type returns all rows from the left table and only matching rows from the right table?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL JOIN",
      "INNER JOIN"
    ],
    "answer": 0,
    "explanation": "LEFT JOIN preserves all entries from the left dataset, returning NULLs on the right if unmatched."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Easy",
    "question": "Which property of ACID prevents transactions from reading uncommitted modifications from other transactions?",
    "options": [
      "Consistency",
      "Atomicity",
      "Isolation",
      "Durability"
    ],
    "answer": 2,
    "explanation": "Isolation levels determine row visibility across competing operations."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Medium",
    "question": "What normal form requires all non-key attributes to be fully functionally dependent on the primary key (no partial dependencies)?",
    "options": [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)"
    ],
    "answer": 1,
    "explanation": "2NF removes partial key dependencies."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Medium",
    "question": "What does BCNF stand for in normalization theory?",
    "options": [
      "Boyce-Codd Normal Form",
      "Binary Coding Network Format",
      "Byzantine Concurrency Node Framework",
      "Balanced Cache Node Fraction"
    ],
    "answer": 0,
    "explanation": "Boyce-Codd Normal Form is a strict version of 3NF."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Medium",
    "question": "In NoSQL database architectures, what is the main benefit of document scaling over SQL databases?",
    "options": [
      "Forced strongly consistent reads natively in most cases",
      "Smaller total file system storage usage footprint",
      "Horizontal scalability with schema-less elasticity",
      "Higher normal form representation configurations"
    ],
    "answer": 2,
    "explanation": "NoSQL document models partition data horizontally across clusters easily."
  },
  {
    "subject": "DBMS",
    "topic": "DBMS",
    "difficulty": "Hard",
    "question": "Which isolation level prevents Dirty Reads but allows Non-Repeatable Reads?",
    "options": [
      "Repeatable Read",
      "Read Uncommitted",
      "Read Committed",
      "Serializable"
    ],
    "answer": 2,
    "explanation": "Read Committed ensures only committed modifications are read, but reads can vary if updated during execution."
  },
  {
    "subject": "DBMS",
    "topic": "NoSQL Databases (MongoDB)",
    "difficulty": "Medium",
    "question": "A MongoDB database contains a collection named 'users'. You run the following aggregate database query:\ndb.users.aggregate([\n  { $match: { age: { $gt: 100 } } },\n  { $group: { _id: \"$country\", averageValue: { $avg: \"$age\" } } }\n])\n\nWhat is the operational execution flow of this aggregation pipeline?",
    "options": [
      "Groups all documents in 'users' by 'country', calculates the average of age, and outputs only groups having an average greater than 100. in typical implementations",
      "Creates an index on 'country' and 'age', then aggregates and inserts filtered documents greater than 100 back into the database. in typical implementations",
      "Runs a join query matching documents in 'users' and 'country' where both tables share fields greater than 100. in typical implementations",
      "First, filters documents in 'users' where 'age' is greater than 100, then groups the remaining documents by 'country', and computes the average of the 'age' field for each group."
    ],
    "answer": 3,
    "explanation": "In MongoDB, the aggregation array executes sequentially: stage 1 ($match) filters matching documents where 'age' > 100, and stage 2 ($group) groups by '_id: $country' and outputs the average value."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 142 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "169 rows",
      "12 rows",
      "142 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 142 rows, the result contains exactly 142 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Normalization",
    "difficulty": "Hard",
    "question": "A relational schema R(A, B, C, D) is configured with the following set of Functional Dependencies:\n{ AB -> C, C -> D (Primary Key is (A, B)) }\n\nWhat is the highest normal form (Normal Form status) satisfied by this relation?",
    "options": [
      "2NF",
      "3NF (and BCNF)",
      "4NF",
      "1NF"
    ],
    "answer": 0,
    "explanation": "No partial dependencies exist because C depends on the full key AB, and D depends on C. However, C -> D is a transitive dependency (D depends on C, which is not a primary key). This violates 3NF, leaving it in 2NF."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "131 rows",
      "153 rows",
      "14 rows",
      "36 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 131 rows, the result contains exactly 131 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 2048 bytes. Each search key requires 32 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "62 children",
      "52 children",
      "64 children",
      "37 children"
    ],
    "answer": 1,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 32 <= 2048 => P * (8 + 32) - 32 <= 2048 => P * 40 <= 2080 => P <= 2080 / 40 = 52 => Max P = 52."
  },
  {
    "subject": "DBMS",
    "topic": "Transactions & Concurrency Control",
    "difficulty": "Hard",
    "question": "Read the following transaction operations execution sequence:\n\"Transaction T1 reads balance. Transaction T2 reads balance. T1 updates balance and writes it back. T2 updates balance based on its old read and writes it back, overwriting T1's change.\"\n\nWhich SQL concurrency level anomaly/conflict does this sequence represent?",
    "options": [
      "Lost Update (Write-Write Conflict)",
      "Non-Repeatable Read (Read-Write Conflict)",
      "Phantom Read (widely accepted)",
      "Dirty Read (Write-Read Conflict)"
    ],
    "answer": 0,
    "explanation": "A Lost Update happens when two transactions read the same record, and then both write updates to it, where the latter write overrides and cancels the earlier write."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "181 rows",
      "29 rows",
      "167 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 167 rows, the result contains exactly 167 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 2048 bytes. Each search key requires 16 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "86 children",
      "71 children",
      "128 children",
      "96 children"
    ],
    "answer": 0,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 16 <= 2048 => P * (8 + 16) - 16 <= 2048 => P * 24 <= 2064 => P <= 2064 / 24 = 86 => Max P = 86."
  },
  {
    "subject": "DBMS",
    "topic": "NoSQL Databases (MongoDB)",
    "difficulty": "Medium",
    "question": "A MongoDB database contains a collection named 'inventory'. You run the following aggregate database query:\ndb.inventory.aggregate([\n  { $match: { price: { $gt: 100 } } },\n  { $group: { _id: \"$category\", averageValue: { $avg: \"$price\" } } }\n])\n\nWhat is the operational execution flow of this aggregation pipeline?",
    "options": [
      "Groups all documents in 'inventory' by 'category', calculates the average of price, and outputs only groups having an average greater than 100. in typical implementations",
      "Runs a join query matching documents in 'inventory' and 'category' where both tables share fields greater than 100. in typical implementations",
      "First, filters documents in 'inventory' where 'price' is greater than 100, then groups the remaining documents by 'category', and computes the average of the 'price' field for each group.",
      "Creates an index on 'category' and 'price', then aggregates and inserts filtered documents greater than 100 back into the database. in typical implementations"
    ],
    "answer": 2,
    "explanation": "In MongoDB, the aggregation array executes sequentially: stage 1 ($match) filters matching documents where 'price' > 100, and stage 2 ($group) groups by '_id: $category' and outputs the average value."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "103 rows",
      "125 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 4096 bytes. Each search key requires 32 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "103 children",
      "88 children",
      "128 children",
      "113 children"
    ],
    "answer": 0,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 32 <= 4096 => P * (8 + 32) - 32 <= 4096 => P * 40 <= 4128 => P <= 4128 / 40 = 103.2 => Max P = 103."
  },
  {
    "subject": "DBMS",
    "topic": "Transactions & Concurrency Control",
    "difficulty": "Hard",
    "question": "Read the following transaction operations execution sequence:\n\"Transaction T1 reads row R, Transaction T2 updates row R and commits, then Transaction T1 reads row R again and finds a different value.\"\n\nWhich SQL concurrency level anomaly/conflict does this sequence represent?",
    "options": [
      "Non-Repeatable Read (Read-Write Conflict)",
      "Phantom Read (standard definition)",
      "Dirty Read (Write-Read Conflict) (general case)",
      "Lost Update (Write-Write Conflict) in most cases"
    ],
    "answer": 0,
    "explanation": "A Non-Repeatable Read occurs when a transaction retrieves the same row twice and obtains different data values because another transaction modified it in between."
  },
  {
    "subject": "DBMS",
    "topic": "NoSQL Databases (MongoDB)",
    "difficulty": "Medium",
    "question": "A MongoDB database contains a collection named 'orders'. You run the following aggregate database query:\ndb.orders.aggregate([\n  { $match: { amount: { $gt: 100 } } },\n  { $group: { _id: \"$status\", averageValue: { $avg: \"$amount\" } } }\n])\n\nWhat is the operational execution flow of this aggregation pipeline?",
    "options": [
      "Runs a join query matching documents in 'orders' and 'status' where both tables share fields greater than 100. in typical implementations",
      "Creates an index on 'status' and 'amount', then aggregates and inserts filtered documents greater than 100 back into the database. in typical implementations",
      "Groups all documents in 'orders' by 'status', calculates the average of amount, and outputs only groups having an average greater than 100. in typical implementations",
      "First, filters documents in 'orders' where 'amount' is greater than 100, then groups the remaining documents by 'status', and computes the average of the 'amount' field for each group."
    ],
    "answer": 3,
    "explanation": "In MongoDB, the aggregation array executes sequentially: stage 1 ($match) filters matching documents where 'amount' > 100, and stage 2 ($group) groups by '_id: $status' and outputs the average value."
  },
  {
    "subject": "DBMS",
    "topic": "NoSQL Databases (MongoDB)",
    "difficulty": "Medium",
    "question": "A MongoDB database contains a collection named 'reviews'. You run the following aggregate database query:\ndb.reviews.aggregate([\n  { $match: { rating: { $gt: 100 } } },\n  { $group: { _id: \"$product_id\", averageValue: { $avg: \"$rating\" } } }\n])\n\nWhat is the operational execution flow of this aggregation pipeline?",
    "options": [
      "Creates an index on 'product_id' and 'rating', then aggregates and inserts filtered documents greater than 100 back into the database. in typical implementations",
      "First, filters documents in 'reviews' where 'rating' is greater than 100, then groups the remaining documents by 'product_id', and computes the average of the 'rating' field for each group.",
      "Groups all documents in 'reviews' by 'product_id', calculates the average of rating, and outputs only groups having an average greater than 100. in typical implementations",
      "Runs a join query matching documents in 'reviews' and 'product_id' where both tables share fields greater than 100. in typical implementations"
    ],
    "answer": 1,
    "explanation": "In MongoDB, the aggregation array executes sequentially: stage 1 ($match) filters matching documents where 'rating' > 100, and stage 2 ($group) groups by '_id: $product_id' and outputs the average value."
  },
  {
    "subject": "DBMS",
    "topic": "Database Normalization",
    "difficulty": "Hard",
    "question": "A relational schema R(A, B, C, D) is configured with the following set of Functional Dependencies:\n{ A -> B, B -> C (Primary Key is A) }\n\nWhat is the highest normal form (Normal Form status) satisfied by this relation?",
    "options": [
      "3NF (and BCNF)",
      "1NF",
      "4NF",
      "2NF"
    ],
    "answer": 3,
    "explanation": "The relation has a transitive dependency A -> B -> C where C is non-prime and B is not a superkey. Thus, it contains transitive dependencies, violating 3NF, but has no partial dependencies (A is the single-attribute primary key), leaving it in 2NF."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "216 rows",
      "29 rows",
      "199 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 8192 bytes. Each search key requires 24 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "241 children",
      "266 children",
      "256 children",
      "341 children"
    ],
    "answer": 2,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 24 <= 8192 => P * (8 + 24) - 24 <= 8192 => P * 32 <= 8216 => P <= 8216 / 32 = 256.75 => Max P = 256."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "93 rows",
      "103 rows",
      "28 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 128 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "140 rows",
      "128 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "202 rows",
      "15 rows",
      "33 rows",
      "184 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 184 rows, the result contains exactly 184 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Normalization",
    "difficulty": "Hard",
    "question": "A relational schema R(A, B, C, D) is configured with the following set of Functional Dependencies:\n{ A -> B, B -> C, C -> A (Primary Key is A) }\n\nWhat is the highest normal form (Normal Form status) satisfied by this relation?",
    "options": [
      "4NF (general case)",
      "3NF (and BCNF)",
      "2NF (widely accepted)",
      "1NF (general case)"
    ],
    "answer": 1,
    "explanation": "Since A, B, and C can each act as a candidate key (due to the circular dependencies), there are no transitive or partial dependencies. Every determinant is a candidate key. Highest NF is BCNF/3NF."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "178 rows",
      "42 rows",
      "207 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 178 rows, the result contains exactly 178 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Transactions & Concurrency Control",
    "difficulty": "Hard",
    "question": "Read the following transaction operations execution sequence:\n\"Transaction T1 reads a set of rows matching search criteria, Transaction T2 inserts a new row matching those criteria and commits, then T1 executes the query again.\"\n\nWhich SQL concurrency level anomaly/conflict does this sequence represent?",
    "options": [
      "Dirty Read (Write-Read Conflict)",
      "Lost Update (Write-Write Conflict)",
      "Non-Repeatable Read (Read-Write Conflict)",
      "Phantom Read"
    ],
    "answer": 3,
    "explanation": "A Phantom Read occurs when a transaction runs a query returning a set of rows, and upon re-running, finds new \"phantom\" rows inserted by a committed concurrent transaction."
  },
  {
    "subject": "DBMS",
    "topic": "Database Normalization",
    "difficulty": "Hard",
    "question": "A relational schema R(A, B, C, D) is configured with the following set of Functional Dependencies:\n{ A -> B, C -> D (Primary Key is (A, C)) }\n\nWhat is the highest normal form (Normal Form status) satisfied by this relation?",
    "options": [
      "2NF",
      "1NF",
      "3NF (and BCNF)",
      "4NF"
    ],
    "answer": 1,
    "explanation": "The key is composite (A, C). FDs 'A -> B' and 'C -> D' exhibit partial dependencies (where part of the primary key determines a non-prime attribute). Since partial dependencies exist, it violates 2NF, leaving it in 1NF."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "172 rows",
      "147 rows",
      "39 rows",
      "14 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 147 rows, the result contains exactly 147 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Normalization",
    "difficulty": "Hard",
    "question": "A relational schema R(A, B, C, D) is configured with the following set of Functional Dependencies:\n{ A -> B, A -> C, A -> D (Primary Key is A) }\n\nWhat is the highest normal form (Normal Form status) satisfied by this relation?",
    "options": [
      "3NF (and BCNF)",
      "4NF by design",
      "2NF (general case)",
      "1NF (commonly used)"
    ],
    "answer": 0,
    "explanation": "All non-prime attributes (B, C, D) are fully and directly dependent on the primary key A (a single attribute superkey). No partial or transitive dependencies exist, meaning the relation is in 3NF and BCNF."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "153 rows",
      "34 rows",
      "168 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Transactions & Concurrency Control",
    "difficulty": "Hard",
    "question": "Read the following transaction operations execution sequence:\n\"Transaction T1 updates row R (writes R), Transaction T2 reads row R, then Transaction T1 performs a Rollback/Abort.\"\n\nWhich SQL concurrency level anomaly/conflict does this sequence represent?",
    "options": [
      "Non-Repeatable Read (Read-Write Conflict)",
      "Dirty Read (Write-Read Conflict)",
      "Lost Update (Write-Write Conflict)",
      "Phantom Read in typical implementations"
    ],
    "answer": 1,
    "explanation": "A Dirty Read occurs when a transaction reads data that has been modified by another transaction but not yet committed."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "196 rows",
      "28 rows",
      "212 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 196 rows, the result contains exactly 196 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 8192 bytes. Each search key requires 32 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "205 children",
      "256 children",
      "215 children",
      "190 children"
    ],
    "answer": 0,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 32 <= 8192 => P * (8 + 32) - 32 <= 8192 => P * 40 <= 8224 => P <= 8224 / 40 = 205.6 => Max P = 205."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 4096 bytes. Each search key requires 16 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "256 children",
      "171 children",
      "181 children",
      "156 children"
    ],
    "answer": 1,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 16 <= 4096 => P * (8 + 16) - 16 <= 4096 => P * 24 <= 4112 => P <= 4112 / 24 = 171.33333333333334 => Max P = 171."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 4096 bytes. Each search key requires 24 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "128 children",
      "138 children",
      "113 children",
      "170 children"
    ],
    "answer": 0,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 24 <= 4096 => P * (8 + 24) - 24 <= 4096 => P * 32 <= 4120 => P <= 4120 / 32 = 128.75 => Max P = 128."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "89 rows",
      "115 rows",
      "40 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 8192 bytes. Each search key requires 16 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "512 children",
      "342 children",
      "352 children",
      "327 children"
    ],
    "answer": 1,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 16 <= 8192 => P * (8 + 16) - 16 <= 8192 => P * 24 <= 8208 => P <= 8208 / 24 = 342 => Max P = 342."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 110 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "44 rows",
      "139 rows",
      "110 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 110 rows, the result contains exactly 110 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 81 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "16 rows",
      "81 rows",
      "98 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "118 rows",
      "93 rows",
      "19 rows",
      "44 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 93 rows, the result contains exactly 93 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "192 rows",
      "165 rows",
      "19 rows",
      "46 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 165 rows, the result contains exactly 165 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "178 rows",
      "17 rows",
      "27 rows",
      "168 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "172 rows",
      "33 rows",
      "152 rows",
      "13 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 152 rows, the result contains exactly 152 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "198 rows",
      "13 rows",
      "217 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 128 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "128 rows",
      "157 rows",
      "12 rows",
      "41 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "17 rows",
      "144 rows",
      "118 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 118 rows, the result contains exactly 118 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "19 rows",
      "108 rows",
      "89 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "130 rows",
      "17 rows",
      "112 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "158 rows",
      "40 rows",
      "18 rows",
      "180 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 158 rows, the result contains exactly 158 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "146 rows",
      "28 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Database Indexes & B+ Trees",
    "difficulty": "Hard",
    "question": "A database storage index uses a B+ Tree file organizational structure. Internal index nodes are stored in disk blocks size of 2048 bytes. Each search key requires 24 bytes, and child pointers require 8 bytes. Under index constraints, what is the maximum order (maximum child pointers / fan-out P) of an internal index node in this B+ Tree?",
    "options": [
      "85 children",
      "74 children",
      "49 children",
      "64 children"
    ],
    "answer": 3,
    "explanation": "Calculation for B+ Tree order P: P pointers and (P - 1) keys must fit in a single block size. Thus: P * 8 + (P - 1) * 24 <= 2048 => P * (8 + 24) - 24 <= 2048 => P * 32 <= 2072 => P <= 2072 / 32 = 64.75 => Max P = 64."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 96 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "25 rows",
      "107 rows",
      "14 rows",
      "96 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "203 rows",
      "43 rows",
      "14 rows",
      "174 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 190 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "17 rows",
      "208 rows",
      "190 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 190 rows, the result contains exactly 190 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "118 rows",
      "90 rows",
      "42 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 90 rows, the result contains exactly 90 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 110 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "135 rows",
      "16 rows",
      "41 rows",
      "110 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "189 rows",
      "30 rows",
      "18 rows",
      "201 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 189 rows, the result contains exactly 189 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "86 rows",
      "106 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 86 rows, the result contains exactly 86 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "31 rows",
      "109 rows",
      "127 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 109 rows, the result contains exactly 109 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "139 rows",
      "30 rows",
      "151 rows",
      "18 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 139 rows, the result contains exactly 139 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "187 rows",
      "172 rows",
      "32 rows",
      "17 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 172 rows, the result contains exactly 172 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "174 rows",
      "202 rows",
      "47 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "198 rows",
      "224 rows",
      "39 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "123 rows",
      "18 rows",
      "140 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "97 rows",
      "119 rows",
      "41 rows",
      "19 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 97 rows, the result contains exactly 97 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "153 rows",
      "35 rows",
      "18 rows",
      "170 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 104 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "42 rows",
      "130 rows",
      "104 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 192 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "192 rows",
      "44 rows",
      "218 rows",
      "18 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 192 rows, the result contains exactly 192 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "33 rows",
      "14 rows",
      "141 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 85 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "108 rows",
      "85 rows",
      "14 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 85 rows, the result contains exactly 85 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 102 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "33 rows",
      "14 rows",
      "102 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "200 rows",
      "184 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 149 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "149 rows",
      "178 rows",
      "41 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "157 rows",
      "178 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 113 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "113 rows",
      "133 rows",
      "12 rows",
      "32 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "196 rows",
      "216 rows",
      "35 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 196 rows, the result contains exactly 196 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "124 rows",
      "19 rows",
      "109 rows",
      "34 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 109 rows, the result contains exactly 109 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "108 rows",
      "92 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 92 rows, the result contains exactly 92 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "32 rows",
      "181 rows",
      "194 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "125 rows",
      "13 rows",
      "144 rows",
      "32 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 151 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "163 rows",
      "18 rows",
      "30 rows",
      "151 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "126 rows",
      "97 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "33 rows",
      "139 rows",
      "122 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 177 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "12 rows",
      "177 rows",
      "193 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "170 rows",
      "40 rows",
      "16 rows",
      "194 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 179 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "42 rows",
      "206 rows",
      "179 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 179 rows, the result contains exactly 179 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "163 rows",
      "37 rows",
      "145 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 161 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "161 rows",
      "14 rows",
      "190 rows",
      "43 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 161 rows, the result contains exactly 161 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "188 rows",
      "14 rows",
      "168 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 142 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "12 rows",
      "168 rows",
      "142 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 142 rows, the result contains exactly 142 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 163 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "163 rows",
      "25 rows",
      "174 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 163 rows, the result contains exactly 163 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "183 rows",
      "34 rows",
      "13 rows",
      "162 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "197 rows",
      "209 rows",
      "18 rows",
      "30 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 197 rows, the result contains exactly 197 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "18 rows",
      "143 rows",
      "154 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 143 rows, the result contains exactly 143 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "153 rows",
      "139 rows",
      "26 rows",
      "12 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 139 rows, the result contains exactly 139 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "129 rows",
      "18 rows",
      "144 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "37 rows",
      "120 rows",
      "142 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "152 rows",
      "16 rows",
      "133 rows",
      "35 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 133 rows, the result contains exactly 133 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "162 rows",
      "23 rows",
      "13 rows",
      "152 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 164 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "192 rows",
      "46 rows",
      "164 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 113 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "135 rows",
      "113 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "140 rows",
      "116 rows",
      "43 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 116 rows, the result contains exactly 116 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 144 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "144 rows",
      "33 rows",
      "165 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 161 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "161 rows",
      "177 rows",
      "29 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 169 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "169 rows",
      "19 rows",
      "192 rows",
      "42 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "40 rows",
      "156 rows",
      "183 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 169 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "24 rows",
      "12 rows",
      "181 rows",
      "169 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 169 rows, the result contains exactly 169 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "150 rows",
      "36 rows",
      "167 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "202 rows",
      "187 rows",
      "31 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 187 rows, the result contains exactly 187 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 161 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "25 rows",
      "12 rows",
      "174 rows",
      "161 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "132 rows",
      "147 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 132 rows, the result contains exactly 132 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "104 rows",
      "18 rows",
      "90 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 98 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "46 rows",
      "98 rows",
      "127 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 105 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "105 rows",
      "14 rows",
      "31 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 105 rows, the result contains exactly 105 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "183 rows",
      "16 rows",
      "208 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "97 rows",
      "16 rows",
      "109 rows",
      "28 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 97 rows, the result contains exactly 97 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 110 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "110 rows",
      "45 rows",
      "136 rows",
      "19 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 110 rows, the result contains exactly 110 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "222 rows",
      "194 rows",
      "15 rows",
      "43 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 194 rows, the result contains exactly 194 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 151 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "12 rows",
      "151 rows",
      "179 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 151 rows, the result contains exactly 151 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "195 rows",
      "13 rows",
      "168 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 104 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "115 rows",
      "104 rows",
      "27 rows",
      "16 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 104 rows, the result contains exactly 104 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "14 rows",
      "143 rows",
      "169 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 143 rows, the result contains exactly 143 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 142 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "154 rows",
      "142 rows",
      "27 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 142 rows, the result contains exactly 142 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 91 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "113 rows",
      "17 rows",
      "91 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 91 rows, the result contains exactly 91 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 91 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "91 rows",
      "103 rows",
      "29 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "37 rows",
      "146 rows",
      "125 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "174 rows",
      "203 rows",
      "44 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 174 rows, the result contains exactly 174 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "170 rows",
      "33 rows",
      "15 rows",
      "188 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 99 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "99 rows",
      "14 rows",
      "120 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 163 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "177 rows",
      "29 rows",
      "163 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 163 rows, the result contains exactly 163 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "93 rows",
      "24 rows",
      "103 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 95 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "118 rows",
      "95 rows",
      "41 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "93 rows",
      "15 rows",
      "29 rows",
      "107 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 93 rows, the result contains exactly 93 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 166 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "166 rows",
      "12 rows",
      "181 rows",
      "27 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 166 rows, the result contains exactly 166 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 180 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "180 rows",
      "195 rows",
      "33 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "132 rows",
      "15 rows",
      "33 rows",
      "150 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 132 rows, the result contains exactly 132 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "160 rows",
      "18 rows",
      "145 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "144 rows",
      "40 rows",
      "19 rows",
      "123 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 123 rows, the result contains exactly 123 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "15 rows",
      "177 rows",
      "32 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 160 rows, the result contains exactly 160 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "176 rows",
      "160 rows",
      "13 rows",
      "29 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 81 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "81 rows",
      "93 rows",
      "26 rows",
      "14 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 81 rows, the result contains exactly 81 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "46 rows",
      "120 rows",
      "18 rows",
      "148 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 120 rows, the result contains exactly 120 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "157 rows",
      "23 rows",
      "167 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "209 rows",
      "13 rows",
      "183 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 183 rows, the result contains exactly 183 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "86 rows",
      "19 rows",
      "103 rows",
      "36 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 86 rows, the result contains exactly 86 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 164 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "178 rows",
      "29 rows",
      "15 rows",
      "164 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "177 rows",
      "18 rows",
      "45 rows",
      "150 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 150 rows, the result contains exactly 150 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "133 rows",
      "156 rows",
      "37 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "98 rows",
      "86 rows",
      "29 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "129 rows",
      "14 rows",
      "40 rows",
      "155 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 129 rows, the result contains exactly 129 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "36 rows",
      "100 rows",
      "14 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 100 rows, the result contains exactly 100 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "177 rows",
      "153 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 153 rows, the result contains exactly 153 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "103 rows",
      "15 rows",
      "27 rows",
      "115 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "90 rows",
      "100 rows",
      "14 rows",
      "24 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 90 rows, the result contains exactly 90 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 186 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "186 rows",
      "199 rows",
      "25 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 186 rows, the result contains exactly 186 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "18 rows",
      "178 rows",
      "188 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "118 rows",
      "141 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "100 rows",
      "18 rows",
      "115 rows",
      "33 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 100 rows, the result contains exactly 100 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "80 rows",
      "19 rows",
      "32 rows",
      "93 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 80 rows, the result contains exactly 80 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "162 rows",
      "38 rows",
      "19 rows",
      "143 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "184 rows",
      "38 rows",
      "209 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 161 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "161 rows",
      "19 rows",
      "185 rows",
      "43 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 91 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "17 rows",
      "102 rows",
      "91 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 91 rows, the result contains exactly 91 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "200 rows",
      "18 rows",
      "30 rows",
      "188 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 188 rows, the result contains exactly 188 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "17 rows",
      "130 rows",
      "148 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 130 rows, the result contains exactly 130 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "90 rows",
      "112 rows",
      "17 rows",
      "39 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 90 rows, the result contains exactly 90 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "25 rows",
      "115 rows",
      "13 rows",
      "127 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 186 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "186 rows",
      "18 rows",
      "206 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 119 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "144 rows",
      "119 rows",
      "44 rows",
      "19 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 119 rows, the result contains exactly 119 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 190 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "217 rows",
      "15 rows",
      "190 rows",
      "42 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 190 rows, the result contains exactly 190 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "127 rows",
      "26 rows",
      "117 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "204 rows",
      "34 rows",
      "17 rows",
      "187 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 187 rows, the result contains exactly 187 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "100 rows",
      "120 rows",
      "13 rows",
      "33 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 100 rows, the result contains exactly 100 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "129 rows",
      "14 rows",
      "100 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "109 rows",
      "89 rows",
      "36 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 137 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "149 rows",
      "13 rows",
      "137 rows",
      "25 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "84 rows",
      "14 rows",
      "100 rows",
      "30 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 84 rows, the result contains exactly 84 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "197 rows",
      "219 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "25 rows",
      "197 rows",
      "207 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "40 rows",
      "188 rows",
      "211 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "13 rows",
      "111 rows",
      "125 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "191 rows",
      "34 rows",
      "172 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 172 rows, the result contains exactly 172 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "111 rows",
      "23 rows",
      "121 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "32 rows",
      "15 rows",
      "153 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 136 rows, the result contains exactly 136 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 180 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "195 rows",
      "180 rows",
      "19 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 180 rows, the result contains exactly 180 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "115 rows",
      "39 rows",
      "135 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "184 rows",
      "14 rows",
      "42 rows",
      "212 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 104 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "104 rows",
      "17 rows",
      "128 rows",
      "41 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 104 rows, the result contains exactly 104 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "45 rows",
      "18 rows",
      "109 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "186 rows",
      "174 rows",
      "19 rows",
      "31 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 174 rows, the result contains exactly 174 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "130 rows",
      "157 rows",
      "43 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 130 rows, the result contains exactly 130 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "209 rows",
      "195 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "154 rows",
      "125 rows",
      "48 rows",
      "19 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 125 rows, the result contains exactly 125 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "146 rows",
      "31 rows",
      "14 rows",
      "129 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "198 rows",
      "220 rows",
      "14 rows",
      "36 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 198 rows, the result contains exactly 198 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 154 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "154 rows",
      "15 rows",
      "29 rows",
      "168 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 154 rows, the result contains exactly 154 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "133 rows",
      "17 rows",
      "145 rows",
      "29 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "155 rows",
      "14 rows",
      "134 rows",
      "35 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "26 rows",
      "158 rows",
      "170 rows",
      "14 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 158 rows, the result contains exactly 158 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "43 rows",
      "178 rows",
      "206 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 191 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "211 rows",
      "191 rows",
      "37 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "190 rows",
      "167 rows",
      "14 rows",
      "37 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "165 rows",
      "193 rows",
      "13 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 165 rows, the result contains exactly 165 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "131 rows",
      "116 rows",
      "32 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "93 rows",
      "43 rows",
      "119 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "125 rows",
      "19 rows",
      "149 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "131 rows",
      "115 rows",
      "18 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "193 rows",
      "33 rows",
      "17 rows",
      "209 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 193 rows, the result contains exactly 193 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 179 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "35 rows",
      "199 rows",
      "179 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 179 rows, the result contains exactly 179 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "84 rows",
      "41 rows",
      "110 rows",
      "15 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 84 rows, the result contains exactly 84 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "177 rows",
      "153 rows",
      "42 rows",
      "18 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 153 rows, the result contains exactly 153 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "136 rows",
      "14 rows",
      "121 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "174 rows",
      "150 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 150 rows, the result contains exactly 150 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "118 rows",
      "19 rows",
      "36 rows",
      "135 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "193 rows",
      "12 rows",
      "217 rows",
      "36 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "153 rows",
      "39 rows",
      "130 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "126 rows",
      "111 rows",
      "29 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "105 rows",
      "80 rows",
      "41 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 85 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "102 rows",
      "35 rows",
      "18 rows",
      "85 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 85 rows, the result contains exactly 85 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 96 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "19 rows",
      "96 rows",
      "114 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "191 rows",
      "35 rows",
      "14 rows",
      "170 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "168 rows",
      "195 rows",
      "19 rows",
      "46 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 168 rows, the result contains exactly 168 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 91 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "14 rows",
      "91 rows",
      "114 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 91 rows, the result contains exactly 91 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "181 rows",
      "16 rows",
      "197 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "145 rows",
      "170 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "115 rows",
      "133 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "28 rows",
      "196 rows",
      "210 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 196 rows, the result contains exactly 196 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 95 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "95 rows",
      "115 rows",
      "19 rows",
      "39 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 95 rows, the result contains exactly 95 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "42 rows",
      "175 rows",
      "203 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 175 rows, the result contains exactly 175 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "204 rows",
      "181 rows",
      "35 rows",
      "12 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 181 rows, the result contains exactly 181 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 149 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "159 rows",
      "19 rows",
      "149 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 149 rows, the result contains exactly 149 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 81 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "81 rows",
      "14 rows",
      "101 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 81 rows, the result contains exactly 81 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "16 rows",
      "108 rows",
      "90 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "117 rows",
      "17 rows",
      "100 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 138 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "13 rows",
      "155 rows",
      "138 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 190 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "190 rows",
      "39 rows",
      "211 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 190 rows, the result contains exactly 190 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "103 rows",
      "46 rows",
      "130 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 103 rows, the result contains exactly 103 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "174 rows",
      "202 rows",
      "47 rows",
      "19 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 174 rows, the result contains exactly 174 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 164 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "164 rows",
      "14 rows",
      "40 rows",
      "190 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 164 rows, the result contains exactly 164 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 140 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "33 rows",
      "154 rows",
      "140 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 140 rows, the result contains exactly 140 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 119 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "137 rows",
      "119 rows",
      "36 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "167 rows",
      "178 rows",
      "17 rows",
      "28 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 167 rows, the result contains exactly 167 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "80 rows",
      "91 rows",
      "13 rows",
      "24 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "181 rows",
      "201 rows",
      "34 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "112 rows",
      "36 rows",
      "135 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "196 rows",
      "12 rows",
      "215 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 196 rows, the result contains exactly 196 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "205 rows",
      "183 rows",
      "19 rows",
      "41 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "144 rows",
      "15 rows",
      "132 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "219 rows",
      "193 rows",
      "40 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 193 rows, the result contains exactly 193 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 148 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "161 rows",
      "148 rows",
      "17 rows",
      "30 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "157 rows",
      "33 rows",
      "171 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "27 rows",
      "185 rows",
      "200 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "97 rows",
      "124 rows",
      "42 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "195 rows",
      "15 rows",
      "178 rows",
      "32 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "170 rows",
      "180 rows",
      "27 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 170 rows, the result contains exactly 170 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "118 rows",
      "15 rows",
      "41 rows",
      "92 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 105 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "117 rows",
      "19 rows",
      "105 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "26 rows",
      "16 rows",
      "152 rows",
      "162 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 152 rows, the result contains exactly 152 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "185 rows",
      "201 rows",
      "17 rows",
      "33 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 185 rows, the result contains exactly 185 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "125 rows",
      "29 rows",
      "138 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "45 rows",
      "18 rows",
      "166 rows",
      "139 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "91 rows",
      "14 rows",
      "25 rows",
      "80 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "175 rows",
      "14 rows",
      "156 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "208 rows",
      "33 rows",
      "188 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "185 rows",
      "31 rows",
      "170 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "139 rows",
      "15 rows",
      "164 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 139 rows, the result contains exactly 139 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "147 rows",
      "169 rows",
      "40 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 147 rows, the result contains exactly 147 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "80 rows",
      "99 rows",
      "12 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 80 rows, the result contains exactly 80 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "123 rows",
      "97 rows",
      "18 rows",
      "44 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 97 rows, the result contains exactly 97 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 98 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "119 rows",
      "33 rows",
      "98 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 177 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "177 rows",
      "196 rows",
      "13 rows",
      "32 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "116 rows",
      "17 rows",
      "37 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 138 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "138 rows",
      "32 rows",
      "12 rows",
      "158 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 138 rows, the result contains exactly 138 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 155 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "175 rows",
      "34 rows",
      "155 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "97 rows",
      "121 rows",
      "40 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "14 rows",
      "173 rows",
      "197 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 159 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "176 rows",
      "12 rows",
      "159 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 159 rows, the result contains exactly 159 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "121 rows",
      "140 rows",
      "36 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "44 rows",
      "157 rows",
      "129 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 107 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "131 rows",
      "43 rows",
      "107 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "18 rows",
      "158 rows",
      "175 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 158 rows, the result contains exactly 158 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 105 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "19 rows",
      "117 rows",
      "105 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 105 rows, the result contains exactly 105 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 138 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "138 rows",
      "16 rows",
      "166 rows",
      "44 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 163 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "163 rows",
      "183 rows",
      "38 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 91 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "37 rows",
      "91 rows",
      "112 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "183 rows",
      "27 rows",
      "195 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 183 rows, the result contains exactly 183 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "212 rows",
      "17 rows",
      "183 rows",
      "46 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "185 rows",
      "15 rows",
      "201 rows",
      "31 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 96 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "123 rows",
      "96 rows",
      "12 rows",
      "39 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 96 rows, the result contains exactly 96 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "42 rows",
      "150 rows",
      "175 rows",
      "17 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 150 rows, the result contains exactly 150 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "110 rows",
      "31 rows",
      "97 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "197 rows",
      "18 rows",
      "210 rows",
      "31 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 166 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "39 rows",
      "166 rows",
      "191 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 166 rows, the result contains exactly 166 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "97 rows",
      "35 rows",
      "113 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "28 rows",
      "16 rows",
      "109 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 109 rows, the result contains exactly 109 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "117 rows",
      "30 rows",
      "13 rows",
      "100 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "171 rows",
      "30 rows",
      "153 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "141 rows",
      "29 rows",
      "19 rows",
      "131 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 98 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "16 rows",
      "117 rows",
      "98 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 98 rows, the result contains exactly 98 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 96 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "96 rows",
      "27 rows",
      "17 rows",
      "106 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "185 rows",
      "17 rows",
      "208 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 185 rows, the result contains exactly 185 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "43 rows",
      "155 rows",
      "130 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 130 rows, the result contains exactly 130 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "19 rows",
      "200 rows",
      "185 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "147 rows",
      "13 rows",
      "165 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 102 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "125 rows",
      "13 rows",
      "102 rows",
      "36 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 102 rows, the result contains exactly 102 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "146 rows",
      "42 rows",
      "122 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 122 rows, the result contains exactly 122 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "86 rows",
      "37 rows",
      "16 rows",
      "107 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 86 rows, the result contains exactly 86 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 144 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "144 rows",
      "28 rows",
      "13 rows",
      "159 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "127 rows",
      "15 rows",
      "146 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "92 rows",
      "13 rows",
      "110 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "182 rows",
      "24 rows",
      "172 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "28 rows",
      "177 rows",
      "167 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 144 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "44 rows",
      "144 rows",
      "17 rows",
      "171 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 144 rows, the result contains exactly 144 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "93 rows",
      "17 rows",
      "117 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "30 rows",
      "139 rows",
      "155 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 139 rows, the result contains exactly 139 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 179 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "193 rows",
      "179 rows",
      "33 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 179 rows, the result contains exactly 179 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "113 rows",
      "84 rows",
      "42 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "198 rows",
      "183 rows",
      "28 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "219 rows",
      "194 rows",
      "17 rows",
      "42 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 163 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "33 rows",
      "178 rows",
      "163 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 163 rows, the result contains exactly 163 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "140 rows",
      "18 rows",
      "44 rows",
      "114 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 138 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "158 rows",
      "138 rows",
      "36 rows",
      "16 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 138 rows, the result contains exactly 138 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "147 rows",
      "122 rows",
      "38 rows",
      "13 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 122 rows, the result contains exactly 122 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "92 rows",
      "111 rows",
      "36 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 92 rows, the result contains exactly 92 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 149 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "149 rows",
      "12 rows",
      "23 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 142 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "13 rows",
      "142 rows",
      "167 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 142 rows, the result contains exactly 142 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "18 rows",
      "133 rows",
      "123 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 123 rows, the result contains exactly 123 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "199 rows",
      "42 rows",
      "16 rows",
      "173 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 173 rows, the result contains exactly 173 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "146 rows",
      "37 rows",
      "165 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 176 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "176 rows",
      "37 rows",
      "14 rows",
      "199 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 176 rows, the result contains exactly 176 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 128 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "140 rows",
      "128 rows",
      "13 rows",
      "25 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 186 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "186 rows",
      "215 rows",
      "15 rows",
      "44 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 186 rows, the result contains exactly 186 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "115 rows",
      "24 rows",
      "127 rows",
      "12 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "80 rows",
      "108 rows",
      "41 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "24 rows",
      "121 rows",
      "111 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "175 rows",
      "29 rows",
      "188 rows",
      "16 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 175 rows, the result contains exactly 175 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "137 rows",
      "17 rows",
      "120 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 141 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "151 rows",
      "12 rows",
      "141 rows",
      "22 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 141 rows, the result contains exactly 141 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "127 rows",
      "150 rows",
      "37 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "115 rows",
      "17 rows",
      "35 rows",
      "97 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 97 rows, the result contains exactly 97 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "17 rows",
      "196 rows",
      "174 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 174 rows, the result contains exactly 174 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 148 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "148 rows",
      "39 rows",
      "14 rows",
      "173 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 148 rows, the result contains exactly 148 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 96 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "96 rows",
      "124 rows",
      "41 rows",
      "13 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 96 rows, the result contains exactly 96 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 144 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "144 rows",
      "14 rows",
      "30 rows",
      "160 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "189 rows",
      "13 rows",
      "208 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 189 rows, the result contains exactly 189 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "103 rows",
      "27 rows",
      "118 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "13 rows",
      "39 rows",
      "148 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 122 rows, the result contains exactly 122 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "34 rows",
      "84 rows",
      "106 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 84 rows, the result contains exactly 84 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "117 rows",
      "19 rows",
      "128 rows",
      "30 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 117 rows, the result contains exactly 117 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "44 rows",
      "202 rows",
      "174 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "82 rows",
      "19 rows",
      "95 rows",
      "32 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "215 rows",
      "34 rows",
      "194 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "14 rows",
      "144 rows",
      "120 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 120 rows, the result contains exactly 120 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 191 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "191 rows",
      "39 rows",
      "13 rows",
      "217 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "42 rows",
      "139 rows",
      "111 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 111 rows, the result contains exactly 111 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "103 rows",
      "34 rows",
      "13 rows",
      "82 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "199 rows",
      "225 rows",
      "42 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "114 rows",
      "16 rows",
      "128 rows",
      "30 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 114 rows, the result contains exactly 114 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "162 rows",
      "15 rows",
      "187 rows",
      "40 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 142 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "142 rows",
      "19 rows",
      "29 rows",
      "152 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "138 rows",
      "118 rows",
      "16 rows",
      "36 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 154 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "154 rows",
      "174 rows",
      "35 rows",
      "15 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 154 rows, the result contains exactly 154 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "146 rows",
      "16 rows",
      "36 rows",
      "166 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 146 rows, the result contains exactly 146 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "19 rows",
      "153 rows",
      "168 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 153 rows, the result contains exactly 153 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 159 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "12 rows",
      "159 rows",
      "178 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "208 rows",
      "181 rows",
      "45 rows",
      "18 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 181 rows, the result contains exactly 181 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 138 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "138 rows",
      "32 rows",
      "156 rows",
      "14 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 138 rows, the result contains exactly 138 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "39 rows",
      "142 rows",
      "115 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "84 rows",
      "112 rows",
      "13 rows",
      "41 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "216 rows",
      "41 rows",
      "193 rows",
      "18 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 193 rows, the result contains exactly 193 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "14 rows",
      "90 rows",
      "116 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 90 rows, the result contains exactly 90 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "38 rows",
      "185 rows",
      "165 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 165 rows, the result contains exactly 165 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "30 rows",
      "137 rows",
      "120 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 120 rows, the result contains exactly 120 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "196 rows",
      "45 rows",
      "17 rows",
      "224 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "27 rows",
      "214 rows",
      "199 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "32 rows",
      "114 rows",
      "131 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 114 rows, the result contains exactly 114 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 179 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "37 rows",
      "198 rows",
      "179 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "127 rows",
      "18 rows",
      "148 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "189 rows",
      "174 rows",
      "33 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 186 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "200 rows",
      "17 rows",
      "186 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 186 rows, the result contains exactly 186 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "123 rows",
      "41 rows",
      "149 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 166 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "178 rows",
      "28 rows",
      "166 rows",
      "16 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 166 rows, the result contains exactly 166 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "111 rows",
      "121 rows",
      "22 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "150 rows",
      "41 rows",
      "127 rows",
      "18 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 127 rows, the result contains exactly 127 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "42 rows",
      "199 rows",
      "226 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "207 rows",
      "39 rows",
      "187 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 187 rows, the result contains exactly 187 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "117 rows",
      "127 rows",
      "14 rows",
      "24 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 117 rows, the result contains exactly 117 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 107 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "107 rows",
      "26 rows",
      "118 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "142 rows",
      "42 rows",
      "16 rows",
      "116 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 116 rows, the result contains exactly 116 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "220 rows",
      "46 rows",
      "19 rows",
      "193 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "146 rows",
      "32 rows",
      "163 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 180 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "206 rows",
      "180 rows",
      "42 rows",
      "16 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 180 rows, the result contains exactly 180 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 191 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "191 rows",
      "206 rows",
      "32 rows",
      "17 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 191 rows, the result contains exactly 191 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 177 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "204 rows",
      "40 rows",
      "177 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "17 rows",
      "103 rows",
      "114 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "89 rows",
      "110 rows",
      "18 rows",
      "39 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 89 rows, the result contains exactly 89 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 148 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "148 rows",
      "169 rows",
      "12 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 148 rows, the result contains exactly 148 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "190 rows",
      "162 rows",
      "40 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 162 rows, the result contains exactly 162 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "191 rows",
      "29 rows",
      "16 rows",
      "178 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "100 rows",
      "90 rows",
      "25 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 90 rows, the result contains exactly 90 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "192 rows",
      "172 rows",
      "34 rows",
      "14 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 172 rows, the result contains exactly 172 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "40 rows",
      "196 rows",
      "221 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "137 rows",
      "29 rows",
      "121 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 121 rows, the result contains exactly 121 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "143 rows",
      "160 rows",
      "15 rows",
      "32 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 143 rows, the result contains exactly 143 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "194 rows",
      "183 rows",
      "12 rows",
      "23 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 183 rows, the result contains exactly 183 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "44 rows",
      "19 rows",
      "115 rows",
      "140 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "86 rows",
      "28 rows",
      "100 rows",
      "14 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 86 rows, the result contains exactly 86 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 186 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "13 rows",
      "204 rows",
      "186 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "156 rows",
      "31 rows",
      "16 rows",
      "171 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 142 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "43 rows",
      "142 rows",
      "166 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 142 rows, the result contains exactly 142 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "103 rows",
      "115 rows",
      "29 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "186 rows",
      "157 rows",
      "15 rows",
      "44 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 157 rows, the result contains exactly 157 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "92 rows",
      "15 rows",
      "121 rows",
      "44 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 92 rows, the result contains exactly 92 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "181 rows",
      "209 rows",
      "40 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "16 rows",
      "29 rows",
      "149 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "145 rows",
      "43 rows",
      "118 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "165 rows",
      "14 rows",
      "189 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 165 rows, the result contains exactly 165 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "198 rows",
      "44 rows",
      "226 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "82 rows",
      "43 rows",
      "18 rows",
      "107 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 82 rows, the result contains exactly 82 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 138 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "154 rows",
      "14 rows",
      "138 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 83 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "93 rows",
      "26 rows",
      "83 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "46 rows",
      "149 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 179 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "179 rows",
      "190 rows",
      "12 rows",
      "23 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "178 rows",
      "15 rows",
      "41 rows",
      "152 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 152 rows, the result contains exactly 152 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "172 rows",
      "32 rows",
      "156 rows",
      "16 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "165 rows",
      "179 rows",
      "29 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "212 rows",
      "13 rows",
      "184 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 184 rows, the result contains exactly 184 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "130 rows",
      "12 rows",
      "148 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 130 rows, the result contains exactly 130 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 87 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "87 rows",
      "38 rows",
      "13 rows",
      "112 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "155 rows",
      "31 rows",
      "143 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "109 rows",
      "89 rows",
      "15 rows",
      "35 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "184 rows",
      "203 rows",
      "12 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 184 rows, the result contains exactly 184 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "15 rows",
      "147 rows",
      "132 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 83 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "83 rows",
      "106 rows",
      "18 rows",
      "41 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 154 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "181 rows",
      "13 rows",
      "154 rows",
      "40 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "46 rows",
      "174 rows",
      "201 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "203 rows",
      "15 rows",
      "183 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 183 rows, the result contains exactly 183 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 159 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "182 rows",
      "37 rows",
      "159 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "187 rows",
      "17 rows",
      "29 rows",
      "175 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 95 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "26 rows",
      "95 rows",
      "106 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 95 rows, the result contains exactly 95 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "105 rows",
      "19 rows",
      "90 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "32 rows",
      "97 rows",
      "80 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 80 rows, the result contains exactly 80 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 105 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "125 rows",
      "16 rows",
      "105 rows",
      "36 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "43 rows",
      "187 rows",
      "160 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "117 rows",
      "31 rows",
      "14 rows",
      "134 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "101 rows",
      "90 rows",
      "28 rows",
      "17 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 90 rows, the result contains exactly 90 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "100 rows",
      "116 rows",
      "34 rows",
      "18 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 100 rows, the result contains exactly 100 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 108 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "137 rows",
      "42 rows",
      "108 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "28 rows",
      "183 rows",
      "172 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "173 rows",
      "14 rows",
      "29 rows",
      "188 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 173 rows, the result contains exactly 173 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "172 rows",
      "13 rows",
      "40 rows",
      "145 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 104 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "114 rows",
      "104 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "118 rows",
      "142 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "189 rows",
      "16 rows",
      "178 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 178 rows, the result contains exactly 178 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "144 rows",
      "134 rows",
      "17 rows",
      "27 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 134 rows, the result contains exactly 134 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "129 rows",
      "35 rows",
      "145 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 180 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "180 rows",
      "206 rows",
      "13 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 180 rows, the result contains exactly 180 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "109 rows",
      "43 rows",
      "16 rows",
      "136 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 109 rows, the result contains exactly 109 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "35 rows",
      "112 rows",
      "93 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 93 rows, the result contains exactly 93 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 164 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "189 rows",
      "164 rows",
      "40 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 164 rows, the result contains exactly 164 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 110 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "131 rows",
      "35 rows",
      "110 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "193 rows",
      "208 rows",
      "16 rows",
      "31 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 193 rows, the result contains exactly 193 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "210 rows",
      "189 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 189 rows, the result contains exactly 189 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "36 rows",
      "97 rows",
      "114 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 149 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "149 rows",
      "168 rows",
      "34 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "107 rows",
      "93 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 83 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "83 rows",
      "19 rows",
      "103 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 83 rows, the result contains exactly 83 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 177 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "19 rows",
      "189 rows",
      "177 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 177 rows, the result contains exactly 177 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "165 rows",
      "19 rows",
      "176 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 165 rows, the result contains exactly 165 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "174 rows",
      "157 rows",
      "18 rows",
      "35 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 157 rows, the result contains exactly 157 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 107 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "32 rows",
      "17 rows",
      "107 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 107 rows, the result contains exactly 107 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 144 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "165 rows",
      "144 rows",
      "36 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 144 rows, the result contains exactly 144 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "122 rows",
      "41 rows",
      "100 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "127 rows",
      "145 rows",
      "19 rows",
      "37 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 127 rows, the result contains exactly 127 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "25 rows",
      "130 rows",
      "12 rows",
      "117 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "175 rows",
      "194 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 177 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "17 rows",
      "189 rows",
      "177 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 177 rows, the result contains exactly 177 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "185 rows",
      "195 rows",
      "25 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "144 rows",
      "32 rows",
      "131 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "150 rows",
      "168 rows",
      "33 rows",
      "15 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 150 rows, the result contains exactly 150 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "128 rows",
      "109 rows",
      "33 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 109 rows, the result contains exactly 109 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "36 rows",
      "134 rows",
      "151 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 134 rows, the result contains exactly 134 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 159 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "188 rows",
      "159 rows",
      "16 rows",
      "45 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "185 rows",
      "43 rows",
      "211 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 185 rows, the result contains exactly 185 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "44 rows",
      "219 rows",
      "18 rows",
      "193 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 193 rows, the result contains exactly 193 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "184 rows",
      "17 rows",
      "207 rows",
      "40 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 184 rows, the result contains exactly 184 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "181 rows",
      "197 rows",
      "33 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 181 rows, the result contains exactly 181 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 94 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "94 rows",
      "111 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 85 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "41 rows",
      "85 rows",
      "113 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 85 rows, the result contains exactly 85 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "136 rows",
      "147 rows",
      "28 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "115 rows",
      "92 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "132 rows",
      "154 rows",
      "39 rows",
      "17 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 132 rows, the result contains exactly 132 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "14 rows",
      "84 rows",
      "106 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 84 rows, the result contains exactly 84 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "136 rows",
      "14 rows",
      "152 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 136 rows, the result contains exactly 136 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "206 rows",
      "27 rows",
      "16 rows",
      "195 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 195 rows, the result contains exactly 195 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "122 rows",
      "15 rows",
      "29 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 122 rows, the result contains exactly 122 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 102 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "112 rows",
      "12 rows",
      "102 rows",
      "22 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "132 rows",
      "14 rows",
      "112 rows",
      "34 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "184 rows",
      "158 rows",
      "12 rows",
      "38 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 182 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "182 rows",
      "210 rows",
      "45 rows",
      "17 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 182 rows, the result contains exactly 182 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 154 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "154 rows",
      "16 rows",
      "170 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 154 rows, the result contains exactly 154 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "207 rows",
      "193 rows",
      "33 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 193 rows, the result contains exactly 193 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "156 rows",
      "167 rows",
      "28 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "165 rows",
      "17 rows",
      "178 rows",
      "30 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "220 rows",
      "199 rows",
      "16 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 199 rows, the result contains exactly 199 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "187 rows",
      "174 rows",
      "28 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 174 rows, the result contains exactly 174 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 83 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "93 rows",
      "83 rows",
      "27 rows",
      "17 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 83 rows, the result contains exactly 83 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "100 rows",
      "18 rows",
      "84 rows",
      "34 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 84 rows, the result contains exactly 84 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "173 rows",
      "16 rows",
      "194 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 173 rows, the result contains exactly 173 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 95 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "95 rows",
      "17 rows",
      "115 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "35 rows",
      "217 rows",
      "195 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 102 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "118 rows",
      "32 rows",
      "102 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 102 rows, the result contains exactly 102 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "146 rows",
      "29 rows",
      "162 rows",
      "13 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 146 rows, the result contains exactly 146 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 171 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "171 rows",
      "19 rows",
      "186 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 171 rows, the result contains exactly 171 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "138 rows",
      "32 rows",
      "118 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "108 rows",
      "30 rows",
      "97 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "211 rows",
      "39 rows",
      "188 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 140 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "15 rows",
      "140 rows",
      "153 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 140 rows, the result contains exactly 140 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "132 rows",
      "159 rows",
      "40 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "97 rows",
      "113 rows",
      "34 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "134 rows",
      "159 rows",
      "40 rows",
      "15 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 134 rows, the result contains exactly 134 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "28 rows",
      "123 rows",
      "136 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 141 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "141 rows",
      "162 rows",
      "12 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 141 rows, the result contains exactly 141 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "47 rows",
      "19 rows",
      "114 rows",
      "86 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "194 rows",
      "45 rows",
      "18 rows",
      "221 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 194 rows, the result contains exactly 194 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 135 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "135 rows",
      "159 rows",
      "40 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 96 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "118 rows",
      "17 rows",
      "96 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 96 rows, the result contains exactly 96 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "148 rows",
      "133 rows",
      "19 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 133 rows, the result contains exactly 133 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 166 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "32 rows",
      "166 rows",
      "181 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 166 rows, the result contains exactly 166 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 102 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "131 rows",
      "46 rows",
      "102 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "162 rows",
      "147 rows",
      "33 rows",
      "18 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 147 rows, the result contains exactly 147 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "17 rows",
      "101 rows",
      "37 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "134 rows",
      "37 rows",
      "116 rows",
      "19 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 116 rows, the result contains exactly 116 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "104 rows",
      "82 rows",
      "12 rows",
      "34 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "17 rows",
      "130 rows",
      "152 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 130 rows, the result contains exactly 130 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "16 rows",
      "183 rows",
      "39 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 160 rows, the result contains exactly 160 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "127 rows",
      "154 rows",
      "39 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "86 rows",
      "13 rows",
      "113 rows",
      "40 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "146 rows",
      "165 rows",
      "33 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 146 rows, the result contains exactly 146 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "186 rows",
      "24 rows",
      "174 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "165 rows",
      "34 rows",
      "13 rows",
      "186 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 165 rows, the result contains exactly 165 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "188 rows",
      "31 rows",
      "205 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 188 rows, the result contains exactly 188 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 106 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "106 rows",
      "40 rows",
      "127 rows",
      "19 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 106 rows, the result contains exactly 106 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "39 rows",
      "166 rows",
      "139 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 139 rows, the result contains exactly 139 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "194 rows",
      "33 rows",
      "17 rows",
      "178 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 178 rows, the result contains exactly 178 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "128 rows",
      "118 rows",
      "18 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 118 rows, the result contains exactly 118 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "178 rows",
      "19 rows",
      "45 rows",
      "204 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 178 rows, the result contains exactly 178 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "145 rows",
      "157 rows",
      "26 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 108 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "108 rows",
      "32 rows",
      "121 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "18 rows",
      "206 rows",
      "188 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "15 rows",
      "185 rows",
      "206 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 185 rows, the result contains exactly 185 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "159 rows",
      "37 rows",
      "134 rows",
      "12 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 134 rows, the result contains exactly 134 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "157 rows",
      "34 rows",
      "18 rows",
      "173 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 157 rows, the result contains exactly 157 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "215 rows",
      "13 rows",
      "31 rows",
      "197 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 197 rows, the result contains exactly 197 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "23 rows",
      "12 rows",
      "93 rows",
      "104 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "124 rows",
      "100 rows",
      "38 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 100 rows, the result contains exactly 100 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "39 rows",
      "109 rows",
      "133 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "125 rows",
      "146 rows",
      "15 rows",
      "36 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "152 rows",
      "13 rows",
      "28 rows",
      "167 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 152 rows, the result contains exactly 152 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "95 rows",
      "26 rows",
      "82 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "26 rows",
      "16 rows",
      "131 rows",
      "141 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 131 rows, the result contains exactly 131 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 104 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "104 rows",
      "16 rows",
      "118 rows",
      "30 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 104 rows, the result contains exactly 104 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 88 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "45 rows",
      "88 rows",
      "116 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "44 rows",
      "151 rows",
      "18 rows",
      "125 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 125 rows, the result contains exactly 125 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "195 rows",
      "26 rows",
      "16 rows",
      "205 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "38 rows",
      "115 rows",
      "135 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "146 rows",
      "34 rows",
      "17 rows",
      "129 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 129 rows, the result contains exactly 129 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 180 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "201 rows",
      "33 rows",
      "12 rows",
      "180 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 180 rows, the result contains exactly 180 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 191 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "191 rows",
      "12 rows",
      "26 rows",
      "205 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 191 rows, the result contains exactly 191 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "38 rows",
      "173 rows",
      "197 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 173 rows, the result contains exactly 173 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "82 rows",
      "99 rows",
      "19 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 82 rows, the result contains exactly 82 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "158 rows",
      "32 rows",
      "176 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "139 rows",
      "121 rows",
      "35 rows",
      "17 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 121 rows, the result contains exactly 121 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "133 rows",
      "29 rows",
      "123 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 123 rows, the result contains exactly 123 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 110 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "110 rows",
      "34 rows",
      "127 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "212 rows",
      "36 rows",
      "195 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 195 rows, the result contains exactly 195 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "222 rows",
      "43 rows",
      "16 rows",
      "195 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 182 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "182 rows",
      "15 rows",
      "25 rows",
      "192 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 182 rows, the result contains exactly 182 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "189 rows",
      "12 rows",
      "217 rows",
      "40 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 189 rows, the result contains exactly 189 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "146 rows",
      "16 rows",
      "167 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "114 rows",
      "17 rows",
      "45 rows",
      "142 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "160 rows",
      "35 rows",
      "179 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 160 rows, the result contains exactly 160 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 107 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "107 rows",
      "132 rows",
      "40 rows",
      "15 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 107 rows, the result contains exactly 107 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "33 rows",
      "167 rows",
      "185 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 167 rows, the result contains exactly 167 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "86 rows",
      "40 rows",
      "112 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 119 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "146 rows",
      "17 rows",
      "119 rows",
      "44 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 119 rows, the result contains exactly 119 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "38 rows",
      "158 rows",
      "181 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 158 rows, the result contains exactly 158 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "213 rows",
      "30 rows",
      "195 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "123 rows",
      "145 rows",
      "16 rows",
      "38 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 123 rows, the result contains exactly 123 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "157 rows",
      "23 rows",
      "146 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 142 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "169 rows",
      "19 rows",
      "142 rows",
      "46 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 142 rows, the result contains exactly 142 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "131 rows",
      "19 rows",
      "34 rows",
      "116 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "12 rows",
      "181 rows",
      "153 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 153 rows, the result contains exactly 153 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "168 rows",
      "35 rows",
      "190 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "18 rows",
      "167 rows",
      "181 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 167 rows, the result contains exactly 167 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 106 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "106 rows",
      "19 rows",
      "116 rows",
      "29 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "15 rows",
      "138 rows",
      "116 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "143 rows",
      "44 rows",
      "117 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "203 rows",
      "47 rows",
      "175 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "168 rows",
      "15 rows",
      "26 rows",
      "179 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "156 rows",
      "170 rows",
      "33 rows",
      "19 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "158 rows",
      "173 rows",
      "17 rows",
      "32 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 158 rows, the result contains exactly 158 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 81 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "100 rows",
      "81 rows",
      "13 rows",
      "32 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 81 rows, the result contains exactly 81 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "197 rows",
      "17 rows",
      "217 rows",
      "37 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 197 rows, the result contains exactly 197 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "82 rows",
      "15 rows",
      "111 rows",
      "44 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "30 rows",
      "122 rows",
      "135 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 122 rows, the result contains exactly 122 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "86 rows",
      "25 rows",
      "96 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 164 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "38 rows",
      "185 rows",
      "164 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "210 rows",
      "12 rows",
      "198 rows",
      "24 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 94 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "40 rows",
      "121 rows",
      "94 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "43 rows",
      "134 rows",
      "17 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 134 rows, the result contains exactly 134 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 190 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "190 rows",
      "47 rows",
      "18 rows",
      "219 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 190 rows, the result contains exactly 190 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 98 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "98 rows",
      "30 rows",
      "113 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 94 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "94 rows",
      "12 rows",
      "117 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 94 rows, the result contains exactly 94 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "176 rows",
      "152 rows",
      "40 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 149 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "149 rows",
      "15 rows",
      "177 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 149 rows, the result contains exactly 149 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 190 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "200 rows",
      "12 rows",
      "190 rows",
      "22 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 190 rows, the result contains exactly 190 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 182 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "203 rows",
      "182 rows",
      "18 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 182 rows, the result contains exactly 182 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "115 rows",
      "138 rows",
      "16 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "101 rows",
      "15 rows",
      "125 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "17 rows",
      "150 rows",
      "169 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 150 rows, the result contains exactly 150 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "133 rows",
      "151 rows",
      "17 rows",
      "35 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "196 rows",
      "14 rows",
      "26 rows",
      "208 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 196 rows, the result contains exactly 196 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "168 rows",
      "152 rows",
      "34 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 152 rows, the result contains exactly 152 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "181 rows",
      "165 rows",
      "33 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "183 rows",
      "14 rows",
      "212 rows",
      "43 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "150 rows",
      "42 rows",
      "122 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 88 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "16 rows",
      "113 rows",
      "88 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "157 rows",
      "12 rows",
      "175 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 157 rows, the result contains exactly 157 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 161 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "189 rows",
      "43 rows",
      "161 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 161 rows, the result contains exactly 161 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 176 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "176 rows",
      "203 rows",
      "43 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 81 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "93 rows",
      "81 rows",
      "30 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 176 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "176 rows",
      "16 rows",
      "195 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "158 rows",
      "170 rows",
      "24 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 124 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "140 rows",
      "35 rows",
      "124 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "145 rows",
      "160 rows",
      "28 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "47 rows",
      "143 rows",
      "19 rows",
      "115 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 154 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "167 rows",
      "32 rows",
      "19 rows",
      "154 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "39 rows",
      "210 rows",
      "187 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 187 rows, the result contains exactly 187 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "117 rows",
      "138 rows",
      "37 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 117 rows, the result contains exactly 117 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "14 rows",
      "137 rows",
      "121 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "200 rows",
      "44 rows",
      "173 rows",
      "17 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 173 rows, the result contains exactly 173 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "159 rows",
      "14 rows",
      "37 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "130 rows",
      "43 rows",
      "14 rows",
      "101 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "116 rows",
      "19 rows",
      "103 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "101 rows",
      "25 rows",
      "90 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "25 rows",
      "207 rows",
      "197 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 197 rows, the result contains exactly 197 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "123 rows",
      "39 rows",
      "103 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "157 rows",
      "19 rows",
      "169 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 176 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "15 rows",
      "176 rows",
      "192 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "181 rows",
      "18 rows",
      "203 rows",
      "40 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 141 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "141 rows",
      "160 rows",
      "37 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "100 rows",
      "18 rows",
      "39 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 100 rows, the result contains exactly 100 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "168 rows",
      "14 rows",
      "25 rows",
      "179 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 163 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "183 rows",
      "163 rows",
      "38 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 163 rows, the result contains exactly 163 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "213 rows",
      "187 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 107 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "107 rows",
      "19 rows",
      "46 rows",
      "134 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 171 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "200 rows",
      "171 rows",
      "46 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "17 rows",
      "44 rows",
      "148 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 149 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "149 rows",
      "168 rows",
      "17 rows",
      "36 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "44 rows",
      "194 rows",
      "223 rows",
      "15 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 194 rows, the result contains exactly 194 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 119 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "119 rows",
      "139 rows",
      "39 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 119 rows, the result contains exactly 119 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "86 rows",
      "17 rows",
      "109 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 186 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "204 rows",
      "32 rows",
      "186 rows",
      "14 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 186 rows, the result contains exactly 186 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "178 rows",
      "167 rows",
      "30 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 167 rows, the result contains exactly 167 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 106 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "106 rows",
      "13 rows",
      "126 rows",
      "33 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "15 rows",
      "187 rows",
      "170 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 170 rows, the result contains exactly 170 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "146 rows",
      "44 rows",
      "120 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 120 rows, the result contains exactly 120 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "172 rows",
      "41 rows",
      "147 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "117 rows",
      "38 rows",
      "97 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 97 rows, the result contains exactly 97 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 83 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "99 rows",
      "32 rows",
      "83 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 83 rows, the result contains exactly 83 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "32 rows",
      "182 rows",
      "162 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 182 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "203 rows",
      "33 rows",
      "12 rows",
      "182 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 182 rows, the result contains exactly 182 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "14 rows",
      "131 rows",
      "146 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 131 rows, the result contains exactly 131 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "29 rows",
      "134 rows",
      "148 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 134 rows, the result contains exactly 134 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 186 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "203 rows",
      "12 rows",
      "186 rows",
      "29 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 186 rows, the result contains exactly 186 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 137 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "152 rows",
      "13 rows",
      "28 rows",
      "137 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 137 rows, the result contains exactly 137 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "211 rows",
      "196 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "111 rows",
      "135 rows",
      "38 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 111 rows, the result contains exactly 111 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 167 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "167 rows",
      "191 rows",
      "42 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 167 rows, the result contains exactly 167 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "16 rows",
      "202 rows",
      "178 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 178 rows, the result contains exactly 178 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "193 rows",
      "206 rows",
      "12 rows",
      "25 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "13 rows",
      "122 rows",
      "100 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "133 rows",
      "154 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "109 rows",
      "134 rows",
      "14 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "146 rows",
      "12 rows",
      "173 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 146 rows, the result contains exactly 146 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "13 rows",
      "205 rows",
      "188 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 184 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "184 rows",
      "209 rows",
      "43 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 184 rows, the result contains exactly 184 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "133 rows",
      "161 rows",
      "46 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 133 rows, the result contains exactly 133 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "147 rows",
      "164 rows",
      "34 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 137 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "147 rows",
      "18 rows",
      "28 rows",
      "137 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 137 rows, the result contains exactly 137 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "37 rows",
      "172 rows",
      "191 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 172 rows, the result contains exactly 172 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 104 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "123 rows",
      "104 rows",
      "33 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "26 rows",
      "103 rows",
      "12 rows",
      "117 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 148 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "148 rows",
      "159 rows",
      "16 rows",
      "27 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 148 rows, the result contains exactly 148 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 137 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "137 rows",
      "13 rows",
      "157 rows",
      "33 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 137 rows, the result contains exactly 137 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "44 rows",
      "15 rows",
      "150 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 191 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "191 rows",
      "213 rows",
      "14 rows",
      "36 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 191 rows, the result contains exactly 191 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "203 rows",
      "174 rows",
      "44 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "42 rows",
      "13 rows",
      "227 rows",
      "198 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 198 rows, the result contains exactly 198 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 137 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "162 rows",
      "15 rows",
      "137 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 137 rows, the result contains exactly 137 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "120 rows",
      "19 rows",
      "92 rows",
      "47 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 98 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "116 rows",
      "15 rows",
      "33 rows",
      "98 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 98 rows, the result contains exactly 98 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "14 rows",
      "90 rows",
      "117 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 95 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "30 rows",
      "109 rows",
      "95 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 91 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "32 rows",
      "91 rows",
      "109 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 91 rows, the result contains exactly 91 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "162 rows",
      "178 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "122 rows",
      "12 rows",
      "100 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 166 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "24 rows",
      "13 rows",
      "166 rows",
      "177 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "112 rows",
      "34 rows",
      "18 rows",
      "128 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 87 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "107 rows",
      "36 rows",
      "16 rows",
      "87 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "17 rows",
      "107 rows",
      "92 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 92 rows, the result contains exactly 92 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "204 rows",
      "32 rows",
      "189 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "195 rows",
      "222 rows",
      "42 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "215 rows",
      "16 rows",
      "194 rows",
      "37 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 182 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "199 rows",
      "35 rows",
      "182 rows",
      "18 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 182 rows, the result contains exactly 182 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "44 rows",
      "116 rows",
      "141 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 176 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "176 rows",
      "189 rows",
      "14 rows",
      "27 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 176 rows, the result contains exactly 176 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "99 rows",
      "16 rows",
      "86 rows",
      "29 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 86 rows, the result contains exactly 86 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "206 rows",
      "195 rows",
      "14 rows",
      "25 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 154 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "167 rows",
      "18 rows",
      "154 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 154 rows, the result contains exactly 154 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 99 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "99 rows",
      "128 rows",
      "47 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "181 rows",
      "30 rows",
      "19 rows",
      "170 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 170 rows, the result contains exactly 170 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "101 rows",
      "27 rows",
      "89 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 89 rows, the result contains exactly 89 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "15 rows",
      "109 rows",
      "128 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 109 rows, the result contains exactly 109 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "93 rows",
      "35 rows",
      "115 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "162 rows",
      "147 rows",
      "34 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "24 rows",
      "147 rows",
      "159 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 147 rows, the result contains exactly 147 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "158 rows",
      "29 rows",
      "146 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 146 rows, the result contains exactly 146 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 192 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "192 rows",
      "217 rows",
      "40 rows",
      "15 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 192 rows, the result contains exactly 192 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 151 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "32 rows",
      "168 rows",
      "151 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 151 rows, the result contains exactly 151 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 159 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "171 rows",
      "31 rows",
      "159 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 159 rows, the result contains exactly 159 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "173 rows",
      "19 rows",
      "191 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 173 rows, the result contains exactly 173 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "147 rows",
      "134 rows",
      "26 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 134 rows, the result contains exactly 134 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 140 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "140 rows",
      "157 rows",
      "33 rows",
      "16 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 140 rows, the result contains exactly 140 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "92 rows",
      "111 rows",
      "32 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "116 rows",
      "128 rows",
      "12 rows",
      "24 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 116 rows, the result contains exactly 116 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 85 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "113 rows",
      "15 rows",
      "43 rows",
      "85 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "193 rows",
      "204 rows",
      "16 rows",
      "27 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "17 rows",
      "156 rows",
      "176 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "128 rows",
      "16 rows",
      "101 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 101 rows, the result contains exactly 101 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 138 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "32 rows",
      "153 rows",
      "138 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 138 rows, the result contains exactly 138 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 99 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "116 rows",
      "32 rows",
      "99 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "143 rows",
      "117 rows",
      "45 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 110 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "110 rows",
      "18 rows",
      "134 rows",
      "42 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 110 rows, the result contains exactly 110 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 190 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "30 rows",
      "190 rows",
      "202 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 105 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "44 rows",
      "15 rows",
      "134 rows",
      "105 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "194 rows",
      "18 rows",
      "208 rows",
      "32 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 194 rows, the result contains exactly 194 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "40 rows",
      "109 rows",
      "131 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 109 rows, the result contains exactly 109 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "132 rows",
      "152 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "141 rows",
      "40 rows",
      "118 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 163 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "163 rows",
      "17 rows",
      "181 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 163 rows, the result contains exactly 163 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "84 rows",
      "15 rows",
      "106 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 84 rows, the result contains exactly 84 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "124 rows",
      "43 rows",
      "100 rows",
      "19 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 100 rows, the result contains exactly 100 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "33 rows",
      "133 rows",
      "114 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 114 rows, the result contains exactly 114 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "140 rows",
      "43 rows",
      "115 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 115 rows, the result contains exactly 115 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "168 rows",
      "40 rows",
      "13 rows",
      "195 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 168 rows, the result contains exactly 168 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "37 rows",
      "19 rows",
      "154 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 133 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "133 rows",
      "39 rows",
      "155 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "129 rows",
      "145 rows",
      "18 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 129 rows, the result contains exactly 129 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 144 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "37 rows",
      "164 rows",
      "144 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 144 rows, the result contains exactly 144 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "13 rows",
      "198 rows",
      "175 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 175 rows, the result contains exactly 175 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "161 rows",
      "12 rows",
      "34 rows",
      "139 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 166 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "179 rows",
      "16 rows",
      "29 rows",
      "166 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "200 rows",
      "38 rows",
      "181 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "13 rows",
      "150 rows",
      "169 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "209 rows",
      "181 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "16 rows",
      "193 rows",
      "168 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 168 rows, the result contains exactly 168 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 113 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "113 rows",
      "17 rows",
      "125 rows",
      "29 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "162 rows",
      "44 rows",
      "188 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "187 rows",
      "24 rows",
      "12 rows",
      "175 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 175 rows, the result contains exactly 175 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 153 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "26 rows",
      "153 rows",
      "167 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 153 rows, the result contains exactly 153 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 137 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "18 rows",
      "137 rows",
      "160 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 137 rows, the result contains exactly 137 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 190 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "37 rows",
      "190 rows",
      "213 rows",
      "14 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 190 rows, the result contains exactly 190 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 98 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "98 rows",
      "122 rows",
      "42 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 98 rows, the result contains exactly 98 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 177 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "193 rows",
      "34 rows",
      "18 rows",
      "177 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 177 rows, the result contains exactly 177 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 161 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "178 rows",
      "36 rows",
      "161 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 161 rows, the result contains exactly 161 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "183 rows",
      "25 rows",
      "170 rows",
      "12 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 170 rows, the result contains exactly 170 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 169 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "180 rows",
      "169 rows",
      "25 rows",
      "14 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 169 rows, the result contains exactly 169 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "189 rows",
      "15 rows",
      "172 rows",
      "32 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 172 rows, the result contains exactly 172 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "114 rows",
      "101 rows",
      "15 rows",
      "28 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 101 rows, the result contains exactly 101 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "171 rows",
      "25 rows",
      "14 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 160 rows, the result contains exactly 160 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "139 rows",
      "14 rows",
      "153 rows",
      "28 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 139 rows, the result contains exactly 139 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "13 rows",
      "214 rows",
      "198 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 198 rows, the result contains exactly 198 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "122 rows",
      "101 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 125 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "139 rows",
      "125 rows",
      "28 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "29 rows",
      "201 rows",
      "189 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 189 rows, the result contains exactly 189 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "123 rows",
      "147 rows",
      "43 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 151 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "151 rows",
      "14 rows",
      "173 rows",
      "36 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 151 rows, the result contains exactly 151 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "195 rows",
      "14 rows",
      "214 rows",
      "33 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 195 rows, the result contains exactly 195 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "168 rows",
      "143 rows",
      "40 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 143 rows, the result contains exactly 143 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 85 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "96 rows",
      "85 rows",
      "19 rows",
      "30 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 85 rows, the result contains exactly 85 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "36 rows",
      "15 rows",
      "143 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 179 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "196 rows",
      "36 rows",
      "179 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 179 rows, the result contains exactly 179 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "90 rows",
      "104 rows",
      "28 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "147 rows",
      "43 rows",
      "121 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "138 rows",
      "35 rows",
      "12 rows",
      "115 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "17 rows",
      "120 rows",
      "144 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 151 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "151 rows",
      "170 rows",
      "16 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 151 rows, the result contains exactly 151 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "143 rows",
      "28 rows",
      "130 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 130 rows, the result contains exactly 130 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "45 rows",
      "226 rows",
      "197 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "15 rows",
      "113 rows",
      "90 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "194 rows",
      "205 rows",
      "25 rows",
      "14 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 194 rows, the result contains exactly 194 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 109 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "109 rows",
      "122 rows",
      "19 rows",
      "32 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 151 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "151 rows",
      "35 rows",
      "17 rows",
      "169 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 151 rows, the result contains exactly 151 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "129 rows",
      "19 rows",
      "36 rows",
      "112 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "162 rows",
      "27 rows",
      "174 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 154 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "154 rows",
      "172 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 170 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "170 rows",
      "19 rows",
      "197 rows",
      "46 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 170 rows, the result contains exactly 170 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "208 rows",
      "34 rows",
      "188 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 99 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "15 rows",
      "37 rows",
      "99 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "155 rows",
      "12 rows",
      "127 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "128 rows",
      "30 rows",
      "111 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 139 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "139 rows",
      "19 rows",
      "31 rows",
      "151 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 139 rows, the result contains exactly 139 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "223 rows",
      "12 rows",
      "40 rows",
      "195 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 128 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "154 rows",
      "43 rows",
      "17 rows",
      "128 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 128 rows, the result contains exactly 128 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 180 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "180 rows",
      "19 rows",
      "208 rows",
      "47 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "158 rows",
      "41 rows",
      "19 rows",
      "180 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 158 rows, the result contains exactly 158 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "188 rows",
      "165 rows",
      "41 rows",
      "18 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 165 rows, the result contains exactly 165 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 185 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "46 rows",
      "185 rows",
      "19 rows",
      "212 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 185 rows, the result contains exactly 185 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "132 rows",
      "28 rows",
      "18 rows",
      "142 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 178 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "178 rows",
      "189 rows",
      "18 rows",
      "29 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "118 rows",
      "15 rows",
      "27 rows",
      "130 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 118 rows, the result contains exactly 118 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 105 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "34 rows",
      "105 rows",
      "19 rows",
      "120 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 105 rows, the result contains exactly 105 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "84 rows",
      "19 rows",
      "103 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 84 rows, the result contains exactly 84 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "82 rows",
      "13 rows",
      "100 rows",
      "31 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 82 rows, the result contains exactly 82 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 95 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "95 rows",
      "105 rows",
      "16 rows",
      "26 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "111 rows",
      "28 rows",
      "126 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 111 rows, the result contains exactly 111 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 168 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "194 rows",
      "19 rows",
      "168 rows",
      "45 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "206 rows",
      "12 rows",
      "35 rows",
      "183 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 151 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "14 rows",
      "151 rows",
      "164 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 177 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "177 rows",
      "12 rows",
      "25 rows",
      "190 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 171 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "25 rows",
      "181 rows",
      "171 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "145 rows",
      "37 rows",
      "17 rows",
      "165 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "44 rows",
      "175 rows",
      "202 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 175 rows, the result contains exactly 175 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 169 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "190 rows",
      "15 rows",
      "36 rows",
      "169 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 99 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "124 rows",
      "14 rows",
      "39 rows",
      "99 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 80 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "31 rows",
      "16 rows",
      "95 rows",
      "80 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "175 rows",
      "39 rows",
      "16 rows",
      "152 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "125 rows",
      "101 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "36 rows",
      "152 rows",
      "129 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 150 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "150 rows",
      "14 rows",
      "24 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 150 rows, the result contains exactly 150 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "167 rows",
      "38 rows",
      "14 rows",
      "143 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "187 rows",
      "19 rows",
      "202 rows",
      "34 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 187 rows, the result contains exactly 187 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "189 rows",
      "16 rows",
      "26 rows",
      "199 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 143 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "143 rows",
      "25 rows",
      "156 rows",
      "12 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 143 rows, the result contains exactly 143 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 88 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "42 rows",
      "117 rows",
      "88 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 88 rows, the result contains exactly 88 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 195 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "195 rows",
      "223 rows",
      "47 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 82 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "99 rows",
      "18 rows",
      "82 rows",
      "35 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 82 rows, the result contains exactly 82 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "114 rows",
      "136 rows",
      "18 rows",
      "40 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 171 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "15 rows",
      "171 rows",
      "196 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 113 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "113 rows",
      "34 rows",
      "134 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 166 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "166 rows",
      "191 rows",
      "18 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 166 rows, the result contains exactly 166 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "44 rows",
      "129 rows",
      "100 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "35 rows",
      "122 rows",
      "141 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 122 rows, the result contains exactly 122 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "19 rows",
      "120 rows",
      "133 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "217 rows",
      "194 rows",
      "13 rows",
      "36 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "203 rows",
      "175 rows",
      "40 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "110 rows",
      "92 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 92 rows, the result contains exactly 92 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "26 rows",
      "193 rows",
      "181 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 163 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "183 rows",
      "163 rows",
      "19 rows",
      "39 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "149 rows",
      "129 rows",
      "33 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 129 rows, the result contains exactly 129 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "103 rows",
      "114 rows",
      "25 rows",
      "14 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 103 rows, the result contains exactly 103 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "89 rows",
      "100 rows",
      "28 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "141 rows",
      "16 rows",
      "45 rows",
      "112 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "40 rows",
      "16 rows",
      "112 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "177 rows",
      "18 rows",
      "39 rows",
      "156 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 146 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "156 rows",
      "146 rows",
      "26 rows",
      "16 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 102 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "124 rows",
      "12 rows",
      "34 rows",
      "102 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 102 rows, the result contains exactly 102 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "213 rows",
      "39 rows",
      "189 rows",
      "15 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 189 rows, the result contains exactly 189 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 149 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "149 rows",
      "163 rows",
      "30 rows",
      "16 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 149 rows, the result contains exactly 149 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "129 rows",
      "144 rows",
      "12 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 129 rows, the result contains exactly 129 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 161 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "161 rows",
      "173 rows",
      "13 rows",
      "25 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "145 rows",
      "17 rows",
      "40 rows",
      "168 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 124 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "34 rows",
      "141 rows",
      "124 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 124 rows, the result contains exactly 124 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "196 rows",
      "172 rows",
      "12 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 172 rows, the result contains exactly 172 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 144 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "15 rows",
      "172 rows",
      "144 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 144 rows, the result contains exactly 144 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "37 rows",
      "18 rows",
      "179 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 160 rows, the result contains exactly 160 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "164 rows",
      "145 rows",
      "14 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 141 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "156 rows",
      "141 rows",
      "16 rows",
      "31 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 141 rows, the result contains exactly 141 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "125 rows",
      "114 rows",
      "28 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 102 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "102 rows",
      "34 rows",
      "119 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 197 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "197 rows",
      "215 rows",
      "14 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 197 rows, the result contains exactly 197 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 137 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "137 rows",
      "159 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "34 rows",
      "193 rows",
      "214 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "29 rows",
      "17 rows",
      "208 rows",
      "196 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "43 rows",
      "18 rows",
      "156 rows",
      "181 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "135 rows",
      "12 rows",
      "120 rows",
      "27 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "37 rows",
      "182 rows",
      "160 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "145 rows",
      "35 rows",
      "123 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 130 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "142 rows",
      "130 rows",
      "29 rows",
      "17 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "128 rows",
      "29 rows",
      "118 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 118 rows, the result contains exactly 118 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "144 rows",
      "127 rows",
      "18 rows",
      "35 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 106 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "31 rows",
      "124 rows",
      "106 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 106 rows, the result contains exactly 106 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "196 rows",
      "218 rows",
      "39 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 104 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "104 rows",
      "19 rows",
      "29 rows",
      "114 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 104 rows, the result contains exactly 104 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 126 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "148 rows",
      "126 rows",
      "16 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 126 rows, the result contains exactly 126 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 123 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "148 rows",
      "17 rows",
      "123 rows",
      "42 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 123 rows, the result contains exactly 123 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "174 rows",
      "14 rows",
      "186 rows",
      "26 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 174 rows, the result contains exactly 174 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "24 rows",
      "187 rows",
      "198 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 171 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "32 rows",
      "186 rows",
      "171 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 171 rows, the result contains exactly 171 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 147 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "147 rows",
      "17 rows",
      "161 rows",
      "31 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 147 rows, the result contains exactly 147 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 176 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "189 rows",
      "26 rows",
      "176 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 176 rows, the result contains exactly 176 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 141 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "35 rows",
      "141 rows",
      "163 rows",
      "13 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 141 rows, the result contains exactly 141 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 113 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "113 rows",
      "31 rows",
      "126 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "139 rows",
      "127 rows",
      "18 rows",
      "30 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 127 rows, the result contains exactly 127 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "160 rows",
      "41 rows",
      "12 rows",
      "131 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 131 rows, the result contains exactly 131 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 196 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "36 rows",
      "17 rows",
      "196 rows",
      "215 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 196 rows, the result contains exactly 196 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 159 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "42 rows",
      "186 rows",
      "159 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 122 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "42 rows",
      "19 rows",
      "122 rows",
      "145 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 122 rows, the result contains exactly 122 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "100 rows",
      "38 rows",
      "19 rows",
      "119 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 101 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "101 rows",
      "122 rows",
      "19 rows",
      "40 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 101 rows, the result contains exactly 101 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "24 rows",
      "122 rows",
      "14 rows",
      "112 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "24 rows",
      "103 rows",
      "13 rows",
      "92 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 92 rows, the result contains exactly 92 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "131 rows",
      "144 rows",
      "15 rows",
      "28 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 131 rows, the result contains exactly 131 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 99 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "119 rows",
      "14 rows",
      "34 rows",
      "99 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 115 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "115 rows",
      "16 rows",
      "45 rows",
      "144 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 145 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "165 rows",
      "145 rows",
      "14 rows",
      "34 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 145 rows, the result contains exactly 145 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 27 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "120 rows",
      "19 rows",
      "46 rows",
      "93 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 194 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "47 rows",
      "194 rows",
      "223 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "45 rows",
      "16 rows",
      "152 rows",
      "181 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 152 rows, the result contains exactly 152 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 152 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "41 rows",
      "176 rows",
      "17 rows",
      "152 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 152 rows, the result contains exactly 152 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 90 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "90 rows",
      "113 rows",
      "15 rows",
      "38 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 90 rows, the result contains exactly 90 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 111 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "111 rows",
      "122 rows",
      "27 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 83 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "18 rows",
      "83 rows",
      "98 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 29 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "122 rows",
      "93 rows",
      "15 rows",
      "44 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 97 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "97 rows",
      "46 rows",
      "125 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 188 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "188 rows",
      "15 rows",
      "28 rows",
      "201 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 188 rows, the result contains exactly 188 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 157 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "13 rows",
      "157 rows",
      "176 rows",
      "32 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 157 rows, the result contains exactly 157 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 192 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "218 rows",
      "192 rows",
      "43 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "200 rows",
      "42 rows",
      "172 rows",
      "14 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 172 rows, the result contains exactly 172 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "156 rows",
      "29 rows",
      "171 rows",
      "14 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "112 rows",
      "128 rows",
      "28 rows",
      "12 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "216 rows",
      "36 rows",
      "199 rows",
      "19 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 169 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "16 rows",
      "192 rows",
      "169 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 169 rows, the result contains exactly 169 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 165 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "186 rows",
      "39 rows",
      "165 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 84 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "39 rows",
      "106 rows",
      "17 rows",
      "84 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 198 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "198 rows",
      "18 rows",
      "43 rows",
      "223 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 118 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "134 rows",
      "18 rows",
      "34 rows",
      "118 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 118 rows, the result contains exactly 118 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 92 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "92 rows",
      "42 rows",
      "115 rows",
      "19 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 92 rows, the result contains exactly 92 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "18 rows",
      "175 rows",
      "156 rows",
      "37 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 134 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "149 rows",
      "134 rows",
      "18 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 18 matching dept_ids, the result contains 18 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 179 rows, and 'Departments' (dept_id, dept_name) containing 28 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "40 rows",
      "207 rows",
      "179 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "23 rows",
      "13 rows",
      "120 rows",
      "130 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 83 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "17 rows",
      "83 rows",
      "28 rows",
      "94 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 132 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "132 rows",
      "156 rows",
      "40 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 132 rows, the result contains exactly 132 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "185 rows",
      "162 rows",
      "42 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 162 rows, the result contains exactly 162 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 136 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "136 rows",
      "146 rows",
      "22 rows",
      "12 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 127 rows, and 'Departments' (dept_id, dept_name) containing 20 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "127 rows",
      "147 rows",
      "35 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 156 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "30 rows",
      "172 rows",
      "156 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 156 rows, the result contains exactly 156 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 183 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "38 rows",
      "183 rows",
      "207 rows",
      "14 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 183 rows, the result contains exactly 183 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 121 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "121 rows",
      "13 rows",
      "32 rows",
      "140 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 121 rows, the result contains exactly 121 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "210 rows",
      "26 rows",
      "199 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 199 rows, the result contains exactly 199 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 199 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "14 rows",
      "30 rows",
      "215 rows",
      "199 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 129 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "129 rows",
      "25 rows",
      "15 rows",
      "139 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 129 rows, the result contains exactly 129 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 131 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "131 rows",
      "12 rows",
      "24 rows",
      "143 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 131 rows, the result contains exactly 131 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 175 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "175 rows",
      "41 rows",
      "18 rows",
      "198 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 175 rows, the result contains exactly 175 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 155 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "174 rows",
      "13 rows",
      "155 rows",
      "32 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 155 rows, the result contains exactly 155 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 100 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "125 rows",
      "100 rows",
      "17 rows",
      "42 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 17 matching dept_ids, the result contains 17 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 114 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "114 rows",
      "27 rows",
      "16 rows",
      "125 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 189 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "204 rows",
      "189 rows",
      "14 rows",
      "29 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 189 rows, the result contains exactly 189 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 119 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "119 rows",
      "18 rows",
      "35 rows",
      "136 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 119 rows, the result contains exactly 119 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 89 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "30 rows",
      "89 rows",
      "13 rows",
      "106 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 89 rows, the result contains exactly 89 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 103 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "103 rows",
      "26 rows",
      "13 rows",
      "116 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 103 rows, the result contains exactly 103 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 162 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "162 rows",
      "176 rows",
      "17 rows",
      "31 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 162 rows, the result contains exactly 162 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 171 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "28 rows",
      "187 rows",
      "12 rows",
      "171 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 171 rows, the result contains exactly 171 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 192 rows, and 'Departments' (dept_id, dept_name) containing 13 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "205 rows",
      "32 rows",
      "192 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 192 rows, the result contains exactly 192 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 86 rows, and 'Departments' (dept_id, dept_name) containing 16 rows. If there are exactly 18 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "86 rows",
      "34 rows",
      "18 rows",
      "102 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 86 rows, the result contains exactly 86 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 173 rows, and 'Departments' (dept_id, dept_name) containing 12 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "185 rows",
      "24 rows",
      "173 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 193 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "217 rows",
      "39 rows",
      "193 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 193 rows, the result contains exactly 193 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 116 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "34 rows",
      "131 rows",
      "116 rows"
    ],
    "answer": 3,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 116 rows, the result contains exactly 116 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 112 rows, and 'Departments' (dept_id, dept_name) containing 23 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "15 rows",
      "38 rows",
      "112 rows",
      "135 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 112 rows, the result contains exactly 112 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 120 rows, and 'Departments' (dept_id, dept_name) containing 21 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "120 rows",
      "141 rows",
      "12 rows",
      "33 rows"
    ],
    "answer": 0,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 120 rows, the result contains exactly 120 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 106 rows, and 'Departments' (dept_id, dept_name) containing 10 rows. If there are exactly 17 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "106 rows",
      "17 rows",
      "116 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 106 rows, the result contains exactly 106 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 158 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "184 rows",
      "15 rows",
      "158 rows",
      "41 rows"
    ],
    "answer": 2,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 158 rows, the result contains exactly 158 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 160 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "174 rows",
      "26 rows",
      "12 rows",
      "160 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 88 rows, and 'Departments' (dept_id, dept_name) containing 18 rows. If there are exactly 15 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "33 rows",
      "106 rows",
      "88 rows",
      "15 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 15 matching dept_ids, the result contains 15 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 108 rows, and 'Departments' (dept_id, dept_name) containing 17 rows. If there are exactly 12 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "12 rows",
      "29 rows",
      "108 rows",
      "125 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 12 matching dept_ids, the result contains 12 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 172 rows, and 'Departments' (dept_id, dept_name) containing 25 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "172 rows",
      "41 rows",
      "197 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 187 rows, and 'Departments' (dept_id, dept_name) containing 11 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "25 rows",
      "187 rows",
      "198 rows",
      "14 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 117 rows, and 'Departments' (dept_id, dept_name) containing 15 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "132 rows",
      "16 rows",
      "117 rows",
      "31 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 16 matching dept_ids, the result contains 16 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 155 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 14 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "155 rows",
      "179 rows",
      "14 rows",
      "38 rows"
    ],
    "answer": 2,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 14 matching dept_ids, the result contains 14 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 93 rows, and 'Departments' (dept_id, dept_name) containing 14 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "27 rows",
      "93 rows",
      "107 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 182 rows, and 'Departments' (dept_id, dept_name) containing 22 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "204 rows",
      "35 rows",
      "182 rows",
      "13 rows"
    ],
    "answer": 3,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 174 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 16 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "16 rows",
      "174 rows",
      "35 rows",
      "193 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 174 rows, the result contains exactly 174 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 94 rows, and 'Departments' (dept_id, dept_name) containing 24 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a LEFT OUTER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "118 rows",
      "94 rows",
      "19 rows",
      "43 rows"
    ],
    "answer": 1,
    "explanation": "A LEFT OUTER JOIN preserves all rows from the left table ('Employees') regardless of match. Since Employees has 94 rows, the result contains exactly 94 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 81 rows, and 'Departments' (dept_id, dept_name) containing 26 rows. If there are exactly 19 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "19 rows",
      "107 rows",
      "81 rows",
      "45 rows"
    ],
    "answer": 0,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 19 matching dept_ids, the result contains 19 rows."
  },
  {
    "subject": "DBMS",
    "topic": "Relational Database Joins",
    "difficulty": "Medium",
    "question": "You have two SQL database tables: 'Employees' (emp_id, emp_name, dept_id) containing 181 rows, and 'Departments' (dept_id, dept_name) containing 19 rows. If there are exactly 13 matching 'dept_id' values between the tables (all other dept_id references are NULL or unmatched), how many rows will be returned by a query performing a INNER JOIN between 'Employees' and 'Departments' on 'dept_id'?",
    "options": [
      "32 rows",
      "13 rows",
      "181 rows",
      "200 rows"
    ],
    "answer": 1,
    "explanation": "An INNER JOIN returns only the rows where the join condition matches. Since there are exactly 13 matching dept_ids, the result contains 13 rows."
  }
];
