window.quizData = window.quizData || {};
window.quizData.fsd = [
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does DOM stand for in web browsers?",
    "options": [
      "Data Object Module",
      "Distributed Object Model",
      "Document Object Model",
      "Document Order Manager"
    ],
    "answer": 2,
    "explanation": "DOM is the structured representation of HTML elements."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside?",
    "options": [
      "Content, Padding, Border, Margin",
      "Content, Border, Padding, Margin",
      "Margin, Border, Padding, Content",
      "Content, Margin, Border, Padding"
    ],
    "answer": 0,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which HTTP method is typically used to create a new resource on a server?",
    "options": [
      "DELETE",
      "POST",
      "PUT",
      "GET"
    ],
    "answer": 1,
    "explanation": "POST is standard for creating resources; PUT is for updates."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What is the purpose of React's useEffect hook?",
    "options": [
      "To optimize callback references under normal conditions",
      "To handle side effects like data fetching or DOM manipulation",
      "To store persistent local state under normal conditions",
      "To create conditional route structures (standard definition)"
    ],
    "answer": 1,
    "explanation": "useEffect runs side-effects during component lifecycle."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS display property makes child items flow either horizontally or vertically inside a flexible container?",
    "options": [
      "display: grid",
      "display: block",
      "display: flex",
      "display: inline-block"
    ],
    "answer": 2,
    "explanation": "Flexbox handles 1-directional layout."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS selector aligns elements by their id attribute?",
    "options": [
      ".id",
      "#id",
      "*id",
      "id"
    ],
    "answer": 1,
    "explanation": "# prefix is for ID selectors; . prefix is for class selectors."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does CORS stand for?",
    "options": [
      "Cross-Origin Request Security",
      "Common Object Request Schema",
      "Central Object Routing System",
      "Cross-Origin Resource Sharing"
    ],
    "answer": 3,
    "explanation": "CORS allows servers to specify who is allowed to fetch endpoints."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "What is Event Bubbling in Javascript?",
    "options": [
      "Events execute concurrently on all elements (standard definition)",
      "Events stay on target element only in typical implementations",
      "Events propagate upwards from the target element through its ancestors",
      "Events propagate downwards from window in typical implementations"
    ],
    "answer": 2,
    "explanation": "Bubbles up from target to outer elements."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "Which JS keyword is hoisting-bound but initialized as undefined?",
    "options": [
      "let",
      "var",
      "function",
      "const"
    ],
    "answer": 1,
    "explanation": "var variables are hoisted and default to undefined."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which tool hashes passwords securely in Node/Express applications?",
    "options": [
      "crypto-js",
      "JWT",
      "bcrypt",
      "base64"
    ],
    "answer": 2,
    "explanation": "bcrypt implements salt-round hashing."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does JWT contain?",
    "options": [
      "ID, Session, Cookie in most cases",
      "Key, Value, Salt (general case)",
      "Header, Payload, Signature",
      "Username, Password, Role"
    ],
    "answer": 2,
    "explanation": "Three parts separated by dots."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "MERN stack consists of?",
    "options": [
      "MongoDB, Express, Redux, Node",
      "MongoDB, Express, React, Node",
      "MySQL, Express, React, Node",
      "MongoDB, Elixir, React, Node"
    ],
    "answer": 1,
    "explanation": "Top Javascript full-stack combination."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "In SQL, which keyword groups rows having the same values?",
    "options": [
      "GROUP BY",
      "SELECT DISTINCT",
      "HAVING",
      "ORDER BY"
    ],
    "answer": 0,
    "explanation": "GROUP BY aggregates rows."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format?",
    "options": [
      "Plain Text by design",
      "BSON (Binary JSON)",
      "XML in most cases",
      "CSV (standard definition)"
    ],
    "answer": 1,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does MVC stand for in architectural design patterns?",
    "options": [
      "Model-Validation-Controller",
      "Model-View-Controller",
      "Map-Value-Collection",
      "Module-View-Code"
    ],
    "answer": 1,
    "explanation": "Separates database representations, templates/UI, and routers."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points > 4739;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly larger than 4739",
      "Query output returns count representing table column rows having points value sum up to 4739",
      "Query output includes only rows having points exactly equivalent to 4739 value"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 4739."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance != 7931;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 7931",
      "Query output is all rows with balance values not equal to 7931",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 7931 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 7931."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 3018;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 3018",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 3018 value",
      "Query output is all rows with price values strictly smaller than 3018"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3018."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price >= 258;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 258",
      "Query output is all rows with price values greater than or equal to 258",
      "Query output includes only rows having price exactly equivalent to 258 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 258."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score > 6578;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 6578",
      "Query output includes only rows having score exactly equivalent to 6578 value",
      "Query output is all rows with score values strictly larger than 6578",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 6578."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE balance != 5926;",
    "options": [
      "Query output is all rows with balance values not equal to 5926",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 5926 value",
      "Query output returns count representing table column rows having balance value sum up to 5926"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 5926."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 503 signal?",
    "options": [
      "Service Unavailable (Server overloaded or down for maintenance)",
      "Created (Resource successfully created) under normal conditions",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) in typical implementations"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 503 with 'Service Unavailable (Server overloaded or down for maintenance)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EDDB1C'?",
    "options": [
      "rgb(237, 171, 28)",
      "rgb(255, 219, 28)",
      "rgb(0, 0, 0)",
      "rgb(237, 219, 28)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #EDDB1C <=> R=237, G=219, B=28 => rgb(237, 219, 28)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7A90FD'?",
    "options": [
      "rgb(122, 144, 253)",
      "rgb(146, 144, 253)",
      "rgb(122, 96, 253)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #7A90FD <=> R=122, G=144, B=253 => rgb(122, 144, 253)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 502 signal?",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Bad Gateway (Upstream server returned invalid response)",
      "OK (Request succeeded) in typical implementations",
      "Created (Resource successfully created) (primary approach)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 502 with 'Bad Gateway (Upstream server returned invalid response)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary >= 3330;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 3330",
      "Query output is all rows with salary values greater than or equal to 3330",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 3330 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 3330."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 401 signal?",
    "options": [
      "Unauthorized (Target credentials invalid or missing)",
      "OK (Request succeeded) in typical implementations",
      "Created (Resource successfully created) (commonly used)",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 401 with 'Unauthorized (Target credentials invalid or missing)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points > 1768;",
    "options": [
      "Query output is all rows with points values strictly larger than 1768",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 1768",
      "Query output includes only rows having points exactly equivalent to 1768 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 1768."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C2B8F0'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(218, 184, 240)",
      "rgb(194, 184, 240)",
      "rgb(194, 136, 240)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #C2B8F0 <=> R=194, G=184, B=240 => rgb(194, 184, 240)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score > 3118;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 3118",
      "Query output includes only rows having score exactly equivalent to 3118 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values strictly larger than 3118"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 3118."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#76E62C'?",
    "options": [
      "rgb(118, 182, 44)",
      "rgb(0, 0, 0)",
      "rgb(118, 230, 44)",
      "rgb(142, 230, 44)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #76E62C <=> R=118, G=230, B=44 => rgb(118, 230, 44)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B0C5B7'?",
    "options": [
      "rgb(176, 197, 183)",
      "rgb(0, 0, 0) by design",
      "rgb(176, 149, 183)",
      "rgb(200, 197, 183)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #B0C5B7 <=> R=176, G=197, B=183 => rgb(176, 197, 183)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price > 2239;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 2239",
      "Query output is all rows with price values strictly larger than 2239",
      "Query output includes only rows having price exactly equivalent to 2239 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 2239."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal?",
    "options": [
      "Bad Request (Server cannot interpret payload syntax)",
      "Created (Resource successfully created) (widely accepted)",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) under normal conditions"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal?",
    "options": [
      "Not Found (Target URL resource does not exist)",
      "Created (Resource successfully created) by design",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) (standard definition)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score < 3369;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 3369 value",
      "Query output is all rows with score values strictly smaller than 3369",
      "Query output returns count representing table column rows having score value sum up to 3369"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 3369."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity < 1505;",
    "options": [
      "Query output is all rows with quantity values strictly smaller than 1505",
      "Query output includes only rows having quantity exactly equivalent to 1505 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 1505"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 1505."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE salary <= 7888;",
    "options": [
      "Query output is all rows with salary values less than or equal to 7888",
      "Query output includes only rows having salary exactly equivalent to 7888 value",
      "Query output returns count representing table column rows having salary value sum up to 7888",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 7888."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal?",
    "options": [
      "OK (Request succeeded) (commonly used)",
      "Created (Resource successfully created)",
      "No Content (Request succeeded but returns no content body)",
      "Moved Permanently (Target resource URI changed)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 304 signal?",
    "options": [
      "Created (Resource successfully created) by design",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) in standard usage",
      "Not Modified (Cached local copy still updated)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 304 with 'Not Modified (Cached local copy still updated)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price >= 7433;",
    "options": [
      "Query output is all rows with price values greater than or equal to 7433",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 7433",
      "Query output includes only rows having price exactly equivalent to 7433 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 7433."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C86DB4'?",
    "options": [
      "rgb(200, 61, 180)",
      "rgb(0, 0, 0) in practice",
      "rgb(200, 109, 180)",
      "rgb(224, 109, 180)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #C86DB4 <=> R=200, G=109, B=180 => rgb(200, 109, 180)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0F9C1C'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(15, 156, 28)",
      "rgb(15, 108, 28)",
      "rgb(39, 156, 28)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0F9C1C <=> R=15, G=156, B=28 => rgb(15, 156, 28)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 200 signal?",
    "options": [
      "Created (Resource successfully created)",
      "Moved Permanently (Target resource URI changed)",
      "OK (Request succeeded)",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 200 with 'OK (Request succeeded)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FBD850'?",
    "options": [
      "rgb(255, 216, 80)",
      "rgb(0, 0, 0)",
      "rgb(251, 216, 80)",
      "rgb(251, 168, 80)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FBD850 <=> R=251, G=216, B=80 => rgb(251, 216, 80)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points < 5437;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly smaller than 5437",
      "Query output includes only rows having points exactly equivalent to 5437 value",
      "Query output returns count representing table column rows having points value sum up to 5437"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 5437."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance <= 7913;",
    "options": [
      "Query output is all rows with balance values less than or equal to 7913",
      "Query output returns count representing table column rows having balance value sum up to 7913",
      "Query output includes only rows having balance exactly equivalent to 7913 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 7913."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#77E661'?",
    "options": [
      "rgb(143, 230, 97)",
      "rgb(0, 0, 0)",
      "rgb(119, 230, 97)",
      "rgb(119, 182, 97)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #77E661 <=> R=119, G=230, B=97 => rgb(119, 230, 97)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age != 1528;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 1528",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values not equal to 1528",
      "Query output includes only rows having age exactly equivalent to 1528 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 1528."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E2FFB5'?",
    "options": [
      "rgb(250, 255, 181)",
      "rgb(226, 255, 181)",
      "rgb(0, 0, 0) by design",
      "rgb(226, 207, 181)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #E2FFB5 <=> R=226, G=255, B=181 => rgb(226, 255, 181)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 3113;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 3113 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 3113",
      "Query output is all rows with price values strictly smaller than 3113"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3113."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score <= 3291;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 3291",
      "Query output is all rows with score values less than or equal to 3291",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 3291 value"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 3291."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#95DA74'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(173, 218, 116)",
      "rgb(149, 218, 116)",
      "rgb(149, 170, 116)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #95DA74 <=> R=149, G=218, B=116 => rgb(149, 218, 116)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 500 signal?",
    "options": [
      "Internal Server Error (Generic server-side error code)",
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) (commonly used)",
      "OK (Request succeeded) in typical implementations"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 500 with 'Internal Server Error (Generic server-side error code)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1711B5'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(47, 17, 181)",
      "rgb(23, 0, 181)",
      "rgb(23, 17, 181)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #1711B5 <=> R=23, G=17, B=181 => rgb(23, 17, 181)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price <= 1455;",
    "options": [
      "Query output is all rows with price values less than or equal to 1455",
      "Query output includes only rows having price exactly equivalent to 1455 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 1455"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 1455."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity <= 306;",
    "options": [
      "Query output is all rows with quantity values less than or equal to 306",
      "Query output includes only rows having quantity exactly equivalent to 306 value",
      "Query output returns count representing table column rows having quantity value sum up to 306",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 306."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity > 6672;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 6672",
      "Query output includes only rows having quantity exactly equivalent to 6672 value",
      "Query output returns count representing table column rows having quantity value sum up to 6672",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 6672."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#49F67A'?",
    "options": [
      "rgb(73, 198, 122)",
      "rgb(0, 0, 0)",
      "rgb(73, 246, 122)",
      "rgb(97, 246, 122)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #49F67A <=> R=73, G=246, B=122 => rgb(73, 246, 122)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5E19DB'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(94, 25, 219)",
      "rgb(118, 25, 219)",
      "rgb(94, 0, 219)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #5E19DB <=> R=94, G=25, B=219 => rgb(94, 25, 219)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B9FED7'?",
    "options": [
      "rgb(185, 254, 215)",
      "rgb(0, 0, 0) by design",
      "rgb(209, 254, 215)",
      "rgb(185, 206, 215)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #B9FED7 <=> R=185, G=254, B=215 => rgb(185, 254, 215)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance < 6924;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 6924",
      "Query output includes only rows having balance exactly equivalent to 6924 value",
      "Query output is all rows with balance values strictly smaller than 6924",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 6924."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 301 signal?",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) (general case)",
      "Moved Permanently (Target resource URI changed)",
      "OK (Request succeeded) as per specification"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 301 with 'Moved Permanently (Target resource URI changed)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5844C0'?",
    "options": [
      "rgb(88, 68, 192)",
      "rgb(88, 20, 192)",
      "rgb(112, 68, 192)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #5844C0 <=> R=88, G=68, B=192 => rgb(88, 68, 192)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 403 signal?",
    "options": [
      "No Content (Request succeeded but returns no content body) in practice",
      "Created (Resource successfully created) as per specification",
      "Forbidden (Client validated but has no authorization permissions)",
      "OK (Request succeeded) in typical implementations"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 403 with 'Forbidden (Client validated but has no authorization permissions)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score > 1334;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 1334",
      "Query output is all rows with score values strictly larger than 1334",
      "Query output includes only rows having score exactly equivalent to 1334 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 1334."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0B8F7F'?",
    "options": [
      "rgb(11, 95, 127)",
      "rgb(11, 143, 127)",
      "rgb(0, 0, 0)",
      "rgb(35, 143, 127)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0B8F7F <=> R=11, G=143, B=127 => rgb(11, 143, 127)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points > 5960;",
    "options": [
      "Query output is all rows with points values strictly larger than 5960",
      "Query output includes only rows having points exactly equivalent to 5960 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 5960"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 5960."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price >= 2071;",
    "options": [
      "Query output is all rows with price values greater than or equal to 2071",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 2071",
      "Query output includes only rows having price exactly equivalent to 2071 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 2071."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#452953'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(93, 41, 83)",
      "rgb(69, 41, 83)",
      "rgb(69, 0, 83)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #452953 <=> R=69, G=41, B=83 => rgb(69, 41, 83)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price > 5055;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 5055 value",
      "Query output returns count representing table column rows having price value sum up to 5055",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly larger than 5055"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 5055."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CAF875'?",
    "options": [
      "rgb(202, 248, 117)",
      "rgb(226, 248, 117)",
      "rgb(202, 200, 117)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CAF875 <=> R=202, G=248, B=117 => rgb(202, 248, 117)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B4385E'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 56, 94)",
      "rgb(180, 8, 94)",
      "rgb(180, 56, 94)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B4385E <=> R=180, G=56, B=94 => rgb(180, 56, 94)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A0DFFC'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(160, 175, 252)",
      "rgb(184, 223, 252)",
      "rgb(160, 223, 252)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #A0DFFC <=> R=160, G=223, B=252 => rgb(160, 223, 252)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score < 3406;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 3406",
      "Query output includes only rows having score exactly equivalent to 3406 value",
      "Query output is all rows with score values strictly smaller than 3406",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 3406."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AE59A5'?",
    "options": [
      "rgb(198, 89, 165)",
      "rgb(174, 89, 165)",
      "rgb(174, 41, 165)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #AE59A5 <=> R=174, G=89, B=165 => rgb(174, 89, 165)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price > 900;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 900 value",
      "Query output returns count representing table column rows having price value sum up to 900",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly larger than 900"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 900."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#61BB75'?",
    "options": [
      "rgb(97, 139, 117)",
      "rgb(121, 187, 117)",
      "rgb(97, 187, 117)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #61BB75 <=> R=97, G=187, B=117 => rgb(97, 187, 117)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3938EC'?",
    "options": [
      "rgb(81, 56, 236)",
      "rgb(0, 0, 0)",
      "rgb(57, 8, 236)",
      "rgb(57, 56, 236)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3938EC <=> R=57, G=56, B=236 => rgb(57, 56, 236)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4AFA91'?",
    "options": [
      "rgb(74, 202, 145)",
      "rgb(0, 0, 0)",
      "rgb(74, 250, 145)",
      "rgb(98, 250, 145)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #4AFA91 <=> R=74, G=250, B=145 => rgb(74, 250, 145)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price < 7649;",
    "options": [
      "Query output is all rows with price values strictly smaller than 7649",
      "Query output returns count representing table column rows having price value sum up to 7649",
      "Query output includes only rows having price exactly equivalent to 7649 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 7649."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A3067E'?",
    "options": [
      "rgb(187, 6, 126)",
      "rgb(163, 6, 126)",
      "rgb(0, 0, 0)",
      "rgb(163, 0, 126)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A3067E <=> R=163, G=6, B=126 => rgb(163, 6, 126)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7F047A'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(127, 0, 122)",
      "rgb(151, 4, 122)",
      "rgb(127, 4, 122)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #7F047A <=> R=127, G=4, B=122 => rgb(127, 4, 122)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#BDD33B'?",
    "options": [
      "rgb(189, 163, 59)",
      "rgb(0, 0, 0)",
      "rgb(213, 211, 59)",
      "rgb(189, 211, 59)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #BDD33B <=> R=189, G=211, B=59 => rgb(189, 211, 59)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE score > 4872;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 4872",
      "Query output includes only rows having score exactly equivalent to 4872 value",
      "Query output is all rows with score values strictly larger than 4872"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 4872."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score < 5620;",
    "options": [
      "Query output is all rows with score values strictly smaller than 5620",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 5620",
      "Query output includes only rows having score exactly equivalent to 5620 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 5620."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price >= 3295;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 3295",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values greater than or equal to 3295",
      "Query output includes only rows having price exactly equivalent to 3295 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 3295."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B1E1B9'?",
    "options": [
      "rgb(177, 177, 185)",
      "rgb(177, 225, 185)",
      "rgb(201, 225, 185)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #B1E1B9 <=> R=177, G=225, B=185 => rgb(177, 225, 185)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4762E5'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(71, 98, 229)",
      "rgb(95, 98, 229)",
      "rgb(71, 50, 229)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #4762E5 <=> R=71, G=98, B=229 => rgb(71, 98, 229)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price > 7157;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 7157 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly larger than 7157",
      "Query output returns count representing table column rows having price value sum up to 7157"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 7157."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7AE8EF'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(122, 232, 239)",
      "rgb(122, 184, 239)",
      "rgb(146, 232, 239)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #7AE8EF <=> R=122, G=232, B=239 => rgb(122, 232, 239)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity != 5715;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 5715",
      "Query output is all rows with quantity values not equal to 5715",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 5715 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 5715."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC18EE'?",
    "options": [
      "rgb(204, 0, 238)",
      "rgb(204, 24, 238)",
      "rgb(228, 24, 238)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC18EE <=> R=204, G=24, B=238 => rgb(204, 24, 238)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B104CB'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(201, 4, 203)",
      "rgb(177, 4, 203)",
      "rgb(177, 0, 203)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #B104CB <=> R=177, G=4, B=203 => rgb(177, 4, 203)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points >= 1575;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 1575",
      "Query output is all rows with points values greater than or equal to 1575",
      "Query output includes only rows having points exactly equivalent to 1575 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 1575."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points >= 2827;",
    "options": [
      "Query output is all rows with points values greater than or equal to 2827",
      "Query output returns count representing table column rows having points value sum up to 2827",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 2827 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 2827."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0BAFFF'?",
    "options": [
      "rgb(11, 127, 255)",
      "rgb(35, 175, 255)",
      "rgb(11, 175, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0BAFFF <=> R=11, G=175, B=255 => rgb(11, 175, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A8C539'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(192, 197, 57)",
      "rgb(168, 149, 57)",
      "rgb(168, 197, 57)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #A8C539 <=> R=168, G=197, B=57 => rgb(168, 197, 57)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE salary > 1423;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values strictly larger than 1423",
      "Query output includes only rows having salary exactly equivalent to 1423 value",
      "Query output returns count representing table column rows having salary value sum up to 1423"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 1423."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance < 3327;",
    "options": [
      "Query output is all rows with balance values strictly smaller than 3327",
      "Query output returns count representing table column rows having balance value sum up to 3327",
      "Query output includes only rows having balance exactly equivalent to 3327 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 3327."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age > 3544;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 3544",
      "Query output is all rows with age values strictly larger than 3544",
      "Query output includes only rows having age exactly equivalent to 3544 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 3544."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CBEDC9'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(227, 237, 201)",
      "rgb(203, 189, 201)",
      "rgb(203, 237, 201)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CBEDC9 <=> R=203, G=237, B=201 => rgb(203, 237, 201)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EB1D03'?",
    "options": [
      "rgb(255, 29, 3)",
      "rgb(235, 29, 3)",
      "rgb(235, 0, 3)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #EB1D03 <=> R=235, G=29, B=3 => rgb(235, 29, 3)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3C1E18'?",
    "options": [
      "rgb(60, 0, 24)",
      "rgb(60, 30, 24)",
      "rgb(84, 30, 24)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3C1E18 <=> R=60, G=30, B=24 => rgb(60, 30, 24)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE balance >= 6543;",
    "options": [
      "Query output is all rows with balance values greater than or equal to 6543",
      "Query output returns count representing table column rows having balance value sum up to 6543",
      "Query output includes only rows having balance exactly equivalent to 6543 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 6543."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C30AF7'?",
    "options": [
      "rgb(219, 10, 247)",
      "rgb(0, 0, 0)",
      "rgb(195, 0, 247)",
      "rgb(195, 10, 247)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #C30AF7 <=> R=195, G=10, B=247 => rgb(195, 10, 247)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points > 1581;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 1581 value",
      "Query output is all rows with points values strictly larger than 1581",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 1581"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 1581."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6C8AD8'?",
    "options": [
      "rgb(108, 138, 216)",
      "rgb(108, 90, 216)",
      "rgb(0, 0, 0) by design",
      "rgb(132, 138, 216)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6C8AD8 <=> R=108, G=138, B=216 => rgb(108, 138, 216)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE age < 1474;",
    "options": [
      "Query output is all rows with age values strictly smaller than 1474",
      "Query output includes only rows having age exactly equivalent to 1474 value",
      "Query output returns count representing table column rows having age value sum up to 1474",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 1474."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5A2802'?",
    "options": [
      "rgb(90, 0, 2)",
      "rgb(114, 40, 2)",
      "rgb(90, 40, 2)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #5A2802 <=> R=90, G=40, B=2 => rgb(90, 40, 2)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#41636D'?",
    "options": [
      "rgb(89, 99, 109)",
      "rgb(65, 99, 109)",
      "rgb(65, 51, 109)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #41636D <=> R=65, G=99, B=109 => rgb(65, 99, 109)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score < 2454;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 2454 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values strictly smaller than 2454",
      "Query output returns count representing table column rows having score value sum up to 2454"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 2454."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE balance <= 6022;",
    "options": [
      "Query output is all rows with balance values less than or equal to 6022",
      "Query output returns count representing table column rows having balance value sum up to 6022",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 6022 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 6022."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AAEFF7'?",
    "options": [
      "rgb(194, 239, 247)",
      "rgb(170, 191, 247)",
      "rgb(0, 0, 0) in practice",
      "rgb(170, 239, 247)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #AAEFF7 <=> R=170, G=239, B=247 => rgb(170, 239, 247)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary > 103;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 103 value",
      "Query output is all rows with salary values strictly larger than 103",
      "Query output returns count representing table column rows having salary value sum up to 103"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 103."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points != 4157;",
    "options": [
      "Query output is all rows with points values not equal to 4157",
      "Query output includes only rows having points exactly equivalent to 4157 value",
      "Query output returns count representing table column rows having points value sum up to 4157",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 4157."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F0719B'?",
    "options": [
      "rgb(240, 113, 155)",
      "rgb(240, 65, 155)",
      "rgb(255, 113, 155)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F0719B <=> R=240, G=113, B=155 => rgb(240, 113, 155)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AD81E8'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(173, 129, 232)",
      "rgb(197, 129, 232)",
      "rgb(173, 81, 232)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #AD81E8 <=> R=173, G=129, B=232 => rgb(173, 129, 232)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C8959A'?",
    "options": [
      "rgb(200, 149, 154)",
      "rgb(0, 0, 0) by design",
      "rgb(224, 149, 154)",
      "rgb(200, 101, 154)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #C8959A <=> R=200, G=149, B=154 => rgb(200, 149, 154)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4CA807'?",
    "options": [
      "rgb(76, 168, 7)",
      "rgb(0, 0, 0)",
      "rgb(76, 120, 7)",
      "rgb(100, 168, 7)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #4CA807 <=> R=76, G=168, B=7 => rgb(76, 168, 7)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C83216'?",
    "options": [
      "rgb(200, 2, 22)",
      "rgb(200, 50, 22)",
      "rgb(224, 50, 22)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C83216 <=> R=200, G=50, B=22 => rgb(200, 50, 22)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B5127E'?",
    "options": [
      "rgb(181, 18, 126)",
      "rgb(205, 18, 126)",
      "rgb(0, 0, 0)",
      "rgb(181, 0, 126)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #B5127E <=> R=181, G=18, B=126 => rgb(181, 18, 126)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary < 6772;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 6772",
      "Query output includes only rows having salary exactly equivalent to 6772 value",
      "Query output is all rows with salary values strictly smaller than 6772"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 6772."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#30678E'?",
    "options": [
      "rgb(48, 55, 142)",
      "rgb(48, 103, 142)",
      "rgb(0, 0, 0)",
      "rgb(72, 103, 142)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #30678E <=> R=48, G=103, B=142 => rgb(48, 103, 142)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE age <= 6000;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 6000",
      "Query output includes only rows having age exactly equivalent to 6000 value",
      "Query output is all rows with age values less than or equal to 6000"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'age' matches the criteria, which is less than or equal to 6000."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C9977C'?",
    "options": [
      "rgb(225, 151, 124)",
      "rgb(201, 151, 124)",
      "rgb(0, 0, 0) by design",
      "rgb(201, 103, 124)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C9977C <=> R=201, G=151, B=124 => rgb(201, 151, 124)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points >= 7744;",
    "options": [
      "Query output is all rows with points values greater than or equal to 7744",
      "Query output includes only rows having points exactly equivalent to 7744 value",
      "Query output returns count representing table column rows having points value sum up to 7744",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 7744."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#19F709'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(25, 247, 9)",
      "rgb(25, 199, 9)",
      "rgb(49, 247, 9)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #19F709 <=> R=25, G=247, B=9 => rgb(25, 247, 9)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points <= 254;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 254",
      "Query output is all rows with points values less than or equal to 254",
      "Query output includes only rows having points exactly equivalent to 254 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 254."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE quantity != 3227;",
    "options": [
      "Query output is all rows with quantity values not equal to 3227",
      "Query output includes only rows having quantity exactly equivalent to 3227 value",
      "Query output returns count representing table column rows having quantity value sum up to 3227",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 3227."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE age < 5744;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 5744",
      "Query output is all rows with age values strictly smaller than 5744",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 5744 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 5744."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points > 2152;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 2152 value",
      "Query output returns count representing table column rows having points value sum up to 2152",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly larger than 2152"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 2152."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points < 2331;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 2331 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 2331",
      "Query output is all rows with points values strictly smaller than 2331"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 2331."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F260B7'?",
    "options": [
      "rgb(255, 96, 183)",
      "rgb(0, 0, 0)",
      "rgb(242, 48, 183)",
      "rgb(242, 96, 183)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #F260B7 <=> R=242, G=96, B=183 => rgb(242, 96, 183)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score < 7205;",
    "options": [
      "Query output is all rows with score values strictly smaller than 7205",
      "Query output returns count representing table column rows having score value sum up to 7205",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 7205 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 7205."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score <= 5977;",
    "options": [
      "Query output is all rows with score values less than or equal to 5977",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 5977 value",
      "Query output returns count representing table column rows having score value sum up to 5977"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 5977."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#485BD0'?",
    "options": [
      "rgb(72, 91, 208)",
      "rgb(96, 91, 208)",
      "rgb(0, 0, 0)",
      "rgb(72, 43, 208)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #485BD0 <=> R=72, G=91, B=208 => rgb(72, 91, 208)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score < 2984;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 2984",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 2984 value",
      "Query output is all rows with score values strictly smaller than 2984"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 2984."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E3DDCF'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(227, 173, 207)",
      "rgb(251, 221, 207)",
      "rgb(227, 221, 207)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #E3DDCF <=> R=227, G=221, B=207 => rgb(227, 221, 207)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#31A53B'?",
    "options": [
      "rgb(73, 165, 59)",
      "rgb(49, 165, 59)",
      "rgb(0, 0, 0)",
      "rgb(49, 117, 59)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #31A53B <=> R=49, G=165, B=59 => rgb(49, 165, 59)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score > 6143;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 6143",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values strictly larger than 6143",
      "Query output includes only rows having score exactly equivalent to 6143 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 6143."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#394E04'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(81, 78, 4)",
      "rgb(57, 30, 4)",
      "rgb(57, 78, 4)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #394E04 <=> R=57, G=78, B=4 => rgb(57, 78, 4)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary < 2169;",
    "options": [
      "Query output is all rows with salary values strictly smaller than 2169",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 2169",
      "Query output includes only rows having salary exactly equivalent to 2169 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 2169."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E08AA2'?",
    "options": [
      "rgb(224, 90, 162)",
      "rgb(224, 138, 162)",
      "rgb(248, 138, 162)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #E08AA2 <=> R=224, G=138, B=162 => rgb(224, 138, 162)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 204 signal?",
    "options": [
      "Moved Permanently (Target resource URI changed) in standard usage",
      "OK (Request succeeded) in typical implementations",
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) (typical scenario)"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 204 with 'No Content (Request succeeded but returns no content body)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance <= 2448;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values less than or equal to 2448",
      "Query output includes only rows having balance exactly equivalent to 2448 value",
      "Query output returns count representing table column rows having balance value sum up to 2448"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 2448."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity > 451;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 451",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 451 value",
      "Query output is all rows with quantity values strictly larger than 451"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 451."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points <= 782;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values less than or equal to 782",
      "Query output includes only rows having points exactly equivalent to 782 value",
      "Query output returns count representing table column rows having points value sum up to 782"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 782."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E19F5A'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(225, 159, 90)",
      "rgb(225, 111, 90)",
      "rgb(249, 159, 90)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #E19F5A <=> R=225, G=159, B=90 => rgb(225, 159, 90)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#47D76A'?",
    "options": [
      "rgb(71, 167, 106)",
      "rgb(95, 215, 106)",
      "rgb(0, 0, 0)",
      "rgb(71, 215, 106)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #47D76A <=> R=71, G=215, B=106 => rgb(71, 215, 106)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price <= 6889;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 6889 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 6889",
      "Query output is all rows with price values less than or equal to 6889"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 6889."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#38BC69'?",
    "options": [
      "rgb(56, 188, 105)",
      "rgb(80, 188, 105)",
      "rgb(56, 140, 105)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #38BC69 <=> R=56, G=188, B=105 => rgb(56, 188, 105)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity < 556;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 556",
      "Query output is all rows with quantity values strictly smaller than 556",
      "Query output includes only rows having quantity exactly equivalent to 556 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 556."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0783D6'?",
    "options": [
      "rgb(7, 131, 214)",
      "rgb(0, 0, 0)",
      "rgb(31, 131, 214)",
      "rgb(7, 83, 214)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0783D6 <=> R=7, G=131, B=214 => rgb(7, 131, 214)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E0589A'?",
    "options": [
      "rgb(248, 88, 154)",
      "rgb(224, 88, 154)",
      "rgb(224, 40, 154)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #E0589A <=> R=224, G=88, B=154 => rgb(224, 88, 154)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#034B2F'?",
    "options": [
      "rgb(3, 75, 47)",
      "rgb(0, 0, 0)",
      "rgb(27, 75, 47)",
      "rgb(3, 27, 47)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #034B2F <=> R=3, G=75, B=47 => rgb(3, 75, 47)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age < 3264;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 3264 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 3264",
      "Query output is all rows with age values strictly smaller than 3264"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 3264."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points >= 7551;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 7551 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values greater than or equal to 7551",
      "Query output returns count representing table column rows having points value sum up to 7551"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 7551."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#80908A'?",
    "options": [
      "rgb(128, 144, 138)",
      "rgb(0, 0, 0) in practice",
      "rgb(152, 144, 138)",
      "rgb(128, 96, 138)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #80908A <=> R=128, G=144, B=138 => rgb(128, 144, 138)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6422C8'?",
    "options": [
      "rgb(100, 34, 200)",
      "rgb(124, 34, 200)",
      "rgb(100, 0, 200)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6422C8 <=> R=100, G=34, B=200 => rgb(100, 34, 200)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary >= 2845;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 2845",
      "Query output includes only rows having salary exactly equivalent to 2845 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values greater than or equal to 2845"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 2845."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#667A0E'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 74, 14)",
      "rgb(126, 122, 14)",
      "rgb(102, 122, 14)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #667A0E <=> R=102, G=122, B=14 => rgb(102, 122, 14)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points <= 39;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 39 value",
      "Query output returns count representing table column rows having points value sum up to 39",
      "Query output is all rows with points values less than or equal to 39",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 39."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points != 3572;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 3572 value",
      "Query output returns count representing table column rows having points value sum up to 3572",
      "Query output is all rows with points values not equal to 3572",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 3572."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary < 7020;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 7020 value",
      "Query output is all rows with salary values strictly smaller than 7020",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 7020"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 7020."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity != 1609;",
    "options": [
      "Query output is all rows with quantity values not equal to 1609",
      "Query output returns count representing table column rows having quantity value sum up to 1609",
      "Query output includes only rows having quantity exactly equivalent to 1609 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 1609."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity < 3392;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 3392",
      "Query output is all rows with quantity values strictly smaller than 3392",
      "Query output includes only rows having quantity exactly equivalent to 3392 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 3392."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points < 5387;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 5387",
      "Query output is all rows with points values strictly smaller than 5387",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 5387 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 5387."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age >= 17;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 17",
      "Query output is all rows with age values greater than or equal to 17",
      "Query output includes only rows having age exactly equivalent to 17 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 17."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE age <= 2373;",
    "options": [
      "Query output is all rows with age values less than or equal to 2373",
      "Query output returns count representing table column rows having age value sum up to 2373",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 2373 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'age' matches the criteria, which is less than or equal to 2373."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points <= 5522;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 5522 value",
      "Query output returns count representing table column rows having points value sum up to 5522",
      "Query output is all rows with points values less than or equal to 5522"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 5522."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance > 3319;",
    "options": [
      "Query output is all rows with balance values strictly larger than 3319",
      "Query output includes only rows having balance exactly equivalent to 3319 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 3319"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 3319."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary > 5147;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 5147 value",
      "Query output returns count representing table column rows having salary value sum up to 5147",
      "Query output is all rows with salary values strictly larger than 5147",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 5147."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#61D3CB'?",
    "options": [
      "rgb(121, 211, 203)",
      "rgb(97, 211, 203)",
      "rgb(97, 163, 203)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #61D3CB <=> R=97, G=211, B=203 => rgb(97, 211, 203)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3E4F73'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(62, 31, 115)",
      "rgb(62, 79, 115)",
      "rgb(86, 79, 115)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3E4F73 <=> R=62, G=79, B=115 => rgb(62, 79, 115)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#71D8E9'?",
    "options": [
      "rgb(113, 168, 233)",
      "rgb(113, 216, 233)",
      "rgb(137, 216, 233)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #71D8E9 <=> R=113, G=216, B=233 => rgb(113, 216, 233)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary >= 1771;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 1771",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 1771 value",
      "Query output is all rows with salary values greater than or equal to 1771"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 1771."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#515E29'?",
    "options": [
      "rgb(81, 94, 41)",
      "rgb(0, 0, 0)",
      "rgb(81, 46, 41)",
      "rgb(105, 94, 41)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #515E29 <=> R=81, G=94, B=41 => rgb(81, 94, 41)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E60725'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(230, 0, 37)",
      "rgb(254, 7, 37)",
      "rgb(230, 7, 37)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #E60725 <=> R=230, G=7, B=37 => rgb(230, 7, 37)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CAC223'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(226, 194, 35)",
      "rgb(202, 194, 35)",
      "rgb(202, 146, 35)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CAC223 <=> R=202, G=194, B=35 => rgb(202, 194, 35)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0B2D77'?",
    "options": [
      "rgb(35, 45, 119)",
      "rgb(11, 0, 119)",
      "rgb(0, 0, 0)",
      "rgb(11, 45, 119)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0B2D77 <=> R=11, G=45, B=119 => rgb(11, 45, 119)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E34B95'?",
    "options": [
      "rgb(227, 75, 149)",
      "rgb(0, 0, 0)",
      "rgb(227, 27, 149)",
      "rgb(251, 75, 149)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #E34B95 <=> R=227, G=75, B=149 => rgb(227, 75, 149)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary <= 3624;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 3624 value",
      "Query output is all rows with salary values less than or equal to 3624",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 3624"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 3624."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age <= 7304;",
    "options": [
      "Query output is all rows with age values less than or equal to 7304",
      "Query output includes only rows having age exactly equivalent to 7304 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 7304"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'age' matches the criteria, which is less than or equal to 7304."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F8518F'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(248, 33, 143)",
      "rgb(255, 81, 143)",
      "rgb(248, 81, 143)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #F8518F <=> R=248, G=81, B=143 => rgb(248, 81, 143)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B2D976'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(202, 217, 118)",
      "rgb(178, 217, 118)",
      "rgb(178, 169, 118)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #B2D976 <=> R=178, G=217, B=118 => rgb(178, 217, 118)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score <= 6197;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 6197 value",
      "Query output is all rows with score values less than or equal to 6197",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 6197"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 6197."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity > 1004;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 1004 value",
      "Query output returns count representing table column rows having quantity value sum up to 1004",
      "Query output is all rows with quantity values strictly larger than 1004",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 1004."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points != 5836;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 5836 value",
      "Query output returns count representing table column rows having points value sum up to 5836",
      "Query output is all rows with points values not equal to 5836"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 5836."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2F8B6F'?",
    "options": [
      "rgb(47, 139, 111)",
      "rgb(47, 91, 111)",
      "rgb(0, 0, 0)",
      "rgb(71, 139, 111)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #2F8B6F <=> R=47, G=139, B=111 => rgb(47, 139, 111)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price < 2775;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 2775",
      "Query output is all rows with price values strictly smaller than 2775",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 2775 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 2775."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price < 3882;",
    "options": [
      "Query output is all rows with price values strictly smaller than 3882",
      "Query output includes only rows having price exactly equivalent to 3882 value",
      "Query output returns count representing table column rows having price value sum up to 3882",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3882."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A93BAC'?",
    "options": [
      "rgb(169, 59, 172)",
      "rgb(193, 59, 172)",
      "rgb(0, 0, 0)",
      "rgb(169, 11, 172)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #A93BAC <=> R=169, G=59, B=172 => rgb(169, 59, 172)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#81A20A'?",
    "options": [
      "rgb(153, 162, 10)",
      "rgb(129, 162, 10)",
      "rgb(129, 114, 10)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #81A20A <=> R=129, G=162, B=10 => rgb(129, 162, 10)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1E2EBD'?",
    "options": [
      "rgb(30, 46, 189)",
      "rgb(30, 0, 189)",
      "rgb(54, 46, 189)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #1E2EBD <=> R=30, G=46, B=189 => rgb(30, 46, 189)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity >= 2688;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values greater than or equal to 2688",
      "Query output includes only rows having quantity exactly equivalent to 2688 value",
      "Query output returns count representing table column rows having quantity value sum up to 2688"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 2688."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score >= 1470;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values greater than or equal to 1470",
      "Query output returns count representing table column rows having score value sum up to 1470",
      "Query output includes only rows having score exactly equivalent to 1470 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 1470."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4D0637'?",
    "options": [
      "rgb(77, 0, 55)",
      "rgb(77, 6, 55)",
      "rgb(101, 6, 55)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #4D0637 <=> R=77, G=6, B=55 => rgb(77, 6, 55)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary != 2293;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 2293 value",
      "Query output returns count representing table column rows having salary value sum up to 2293",
      "Query output is all rows with salary values not equal to 2293",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 2293."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E036BB'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(224, 54, 187)",
      "rgb(248, 54, 187)",
      "rgb(224, 6, 187)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #E036BB <=> R=224, G=54, B=187 => rgb(224, 54, 187)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8B41CB'?",
    "options": [
      "rgb(139, 65, 203)",
      "rgb(163, 65, 203)",
      "rgb(0, 0, 0)",
      "rgb(139, 17, 203)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #8B41CB <=> R=139, G=65, B=203 => rgb(139, 65, 203)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary <= 4857;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 4857 value",
      "Query output returns count representing table column rows having salary value sum up to 4857",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values less than or equal to 4857"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 4857."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points >= 6220;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 6220 value",
      "Query output is all rows with points values greater than or equal to 6220",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 6220"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 6220."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CD218B'?",
    "options": [
      "rgb(229, 33, 139)",
      "rgb(205, 0, 139)",
      "rgb(205, 33, 139)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CD218B <=> R=205, G=33, B=139 => rgb(205, 33, 139)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE quantity != 4996;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 4996",
      "Query output includes only rows having quantity exactly equivalent to 4996 value",
      "Query output is all rows with quantity values not equal to 4996"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 4996."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points > 1971;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly larger than 1971",
      "Query output returns count representing table column rows having points value sum up to 1971",
      "Query output includes only rows having points exactly equivalent to 1971 value"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 1971."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#50606F'?",
    "options": [
      "rgb(80, 96, 111)",
      "rgb(0, 0, 0)",
      "rgb(104, 96, 111)",
      "rgb(80, 48, 111)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #50606F <=> R=80, G=96, B=111 => rgb(80, 96, 111)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points <= 2940;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 2940",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values less than or equal to 2940",
      "Query output includes only rows having points exactly equivalent to 2940 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 2940."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price < 7714;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 7714 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 7714",
      "Query output returns count representing table column rows having price value sum up to 7714"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 7714."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price < 7674;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 7674 value",
      "Query output is all rows with price values strictly smaller than 7674",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 7674"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 7674."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points < 3315;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 3315",
      "Query output is all rows with points values strictly smaller than 3315",
      "Query output includes only rows having points exactly equivalent to 3315 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 3315."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price >= 35;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 35",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 35 value",
      "Query output is all rows with price values greater than or equal to 35"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 35."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age != 4449;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 4449 value",
      "Query output is all rows with age values not equal to 4449",
      "Query output returns count representing table column rows having age value sum up to 4449",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 4449."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity < 6020;",
    "options": [
      "Query output is all rows with quantity values strictly smaller than 6020",
      "Query output returns count representing table column rows having quantity value sum up to 6020",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 6020 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 6020."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity != 6010;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 6010 value",
      "Query output returns count representing table column rows having quantity value sum up to 6010",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values not equal to 6010"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 6010."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points >= 4819;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 4819",
      "Query output includes only rows having points exactly equivalent to 4819 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values greater than or equal to 4819"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 4819."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE age <= 5068;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 5068 value",
      "Query output is all rows with age values less than or equal to 5068",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 5068"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'age' matches the criteria, which is less than or equal to 5068."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance != 6405;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 6405",
      "Query output includes only rows having balance exactly equivalent to 6405 value",
      "Query output is all rows with balance values not equal to 6405"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 6405."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary > 369;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 369 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 369",
      "Query output is all rows with salary values strictly larger than 369"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 369."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#426D54'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(66, 61, 84)",
      "rgb(90, 109, 84)",
      "rgb(66, 109, 84)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #426D54 <=> R=66, G=109, B=84 => rgb(66, 109, 84)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#98ADBB'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(152, 125, 187)",
      "rgb(152, 173, 187)",
      "rgb(176, 173, 187)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #98ADBB <=> R=152, G=173, B=187 => rgb(152, 173, 187)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#522233'?",
    "options": [
      "rgb(106, 34, 51)",
      "rgb(82, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(82, 34, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #522233 <=> R=82, G=34, B=51 => rgb(82, 34, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance < 3097;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 3097",
      "Query output includes only rows having balance exactly equivalent to 3097 value",
      "Query output is all rows with balance values strictly smaller than 3097",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 3097."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance != 7179;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 7179",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 7179 value",
      "Query output is all rows with balance values not equal to 7179"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 7179."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity <= 1125;",
    "options": [
      "Query output is all rows with quantity values less than or equal to 1125",
      "Query output includes only rows having quantity exactly equivalent to 1125 value",
      "Query output returns count representing table column rows having quantity value sum up to 1125",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 1125."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance > 5146;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly larger than 5146",
      "Query output returns count representing table column rows having balance value sum up to 5146",
      "Query output includes only rows having balance exactly equivalent to 5146 value"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 5146."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score < 7636;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 7636",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 7636 value",
      "Query output is all rows with score values strictly smaller than 7636"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 7636."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2FB829'?",
    "options": [
      "rgb(71, 184, 41)",
      "rgb(47, 184, 41)",
      "rgb(47, 136, 41)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #2FB829 <=> R=47, G=184, B=41 => rgb(47, 184, 41)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6A296B'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(106, 0, 107)",
      "rgb(130, 41, 107)",
      "rgb(106, 41, 107)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6A296B <=> R=106, G=41, B=107 => rgb(106, 41, 107)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points != 7367;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 7367 value",
      "Query output is all rows with points values not equal to 7367",
      "Query output returns count representing table column rows having points value sum up to 7367"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 7367."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary <= 237;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 237",
      "Query output is all rows with salary values less than or equal to 237",
      "Query output includes only rows having salary exactly equivalent to 237 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 237."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#47DD3F'?",
    "options": [
      "rgb(71, 221, 63)",
      "rgb(95, 221, 63)",
      "rgb(71, 173, 63)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #47DD3F <=> R=71, G=221, B=63 => rgb(71, 221, 63)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price < 4583;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 4583",
      "Query output includes only rows having price exactly equivalent to 4583 value",
      "Query output is all rows with price values strictly smaller than 4583",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 4583."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price >= 3776;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 3776",
      "Query output is all rows with price values greater than or equal to 3776",
      "Query output includes only rows having price exactly equivalent to 3776 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 3776."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2854DA'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(64, 84, 218)",
      "rgb(40, 36, 218)",
      "rgb(40, 84, 218)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #2854DA <=> R=40, G=84, B=218 => rgb(40, 84, 218)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary != 7509;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 7509 value",
      "Query output is all rows with salary values not equal to 7509",
      "Query output returns count representing table column rows having salary value sum up to 7509"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 7509."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price >= 1596;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 1596 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values greater than or equal to 1596",
      "Query output returns count representing table column rows having price value sum up to 1596"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 1596."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#55DBE0'?",
    "options": [
      "rgb(85, 171, 224)",
      "rgb(109, 219, 224)",
      "rgb(85, 219, 224)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #55DBE0 <=> R=85, G=219, B=224 => rgb(85, 219, 224)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance <= 6752;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 6752",
      "Query output is all rows with balance values less than or equal to 6752",
      "Query output includes only rows having balance exactly equivalent to 6752 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 6752."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C3D50C'?",
    "options": [
      "rgb(195, 165, 12)",
      "rgb(0, 0, 0)",
      "rgb(195, 213, 12)",
      "rgb(219, 213, 12)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #C3D50C <=> R=195, G=213, B=12 => rgb(195, 213, 12)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance >= 4861;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 4861",
      "Query output is all rows with balance values greater than or equal to 4861",
      "Query output includes only rows having balance exactly equivalent to 4861 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 4861."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0A7BFA'?",
    "options": [
      "rgb(10, 123, 250)",
      "rgb(10, 75, 250)",
      "rgb(34, 123, 250)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0A7BFA <=> R=10, G=123, B=250 => rgb(10, 123, 250)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#127053'?",
    "options": [
      "rgb(42, 112, 83)",
      "rgb(18, 64, 83)",
      "rgb(0, 0, 0)",
      "rgb(18, 112, 83)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #127053 <=> R=18, G=112, B=83 => rgb(18, 112, 83)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#BD3812'?",
    "options": [
      "rgb(213, 56, 18)",
      "rgb(189, 56, 18)",
      "rgb(189, 8, 18)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #BD3812 <=> R=189, G=56, B=18 => rgb(189, 56, 18)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE age >= 2513;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 2513 value",
      "Query output returns count representing table column rows having age value sum up to 2513",
      "Query output is all rows with age values greater than or equal to 2513"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 2513."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points >= 2694;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 2694",
      "Query output is all rows with points values greater than or equal to 2694",
      "Query output includes only rows having points exactly equivalent to 2694 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 2694."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE age < 4736;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly smaller than 4736",
      "Query output returns count representing table column rows having age value sum up to 4736",
      "Query output includes only rows having age exactly equivalent to 4736 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 4736."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity != 3584;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 3584 value",
      "Query output is all rows with quantity values not equal to 3584",
      "Query output returns count representing table column rows having quantity value sum up to 3584"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 3584."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7400AC'?",
    "options": [
      "rgb(183, 255, 255)",
      "rgb(140, 0, 172)",
      "rgb(0, 0, 0)",
      "rgb(116, 0, 172)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #7400AC <=> R=116, G=0, B=172 => rgb(116, 0, 172)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#59AA7F'?",
    "options": [
      "rgb(89, 170, 127)",
      "rgb(0, 0, 0)",
      "rgb(113, 170, 127)",
      "rgb(89, 122, 127)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #59AA7F <=> R=89, G=170, B=127 => rgb(89, 170, 127)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#73F317'?",
    "options": [
      "rgb(115, 243, 23)",
      "rgb(115, 195, 23)",
      "rgb(139, 243, 23)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #73F317 <=> R=115, G=243, B=23 => rgb(115, 243, 23)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE age > 6003;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 6003 value",
      "Query output is all rows with age values strictly larger than 6003",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 6003"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 6003."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4BA73F'?",
    "options": [
      "rgb(75, 119, 63)",
      "rgb(75, 167, 63)",
      "rgb(99, 167, 63)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #4BA73F <=> R=75, G=167, B=63 => rgb(75, 167, 63)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance <= 3928;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 3928 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 3928",
      "Query output is all rows with balance values less than or equal to 3928"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 3928."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score <= 7324;",
    "options": [
      "Query output is all rows with score values less than or equal to 7324",
      "Query output returns count representing table column rows having score value sum up to 7324",
      "Query output includes only rows having score exactly equivalent to 7324 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 7324."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary > 1498;",
    "options": [
      "Query output is all rows with salary values strictly larger than 1498",
      "Query output returns count representing table column rows having salary value sum up to 1498",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 1498 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 1498."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity != 5155;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 5155",
      "Query output includes only rows having quantity exactly equivalent to 5155 value",
      "Query output is all rows with quantity values not equal to 5155",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 5155."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity >= 6472;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 6472",
      "Query output includes only rows having quantity exactly equivalent to 6472 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values greater than or equal to 6472"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 6472."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8806F4'?",
    "options": [
      "rgb(136, 0, 244)",
      "rgb(160, 6, 244)",
      "rgb(136, 6, 244)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #8806F4 <=> R=136, G=6, B=244 => rgb(136, 6, 244)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price >= 228;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values greater than or equal to 228",
      "Query output includes only rows having price exactly equivalent to 228 value",
      "Query output returns count representing table column rows having price value sum up to 228"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 228."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price < 3272;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 3272 value",
      "Query output returns count representing table column rows having price value sum up to 3272",
      "Query output is all rows with price values strictly smaller than 3272",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3272."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity != 6255;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 6255",
      "Query output includes only rows having quantity exactly equivalent to 6255 value",
      "Query output is all rows with quantity values not equal to 6255",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 6255."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points > 3382;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 3382",
      "Query output is all rows with points values strictly larger than 3382",
      "Query output includes only rows having points exactly equivalent to 3382 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 3382."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#81D966'?",
    "options": [
      "rgb(129, 169, 102)",
      "rgb(129, 217, 102)",
      "rgb(153, 217, 102)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #81D966 <=> R=129, G=217, B=102 => rgb(129, 217, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points >= 5395;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 5395 value",
      "Query output returns count representing table column rows having points value sum up to 5395",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values greater than or equal to 5395"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 5395."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity < 258;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 258",
      "Query output is all rows with quantity values strictly smaller than 258",
      "Query output includes only rows having quantity exactly equivalent to 258 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 258."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99B9EA'?",
    "options": [
      "rgb(153, 185, 234)",
      "rgb(153, 137, 234)",
      "rgb(0, 0, 0) in practice",
      "rgb(177, 185, 234)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99B9EA <=> R=153, G=185, B=234 => rgb(153, 185, 234)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price > 5352;",
    "options": [
      "Query output is all rows with price values strictly larger than 5352",
      "Query output returns count representing table column rows having price value sum up to 5352",
      "Query output includes only rows having price exactly equivalent to 5352 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 5352."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#56F7A4'?",
    "options": [
      "rgb(86, 199, 164)",
      "rgb(110, 247, 164)",
      "rgb(86, 247, 164)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #56F7A4 <=> R=86, G=247, B=164 => rgb(86, 247, 164)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE age >= 4662;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 4662 value",
      "Query output is all rows with age values greater than or equal to 4662",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 4662"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 4662."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points > 5042;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 5042 value",
      "Query output returns count representing table column rows having points value sum up to 5042",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly larger than 5042"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 5042."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price != 871;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 871 value",
      "Query output is all rows with price values not equal to 871",
      "Query output returns count representing table column rows having price value sum up to 871",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 871."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B4BC65'?",
    "options": [
      "rgb(204, 188, 101)",
      "rgb(180, 188, 101)",
      "rgb(0, 0, 0) by design",
      "rgb(180, 140, 101)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #B4BC65 <=> R=180, G=188, B=101 => rgb(180, 188, 101)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AD6185'?",
    "options": [
      "rgb(197, 97, 133)",
      "rgb(173, 49, 133)",
      "rgb(0, 0, 0)",
      "rgb(173, 97, 133)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #AD6185 <=> R=173, G=97, B=133 => rgb(173, 97, 133)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C298A9'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(194, 152, 169)",
      "rgb(194, 104, 169)",
      "rgb(218, 152, 169)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C298A9 <=> R=194, G=152, B=169 => rgb(194, 152, 169)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#655B84'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(101, 91, 132)",
      "rgb(125, 91, 132)",
      "rgb(101, 43, 132)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #655B84 <=> R=101, G=91, B=132 => rgb(101, 91, 132)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points <= 6594;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 6594",
      "Query output includes only rows having points exactly equivalent to 6594 value",
      "Query output is all rows with points values less than or equal to 6594"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 6594."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity >= 6970;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 6970 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 6970",
      "Query output is all rows with quantity values greater than or equal to 6970"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 6970."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3F0A6A'?",
    "options": [
      "rgb(63, 0, 106)",
      "rgb(63, 10, 106)",
      "rgb(0, 0, 0)",
      "rgb(87, 10, 106)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3F0A6A <=> R=63, G=10, B=106 => rgb(63, 10, 106)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5C0B95'?",
    "options": [
      "rgb(116, 11, 149)",
      "rgb(92, 11, 149)",
      "rgb(92, 0, 149)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #5C0B95 <=> R=92, G=11, B=149 => rgb(92, 11, 149)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance >= 1554;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values greater than or equal to 1554",
      "Query output returns count representing table column rows having balance value sum up to 1554",
      "Query output includes only rows having balance exactly equivalent to 1554 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 1554."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#686EFF'?",
    "options": [
      "rgb(128, 110, 255)",
      "rgb(104, 110, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(104, 62, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #686EFF <=> R=104, G=110, B=255 => rgb(104, 110, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance > 5469;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 5469 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 5469",
      "Query output is all rows with balance values strictly larger than 5469"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 5469."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E33602'?",
    "options": [
      "rgb(251, 54, 2)",
      "rgb(227, 6, 2)",
      "rgb(227, 54, 2)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #E33602 <=> R=227, G=54, B=2 => rgb(227, 54, 2)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity < 3825;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly smaller than 3825",
      "Query output returns count representing table column rows having quantity value sum up to 3825",
      "Query output includes only rows having quantity exactly equivalent to 3825 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 3825."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance != 4401;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values not equal to 4401",
      "Query output returns count representing table column rows having balance value sum up to 4401",
      "Query output includes only rows having balance exactly equivalent to 4401 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 4401."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#24A40E'?",
    "options": [
      "rgb(60, 164, 14)",
      "rgb(36, 116, 14)",
      "rgb(0, 0, 0)",
      "rgb(36, 164, 14)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #24A40E <=> R=36, G=164, B=14 => rgb(36, 164, 14)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0A534D'?",
    "options": [
      "rgb(34, 83, 77)",
      "rgb(10, 35, 77)",
      "rgb(0, 0, 0)",
      "rgb(10, 83, 77)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0A534D <=> R=10, G=83, B=77 => rgb(10, 83, 77)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE age < 7103;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 7103 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly smaller than 7103",
      "Query output returns count representing table column rows having age value sum up to 7103"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 7103."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4A8A0D'?",
    "options": [
      "rgb(74, 90, 13)",
      "rgb(0, 0, 0)",
      "rgb(74, 138, 13)",
      "rgb(98, 138, 13)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #4A8A0D <=> R=74, G=138, B=13 => rgb(74, 138, 13)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary > 5278;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 5278 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 5278",
      "Query output is all rows with salary values strictly larger than 5278"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 5278."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity <= 6130;",
    "options": [
      "Query output is all rows with quantity values less than or equal to 6130",
      "Query output includes only rows having quantity exactly equivalent to 6130 value",
      "Query output returns count representing table column rows having quantity value sum up to 6130",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 6130."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity >= 5155;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 5155",
      "Query output is all rows with quantity values greater than or equal to 5155",
      "Query output includes only rows having quantity exactly equivalent to 5155 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 5155."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance < 4029;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 4029 value",
      "Query output returns count representing table column rows having balance value sum up to 4029",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly smaller than 4029"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 4029."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#229AD8'?",
    "options": [
      "rgb(34, 154, 216)",
      "rgb(58, 154, 216)",
      "rgb(34, 106, 216)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #229AD8 <=> R=34, G=154, B=216 => rgb(34, 154, 216)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#78F3DF'?",
    "options": [
      "rgb(144, 243, 223)",
      "rgb(0, 0, 0) by design",
      "rgb(120, 243, 223)",
      "rgb(120, 195, 223)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #78F3DF <=> R=120, G=243, B=223 => rgb(120, 243, 223)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity != 7803;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 7803",
      "Query output includes only rows having quantity exactly equivalent to 7803 value",
      "Query output is all rows with quantity values not equal to 7803",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 7803."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A83F8E'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(168, 15, 142)",
      "rgb(168, 63, 142)",
      "rgb(192, 63, 142)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #A83F8E <=> R=168, G=63, B=142 => rgb(168, 63, 142)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9ADCBA'?",
    "options": [
      "rgb(154, 172, 186)",
      "rgb(178, 220, 186)",
      "rgb(154, 220, 186)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #9ADCBA <=> R=154, G=220, B=186 => rgb(154, 220, 186)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price != 3847;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 3847 value",
      "Query output returns count representing table column rows having price value sum up to 3847",
      "Query output is all rows with price values not equal to 3847",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 3847."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9561BE'?",
    "options": [
      "rgb(149, 97, 190)",
      "rgb(149, 49, 190)",
      "rgb(0, 0, 0)",
      "rgb(173, 97, 190)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9561BE <=> R=149, G=97, B=190 => rgb(149, 97, 190)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#43B61A'?",
    "options": [
      "rgb(67, 134, 26)",
      "rgb(91, 182, 26)",
      "rgb(67, 182, 26)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #43B61A <=> R=67, G=182, B=26 => rgb(67, 182, 26)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5E319E'?",
    "options": [
      "rgb(118, 49, 158)",
      "rgb(94, 1, 158)",
      "rgb(0, 0, 0)",
      "rgb(94, 49, 158)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #5E319E <=> R=94, G=49, B=158 => rgb(94, 49, 158)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity <= 359;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 359 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values less than or equal to 359",
      "Query output returns count representing table column rows having quantity value sum up to 359"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 359."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price <= 2293;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 2293 value",
      "Query output is all rows with price values less than or equal to 2293",
      "Query output returns count representing table column rows having price value sum up to 2293",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 2293."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price < 3311;",
    "options": [
      "Query output is all rows with price values strictly smaller than 3311",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 3311 value",
      "Query output returns count representing table column rows having price value sum up to 3311"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3311."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#65A36D'?",
    "options": [
      "rgb(101, 115, 109)",
      "rgb(125, 163, 109)",
      "rgb(0, 0, 0) by design",
      "rgb(101, 163, 109)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #65A36D <=> R=101, G=163, B=109 => rgb(101, 163, 109)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C6986A'?",
    "options": [
      "rgb(198, 152, 106)",
      "rgb(198, 104, 106)",
      "rgb(0, 0, 0) in practice",
      "rgb(222, 152, 106)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #C6986A <=> R=198, G=152, B=106 => rgb(198, 152, 106)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity < 4075;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly smaller than 4075",
      "Query output includes only rows having quantity exactly equivalent to 4075 value",
      "Query output returns count representing table column rows having quantity value sum up to 4075"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 4075."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#655359'?",
    "options": [
      "rgb(125, 83, 89)",
      "rgb(0, 0, 0)",
      "rgb(101, 83, 89)",
      "rgb(101, 35, 89)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #655359 <=> R=101, G=83, B=89 => rgb(101, 83, 89)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance <= 5913;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 5913 value",
      "Query output returns count representing table column rows having balance value sum up to 5913",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values less than or equal to 5913"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 5913."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#32690C'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(50, 105, 12)",
      "rgb(50, 57, 12)",
      "rgb(74, 105, 12)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #32690C <=> R=50, G=105, B=12 => rgb(50, 105, 12)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score > 744;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 744 value",
      "Query output returns count representing table column rows having score value sum up to 744",
      "Query output is all rows with score values strictly larger than 744"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 744."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#BA344B'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(186, 4, 75)",
      "rgb(210, 52, 75)",
      "rgb(186, 52, 75)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #BA344B <=> R=186, G=52, B=75 => rgb(186, 52, 75)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points <= 1814;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 1814 value",
      "Query output is all rows with points values less than or equal to 1814",
      "Query output returns count representing table column rows having points value sum up to 1814",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 1814."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#870E40'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(135, 14, 64)",
      "rgb(159, 14, 64)",
      "rgb(135, 0, 64)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #870E40 <=> R=135, G=14, B=64 => rgb(135, 14, 64)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points > 3954;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 3954",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly larger than 3954",
      "Query output includes only rows having points exactly equivalent to 3954 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 3954."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points >= 6351;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 6351",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 6351 value",
      "Query output is all rows with points values greater than or equal to 6351"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 6351."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary != 7027;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values not equal to 7027",
      "Query output includes only rows having salary exactly equivalent to 7027 value",
      "Query output returns count representing table column rows having salary value sum up to 7027"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 7027."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EE8C16'?",
    "options": [
      "rgb(238, 140, 22)",
      "rgb(238, 92, 22)",
      "rgb(0, 0, 0)",
      "rgb(255, 140, 22)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #EE8C16 <=> R=238, G=140, B=22 => rgb(238, 140, 22)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE age != 3565;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 3565 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values not equal to 3565",
      "Query output returns count representing table column rows having age value sum up to 3565"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 3565."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1E2FF6'?",
    "options": [
      "rgb(54, 47, 246)",
      "rgb(30, 47, 246)",
      "rgb(30, 0, 246)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #1E2FF6 <=> R=30, G=47, B=246 => rgb(30, 47, 246)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary > 1569;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values strictly larger than 1569",
      "Query output returns count representing table column rows having salary value sum up to 1569",
      "Query output includes only rows having salary exactly equivalent to 1569 value"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 1569."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points > 3984;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 3984 value",
      "Query output is all rows with points values strictly larger than 3984",
      "Query output returns count representing table column rows having points value sum up to 3984"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 3984."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7D1951'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(125, 0, 81)",
      "rgb(125, 25, 81)",
      "rgb(149, 25, 81)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #7D1951 <=> R=125, G=25, B=81 => rgb(125, 25, 81)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#BF4034'?",
    "options": [
      "rgb(191, 64, 52)",
      "rgb(0, 0, 0)",
      "rgb(191, 16, 52)",
      "rgb(215, 64, 52)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #BF4034 <=> R=191, G=64, B=52 => rgb(191, 64, 52)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CA90FB'?",
    "options": [
      "rgb(202, 144, 251)",
      "rgb(202, 96, 251)",
      "rgb(226, 144, 251)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CA90FB <=> R=202, G=144, B=251 => rgb(202, 144, 251)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EEBE70'?",
    "options": [
      "rgb(238, 190, 112)",
      "rgb(238, 142, 112)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 190, 112)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #EEBE70 <=> R=238, G=190, B=112 => rgb(238, 190, 112)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score > 5663;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 5663 value",
      "Query output returns count representing table column rows having score value sum up to 5663",
      "Query output is all rows with score values strictly larger than 5663"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 5663."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points != 2450;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 2450 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values not equal to 2450",
      "Query output returns count representing table column rows having points value sum up to 2450"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 2450."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score >= 973;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 973 value",
      "Query output is all rows with score values greater than or equal to 973",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 973"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 973."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points < 3359;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly smaller than 3359",
      "Query output returns count representing table column rows having points value sum up to 3359",
      "Query output includes only rows having points exactly equivalent to 3359 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 3359."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6AAFB1'?",
    "options": [
      "rgb(106, 175, 177)",
      "rgb(0, 0, 0) by design",
      "rgb(130, 175, 177)",
      "rgb(106, 127, 177)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6AAFB1 <=> R=106, G=175, B=177 => rgb(106, 175, 177)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#22AC9F'?",
    "options": [
      "rgb(58, 172, 159)",
      "rgb(34, 124, 159)",
      "rgb(0, 0, 0)",
      "rgb(34, 172, 159)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #22AC9F <=> R=34, G=172, B=159 => rgb(34, 172, 159)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE salary > 690;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 690",
      "Query output includes only rows having salary exactly equivalent to 690 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values strictly larger than 690"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 690."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#24915B'?",
    "options": [
      "rgb(36, 97, 91)",
      "rgb(60, 145, 91)",
      "rgb(36, 145, 91)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #24915B <=> R=36, G=145, B=91 => rgb(36, 145, 91)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price >= 2745;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 2745",
      "Query output includes only rows having price exactly equivalent to 2745 value",
      "Query output is all rows with price values greater than or equal to 2745",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 2745."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE score > 7651;",
    "options": [
      "Query output is all rows with score values strictly larger than 7651",
      "Query output includes only rows having score exactly equivalent to 7651 value",
      "Query output returns count representing table column rows having score value sum up to 7651",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 7651."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance > 4387;",
    "options": [
      "Query output is all rows with balance values strictly larger than 4387",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 4387",
      "Query output includes only rows having balance exactly equivalent to 4387 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 4387."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price > 6585;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 6585 value",
      "Query output returns count representing table column rows having price value sum up to 6585",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly larger than 6585"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 6585."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B135AF'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(177, 5, 175)",
      "rgb(201, 53, 175)",
      "rgb(177, 53, 175)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B135AF <=> R=177, G=53, B=175 => rgb(177, 53, 175)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance >= 4633;",
    "options": [
      "Query output is all rows with balance values greater than or equal to 4633",
      "Query output returns count representing table column rows having balance value sum up to 4633",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 4633 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 4633."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#60D86C'?",
    "options": [
      "rgb(96, 168, 108)",
      "rgb(120, 216, 108)",
      "rgb(96, 216, 108)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #60D86C <=> R=96, G=216, B=108 => rgb(96, 216, 108)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3EC08D'?",
    "options": [
      "rgb(62, 144, 141)",
      "rgb(0, 0, 0)",
      "rgb(86, 192, 141)",
      "rgb(62, 192, 141)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3EC08D <=> R=62, G=192, B=141 => rgb(62, 192, 141)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points < 7913;",
    "options": [
      "Query output is all rows with points values strictly smaller than 7913",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 7913 value",
      "Query output returns count representing table column rows having points value sum up to 7913"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 7913."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points != 6630;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 6630 value",
      "Query output is all rows with points values not equal to 6630",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 6630"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 6630."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9DAF07'?",
    "options": [
      "rgb(181, 175, 7)",
      "rgb(157, 127, 7)",
      "rgb(0, 0, 0)",
      "rgb(157, 175, 7)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9DAF07 <=> R=157, G=175, B=7 => rgb(157, 175, 7)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE quantity >= 7932;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 7932 value",
      "Query output returns count representing table column rows having quantity value sum up to 7932",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values greater than or equal to 7932"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 7932."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price < 2555;",
    "options": [
      "Query output is all rows with price values strictly smaller than 2555",
      "Query output returns count representing table column rows having price value sum up to 2555",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 2555 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 2555."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1B51A7'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 81, 167)",
      "rgb(27, 33, 167)",
      "rgb(27, 81, 167)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #1B51A7 <=> R=27, G=81, B=167 => rgb(27, 81, 167)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#215679'?",
    "options": [
      "rgb(57, 86, 121)",
      "rgb(33, 86, 121)",
      "rgb(33, 38, 121)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #215679 <=> R=33, G=86, B=121 => rgb(33, 86, 121)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points != 7138;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 7138 value",
      "Query output is all rows with points values not equal to 7138",
      "Query output returns count representing table column rows having points value sum up to 7138",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 7138."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points > 3003;",
    "options": [
      "Query output is all rows with points values strictly larger than 3003",
      "Query output returns count representing table column rows having points value sum up to 3003",
      "Query output includes only rows having points exactly equivalent to 3003 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 3003."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#472F51'?",
    "options": [
      "rgb(95, 47, 81)",
      "rgb(71, 47, 81)",
      "rgb(71, 0, 81)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #472F51 <=> R=71, G=47, B=81 => rgb(71, 47, 81)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#ED65B7'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(255, 101, 183)",
      "rgb(237, 101, 183)",
      "rgb(237, 53, 183)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #ED65B7 <=> R=237, G=101, B=183 => rgb(237, 101, 183)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#733444'?",
    "options": [
      "rgb(139, 52, 68)",
      "rgb(115, 4, 68)",
      "rgb(115, 52, 68)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #733444 <=> R=115, G=52, B=68 => rgb(115, 52, 68)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B2CE0D'?",
    "options": [
      "rgb(178, 206, 13)",
      "rgb(178, 158, 13)",
      "rgb(202, 206, 13)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #B2CE0D <=> R=178, G=206, B=13 => rgb(178, 206, 13)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F7797A'?",
    "options": [
      "rgb(247, 73, 122)",
      "rgb(255, 121, 122)",
      "rgb(0, 0, 0) in practice",
      "rgb(247, 121, 122)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #F7797A <=> R=247, G=121, B=122 => rgb(247, 121, 122)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance > 6382;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 6382",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly larger than 6382",
      "Query output includes only rows having balance exactly equivalent to 6382 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 6382."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price <= 4549;",
    "options": [
      "Query output is all rows with price values less than or equal to 4549",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 4549",
      "Query output includes only rows having price exactly equivalent to 4549 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 4549."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price >= 6427;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 6427 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 6427",
      "Query output is all rows with price values greater than or equal to 6427"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 6427."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE score >= 7350;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 7350",
      "Query output includes only rows having score exactly equivalent to 7350 value",
      "Query output is all rows with score values greater than or equal to 7350"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 7350."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2D1ACE'?",
    "options": [
      "rgb(45, 26, 206)",
      "rgb(45, 0, 206)",
      "rgb(69, 26, 206)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #2D1ACE <=> R=45, G=26, B=206 => rgb(45, 26, 206)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score < 5676;",
    "options": [
      "Query output is all rows with score values strictly smaller than 5676",
      "Query output includes only rows having score exactly equivalent to 5676 value",
      "Query output returns count representing table column rows having score value sum up to 5676",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 5676."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity < 989;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly smaller than 989",
      "Query output includes only rows having quantity exactly equivalent to 989 value",
      "Query output returns count representing table column rows having quantity value sum up to 989"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 989."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#11440D'?",
    "options": [
      "rgb(17, 20, 13)",
      "rgb(41, 68, 13)",
      "rgb(17, 68, 13)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #11440D <=> R=17, G=68, B=13 => rgb(17, 68, 13)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7C95F1'?",
    "options": [
      "rgb(148, 149, 241)",
      "rgb(0, 0, 0) in practice",
      "rgb(124, 149, 241)",
      "rgb(124, 101, 241)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #7C95F1 <=> R=124, G=149, B=241 => rgb(124, 149, 241)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#980CC4'?",
    "options": [
      "rgb(152, 0, 196)",
      "rgb(0, 0, 0)",
      "rgb(152, 12, 196)",
      "rgb(176, 12, 196)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #980CC4 <=> R=152, G=12, B=196 => rgb(152, 12, 196)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B318DD'?",
    "options": [
      "rgb(203, 24, 221)",
      "rgb(179, 0, 221)",
      "rgb(0, 0, 0)",
      "rgb(179, 24, 221)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B318DD <=> R=179, G=24, B=221 => rgb(179, 24, 221)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D22D16'?",
    "options": [
      "rgb(210, 0, 22)",
      "rgb(234, 45, 22)",
      "rgb(0, 0, 0)",
      "rgb(210, 45, 22)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #D22D16 <=> R=210, G=45, B=22 => rgb(210, 45, 22)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance != 4626;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 4626 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 4626",
      "Query output is all rows with balance values not equal to 4626"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 4626."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3F1FCD'?",
    "options": [
      "rgb(87, 31, 205)",
      "rgb(63, 0, 205)",
      "rgb(0, 0, 0)",
      "rgb(63, 31, 205)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3F1FCD <=> R=63, G=31, B=205 => rgb(63, 31, 205)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#965984'?",
    "options": [
      "rgb(174, 89, 132)",
      "rgb(150, 41, 132)",
      "rgb(150, 89, 132)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #965984 <=> R=150, G=89, B=132 => rgb(150, 89, 132)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary <= 2378;",
    "options": [
      "Query output is all rows with salary values less than or equal to 2378",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 2378",
      "Query output includes only rows having salary exactly equivalent to 2378 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 2378."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary > 3031;",
    "options": [
      "Query output is all rows with salary values strictly larger than 3031",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 3031 value",
      "Query output returns count representing table column rows having salary value sum up to 3031"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 3031."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#527B6A'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(82, 123, 106)",
      "rgb(106, 123, 106)",
      "rgb(82, 75, 106)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #527B6A <=> R=82, G=123, B=106 => rgb(82, 123, 106)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity <= 5502;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 5502",
      "Query output includes only rows having quantity exactly equivalent to 5502 value",
      "Query output is all rows with quantity values less than or equal to 5502"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 5502."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points != 3456;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 3456",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values not equal to 3456",
      "Query output includes only rows having points exactly equivalent to 3456 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 3456."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score != 3836;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values not equal to 3836",
      "Query output returns count representing table column rows having score value sum up to 3836",
      "Query output includes only rows having score exactly equivalent to 3836 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 3836."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price > 3503;",
    "options": [
      "Query output is all rows with price values strictly larger than 3503",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 3503",
      "Query output includes only rows having price exactly equivalent to 3503 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 3503."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D2D7F4'?",
    "options": [
      "rgb(234, 215, 244)",
      "rgb(0, 0, 0) by design",
      "rgb(210, 167, 244)",
      "rgb(210, 215, 244)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #D2D7F4 <=> R=210, G=215, B=244 => rgb(210, 215, 244)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price != 4244;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 4244 value",
      "Query output returns count representing table column rows having price value sum up to 4244",
      "Query output is all rows with price values not equal to 4244",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 4244."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4350CA'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(67, 80, 202)",
      "rgb(91, 80, 202)",
      "rgb(67, 32, 202)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #4350CA <=> R=67, G=80, B=202 => rgb(67, 80, 202)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6A944D'?",
    "options": [
      "rgb(106, 100, 77)",
      "rgb(130, 148, 77)",
      "rgb(0, 0, 0)",
      "rgb(106, 148, 77)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6A944D <=> R=106, G=148, B=77 => rgb(106, 148, 77)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE score != 5831;",
    "options": [
      "Query output is all rows with score values not equal to 5831",
      "Query output includes only rows having score exactly equivalent to 5831 value",
      "Query output returns count representing table column rows having score value sum up to 5831",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 5831."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#886E15'?",
    "options": [
      "rgb(136, 110, 21)",
      "rgb(136, 62, 21)",
      "rgb(0, 0, 0)",
      "rgb(160, 110, 21)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #886E15 <=> R=136, G=110, B=21 => rgb(136, 110, 21)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE balance <= 2822;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 2822",
      "Query output is all rows with balance values less than or equal to 2822",
      "Query output includes only rows having balance exactly equivalent to 2822 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 2822."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8FD5F6'?",
    "options": [
      "rgb(167, 213, 246)",
      "rgb(143, 165, 246)",
      "rgb(143, 213, 246)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #8FD5F6 <=> R=143, G=213, B=246 => rgb(143, 213, 246)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3C7CD6'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(84, 124, 214)",
      "rgb(60, 124, 214)",
      "rgb(60, 76, 214)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3C7CD6 <=> R=60, G=124, B=214 => rgb(60, 124, 214)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points >= 4836;",
    "options": [
      "Query output is all rows with points values greater than or equal to 4836",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 4836 value",
      "Query output returns count representing table column rows having points value sum up to 4836"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 4836."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F025C7'?",
    "options": [
      "rgb(240, 37, 199)",
      "rgb(240, 0, 199)",
      "rgb(255, 37, 199)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F025C7 <=> R=240, G=37, B=199 => rgb(240, 37, 199)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points != 7403;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values not equal to 7403",
      "Query output includes only rows having points exactly equivalent to 7403 value",
      "Query output returns count representing table column rows having points value sum up to 7403"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 7403."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3D8751'?",
    "options": [
      "rgb(61, 87, 81)",
      "rgb(0, 0, 0)",
      "rgb(85, 135, 81)",
      "rgb(61, 135, 81)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3D8751 <=> R=61, G=135, B=81 => rgb(61, 135, 81)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4C019D'?",
    "options": [
      "rgb(76, 1, 157)",
      "rgb(0, 0, 0)",
      "rgb(100, 1, 157)",
      "rgb(76, 0, 157)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #4C019D <=> R=76, G=1, B=157 => rgb(76, 1, 157)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary != 4487;",
    "options": [
      "Query output is all rows with salary values not equal to 4487",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 4487 value",
      "Query output returns count representing table column rows having salary value sum up to 4487"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 4487."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8CB822'?",
    "options": [
      "rgb(140, 136, 34)",
      "rgb(0, 0, 0)",
      "rgb(164, 184, 34)",
      "rgb(140, 184, 34)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #8CB822 <=> R=140, G=184, B=34 => rgb(140, 184, 34)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CBC3EF'?",
    "options": [
      "rgb(227, 195, 239)",
      "rgb(203, 195, 239)",
      "rgb(0, 0, 0) by design",
      "rgb(203, 147, 239)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CBC3EF <=> R=203, G=195, B=239 => rgb(203, 195, 239)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FC8323'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(252, 131, 35)",
      "rgb(252, 83, 35)",
      "rgb(255, 131, 35)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FC8323 <=> R=252, G=131, B=35 => rgb(252, 131, 35)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance < 3400;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 3400 value",
      "Query output is all rows with balance values strictly smaller than 3400",
      "Query output returns count representing table column rows having balance value sum up to 3400",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 3400."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price <= 1512;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 1512",
      "Query output is all rows with price values less than or equal to 1512",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 1512 value"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 1512."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#915027'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(145, 32, 39)",
      "rgb(169, 80, 39)",
      "rgb(145, 80, 39)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #915027 <=> R=145, G=80, B=39 => rgb(145, 80, 39)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#11D369'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(17, 211, 105)",
      "rgb(17, 163, 105)",
      "rgb(41, 211, 105)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #11D369 <=> R=17, G=211, B=105 => rgb(17, 211, 105)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C32C2F'?",
    "options": [
      "rgb(219, 44, 47)",
      "rgb(195, 44, 47)",
      "rgb(0, 0, 0)",
      "rgb(195, 0, 47)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C32C2F <=> R=195, G=44, B=47 => rgb(195, 44, 47)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price != 5905;",
    "options": [
      "Query output is all rows with price values not equal to 5905",
      "Query output returns count representing table column rows having price value sum up to 5905",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 5905 value"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 5905."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score >= 2805;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 2805",
      "Query output includes only rows having score exactly equivalent to 2805 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values greater than or equal to 2805"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 2805."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance > 7945;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 7945 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly larger than 7945",
      "Query output returns count representing table column rows having balance value sum up to 7945"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 7945."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points >= 906;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 906 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 906",
      "Query output is all rows with points values greater than or equal to 906"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 906."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#ACC360'?",
    "options": [
      "rgb(196, 195, 96)",
      "rgb(172, 147, 96)",
      "rgb(172, 195, 96)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #ACC360 <=> R=172, G=195, B=96 => rgb(172, 195, 96)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points >= 517;",
    "options": [
      "Query output is all rows with points values greater than or equal to 517",
      "Query output returns count representing table column rows having points value sum up to 517",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 517 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 517."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B1D29D'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(177, 162, 157)",
      "rgb(177, 210, 157)",
      "rgb(201, 210, 157)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #B1D29D <=> R=177, G=210, B=157 => rgb(177, 210, 157)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AC3E37'?",
    "options": [
      "rgb(172, 14, 55)",
      "rgb(172, 62, 55)",
      "rgb(196, 62, 55)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #AC3E37 <=> R=172, G=62, B=55 => rgb(172, 62, 55)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity >= 2195;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 2195 value",
      "Query output returns count representing table column rows having quantity value sum up to 2195",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values greater than or equal to 2195"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 2195."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary < 4666;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 4666",
      "Query output includes only rows having salary exactly equivalent to 4666 value",
      "Query output is all rows with salary values strictly smaller than 4666",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 4666."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score <= 1212;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 1212 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 1212",
      "Query output is all rows with score values less than or equal to 1212"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 1212."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance <= 4348;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 4348 value",
      "Query output returns count representing table column rows having balance value sum up to 4348",
      "Query output is all rows with balance values less than or equal to 4348",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 4348."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#58B87B'?",
    "options": [
      "rgb(88, 184, 123)",
      "rgb(0, 0, 0)",
      "rgb(112, 184, 123)",
      "rgb(88, 136, 123)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #58B87B <=> R=88, G=184, B=123 => rgb(88, 184, 123)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#161C2B'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(22, 0, 43)",
      "rgb(46, 28, 43)",
      "rgb(22, 28, 43)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #161C2B <=> R=22, G=28, B=43 => rgb(22, 28, 43)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D96419'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(217, 100, 25)",
      "rgb(241, 100, 25)",
      "rgb(217, 52, 25)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #D96419 <=> R=217, G=100, B=25 => rgb(217, 100, 25)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A53909'?",
    "options": [
      "rgb(165, 9, 9)",
      "rgb(0, 0, 0)",
      "rgb(189, 57, 9)",
      "rgb(165, 57, 9)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #A53909 <=> R=165, G=57, B=9 => rgb(165, 57, 9)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary <= 4296;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values less than or equal to 4296",
      "Query output includes only rows having salary exactly equivalent to 4296 value",
      "Query output returns count representing table column rows having salary value sum up to 4296"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 4296."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE age >= 4272;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 4272",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 4272 value",
      "Query output is all rows with age values greater than or equal to 4272"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 4272."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity > 4570;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 4570",
      "Query output returns count representing table column rows having quantity value sum up to 4570",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 4570 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 4570."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C7C137'?",
    "options": [
      "rgb(199, 145, 55)",
      "rgb(199, 193, 55)",
      "rgb(0, 0, 0)",
      "rgb(223, 193, 55)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C7C137 <=> R=199, G=193, B=55 => rgb(199, 193, 55)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D414A9'?",
    "options": [
      "rgb(236, 20, 169)",
      "rgb(212, 20, 169)",
      "rgb(212, 0, 169)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #D414A9 <=> R=212, G=20, B=169 => rgb(212, 20, 169)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance >= 6228;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 6228 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 6228",
      "Query output is all rows with balance values greater than or equal to 6228"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 6228."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DC162B'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(220, 22, 43)",
      "rgb(220, 0, 43)",
      "rgb(244, 22, 43)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #DC162B <=> R=220, G=22, B=43 => rgb(220, 22, 43)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6D2BA0'?",
    "options": [
      "rgb(109, 0, 160)",
      "rgb(0, 0, 0)",
      "rgb(133, 43, 160)",
      "rgb(109, 43, 160)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6D2BA0 <=> R=109, G=43, B=160 => rgb(109, 43, 160)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EB014A'?",
    "options": [
      "rgb(255, 1, 74)",
      "rgb(235, 1, 74)",
      "rgb(0, 0, 0)",
      "rgb(235, 0, 74)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #EB014A <=> R=235, G=1, B=74 => rgb(235, 1, 74)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points >= 2210;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 2210",
      "Query output includes only rows having points exactly equivalent to 2210 value",
      "Query output is all rows with points values greater than or equal to 2210",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 2210."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary > 5705;",
    "options": [
      "Query output is all rows with salary values strictly larger than 5705",
      "Query output includes only rows having salary exactly equivalent to 5705 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 5705"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 5705."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary < 5422;",
    "options": [
      "Query output is all rows with salary values strictly smaller than 5422",
      "Query output returns count representing table column rows having salary value sum up to 5422",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 5422 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 5422."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points <= 3534;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 3534 value",
      "Query output is all rows with points values less than or equal to 3534",
      "Query output returns count representing table column rows having points value sum up to 3534"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 3534."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#260A74'?",
    "options": [
      "rgb(38, 10, 116)",
      "rgb(62, 10, 116)",
      "rgb(38, 0, 116)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #260A74 <=> R=38, G=10, B=116 => rgb(38, 10, 116)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance < 1940;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 1940",
      "Query output includes only rows having balance exactly equivalent to 1940 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly smaller than 1940"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 1940."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A6EB00'?",
    "options": [
      "rgb(166, 187, 0)",
      "rgb(190, 235, 0)",
      "rgb(0, 0, 0)",
      "rgb(166, 235, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #A6EB00 <=> R=166, G=235, B=0 => rgb(166, 235, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity >= 4520;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 4520 value",
      "Query output returns count representing table column rows having quantity value sum up to 4520",
      "Query output is all rows with quantity values greater than or equal to 4520"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 4520."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2512C5'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(61, 18, 197)",
      "rgb(37, 18, 197)",
      "rgb(37, 0, 197)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #2512C5 <=> R=37, G=18, B=197 => rgb(37, 18, 197)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#24B65E'?",
    "options": [
      "rgb(60, 182, 94)",
      "rgb(36, 134, 94)",
      "rgb(0, 0, 0)",
      "rgb(36, 182, 94)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #24B65E <=> R=36, G=182, B=94 => rgb(36, 182, 94)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity <= 143;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 143",
      "Query output is all rows with quantity values less than or equal to 143",
      "Query output includes only rows having quantity exactly equivalent to 143 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 143."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points >= 6393;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 6393 value",
      "Query output returns count representing table column rows having points value sum up to 6393",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values greater than or equal to 6393"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 6393."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FC901D'?",
    "options": [
      "rgb(252, 144, 29)",
      "rgb(255, 144, 29)",
      "rgb(0, 0, 0)",
      "rgb(252, 96, 29)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FC901D <=> R=252, G=144, B=29 => rgb(252, 144, 29)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9CA91A'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(156, 121, 26)",
      "rgb(180, 169, 26)",
      "rgb(156, 169, 26)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9CA91A <=> R=156, G=169, B=26 => rgb(156, 169, 26)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary > 7191;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 7191",
      "Query output includes only rows having salary exactly equivalent to 7191 value",
      "Query output is all rows with salary values strictly larger than 7191"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 7191."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity > 7435;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 7435",
      "Query output is all rows with quantity values strictly larger than 7435",
      "Query output includes only rows having quantity exactly equivalent to 7435 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 7435."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D1859D'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(233, 133, 157)",
      "rgb(209, 85, 157)",
      "rgb(209, 133, 157)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #D1859D <=> R=209, G=133, B=157 => rgb(209, 133, 157)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#624F6D'?",
    "options": [
      "rgb(98, 31, 109)",
      "rgb(0, 0, 0)",
      "rgb(98, 79, 109)",
      "rgb(122, 79, 109)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #624F6D <=> R=98, G=79, B=109 => rgb(98, 79, 109)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity > 2785;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 2785",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 2785 value",
      "Query output returns count representing table column rows having quantity value sum up to 2785"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 2785."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F0814E'?",
    "options": [
      "rgb(255, 129, 78)",
      "rgb(0, 0, 0)",
      "rgb(240, 129, 78)",
      "rgb(240, 81, 78)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #F0814E <=> R=240, G=129, B=78 => rgb(240, 129, 78)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9E31E4'?",
    "options": [
      "rgb(182, 49, 228)",
      "rgb(158, 49, 228)",
      "rgb(158, 1, 228)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #9E31E4 <=> R=158, G=49, B=228 => rgb(158, 49, 228)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#958AAB'?",
    "options": [
      "rgb(149, 90, 171)",
      "rgb(173, 138, 171)",
      "rgb(0, 0, 0) in practice",
      "rgb(149, 138, 171)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #958AAB <=> R=149, G=138, B=171 => rgb(149, 138, 171)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#822A27'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(130, 0, 39)",
      "rgb(154, 42, 39)",
      "rgb(130, 42, 39)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #822A27 <=> R=130, G=42, B=39 => rgb(130, 42, 39)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9D725F'?",
    "options": [
      "rgb(157, 66, 95)",
      "rgb(181, 114, 95)",
      "rgb(0, 0, 0)",
      "rgb(157, 114, 95)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9D725F <=> R=157, G=114, B=95 => rgb(157, 114, 95)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DFCE71'?",
    "options": [
      "rgb(247, 206, 113)",
      "rgb(0, 0, 0) by design",
      "rgb(223, 206, 113)",
      "rgb(223, 158, 113)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #DFCE71 <=> R=223, G=206, B=113 => rgb(223, 206, 113)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary > 6429;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 6429",
      "Query output is all rows with salary values strictly larger than 6429",
      "Query output includes only rows having salary exactly equivalent to 6429 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 6429."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary >= 4918;",
    "options": [
      "Query output is all rows with salary values greater than or equal to 4918",
      "Query output returns count representing table column rows having salary value sum up to 4918",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 4918 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 4918."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#86BC7E'?",
    "options": [
      "rgb(158, 188, 126)",
      "rgb(134, 188, 126)",
      "rgb(0, 0, 0) by design",
      "rgb(134, 140, 126)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #86BC7E <=> R=134, G=188, B=126 => rgb(134, 188, 126)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#23EA6C'?",
    "options": [
      "rgb(35, 186, 108)",
      "rgb(35, 234, 108)",
      "rgb(0, 0, 0)",
      "rgb(59, 234, 108)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #23EA6C <=> R=35, G=234, B=108 => rgb(35, 234, 108)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score <= 3520;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 3520 value",
      "Query output returns count representing table column rows having score value sum up to 3520",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values less than or equal to 3520"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 3520."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points >= 3827;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 3827",
      "Query output is all rows with points values greater than or equal to 3827",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 3827 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 3827."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#69C0FE'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(105, 192, 254)",
      "rgb(105, 144, 254)",
      "rgb(129, 192, 254)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #69C0FE <=> R=105, G=192, B=254 => rgb(105, 192, 254)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price < 862;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 862 value",
      "Query output is all rows with price values strictly smaller than 862",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 862"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 862."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance > 7250;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 7250",
      "Query output includes only rows having balance exactly equivalent to 7250 value",
      "Query output is all rows with balance values strictly larger than 7250"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 7250."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3F3E02'?",
    "options": [
      "rgb(63, 62, 2)",
      "rgb(63, 14, 2)",
      "rgb(0, 0, 0)",
      "rgb(87, 62, 2)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3F3E02 <=> R=63, G=62, B=2 => rgb(63, 62, 2)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price > 1591;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 1591",
      "Query output includes only rows having price exactly equivalent to 1591 value",
      "Query output is all rows with price values strictly larger than 1591"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 1591."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary <= 764;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 764",
      "Query output is all rows with salary values less than or equal to 764",
      "Query output includes only rows having salary exactly equivalent to 764 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 764."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance >= 5776;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 5776",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 5776 value",
      "Query output is all rows with balance values greater than or equal to 5776"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 5776."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points != 4819;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 4819 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values not equal to 4819",
      "Query output returns count representing table column rows having points value sum up to 4819"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 4819."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance >= 2465;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values greater than or equal to 2465",
      "Query output includes only rows having balance exactly equivalent to 2465 value",
      "Query output returns count representing table column rows having balance value sum up to 2465"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 2465."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 6150;",
    "options": [
      "Query output is all rows with price values strictly smaller than 6150",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 6150 value",
      "Query output returns count representing table column rows having price value sum up to 6150"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 6150."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CA4AC0'?",
    "options": [
      "rgb(202, 26, 192)",
      "rgb(202, 74, 192)",
      "rgb(0, 0, 0)",
      "rgb(226, 74, 192)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CA4AC0 <=> R=202, G=74, B=192 => rgb(202, 74, 192)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age >= 4865;",
    "options": [
      "Query output is all rows with age values greater than or equal to 4865",
      "Query output includes only rows having age exactly equivalent to 4865 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 4865"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 4865."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary < 5769;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 5769",
      "Query output is all rows with salary values strictly smaller than 5769",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 5769 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 5769."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score != 2335;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 2335",
      "Query output includes only rows having score exactly equivalent to 2335 value",
      "Query output is all rows with score values not equal to 2335"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 2335."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity >= 4161;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 4161 value",
      "Query output returns count representing table column rows having quantity value sum up to 4161",
      "Query output is all rows with quantity values greater than or equal to 4161",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 4161."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE salary != 6091;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 6091 value",
      "Query output is all rows with salary values not equal to 6091",
      "Query output returns count representing table column rows having salary value sum up to 6091",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 6091."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance > 3941;",
    "options": [
      "Query output is all rows with balance values strictly larger than 3941",
      "Query output returns count representing table column rows having balance value sum up to 3941",
      "Query output includes only rows having balance exactly equivalent to 3941 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 3941."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C3DAF5'?",
    "options": [
      "rgb(219, 218, 245)",
      "rgb(195, 218, 245)",
      "rgb(0, 0, 0) by design",
      "rgb(195, 170, 245)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C3DAF5 <=> R=195, G=218, B=245 => rgb(195, 218, 245)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score >= 1284;",
    "options": [
      "Query output is all rows with score values greater than or equal to 1284",
      "Query output includes only rows having score exactly equivalent to 1284 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 1284"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 1284."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#57F1AC'?",
    "options": [
      "rgb(87, 241, 172)",
      "rgb(87, 193, 172)",
      "rgb(111, 241, 172)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #57F1AC <=> R=87, G=241, B=172 => rgb(87, 241, 172)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF4168'?",
    "options": [
      "rgb(255, 65, 104)",
      "rgb(255, 17, 104)",
      "rgb(0, 0, 0)",
      "rgb(52, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF4168 <=> R=255, G=65, B=104 => rgb(255, 65, 104)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#605659'?",
    "options": [
      "rgb(96, 38, 89)",
      "rgb(96, 86, 89)",
      "rgb(0, 0, 0)",
      "rgb(120, 86, 89)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #605659 <=> R=96, G=86, B=89 => rgb(96, 86, 89)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#41D353'?",
    "options": [
      "rgb(65, 211, 83)",
      "rgb(65, 163, 83)",
      "rgb(89, 211, 83)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #41D353 <=> R=65, G=211, B=83 => rgb(65, 211, 83)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AB3184'?",
    "options": [
      "rgb(195, 49, 132)",
      "rgb(0, 0, 0)",
      "rgb(171, 49, 132)",
      "rgb(171, 1, 132)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #AB3184 <=> R=171, G=49, B=132 => rgb(171, 49, 132)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score >= 986;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values greater than or equal to 986",
      "Query output returns count representing table column rows having score value sum up to 986",
      "Query output includes only rows having score exactly equivalent to 986 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 986."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FDC857'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 200, 87)",
      "rgb(253, 152, 87)",
      "rgb(253, 200, 87)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FDC857 <=> R=253, G=200, B=87 => rgb(253, 200, 87)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity >= 4616;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 4616",
      "Query output is all rows with quantity values greater than or equal to 4616",
      "Query output includes only rows having quantity exactly equivalent to 4616 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 4616."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score != 5056;",
    "options": [
      "Query output is all rows with score values not equal to 5056",
      "Query output returns count representing table column rows having score value sum up to 5056",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 5056 value"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 5056."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A21FC3'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(162, 31, 195)",
      "rgb(162, 0, 195)",
      "rgb(186, 31, 195)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A21FC3 <=> R=162, G=31, B=195 => rgb(162, 31, 195)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE balance >= 697;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 697 value",
      "Query output returns count representing table column rows having balance value sum up to 697",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values greater than or equal to 697"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 697."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#42A723'?",
    "options": [
      "rgb(90, 167, 35)",
      "rgb(66, 167, 35)",
      "rgb(66, 119, 35)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #42A723 <=> R=66, G=167, B=35 => rgb(66, 167, 35)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary <= 208;",
    "options": [
      "Query output is all rows with salary values less than or equal to 208",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 208",
      "Query output includes only rows having salary exactly equivalent to 208 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 208."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CA0088'?",
    "options": [
      "rgb(226, 0, 136)",
      "rgb(69, 255, 255)",
      "rgb(202, 0, 136)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CA0088 <=> R=202, G=0, B=136 => rgb(202, 0, 136)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE score <= 2848;",
    "options": [
      "Query output is all rows with score values less than or equal to 2848",
      "Query output returns count representing table column rows having score value sum up to 2848",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 2848 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 2848."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity != 7700;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 7700 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 7700",
      "Query output is all rows with quantity values not equal to 7700"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 7700."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E54374'?",
    "options": [
      "rgb(229, 67, 116)",
      "rgb(229, 19, 116)",
      "rgb(0, 0, 0)",
      "rgb(253, 67, 116)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #E54374 <=> R=229, G=67, B=116 => rgb(229, 67, 116)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance >= 7041;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 7041",
      "Query output is all rows with balance values greater than or equal to 7041",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 7041 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 7041."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#11C343'?",
    "options": [
      "rgb(17, 195, 67)",
      "rgb(0, 0, 0)",
      "rgb(41, 195, 67)",
      "rgb(17, 147, 67)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #11C343 <=> R=17, G=195, B=67 => rgb(17, 195, 67)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE score < 6924;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 6924 value",
      "Query output is all rows with score values strictly smaller than 6924",
      "Query output returns count representing table column rows having score value sum up to 6924"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 6924."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6A70F6'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(106, 64, 246)",
      "rgb(106, 112, 246)",
      "rgb(130, 112, 246)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6A70F6 <=> R=106, G=112, B=246 => rgb(106, 112, 246)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points < 6780;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 6780 value",
      "Query output is all rows with points values strictly smaller than 6780",
      "Query output returns count representing table column rows having points value sum up to 6780",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 6780."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points < 3996;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 3996 value",
      "Query output returns count representing table column rows having points value sum up to 3996",
      "Query output is all rows with points values strictly smaller than 3996",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 3996."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE age > 3781;",
    "options": [
      "Query output is all rows with age values strictly larger than 3781",
      "Query output returns count representing table column rows having age value sum up to 3781",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 3781 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 3781."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points != 4633;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 4633 value",
      "Query output is all rows with points values not equal to 4633",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 4633"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 4633."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0FC0F8'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(15, 192, 248)",
      "rgb(39, 192, 248)",
      "rgb(15, 144, 248)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0FC0F8 <=> R=15, G=192, B=248 => rgb(15, 192, 248)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 3398;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 3398 value",
      "Query output is all rows with price values strictly smaller than 3398",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 3398"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3398."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points <= 5174;",
    "options": [
      "Query output is all rows with points values less than or equal to 5174",
      "Query output returns count representing table column rows having points value sum up to 5174",
      "Query output includes only rows having points exactly equivalent to 5174 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 5174."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F270BE'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(242, 64, 190)",
      "rgb(242, 112, 190)",
      "rgb(255, 112, 190)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #F270BE <=> R=242, G=112, B=190 => rgb(242, 112, 190)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary >= 2350;",
    "options": [
      "Query output is all rows with salary values greater than or equal to 2350",
      "Query output includes only rows having salary exactly equivalent to 2350 value",
      "Query output returns count representing table column rows having salary value sum up to 2350",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 2350."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score < 7101;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 7101 value",
      "Query output returns count representing table column rows having score value sum up to 7101",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values strictly smaller than 7101"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 7101."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity < 658;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 658",
      "Query output includes only rows having quantity exactly equivalent to 658 value",
      "Query output is all rows with quantity values strictly smaller than 658",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 658."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4B23D9'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(75, 0, 217)",
      "rgb(99, 35, 217)",
      "rgb(75, 35, 217)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #4B23D9 <=> R=75, G=35, B=217 => rgb(75, 35, 217)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7C61B2'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(124, 97, 178)",
      "rgb(148, 97, 178)",
      "rgb(124, 49, 178)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #7C61B2 <=> R=124, G=97, B=178 => rgb(124, 97, 178)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE age != 4420;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 4420",
      "Query output includes only rows having age exactly equivalent to 4420 value",
      "Query output is all rows with age values not equal to 4420",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 4420."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score >= 6787;",
    "options": [
      "Query output is all rows with score values greater than or equal to 6787",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 6787 value",
      "Query output returns count representing table column rows having score value sum up to 6787"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 6787."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price >= 3642;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 3642",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 3642 value",
      "Query output is all rows with price values greater than or equal to 3642"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 3642."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE balance != 6536;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 6536 value",
      "Query output is all rows with balance values not equal to 6536",
      "Query output returns count representing table column rows having balance value sum up to 6536"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 6536."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F14BE2'?",
    "options": [
      "rgb(241, 27, 226)",
      "rgb(241, 75, 226)",
      "rgb(0, 0, 0)",
      "rgb(255, 75, 226)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #F14BE2 <=> R=241, G=75, B=226 => rgb(241, 75, 226)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#78AEBE'?",
    "options": [
      "rgb(120, 126, 190)",
      "rgb(120, 174, 190)",
      "rgb(0, 0, 0) in practice",
      "rgb(144, 174, 190)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #78AEBE <=> R=120, G=174, B=190 => rgb(120, 174, 190)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A6FC92'?",
    "options": [
      "rgb(166, 204, 146)",
      "rgb(190, 252, 146)",
      "rgb(0, 0, 0) by design",
      "rgb(166, 252, 146)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #A6FC92 <=> R=166, G=252, B=146 => rgb(166, 252, 146)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F588BD'?",
    "options": [
      "rgb(245, 88, 189)",
      "rgb(255, 136, 189)",
      "rgb(0, 0, 0) by design",
      "rgb(245, 136, 189)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #F588BD <=> R=245, G=136, B=189 => rgb(245, 136, 189)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE balance > 5093;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 5093 value",
      "Query output returns count representing table column rows having balance value sum up to 5093",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly larger than 5093"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 5093."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance > 7005;",
    "options": [
      "Query output is all rows with balance values strictly larger than 7005",
      "Query output includes only rows having balance exactly equivalent to 7005 value",
      "Query output returns count representing table column rows having balance value sum up to 7005",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 7005."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#179AD9'?",
    "options": [
      "rgb(23, 154, 217)",
      "rgb(0, 0, 0)",
      "rgb(23, 106, 217)",
      "rgb(47, 154, 217)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #179AD9 <=> R=23, G=154, B=217 => rgb(23, 154, 217)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points >= 6883;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 6883",
      "Query output includes only rows having points exactly equivalent to 6883 value",
      "Query output is all rows with points values greater than or equal to 6883"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 6883."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary != 7793;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 7793",
      "Query output includes only rows having salary exactly equivalent to 7793 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values not equal to 7793"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 7793."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance > 4484;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 4484",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly larger than 4484",
      "Query output includes only rows having balance exactly equivalent to 4484 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 4484."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EFE229'?",
    "options": [
      "rgb(239, 178, 41)",
      "rgb(255, 226, 41)",
      "rgb(0, 0, 0)",
      "rgb(239, 226, 41)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #EFE229 <=> R=239, G=226, B=41 => rgb(239, 226, 41)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A6E6EF'?",
    "options": [
      "rgb(166, 230, 239)",
      "rgb(0, 0, 0) by design",
      "rgb(166, 182, 239)",
      "rgb(190, 230, 239)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #A6E6EF <=> R=166, G=230, B=239 => rgb(166, 230, 239)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE age != 7521;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 7521",
      "Query output includes only rows having age exactly equivalent to 7521 value",
      "Query output is all rows with age values not equal to 7521",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 7521."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE age > 5208;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 5208 value",
      "Query output is all rows with age values strictly larger than 5208",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 5208"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 5208."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1CD2FB'?",
    "options": [
      "rgb(28, 210, 251)",
      "rgb(0, 0, 0)",
      "rgb(52, 210, 251)",
      "rgb(28, 162, 251)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #1CD2FB <=> R=28, G=210, B=251 => rgb(28, 210, 251)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B84693'?",
    "options": [
      "rgb(184, 22, 147)",
      "rgb(208, 70, 147)",
      "rgb(0, 0, 0)",
      "rgb(184, 70, 147)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B84693 <=> R=184, G=70, B=147 => rgb(184, 70, 147)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE score <= 2239;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 2239",
      "Query output is all rows with score values less than or equal to 2239",
      "Query output includes only rows having score exactly equivalent to 2239 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 2239."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#55A828'?",
    "options": [
      "rgb(109, 168, 40)",
      "rgb(0, 0, 0)",
      "rgb(85, 168, 40)",
      "rgb(85, 120, 40)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #55A828 <=> R=85, G=168, B=40 => rgb(85, 168, 40)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#969932'?",
    "options": [
      "rgb(174, 153, 50)",
      "rgb(0, 0, 0)",
      "rgb(150, 153, 50)",
      "rgb(150, 105, 50)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #969932 <=> R=150, G=153, B=50 => rgb(150, 153, 50)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary <= 1198;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 1198",
      "Query output is all rows with salary values less than or equal to 1198",
      "Query output includes only rows having salary exactly equivalent to 1198 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 1198."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#056B3E'?",
    "options": [
      "rgb(5, 107, 62)",
      "rgb(5, 59, 62)",
      "rgb(29, 107, 62)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #056B3E <=> R=5, G=107, B=62 => rgb(5, 107, 62)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score != 7353;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 7353 value",
      "Query output returns count representing table column rows having score value sum up to 7353",
      "Query output is all rows with score values not equal to 7353",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 7353."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points >= 5479;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values greater than or equal to 5479",
      "Query output returns count representing table column rows having points value sum up to 5479",
      "Query output includes only rows having points exactly equivalent to 5479 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 5479."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8D30A4'?",
    "options": [
      "rgb(141, 0, 164)",
      "rgb(0, 0, 0)",
      "rgb(165, 48, 164)",
      "rgb(141, 48, 164)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #8D30A4 <=> R=141, G=48, B=164 => rgb(141, 48, 164)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E48795'?",
    "options": [
      "rgb(228, 87, 149)",
      "rgb(0, 0, 0) by design",
      "rgb(228, 135, 149)",
      "rgb(252, 135, 149)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #E48795 <=> R=228, G=135, B=149 => rgb(228, 135, 149)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5D7361'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(93, 115, 97)",
      "rgb(117, 115, 97)",
      "rgb(93, 67, 97)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #5D7361 <=> R=93, G=115, B=97 => rgb(93, 115, 97)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 6981;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 6981 value",
      "Query output is all rows with price values strictly smaller than 6981",
      "Query output returns count representing table column rows having price value sum up to 6981"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 6981."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#39B1E1'?",
    "options": [
      "rgb(57, 129, 225)",
      "rgb(57, 177, 225)",
      "rgb(81, 177, 225)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #39B1E1 <=> R=57, G=177, B=225 => rgb(57, 177, 225)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6D1EF8'?",
    "options": [
      "rgb(133, 30, 248)",
      "rgb(109, 0, 248)",
      "rgb(0, 0, 0)",
      "rgb(109, 30, 248)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6D1EF8 <=> R=109, G=30, B=248 => rgb(109, 30, 248)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary < 6724;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 6724 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values strictly smaller than 6724",
      "Query output returns count representing table column rows having salary value sum up to 6724"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 6724."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score <= 6757;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 6757 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 6757",
      "Query output is all rows with score values less than or equal to 6757"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 6757."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#832C10'?",
    "options": [
      "rgb(155, 44, 16)",
      "rgb(131, 0, 16)",
      "rgb(0, 0, 0)",
      "rgb(131, 44, 16)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #832C10 <=> R=131, G=44, B=16 => rgb(131, 44, 16)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE age >= 5537;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 5537",
      "Query output includes only rows having age exactly equivalent to 5537 value",
      "Query output is all rows with age values greater than or equal to 5537",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 5537."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C8AC9D'?",
    "options": [
      "rgb(200, 124, 157)",
      "rgb(0, 0, 0) in practice",
      "rgb(224, 172, 157)",
      "rgb(200, 172, 157)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #C8AC9D <=> R=200, G=172, B=157 => rgb(200, 172, 157)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DD499D'?",
    "options": [
      "rgb(221, 73, 157)",
      "rgb(245, 73, 157)",
      "rgb(0, 0, 0)",
      "rgb(221, 25, 157)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #DD499D <=> R=221, G=73, B=157 => rgb(221, 73, 157)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C89F65'?",
    "options": [
      "rgb(200, 159, 101)",
      "rgb(224, 159, 101)",
      "rgb(0, 0, 0) in practice",
      "rgb(200, 111, 101)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #C89F65 <=> R=200, G=159, B=101 => rgb(200, 159, 101)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance <= 1183;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 1183 value",
      "Query output returns count representing table column rows having balance value sum up to 1183",
      "Query output is all rows with balance values less than or equal to 1183"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 1183."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity <= 5626;",
    "options": [
      "Query output is all rows with quantity values less than or equal to 5626",
      "Query output returns count representing table column rows having quantity value sum up to 5626",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 5626 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 5626."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F17103'?",
    "options": [
      "rgb(255, 113, 3)",
      "rgb(241, 65, 3)",
      "rgb(0, 0, 0)",
      "rgb(241, 113, 3)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #F17103 <=> R=241, G=113, B=3 => rgb(241, 113, 3)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance < 6332;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly smaller than 6332",
      "Query output includes only rows having balance exactly equivalent to 6332 value",
      "Query output returns count representing table column rows having balance value sum up to 6332"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 6332."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3B2F25'?",
    "options": [
      "rgb(59, 0, 37)",
      "rgb(59, 47, 37)",
      "rgb(0, 0, 0)",
      "rgb(83, 47, 37)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3B2F25 <=> R=59, G=47, B=37 => rgb(59, 47, 37)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE salary > 313;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 313 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 313",
      "Query output is all rows with salary values strictly larger than 313"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 313."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#195DF4'?",
    "options": [
      "rgb(25, 45, 244)",
      "rgb(49, 93, 244)",
      "rgb(25, 93, 244)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #195DF4 <=> R=25, G=93, B=244 => rgb(25, 93, 244)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#94C149'?",
    "options": [
      "rgb(148, 193, 73)",
      "rgb(148, 145, 73)",
      "rgb(172, 193, 73)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #94C149 <=> R=148, G=193, B=73 => rgb(148, 193, 73)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FD2CEC'?",
    "options": [
      "rgb(255, 44, 236)",
      "rgb(0, 0, 0)",
      "rgb(253, 44, 236)",
      "rgb(253, 0, 236)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FD2CEC <=> R=253, G=44, B=236 => rgb(253, 44, 236)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance >= 5426;",
    "options": [
      "Query output is all rows with balance values greater than or equal to 5426",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 5426",
      "Query output includes only rows having balance exactly equivalent to 5426 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 5426."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D1E936'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(209, 233, 54)",
      "rgb(209, 185, 54)",
      "rgb(233, 233, 54)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #D1E936 <=> R=209, G=233, B=54 => rgb(209, 233, 54)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#38DA8C'?",
    "options": [
      "rgb(56, 218, 140)",
      "rgb(56, 170, 140)",
      "rgb(0, 0, 0)",
      "rgb(80, 218, 140)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #38DA8C <=> R=56, G=218, B=140 => rgb(56, 218, 140)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE age != 6309;",
    "options": [
      "Query output is all rows with age values not equal to 6309",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 6309",
      "Query output includes only rows having age exactly equivalent to 6309 value"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 6309."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0A0BAE'?",
    "options": [
      "rgb(34, 11, 174)",
      "rgb(10, 11, 174)",
      "rgb(0, 0, 0)",
      "rgb(10, 0, 174)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0A0BAE <=> R=10, G=11, B=174 => rgb(10, 11, 174)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EF70E8'?",
    "options": [
      "rgb(239, 64, 232)",
      "rgb(255, 112, 232)",
      "rgb(239, 112, 232)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #EF70E8 <=> R=239, G=112, B=232 => rgb(239, 112, 232)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#337D68'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 77, 104)",
      "rgb(51, 125, 104)",
      "rgb(75, 125, 104)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #337D68 <=> R=51, G=125, B=104 => rgb(51, 125, 104)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary <= 693;",
    "options": [
      "Query output is all rows with salary values less than or equal to 693",
      "Query output returns count representing table column rows having salary value sum up to 693",
      "Query output includes only rows having salary exactly equivalent to 693 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 693."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#491FDB'?",
    "options": [
      "rgb(97, 31, 219)",
      "rgb(73, 31, 219)",
      "rgb(73, 0, 219)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #491FDB <=> R=73, G=31, B=219 => rgb(73, 31, 219)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C9F2E6'?",
    "options": [
      "rgb(225, 242, 230)",
      "rgb(201, 242, 230)",
      "rgb(201, 194, 230)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C9F2E6 <=> R=201, G=242, B=230 => rgb(201, 242, 230)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity > 1967;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly larger than 1967",
      "Query output returns count representing table column rows having quantity value sum up to 1967",
      "Query output includes only rows having quantity exactly equivalent to 1967 value"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 1967."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points > 1063;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 1063",
      "Query output is all rows with points values strictly larger than 1063",
      "Query output includes only rows having points exactly equivalent to 1063 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 1063."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A6B71C'?",
    "options": [
      "rgb(166, 135, 28)",
      "rgb(166, 183, 28)",
      "rgb(0, 0, 0)",
      "rgb(190, 183, 28)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A6B71C <=> R=166, G=183, B=28 => rgb(166, 183, 28)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance < 5029;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 5029",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 5029 value",
      "Query output is all rows with balance values strictly smaller than 5029"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 5029."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE balance <= 3272;",
    "options": [
      "Query output is all rows with balance values less than or equal to 3272",
      "Query output returns count representing table column rows having balance value sum up to 3272",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 3272 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 3272."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price > 7852;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 7852 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 7852",
      "Query output is all rows with price values strictly larger than 7852"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 7852."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price >= 3337;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 3337",
      "Query output is all rows with price values greater than or equal to 3337",
      "Query output includes only rows having price exactly equivalent to 3337 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 3337."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#536B6F'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(83, 59, 111)",
      "rgb(83, 107, 111)",
      "rgb(107, 107, 111)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #536B6F <=> R=83, G=107, B=111 => rgb(83, 107, 111)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8FD707'?",
    "options": [
      "rgb(167, 215, 7)",
      "rgb(143, 215, 7)",
      "rgb(143, 167, 7)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #8FD707 <=> R=143, G=215, B=7 => rgb(143, 215, 7)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price < 601;",
    "options": [
      "Query output is all rows with price values strictly smaller than 601",
      "Query output returns count representing table column rows having price value sum up to 601",
      "Query output includes only rows having price exactly equivalent to 601 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 601."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7DAF87'?",
    "options": [
      "rgb(125, 175, 135)",
      "rgb(125, 127, 135)",
      "rgb(149, 175, 135)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #7DAF87 <=> R=125, G=175, B=135 => rgb(125, 175, 135)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#39A25C'?",
    "options": [
      "rgb(57, 162, 92)",
      "rgb(81, 162, 92)",
      "rgb(57, 114, 92)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #39A25C <=> R=57, G=162, B=92 => rgb(57, 162, 92)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance < 4686;",
    "options": [
      "Query output is all rows with balance values strictly smaller than 4686",
      "Query output includes only rows having balance exactly equivalent to 4686 value",
      "Query output returns count representing table column rows having balance value sum up to 4686",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 4686."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE score < 1361;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 1361 value",
      "Query output is all rows with score values strictly smaller than 1361",
      "Query output returns count representing table column rows having score value sum up to 1361"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 1361."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points != 4479;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 4479",
      "Query output is all rows with points values not equal to 4479",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 4479 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 4479."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score <= 7294;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 7294 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 7294",
      "Query output is all rows with score values less than or equal to 7294"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 7294."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F2981A'?",
    "options": [
      "rgb(255, 152, 26)",
      "rgb(0, 0, 0)",
      "rgb(242, 104, 26)",
      "rgb(242, 152, 26)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #F2981A <=> R=242, G=152, B=26 => rgb(242, 152, 26)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score < 5512;",
    "options": [
      "Query output is all rows with score values strictly smaller than 5512",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 5512",
      "Query output includes only rows having score exactly equivalent to 5512 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 5512."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#087DAF'?",
    "options": [
      "rgb(8, 125, 175)",
      "rgb(0, 0, 0)",
      "rgb(32, 125, 175)",
      "rgb(8, 77, 175)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #087DAF <=> R=8, G=125, B=175 => rgb(8, 125, 175)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8BF030'?",
    "options": [
      "rgb(163, 240, 48)",
      "rgb(139, 240, 48)",
      "rgb(0, 0, 0)",
      "rgb(139, 192, 48)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #8BF030 <=> R=139, G=240, B=48 => rgb(139, 240, 48)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663E8D'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 62, 141)",
      "rgb(126, 62, 141)",
      "rgb(102, 14, 141)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #663E8D <=> R=102, G=62, B=141 => rgb(102, 62, 141)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance > 2800;",
    "options": [
      "Query output is all rows with balance values strictly larger than 2800",
      "Query output returns count representing table column rows having balance value sum up to 2800",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 2800 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 2800."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9AFAE7'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(154, 250, 231)",
      "rgb(154, 202, 231)",
      "rgb(178, 250, 231)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #9AFAE7 <=> R=154, G=250, B=231 => rgb(154, 250, 231)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity != 5005;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 5005 value",
      "Query output is all rows with quantity values not equal to 5005",
      "Query output returns count representing table column rows having quantity value sum up to 5005"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 5005."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary > 4502;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 4502",
      "Query output is all rows with salary values strictly larger than 4502",
      "Query output includes only rows having salary exactly equivalent to 4502 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 4502."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE score < 3521;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 3521 value",
      "Query output returns count representing table column rows having score value sum up to 3521",
      "Query output is all rows with score values strictly smaller than 3521",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 3521."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score > 6392;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 6392",
      "Query output includes only rows having score exactly equivalent to 6392 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values strictly larger than 6392"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 6392."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE balance < 1483;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 1483 value",
      "Query output is all rows with balance values strictly smaller than 1483",
      "Query output returns count representing table column rows having balance value sum up to 1483",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 1483."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E6AC5D'?",
    "options": [
      "rgb(230, 172, 93)",
      "rgb(254, 172, 93)",
      "rgb(0, 0, 0)",
      "rgb(230, 124, 93)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #E6AC5D <=> R=230, G=172, B=93 => rgb(230, 172, 93)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1D2C44'?",
    "options": [
      "rgb(29, 44, 68)",
      "rgb(0, 0, 0)",
      "rgb(53, 44, 68)",
      "rgb(29, 0, 68)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #1D2C44 <=> R=29, G=44, B=68 => rgb(29, 44, 68)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price != 3610;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 3610 value",
      "Query output returns count representing table column rows having price value sum up to 3610",
      "Query output is all rows with price values not equal to 3610",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 3610."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary != 1082;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 1082 value",
      "Query output returns count representing table column rows having salary value sum up to 1082",
      "Query output is all rows with salary values not equal to 1082"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 1082."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age != 5338;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 5338 value",
      "Query output returns count representing table column rows having age value sum up to 5338",
      "Query output is all rows with age values not equal to 5338"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 5338."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4E674A'?",
    "options": [
      "rgb(102, 103, 74)",
      "rgb(0, 0, 0)",
      "rgb(78, 103, 74)",
      "rgb(78, 55, 74)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #4E674A <=> R=78, G=103, B=74 => rgb(78, 103, 74)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F2D248'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(242, 162, 72)",
      "rgb(255, 210, 72)",
      "rgb(242, 210, 72)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #F2D248 <=> R=242, G=210, B=72 => rgb(242, 210, 72)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price < 7515;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 7515",
      "Query output returns count representing table column rows having price value sum up to 7515",
      "Query output includes only rows having price exactly equivalent to 7515 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 7515."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4CFDEF'?",
    "options": [
      "rgb(76, 253, 239)",
      "rgb(100, 253, 239)",
      "rgb(76, 205, 239)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #4CFDEF <=> R=76, G=253, B=239 => rgb(76, 253, 239)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A77315'?",
    "options": [
      "rgb(191, 115, 21)",
      "rgb(0, 0, 0)",
      "rgb(167, 115, 21)",
      "rgb(167, 67, 21)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #A77315 <=> R=167, G=115, B=21 => rgb(167, 115, 21)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6ED474'?",
    "options": [
      "rgb(110, 212, 116)",
      "rgb(0, 0, 0) in practice",
      "rgb(110, 164, 116)",
      "rgb(134, 212, 116)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6ED474 <=> R=110, G=212, B=116 => rgb(110, 212, 116)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DB6090'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(219, 48, 144)",
      "rgb(219, 96, 144)",
      "rgb(243, 96, 144)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #DB6090 <=> R=219, G=96, B=144 => rgb(219, 96, 144)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score != 1141;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 1141 value",
      "Query output returns count representing table column rows having score value sum up to 1141",
      "Query output is all rows with score values not equal to 1141"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 1141."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary != 7646;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 7646",
      "Query output is all rows with salary values not equal to 7646",
      "Query output includes only rows having salary exactly equivalent to 7646 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 7646."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points > 843;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 843",
      "Query output is all rows with points values strictly larger than 843",
      "Query output includes only rows having points exactly equivalent to 843 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 843."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price <= 7023;",
    "options": [
      "Query output is all rows with price values less than or equal to 7023",
      "Query output includes only rows having price exactly equivalent to 7023 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 7023"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 7023."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6AF35C'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(106, 243, 92)",
      "rgb(130, 243, 92)",
      "rgb(106, 195, 92)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #6AF35C <=> R=106, G=243, B=92 => rgb(106, 243, 92)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#82CA65'?",
    "options": [
      "rgb(130, 154, 101)",
      "rgb(154, 202, 101)",
      "rgb(0, 0, 0) in practice",
      "rgb(130, 202, 101)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #82CA65 <=> R=130, G=202, B=101 => rgb(130, 202, 101)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance <= 4401;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 4401 value",
      "Query output is all rows with balance values less than or equal to 4401",
      "Query output returns count representing table column rows having balance value sum up to 4401",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 4401."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#51B163'?",
    "options": [
      "rgb(81, 129, 99)",
      "rgb(81, 177, 99)",
      "rgb(105, 177, 99)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #51B163 <=> R=81, G=177, B=99 => rgb(81, 177, 99)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3E964D'?",
    "options": [
      "rgb(86, 150, 77)",
      "rgb(0, 0, 0)",
      "rgb(62, 150, 77)",
      "rgb(62, 102, 77)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3E964D <=> R=62, G=150, B=77 => rgb(62, 150, 77)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E71E10'?",
    "options": [
      "rgb(231, 0, 16)",
      "rgb(0, 0, 0)",
      "rgb(255, 30, 16)",
      "rgb(231, 30, 16)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #E71E10 <=> R=231, G=30, B=16 => rgb(231, 30, 16)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price <= 4992;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 4992",
      "Query output is all rows with price values less than or equal to 4992",
      "Query output includes only rows having price exactly equivalent to 4992 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 4992."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points >= 1406;",
    "options": [
      "Query output is all rows with points values greater than or equal to 1406",
      "Query output includes only rows having points exactly equivalent to 1406 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 1406"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 1406."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE balance > 773;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 773 value",
      "Query output is all rows with balance values strictly larger than 773",
      "Query output returns count representing table column rows having balance value sum up to 773"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 773."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age < 3539;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 3539 value",
      "Query output returns count representing table column rows having age value sum up to 3539",
      "Query output is all rows with age values strictly smaller than 3539",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 3539."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity != 278;",
    "options": [
      "Query output is all rows with quantity values not equal to 278",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 278 value",
      "Query output returns count representing table column rows having quantity value sum up to 278"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 278."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D0DCBA'?",
    "options": [
      "rgb(232, 220, 186)",
      "rgb(0, 0, 0) by design",
      "rgb(208, 220, 186)",
      "rgb(208, 172, 186)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #D0DCBA <=> R=208, G=220, B=186 => rgb(208, 220, 186)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B1BEBA'?",
    "options": [
      "rgb(177, 190, 186)",
      "rgb(177, 142, 186)",
      "rgb(0, 0, 0) in practice",
      "rgb(201, 190, 186)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #B1BEBA <=> R=177, G=190, B=186 => rgb(177, 190, 186)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points <= 2024;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 2024",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 2024 value",
      "Query output is all rows with points values less than or equal to 2024"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 2024."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price <= 1928;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 1928 value",
      "Query output is all rows with price values less than or equal to 1928",
      "Query output returns count representing table column rows having price value sum up to 1928",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 1928."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EE3FD9'?",
    "options": [
      "rgb(238, 15, 217)",
      "rgb(238, 63, 217)",
      "rgb(255, 63, 217)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #EE3FD9 <=> R=238, G=63, B=217 => rgb(238, 63, 217)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#673EB3'?",
    "options": [
      "rgb(103, 62, 179)",
      "rgb(127, 62, 179)",
      "rgb(0, 0, 0)",
      "rgb(103, 14, 179)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #673EB3 <=> R=103, G=62, B=179 => rgb(103, 62, 179)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#778BCD'?",
    "options": [
      "rgb(119, 91, 205)",
      "rgb(0, 0, 0) by design",
      "rgb(119, 139, 205)",
      "rgb(143, 139, 205)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #778BCD <=> R=119, G=139, B=205 => rgb(119, 139, 205)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE score != 2590;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 2590 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values not equal to 2590",
      "Query output returns count representing table column rows having score value sum up to 2590"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 2590."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary != 4110;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 4110 value",
      "Query output is all rows with salary values not equal to 4110",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 4110"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 4110."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity > 6932;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 6932",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 6932 value",
      "Query output returns count representing table column rows having quantity value sum up to 6932"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 6932."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6A3BEE'?",
    "options": [
      "rgb(106, 11, 238)",
      "rgb(0, 0, 0)",
      "rgb(106, 59, 238)",
      "rgb(130, 59, 238)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6A3BEE <=> R=106, G=59, B=238 => rgb(106, 59, 238)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points >= 4654;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 4654 value",
      "Query output returns count representing table column rows having points value sum up to 4654",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values greater than or equal to 4654"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 4654."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0A3BAE'?",
    "options": [
      "rgb(10, 11, 174)",
      "rgb(10, 59, 174)",
      "rgb(34, 59, 174)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0A3BAE <=> R=10, G=59, B=174 => rgb(10, 59, 174)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity <= 6267;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 6267",
      "Query output is all rows with quantity values less than or equal to 6267",
      "Query output includes only rows having quantity exactly equivalent to 6267 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 6267."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#31B257'?",
    "options": [
      "rgb(49, 130, 87)",
      "rgb(0, 0, 0)",
      "rgb(49, 178, 87)",
      "rgb(73, 178, 87)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #31B257 <=> R=49, G=178, B=87 => rgb(49, 178, 87)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age < 2413;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 2413 value",
      "Query output is all rows with age values strictly smaller than 2413",
      "Query output returns count representing table column rows having age value sum up to 2413"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 2413."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points < 2489;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 2489",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly smaller than 2489",
      "Query output includes only rows having points exactly equivalent to 2489 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 2489."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#021F45'?",
    "options": [
      "rgb(26, 31, 69)",
      "rgb(0, 0, 0)",
      "rgb(2, 0, 69)",
      "rgb(2, 31, 69)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #021F45 <=> R=2, G=31, B=69 => rgb(2, 31, 69)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 5120;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 5120",
      "Query output includes only rows having price exactly equivalent to 5120 value",
      "Query output is all rows with price values strictly smaller than 5120",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 5120."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0AEEB5'?",
    "options": [
      "rgb(34, 238, 181)",
      "rgb(10, 190, 181)",
      "rgb(10, 238, 181)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0AEEB5 <=> R=10, G=238, B=181 => rgb(10, 238, 181)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2BC4BB'?",
    "options": [
      "rgb(43, 148, 187)",
      "rgb(43, 196, 187)",
      "rgb(67, 196, 187)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #2BC4BB <=> R=43, G=196, B=187 => rgb(43, 196, 187)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age >= 2005;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 2005",
      "Query output includes only rows having age exactly equivalent to 2005 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values greater than or equal to 2005"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 2005."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#97F84F'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(151, 248, 79)",
      "rgb(151, 200, 79)",
      "rgb(175, 248, 79)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #97F84F <=> R=151, G=248, B=79 => rgb(151, 248, 79)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#725DD3'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(114, 45, 211)",
      "rgb(114, 93, 211)",
      "rgb(138, 93, 211)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #725DD3 <=> R=114, G=93, B=211 => rgb(114, 93, 211)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#227E43'?",
    "options": [
      "rgb(58, 126, 67)",
      "rgb(34, 78, 67)",
      "rgb(0, 0, 0)",
      "rgb(34, 126, 67)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #227E43 <=> R=34, G=126, B=67 => rgb(34, 126, 67)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#538568'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(107, 133, 104)",
      "rgb(83, 85, 104)",
      "rgb(83, 133, 104)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #538568 <=> R=83, G=133, B=104 => rgb(83, 133, 104)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2F075E'?",
    "options": [
      "rgb(47, 7, 94)",
      "rgb(47, 0, 94)",
      "rgb(71, 7, 94)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #2F075E <=> R=47, G=7, B=94 => rgb(47, 7, 94)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6FE10A'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(135, 225, 10)",
      "rgb(111, 177, 10)",
      "rgb(111, 225, 10)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6FE10A <=> R=111, G=225, B=10 => rgb(111, 225, 10)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE age <= 2167;",
    "options": [
      "Query output is all rows with age values less than or equal to 2167",
      "Query output includes only rows having age exactly equivalent to 2167 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 2167"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'age' matches the criteria, which is less than or equal to 2167."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE balance < 1740;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly smaller than 1740",
      "Query output returns count representing table column rows having balance value sum up to 1740",
      "Query output includes only rows having balance exactly equivalent to 1740 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 1740."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price > 5446;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 5446",
      "Query output is all rows with price values strictly larger than 5446",
      "Query output includes only rows having price exactly equivalent to 5446 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 5446."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE age >= 5646;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 5646 value",
      "Query output returns count representing table column rows having age value sum up to 5646",
      "Query output is all rows with age values greater than or equal to 5646",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 5646."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE age != 2795;",
    "options": [
      "Query output is all rows with age values not equal to 2795",
      "Query output includes only rows having age exactly equivalent to 2795 value",
      "Query output returns count representing table column rows having age value sum up to 2795",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 2795."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A6E57F'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(166, 229, 127)",
      "rgb(190, 229, 127)",
      "rgb(166, 181, 127)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A6E57F <=> R=166, G=229, B=127 => rgb(166, 229, 127)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price < 3970;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 3970",
      "Query output returns count representing table column rows having price value sum up to 3970",
      "Query output includes only rows having price exactly equivalent to 3970 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3970."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity != 4812;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values not equal to 4812",
      "Query output includes only rows having quantity exactly equivalent to 4812 value",
      "Query output returns count representing table column rows having quantity value sum up to 4812"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 4812."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE age != 2996;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values not equal to 2996",
      "Query output returns count representing table column rows having age value sum up to 2996",
      "Query output includes only rows having age exactly equivalent to 2996 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 2996."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity < 779;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 779",
      "Query output is all rows with quantity values strictly smaller than 779",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 779 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 779."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score <= 3027;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 3027 value",
      "Query output returns count representing table column rows having score value sum up to 3027",
      "Query output is all rows with score values less than or equal to 3027"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'score' matches the criteria, which is less than or equal to 3027."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance < 5888;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 5888 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly smaller than 5888",
      "Query output returns count representing table column rows having balance value sum up to 5888"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 5888."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DD91A6'?",
    "options": [
      "rgb(221, 97, 166)",
      "rgb(245, 145, 166)",
      "rgb(221, 145, 166)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #DD91A6 <=> R=221, G=145, B=166 => rgb(221, 145, 166)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C57C80'?",
    "options": [
      "rgb(197, 76, 128)",
      "rgb(221, 124, 128)",
      "rgb(0, 0, 0) in practice",
      "rgb(197, 124, 128)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #C57C80 <=> R=197, G=124, B=128 => rgb(197, 124, 128)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1E3DAA'?",
    "options": [
      "rgb(30, 13, 170)",
      "rgb(0, 0, 0)",
      "rgb(54, 61, 170)",
      "rgb(30, 61, 170)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #1E3DAA <=> R=30, G=61, B=170 => rgb(30, 61, 170)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE balance >= 2658;",
    "options": [
      "Query output is all rows with balance values greater than or equal to 2658",
      "Query output returns count representing table column rows having balance value sum up to 2658",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 2658 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 2658."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score >= 1789;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 1789 value",
      "Query output returns count representing table column rows having score value sum up to 1789",
      "Query output is all rows with score values greater than or equal to 1789"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 1789."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity <= 3651;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 3651 value",
      "Query output is all rows with quantity values less than or equal to 3651",
      "Query output returns count representing table column rows having quantity value sum up to 3651",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 3651."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E6DF85'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(230, 175, 133)",
      "rgb(254, 223, 133)",
      "rgb(230, 223, 133)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #E6DF85 <=> R=230, G=223, B=133 => rgb(230, 223, 133)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE price < 4411;",
    "options": [
      "Query output is all rows with price values strictly smaller than 4411",
      "Query output includes only rows having price exactly equivalent to 4411 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 4411"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 4411."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F51DE1'?",
    "options": [
      "rgb(245, 29, 225)",
      "rgb(0, 0, 0)",
      "rgb(255, 29, 225)",
      "rgb(245, 0, 225)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F51DE1 <=> R=245, G=29, B=225 => rgb(245, 29, 225)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price < 203;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 203",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 203",
      "Query output includes only rows having price exactly equivalent to 203 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 203."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#766C43'?",
    "options": [
      "rgb(118, 108, 67)",
      "rgb(142, 108, 67)",
      "rgb(118, 60, 67)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #766C43 <=> R=118, G=108, B=67 => rgb(118, 108, 67)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FA3C17'?",
    "options": [
      "rgb(250, 12, 23)",
      "rgb(255, 60, 23)",
      "rgb(0, 0, 0)",
      "rgb(250, 60, 23)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FA3C17 <=> R=250, G=60, B=23 => rgb(250, 60, 23)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary > 3621;",
    "options": [
      "Query output is all rows with salary values strictly larger than 3621",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 3621 value",
      "Query output returns count representing table column rows having salary value sum up to 3621"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 3621."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age >= 583;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values greater than or equal to 583",
      "Query output includes only rows having age exactly equivalent to 583 value",
      "Query output returns count representing table column rows having age value sum up to 583"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 583."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E62E13'?",
    "options": [
      "rgb(230, 0, 19)",
      "rgb(254, 46, 19)",
      "rgb(0, 0, 0)",
      "rgb(230, 46, 19)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #E62E13 <=> R=230, G=46, B=19 => rgb(230, 46, 19)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#127C30'?",
    "options": [
      "rgb(42, 124, 48)",
      "rgb(18, 76, 48)",
      "rgb(0, 0, 0)",
      "rgb(18, 124, 48)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #127C30 <=> R=18, G=124, B=48 => rgb(18, 124, 48)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price < 2161;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 2161 value",
      "Query output returns count representing table column rows having price value sum up to 2161",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 2161"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 2161."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points < 7706;",
    "options": [
      "Query output is all rows with points values strictly smaller than 7706",
      "Query output includes only rows having points exactly equivalent to 7706 value",
      "Query output returns count representing table column rows having points value sum up to 7706",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 7706."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AF9B57'?",
    "options": [
      "rgb(199, 155, 87)",
      "rgb(0, 0, 0)",
      "rgb(175, 107, 87)",
      "rgb(175, 155, 87)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #AF9B57 <=> R=175, G=155, B=87 => rgb(175, 155, 87)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0F0CAD'?",
    "options": [
      "rgb(15, 12, 173)",
      "rgb(15, 0, 173)",
      "rgb(0, 0, 0)",
      "rgb(39, 12, 173)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0F0CAD <=> R=15, G=12, B=173 => rgb(15, 12, 173)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CF5D45'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(231, 93, 69)",
      "rgb(207, 45, 69)",
      "rgb(207, 93, 69)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CF5D45 <=> R=207, G=93, B=69 => rgb(207, 93, 69)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FEB5B8'?",
    "options": [
      "rgb(254, 133, 184)",
      "rgb(255, 181, 184)",
      "rgb(254, 181, 184)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FEB5B8 <=> R=254, G=181, B=184 => rgb(254, 181, 184)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C59392'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(221, 147, 146)",
      "rgb(197, 147, 146)",
      "rgb(197, 99, 146)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #C59392 <=> R=197, G=147, B=146 => rgb(197, 147, 146)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary < 3044;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 3044",
      "Query output includes only rows having salary exactly equivalent to 3044 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values strictly smaller than 3044"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 3044."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity >= 3918;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 3918 value",
      "Query output returns count representing table column rows having quantity value sum up to 3918",
      "Query output is all rows with quantity values greater than or equal to 3918"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 3918."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score > 1711;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 1711 value",
      "Query output is all rows with score values strictly larger than 1711",
      "Query output returns count representing table column rows having score value sum up to 1711",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 1711."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points <= 2960;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values less than or equal to 2960",
      "Query output includes only rows having points exactly equivalent to 2960 value",
      "Query output returns count representing table column rows having points value sum up to 2960"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 2960."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score < 579;",
    "options": [
      "Query output is all rows with score values strictly smaller than 579",
      "Query output includes only rows having score exactly equivalent to 579 value",
      "Query output returns count representing table column rows having score value sum up to 579",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 579."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points <= 2418;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 2418",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 2418 value",
      "Query output is all rows with points values less than or equal to 2418"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 2418."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE age != 2832;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 2832",
      "Query output includes only rows having age exactly equivalent to 2832 value",
      "Query output is all rows with age values not equal to 2832"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 2832."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE age >= 5710;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 5710",
      "Query output is all rows with age values greater than or equal to 5710",
      "Query output includes only rows having age exactly equivalent to 5710 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 5710."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#BB01D5'?",
    "options": [
      "rgb(211, 1, 213)",
      "rgb(187, 0, 213)",
      "rgb(0, 0, 0)",
      "rgb(187, 1, 213)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #BB01D5 <=> R=187, G=1, B=213 => rgb(187, 1, 213)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#71F63C'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(113, 246, 60)",
      "rgb(113, 198, 60)",
      "rgb(137, 246, 60)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #71F63C <=> R=113, G=246, B=60 => rgb(113, 246, 60)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points >= 7554;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 7554",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 7554 value",
      "Query output is all rows with points values greater than or equal to 7554"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 7554."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8A0903'?",
    "options": [
      "rgb(138, 9, 3)",
      "rgb(0, 0, 0)",
      "rgb(162, 9, 3)",
      "rgb(138, 0, 3)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #8A0903 <=> R=138, G=9, B=3 => rgb(138, 9, 3)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A6024D'?",
    "options": [
      "rgb(190, 2, 77)",
      "rgb(166, 0, 77)",
      "rgb(0, 0, 0)",
      "rgb(166, 2, 77)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #A6024D <=> R=166, G=2, B=77 => rgb(166, 2, 77)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#328576'?",
    "options": [
      "rgb(50, 85, 118)",
      "rgb(50, 133, 118)",
      "rgb(74, 133, 118)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #328576 <=> R=50, G=133, B=118 => rgb(50, 133, 118)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F56A24'?",
    "options": [
      "rgb(245, 106, 36)",
      "rgb(245, 58, 36)",
      "rgb(255, 106, 36)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F56A24 <=> R=245, G=106, B=36 => rgb(245, 106, 36)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE age > 2553;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 2553 value",
      "Query output returns count representing table column rows having age value sum up to 2553",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 2553"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 2553."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DD650A'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(245, 101, 10)",
      "rgb(221, 101, 10)",
      "rgb(221, 53, 10)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #DD650A <=> R=221, G=101, B=10 => rgb(221, 101, 10)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4D91EB'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(77, 145, 235)",
      "rgb(77, 97, 235)",
      "rgb(101, 145, 235)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #4D91EB <=> R=77, G=145, B=235 => rgb(77, 145, 235)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary <= 2524;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 2524",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values less than or equal to 2524",
      "Query output includes only rows having salary exactly equivalent to 2524 value"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 2524."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance < 2884;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 2884 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 2884",
      "Query output is all rows with balance values strictly smaller than 2884"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 2884."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#577EC5'?",
    "options": [
      "rgb(87, 126, 197)",
      "rgb(87, 78, 197)",
      "rgb(111, 126, 197)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #577EC5 <=> R=87, G=126, B=197 => rgb(87, 126, 197)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C9752A'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(201, 69, 42)",
      "rgb(201, 117, 42)",
      "rgb(225, 117, 42)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #C9752A <=> R=201, G=117, B=42 => rgb(201, 117, 42)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price <= 7048;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 7048 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 7048",
      "Query output is all rows with price values less than or equal to 7048"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 7048."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary <= 2273;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 2273 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 2273",
      "Query output is all rows with salary values less than or equal to 2273"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 2273."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#985B08'?",
    "options": [
      "rgb(176, 91, 8)",
      "rgb(152, 91, 8)",
      "rgb(0, 0, 0)",
      "rgb(152, 43, 8)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #985B08 <=> R=152, G=91, B=8 => rgb(152, 91, 8)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DDB1C7'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(221, 177, 199)",
      "rgb(245, 177, 199)",
      "rgb(221, 129, 199)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #DDB1C7 <=> R=221, G=177, B=199 => rgb(221, 177, 199)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity <= 3351;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 3351",
      "Query output includes only rows having quantity exactly equivalent to 3351 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values less than or equal to 3351"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 3351."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#BA5EC6'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(210, 94, 198)",
      "rgb(186, 46, 198)",
      "rgb(186, 94, 198)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #BA5EC6 <=> R=186, G=94, B=198 => rgb(186, 94, 198)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3501E8'?",
    "options": [
      "rgb(53, 1, 232)",
      "rgb(0, 0, 0)",
      "rgb(77, 1, 232)",
      "rgb(53, 0, 232)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3501E8 <=> R=53, G=1, B=232 => rgb(53, 1, 232)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6187E6'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(121, 135, 230)",
      "rgb(97, 87, 230)",
      "rgb(97, 135, 230)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6187E6 <=> R=97, G=135, B=230 => rgb(97, 135, 230)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9328B5'?",
    "options": [
      "rgb(171, 40, 181)",
      "rgb(0, 0, 0)",
      "rgb(147, 40, 181)",
      "rgb(147, 0, 181)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #9328B5 <=> R=147, G=40, B=181 => rgb(147, 40, 181)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points > 7560;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 7560 value",
      "Query output returns count representing table column rows having points value sum up to 7560",
      "Query output is all rows with points values strictly larger than 7560",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 7560."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance < 2789;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 2789 value",
      "Query output returns count representing table column rows having balance value sum up to 2789",
      "Query output is all rows with balance values strictly smaller than 2789"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 2789."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points >= 5880;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 5880",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 5880 value",
      "Query output is all rows with points values greater than or equal to 5880"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 5880."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price < 5298;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 5298",
      "Query output returns count representing table column rows having price value sum up to 5298",
      "Query output includes only rows having price exactly equivalent to 5298 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 5298."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age > 6310;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 6310 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 6310",
      "Query output returns count representing table column rows having age value sum up to 6310"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 6310."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#74A765'?",
    "options": [
      "rgb(140, 167, 101)",
      "rgb(116, 119, 101)",
      "rgb(0, 0, 0) in practice",
      "rgb(116, 167, 101)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #74A765 <=> R=116, G=167, B=101 => rgb(116, 167, 101)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary != 7511;",
    "options": [
      "Query output is all rows with salary values not equal to 7511",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 7511",
      "Query output includes only rows having salary exactly equivalent to 7511 value"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 7511."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price < 5865;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 5865",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 5865 value",
      "Query output is all rows with price values strictly smaller than 5865"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 5865."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE salary >= 2223;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 2223",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values greater than or equal to 2223",
      "Query output includes only rows having salary exactly equivalent to 2223 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 2223."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3EFF01'?",
    "options": [
      "rgb(86, 255, 1)",
      "rgb(62, 255, 1)",
      "rgb(62, 207, 1)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3EFF01 <=> R=62, G=255, B=1 => rgb(62, 255, 1)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age >= 3021;",
    "options": [
      "Query output is all rows with age values greater than or equal to 3021",
      "Query output returns count representing table column rows having age value sum up to 3021",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 3021 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 3021."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7B4D26'?",
    "options": [
      "rgb(123, 77, 38)",
      "rgb(147, 77, 38)",
      "rgb(0, 0, 0)",
      "rgb(123, 29, 38)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #7B4D26 <=> R=123, G=77, B=38 => rgb(123, 77, 38)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2BA423'?",
    "options": [
      "rgb(43, 164, 35)",
      "rgb(0, 0, 0)",
      "rgb(43, 116, 35)",
      "rgb(67, 164, 35)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #2BA423 <=> R=43, G=164, B=35 => rgb(43, 164, 35)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points <= 2657;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 2657 value",
      "Query output is all rows with points values less than or equal to 2657",
      "Query output returns count representing table column rows having points value sum up to 2657"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 2657."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE quantity <= 1354;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 1354 value",
      "Query output returns count representing table column rows having quantity value sum up to 1354",
      "Query output is all rows with quantity values less than or equal to 1354",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'quantity' matches the criteria, which is less than or equal to 1354."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary <= 5602;",
    "options": [
      "Query output is all rows with salary values less than or equal to 5602",
      "Query output includes only rows having salary exactly equivalent to 5602 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 5602"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 5602."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#39868D'?",
    "options": [
      "rgb(57, 134, 141)",
      "rgb(81, 134, 141)",
      "rgb(57, 86, 141)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #39868D <=> R=57, G=134, B=141 => rgb(57, 134, 141)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#44389B'?",
    "options": [
      "rgb(92, 56, 155)",
      "rgb(68, 56, 155)",
      "rgb(68, 8, 155)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #44389B <=> R=68, G=56, B=155 => rgb(68, 56, 155)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AEBDA3'?",
    "options": [
      "rgb(174, 141, 163)",
      "rgb(0, 0, 0) by design",
      "rgb(198, 189, 163)",
      "rgb(174, 189, 163)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #AEBDA3 <=> R=174, G=189, B=163 => rgb(174, 189, 163)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8E10CB'?",
    "options": [
      "rgb(166, 16, 203)",
      "rgb(142, 16, 203)",
      "rgb(142, 0, 203)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #8E10CB <=> R=142, G=16, B=203 => rgb(142, 16, 203)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AF04DA'?",
    "options": [
      "rgb(199, 4, 218)",
      "rgb(175, 4, 218)",
      "rgb(175, 0, 218)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #AF04DA <=> R=175, G=4, B=218 => rgb(175, 4, 218)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age > 4034;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 4034",
      "Query output is all rows with age values strictly larger than 4034",
      "Query output includes only rows having age exactly equivalent to 4034 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 4034."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8FDD09'?",
    "options": [
      "rgb(143, 221, 9)",
      "rgb(0, 0, 0)",
      "rgb(143, 173, 9)",
      "rgb(167, 221, 9)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #8FDD09 <=> R=143, G=221, B=9 => rgb(143, 221, 9)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance < 2850;",
    "options": [
      "Query output is all rows with balance values strictly smaller than 2850",
      "Query output returns count representing table column rows having balance value sum up to 2850",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 2850 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 2850."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#29661C'?",
    "options": [
      "rgb(65, 102, 28)",
      "rgb(0, 0, 0)",
      "rgb(41, 54, 28)",
      "rgb(41, 102, 28)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #29661C <=> R=41, G=102, B=28 => rgb(41, 102, 28)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price < 5510;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 5510",
      "Query output is all rows with price values strictly smaller than 5510",
      "Query output includes only rows having price exactly equivalent to 5510 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 5510."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0C26DB'?",
    "options": [
      "rgb(36, 38, 219)",
      "rgb(12, 38, 219)",
      "rgb(12, 0, 219)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0C26DB <=> R=12, G=38, B=219 => rgb(12, 38, 219)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F1630A'?",
    "options": [
      "rgb(241, 99, 10)",
      "rgb(255, 99, 10)",
      "rgb(241, 51, 10)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F1630A <=> R=241, G=99, B=10 => rgb(241, 99, 10)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE age >= 5227;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 5227",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 5227 value",
      "Query output is all rows with age values greater than or equal to 5227"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 5227."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity > 2782;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 2782",
      "Query output includes only rows having quantity exactly equivalent to 2782 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 2782"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 2782."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary <= 2645;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values less than or equal to 2645",
      "Query output includes only rows having salary exactly equivalent to 2645 value",
      "Query output returns count representing table column rows having salary value sum up to 2645"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 2645."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity != 5001;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 5001 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values not equal to 5001",
      "Query output returns count representing table column rows having quantity value sum up to 5001"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 5001."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary < 4427;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 4427",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 4427 value",
      "Query output is all rows with salary values strictly smaller than 4427"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 4427."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#84D28C'?",
    "options": [
      "rgb(132, 210, 140)",
      "rgb(0, 0, 0) in practice",
      "rgb(132, 162, 140)",
      "rgb(156, 210, 140)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #84D28C <=> R=132, G=210, B=140 => rgb(132, 210, 140)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE score != 89;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 89",
      "Query output includes only rows having score exactly equivalent to 89 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values not equal to 89"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 89."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#778960'?",
    "options": [
      "rgb(119, 89, 96)",
      "rgb(119, 137, 96)",
      "rgb(143, 137, 96)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #778960 <=> R=119, G=137, B=96 => rgb(119, 137, 96)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score > 8001;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 8001 value",
      "Query output is all rows with score values strictly larger than 8001",
      "Query output returns count representing table column rows having score value sum up to 8001"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 8001."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score > 7814;",
    "options": [
      "Query output is all rows with score values strictly larger than 7814",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 7814",
      "Query output includes only rows having score exactly equivalent to 7814 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 7814."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0BE587'?",
    "options": [
      "rgb(35, 229, 135)",
      "rgb(11, 229, 135)",
      "rgb(11, 181, 135)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0BE587 <=> R=11, G=229, B=135 => rgb(11, 229, 135)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D4386F'?",
    "options": [
      "rgb(236, 56, 111)",
      "rgb(212, 8, 111)",
      "rgb(0, 0, 0)",
      "rgb(212, 56, 111)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #D4386F <=> R=212, G=56, B=111 => rgb(212, 56, 111)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C26505'?",
    "options": [
      "rgb(218, 101, 5)",
      "rgb(194, 101, 5)",
      "rgb(0, 0, 0)",
      "rgb(194, 53, 5)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C26505 <=> R=194, G=101, B=5 => rgb(194, 101, 5)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE score >= 7905;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 7905",
      "Query output includes only rows having score exactly equivalent to 7905 value",
      "Query output is all rows with score values greater than or equal to 7905",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 7905."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#203FF6'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(32, 63, 246)",
      "rgb(32, 15, 246)",
      "rgb(56, 63, 246)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #203FF6 <=> R=32, G=63, B=246 => rgb(32, 63, 246)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age > 719;",
    "options": [
      "Query output is all rows with age values strictly larger than 719",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 719",
      "Query output includes only rows having age exactly equivalent to 719 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 719."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE score >= 4098;",
    "options": [
      "Query output is all rows with score values greater than or equal to 4098",
      "Query output returns count representing table column rows having score value sum up to 4098",
      "Query output includes only rows having score exactly equivalent to 4098 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 4098."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C40D53'?",
    "options": [
      "rgb(196, 13, 83)",
      "rgb(0, 0, 0)",
      "rgb(220, 13, 83)",
      "rgb(196, 0, 83)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #C40D53 <=> R=196, G=13, B=83 => rgb(196, 13, 83)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#27FBF2'?",
    "options": [
      "rgb(39, 251, 242)",
      "rgb(63, 251, 242)",
      "rgb(0, 0, 0)",
      "rgb(39, 203, 242)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #27FBF2 <=> R=39, G=251, B=242 => rgb(39, 251, 242)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price > 7935;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 7935",
      "Query output includes only rows having price exactly equivalent to 7935 value",
      "Query output is all rows with price values strictly larger than 7935"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 7935."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age < 5528;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly smaller than 5528",
      "Query output returns count representing table column rows having age value sum up to 5528",
      "Query output includes only rows having age exactly equivalent to 5528 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 5528."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#53FB3F'?",
    "options": [
      "rgb(83, 203, 63)",
      "rgb(83, 251, 63)",
      "rgb(107, 251, 63)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #53FB3F <=> R=83, G=251, B=63 => rgb(83, 251, 63)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D91E2E'?",
    "options": [
      "rgb(217, 30, 46)",
      "rgb(0, 0, 0)",
      "rgb(217, 0, 46)",
      "rgb(241, 30, 46)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #D91E2E <=> R=217, G=30, B=46 => rgb(217, 30, 46)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5EADF6'?",
    "options": [
      "rgb(118, 173, 246)",
      "rgb(94, 125, 246)",
      "rgb(0, 0, 0)",
      "rgb(94, 173, 246)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #5EADF6 <=> R=94, G=173, B=246 => rgb(94, 173, 246)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE age <= 7396;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 7396 value",
      "Query output returns count representing table column rows having age value sum up to 7396",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values less than or equal to 7396"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'age' matches the criteria, which is less than or equal to 7396."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary < 6506;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values strictly smaller than 6506",
      "Query output returns count representing table column rows having salary value sum up to 6506",
      "Query output includes only rows having salary exactly equivalent to 6506 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 6506."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F3B675'?",
    "options": [
      "rgb(243, 182, 117)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 182, 117)",
      "rgb(243, 134, 117)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F3B675 <=> R=243, G=182, B=117 => rgb(243, 182, 117)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score >= 4435;",
    "options": [
      "Query output is all rows with score values greater than or equal to 4435",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 4435 value",
      "Query output returns count representing table column rows having score value sum up to 4435"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 4435."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AFB6F0'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(175, 182, 240)",
      "rgb(175, 134, 240)",
      "rgb(199, 182, 240)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #AFB6F0 <=> R=175, G=182, B=240 => rgb(175, 182, 240)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1A7625'?",
    "options": [
      "rgb(26, 70, 37)",
      "rgb(0, 0, 0)",
      "rgb(50, 118, 37)",
      "rgb(26, 118, 37)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #1A7625 <=> R=26, G=118, B=37 => rgb(26, 118, 37)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2F3E5F'?",
    "options": [
      "rgb(47, 62, 95)",
      "rgb(71, 62, 95)",
      "rgb(47, 14, 95)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #2F3E5F <=> R=47, G=62, B=95 => rgb(47, 62, 95)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8B7F91'?",
    "options": [
      "rgb(139, 127, 145)",
      "rgb(163, 127, 145)",
      "rgb(139, 79, 145)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #8B7F91 <=> R=139, G=127, B=145 => rgb(139, 127, 145)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points < 7220;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 7220 value",
      "Query output is all rows with points values strictly smaller than 7220",
      "Query output returns count representing table column rows having points value sum up to 7220",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 7220."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points < 171;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 171",
      "Query output includes only rows having points exactly equivalent to 171 value",
      "Query output is all rows with points values strictly smaller than 171",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 171."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE points >= 1769;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 1769",
      "Query output is all rows with points values greater than or equal to 1769",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 1769 value"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 1769."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#13DCB8'?",
    "options": [
      "rgb(19, 220, 184)",
      "rgb(19, 172, 184)",
      "rgb(43, 220, 184)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #13DCB8 <=> R=19, G=220, B=184 => rgb(19, 220, 184)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#19D256'?",
    "options": [
      "rgb(49, 210, 86)",
      "rgb(25, 210, 86)",
      "rgb(0, 0, 0)",
      "rgb(25, 162, 86)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #19D256 <=> R=25, G=210, B=86 => rgb(25, 210, 86)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary != 6508;",
    "options": [
      "Query output is all rows with salary values not equal to 6508",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 6508",
      "Query output includes only rows having salary exactly equivalent to 6508 value"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'salary' matches the criteria, which is not equal to 6508."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A6824E'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(166, 130, 78)",
      "rgb(190, 130, 78)",
      "rgb(166, 82, 78)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A6824E <=> R=166, G=130, B=78 => rgb(166, 130, 78)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age > 3394;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 3394",
      "Query output includes only rows having age exactly equivalent to 3394 value",
      "Query output returns count representing table column rows having age value sum up to 3394"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 3394."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE age > 7635;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 7635",
      "Query output includes only rows having age exactly equivalent to 7635 value",
      "Query output is all rows with age values strictly larger than 7635",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 7635."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points >= 3035;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 3035",
      "Query output includes only rows having points exactly equivalent to 3035 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values greater than or equal to 3035"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'points' matches the criteria, which is greater than or equal to 3035."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6B3BA6'?",
    "options": [
      "rgb(107, 59, 166)",
      "rgb(131, 59, 166)",
      "rgb(107, 11, 166)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6B3BA6 <=> R=107, G=59, B=166 => rgb(107, 59, 166)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#AAD54C'?",
    "options": [
      "rgb(194, 213, 76)",
      "rgb(170, 165, 76)",
      "rgb(0, 0, 0)",
      "rgb(170, 213, 76)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #AAD54C <=> R=170, G=213, B=76 => rgb(170, 213, 76)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6C3555'?",
    "options": [
      "rgb(108, 53, 85)",
      "rgb(108, 5, 85)",
      "rgb(0, 0, 0)",
      "rgb(132, 53, 85)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6C3555 <=> R=108, G=53, B=85 => rgb(108, 53, 85)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D05936'?",
    "options": [
      "rgb(232, 89, 54)",
      "rgb(208, 41, 54)",
      "rgb(208, 89, 54)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #D05936 <=> R=208, G=89, B=54 => rgb(208, 89, 54)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#455E54'?",
    "options": [
      "rgb(93, 94, 84)",
      "rgb(69, 94, 84)",
      "rgb(0, 0, 0)",
      "rgb(69, 46, 84)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #455E54 <=> R=69, G=94, B=84 => rgb(69, 94, 84)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#54ABA5'?",
    "options": [
      "rgb(84, 123, 165)",
      "rgb(108, 171, 165)",
      "rgb(84, 171, 165)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #54ABA5 <=> R=84, G=171, B=165 => rgb(84, 171, 165)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#252F73'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(37, 0, 115)",
      "rgb(37, 47, 115)",
      "rgb(61, 47, 115)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #252F73 <=> R=37, G=47, B=115 => rgb(37, 47, 115)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FB8AD7'?",
    "options": [
      "rgb(251, 138, 215)",
      "rgb(0, 0, 0) in practice",
      "rgb(251, 90, 215)",
      "rgb(255, 138, 215)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FB8AD7 <=> R=251, G=138, B=215 => rgb(251, 138, 215)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity != 6874;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 6874",
      "Query output is all rows with quantity values not equal to 6874",
      "Query output includes only rows having quantity exactly equivalent to 6874 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 6874."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity >= 3126;",
    "options": [
      "Query output is all rows with quantity values greater than or equal to 3126",
      "Query output includes only rows having quantity exactly equivalent to 3126 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 3126"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 3126."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1FEE15'?",
    "options": [
      "rgb(55, 238, 21)",
      "rgb(31, 190, 21)",
      "rgb(31, 238, 21)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #1FEE15 <=> R=31, G=238, B=21 => rgb(31, 238, 21)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D95CD5'?",
    "options": [
      "rgb(217, 44, 213)",
      "rgb(241, 92, 213)",
      "rgb(217, 92, 213)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #D95CD5 <=> R=217, G=92, B=213 => rgb(217, 92, 213)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance <= 4347;",
    "options": [
      "Query output is all rows with balance values less than or equal to 4347",
      "Query output includes only rows having balance exactly equivalent to 4347 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 4347"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 4347."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#47B8E6'?",
    "options": [
      "rgb(71, 136, 230)",
      "rgb(0, 0, 0)",
      "rgb(95, 184, 230)",
      "rgb(71, 184, 230)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #47B8E6 <=> R=71, G=184, B=230 => rgb(71, 184, 230)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#749854'?",
    "options": [
      "rgb(140, 152, 84)",
      "rgb(0, 0, 0)",
      "rgb(116, 104, 84)",
      "rgb(116, 152, 84)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #749854 <=> R=116, G=152, B=84 => rgb(116, 152, 84)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F02F56'?",
    "options": [
      "rgb(240, 47, 86)",
      "rgb(0, 0, 0)",
      "rgb(255, 47, 86)",
      "rgb(240, 0, 86)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F02F56 <=> R=240, G=47, B=86 => rgb(240, 47, 86)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A607C4'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(166, 7, 196)",
      "rgb(190, 7, 196)",
      "rgb(166, 0, 196)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A607C4 <=> R=166, G=7, B=196 => rgb(166, 7, 196)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0A478D'?",
    "options": [
      "rgb(34, 71, 141)",
      "rgb(0, 0, 0)",
      "rgb(10, 23, 141)",
      "rgb(10, 71, 141)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0A478D <=> R=10, G=71, B=141 => rgb(10, 71, 141)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity < 7579;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 7579 value",
      "Query output is all rows with quantity values strictly smaller than 7579",
      "Query output returns count representing table column rows having quantity value sum up to 7579"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 7579."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A3E653'?",
    "options": [
      "rgb(187, 230, 83)",
      "rgb(163, 230, 83)",
      "rgb(0, 0, 0)",
      "rgb(163, 182, 83)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A3E653 <=> R=163, G=230, B=83 => rgb(163, 230, 83)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity < 4211;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 4211 value",
      "Query output returns count representing table column rows having quantity value sum up to 4211",
      "Query output is all rows with quantity values strictly smaller than 4211",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 4211."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#5192DD'?",
    "options": [
      "rgb(81, 98, 221)",
      "rgb(0, 0, 0)",
      "rgb(81, 146, 221)",
      "rgb(105, 146, 221)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #5192DD <=> R=81, G=146, B=221 => rgb(81, 146, 221)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age < 6221;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 6221",
      "Query output is all rows with age values strictly smaller than 6221",
      "Query output includes only rows having age exactly equivalent to 6221 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 6221."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8361B0'?",
    "options": [
      "rgb(131, 97, 176)",
      "rgb(0, 0, 0)",
      "rgb(155, 97, 176)",
      "rgb(131, 49, 176)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #8361B0 <=> R=131, G=97, B=176 => rgb(131, 97, 176)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#870FAE'?",
    "options": [
      "rgb(135, 15, 174)",
      "rgb(0, 0, 0)",
      "rgb(135, 0, 174)",
      "rgb(159, 15, 174)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #870FAE <=> R=135, G=15, B=174 => rgb(135, 15, 174)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE points > 2123;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 2123",
      "Query output is all rows with points values strictly larger than 2123",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 2123 value"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 2123."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3F0612'?",
    "options": [
      "rgb(87, 6, 18)",
      "rgb(63, 0, 18)",
      "rgb(0, 0, 0)",
      "rgb(63, 6, 18)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3F0612 <=> R=63, G=6, B=18 => rgb(63, 6, 18)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance != 4349;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 4349 value",
      "Query output returns count representing table column rows having balance value sum up to 4349",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values not equal to 4349"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 4349."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D7CE55'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(215, 206, 85)",
      "rgb(239, 206, 85)",
      "rgb(215, 158, 85)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #D7CE55 <=> R=215, G=206, B=85 => rgb(215, 206, 85)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age > 3042;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 3042",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly equivalent to 3042 value",
      "Query output is all rows with age values strictly larger than 3042"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 3042."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price != 6157;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 6157",
      "Query output is all rows with price values not equal to 6157",
      "Query output includes only rows having price exactly equivalent to 6157 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 6157."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3FDCE6'?",
    "options": [
      "rgb(63, 172, 230)",
      "rgb(0, 0, 0)",
      "rgb(63, 220, 230)",
      "rgb(87, 220, 230)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3FDCE6 <=> R=63, G=220, B=230 => rgb(63, 220, 230)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6DB232'?",
    "options": [
      "rgb(109, 178, 50)",
      "rgb(133, 178, 50)",
      "rgb(109, 130, 50)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6DB232 <=> R=109, G=178, B=50 => rgb(109, 178, 50)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE salary > 2642;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 2642 value",
      "Query output is all rows with salary values strictly larger than 2642",
      "Query output returns count representing table column rows having salary value sum up to 2642"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 2642."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance != 2119;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 2119",
      "Query output is all rows with balance values not equal to 2119",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 2119 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 2119."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#83E488'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(155, 228, 136)",
      "rgb(131, 228, 136)",
      "rgb(131, 180, 136)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #83E488 <=> R=131, G=228, B=136 => rgb(131, 228, 136)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2B56AA'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(67, 86, 170)",
      "rgb(43, 38, 170)",
      "rgb(43, 86, 170)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #2B56AA <=> R=43, G=86, B=170 => rgb(43, 86, 170)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity >= 850;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 850 value",
      "Query output is all rows with quantity values greater than or equal to 850",
      "Query output returns count representing table column rows having quantity value sum up to 850"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 850."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#344491'?",
    "options": [
      "rgb(76, 68, 145)",
      "rgb(52, 68, 145)",
      "rgb(0, 0, 0)",
      "rgb(52, 20, 145)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #344491 <=> R=52, G=68, B=145 => rgb(52, 68, 145)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance > 7558;",
    "options": [
      "Query output is all rows with balance values strictly larger than 7558",
      "Query output returns count representing table column rows having balance value sum up to 7558",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 7558 value"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 7558."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE balance < 3800;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 3800",
      "Query output includes only rows having balance exactly equivalent to 3800 value",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly smaller than 3800"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 3800."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance > 3081;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 3081",
      "Query output includes only rows having balance exactly equivalent to 3081 value",
      "Query output is all rows with balance values strictly larger than 3081",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 3081."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B13B42'?",
    "options": [
      "rgb(177, 11, 66)",
      "rgb(201, 59, 66)",
      "rgb(0, 0, 0)",
      "rgb(177, 59, 66)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B13B42 <=> R=177, G=59, B=66 => rgb(177, 59, 66)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7AADE0'?",
    "options": [
      "rgb(122, 125, 224)",
      "rgb(122, 173, 224)",
      "rgb(146, 173, 224)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #7AADE0 <=> R=122, G=173, B=224 => rgb(122, 173, 224)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6FF22C'?",
    "options": [
      "rgb(111, 242, 44)",
      "rgb(0, 0, 0)",
      "rgb(111, 194, 44)",
      "rgb(135, 242, 44)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6FF22C <=> R=111, G=242, B=44 => rgb(111, 242, 44)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity > 4333;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 4333",
      "Query output includes only rows having quantity exactly equivalent to 4333 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 4333"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 4333."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE balance <= 5729;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output includes only rows having balance exactly equivalent to 5729 value",
      "Query output is all rows with balance values less than or equal to 5729",
      "Query output returns count representing table column rows having balance value sum up to 5729"
    ],
    "answer": 2,
    "explanation": "The '<=' operator filters table rows where the column 'balance' matches the criteria, which is less than or equal to 5729."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A57F77'?",
    "options": [
      "rgb(165, 79, 119)",
      "rgb(0, 0, 0) in practice",
      "rgb(189, 127, 119)",
      "rgb(165, 127, 119)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #A57F77 <=> R=165, G=127, B=119 => rgb(165, 127, 119)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity < 5027;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly smaller than 5027",
      "Query output returns count representing table column rows having quantity value sum up to 5027",
      "Query output includes only rows having quantity exactly equivalent to 5027 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 5027."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points > 717;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 717",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 717 value",
      "Query output is all rows with points values strictly larger than 717"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 717."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age >= 5693;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 5693",
      "Query output is all rows with age values greater than or equal to 5693",
      "Query output includes only rows having age exactly equivalent to 5693 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 5693."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity > 6014;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 6014",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 6014 value",
      "Query output returns count representing table column rows having quantity value sum up to 6014"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 6014."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#48A33A'?",
    "options": [
      "rgb(96, 163, 58)",
      "rgb(72, 163, 58)",
      "rgb(72, 115, 58)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #48A33A <=> R=72, G=163, B=58 => rgb(72, 163, 58)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#92ED63'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(146, 189, 99)",
      "rgb(170, 237, 99)",
      "rgb(146, 237, 99)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #92ED63 <=> R=146, G=237, B=99 => rgb(146, 237, 99)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#086D43'?",
    "options": [
      "rgb(32, 109, 67)",
      "rgb(8, 109, 67)",
      "rgb(8, 61, 67)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #086D43 <=> R=8, G=109, B=67 => rgb(8, 109, 67)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#629A59'?",
    "options": [
      "rgb(98, 106, 89)",
      "rgb(98, 154, 89)",
      "rgb(0, 0, 0)",
      "rgb(122, 154, 89)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #629A59 <=> R=98, G=154, B=89 => rgb(98, 154, 89)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age >= 1004;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 1004",
      "Query output is all rows with age values greater than or equal to 1004",
      "Query output includes only rows having age exactly equivalent to 1004 value"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'age' matches the criteria, which is greater than or equal to 1004."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C9CA7C'?",
    "options": [
      "rgb(225, 202, 124)",
      "rgb(201, 202, 124)",
      "rgb(201, 154, 124)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #C9CA7C <=> R=201, G=202, B=124 => rgb(201, 202, 124)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points < 5252;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 5252",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly smaller than 5252",
      "Query output includes only rows having points exactly equivalent to 5252 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 5252."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#44E177'?",
    "options": [
      "rgb(92, 225, 119)",
      "rgb(68, 225, 119)",
      "rgb(68, 177, 119)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #44E177 <=> R=68, G=225, B=119 => rgb(68, 225, 119)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C7DD48'?",
    "options": [
      "rgb(199, 221, 72)",
      "rgb(223, 221, 72)",
      "rgb(199, 173, 72)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #C7DD48 <=> R=199, G=221, B=72 => rgb(199, 221, 72)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity > 2817;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 2817",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly larger than 2817",
      "Query output includes only rows having quantity exactly equivalent to 2817 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 2817."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#C99F41'?",
    "options": [
      "rgb(225, 159, 65)",
      "rgb(0, 0, 0)",
      "rgb(201, 111, 65)",
      "rgb(201, 159, 65)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #C99F41 <=> R=201, G=159, B=65 => rgb(201, 159, 65)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#70F6DC'?",
    "options": [
      "rgb(136, 246, 220)",
      "rgb(112, 246, 220)",
      "rgb(112, 198, 220)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #70F6DC <=> R=112, G=246, B=220 => rgb(112, 246, 220)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points != 7692;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 7692",
      "Query output is all rows with points values not equal to 7692",
      "Query output includes only rows having points exactly equivalent to 7692 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 7692."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D0FC82'?",
    "options": [
      "rgb(208, 204, 130)",
      "rgb(232, 252, 130)",
      "rgb(0, 0, 0) in practice",
      "rgb(208, 252, 130)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #D0FC82 <=> R=208, G=252, B=130 => rgb(208, 252, 130)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B168CB'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(177, 56, 203)",
      "rgb(201, 104, 203)",
      "rgb(177, 104, 203)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B168CB <=> R=177, G=104, B=203 => rgb(177, 104, 203)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#570A84'?",
    "options": [
      "rgb(87, 10, 132)",
      "rgb(87, 0, 132)",
      "rgb(111, 10, 132)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #570A84 <=> R=87, G=10, B=132 => rgb(87, 10, 132)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6B1087'?",
    "options": [
      "rgb(107, 0, 135)",
      "rgb(0, 0, 0)",
      "rgb(107, 16, 135)",
      "rgb(131, 16, 135)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6B1087 <=> R=107, G=16, B=135 => rgb(107, 16, 135)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE age < 1434;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 1434",
      "Query output includes only rows having age exactly equivalent to 1434 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly smaller than 1434"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 1434."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#4B0738'?",
    "options": [
      "rgb(75, 0, 56)",
      "rgb(99, 7, 56)",
      "rgb(75, 7, 56)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #4B0738 <=> R=75, G=7, B=56 => rgb(75, 7, 56)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score != 6781;",
    "options": [
      "Query output is all rows with score values not equal to 6781",
      "Query output returns count representing table column rows having score value sum up to 6781",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output includes only rows having score exactly equivalent to 6781 value"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 6781."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance < 3103;",
    "options": [
      "Query output is all rows with balance values strictly smaller than 3103",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 3103",
      "Query output includes only rows having balance exactly equivalent to 3103 value"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 3103."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7829A5'?",
    "options": [
      "rgb(144, 41, 165)",
      "rgb(120, 0, 165)",
      "rgb(120, 41, 165)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #7829A5 <=> R=120, G=41, B=165 => rgb(120, 41, 165)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity >= 3819;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 3819 value",
      "Query output returns count representing table column rows having quantity value sum up to 3819",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values greater than or equal to 3819"
    ],
    "answer": 3,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 3819."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D71009'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(215, 16, 9)",
      "rgb(239, 16, 9)",
      "rgb(215, 0, 9)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #D71009 <=> R=215, G=16, B=9 => rgb(215, 16, 9)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#668FE8'?",
    "options": [
      "rgb(102, 143, 232)",
      "rgb(126, 143, 232)",
      "rgb(102, 95, 232)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #668FE8 <=> R=102, G=143, B=232 => rgb(102, 143, 232)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CE0659'?",
    "options": [
      "rgb(230, 6, 89)",
      "rgb(206, 6, 89)",
      "rgb(0, 0, 0)",
      "rgb(206, 0, 89)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CE0659 <=> R=206, G=6, B=89 => rgb(206, 6, 89)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A99505'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(169, 149, 5)",
      "rgb(169, 101, 5)",
      "rgb(193, 149, 5)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A99505 <=> R=169, G=149, B=5 => rgb(169, 149, 5)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#BE88FF'?",
    "options": [
      "rgb(214, 136, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(190, 136, 255)",
      "rgb(190, 88, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #BE88FF <=> R=190, G=136, B=255 => rgb(190, 136, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0503CB'?",
    "options": [
      "rgb(5, 0, 203)",
      "rgb(0, 0, 0)",
      "rgb(5, 3, 203)",
      "rgb(29, 3, 203)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0503CB <=> R=5, G=3, B=203 => rgb(5, 3, 203)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A87196'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(192, 113, 150)",
      "rgb(168, 113, 150)",
      "rgb(168, 65, 150)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #A87196 <=> R=168, G=113, B=150 => rgb(168, 113, 150)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE score >= 5021;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 5021 value",
      "Query output returns count representing table column rows having score value sum up to 5021",
      "Query output is all rows with score values greater than or equal to 5021",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'score' matches the criteria, which is greater than or equal to 5021."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price <= 3277;",
    "options": [
      "Query output is all rows with price values less than or equal to 3277",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 3277",
      "Query output includes only rows having price exactly equivalent to 3277 value"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 3277."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score < 3990;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 3990 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output is all rows with score values strictly smaller than 3990",
      "Query output returns count representing table column rows having score value sum up to 3990"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 3990."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE price > 5553;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output returns count representing table column rows having price value sum up to 5553",
      "Query output is all rows with price values strictly larger than 5553",
      "Query output includes only rows having price exactly equivalent to 5553 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 5553."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE score != 7594;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 7594 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 7594",
      "Query output is all rows with score values not equal to 7594"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 7594."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#92E7C0'?",
    "options": [
      "rgb(146, 183, 192)",
      "rgb(170, 231, 192)",
      "rgb(146, 231, 192)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #92E7C0 <=> R=146, G=231, B=192 => rgb(146, 231, 192)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE price >= 6906;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 6906",
      "Query output is all rows with price values greater than or equal to 6906",
      "Query output includes only rows having price exactly equivalent to 6906 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'price' matches the criteria, which is greater than or equal to 6906."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#39BC9C'?",
    "options": [
      "rgb(57, 140, 156)",
      "rgb(81, 188, 156)",
      "rgb(0, 0, 0)",
      "rgb(57, 188, 156)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #39BC9C <=> R=57, G=188, B=156 => rgb(57, 188, 156)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9688EE'?",
    "options": [
      "rgb(174, 136, 238)",
      "rgb(0, 0, 0) by design",
      "rgb(150, 88, 238)",
      "rgb(150, 136, 238)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9688EE <=> R=150, G=136, B=238 => rgb(150, 136, 238)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE points != 1898;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 1898 value",
      "Query output is all rows with points values not equal to 1898",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 1898"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 1898."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#80E0DC'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(128, 176, 220)",
      "rgb(128, 224, 220)",
      "rgb(152, 224, 220)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #80E0DC <=> R=128, G=224, B=220 => rgb(128, 224, 220)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#41D3EF'?",
    "options": [
      "rgb(65, 211, 239)",
      "rgb(65, 163, 239)",
      "rgb(0, 0, 0)",
      "rgb(89, 211, 239)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #41D3EF <=> R=65, G=211, B=239 => rgb(65, 211, 239)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1758D3'?",
    "options": [
      "rgb(23, 40, 211)",
      "rgb(47, 88, 211)",
      "rgb(0, 0, 0)",
      "rgb(23, 88, 211)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #1758D3 <=> R=23, G=88, B=211 => rgb(23, 88, 211)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance != 4429;",
    "options": [
      "Query output returns count representing table column rows having balance value sum up to 4429",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values not equal to 4429",
      "Query output includes only rows having balance exactly equivalent to 4429 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 4429."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity < 2198;",
    "options": [
      "Query output is all rows with quantity values strictly smaller than 2198",
      "Query output returns count representing table column rows having quantity value sum up to 2198",
      "Query output includes only rows having quantity exactly equivalent to 2198 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 2198."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary >= 7161;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 7161 value",
      "Query output is all rows with salary values greater than or equal to 7161",
      "Query output returns count representing table column rows having salary value sum up to 7161"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 7161."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE salary > 2637;",
    "options": [
      "Query output is all rows with salary values strictly larger than 2637",
      "Query output includes only rows having salary exactly equivalent to 2637 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 2637"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 2637."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE balance >= 5571;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 5571 value",
      "Query output is all rows with balance values greater than or equal to 5571",
      "Query output returns count representing table column rows having balance value sum up to 5571",
      "Query output returns errors due to invalid query syntax parameters on filtering balance"
    ],
    "answer": 1,
    "explanation": "The '>=' operator filters table rows where the column 'balance' matches the criteria, which is greater than or equal to 5571."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE salary >= 5351;",
    "options": [
      "Query output is all rows with salary values greater than or equal to 5351",
      "Query output includes only rows having salary exactly equivalent to 5351 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 5351"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 5351."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3C34C0'?",
    "options": [
      "rgb(84, 52, 192)",
      "rgb(0, 0, 0)",
      "rgb(60, 52, 192)",
      "rgb(60, 4, 192)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3C34C0 <=> R=60, G=52, B=192 => rgb(60, 52, 192)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age != 1822;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 1822",
      "Query output is all rows with age values not equal to 1822",
      "Query output includes only rows having age exactly equivalent to 1822 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 1822."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price > 3097;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly larger than 3097",
      "Query output includes only rows having price exactly equivalent to 3097 value",
      "Query output returns count representing table column rows having price value sum up to 3097"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 3097."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#53C55A'?",
    "options": [
      "rgb(107, 197, 90)",
      "rgb(83, 149, 90)",
      "rgb(0, 0, 0)",
      "rgb(83, 197, 90)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #53C55A <=> R=83, G=197, B=90 => rgb(83, 197, 90)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary > 6384;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 6384",
      "Query output is all rows with salary values strictly larger than 6384",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 6384 value"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 6384."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#20F74D'?",
    "options": [
      "rgb(32, 199, 77)",
      "rgb(32, 247, 77)",
      "rgb(56, 247, 77)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #20F74D <=> R=32, G=247, B=77 => rgb(32, 247, 77)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE quantity > 3941;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 3941",
      "Query output is all rows with quantity values strictly larger than 3941",
      "Query output includes only rows having quantity exactly equivalent to 3941 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 3941."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 6325;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 6325",
      "Query output returns count representing table column rows having price value sum up to 6325",
      "Query output includes only rows having price exactly equivalent to 6325 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 6325."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE score < 2827;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 2827 value",
      "Query output is all rows with score values strictly smaller than 2827",
      "Query output returns count representing table column rows having score value sum up to 2827",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'score' matches the criteria, which is strictly smaller than 2827."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#48A801'?",
    "options": [
      "rgb(96, 168, 1)",
      "rgb(72, 120, 1)",
      "rgb(72, 168, 1)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #48A801 <=> R=72, G=168, B=1 => rgb(72, 168, 1)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DD386A'?",
    "options": [
      "rgb(221, 8, 106)",
      "rgb(245, 56, 106)",
      "rgb(221, 56, 106)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #DD386A <=> R=221, G=56, B=106 => rgb(221, 56, 106)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE salary <= 7670;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 7670 value",
      "Query output is all rows with salary values less than or equal to 7670",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output returns count representing table column rows having salary value sum up to 7670"
    ],
    "answer": 1,
    "explanation": "The '<=' operator filters table rows where the column 'salary' matches the criteria, which is less than or equal to 7670."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity > 2740;",
    "options": [
      "Query output is all rows with quantity values strictly larger than 2740",
      "Query output includes only rows having quantity exactly equivalent to 2740 value",
      "Query output returns count representing table column rows having quantity value sum up to 2740",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 2740."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity > 4382;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 4382 value",
      "Query output returns count representing table column rows having quantity value sum up to 4382",
      "Query output is all rows with quantity values strictly larger than 4382"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 4382."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6F806A'?",
    "options": [
      "rgb(111, 80, 106)",
      "rgb(0, 0, 0) in practice",
      "rgb(111, 128, 106)",
      "rgb(135, 128, 106)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6F806A <=> R=111, G=128, B=106 => rgb(111, 128, 106)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE age != 6520;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 6520 value",
      "Query output is all rows with age values not equal to 6520",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age value sum up to 6520"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 6520."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE age != 4648;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 4648",
      "Query output includes only rows having age exactly equivalent to 4648 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values not equal to 4648"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 4648."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#84BB23'?",
    "options": [
      "rgb(132, 139, 35)",
      "rgb(156, 187, 35)",
      "rgb(132, 187, 35)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #84BB23 <=> R=132, G=187, B=35 => rgb(132, 187, 35)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#96AB9D'?",
    "options": [
      "rgb(150, 171, 157)",
      "rgb(150, 123, 157)",
      "rgb(0, 0, 0) by design",
      "rgb(174, 171, 157)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #96AB9D <=> R=150, G=171, B=157 => rgb(150, 171, 157)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8B65B0'?",
    "options": [
      "rgb(139, 101, 176)",
      "rgb(0, 0, 0) in practice",
      "rgb(139, 53, 176)",
      "rgb(163, 101, 176)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #8B65B0 <=> R=139, G=101, B=176 => rgb(139, 101, 176)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE salary >= 2607;",
    "options": [
      "Query output is all rows with salary values greater than or equal to 2607",
      "Query output returns count representing table column rows having salary value sum up to 2607",
      "Query output includes only rows having salary exactly equivalent to 2607 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 2607."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points <= 7318;",
    "options": [
      "Query output is all rows with points values less than or equal to 7318",
      "Query output includes only rows having points exactly equivalent to 7318 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 7318"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 7318."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B686D5'?",
    "options": [
      "rgb(182, 134, 213)",
      "rgb(0, 0, 0) in practice",
      "rgb(182, 86, 213)",
      "rgb(206, 134, 213)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #B686D5 <=> R=182, G=134, B=213 => rgb(182, 134, 213)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B6065E'?",
    "options": [
      "rgb(182, 0, 94)",
      "rgb(206, 6, 94)",
      "rgb(0, 0, 0)",
      "rgb(182, 6, 94)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B6065E <=> R=182, G=6, B=94 => rgb(182, 6, 94)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points > 7947;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 7947",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly larger than 7947",
      "Query output includes only rows having points exactly equivalent to 7947 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 7947."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points <= 2245;",
    "options": [
      "Query output is all rows with points values less than or equal to 2245",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 2245 value",
      "Query output returns count representing table column rows having points value sum up to 2245"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'points' matches the criteria, which is less than or equal to 2245."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A3DA3E'?",
    "options": [
      "rgb(163, 218, 62)",
      "rgb(187, 218, 62)",
      "rgb(0, 0, 0)",
      "rgb(163, 170, 62)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #A3DA3E <=> R=163, G=218, B=62 => rgb(163, 218, 62)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE salary >= 7688;",
    "options": [
      "Query output includes only rows having salary exactly equivalent to 7688 value",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values greater than or equal to 7688",
      "Query output returns count representing table column rows having salary value sum up to 7688"
    ],
    "answer": 2,
    "explanation": "The '>=' operator filters table rows where the column 'salary' matches the criteria, which is greater than or equal to 7688."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#37E4E1'?",
    "options": [
      "rgb(79, 228, 225)",
      "rgb(0, 0, 0)",
      "rgb(55, 180, 225)",
      "rgb(55, 228, 225)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #37E4E1 <=> R=55, G=228, B=225 => rgb(55, 228, 225)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE balance != 355;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values not equal to 355",
      "Query output includes only rows having balance exactly equivalent to 355 value",
      "Query output returns count representing table column rows having balance value sum up to 355"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'balance' matches the criteria, which is not equal to 355."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#29C12A'?",
    "options": [
      "rgb(41, 145, 42)",
      "rgb(0, 0, 0)",
      "rgb(65, 193, 42)",
      "rgb(41, 193, 42)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #29C12A <=> R=41, G=193, B=42 => rgb(41, 193, 42)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE quantity != 975;",
    "options": [
      "Query output is all rows with quantity values not equal to 975",
      "Query output includes only rows having quantity exactly equivalent to 975 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output returns count representing table column rows having quantity value sum up to 975"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 975."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#623104'?",
    "options": [
      "rgb(122, 49, 4)",
      "rgb(98, 49, 4)",
      "rgb(0, 0, 0)",
      "rgb(98, 1, 4)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #623104 <=> R=98, G=49, B=4 => rgb(98, 49, 4)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#2941AC'?",
    "options": [
      "rgb(65, 65, 172)",
      "rgb(41, 65, 172)",
      "rgb(41, 17, 172)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #2941AC <=> R=41, G=65, B=172 => rgb(41, 65, 172)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price != 2162;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 2162",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 2162 value",
      "Query output is all rows with price values not equal to 2162"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 2162."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7B0A88'?",
    "options": [
      "rgb(123, 10, 136)",
      "rgb(0, 0, 0)",
      "rgb(147, 10, 136)",
      "rgb(123, 0, 136)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #7B0A88 <=> R=123, G=10, B=136 => rgb(123, 10, 136)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#D7EF0E'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(215, 191, 14)",
      "rgb(239, 239, 14)",
      "rgb(215, 239, 14)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #D7EF0E <=> R=215, G=239, B=14 => rgb(215, 239, 14)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0365B3'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(3, 53, 179)",
      "rgb(3, 101, 179)",
      "rgb(27, 101, 179)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0365B3 <=> R=3, G=101, B=179 => rgb(3, 101, 179)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE points > 6327;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output includes only rows having points exactly equivalent to 6327 value",
      "Query output is all rows with points values strictly larger than 6327",
      "Query output returns count representing table column rows having points value sum up to 6327"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 6327."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B348F7'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(179, 24, 247)",
      "rgb(203, 72, 247)",
      "rgb(179, 72, 247)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #B348F7 <=> R=179, G=72, B=247 => rgb(179, 72, 247)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCE910'?",
    "options": [
      "rgb(228, 233, 16)",
      "rgb(0, 0, 0)",
      "rgb(204, 233, 16)",
      "rgb(204, 185, 16)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCE910 <=> R=204, G=233, B=16 => rgb(204, 233, 16)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F64913'?",
    "options": [
      "rgb(255, 73, 19)",
      "rgb(246, 25, 19)",
      "rgb(246, 73, 19)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #F64913 <=> R=246, G=73, B=19 => rgb(246, 73, 19)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE balance > 1914;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output returns count representing table column rows having balance value sum up to 1914",
      "Query output includes only rows having balance exactly equivalent to 1914 value",
      "Query output is all rows with balance values strictly larger than 1914"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'balance' matches the criteria, which is strictly larger than 1914."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#364CAD'?",
    "options": [
      "rgb(78, 76, 173)",
      "rgb(0, 0, 0)",
      "rgb(54, 28, 173)",
      "rgb(54, 76, 173)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #364CAD <=> R=54, G=76, B=173 => rgb(54, 76, 173)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1944C5'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(49, 68, 197)",
      "rgb(25, 68, 197)",
      "rgb(25, 20, 197)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #1944C5 <=> R=25, G=68, B=197 => rgb(25, 68, 197)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity < 3199;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly smaller than 3199",
      "Query output returns count representing table column rows having quantity value sum up to 3199",
      "Query output includes only rows having quantity exactly equivalent to 3199 value"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 3199."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age < 5407;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly smaller than 5407",
      "Query output includes only rows having age exactly equivalent to 5407 value",
      "Query output returns count representing table column rows having age value sum up to 5407"
    ],
    "answer": 1,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 5407."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#037CB0'?",
    "options": [
      "rgb(27, 124, 176)",
      "rgb(3, 76, 176)",
      "rgb(3, 124, 176)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #037CB0 <=> R=3, G=124, B=176 => rgb(3, 124, 176)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#509DD9'?",
    "options": [
      "rgb(80, 157, 217)",
      "rgb(80, 109, 217)",
      "rgb(0, 0, 0)",
      "rgb(104, 157, 217)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #509DD9 <=> R=80, G=157, B=217 => rgb(80, 157, 217)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price < 3087;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 3087",
      "Query output includes only rows having price exactly equivalent to 3087 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 3087"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 3087."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE age != 4679;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values not equal to 4679",
      "Query output includes only rows having age exactly equivalent to 4679 value",
      "Query output returns count representing table column rows having age value sum up to 4679"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'age' matches the criteria, which is not equal to 4679."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#72C051'?",
    "options": [
      "rgb(114, 192, 81)",
      "rgb(138, 192, 81)",
      "rgb(0, 0, 0)",
      "rgb(114, 144, 81)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #72C051 <=> R=114, G=192, B=81 => rgb(114, 192, 81)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points > 3080;",
    "options": [
      "Query output is all rows with points values strictly larger than 3080",
      "Query output includes only rows having points exactly equivalent to 3080 value",
      "Query output returns count representing table column rows having points value sum up to 3080",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 0,
    "explanation": "The '>' operator filters table rows where the column 'points' matches the criteria, which is strictly larger than 3080."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE points < 5860;",
    "options": [
      "Query output is all rows with points values strictly smaller than 5860",
      "Query output includes only rows having points exactly equivalent to 5860 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output returns count representing table column rows having points value sum up to 5860"
    ],
    "answer": 0,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 5860."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#EC299C'?",
    "options": [
      "rgb(255, 41, 156)",
      "rgb(236, 41, 156)",
      "rgb(0, 0, 0)",
      "rgb(236, 0, 156)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #EC299C <=> R=236, G=41, B=156 => rgb(236, 41, 156)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE balance < 2267;",
    "options": [
      "Query output includes only rows having balance exactly equivalent to 2267 value",
      "Query output returns count representing table column rows having balance value sum up to 2267",
      "Query output returns errors due to invalid query syntax parameters on filtering balance",
      "Query output is all rows with balance values strictly smaller than 2267"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'balance' matches the criteria, which is strictly smaller than 2267."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0FC2D4'?",
    "options": [
      "rgb(39, 194, 212)",
      "rgb(15, 194, 212)",
      "rgb(15, 146, 212)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0FC2D4 <=> R=15, G=194, B=212 => rgb(15, 194, 212)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#354263'?",
    "options": [
      "rgb(53, 18, 99)",
      "rgb(53, 66, 99)",
      "rgb(0, 0, 0)",
      "rgb(77, 66, 99)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #354263 <=> R=53, G=66, B=99 => rgb(53, 66, 99)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#ED5B70'?",
    "options": [
      "rgb(237, 91, 112)",
      "rgb(255, 91, 112)",
      "rgb(0, 0, 0)",
      "rgb(237, 43, 112)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #ED5B70 <=> R=237, G=91, B=112 => rgb(237, 91, 112)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7C118F'?",
    "options": [
      "rgb(148, 17, 143)",
      "rgb(0, 0, 0)",
      "rgb(124, 0, 143)",
      "rgb(124, 17, 143)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #7C118F <=> R=124, G=17, B=143 => rgb(124, 17, 143)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price > 3868;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 3868 value",
      "Query output is all rows with price values strictly larger than 3868",
      "Query output returns count representing table column rows having price value sum up to 3868"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'price' matches the criteria, which is strictly larger than 3868."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9F3A28'?",
    "options": [
      "rgb(159, 10, 40)",
      "rgb(159, 58, 40)",
      "rgb(0, 0, 0)",
      "rgb(183, 58, 40)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #9F3A28 <=> R=159, G=58, B=40 => rgb(159, 58, 40)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#533B5B'?",
    "options": [
      "rgb(83, 11, 91)",
      "rgb(83, 59, 91)",
      "rgb(0, 0, 0)",
      "rgb(107, 59, 91)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #533B5B <=> R=83, G=59, B=91 => rgb(83, 59, 91)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E5E2EE'?",
    "options": [
      "rgb(253, 226, 238)",
      "rgb(0, 0, 0) in practice",
      "rgb(229, 226, 238)",
      "rgb(229, 178, 238)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #E5E2EE <=> R=229, G=226, B=238 => rgb(229, 226, 238)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#24BEDC'?",
    "options": [
      "rgb(60, 190, 220)",
      "rgb(36, 142, 220)",
      "rgb(0, 0, 0)",
      "rgb(36, 190, 220)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #24BEDC <=> R=36, G=190, B=220 => rgb(36, 190, 220)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Employees', what does the SQL query filter for? SELECT * FROM Employees WHERE price <= 7999;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 7999",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 7999 value",
      "Query output is all rows with price values less than or equal to 7999"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 7999."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#56462F'?",
    "options": [
      "rgb(86, 22, 47)",
      "rgb(0, 0, 0)",
      "rgb(110, 70, 47)",
      "rgb(86, 70, 47)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #56462F <=> R=86, G=70, B=47 => rgb(86, 70, 47)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1509AF'?",
    "options": [
      "rgb(45, 9, 175)",
      "rgb(21, 0, 175)",
      "rgb(21, 9, 175)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #1509AF <=> R=21, G=9, B=175 => rgb(21, 9, 175)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#E4C392'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(228, 147, 146)",
      "rgb(228, 195, 146)",
      "rgb(252, 195, 146)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #E4C392 <=> R=228, G=195, B=146 => rgb(228, 195, 146)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity < 3671;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 3671",
      "Query output includes only rows having quantity exactly equivalent to 3671 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly smaller than 3671"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'quantity' matches the criteria, which is strictly smaller than 3671."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE salary > 3598;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output includes only rows having salary exactly equivalent to 3598 value",
      "Query output is all rows with salary values strictly larger than 3598",
      "Query output returns count representing table column rows having salary value sum up to 3598"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'salary' matches the criteria, which is strictly larger than 3598."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE age < 7757;",
    "options": [
      "Query output returns count representing table column rows having age value sum up to 7757",
      "Query output includes only rows having age exactly equivalent to 7757 value",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly smaller than 7757"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'age' matches the criteria, which is strictly smaller than 7757."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE age > 7593;",
    "options": [
      "Query output includes only rows having age exactly equivalent to 7593 value",
      "Query output is all rows with age values strictly larger than 7593",
      "Query output returns count representing table column rows having age value sum up to 7593",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'age' matches the criteria, which is strictly larger than 7593."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#DC5C53'?",
    "options": [
      "rgb(220, 44, 83)",
      "rgb(0, 0, 0)",
      "rgb(220, 92, 83)",
      "rgb(244, 92, 83)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #DC5C53 <=> R=220, G=92, B=83 => rgb(220, 92, 83)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price < 5347;",
    "options": [
      "Query output includes only rows having price exactly equivalent to 5347 value",
      "Query output returns count representing table column rows having price value sum up to 5347",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 5347"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 5347."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity > 2152;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 2152",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values strictly larger than 2152",
      "Query output includes only rows having quantity exactly equivalent to 2152 value"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 2152."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE points < 6629;",
    "options": [
      "Query output includes only rows having points exactly equivalent to 6629 value",
      "Query output returns count representing table column rows having points value sum up to 6629",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values strictly smaller than 6629"
    ],
    "answer": 3,
    "explanation": "The '<' operator filters table rows where the column 'points' matches the criteria, which is strictly smaller than 6629."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points != 1096;",
    "options": [
      "Query output is all rows with points values not equal to 1096",
      "Query output returns count representing table column rows having points value sum up to 1096",
      "Query output includes only rows having points exactly equivalent to 1096 value",
      "Query output returns errors due to invalid query syntax parameters on filtering points"
    ],
    "answer": 0,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 1096."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE salary < 2041;",
    "options": [
      "Query output returns count representing table column rows having salary value sum up to 2041",
      "Query output returns errors due to invalid query syntax parameters on filtering salary",
      "Query output is all rows with salary values strictly smaller than 2041",
      "Query output includes only rows having salary exactly equivalent to 2041 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'salary' matches the criteria, which is strictly smaller than 2041."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE quantity != 7189;",
    "options": [
      "Query output returns count representing table column rows having quantity value sum up to 7189",
      "Query output is all rows with quantity values not equal to 7189",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 7189 value"
    ],
    "answer": 1,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 7189."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#02ECDF'?",
    "options": [
      "rgb(2, 188, 223)",
      "rgb(0, 0, 0)",
      "rgb(26, 236, 223)",
      "rgb(2, 236, 223)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #02ECDF <=> R=2, G=236, B=223 => rgb(2, 236, 223)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#59AA28'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(89, 170, 40)",
      "rgb(89, 122, 40)",
      "rgb(113, 170, 40)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #59AA28 <=> R=89, G=170, B=40 => rgb(89, 170, 40)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Transactions', what does the SQL query filter for? SELECT * FROM Transactions WHERE quantity > 6983;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 6983 value",
      "Query output returns count representing table column rows having quantity value sum up to 6983",
      "Query output is all rows with quantity values strictly larger than 6983",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity"
    ],
    "answer": 2,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 6983."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#F4E2DA'?",
    "options": [
      "rgb(244, 226, 218)",
      "rgb(255, 226, 218)",
      "rgb(0, 0, 0) by design",
      "rgb(244, 178, 218)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #F4E2DA <=> R=244, G=226, B=218 => rgb(244, 226, 218)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE points != 4738;",
    "options": [
      "Query output returns count representing table column rows having points value sum up to 4738",
      "Query output returns errors due to invalid query syntax parameters on filtering points",
      "Query output is all rows with points values not equal to 4738",
      "Query output includes only rows having points exactly equivalent to 4738 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'points' matches the criteria, which is not equal to 4738."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score != 36;",
    "options": [
      "Query output includes only rows having score exactly equivalent to 36 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score",
      "Query output returns count representing table column rows having score value sum up to 36",
      "Query output is all rows with score values not equal to 36"
    ],
    "answer": 3,
    "explanation": "The '!=' operator filters table rows where the column 'score' matches the criteria, which is not equal to 36."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#52E148'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(106, 225, 72)",
      "rgb(82, 177, 72)",
      "rgb(82, 225, 72)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #52E148 <=> R=82, G=225, B=72 => rgb(82, 225, 72)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#564909'?",
    "options": [
      "rgb(110, 73, 9)",
      "rgb(86, 25, 9)",
      "rgb(86, 73, 9)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #564909 <=> R=86, G=73, B=9 => rgb(86, 73, 9)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE quantity >= 3278;",
    "options": [
      "Query output is all rows with quantity values greater than or equal to 3278",
      "Query output returns count representing table column rows having quantity value sum up to 3278",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 3278 value"
    ],
    "answer": 0,
    "explanation": "The '>=' operator filters table rows where the column 'quantity' matches the criteria, which is greater than or equal to 3278."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#B7262A'?",
    "options": [
      "rgb(183, 38, 42)",
      "rgb(207, 38, 42)",
      "rgb(0, 0, 0)",
      "rgb(183, 0, 42)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #B7262A <=> R=183, G=38, B=42 => rgb(183, 38, 42)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#224021'?",
    "options": [
      "rgb(34, 16, 33)",
      "rgb(58, 64, 33)",
      "rgb(34, 64, 33)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #224021 <=> R=34, G=64, B=33 => rgb(34, 64, 33)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Accounts', what does the SQL query filter for? SELECT * FROM Accounts WHERE price < 4653;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 4653",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values strictly smaller than 4653",
      "Query output includes only rows having price exactly equivalent to 4653 value"
    ],
    "answer": 2,
    "explanation": "The '<' operator filters table rows where the column 'price' matches the criteria, which is strictly smaller than 4653."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#48A3F6'?",
    "options": [
      "rgb(72, 115, 246)",
      "rgb(0, 0, 0)",
      "rgb(72, 163, 246)",
      "rgb(96, 163, 246)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #48A3F6 <=> R=72, G=163, B=246 => rgb(72, 163, 246)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7FCF62'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(127, 159, 98)",
      "rgb(151, 207, 98)",
      "rgb(127, 207, 98)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #7FCF62 <=> R=127, G=207, B=98 => rgb(127, 207, 98)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7A8895'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(146, 136, 149)",
      "rgb(122, 88, 149)",
      "rgb(122, 136, 149)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #7A8895 <=> R=122, G=136, B=149 => rgb(122, 136, 149)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#A0F3F1'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(160, 243, 241)",
      "rgb(160, 195, 241)",
      "rgb(184, 243, 241)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #A0F3F1 <=> R=160, G=243, B=241 => rgb(160, 243, 241)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#8897D2'?",
    "options": [
      "rgb(136, 103, 210)",
      "rgb(136, 151, 210)",
      "rgb(0, 0, 0) by design",
      "rgb(160, 151, 210)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #8897D2 <=> R=136, G=151, B=210 => rgb(136, 151, 210)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#34B1F2'?",
    "options": [
      "rgb(76, 177, 242)",
      "rgb(52, 177, 242)",
      "rgb(52, 129, 242)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #34B1F2 <=> R=52, G=177, B=242 => rgb(52, 177, 242)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#19E131'?",
    "options": [
      "rgb(49, 225, 49)",
      "rgb(25, 177, 49)",
      "rgb(25, 225, 49)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #19E131 <=> R=25, G=225, B=49 => rgb(25, 225, 49)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#7DD23F'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(149, 210, 63)",
      "rgb(125, 162, 63)",
      "rgb(125, 210, 63)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #7DD23F <=> R=125, G=210, B=63 => rgb(125, 210, 63)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#23AED0'?",
    "options": [
      "rgb(59, 174, 208)",
      "rgb(0, 0, 0)",
      "rgb(35, 126, 208)",
      "rgb(35, 174, 208)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #23AED0 <=> R=35, G=174, B=208 => rgb(35, 174, 208)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#1188BD'?",
    "options": [
      "rgb(17, 88, 189)",
      "rgb(41, 136, 189)",
      "rgb(0, 0, 0)",
      "rgb(17, 136, 189)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #1188BD <=> R=17, G=136, B=189 => rgb(17, 136, 189)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price <= 1137;",
    "options": [
      "Query output is all rows with price values less than or equal to 1137",
      "Query output returns count representing table column rows having price value sum up to 1137",
      "Query output includes only rows having price exactly equivalent to 1137 value",
      "Query output returns errors due to invalid query syntax parameters on filtering price"
    ],
    "answer": 0,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 1137."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#92B8F9'?",
    "options": [
      "rgb(146, 184, 249)",
      "rgb(146, 136, 249)",
      "rgb(170, 184, 249)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #92B8F9 <=> R=146, G=184, B=249 => rgb(146, 184, 249)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE quantity != 3224;",
    "options": [
      "Query output includes only rows having quantity exactly equivalent to 3224 value",
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output is all rows with quantity values not equal to 3224",
      "Query output returns count representing table column rows having quantity value sum up to 3224"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'quantity' matches the criteria, which is not equal to 3224."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Products', what does the SQL query filter for? SELECT * FROM Products WHERE price != 4057;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 4057",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output is all rows with price values not equal to 4057",
      "Query output includes only rows having price exactly equivalent to 4057 value"
    ],
    "answer": 2,
    "explanation": "The '!=' operator filters table rows where the column 'price' matches the criteria, which is not equal to 4057."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Users', what does the SQL query filter for? SELECT * FROM Users WHERE score > 4201;",
    "options": [
      "Query output returns count representing table column rows having score value sum up to 4201",
      "Query output is all rows with score values strictly larger than 4201",
      "Query output includes only rows having score exactly equivalent to 4201 value",
      "Query output returns errors due to invalid query syntax parameters on filtering score"
    ],
    "answer": 1,
    "explanation": "The '>' operator filters table rows where the column 'score' matches the criteria, which is strictly larger than 4201."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Customers', what does the SQL query filter for? SELECT * FROM Customers WHERE quantity > 529;",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering quantity",
      "Query output includes only rows having quantity exactly equivalent to 529 value",
      "Query output returns count representing table column rows having quantity value sum up to 529",
      "Query output is all rows with quantity values strictly larger than 529"
    ],
    "answer": 3,
    "explanation": "The '>' operator filters table rows where the column 'quantity' matches the criteria, which is strictly larger than 529."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table named 'Orders', what does the SQL query filter for? SELECT * FROM Orders WHERE price <= 3407;",
    "options": [
      "Query output returns count representing table column rows having price value sum up to 3407",
      "Query output returns errors due to invalid query syntax parameters on filtering price",
      "Query output includes only rows having price exactly equivalent to 3407 value",
      "Query output is all rows with price values less than or equal to 3407"
    ],
    "answer": 3,
    "explanation": "The '<=' operator filters table rows where the column 'price' matches the criteria, which is less than or equal to 3407."
  }
];
