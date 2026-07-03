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
      "Document Order Manager",
      "Document Object Model"
    ],
    "answer": 3,
    "explanation": "DOM is the structured representation of HTML elements."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside?",
    "options": [
      "Margin, Border, Padding, Content",
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding",
      "Content, Padding, Border, Margin"
    ],
    "answer": 3,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which HTTP method is typically used to create a new resource on a server?",
    "options": [
      "DELETE",
      "PUT",
      "GET",
      "POST"
    ],
    "answer": 3,
    "explanation": "POST is standard for creating resources; PUT is for updates."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What is the purpose of React's useEffect hook?",
    "options": [
      "To handle side effects like data fetching or DOM manipulation",
      "To store persistent local state under normal conditions",
      "To optimize callback references under normal conditions",
      "To create conditional route structures in standard usage"
    ],
    "answer": 0,
    "explanation": "useEffect runs side-effects during component lifecycle."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS display property makes child items flow either horizontally or vertically inside a flexible container?",
    "options": [
      "display: flex",
      "display: grid",
      "display: block",
      "display: inline-block"
    ],
    "answer": 0,
    "explanation": "Flexbox handles 1-directional layout."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS selector aligns elements by their id attribute?",
    "options": [
      ".id",
      "*id",
      "id",
      "#id"
    ],
    "answer": 3,
    "explanation": "# prefix is for ID selectors; . prefix is for class selectors."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does CORS stand for?",
    "options": [
      "Common Object Request Schema",
      "Cross-Origin Request Security",
      "Cross-Origin Resource Sharing",
      "Central Object Routing System"
    ],
    "answer": 2,
    "explanation": "CORS allows servers to specify who is allowed to fetch endpoints."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "What is Event Bubbling in Javascript?",
    "options": [
      "Events propagate downwards from window in typical implementations",
      "Events stay on target element only in typical implementations",
      "Events execute concurrently on all elements under normal conditions",
      "Events propagate upwards from the target element through its ancestors"
    ],
    "answer": 3,
    "explanation": "Bubbles up from target to outer elements."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "Which JS keyword is hoisting-bound but initialized as undefined?",
    "options": [
      "const",
      "let",
      "var",
      "function"
    ],
    "answer": 2,
    "explanation": "var variables are hoisted and default to undefined."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which tool hashes passwords securely in Node/Express applications?",
    "options": [
      "JWT",
      "crypto-js",
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
      "Key, Value, Salt in practice",
      "ID, Session, Cookie in most cases",
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
      "MongoDB, Express, React, Node",
      "MongoDB, Express, Redux, Node",
      "MySQL, Express, React, Node",
      "MongoDB, Elixir, React, Node"
    ],
    "answer": 0,
    "explanation": "Top Javascript full-stack combination."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "In SQL, which keyword groups rows having the same values?",
    "options": [
      "GROUP BY",
      "ORDER BY",
      "SELECT DISTINCT",
      "HAVING"
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
      "BSON (Binary JSON)",
      "CSV (primary approach)",
      "Plain Text in most cases",
      "XML in practice"
    ],
    "answer": 0,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does MVC stand for in architectural design patterns?",
    "options": [
      "Model-View-Controller",
      "Model-Validation-Controller",
      "Module-View-Code",
      "Map-Value-Collection"
    ],
    "answer": 0,
    "explanation": "Separates database representations, templates/UI, and routers."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 29; filter for?",
    "options": [
      "Query output includes only rows having age exactly 29 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 29",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 29"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 29."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 403 signal?",
    "options": [
      "OK (Request succeeded) in typical implementations",
      "Forbidden (Client validated but has no authorization permissions)",
      "No Content (Request succeeded but returns no content body) in most cases",
      "Created (Resource successfully created) based on convention"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 403 with 'Forbidden (Client validated but has no authorization permissions)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 37; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 37",
      "Query output includes only rows having age exactly 37 inside the database",
      "Query output is all rows with age values strictly larger than 37"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 37."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 200 signal?",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created)",
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 200 with 'OK (Request succeeded)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6699FF'?",
    "options": [
      "rgb(153, 153, 255)",
      "rgb(102, 153, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 102, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #6699FF <=> R=102, G=153, B=255 => rgb(102, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6633'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(23, 255, 255)",
      "rgb(255, 51, 51)",
      "rgb(255, 102, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF6633 <=> R=255, G=102, B=51 => rgb(255, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 18; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 18",
      "Query output includes only rows having age exactly 18 inside the database",
      "Query output is all rows with age values strictly larger than 18",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 18."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 44; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 44",
      "Query output is all rows with age values strictly larger than 44",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 44 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 44."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 34; filter for?",
    "options": [
      "Query output includes only rows having age exactly 34 inside the database",
      "Query output is all rows with age values strictly larger than 34",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 34"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 34."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9966'?",
    "options": [
      "rgb(204, 153, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 102)",
      "rgb(255, 153, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC9966 <=> R=204, G=153, B=102 => rgb(204, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990066'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(217, 255, 255)",
      "rgb(204, 0, 102)",
      "rgb(153, 0, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #990066 <=> R=153, G=0, B=102 => rgb(153, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 39; filter for?",
    "options": [
      "Query output includes only rows having age exactly 39 inside the database",
      "Query output is all rows with age values strictly larger than 39",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 39"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 39."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 401 signal?",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) based on convention",
      "OK (Request succeeded) under normal conditions",
      "Unauthorized (Target credentials invalid or missing)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 401 with 'Unauthorized (Target credentials invalid or missing)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF00'?",
    "options": [
      "rgb(255, 204, 0)",
      "rgb(255, 255, 0)",
      "rgb(166, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFFF00 <=> R=255, G=255, B=0 => rgb(255, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9933'?",
    "options": [
      "rgb(255, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(204, 102, 51)",
      "rgb(204, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC9933 <=> R=204, G=153, B=51 => rgb(204, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 43; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 43",
      "Query output includes only rows having age exactly 43 inside the database",
      "Query output is all rows with age values strictly larger than 43"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 43."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal?",
    "options": [
      "Created (Resource successfully created)",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded) in most cases"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 40; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 40",
      "Query output includes only rows having age exactly 40 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 40"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 40."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 38; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 38",
      "Query output includes only rows having age exactly 38 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 38"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 38."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'?",
    "options": [
      "rgb(51, 153, 153)",
      "rgb(0, 153, 153)",
      "rgb(0, 0, 0)",
      "rgb(0, 102, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 36; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 36",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 36",
      "Query output includes only rows having age exactly 36 inside the database"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 36."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099FF'?",
    "options": [
      "rgb(51, 153, 255)",
      "rgb(0, 102, 255)",
      "rgb(0, 153, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0099FF <=> R=0, G=153, B=255 => rgb(0, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC66'?",
    "options": [
      "rgb(255, 204, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(32, 255, 255)",
      "rgb(255, 153, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FFCC66 <=> R=255, G=204, B=102 => rgb(255, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 31; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 31",
      "Query output is all rows with age values strictly larger than 31",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 31 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 31."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663333'?",
    "options": [
      "rgb(153, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 51)",
      "rgb(102, 0, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663333 <=> R=102, G=51, B=51 => rgb(102, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 24; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 24",
      "Query output returns count representing table column rows having age less than or equal to 24",
      "Query output includes only rows having age exactly 24 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 24."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9966CC'?",
    "options": [
      "rgb(153, 102, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 204)",
      "rgb(153, 51, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9966CC <=> R=153, G=102, B=204 => rgb(153, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal?",
    "options": [
      "Bad Request (Server cannot interpret payload syntax)",
      "Created (Resource successfully created) (default behavior)",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) under normal conditions"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 35; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 35",
      "Query output returns count representing table column rows having age less than or equal to 35",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 35 inside the database"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 35."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3366'?",
    "options": [
      "rgb(204, 51, 102)",
      "rgb(255, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC3366 <=> R=204, G=51, B=102 => rgb(204, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 204 signal?",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) in typical implementations",
      "Bad Request (Server cannot interpret payload syntax) in practice",
      "Created (Resource successfully created) (general case)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 204 with 'No Content (Request succeeded but returns no content body)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 47; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 47",
      "Query output includes only rows having age exactly 47 inside the database",
      "Query output is all rows with age values strictly larger than 47"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 47."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 204, 102)",
      "rgb(51, 255, 102)",
      "rgb(0, 255, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 32; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 32",
      "Query output returns count representing table column rows having age less than or equal to 32",
      "Query output includes only rows having age exactly 32 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 32."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 23; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 23",
      "Query output returns count representing table column rows having age less than or equal to 23",
      "Query output includes only rows having age exactly 23 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 23."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 33",
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output includes only rows having age exactly 33 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660099'?",
    "options": [
      "rgb(153, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 153)",
      "rgb(161, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #660099 <=> R=102, G=0, B=153 => rgb(102, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal?",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) in typical implementations",
      "Created (Resource successfully created) by design",
      "Not Found (Target URL resource does not exist)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900CC'?",
    "options": [
      "rgb(204, 0, 204)",
      "rgb(7, 255, 255)",
      "rgb(153, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #9900CC <=> R=153, G=0, B=204 => rgb(153, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 21; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 21",
      "Query output includes only rows having age exactly 21 inside the database",
      "Query output is all rows with age values strictly larger than 21",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 21."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0099'?",
    "options": [
      "rgb(255, 0, 153)",
      "rgb(209, 255, 255)",
      "rgb(204, 0, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC0099 <=> R=204, G=0, B=153 => rgb(204, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#666633'?",
    "options": [
      "rgb(102, 102, 51)",
      "rgb(102, 51, 51)",
      "rgb(153, 102, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #666633 <=> R=102, G=102, B=51 => rgb(102, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990099'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(118, 255, 255)",
      "rgb(204, 0, 153)",
      "rgb(153, 0, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #990099 <=> R=153, G=0, B=153 => rgb(153, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 26; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 26",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 26 inside the database",
      "Query output is all rows with age values strictly larger than 26"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 26."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 30; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 30",
      "Query output returns count representing table column rows having age less than or equal to 30",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 30 inside the database"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 30."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 28; filter for?",
    "options": [
      "Query output includes only rows having age exactly 28 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 28",
      "Query output is all rows with age values strictly larger than 28"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 28."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 41; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 41",
      "Query output returns count representing table column rows having age less than or equal to 41",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 41 inside the database"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 41."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663399'?",
    "options": [
      "rgb(102, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 153)",
      "rgb(153, 51, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663399 <=> R=102, G=51, B=153 => rgb(102, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999966'?",
    "options": [
      "rgb(153, 102, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 153, 102)",
      "rgb(153, 153, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #999966 <=> R=153, G=153, B=102 => rgb(153, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330066'?",
    "options": [
      "rgb(217, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 102)",
      "rgb(102, 0, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #330066 <=> R=51, G=0, B=102 => rgb(51, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0066'?",
    "options": [
      "rgb(75, 255, 255)",
      "rgb(61, 255, 255)",
      "rgb(255, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF0066 <=> R=255, G=0, B=102 => rgb(255, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6633'?",
    "options": [
      "rgb(204, 102, 51)",
      "rgb(255, 102, 51)",
      "rgb(204, 51, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6633 <=> R=204, G=102, B=51 => rgb(204, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0033'?",
    "options": [
      "rgb(162, 255, 255)",
      "rgb(255, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(197, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF0033 <=> R=255, G=0, B=51 => rgb(255, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300CC'?",
    "options": [
      "rgb(18, 255, 255)",
      "rgb(51, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3300CC <=> R=51, G=0, B=204 => rgb(51, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663366'?",
    "options": [
      "rgb(102, 51, 102)",
      "rgb(153, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #663366 <=> R=102, G=51, B=102 => rgb(102, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF33CC'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(231, 255, 255)",
      "rgb(255, 51, 204)",
      "rgb(255, 0, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF33CC <=> R=255, G=51, B=204 => rgb(255, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333FF'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 0, 255)",
      "rgb(102, 51, 255)",
      "rgb(51, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3333FF <=> R=51, G=51, B=255 => rgb(51, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663300'?",
    "options": [
      "rgb(102, 51, 0)",
      "rgb(153, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #663300 <=> R=102, G=51, B=0 => rgb(102, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 20; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 20",
      "Query output includes only rows having age exactly 20 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 20"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 20."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC00'?",
    "options": [
      "rgb(0, 153, 0)",
      "rgb(0, 204, 0)",
      "rgb(51, 204, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00CC00 <=> R=0, G=204, B=0 => rgb(0, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 25; filter for?",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 25",
      "Query output is all rows with age values strictly larger than 25",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 25 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 25."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3366'?",
    "options": [
      "rgb(255, 0, 102)",
      "rgb(251, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 51, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF3366 <=> R=255, G=51, B=102 => rgb(255, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33CC'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 0, 204)",
      "rgb(204, 51, 204)",
      "rgb(255, 51, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC33CC <=> R=204, G=51, B=204 => rgb(204, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CCCC'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 204)",
      "rgb(102, 204, 204)",
      "rgb(102, 153, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66CCCC <=> R=102, G=204, B=204 => rgb(102, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996600'?",
    "options": [
      "rgb(153, 51, 0)",
      "rgb(204, 102, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 102, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #996600 <=> R=153, G=102, B=0 => rgb(153, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336633'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 102, 51)",
      "rgb(51, 102, 51)",
      "rgb(51, 51, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #336633 <=> R=51, G=102, B=51 => rgb(51, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF00'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 255, 0)",
      "rgb(204, 204, 0)",
      "rgb(255, 255, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCFF00 <=> R=204, G=255, B=0 => rgb(204, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 45; filter for?",
    "options": [
      "Query output includes only rows having age exactly 45 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 45",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 45"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 45."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF33'?",
    "options": [
      "rgb(51, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(102, 255, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33FF33 <=> R=51, G=255, B=51 => rgb(51, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0000'?",
    "options": [
      "rgb(255, 0, 0)",
      "rgb(249, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(141, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF0000 <=> R=255, G=0, B=0 => rgb(255, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFFCC'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(146, 255, 255)",
      "rgb(255, 204, 204)",
      "rgb(255, 255, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFFFCC <=> R=255, G=255, B=204 => rgb(255, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339999'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 153, 153)",
      "rgb(51, 102, 153)",
      "rgb(51, 153, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #339999 <=> R=51, G=153, B=153 => rgb(51, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9900'?",
    "options": [
      "rgb(255, 102, 0)",
      "rgb(0, 0, 0)",
      "rgb(255, 153, 0)",
      "rgb(210, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF9900 <=> R=255, G=153, B=0 => rgb(255, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333366'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 51, 102)",
      "rgb(51, 51, 102)",
      "rgb(51, 0, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #333366 <=> R=51, G=51, B=102 => rgb(51, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996699'?",
    "options": [
      "rgb(153, 51, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)",
      "rgb(153, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #996699 <=> R=153, G=102, B=153 => rgb(153, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 27; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 27",
      "Query output includes only rows having age exactly 27 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 27",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 27."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 19; filter for?",
    "options": [
      "Query output is all rows with age values strictly larger than 19",
      "Query output returns count representing table column rows having age less than or equal to 19",
      "Query output includes only rows having age exactly 19 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 19."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9933CC'?",
    "options": [
      "rgb(153, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 204)",
      "rgb(153, 51, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9933CC <=> R=153, G=51, B=204 => rgb(153, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'?",
    "options": [
      "rgb(51, 204, 51)",
      "rgb(51, 153, 51)",
      "rgb(102, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'?",
    "options": [
      "rgb(0, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 255)",
      "rgb(51, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF99FF'?",
    "options": [
      "rgb(255, 102, 255)",
      "rgb(167, 255, 255)",
      "rgb(255, 153, 255)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF99FF <=> R=255, G=153, B=255 => rgb(255, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCFF'?",
    "options": [
      "rgb(102, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 255)",
      "rgb(51, 204, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33CCFF <=> R=51, G=204, B=255 => rgb(51, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCFF'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 204, 255)",
      "rgb(204, 153, 255)",
      "rgb(255, 204, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCCCFF <=> R=204, G=204, B=255 => rgb(204, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6666FF'?",
    "options": [
      "rgb(102, 51, 255)",
      "rgb(102, 102, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 102, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #6666FF <=> R=102, G=102, B=255 => rgb(102, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CCFF'?",
    "options": [
      "rgb(51, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 204, 255)",
      "rgb(0, 153, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00CCFF <=> R=0, G=204, B=255 => rgb(0, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFFCC'?",
    "options": [
      "rgb(255, 255, 204)",
      "rgb(204, 204, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 255, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCFFCC <=> R=204, G=255, B=204 => rgb(204, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006699'?",
    "options": [
      "rgb(0, 102, 153)",
      "rgb(0, 51, 153)",
      "rgb(51, 102, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #006699 <=> R=0, G=102, B=153 => rgb(0, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 22; filter for?",
    "options": [
      "Query output includes only rows having age exactly 22 inside the database",
      "Query output is all rows with age values strictly larger than 22",
      "Query output returns count representing table column rows having age less than or equal to 22",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 22."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0000FF'?",
    "options": [
      "rgb(150, 255, 255)",
      "rgb(51, 0, 255)",
      "rgb(0, 0, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0000FF <=> R=0, G=0, B=255 => rgb(0, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC66'?",
    "options": [
      "rgb(102, 204, 102)",
      "rgb(51, 204, 102)",
      "rgb(51, 153, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33CC66 <=> R=51, G=204, B=102 => rgb(51, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999999'?",
    "options": [
      "rgb(153, 102, 153)",
      "rgb(153, 153, 153)",
      "rgb(204, 153, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #999999 <=> R=153, G=153, B=153 => rgb(153, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339933'?",
    "options": [
      "rgb(102, 153, 51)",
      "rgb(51, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #339933 <=> R=51, G=153, B=51 => rgb(51, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6633CC'?",
    "options": [
      "rgb(153, 51, 204)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 204)",
      "rgb(102, 51, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6633CC <=> R=102, G=51, B=204 => rgb(102, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF99CC'?",
    "options": [
      "rgb(255, 153, 204)",
      "rgb(180, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF99CC <=> R=255, G=153, B=204 => rgb(255, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'?",
    "options": [
      "rgb(51, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(67, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900FF'?",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(153, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(28, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #9900FF <=> R=153, G=0, B=255 => rgb(153, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600FF'?",
    "options": [
      "rgb(102, 0, 255)",
      "rgb(153, 0, 255)",
      "rgb(162, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6600FF <=> R=102, G=0, B=255 => rgb(102, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF66CC'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 204)",
      "rgb(255, 51, 204)",
      "rgb(133, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF66CC <=> R=255, G=102, B=204 => rgb(255, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669966'?",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(102, 153, 102)",
      "rgb(102, 102, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #669966 <=> R=102, G=153, B=102 => rgb(102, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC00'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 153, 0)",
      "rgb(255, 204, 0)",
      "rgb(58, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCC00 <=> R=255, G=204, B=0 => rgb(255, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'?",
    "options": [
      "rgb(51, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 255)",
      "rgb(102, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'?",
    "options": [
      "rgb(0, 102, 204)",
      "rgb(0, 153, 204)",
      "rgb(51, 153, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996633'?",
    "options": [
      "rgb(204, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 102, 51)",
      "rgb(153, 51, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #996633 <=> R=153, G=102, B=51 => rgb(153, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669933'?",
    "options": [
      "rgb(153, 153, 51)",
      "rgb(102, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 102, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #669933 <=> R=102, G=153, B=51 => rgb(102, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF99'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 255, 153)",
      "rgb(0, 204, 153)",
      "rgb(0, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF99 <=> R=0, G=255, B=153 => rgb(0, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6666'?",
    "options": [
      "rgb(255, 51, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 102)",
      "rgb(195, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF6666 <=> R=255, G=102, B=102 => rgb(255, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600CC'?",
    "options": [
      "rgb(102, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 204)",
      "rgb(183, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6600CC <=> R=102, G=0, B=204 => rgb(102, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC33'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 204, 51)",
      "rgb(153, 153, 51)",
      "rgb(204, 204, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99CC33 <=> R=153, G=204, B=51 => rgb(153, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCCC'?",
    "options": [
      "rgb(204, 204, 204)",
      "rgb(204, 153, 204)",
      "rgb(255, 204, 204)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CCCCCC <=> R=204, G=204, B=204 => rgb(204, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF66FF'?",
    "options": [
      "rgb(189, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 255)",
      "rgb(255, 51, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF66FF <=> R=255, G=102, B=255 => rgb(255, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFCC'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(102, 255, 204)",
      "rgb(153, 255, 204)",
      "rgb(102, 204, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66FFCC <=> R=102, G=255, B=204 => rgb(102, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFFFF'?",
    "options": [
      "rgb(255, 204, 255)",
      "rgb(183, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFFFFF <=> R=255, G=255, B=255 => rgb(255, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FFCC'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 204)",
      "rgb(153, 255, 204)",
      "rgb(204, 255, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99FFCC <=> R=153, G=255, B=204 => rgb(153, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 42; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 42",
      "Query output is all rows with age values strictly larger than 42",
      "Query output includes only rows having age exactly 42 inside the database"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 42."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'?",
    "options": [
      "rgb(222, 255, 255)",
      "rgb(153, 0, 102)",
      "rgb(102, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3333'?",
    "options": [
      "rgb(204, 0, 51)",
      "rgb(255, 51, 51)",
      "rgb(204, 51, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC3333 <=> R=204, G=51, B=51 => rgb(204, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9966'?",
    "options": [
      "rgb(172, 255, 255)",
      "rgb(255, 153, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF9966 <=> R=255, G=153, B=102 => rgb(255, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9999FF'?",
    "options": [
      "rgb(153, 153, 255)",
      "rgb(153, 102, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 153, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9999FF <=> R=153, G=153, B=255 => rgb(153, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC99'?",
    "options": [
      "rgb(189, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 204, 153)",
      "rgb(255, 153, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCC99 <=> R=255, G=204, B=153 => rgb(255, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6600'?",
    "options": [
      "rgb(255, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(116, 255, 255)",
      "rgb(255, 102, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF6600 <=> R=255, G=102, B=0 => rgb(255, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0033'?",
    "options": [
      "rgb(57, 255, 255)",
      "rgb(255, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC0033 <=> R=204, G=0, B=51 => rgb(204, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000066'?",
    "options": [
      "rgb(51, 0, 102)",
      "rgb(0, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(246, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #000066 <=> R=0, G=0, B=102 => rgb(0, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336699'?",
    "options": [
      "rgb(51, 102, 153)",
      "rgb(51, 51, 153)",
      "rgb(102, 102, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #336699 <=> R=51, G=102, B=153 => rgb(51, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC99'?",
    "options": [
      "rgb(0, 153, 153)",
      "rgb(0, 0, 0)",
      "rgb(0, 204, 153)",
      "rgb(51, 204, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00CC99 <=> R=0, G=204, B=153 => rgb(0, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9999'?",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(204, 153, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 153, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC9999 <=> R=204, G=153, B=153 => rgb(204, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'?",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 204, 102)",
      "rgb(153, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF33'?",
    "options": [
      "rgb(153, 255, 51)",
      "rgb(102, 255, 51)",
      "rgb(102, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66FF33 <=> R=102, G=255, B=51 => rgb(102, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF66'?",
    "options": [
      "rgb(102, 204, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 255, 102)",
      "rgb(153, 255, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66FF66 <=> R=102, G=255, B=102 => rgb(102, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC00'?",
    "options": [
      "rgb(153, 204, 0)",
      "rgb(204, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 153, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99CC00 <=> R=153, G=204, B=0 => rgb(153, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF66'?",
    "options": [
      "rgb(255, 204, 102)",
      "rgb(255, 255, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(236, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFFF66 <=> R=255, G=255, B=102 => rgb(255, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0066CC'?",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(0, 102, 204)",
      "rgb(0, 51, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0066CC <=> R=0, G=102, B=204 => rgb(0, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'?",
    "options": [
      "rgb(57, 255, 255)",
      "rgb(102, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669900'?",
    "options": [
      "rgb(153, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(102, 153, 0)",
      "rgb(102, 102, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #669900 <=> R=102, G=153, B=0 => rgb(102, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3399'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 0, 153)",
      "rgb(255, 51, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC3399 <=> R=204, G=51, B=153 => rgb(204, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000033'?",
    "options": [
      "rgb(86, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 51)",
      "rgb(51, 0, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #000033 <=> R=0, G=0, B=51 => rgb(0, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339900'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 153, 0)",
      "rgb(51, 102, 0)",
      "rgb(51, 153, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #339900 <=> R=51, G=153, B=0 => rgb(51, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 46; filter for?",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 46 inside the database",
      "Query output is all rows with age values strictly larger than 46",
      "Query output returns count representing table column rows having age less than or equal to 46"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 46."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9933FF'?",
    "options": [
      "rgb(153, 51, 255)",
      "rgb(153, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9933FF <=> R=153, G=51, B=255 => rgb(153, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF00'?",
    "options": [
      "rgb(51, 255, 0)",
      "rgb(0, 204, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FF00 <=> R=0, G=255, B=0 => rgb(0, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CCCC'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 204, 204)",
      "rgb(51, 204, 204)",
      "rgb(0, 153, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00CCCC <=> R=0, G=204, B=204 => rgb(0, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC66FF'?",
    "options": [
      "rgb(204, 102, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 255)",
      "rgb(255, 102, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC66FF <=> R=204, G=102, B=255 => rgb(204, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF33'?",
    "options": [
      "rgb(153, 204, 51)",
      "rgb(204, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FF33 <=> R=153, G=255, B=51 => rgb(153, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'?",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(102, 102, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009966'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 153, 102)",
      "rgb(0, 102, 102)",
      "rgb(51, 153, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #009966 <=> R=0, G=153, B=102 => rgb(0, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3300'?",
    "options": [
      "rgb(255, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 0)",
      "rgb(204, 51, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC3300 <=> R=204, G=51, B=0 => rgb(204, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFCC'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 204, 204)",
      "rgb(102, 255, 204)",
      "rgb(51, 255, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FFCC <=> R=51, G=255, B=204 => rgb(51, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3399FF'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 153, 255)",
      "rgb(51, 102, 255)",
      "rgb(102, 153, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3399FF <=> R=51, G=153, B=255 => rgb(51, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF33FF'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 0, 255)",
      "rgb(255, 51, 255)",
      "rgb(155, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF33FF <=> R=255, G=51, B=255 => rgb(255, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333399'?",
    "options": [
      "rgb(51, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 153)",
      "rgb(102, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #333399 <=> R=51, G=51, B=153 => rgb(51, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'?",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC33'?",
    "options": [
      "rgb(255, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(110, 255, 255)",
      "rgb(255, 204, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFCC33 <=> R=255, G=204, B=51 => rgb(255, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC33'?",
    "options": [
      "rgb(204, 204, 51)",
      "rgb(204, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(255, 204, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CCCC33 <=> R=204, G=204, B=51 => rgb(204, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC66CC'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 204)",
      "rgb(255, 102, 204)",
      "rgb(204, 102, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC66CC <=> R=204, G=102, B=204 => rgb(204, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'?",
    "options": [
      "rgb(204, 102, 0)",
      "rgb(204, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(255, 153, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF00'?",
    "options": [
      "rgb(102, 204, 0)",
      "rgb(153, 255, 0)",
      "rgb(0, 0, 0)",
      "rgb(102, 255, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FF00 <=> R=102, G=255, B=0 => rgb(102, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669999'?",
    "options": [
      "rgb(102, 153, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 153, 153)",
      "rgb(102, 102, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #669999 <=> R=102, G=153, B=153 => rgb(102, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF99'?",
    "options": [
      "rgb(102, 255, 153)",
      "rgb(51, 204, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FF99 <=> R=51, G=255, B=153 => rgb(51, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9933'?",
    "options": [
      "rgb(147, 255, 255)",
      "rgb(255, 153, 51)",
      "rgb(255, 102, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF9933 <=> R=255, G=153, B=51 => rgb(255, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#666666'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(102, 51, 102)",
      "rgb(153, 102, 102)",
      "rgb(102, 102, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #666666 <=> R=102, G=102, B=102 => rgb(102, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0000CC'?",
    "options": [
      "rgb(187, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 204)",
      "rgb(51, 0, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0000CC <=> R=0, G=0, B=204 => rgb(0, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3333'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(12, 255, 255)",
      "rgb(255, 51, 51)",
      "rgb(255, 0, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF3333 <=> R=255, G=51, B=51 => rgb(255, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3300'?",
    "options": [
      "rgb(255, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(184, 255, 255)",
      "rgb(255, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF3300 <=> R=255, G=51, B=0 => rgb(255, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6633FF'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 0, 255)",
      "rgb(153, 51, 255)",
      "rgb(102, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6633FF <=> R=102, G=51, B=255 => rgb(102, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF33'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(85, 255, 255)",
      "rgb(255, 204, 51)",
      "rgb(255, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFFF33 <=> R=255, G=255, B=51 => rgb(255, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0099'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 0, 153)",
      "rgb(133, 255, 255)",
      "rgb(158, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF0099 <=> R=255, G=0, B=153 => rgb(255, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC00'?",
    "options": [
      "rgb(102, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 204, 0)",
      "rgb(102, 153, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66CC00 <=> R=102, G=204, B=0 => rgb(102, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660000'?",
    "options": [
      "rgb(102, 0, 0)",
      "rgb(153, 0, 0)",
      "rgb(213, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #660000 <=> R=102, G=0, B=0 => rgb(102, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330033'?",
    "options": [
      "rgb(126, 255, 255)",
      "rgb(102, 0, 51)",
      "rgb(51, 0, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #330033 <=> R=51, G=0, B=51 => rgb(51, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFFFF'?",
    "options": [
      "rgb(255, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 204, 255)",
      "rgb(204, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCFFFF <=> R=204, G=255, B=255 => rgb(204, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033CC'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 51, 204)",
      "rgb(0, 0, 204)",
      "rgb(51, 51, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0033CC <=> R=0, G=51, B=204 => rgb(0, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0000'?",
    "options": [
      "rgb(204, 0, 0)",
      "rgb(255, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(15, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC0000 <=> R=204, G=0, B=0 => rgb(204, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990033'?",
    "options": [
      "rgb(3, 255, 255)",
      "rgb(204, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #990033 <=> R=153, G=0, B=51 => rgb(153, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFCC'?",
    "options": [
      "rgb(51, 255, 204)",
      "rgb(0, 255, 204)",
      "rgb(0, 204, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FFCC <=> R=0, G=255, B=204 => rgb(0, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993333'?",
    "options": [
      "rgb(153, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 51)",
      "rgb(153, 0, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #993333 <=> R=153, G=51, B=51 => rgb(153, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00FF'?",
    "options": [
      "rgb(233, 255, 255)",
      "rgb(255, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(107, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF00FF <=> R=255, G=0, B=255 => rgb(255, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330000'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(67, 255, 255)",
      "rgb(102, 0, 0)",
      "rgb(51, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #330000 <=> R=51, G=0, B=0 => rgb(51, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333333'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 0, 51)",
      "rgb(102, 51, 51)",
      "rgb(51, 51, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #333333 <=> R=51, G=51, B=51 => rgb(51, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003399'?",
    "options": [
      "rgb(0, 0, 153)",
      "rgb(51, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #003399 <=> R=0, G=51, B=153 => rgb(0, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333300'?",
    "options": [
      "rgb(51, 0, 0)",
      "rgb(51, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #333300 <=> R=51, G=51, B=0 => rgb(51, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009900'?",
    "options": [
      "rgb(51, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 102, 0)",
      "rgb(0, 153, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #009900 <=> R=0, G=153, B=0 => rgb(0, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF00'?",
    "options": [
      "rgb(153, 255, 0)",
      "rgb(153, 204, 0)",
      "rgb(204, 255, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99FF00 <=> R=153, G=255, B=0 => rgb(153, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF66'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 255, 102)",
      "rgb(51, 204, 102)",
      "rgb(51, 255, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FF66 <=> R=51, G=255, B=102 => rgb(51, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'?",
    "options": [
      "rgb(153, 0, 0)",
      "rgb(204, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(63, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FFFF'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 255, 255)",
      "rgb(153, 204, 255)",
      "rgb(153, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FFFF <=> R=153, G=255, B=255 => rgb(153, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993300'?",
    "options": [
      "rgb(153, 0, 0)",
      "rgb(204, 51, 0)",
      "rgb(153, 51, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #993300 <=> R=153, G=51, B=0 => rgb(153, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0066'?",
    "options": [
      "rgb(204, 0, 102)",
      "rgb(112, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 0, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC0066 <=> R=204, G=0, B=102 => rgb(204, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF99'?",
    "options": [
      "rgb(255, 204, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(5, 255, 255)",
      "rgb(255, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFFF99 <=> R=255, G=255, B=153 => rgb(255, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CCCC'?",
    "options": [
      "rgb(153, 204, 204)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 153, 204)",
      "rgb(204, 204, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99CCCC <=> R=153, G=204, B=204 => rgb(153, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'?",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 51, 255)",
      "rgb(204, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 102, 0)",
      "rgb(204, 153, 0)",
      "rgb(153, 153, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'?",
    "options": [
      "rgb(53, 255, 255)",
      "rgb(255, 204, 204)",
      "rgb(255, 153, 204)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996666'?",
    "options": [
      "rgb(153, 102, 102)",
      "rgb(153, 51, 102)",
      "rgb(204, 102, 102)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #996666 <=> R=153, G=102, B=102 => rgb(153, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9966FF'?",
    "options": [
      "rgb(153, 102, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 255)",
      "rgb(153, 51, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9966FF <=> R=153, G=102, B=255 => rgb(153, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00FF'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 0, 255)",
      "rgb(113, 255, 255)",
      "rgb(204, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC00FF <=> R=204, G=0, B=255 => rgb(204, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC99'?",
    "options": [
      "rgb(102, 153, 153)",
      "rgb(153, 204, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 204, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66CC99 <=> R=102, G=204, B=153 => rgb(102, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC00'?",
    "options": [
      "rgb(255, 204, 0)",
      "rgb(204, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 153, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCCC00 <=> R=204, G=204, B=0 => rgb(204, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339966'?",
    "options": [
      "rgb(51, 102, 102)",
      "rgb(51, 153, 102)",
      "rgb(0, 0, 0)",
      "rgb(102, 153, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #339966 <=> R=51, G=153, B=102 => rgb(51, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6600'?",
    "options": [
      "rgb(255, 102, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 102, 0)",
      "rgb(204, 51, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6600 <=> R=204, G=102, B=0 => rgb(204, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00CC'?",
    "options": [
      "rgb(204, 0, 204)",
      "rgb(5, 255, 255)",
      "rgb(255, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC00CC <=> R=204, G=0, B=204 => rgb(204, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CCFF'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 255)",
      "rgb(102, 153, 255)",
      "rgb(102, 204, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66CCFF <=> R=102, G=204, B=255 => rgb(102, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006633'?",
    "options": [
      "rgb(51, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 102, 51)",
      "rgb(0, 51, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #006633 <=> R=0, G=102, B=51 => rgb(0, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000099'?",
    "options": [
      "rgb(205, 255, 255)",
      "rgb(51, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000099 <=> R=0, G=0, B=153 => rgb(0, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006600'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 51, 0)",
      "rgb(51, 102, 0)",
      "rgb(0, 102, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #006600 <=> R=0, G=102, B=0 => rgb(0, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF66'?",
    "options": [
      "rgb(153, 204, 102)",
      "rgb(153, 255, 102)",
      "rgb(204, 255, 102)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF66 <=> R=153, G=255, B=102 => rgb(153, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366FF'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 255)",
      "rgb(51, 102, 255)",
      "rgb(102, 102, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3366FF <=> R=51, G=102, B=255 => rgb(51, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6666CC'?",
    "options": [
      "rgb(102, 51, 204)",
      "rgb(153, 102, 204)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 102, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6666CC <=> R=102, G=102, B=204 => rgb(102, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC66'?",
    "options": [
      "rgb(102, 153, 102)",
      "rgb(102, 204, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66CC66 <=> R=102, G=204, B=102 => rgb(102, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999933'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 102, 51)",
      "rgb(153, 153, 51)",
      "rgb(204, 153, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #999933 <=> R=153, G=153, B=51 => rgb(153, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC99FF'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 153, 255)",
      "rgb(204, 102, 255)",
      "rgb(204, 153, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC99FF <=> R=204, G=153, B=255 => rgb(204, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993366'?",
    "options": [
      "rgb(153, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 102)",
      "rgb(204, 51, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #993366 <=> R=153, G=51, B=102 => rgb(153, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC33'?",
    "options": [
      "rgb(102, 204, 51)",
      "rgb(102, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 204, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66CC33 <=> R=102, G=204, B=51 => rgb(102, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF33'?",
    "options": [
      "rgb(255, 255, 51)",
      "rgb(204, 255, 51)",
      "rgb(204, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCFF33 <=> R=204, G=255, B=51 => rgb(204, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC99CC'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 204)",
      "rgb(204, 153, 204)",
      "rgb(255, 153, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC99CC <=> R=204, G=153, B=204 => rgb(204, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993399'?",
    "options": [
      "rgb(153, 51, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #993399 <=> R=153, G=51, B=153 => rgb(153, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'?",
    "options": [
      "rgb(0, 51, 255)",
      "rgb(51, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6666'?",
    "options": [
      "rgb(255, 102, 102)",
      "rgb(204, 51, 102)",
      "rgb(204, 102, 102)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6666 <=> R=204, G=102, B=102 => rgb(204, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CCFF'?",
    "options": [
      "rgb(153, 153, 255)",
      "rgb(153, 204, 255)",
      "rgb(204, 204, 255)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99CCFF <=> R=153, G=204, B=255 => rgb(153, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'?",
    "options": [
      "rgb(51, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336600'?",
    "options": [
      "rgb(102, 102, 0)",
      "rgb(51, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #336600 <=> R=51, G=102, B=0 => rgb(51, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF66'?",
    "options": [
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 255, 102)",
      "rgb(204, 255, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCFF66 <=> R=204, G=255, B=102 => rgb(204, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660033'?",
    "options": [
      "rgb(102, 0, 51)",
      "rgb(184, 255, 255)",
      "rgb(153, 0, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #660033 <=> R=102, G=0, B=51 => rgb(102, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009933'?",
    "options": [
      "rgb(51, 153, 51)",
      "rgb(0, 102, 51)",
      "rgb(0, 153, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #009933 <=> R=0, G=153, B=51 => rgb(0, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC00'?",
    "options": [
      "rgb(51, 204, 0)",
      "rgb(102, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CC00 <=> R=51, G=204, B=0 => rgb(51, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFFF'?",
    "options": [
      "rgb(102, 204, 255)",
      "rgb(153, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FFFF <=> R=102, G=255, B=255 => rgb(102, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC33'?",
    "options": [
      "rgb(0, 153, 51)",
      "rgb(51, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 204, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00CC33 <=> R=0, G=204, B=51 => rgb(0, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC99'?",
    "options": [
      "rgb(51, 153, 153)",
      "rgb(51, 204, 153)",
      "rgb(102, 204, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33CC99 <=> R=51, G=204, B=153 => rgb(51, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330099'?",
    "options": [
      "rgb(102, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(150, 255, 255)",
      "rgb(51, 0, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #330099 <=> R=51, G=0, B=153 => rgb(51, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCFF'?",
    "options": [
      "rgb(23, 255, 255)",
      "rgb(255, 204, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 153, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFCCFF <=> R=255, G=204, B=255 => rgb(255, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF00'?",
    "options": [
      "rgb(102, 255, 0)",
      "rgb(51, 255, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33FF00 <=> R=51, G=255, B=0 => rgb(51, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC66'?",
    "options": [
      "rgb(204, 153, 102)",
      "rgb(255, 204, 102)",
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCCC66 <=> R=204, G=204, B=102 => rgb(204, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00CC'?",
    "options": [
      "rgb(255, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(151, 255, 255)",
      "rgb(197, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF00CC <=> R=255, G=0, B=204 => rgb(255, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3399'?",
    "options": [
      "rgb(255, 51, 153)",
      "rgb(255, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(211, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF3399 <=> R=255, G=51, B=153 => rgb(255, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'?",
    "options": [
      "rgb(102, 255, 153)",
      "rgb(102, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 153)",
      "rgb(204, 255, 153)",
      "rgb(153, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9999'?",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 153)",
      "rgb(151, 255, 255)",
      "rgb(255, 153, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF9999 <=> R=255, G=153, B=153 => rgb(255, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 255, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 204, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003333'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 51, 51)",
      "rgb(51, 51, 51)",
      "rgb(0, 0, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #003333 <=> R=0, G=51, B=51 => rgb(0, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6699'?",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 51, 153)",
      "rgb(133, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF6699 <=> R=255, G=102, B=153 => rgb(255, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF99'?",
    "options": [
      "rgb(204, 204, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 255, 153)",
      "rgb(204, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCFF99 <=> R=204, G=255, B=153 => rgb(204, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC99'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 204, 153)",
      "rgb(153, 204, 153)",
      "rgb(153, 153, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99CC99 <=> R=153, G=204, B=153 => rgb(153, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003366'?",
    "options": [
      "rgb(51, 51, 102)",
      "rgb(0, 0, 102)",
      "rgb(0, 51, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #003366 <=> R=0, G=51, B=102 => rgb(0, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9999CC'?",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 153, 204)",
      "rgb(153, 102, 204)",
      "rgb(153, 153, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9999CC <=> R=153, G=153, B=204 => rgb(153, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC99'?",
    "options": [
      "rgb(204, 153, 153)",
      "rgb(204, 204, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 204, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCCC99 <=> R=204, G=204, B=153 => rgb(204, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCCC'?",
    "options": [
      "rgb(51, 204, 204)",
      "rgb(51, 153, 204)",
      "rgb(0, 0, 0)",
      "rgb(102, 204, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CCCC <=> R=51, G=204, B=204 => rgb(51, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333CC'?",
    "options": [
      "rgb(102, 51, 204)",
      "rgb(51, 51, 204)",
      "rgb(51, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3333CC <=> R=51, G=51, B=204 => rgb(51, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC66'?",
    "options": [
      "rgb(0, 153, 102)",
      "rgb(51, 204, 102)",
      "rgb(0, 204, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00CC66 <=> R=0, G=204, B=102 => rgb(0, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#666699'?",
    "options": [
      "rgb(102, 51, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 102, 153)",
      "rgb(102, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #666699 <=> R=102, G=102, B=153 => rgb(102, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6699CC'?",
    "options": [
      "rgb(153, 153, 204)",
      "rgb(102, 153, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(102, 102, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #6699CC <=> R=102, G=153, B=204 => rgb(102, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#666600'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 51, 0)",
      "rgb(153, 102, 0)",
      "rgb(102, 102, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #666600 <=> R=102, G=102, B=0 => rgb(102, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3399CC'?",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 204)",
      "rgb(102, 153, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3399CC <=> R=51, G=153, B=204 => rgb(51, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006666'?",
    "options": [
      "rgb(0, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)",
      "rgb(0, 102, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #006666 <=> R=0, G=102, B=102 => rgb(0, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336666'?",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)",
      "rgb(51, 51, 102)",
      "rgb(102, 102, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #336666 <=> R=51, G=102, B=102 => rgb(51, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0066FF'?",
    "options": [
      "rgb(0, 51, 255)",
      "rgb(51, 102, 255)",
      "rgb(0, 102, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0066FF <=> R=0, G=102, B=255 => rgb(0, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663399'? (Set 1)",
    "options": [
      "rgb(102, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 153)",
      "rgb(153, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #663399 <=> R=102, G=51, B=153 => rgb(102, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'? (Set 2)",
    "options": [
      "rgb(102, 0, 255)",
      "rgb(57, 255, 255)",
      "rgb(51, 0, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 3)",
    "options": [
      "rgb(153, 153, 0)",
      "rgb(153, 102, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 153, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF00'? (Set 4)",
    "options": [
      "rgb(255, 204, 0)",
      "rgb(166, 255, 255)",
      "rgb(255, 255, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFFF00 <=> R=255, G=255, B=0 => rgb(255, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 153)",
      "rgb(153, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FFCC'? (Set 7)",
    "options": [
      "rgb(204, 255, 204)",
      "rgb(153, 204, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 255, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FFCC <=> R=153, G=255, B=204 => rgb(153, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 8)",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(102, 102, 204)",
      "rgb(51, 51, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCFF'? (Set 9)",
    "options": [
      "rgb(204, 204, 255)",
      "rgb(204, 153, 255)",
      "rgb(255, 204, 255)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CCCCFF <=> R=204, G=204, B=255 => rgb(204, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10)",
    "options": [
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 255)",
      "rgb(204, 0, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC99'? (Set 11)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 153, 153)",
      "rgb(255, 204, 153)",
      "rgb(189, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCC99 <=> R=255, G=204, B=153 => rgb(255, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 40; filter for? (Set 12)",
    "options": [
      "Query output is all rows with age values strictly larger than 40",
      "Query output returns count representing table column rows having age less than or equal to 40",
      "Query output includes only rows having age exactly 40 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 40."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 13)",
    "options": [
      "rgb(51, 51, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 204)",
      "rgb(102, 102, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'? (Set 14)",
    "options": [
      "rgb(0, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 204)",
      "rgb(0, 153, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993399'? (Set 15)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(153, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #993399 <=> R=153, G=51, B=153 => rgb(153, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099FF'? (Set 16)",
    "options": [
      "rgb(0, 153, 255)",
      "rgb(0, 102, 255)",
      "rgb(51, 153, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0099FF <=> R=0, G=153, B=255 => rgb(0, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'? (Set 17)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 0, 0)",
      "rgb(204, 0, 0)",
      "rgb(63, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 18)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 255, 255)",
      "rgb(51, 204, 255)",
      "rgb(51, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 19)",
    "options": [
      "rgb(0, 0, 255)",
      "rgb(51, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 20)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 255, 153)",
      "rgb(153, 204, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21)",
    "options": [
      "rgb(0, 204, 102)",
      "rgb(51, 255, 102)",
      "rgb(0, 255, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0000'? (Set 22)",
    "options": [
      "rgb(204, 0, 0)",
      "rgb(15, 255, 255)",
      "rgb(255, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC0000 <=> R=204, G=0, B=0 => rgb(204, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00FF'? (Set 23)",
    "options": [
      "rgb(255, 0, 255)",
      "rgb(204, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(113, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC00FF <=> R=204, G=0, B=255 => rgb(204, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 25)",
    "options": [
      "Content, Padding, Border, Margin",
      "Content, Margin, Border, Padding",
      "Content, Border, Padding, Margin",
      "Margin, Border, Padding, Content"
    ],
    "answer": 0,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 22; filter for? (Set 26)",
    "options": [
      "Query output is all rows with age values strictly larger than 22",
      "Query output includes only rows having age exactly 22 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 22"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 22."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which tool hashes passwords securely in Node/Express applications? (Set 27)",
    "options": [
      "bcrypt",
      "JWT",
      "crypto-js",
      "base64"
    ],
    "answer": 0,
    "explanation": "bcrypt implements salt-round hashing."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996633'? (Set 28)",
    "options": [
      "rgb(153, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(204, 102, 51)",
      "rgb(153, 102, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #996633 <=> R=153, G=102, B=51 => rgb(153, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600CC'? (Set 29)",
    "options": [
      "rgb(153, 0, 204)",
      "rgb(102, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(183, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #6600CC <=> R=102, G=0, B=204 => rgb(102, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30)",
    "options": [
      "Query output is all rows with age values strictly larger than 33",
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output includes only rows having age exactly 33 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 31)",
    "options": [
      "rgb(255, 153, 204)",
      "rgb(53, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 204, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 32)",
    "options": [
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 33)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)",
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 34)",
    "options": [
      "rgb(0, 204, 51)",
      "rgb(0, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF33'? (Set 35)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 255, 51)",
      "rgb(255, 255, 51)",
      "rgb(204, 204, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCFF33 <=> R=204, G=255, B=51 => rgb(204, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 36)",
    "options": [
      "rgb(102, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(222, 255, 255)",
      "rgb(153, 0, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal? (Set 37)",
    "options": [
      "Created (Resource successfully created)",
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded) (standard definition)",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336699'? (Set 38)",
    "options": [
      "rgb(51, 51, 153)",
      "rgb(102, 102, 153)",
      "rgb(51, 102, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #336699 <=> R=51, G=102, B=153 => rgb(51, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal? (Set 39)",
    "options": [
      "Bad Request (Server cannot interpret payload syntax)",
      "Created (Resource successfully created)",
      "OK (Request succeeded) (commonly used)",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'? (Set 2) (Set 40)",
    "options": [
      "rgb(51, 0, 255)",
      "rgb(102, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(57, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'? (Set 41)",
    "options": [
      "rgb(204, 102, 0)",
      "rgb(0, 0, 0)",
      "rgb(255, 153, 0)",
      "rgb(204, 153, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 42)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(153, 255, 153)",
      "rgb(153, 204, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330000'? (Set 43)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 0, 0)",
      "rgb(51, 0, 0)",
      "rgb(67, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #330000 <=> R=51, G=0, B=0 => rgb(51, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 44)",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) in practice",
      "OK (Request succeeded) in typical implementations",
      "Not Found (Target URL resource does not exist)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 13) (Set 45)",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(102, 102, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 204 signal? (Set 46)",
    "options": [
      "OK (Request succeeded) in typical implementations",
      "Created (Resource successfully created) in most cases",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax) in practice"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 204 with 'No Content (Request succeeded but returns no content body)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 31) (Set 47)",
    "options": [
      "rgb(53, 255, 255)",
      "rgb(255, 204, 204)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 153, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0099'? (Set 48)",
    "options": [
      "rgb(209, 255, 255)",
      "rgb(204, 0, 153)",
      "rgb(255, 0, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC0099 <=> R=204, G=0, B=153 => rgb(204, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0000CC'? (Set 49)",
    "options": [
      "rgb(0, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 204)",
      "rgb(187, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0000CC <=> R=0, G=0, B=204 => rgb(0, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "MERN stack consists of? (Set 50)",
    "options": [
      "MongoDB, Express, Redux, Node",
      "MongoDB, Elixir, React, Node",
      "MongoDB, Express, React, Node",
      "MySQL, Express, React, Node"
    ],
    "answer": 2,
    "explanation": "Top Javascript full-stack combination."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 33) (Set 51)",
    "options": [
      "rgb(51, 51, 0)",
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0000'? (Set 52)",
    "options": [
      "rgb(255, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(249, 255, 255)",
      "rgb(141, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF0000 <=> R=255, G=0, B=0 => rgb(255, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033CC'? (Set 53)",
    "options": [
      "rgb(0, 51, 204)",
      "rgb(0, 0, 204)",
      "rgb(51, 51, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0033CC <=> R=0, G=51, B=204 => rgb(0, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009900'? (Set 54)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 102, 0)",
      "rgb(51, 153, 0)",
      "rgb(0, 153, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #009900 <=> R=0, G=153, B=0 => rgb(0, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 55)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output includes only rows having age exactly 33 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 33"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0099'? (Set 48) (Set 56)",
    "options": [
      "rgb(255, 0, 153)",
      "rgb(204, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(209, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC0099 <=> R=204, G=0, B=153 => rgb(204, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC00'? (Set 57)",
    "options": [
      "rgb(51, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 153, 0)",
      "rgb(0, 204, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00CC00 <=> R=0, G=204, B=0 => rgb(0, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 36; filter for? (Set 58)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 36",
      "Query output includes only rows having age exactly 36 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 36"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 36."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993333'? (Set 59)",
    "options": [
      "rgb(153, 51, 51)",
      "rgb(204, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #993333 <=> R=153, G=51, B=51 => rgb(153, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS selector aligns elements by their id attribute? (Set 60)",
    "options": [
      "#id",
      "id",
      ".id",
      "*id"
    ],
    "answer": 0,
    "explanation": "# prefix is for ID selectors; . prefix is for class selectors."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 51, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 18; filter for? (Set 62)",
    "options": [
      "Query output is all rows with age values strictly larger than 18",
      "Query output includes only rows having age exactly 18 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 18"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 18."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 55) (Set 63)",
    "options": [
      "Query output includes only rows having age exactly 33 inside the database",
      "Query output is all rows with age values strictly larger than 33",
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3366'? (Set 64)",
    "options": [
      "rgb(255, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(255, 51, 102)",
      "rgb(251, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF3366 <=> R=255, G=51, B=102 => rgb(255, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF00'? (Set 65)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 204, 0)",
      "rgb(102, 255, 0)",
      "rgb(51, 255, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FF00 <=> R=51, G=255, B=0 => rgb(51, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 66)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 102)",
      "rgb(153, 153, 102)",
      "rgb(204, 204, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF00'? (Set 65) (Set 68)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 255, 0)",
      "rgb(51, 204, 0)",
      "rgb(102, 255, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33FF00 <=> R=51, G=255, B=0 => rgb(51, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC66'? (Set 69)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 204, 102)",
      "rgb(255, 204, 102)",
      "rgb(204, 153, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCCC66 <=> R=204, G=204, B=102 => rgb(204, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333FF'? (Set 70)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 51, 255)",
      "rgb(51, 0, 255)",
      "rgb(51, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3333FF <=> R=51, G=51, B=255 => rgb(51, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC00'? (Set 57) (Set 71)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 204, 0)",
      "rgb(0, 153, 0)",
      "rgb(51, 204, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00CC00 <=> R=0, G=204, B=0 => rgb(0, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'? (Set 17) (Set 72)",
    "options": [
      "rgb(153, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 0)",
      "rgb(63, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330000'? (Set 73)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 0, 0)",
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #330000 <=> R=51, G=0, B=0 => rgb(51, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67) (Set 74)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900FF'? (Set 75)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(28, 255, 255)",
      "rgb(153, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9900FF <=> R=153, G=0, B=255 => rgb(153, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 20) (Set 76)",
    "options": [
      "rgb(153, 255, 153)",
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 77)",
    "options": [
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin",
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding"
    ],
    "answer": 1,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFFCC'? (Set 78)",
    "options": [
      "rgb(146, 255, 255)",
      "rgb(255, 255, 204)",
      "rgb(255, 204, 204)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFFFCC <=> R=255, G=255, B=204 => rgb(255, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "What is Event Bubbling in Javascript? (Set 79)",
    "options": [
      "Events stay on target element only in typical implementations",
      "Events propagate downwards from window in typical implementations",
      "Events propagate upwards from the target element through its ancestors",
      "Events execute concurrently on all elements under normal conditions"
    ],
    "answer": 2,
    "explanation": "Bubbles up from target to outer elements."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 80)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 153, 0)",
      "rgb(153, 153, 0)",
      "rgb(153, 102, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCFF'? (Set 81)",
    "options": [
      "rgb(51, 204, 255)",
      "rgb(51, 153, 255)",
      "rgb(102, 204, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CCFF <=> R=51, G=204, B=255 => rgb(51, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6666FF'? (Set 82)",
    "options": [
      "rgb(102, 102, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 51, 255)",
      "rgb(153, 102, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6666FF <=> R=102, G=102, B=255 => rgb(102, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000033'? (Set 83)",
    "options": [
      "rgb(0, 0, 51)",
      "rgb(51, 0, 51)",
      "rgb(86, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #000033 <=> R=0, G=0, B=51 => rgb(0, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00FF'? (Set 84)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(107, 255, 255)",
      "rgb(233, 255, 255)",
      "rgb(255, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF00FF <=> R=255, G=0, B=255 => rgb(255, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFCC'? (Set 85)",
    "options": [
      "rgb(0, 204, 204)",
      "rgb(51, 255, 204)",
      "rgb(0, 255, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FFCC <=> R=0, G=255, B=204 => rgb(0, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC00'? (Set 86)",
    "options": [
      "rgb(255, 204, 0)",
      "rgb(204, 204, 0)",
      "rgb(204, 153, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCCC00 <=> R=204, G=204, B=0 => rgb(204, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900FF'? (Set 87)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(28, 255, 255)",
      "rgb(204, 0, 255)",
      "rgb(153, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9900FF <=> R=153, G=0, B=255 => rgb(153, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67) (Set 74) (Set 88)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which tool hashes passwords securely in Node/Express applications? (Set 89)",
    "options": [
      "crypto-js",
      "bcrypt",
      "base64",
      "JWT"
    ],
    "answer": 1,
    "explanation": "bcrypt implements salt-round hashing."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 90)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(153, 255, 153)",
      "rgb(204, 255, 153)",
      "rgb(153, 204, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 91)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009933'? (Set 92)",
    "options": [
      "rgb(51, 153, 51)",
      "rgb(0, 153, 51)",
      "rgb(0, 102, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #009933 <=> R=0, G=153, B=51 => rgb(0, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 19) (Set 93)",
    "options": [
      "rgb(0, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 255)",
      "rgb(51, 51, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF33'? (Set 94)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 204, 51)",
      "rgb(85, 255, 255)",
      "rgb(255, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFFF33 <=> R=255, G=255, B=51 => rgb(255, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61) (Set 95)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'? (Set 96)",
    "options": [
      "rgb(51, 255, 255)",
      "rgb(0, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 204, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "In SQL, which keyword groups rows having the same values? (Set 97)",
    "options": [
      "GROUP BY",
      "HAVING",
      "ORDER BY",
      "SELECT DISTINCT"
    ],
    "answer": 0,
    "explanation": "GROUP BY aggregates rows."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 98)",
    "options": [
      "rgb(0, 0, 255)",
      "rgb(0, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 45; filter for? (Set 99)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 45",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 45",
      "Query output includes only rows having age exactly 45 inside the database"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 45."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC00'? (Set 57) (Set 100)",
    "options": [
      "rgb(0, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 0)",
      "rgb(0, 153, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00CC00 <=> R=0, G=204, B=0 => rgb(0, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF00'? (Set 101)",
    "options": [
      "rgb(255, 255, 0)",
      "rgb(0, 0, 0)",
      "rgb(166, 255, 255)",
      "rgb(255, 204, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FFFF00 <=> R=255, G=255, B=0 => rgb(255, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0066CC'? (Set 102)",
    "options": [
      "rgb(0, 51, 204)",
      "rgb(51, 102, 204)",
      "rgb(0, 102, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0066CC <=> R=0, G=102, B=204 => rgb(0, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333333'? (Set 103)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 51)",
      "rgb(51, 0, 51)",
      "rgb(102, 51, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #333333 <=> R=51, G=51, B=51 => rgb(51, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 104)",
    "options": [
      "rgb(51, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(67, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009900'? (Set 54) (Set 105)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 153, 0)",
      "rgb(0, 153, 0)",
      "rgb(0, 102, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #009900 <=> R=0, G=153, B=0 => rgb(0, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336633'? (Set 106)",
    "options": [
      "rgb(102, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 51)",
      "rgb(51, 51, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #336633 <=> R=51, G=102, B=51 => rgb(51, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 19) (Set 93) (Set 107)",
    "options": [
      "rgb(0, 51, 255)",
      "rgb(51, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330000'? (Set 108)",
    "options": [
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(102, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #330000 <=> R=51, G=0, B=0 => rgb(51, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000066'? (Set 109)",
    "options": [
      "rgb(246, 255, 255)",
      "rgb(51, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000066 <=> R=0, G=0, B=102 => rgb(0, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFFCC'? (Set 78) (Set 110)",
    "options": [
      "rgb(255, 255, 204)",
      "rgb(0, 0, 0) by design",
      "rgb(146, 255, 255)",
      "rgb(255, 204, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FFFFCC <=> R=255, G=255, B=204 => rgb(255, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3399FF'? (Set 111)",
    "options": [
      "rgb(51, 102, 255)",
      "rgb(51, 153, 255)",
      "rgb(0, 0, 0)",
      "rgb(102, 153, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3399FF <=> R=51, G=153, B=255 => rgb(51, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 55) (Set 63) (Set 112)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output is all rows with age values strictly larger than 33",
      "Query output includes only rows having age exactly 33 inside the database"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC00'? (Set 57) (Set 100) (Set 113)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 153, 0)",
      "rgb(0, 204, 0)",
      "rgb(51, 204, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00CC00 <=> R=0, G=204, B=0 => rgb(0, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600CC'? (Set 29) (Set 114)",
    "options": [
      "rgb(183, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 204)",
      "rgb(102, 0, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6600CC <=> R=102, G=0, B=204 => rgb(102, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 18) (Set 115)",
    "options": [
      "rgb(102, 255, 255)",
      "rgb(51, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663333'? (Set 116)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 51, 51)",
      "rgb(102, 0, 51)",
      "rgb(102, 51, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #663333 <=> R=102, G=51, B=51 => rgb(102, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 32) (Set 117)",
    "options": [
      "rgb(51, 51, 0)",
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF00'? (Set 118)",
    "options": [
      "rgb(102, 255, 0)",
      "rgb(153, 255, 0)",
      "rgb(102, 204, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66FF00 <=> R=102, G=255, B=0 => rgb(102, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 18) (Set 115) (Set 119)",
    "options": [
      "rgb(51, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(102, 255, 255)",
      "rgb(51, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 47; filter for? (Set 120)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 47",
      "Query output is all rows with age values strictly larger than 47",
      "Query output includes only rows having age exactly 47 inside the database"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 47."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 121)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033CC'? (Set 122)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(0, 51, 204)",
      "rgb(0, 0, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0033CC <=> R=0, G=51, B=204 => rgb(0, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC00'? (Set 123)",
    "options": [
      "rgb(102, 204, 0)",
      "rgb(102, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 204, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66CC00 <=> R=102, G=204, B=0 => rgb(102, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'? (Set 2) (Set 40) (Set 124)",
    "options": [
      "rgb(51, 0, 255)",
      "rgb(102, 0, 255)",
      "rgb(57, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00CC'? (Set 125)",
    "options": [
      "rgb(151, 255, 255)",
      "rgb(255, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(197, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF00CC <=> R=255, G=0, B=204 => rgb(255, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 90) (Set 126)",
    "options": [
      "rgb(153, 204, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 255, 153)",
      "rgb(204, 255, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6666FF'? (Set 127)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(102, 51, 255)",
      "rgb(102, 102, 255)",
      "rgb(153, 102, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6666FF <=> R=102, G=102, B=255 => rgb(102, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3300'? (Set 128)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 51, 0)",
      "rgb(204, 51, 0)",
      "rgb(204, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC3300 <=> R=204, G=51, B=0 => rgb(204, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 129)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'? (Set 130)",
    "options": [
      "rgb(102, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(102, 255, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6633'? (Set 131)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 51, 51)",
      "rgb(255, 102, 51)",
      "rgb(204, 102, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6633 <=> R=204, G=102, B=51 => rgb(204, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9966'? (Set 132)",
    "options": [
      "rgb(204, 102, 102)",
      "rgb(255, 153, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 153, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC9966 <=> R=204, G=153, B=102 => rgb(204, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 27; filter for? (Set 133)",
    "options": [
      "Query output is all rows with age values strictly larger than 27",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 27",
      "Query output includes only rows having age exactly 27 inside the database"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 27."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFCC'? (Set 134)",
    "options": [
      "rgb(51, 255, 204)",
      "rgb(0, 255, 204)",
      "rgb(0, 0, 0)",
      "rgb(0, 204, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FFCC <=> R=0, G=255, B=204 => rgb(0, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61) (Set 95) (Set 135)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCCC'? (Set 136)",
    "options": [
      "rgb(51, 204, 204)",
      "rgb(51, 153, 204)",
      "rgb(0, 0, 0)",
      "rgb(102, 204, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CCCC <=> R=51, G=204, B=204 => rgb(51, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0099'? (Set 137)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(158, 255, 255)",
      "rgb(255, 0, 153)",
      "rgb(133, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF0099 <=> R=255, G=0, B=153 => rgb(255, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 80) (Set 138)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 153, 0)",
      "rgb(204, 153, 0)",
      "rgb(153, 102, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9999'? (Set 139)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 153, 153)",
      "rgb(204, 153, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC9999 <=> R=204, G=153, B=153 => rgb(204, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21) (Set 140)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 255, 102)",
      "rgb(0, 204, 102)",
      "rgb(51, 255, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0099'? (Set 137) (Set 141)",
    "options": [
      "rgb(158, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 0, 153)",
      "rgb(133, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF0099 <=> R=255, G=0, B=153 => rgb(255, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333CC'? (Set 142)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(51, 0, 204)",
      "rgb(102, 51, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3333CC <=> R=51, G=51, B=204 => rgb(51, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9933'? (Set 143)",
    "options": [
      "rgb(255, 153, 51)",
      "rgb(255, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(147, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF9933 <=> R=255, G=153, B=51 => rgb(255, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 121) (Set 144)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)",
      "rgb(204, 0, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6600'? (Set 145)",
    "options": [
      "rgb(255, 51, 0)",
      "rgb(255, 102, 0)",
      "rgb(116, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF6600 <=> R=255, G=102, B=0 => rgb(255, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669933'? (Set 146)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 102, 51)",
      "rgb(153, 153, 51)",
      "rgb(102, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #669933 <=> R=102, G=153, B=51 => rgb(102, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 147)",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) (commonly used)",
      "OK (Request succeeded) under normal conditions",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033CC'? (Set 122) (Set 148)",
    "options": [
      "rgb(51, 51, 204)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 204)",
      "rgb(0, 0, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0033CC <=> R=0, G=51, B=204 => rgb(0, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF66'? (Set 149)",
    "options": [
      "rgb(255, 255, 102)",
      "rgb(204, 255, 102)",
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCFF66 <=> R=204, G=255, B=102 => rgb(204, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 20) (Set 150)",
    "options": [
      "rgb(153, 255, 153)",
      "rgb(153, 204, 153)",
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 24; filter for? (Set 151)",
    "options": [
      "Query output includes only rows having age exactly 24 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 24",
      "Query output is all rows with age values strictly larger than 24"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 24."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333FF'? (Set 70) (Set 152)",
    "options": [
      "rgb(51, 51, 255)",
      "rgb(102, 51, 255)",
      "rgb(51, 0, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3333FF <=> R=51, G=51, B=255 => rgb(51, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 55) (Set 63) (Set 112) (Set 153)",
    "options": [
      "Query output is all rows with age values strictly larger than 33",
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 33 inside the database"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'? (Set 41) (Set 154)",
    "options": [
      "rgb(204, 153, 0)",
      "rgb(255, 153, 0)",
      "rgb(204, 102, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#666699'? (Set 155)",
    "options": [
      "rgb(153, 102, 153)",
      "rgb(102, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 51, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #666699 <=> R=102, G=102, B=153 => rgb(102, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 156)",
    "options": [
      "Content, Margin, Border, Padding",
      "Content, Padding, Border, Margin",
      "Margin, Border, Padding, Content",
      "Content, Border, Padding, Margin"
    ],
    "answer": 1,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6666FF'? (Set 127) (Set 157)",
    "options": [
      "rgb(102, 102, 255)",
      "rgb(102, 51, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 102, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6666FF <=> R=102, G=102, B=255 => rgb(102, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'? (Set 130) (Set 158)",
    "options": [
      "rgb(153, 255, 153)",
      "rgb(102, 204, 153)",
      "rgb(102, 255, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9999CC'? (Set 159)",
    "options": [
      "rgb(153, 102, 204)",
      "rgb(204, 153, 204)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 153, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9999CC <=> R=153, G=153, B=204 => rgb(153, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFCC'? (Set 160)",
    "options": [
      "rgb(102, 255, 204)",
      "rgb(102, 204, 204)",
      "rgb(153, 255, 204)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66FFCC <=> R=102, G=255, B=204 => rgb(102, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF33'? (Set 161)",
    "options": [
      "rgb(204, 204, 51)",
      "rgb(255, 255, 51)",
      "rgb(204, 255, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCFF33 <=> R=204, G=255, B=51 => rgb(204, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67) (Set 162)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF33'? (Set 163)",
    "options": [
      "rgb(102, 255, 51)",
      "rgb(51, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33FF33 <=> R=51, G=255, B=51 => rgb(51, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC00'? (Set 123) (Set 164)",
    "options": [
      "rgb(102, 153, 0)",
      "rgb(102, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 204, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66CC00 <=> R=102, G=204, B=0 => rgb(102, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 165)",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) in practice",
      "OK (Request succeeded) in typical implementations",
      "Not Found (Target URL resource does not exist)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 166)",
    "options": [
      "rgb(51, 51, 204)",
      "rgb(51, 102, 204)",
      "rgb(102, 102, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 20; filter for? (Set 167)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 20",
      "Query output returns count representing table column rows having age less than or equal to 20",
      "Query output includes only rows having age exactly 20 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 20."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'? (Set 96) (Set 168)",
    "options": [
      "rgb(51, 255, 255)",
      "rgb(0, 204, 255)",
      "rgb(0, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC99'? (Set 11) (Set 169)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 153, 153)",
      "rgb(255, 204, 153)",
      "rgb(189, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCC99 <=> R=255, G=204, B=153 => rgb(255, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 47; filter for? (Set 170)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 47",
      "Query output is all rows with age values strictly larger than 47",
      "Query output includes only rows having age exactly 47 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 47."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'? (Set 2) (Set 40) (Set 171)",
    "options": [
      "rgb(57, 255, 255)",
      "rgb(102, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330099'? (Set 172)",
    "options": [
      "rgb(51, 0, 153)",
      "rgb(102, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(150, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #330099 <=> R=51, G=0, B=153 => rgb(51, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333FF'? (Set 70) (Set 152) (Set 173)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 0, 255)",
      "rgb(102, 51, 255)",
      "rgb(51, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3333FF <=> R=51, G=51, B=255 => rgb(51, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 174)",
    "options": [
      "rgb(0, 255, 51)",
      "rgb(0, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'? (Set 175)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(153, 255, 153)",
      "rgb(102, 255, 153)",
      "rgb(102, 204, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 176)",
    "options": [
      "rgb(102, 0, 102)",
      "rgb(153, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(222, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 19; filter for? (Set 177)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 19",
      "Query output includes only rows having age exactly 19 inside the database",
      "Query output is all rows with age values strictly larger than 19",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 19."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF00'? (Set 178)",
    "options": [
      "rgb(51, 204, 0)",
      "rgb(102, 255, 0)",
      "rgb(51, 255, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33FF00 <=> R=51, G=255, B=0 => rgb(51, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 27; filter for? (Set 179)",
    "options": [
      "Query output is all rows with age values strictly larger than 27",
      "Query output returns count representing table column rows having age less than or equal to 27",
      "Query output includes only rows having age exactly 27 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 27."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'? (Set 180)",
    "options": [
      "rgb(255, 153, 0)",
      "rgb(204, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 102, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0033'? (Set 181)",
    "options": [
      "rgb(255, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(162, 255, 255)",
      "rgb(197, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF0033 <=> R=255, G=0, B=51 => rgb(255, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663333'? (Set 182)",
    "options": [
      "rgb(102, 0, 51)",
      "rgb(153, 51, 51)",
      "rgb(102, 51, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663333 <=> R=102, G=51, B=51 => rgb(102, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFFFF'? (Set 183)",
    "options": [
      "rgb(204, 204, 255)",
      "rgb(255, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCFFFF <=> R=204, G=255, B=255 => rgb(204, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FFCC'? (Set 7) (Set 184)",
    "options": [
      "rgb(204, 255, 204)",
      "rgb(153, 255, 204)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FFCC <=> R=153, G=255, B=204 => rgb(153, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 186)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3300'? (Set 188)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(184, 255, 255)",
      "rgb(255, 0, 0)",
      "rgb(255, 51, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF3300 <=> R=255, G=51, B=0 => rgb(255, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 19) (Set 189)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 0, 255)",
      "rgb(51, 51, 255)",
      "rgb(0, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9966'? (Set 190)",
    "options": [
      "rgb(255, 153, 102)",
      "rgb(204, 102, 102)",
      "rgb(204, 153, 102)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC9966 <=> R=204, G=153, B=102 => rgb(204, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0099'? (Set 48) (Set 56) (Set 191)",
    "options": [
      "rgb(204, 0, 153)",
      "rgb(255, 0, 153)",
      "rgb(209, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC0099 <=> R=204, G=0, B=153 => rgb(204, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC00'? (Set 123) (Set 192)",
    "options": [
      "rgb(153, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(102, 204, 0)",
      "rgb(102, 153, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66CC00 <=> R=102, G=204, B=0 => rgb(102, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 204 signal? (Set 46) (Set 193)",
    "options": [
      "Created (Resource successfully created) (default behavior)",
      "Bad Request (Server cannot interpret payload syntax) in practice",
      "OK (Request succeeded) in typical implementations",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 204 with 'No Content (Request succeeded but returns no content body)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 194)",
    "options": [
      "rgb(0, 153, 153)",
      "rgb(0, 102, 153)",
      "rgb(51, 153, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993300'? (Set 195)",
    "options": [
      "rgb(153, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 0)",
      "rgb(204, 51, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #993300 <=> R=153, G=51, B=0 => rgb(153, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033CC'? (Set 196)",
    "options": [
      "rgb(51, 51, 204)",
      "rgb(0, 51, 204)",
      "rgb(0, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0033CC <=> R=0, G=51, B=204 => rgb(0, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996666'? (Set 197)",
    "options": [
      "rgb(153, 102, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 102)",
      "rgb(153, 51, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #996666 <=> R=153, G=102, B=102 => rgb(153, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 32) (Set 117) (Set 198)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)",
      "rgb(0, 51, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 199)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC33'? (Set 200)",
    "options": [
      "rgb(255, 153, 51)",
      "rgb(110, 255, 255)",
      "rgb(255, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCC33 <=> R=255, G=204, B=51 => rgb(255, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6666FF'? (Set 127) (Set 157) (Set 201)",
    "options": [
      "rgb(102, 102, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 102, 255)",
      "rgb(102, 51, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6666FF <=> R=102, G=102, B=255 => rgb(102, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663300'? (Set 202)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 51, 0)",
      "rgb(102, 51, 0)",
      "rgb(102, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663300 <=> R=102, G=51, B=0 => rgb(102, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 36; filter for? (Set 58) (Set 203)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 36",
      "Query output includes only rows having age exactly 36 inside the database",
      "Query output is all rows with age values strictly larger than 36"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 36."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003399'? (Set 204)",
    "options": [
      "rgb(0, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 153)",
      "rgb(0, 51, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #003399 <=> R=0, G=51, B=153 => rgb(0, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 205)",
    "options": [
      "OK (Request succeeded) in typical implementations",
      "Created (Resource successfully created) in most cases",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 21; filter for? (Set 206)",
    "options": [
      "Query output includes only rows having age exactly 21 inside the database",
      "Query output is all rows with age values strictly larger than 21",
      "Query output returns count representing table column rows having age less than or equal to 21",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 21."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61) (Set 207)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67) (Set 162) (Set 208)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00CC'? (Set 125) (Set 209)",
    "options": [
      "rgb(197, 255, 255)",
      "rgb(151, 255, 255)",
      "rgb(255, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF00CC <=> R=255, G=0, B=204 => rgb(255, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'? (Set 17) (Set 72) (Set 210)",
    "options": [
      "rgb(63, 255, 255)",
      "rgb(153, 0, 0)",
      "rgb(204, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF33'? (Set 211)",
    "options": [
      "rgb(51, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(102, 255, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33FF33 <=> R=51, G=255, B=51 => rgb(51, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 212)",
    "options": [
      "rgb(51, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(67, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006666'? (Set 213)",
    "options": [
      "rgb(0, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)",
      "rgb(0, 102, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #006666 <=> R=0, G=102, B=102 => rgb(0, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993399'? (Set 15) (Set 214)",
    "options": [
      "rgb(153, 0, 153)",
      "rgb(153, 51, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #993399 <=> R=153, G=51, B=153 => rgb(153, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC33'? (Set 215)",
    "options": [
      "rgb(153, 153, 51)",
      "rgb(204, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 204, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99CC33 <=> R=153, G=204, B=51 => rgb(153, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 216)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 204, 51)",
      "rgb(51, 204, 51)",
      "rgb(51, 153, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67) (Set 74) (Set 88) (Set 217)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CCCC'? (Set 218)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(102, 153, 204)",
      "rgb(153, 204, 204)",
      "rgb(102, 204, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66CCCC <=> R=102, G=204, B=204 => rgb(102, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFFFF'? (Set 183) (Set 219)",
    "options": [
      "rgb(204, 204, 255)",
      "rgb(255, 255, 255)",
      "rgb(204, 255, 255)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCFFFF <=> R=204, G=255, B=255 => rgb(204, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'? (Set 41) (Set 220)",
    "options": [
      "rgb(204, 102, 0)",
      "rgb(204, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(255, 153, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "Which JS keyword is hoisting-bound but initialized as undefined? (Set 221)",
    "options": [
      "const",
      "let",
      "function",
      "var"
    ],
    "answer": 3,
    "explanation": "var variables are hoisted and default to undefined."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC99'? (Set 11) (Set 169) (Set 222)",
    "options": [
      "rgb(189, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 153, 153)",
      "rgb(255, 204, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFCC99 <=> R=255, G=204, B=153 => rgb(255, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00CC'? (Set 223)",
    "options": [
      "rgb(255, 0, 204)",
      "rgb(5, 255, 255)",
      "rgb(204, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC00CC <=> R=204, G=0, B=204 => rgb(204, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0066CC'? (Set 224)",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(0, 51, 204)",
      "rgb(0, 102, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0066CC <=> R=0, G=102, B=204 => rgb(0, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 200 signal? (Set 225)",
    "options": [
      "Created (Resource successfully created)",
      "OK (Request succeeded)",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 200 with 'OK (Request succeeded)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 194) (Set 226)",
    "options": [
      "rgb(0, 102, 153)",
      "rgb(0, 153, 153)",
      "rgb(51, 153, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 227)",
    "options": [
      "rgb(255, 51, 255)",
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185) (Set 228)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 18; filter for? (Set 62) (Set 229)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 18",
      "Query output returns count representing table column rows having age less than or equal to 18",
      "Query output includes only rows having age exactly 18 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 18."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'? (Set 130) (Set 230)",
    "options": [
      "rgb(153, 255, 153)",
      "rgb(102, 204, 153)",
      "rgb(102, 255, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6633'? (Set 131) (Set 231)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 102, 51)",
      "rgb(204, 51, 51)",
      "rgb(255, 102, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6633 <=> R=204, G=102, B=51 => rgb(204, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333333'? (Set 232)",
    "options": [
      "rgb(51, 0, 51)",
      "rgb(51, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #333333 <=> R=51, G=51, B=51 => rgb(51, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 174) (Set 233)",
    "options": [
      "rgb(0, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 24; filter for? (Set 234)",
    "options": [
      "Query output is all rows with age values strictly larger than 24",
      "Query output includes only rows having age exactly 24 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 24"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 24."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'? (Set 235)",
    "options": [
      "rgb(51, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 255)",
      "rgb(0, 204, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330033'? (Set 236)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 0, 51)",
      "rgb(126, 255, 255)",
      "rgb(51, 0, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #330033 <=> R=51, G=0, B=51 => rgb(51, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'? (Set 17) (Set 237)",
    "options": [
      "rgb(153, 0, 0)",
      "rgb(63, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00FF'? (Set 23) (Set 238)",
    "options": [
      "rgb(113, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 0, 255)",
      "rgb(204, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC00FF <=> R=204, G=0, B=255 => rgb(204, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 147) (Set 239)",
    "options": [
      "OK (Request succeeded) under normal conditions",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)",
      "Created (Resource successfully created) (primary approach)"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 240)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663366'? (Set 241)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 51, 102)",
      "rgb(102, 51, 102)",
      "rgb(102, 0, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663366 <=> R=102, G=51, B=102 => rgb(102, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 18; filter for? (Set 242)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 18",
      "Query output includes only rows having age exactly 18 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 18"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 18."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFFCC'? (Set 78) (Set 243)",
    "options": [
      "rgb(255, 255, 204)",
      "rgb(255, 204, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(146, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FFFFCC <=> R=255, G=255, B=204 => rgb(255, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6699'? (Set 244)",
    "options": [
      "rgb(255, 51, 153)",
      "rgb(133, 255, 255)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF6699 <=> R=255, G=102, B=153 => rgb(255, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 45; filter for? (Set 245)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 45",
      "Query output includes only rows having age exactly 45 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 45"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 45."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF33'? (Set 94) (Set 246)",
    "options": [
      "rgb(255, 255, 51)",
      "rgb(255, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(85, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FFFF33 <=> R=255, G=255, B=51 => rgb(255, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCFF'? (Set 247)",
    "options": [
      "rgb(204, 204, 255)",
      "rgb(204, 153, 255)",
      "rgb(255, 204, 255)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CCCCFF <=> R=204, G=204, B=255 => rgb(204, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600FF'? (Set 248)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(162, 255, 255)",
      "rgb(153, 0, 255)",
      "rgb(102, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #6600FF <=> R=102, G=0, B=255 => rgb(102, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660033'? (Set 249)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 0, 51)",
      "rgb(184, 255, 255)",
      "rgb(102, 0, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #660033 <=> R=102, G=0, B=51 => rgb(102, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0000'? (Set 22) (Set 250)",
    "options": [
      "rgb(15, 255, 255)",
      "rgb(204, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(255, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC0000 <=> R=204, G=0, B=0 => rgb(204, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 251)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 252)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(153, 153, 102)",
      "rgb(204, 204, 102)",
      "rgb(153, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC66'? (Set 253)",
    "options": [
      "rgb(102, 204, 102)",
      "rgb(51, 153, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33CC66 <=> R=51, G=204, B=102 => rgb(51, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9933'? (Set 143) (Set 254)",
    "options": [
      "rgb(147, 255, 255)",
      "rgb(255, 102, 51)",
      "rgb(255, 153, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF9933 <=> R=255, G=153, B=51 => rgb(255, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67) (Set 162) (Set 255)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 45; filter for? (Set 99) (Set 256)",
    "options": [
      "Query output is all rows with age values strictly larger than 45",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 45 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 45"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 45."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 257)",
    "options": [
      "Plain Text in practice",
      "BSON (Binary JSON)",
      "XML in practice",
      "CSV (general case)"
    ],
    "answer": 1,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9999'? (Set 139) (Set 258)",
    "options": [
      "rgb(204, 153, 153)",
      "rgb(255, 153, 153)",
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC9999 <=> R=204, G=153, B=153 => rgb(204, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "What is Event Bubbling in Javascript? (Set 259)",
    "options": [
      "Events execute concurrently on all elements as per specification",
      "Events stay on target element only in typical implementations",
      "Events propagate downwards from window in typical implementations",
      "Events propagate upwards from the target element through its ancestors"
    ],
    "answer": 3,
    "explanation": "Bubbles up from target to outer elements."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330066'? (Set 260)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(217, 255, 255)",
      "rgb(102, 0, 102)",
      "rgb(51, 0, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #330066 <=> R=51, G=0, B=102 => rgb(51, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 156) (Set 261)",
    "options": [
      "Margin, Border, Padding, Content",
      "Content, Margin, Border, Padding",
      "Content, Padding, Border, Margin",
      "Content, Border, Padding, Margin"
    ],
    "answer": 2,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9999'? (Set 262)",
    "options": [
      "rgb(151, 255, 255)",
      "rgb(255, 153, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF9999 <=> R=255, G=153, B=153 => rgb(255, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC66FF'? (Set 263)",
    "options": [
      "rgb(204, 102, 255)",
      "rgb(255, 102, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC66FF <=> R=204, G=102, B=255 => rgb(204, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 153)",
      "rgb(153, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 77) (Set 265)",
    "options": [
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin",
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding"
    ],
    "answer": 1,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0066'? (Set 266)",
    "options": [
      "rgb(255, 0, 102)",
      "rgb(204, 0, 102)",
      "rgb(112, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC0066 <=> R=204, G=0, B=102 => rgb(204, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does CORS stand for? (Set 267)",
    "options": [
      "Cross-Origin Request Security",
      "Common Object Request Schema",
      "Cross-Origin Resource Sharing",
      "Central Object Routing System"
    ],
    "answer": 2,
    "explanation": "CORS allows servers to specify who is allowed to fetch endpoints."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'? (Set 268)",
    "options": [
      "rgb(57, 255, 255)",
      "rgb(102, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does CORS stand for? (Set 267) (Set 269)",
    "options": [
      "Cross-Origin Request Security",
      "Common Object Request Schema",
      "Cross-Origin Resource Sharing",
      "Central Object Routing System"
    ],
    "answer": 2,
    "explanation": "CORS allows servers to specify who is allowed to fetch endpoints."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 39; filter for? (Set 270)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 39",
      "Query output includes only rows having age exactly 39 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 39"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 39."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 18; filter for? (Set 62) (Set 229) (Set 271)",
    "options": [
      "Query output includes only rows having age exactly 18 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 18",
      "Query output is all rows with age values strictly larger than 18",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 18."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 66) (Set 272)",
    "options": [
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 153, 102)",
      "rgb(153, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'? (Set 14) (Set 273)",
    "options": [
      "rgb(0, 102, 204)",
      "rgb(51, 153, 204)",
      "rgb(0, 0, 0)",
      "rgb(0, 153, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'? (Set 274)",
    "options": [
      "rgb(204, 153, 0)",
      "rgb(255, 153, 0)",
      "rgb(204, 102, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 104) (Set 275)",
    "options": [
      "rgb(51, 0, 0)",
      "rgb(67, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003333'? (Set 276)",
    "options": [
      "rgb(0, 51, 51)",
      "rgb(0, 0, 51)",
      "rgb(51, 51, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #003333 <=> R=0, G=51, B=51 => rgb(0, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6666'? (Set 277)",
    "options": [
      "rgb(255, 51, 102)",
      "rgb(255, 102, 102)",
      "rgb(195, 255, 255)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF6666 <=> R=255, G=102, B=102 => rgb(255, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFCC'? (Set 278)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(102, 255, 204)",
      "rgb(153, 255, 204)",
      "rgb(102, 204, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66FFCC <=> R=102, G=255, B=204 => rgb(102, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3399'? (Set 279)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 51, 153)",
      "rgb(255, 0, 153)",
      "rgb(211, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF3399 <=> R=255, G=51, B=153 => rgb(255, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC00'? (Set 280)",
    "options": [
      "rgb(51, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 0)",
      "rgb(102, 204, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CC00 <=> R=51, G=204, B=0 => rgb(51, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333300'? (Set 281)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 51, 0)",
      "rgb(51, 0, 0)",
      "rgb(51, 51, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #333300 <=> R=51, G=51, B=0 => rgb(51, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6699'? (Set 282)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(133, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF6699 <=> R=255, G=102, B=153 => rgb(255, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336699'? (Set 38) (Set 283)",
    "options": [
      "rgb(51, 102, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 153)",
      "rgb(102, 102, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #336699 <=> R=51, G=102, B=153 => rgb(51, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFCC'? (Set 284)",
    "options": [
      "rgb(102, 255, 204)",
      "rgb(51, 204, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FFCC <=> R=51, G=255, B=204 => rgb(51, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9966'? (Set 285)",
    "options": [
      "rgb(204, 102, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 153, 102)",
      "rgb(204, 153, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC9966 <=> R=204, G=153, B=102 => rgb(204, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0099'? (Set 137) (Set 286)",
    "options": [
      "rgb(133, 255, 255)",
      "rgb(158, 255, 255)",
      "rgb(255, 0, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF0099 <=> R=255, G=0, B=153 => rgb(255, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 287)",
    "options": [
      "OK (Request succeeded) under normal conditions",
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) in practice",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0066'? (Set 288)",
    "options": [
      "rgb(112, 255, 255)",
      "rgb(255, 0, 102)",
      "rgb(204, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC0066 <=> R=204, G=0, B=102 => rgb(204, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 289)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 28; filter for? (Set 290)",
    "options": [
      "Query output is all rows with age values strictly larger than 28",
      "Query output includes only rows having age exactly 28 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 28"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 28."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006600'? (Set 291)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 102, 0)",
      "rgb(51, 102, 0)",
      "rgb(0, 51, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #006600 <=> R=0, G=102, B=0 => rgb(0, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 292)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0000FF'? (Set 293)",
    "options": [
      "rgb(51, 0, 255)",
      "rgb(0, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(150, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0000FF <=> R=0, G=0, B=255 => rgb(0, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 165) (Set 294)",
    "options": [
      "Created (Resource successfully created) by design",
      "Not Found (Target URL resource does not exist)",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) (default behavior)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 80) (Set 295)",
    "options": [
      "rgb(153, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 153, 0)",
      "rgb(153, 102, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 21; filter for? (Set 296)",
    "options": [
      "Query output includes only rows having age exactly 21 inside the database",
      "Query output is all rows with age values strictly larger than 21",
      "Query output returns count representing table column rows having age less than or equal to 21",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 21."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6633'? (Set 131) (Set 297)",
    "options": [
      "rgb(255, 102, 51)",
      "rgb(204, 102, 51)",
      "rgb(204, 51, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6633 <=> R=204, G=102, B=51 => rgb(204, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 166) (Set 298)",
    "options": [
      "rgb(102, 102, 204)",
      "rgb(51, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 212) (Set 299)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600FF'? (Set 248) (Set 300)",
    "options": [
      "rgb(153, 0, 255)",
      "rgb(102, 0, 255)",
      "rgb(162, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #6600FF <=> R=102, G=0, B=255 => rgb(102, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 301)",
    "options": [
      "rgb(51, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 51)",
      "rgb(102, 204, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336699'? (Set 38) (Set 283) (Set 302)",
    "options": [
      "rgb(51, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 153)",
      "rgb(102, 102, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #336699 <=> R=51, G=102, B=153 => rgb(51, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 91) (Set 303)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3366'? (Set 64) (Set 304)",
    "options": [
      "rgb(255, 0, 102)",
      "rgb(251, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 51, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF3366 <=> R=255, G=51, B=102 => rgb(255, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 216) (Set 305)",
    "options": [
      "rgb(102, 204, 51)",
      "rgb(51, 153, 51)",
      "rgb(51, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 306)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(255, 153, 204)",
      "rgb(255, 204, 204)",
      "rgb(53, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 156) (Set 261) (Set 307)",
    "options": [
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding",
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin"
    ],
    "answer": 3,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 18) (Set 115) (Set 119) (Set 308)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 204, 255)",
      "rgb(51, 255, 255)",
      "rgb(102, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00FF'? (Set 309)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 0, 255)",
      "rgb(113, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC00FF <=> R=204, G=0, B=255 => rgb(204, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 301) (Set 310)",
    "options": [
      "rgb(51, 153, 51)",
      "rgb(51, 204, 51)",
      "rgb(102, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185) (Set 311)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009900'? (Set 54) (Set 105) (Set 312)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 153, 0)",
      "rgb(0, 153, 0)",
      "rgb(0, 102, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #009900 <=> R=0, G=153, B=0 => rgb(0, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6600'? (Set 313)",
    "options": [
      "rgb(204, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 102, 0)",
      "rgb(255, 102, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6600 <=> R=204, G=102, B=0 => rgb(204, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264) (Set 314)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 153)",
      "rgb(153, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3333'? (Set 315)",
    "options": [
      "rgb(255, 51, 51)",
      "rgb(255, 0, 51)",
      "rgb(12, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF3333 <=> R=255, G=51, B=51 => rgb(255, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF00'? (Set 316)",
    "options": [
      "rgb(0, 204, 0)",
      "rgb(0, 255, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FF00 <=> R=0, G=255, B=0 => rgb(0, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 301) (Set 317)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 204, 51)",
      "rgb(51, 153, 51)",
      "rgb(102, 204, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9966'? (Set 318)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 153, 102)",
      "rgb(204, 102, 102)",
      "rgb(255, 153, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC9966 <=> R=204, G=153, B=102 => rgb(204, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 319)",
    "options": [
      "rgb(0, 255, 102)",
      "rgb(51, 255, 102)",
      "rgb(0, 204, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 21; filter for? (Set 206) (Set 320)",
    "options": [
      "Query output includes only rows having age exactly 21 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 21",
      "Query output is all rows with age values strictly larger than 21"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 21."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 212) (Set 299) (Set 321)",
    "options": [
      "rgb(204, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(67, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333300'? (Set 322)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)",
      "rgb(51, 0, 0)",
      "rgb(102, 51, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #333300 <=> R=51, G=51, B=0 => rgb(51, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC66'? (Set 323)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 204, 102)",
      "rgb(0, 153, 102)",
      "rgb(0, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00CC66 <=> R=0, G=204, B=102 => rgb(0, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'? (Set 17) (Set 237) (Set 324)",
    "options": [
      "rgb(204, 0, 0)",
      "rgb(153, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(63, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCFF'? (Set 81) (Set 325)",
    "options": [
      "rgb(102, 204, 255)",
      "rgb(51, 153, 255)",
      "rgb(51, 204, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CCFF <=> R=51, G=204, B=255 => rgb(51, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 326)",
    "options": [
      "rgb(51, 153, 153)",
      "rgb(0, 102, 153)",
      "rgb(0, 153, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCFF'? (Set 9) (Set 327)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 204, 255)",
      "rgb(204, 153, 255)",
      "rgb(204, 204, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCCCFF <=> R=204, G=204, B=255 => rgb(204, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 287) (Set 328)",
    "options": [
      "Created (Resource successfully created) in practice",
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded) under normal conditions",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3300'? (Set 128) (Set 329)",
    "options": [
      "rgb(204, 51, 0)",
      "rgb(255, 51, 0)",
      "rgb(204, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC3300 <=> R=204, G=51, B=0 => rgb(204, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669966'? (Set 330)",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(102, 153, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 102, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #669966 <=> R=102, G=153, B=102 => rgb(102, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 31) (Set 331)",
    "options": [
      "rgb(255, 204, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(53, 255, 255)",
      "rgb(255, 153, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF00'? (Set 332)",
    "options": [
      "rgb(204, 255, 0)",
      "rgb(153, 204, 0)",
      "rgb(153, 255, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99FF00 <=> R=153, G=255, B=0 => rgb(153, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6666'? (Set 333)",
    "options": [
      "rgb(255, 102, 102)",
      "rgb(204, 51, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6666 <=> R=204, G=102, B=102 => rgb(204, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 326) (Set 334)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 153, 153)",
      "rgb(0, 153, 153)",
      "rgb(0, 102, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009933'? (Set 92) (Set 335)",
    "options": [
      "rgb(0, 102, 51)",
      "rgb(0, 153, 51)",
      "rgb(51, 153, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #009933 <=> R=0, G=153, B=51 => rgb(0, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 166) (Set 336)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 102, 204)",
      "rgb(102, 102, 204)",
      "rgb(51, 51, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009933'? (Set 92) (Set 335) (Set 337)",
    "options": [
      "rgb(51, 153, 51)",
      "rgb(0, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #009933 <=> R=0, G=153, B=51 => rgb(0, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333333'? (Set 103) (Set 338)",
    "options": [
      "rgb(51, 0, 51)",
      "rgb(102, 51, 51)",
      "rgb(51, 51, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #333333 <=> R=51, G=51, B=51 => rgb(51, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC66'? (Set 339)",
    "options": [
      "rgb(255, 204, 102)",
      "rgb(204, 153, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCCC66 <=> R=204, G=204, B=102 => rgb(204, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900FF'? (Set 87) (Set 340)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(153, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(28, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #9900FF <=> R=153, G=0, B=255 => rgb(153, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "Which JS keyword is hoisting-bound but initialized as undefined? (Set 221) (Set 341)",
    "options": [
      "var",
      "const",
      "function",
      "let"
    ],
    "answer": 0,
    "explanation": "var variables are hoisted and default to undefined."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCFF'? (Set 247) (Set 342)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 153, 255)",
      "rgb(204, 204, 255)",
      "rgb(255, 204, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCCCFF <=> R=204, G=204, B=255 => rgb(204, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FFFF'? (Set 343)",
    "options": [
      "rgb(153, 255, 255)",
      "rgb(204, 255, 255)",
      "rgb(153, 204, 255)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99FFFF <=> R=153, G=255, B=255 => rgb(153, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3366'? (Set 64) (Set 304) (Set 344)",
    "options": [
      "rgb(255, 51, 102)",
      "rgb(251, 255, 255)",
      "rgb(255, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF3366 <=> R=255, G=51, B=102 => rgb(255, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 33) (Set 51) (Set 345)",
    "options": [
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'? (Set 96) (Set 346)",
    "options": [
      "rgb(0, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 255)",
      "rgb(0, 204, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 165) (Set 347)",
    "options": [
      "Not Found (Target URL resource does not exist)",
      "OK (Request succeeded) in standard usage",
      "Created (Resource successfully created) in practice",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669966'? (Set 330) (Set 348)",
    "options": [
      "rgb(102, 102, 102)",
      "rgb(153, 153, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(102, 153, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #669966 <=> R=102, G=153, B=102 => rgb(102, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185) (Set 349)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 350)",
    "options": [
      "CSV based on convention",
      "Plain Text in practice",
      "BSON (Binary JSON)",
      "XML in standard usage"
    ],
    "answer": 2,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21) (Set 351)",
    "options": [
      "rgb(0, 204, 102)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 102)",
      "rgb(51, 255, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339933'? (Set 352)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 102, 51)",
      "rgb(102, 153, 51)",
      "rgb(51, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #339933 <=> R=51, G=153, B=51 => rgb(51, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF00'? (Set 178) (Set 353)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 255, 0)",
      "rgb(51, 255, 0)",
      "rgb(51, 204, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33FF00 <=> R=51, G=255, B=0 => rgb(51, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 66) (Set 354)",
    "options": [
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 102)",
      "rgb(153, 153, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 350) (Set 355)",
    "options": [
      "Plain Text in most cases",
      "CSV (general case)",
      "XML in practice",
      "BSON (Binary JSON)"
    ],
    "answer": 3,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61) (Set 356)",
    "options": [
      "rgb(255, 51, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669966'? (Set 330) (Set 348) (Set 357)",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(102, 102, 102)",
      "rgb(102, 153, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #669966 <=> R=102, G=153, B=102 => rgb(102, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF99'? (Set 358)",
    "options": [
      "rgb(204, 204, 153)",
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 255, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCFF99 <=> R=204, G=255, B=153 => rgb(204, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663333'? (Set 359)",
    "options": [
      "rgb(153, 51, 51)",
      "rgb(102, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #663333 <=> R=102, G=51, B=51 => rgb(102, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 44) (Set 360)",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Not Found (Target URL resource does not exist)",
      "OK (Request succeeded) in standard usage",
      "Created (Resource successfully created) in practice"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 36) (Set 361)",
    "options": [
      "rgb(102, 0, 102)",
      "rgb(153, 0, 102)",
      "rgb(222, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663399'? (Set 1) (Set 362)",
    "options": [
      "rgb(102, 0, 153)",
      "rgb(153, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #663399 <=> R=102, G=51, B=153 => rgb(102, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 257) (Set 363)",
    "options": [
      "BSON (Binary JSON)",
      "XML in most cases",
      "CSV in standard usage",
      "Plain Text in practice"
    ],
    "answer": 0,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00FF'? (Set 23) (Set 238) (Set 364)",
    "options": [
      "rgb(255, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 255)",
      "rgb(113, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC00FF <=> R=204, G=0, B=255 => rgb(204, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999933'? (Set 365)",
    "options": [
      "rgb(204, 153, 51)",
      "rgb(153, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 102, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #999933 <=> R=153, G=153, B=51 => rgb(153, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'? (Set 130) (Set 366)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(102, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(102, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339966'? (Set 367)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 153, 102)",
      "rgb(102, 153, 102)",
      "rgb(51, 102, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #339966 <=> R=51, G=153, B=102 => rgb(51, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'? (Set 368)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 102, 204)",
      "rgb(0, 153, 204)",
      "rgb(51, 153, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF33'? (Set 369)",
    "options": [
      "rgb(51, 255, 51)",
      "rgb(51, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 255, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33FF33 <=> R=51, G=255, B=51 => rgb(51, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC99'? (Set 370)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(255, 204, 153)",
      "rgb(204, 153, 153)",
      "rgb(204, 204, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCCC99 <=> R=204, G=204, B=153 => rgb(204, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264) (Set 371)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(204, 255, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 29; filter for? (Set 372)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 29",
      "Query output includes only rows having age exactly 29 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 29"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 29."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 66) (Set 354) (Set 373)",
    "options": [
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 102)",
      "rgb(153, 153, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 66) (Set 374)",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(153, 204, 102)",
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'? (Set 96) (Set 375)",
    "options": [
      "rgb(0, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 255)",
      "rgb(51, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0033'? (Set 181) (Set 376)",
    "options": [
      "rgb(197, 255, 255)",
      "rgb(162, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 0, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF0033 <=> R=255, G=0, B=51 => rgb(255, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339900'? (Set 377)",
    "options": [
      "rgb(102, 153, 0)",
      "rgb(51, 102, 0)",
      "rgb(51, 153, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #339900 <=> R=51, G=153, B=0 => rgb(51, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 13) (Set 45) (Set 378)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(51, 102, 204)",
      "rgb(102, 102, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CCFF'? (Set 379)",
    "options": [
      "rgb(102, 204, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 255)",
      "rgb(102, 153, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66CCFF <=> R=102, G=204, B=255 => rgb(102, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61) (Set 95) (Set 135) (Set 380)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336699'? (Set 38) (Set 283) (Set 302) (Set 381)",
    "options": [
      "rgb(51, 102, 153)",
      "rgb(102, 102, 153)",
      "rgb(51, 51, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #336699 <=> R=51, G=102, B=153 => rgb(51, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC99'? (Set 382)",
    "options": [
      "rgb(51, 153, 153)",
      "rgb(51, 204, 153)",
      "rgb(102, 204, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33CC99 <=> R=51, G=204, B=153 => rgb(51, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 257) (Set 383)",
    "options": [
      "CSV in practice",
      "Plain Text by design",
      "BSON (Binary JSON)",
      "XML as per specification"
    ],
    "answer": 2,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3399'? (Set 279) (Set 384)",
    "options": [
      "rgb(211, 255, 255)",
      "rgb(255, 0, 153)",
      "rgb(255, 51, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF3399 <=> R=255, G=51, B=153 => rgb(255, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC66'? (Set 385)",
    "options": [
      "rgb(102, 204, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 153, 102)",
      "rgb(153, 204, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66CC66 <=> R=102, G=204, B=102 => rgb(102, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC33'? (Set 386)",
    "options": [
      "rgb(255, 204, 51)",
      "rgb(204, 153, 51)",
      "rgb(204, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCCC33 <=> R=204, G=204, B=51 => rgb(204, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21) (Set 387)",
    "options": [
      "rgb(0, 204, 102)",
      "rgb(0, 255, 102)",
      "rgb(51, 255, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 388)",
    "options": [
      "Created (Resource successfully created) in practice",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded) under normal conditions"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 156) (Set 389)",
    "options": [
      "Content, Margin, Border, Padding",
      "Content, Padding, Border, Margin",
      "Margin, Border, Padding, Content",
      "Content, Border, Padding, Margin"
    ],
    "answer": 1,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 156) (Set 261) (Set 307) (Set 390)",
    "options": [
      "Content, Padding, Border, Margin",
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding",
      "Margin, Border, Padding, Content"
    ],
    "answer": 0,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264) (Set 371) (Set 391)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(153, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900CC'? (Set 392)",
    "options": [
      "rgb(7, 255, 255)",
      "rgb(204, 0, 204)",
      "rgb(153, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #9900CC <=> R=153, G=0, B=204 => rgb(153, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 393)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 27; filter for? (Set 179) (Set 394)",
    "options": [
      "Query output includes only rows having age exactly 27 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 27",
      "Query output is all rows with age values strictly larger than 27"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 27."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185) (Set 349) (Set 395)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 29; filter for? (Set 372) (Set 396)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 29",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 29",
      "Query output includes only rows having age exactly 29 inside the database"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 29."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999999'? (Set 397)",
    "options": [
      "rgb(153, 102, 153)",
      "rgb(204, 153, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 153, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #999999 <=> R=153, G=153, B=153 => rgb(153, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCCC'? (Set 398)",
    "options": [
      "rgb(51, 204, 204)",
      "rgb(102, 204, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CCCC <=> R=51, G=204, B=204 => rgb(51, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC66'? (Set 399)",
    "options": [
      "rgb(102, 204, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 102)",
      "rgb(51, 153, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CC66 <=> R=51, G=204, B=102 => rgb(51, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339933'? (Set 352) (Set 400)",
    "options": [
      "rgb(102, 153, 51)",
      "rgb(51, 102, 51)",
      "rgb(51, 153, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #339933 <=> R=51, G=153, B=51 => rgb(51, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 91) (Set 401)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 402)",
    "options": [
      "Query output is all rows with age values strictly larger than 33",
      "Query output includes only rows having age exactly 33 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 33"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9933'? (Set 143) (Set 403)",
    "options": [
      "rgb(255, 153, 51)",
      "rgb(255, 102, 51)",
      "rgb(147, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF9933 <=> R=255, G=153, B=51 => rgb(255, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 33) (Set 51) (Set 404)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)",
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 156) (Set 261) (Set 405)",
    "options": [
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding",
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin"
    ],
    "answer": 3,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFFCC'? (Set 78) (Set 406)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(146, 255, 255)",
      "rgb(255, 204, 204)",
      "rgb(255, 255, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFFFCC <=> R=255, G=255, B=204 => rgb(255, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 20) (Set 76) (Set 407)",
    "options": [
      "rgb(153, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 255, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'? (Set 268) (Set 408)",
    "options": [
      "rgb(57, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 255)",
      "rgb(102, 0, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 104) (Set 275) (Set 409)",
    "options": [
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21) (Set 351) (Set 410)",
    "options": [
      "rgb(0, 204, 102)",
      "rgb(51, 255, 102)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 32) (Set 411)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 51, 0)",
      "rgb(51, 51, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does MVC stand for in architectural design patterns? (Set 412)",
    "options": [
      "Model-View-Controller",
      "Model-Validation-Controller",
      "Map-Value-Collection",
      "Module-View-Code"
    ],
    "answer": 0,
    "explanation": "Separates database representations, templates/UI, and routers."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF6633'? (Set 413)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(23, 255, 255)",
      "rgb(255, 51, 51)",
      "rgb(255, 102, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF6633 <=> R=255, G=102, B=51 => rgb(255, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 55) (Set 63) (Set 414)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 33 inside the database",
      "Query output is all rows with age values strictly larger than 33",
      "Query output returns count representing table column rows having age less than or equal to 33"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00FF'? (Set 84) (Set 415)",
    "options": [
      "rgb(233, 255, 255)",
      "rgb(255, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(107, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF00FF <=> R=255, G=0, B=255 => rgb(255, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 166) (Set 298) (Set 416)",
    "options": [
      "rgb(102, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(51, 102, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CCCC'? (Set 417)",
    "options": [
      "rgb(0, 153, 204)",
      "rgb(51, 204, 204)",
      "rgb(0, 204, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00CCCC <=> R=0, G=204, B=204 => rgb(0, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993366'? (Set 418)",
    "options": [
      "rgb(153, 0, 102)",
      "rgb(153, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #993366 <=> R=153, G=51, B=102 => rgb(153, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 90) (Set 126) (Set 419)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(153, 255, 153)",
      "rgb(153, 204, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900CC'? (Set 392) (Set 420)",
    "options": [
      "rgb(153, 0, 204)",
      "rgb(0, 0, 0)",
      "rgb(7, 255, 255)",
      "rgb(204, 0, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9900CC <=> R=153, G=0, B=204 => rgb(153, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCCC'? (Set 136) (Set 421)",
    "options": [
      "rgb(51, 204, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 204)",
      "rgb(102, 204, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CCCC <=> R=51, G=204, B=204 => rgb(51, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3300FF'? (Set 2) (Set 40) (Set 171) (Set 422)",
    "options": [
      "rgb(57, 255, 255)",
      "rgb(102, 0, 255)",
      "rgb(51, 0, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #3300FF <=> R=51, G=0, B=255 => rgb(51, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 423)",
    "options": [
      "rgb(102, 255, 255)",
      "rgb(51, 204, 255)",
      "rgb(51, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 104) (Set 275) (Set 424)",
    "options": [
      "rgb(204, 255, 255)",
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330066'? (Set 260) (Set 425)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 0, 102)",
      "rgb(217, 255, 255)",
      "rgb(102, 0, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #330066 <=> R=51, G=0, B=102 => rgb(51, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'? (Set 180) (Set 426)",
    "options": [
      "rgb(204, 102, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 153, 0)",
      "rgb(255, 153, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 251) (Set 427)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0066'? (Set 428)",
    "options": [
      "rgb(204, 0, 102)",
      "rgb(255, 0, 102)",
      "rgb(112, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC0066 <=> R=204, G=0, B=102 => rgb(204, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9933FF'? (Set 429)",
    "options": [
      "rgb(153, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(153, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9933FF <=> R=153, G=51, B=255 => rgb(153, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336666'? (Set 430)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)",
      "rgb(102, 102, 102)",
      "rgb(51, 51, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #336666 <=> R=51, G=102, B=102 => rgb(51, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9966'? (Set 431)",
    "options": [
      "rgb(204, 102, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 153, 102)",
      "rgb(204, 153, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC9966 <=> R=204, G=153, B=102 => rgb(204, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 41; filter for? (Set 432)",
    "options": [
      "Query output is all rows with age values strictly larger than 41",
      "Query output returns count representing table column rows having age less than or equal to 41",
      "Query output includes only rows having age exactly 41 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 41."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFCC'? (Set 433)",
    "options": [
      "rgb(51, 255, 204)",
      "rgb(102, 255, 204)",
      "rgb(51, 204, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33FFCC <=> R=51, G=255, B=204 => rgb(51, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS selector aligns elements by their id attribute? (Set 60) (Set 434)",
    "options": [
      "#id",
      "id",
      ".id",
      "*id"
    ],
    "answer": 0,
    "explanation": "# prefix is for ID selectors; . prefix is for class selectors."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 26; filter for? (Set 435)",
    "options": [
      "Query output includes only rows having age exactly 26 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 26",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 26"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 26."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663366'? (Set 241) (Set 436)",
    "options": [
      "rgb(153, 51, 102)",
      "rgb(102, 51, 102)",
      "rgb(102, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #663366 <=> R=102, G=51, B=102 => rgb(102, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which tool hashes passwords securely in Node/Express applications? (Set 437)",
    "options": [
      "crypto-js",
      "bcrypt",
      "base64",
      "JWT"
    ],
    "answer": 1,
    "explanation": "bcrypt implements salt-round hashing."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 98) (Set 438)",
    "options": [
      "rgb(0, 51, 255)",
      "rgb(0, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099FF'? (Set 439)",
    "options": [
      "rgb(0, 102, 255)",
      "rgb(51, 153, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 153, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0099FF <=> R=0, G=153, B=255 => rgb(0, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993366'? (Set 418) (Set 440)",
    "options": [
      "rgb(153, 51, 102)",
      "rgb(153, 0, 102)",
      "rgb(204, 51, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #993366 <=> R=153, G=51, B=102 => rgb(153, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC66FF'? (Set 263) (Set 441)",
    "options": [
      "rgb(204, 102, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 255)",
      "rgb(204, 51, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC66FF <=> R=204, G=102, B=255 => rgb(204, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333300'? (Set 281) (Set 442)",
    "options": [
      "rgb(51, 51, 0)",
      "rgb(51, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #333300 <=> R=51, G=51, B=0 => rgb(51, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 350) (Set 355) (Set 443)",
    "options": [
      "Plain Text by design",
      "CSV (default behavior)",
      "BSON (Binary JSON)",
      "XML by design"
    ],
    "answer": 2,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 13) (Set 45) (Set 444)",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(102, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333300'? (Set 281) (Set 442) (Set 445)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 51, 0)",
      "rgb(51, 51, 0)",
      "rgb(51, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #333300 <=> R=51, G=51, B=0 => rgb(51, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3300'? (Set 188) (Set 446)",
    "options": [
      "rgb(255, 51, 0)",
      "rgb(255, 0, 0)",
      "rgb(184, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF3300 <=> R=255, G=51, B=0 => rgb(255, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990033'? (Set 447)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 0, 51)",
      "rgb(3, 255, 255)",
      "rgb(204, 0, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #990033 <=> R=153, G=0, B=51 => rgb(153, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'? (Set 14) (Set 448)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 153, 204)",
      "rgb(51, 153, 204)",
      "rgb(0, 102, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC99'? (Set 449)",
    "options": [
      "rgb(0, 204, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 153)",
      "rgb(0, 153, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00CC99 <=> R=0, G=204, B=153 => rgb(0, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'? (Set 17) (Set 237) (Set 324) (Set 450)",
    "options": [
      "rgb(204, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(63, 255, 255)",
      "rgb(153, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 165) (Set 347) (Set 451)",
    "options": [
      "Created (Resource successfully created) by design",
      "No Content (Request succeeded but returns no content body)",
      "Not Found (Target URL resource does not exist)",
      "OK (Request succeeded) (typical scenario)"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC00'? (Set 452)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 204, 0)",
      "rgb(58, 255, 255)",
      "rgb(255, 153, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFCC00 <=> R=255, G=204, B=0 => rgb(255, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'? (Set 130) (Set 230) (Set 453)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(102, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(102, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCFF'? (Set 9) (Set 454)",
    "options": [
      "rgb(204, 204, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 204, 255)",
      "rgb(204, 153, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CCCCFF <=> R=204, G=204, B=255 => rgb(204, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669900'? (Set 455)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 153, 0)",
      "rgb(153, 153, 0)",
      "rgb(102, 102, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #669900 <=> R=102, G=153, B=0 => rgb(102, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033CC'? (Set 122) (Set 148) (Set 456)",
    "options": [
      "rgb(0, 51, 204)",
      "rgb(51, 51, 204)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0033CC <=> R=0, G=51, B=204 => rgb(0, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 31) (Set 47) (Set 457)",
    "options": [
      "rgb(53, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 204, 204)",
      "rgb(255, 153, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC9900'? (Set 180) (Set 458)",
    "options": [
      "rgb(255, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 153, 0)",
      "rgb(204, 102, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC9900 <=> R=204, G=153, B=0 => rgb(204, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006666'? (Set 213) (Set 459)",
    "options": [
      "rgb(0, 102, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)",
      "rgb(0, 51, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #006666 <=> R=0, G=102, B=102 => rgb(0, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 25; filter for? (Set 460)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 25",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 25 inside the database",
      "Query output is all rows with age values strictly larger than 25"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 25."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 252) (Set 461)",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(204, 204, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 462)",
    "options": [
      "rgb(0, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336666'? (Set 463)",
    "options": [
      "rgb(51, 51, 102)",
      "rgb(102, 102, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #336666 <=> R=51, G=102, B=102 => rgb(51, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 212) (Set 464)",
    "options": [
      "rgb(204, 255, 255)",
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333333'? (Set 465)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 0, 51)",
      "rgb(102, 51, 51)",
      "rgb(51, 51, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #333333 <=> R=51, G=51, B=51 => rgb(51, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333333'? (Set 232) (Set 466)",
    "options": [
      "rgb(102, 51, 51)",
      "rgb(51, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #333333 <=> R=51, G=51, B=51 => rgb(51, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333399'? (Set 467)",
    "options": [
      "rgb(51, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 153)",
      "rgb(51, 51, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #333399 <=> R=51, G=51, B=153 => rgb(51, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61) (Set 468)",
    "options": [
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)",
      "rgb(204, 0, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 41; filter for? (Set 432) (Set 469)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 41 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 41",
      "Query output is all rows with age values strictly larger than 41"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 41."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 55) (Set 63) (Set 112) (Set 153) (Set 470)",
    "options": [
      "Query output includes only rows having age exactly 33 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output is all rows with age values strictly larger than 33"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21) (Set 140) (Set 471)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 255, 102)",
      "rgb(0, 204, 102)",
      "rgb(0, 255, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264) (Set 371) (Set 472)",
    "options": [
      "rgb(153, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(204, 255, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9933'? (Set 143) (Set 473)",
    "options": [
      "rgb(255, 102, 51)",
      "rgb(255, 153, 51)",
      "rgb(147, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF9933 <=> R=255, G=153, B=51 => rgb(255, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 41; filter for? (Set 432) (Set 474)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 41",
      "Query output is all rows with age values strictly larger than 41",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 41 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 41."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 67) (Set 475)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 476)",
    "options": [
      "rgb(153, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 102)",
      "rgb(222, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CCCC'? (Set 417) (Set 477)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 153, 204)",
      "rgb(51, 204, 204)",
      "rgb(0, 204, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00CCCC <=> R=0, G=204, B=204 => rgb(0, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS selector aligns elements by their id attribute? (Set 478)",
    "options": [
      "*id",
      "#id",
      "id",
      ".id"
    ],
    "answer": 1,
    "explanation": "# prefix is for ID selectors; . prefix is for class selectors."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which HTTP method is typically used to create a new resource on a server? (Set 479)",
    "options": [
      "POST",
      "GET",
      "PUT",
      "DELETE"
    ],
    "answer": 0,
    "explanation": "POST is standard for creating resources; PUT is for updates."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21) (Set 480)",
    "options": [
      "rgb(0, 255, 102)",
      "rgb(51, 255, 102)",
      "rgb(0, 0, 0)",
      "rgb(0, 204, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185) (Set 349) (Set 481)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 147) (Set 482)",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)",
      "Created (Resource successfully created) in most cases",
      "OK (Request succeeded) in typical implementations"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF99'? (Set 483)",
    "options": [
      "rgb(204, 204, 153)",
      "rgb(204, 255, 153)",
      "rgb(255, 255, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCFF99 <=> R=204, G=255, B=153 => rgb(204, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 251) (Set 427) (Set 484)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 174) (Set 233) (Set 485)",
    "options": [
      "rgb(0, 255, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 204, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which HTTP method is typically used to create a new resource on a server? (Set 479) (Set 486)",
    "options": [
      "PUT",
      "GET",
      "DELETE",
      "POST"
    ],
    "answer": 3,
    "explanation": "POST is standard for creating resources; PUT is for updates."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333CC'? (Set 487)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 0, 204)",
      "rgb(102, 51, 204)",
      "rgb(51, 51, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3333CC <=> R=51, G=51, B=204 => rgb(51, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 165) (Set 294) (Set 488)",
    "options": [
      "Created (Resource successfully created) in most cases",
      "Not Found (Target URL resource does not exist)",
      "OK (Request succeeded) under normal conditions",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3300'? (Set 188) (Set 489)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 0, 0)",
      "rgb(255, 51, 0)",
      "rgb(184, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF3300 <=> R=255, G=51, B=0 => rgb(255, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993366'? (Set 490)",
    "options": [
      "rgb(204, 51, 102)",
      "rgb(153, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #993366 <=> R=153, G=51, B=102 => rgb(153, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF33'? (Set 491)",
    "options": [
      "rgb(51, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 255, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33FF33 <=> R=51, G=255, B=51 => rgb(51, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099FF'? (Set 439) (Set 492)",
    "options": [
      "rgb(0, 153, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 102, 255)",
      "rgb(51, 153, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0099FF <=> R=0, G=153, B=255 => rgb(0, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 47; filter for? (Set 493)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 47",
      "Query output returns count representing table column rows having age less than or equal to 47",
      "Query output includes only rows having age exactly 47 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 47."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 494)",
    "options": [
      "rgb(204, 153, 0)",
      "rgb(153, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 102, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 36) (Set 495)",
    "options": [
      "rgb(222, 255, 255)",
      "rgb(153, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336699'? (Set 496)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 102, 153)",
      "rgb(51, 51, 153)",
      "rgb(51, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #336699 <=> R=51, G=102, B=153 => rgb(51, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFFF'? (Set 497)",
    "options": [
      "rgb(102, 204, 255)",
      "rgb(153, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FFFF <=> R=102, G=255, B=255 => rgb(102, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 212) (Set 299) (Set 498)",
    "options": [
      "rgb(51, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(67, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 129) (Set 499)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 21; filter for? (Set 206) (Set 320) (Set 500)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 21",
      "Query output includes only rows having age exactly 21 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 21"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 21."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC66'? (Set 339) (Set 501)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 204, 102)",
      "rgb(255, 204, 102)",
      "rgb(204, 153, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CCCC66 <=> R=204, G=204, B=102 => rgb(204, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 204 signal? (Set 46) (Set 193) (Set 502)",
    "options": [
      "Created (Resource successfully created) (primary approach)",
      "Bad Request (Server cannot interpret payload syntax) by design",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) in typical implementations"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 204 with 'No Content (Request succeeded but returns no content body)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 423) (Set 503)",
    "options": [
      "rgb(51, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(102, 255, 255)",
      "rgb(51, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330000'? (Set 43) (Set 504)",
    "options": [
      "rgb(102, 0, 0)",
      "rgb(51, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(67, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #330000 <=> R=51, G=0, B=0 => rgb(51, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 194) (Set 226) (Set 505)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 153, 153)",
      "rgb(0, 102, 153)",
      "rgb(51, 153, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 3) (Set 506)",
    "options": [
      "rgb(204, 153, 0)",
      "rgb(153, 102, 0)",
      "rgb(153, 153, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 287) (Set 507)",
    "options": [
      "Created (Resource successfully created) (commonly used)",
      "OK (Request succeeded) in typical implementations",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 33) (Set 508)",
    "options": [
      "rgb(0, 51, 0)",
      "rgb(51, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 26; filter for? (Set 509)",
    "options": [
      "Query output includes only rows having age exactly 26 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 26",
      "Query output is all rows with age values strictly larger than 26"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 26."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185) (Set 311) (Set 510)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339933'? (Set 352) (Set 400) (Set 511)",
    "options": [
      "rgb(102, 153, 51)",
      "rgb(51, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #339933 <=> R=51, G=153, B=51 => rgb(51, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663366'? (Set 241) (Set 512)",
    "options": [
      "rgb(102, 51, 102)",
      "rgb(153, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #663366 <=> R=102, G=51, B=102 => rgb(102, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0000'? (Set 52) (Set 513)",
    "options": [
      "rgb(141, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 0, 0)",
      "rgb(249, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF0000 <=> R=255, G=0, B=0 => rgb(255, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 212) (Set 299) (Set 498) (Set 514)",
    "options": [
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 147) (Set 515)",
    "options": [
      "Created (Resource successfully created) (default behavior)",
      "OK (Request succeeded) in typical implementations",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF33'? (Set 516)",
    "options": [
      "rgb(51, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 51)",
      "rgb(102, 255, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33FF33 <=> R=51, G=255, B=51 => rgb(51, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "What does CORS stand for? (Set 267) (Set 517)",
    "options": [
      "Cross-Origin Request Security",
      "Common Object Request Schema",
      "Cross-Origin Resource Sharing",
      "Central Object Routing System"
    ],
    "answer": 2,
    "explanation": "CORS allows servers to specify who is allowed to fetch endpoints."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC66'? (Set 323) (Set 518)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 204, 102)",
      "rgb(0, 153, 102)",
      "rgb(51, 204, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00CC66 <=> R=0, G=204, B=102 => rgb(0, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3366'? (Set 64) (Set 519)",
    "options": [
      "rgb(255, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(255, 51, 102)",
      "rgb(251, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF3366 <=> R=255, G=51, B=102 => rgb(255, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 252) (Set 520)",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 204, 102)",
      "rgb(153, 204, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal? (Set 37) (Set 521)",
    "options": [
      "Created (Resource successfully created)",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded) (primary approach)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00CC66'? (Set 323) (Set 518) (Set 522)",
    "options": [
      "rgb(0, 153, 102)",
      "rgb(0, 204, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00CC66 <=> R=0, G=204, B=102 => rgb(0, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF99FF'? (Set 523)",
    "options": [
      "rgb(255, 153, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 255)",
      "rgb(167, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF99FF <=> R=255, G=153, B=255 => rgb(255, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 6) (Set 185) (Set 349) (Set 395) (Set 524)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669933'? (Set 525)",
    "options": [
      "rgb(153, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 102, 51)",
      "rgb(102, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #669933 <=> R=102, G=153, B=51 => rgb(102, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF00'? (Set 526)",
    "options": [
      "rgb(204, 204, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 255, 0)",
      "rgb(255, 255, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCFF00 <=> R=204, G=255, B=0 => rgb(204, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 462) (Set 527)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00FF'? (Set 84) (Set 415) (Set 528)",
    "options": [
      "rgb(107, 255, 255)",
      "rgb(233, 255, 255)",
      "rgb(255, 0, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF00FF <=> R=255, G=0, B=255 => rgb(255, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 18) (Set 115) (Set 119) (Set 529)",
    "options": [
      "rgb(102, 255, 255)",
      "rgb(51, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC33'? (Set 200) (Set 530)",
    "options": [
      "rgb(110, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(255, 204, 51)",
      "rgb(255, 153, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFCC33 <=> R=255, G=204, B=51 => rgb(255, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990000'? (Set 17) (Set 531)",
    "options": [
      "rgb(204, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(153, 0, 0)",
      "rgb(63, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #990000 <=> R=153, G=0, B=0 => rgb(153, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 174) (Set 233) (Set 532)",
    "options": [
      "rgb(0, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 255, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 533)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 156) (Set 261) (Set 405) (Set 534)",
    "options": [
      "Margin, Border, Padding, Content",
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding",
      "Content, Padding, Border, Margin"
    ],
    "answer": 3,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 45; filter for? (Set 99) (Set 256) (Set 535)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 45",
      "Query output returns count representing table column rows having age less than or equal to 45",
      "Query output includes only rows having age exactly 45 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 45."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600CC'? (Set 29) (Set 536)",
    "options": [
      "rgb(102, 0, 204)",
      "rgb(153, 0, 204)",
      "rgb(183, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #6600CC <=> R=102, G=0, B=204 => rgb(102, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF66'? (Set 149) (Set 537)",
    "options": [
      "rgb(255, 255, 102)",
      "rgb(204, 204, 102)",
      "rgb(204, 255, 102)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCFF66 <=> R=204, G=255, B=102 => rgb(204, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 174) (Set 233) (Set 485) (Set 538)",
    "options": [
      "rgb(0, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 51)",
      "rgb(0, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 289) (Set 539)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 540)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(255, 51, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 29; filter for? (Set 372) (Set 541)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 29",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 29 inside the database",
      "Query output is all rows with age values strictly larger than 29"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 29."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'? (Set 14) (Set 448) (Set 542)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 153, 204)",
      "rgb(0, 153, 204)",
      "rgb(0, 102, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 36; filter for? (Set 58) (Set 203) (Set 543)",
    "options": [
      "Query output includes only rows having age exactly 36 inside the database",
      "Query output is all rows with age values strictly larger than 36",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 36"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 36."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669966'? (Set 330) (Set 348) (Set 357) (Set 544)",
    "options": [
      "rgb(153, 153, 102)",
      "rgb(0, 0, 0) by design",
      "rgb(102, 153, 102)",
      "rgb(102, 102, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #669966 <=> R=102, G=153, B=102 => rgb(102, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF33'? (Set 94) (Set 545)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 204, 51)",
      "rgb(255, 255, 51)",
      "rgb(85, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FFFF33 <=> R=255, G=255, B=51 => rgb(255, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 546)",
    "options": [
      "rgb(0, 153, 153)",
      "rgb(0, 102, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 19) (Set 547)",
    "options": [
      "rgb(51, 51, 255)",
      "rgb(0, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal? (Set 37) (Set 521) (Set 548)",
    "options": [
      "Created (Resource successfully created)",
      "OK (Request succeeded) (commonly used)",
      "Bad Request (Server cannot interpret payload syntax)",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0099'? (Set 48) (Set 56) (Set 549)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 0, 153)",
      "rgb(204, 0, 153)",
      "rgb(209, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC0099 <=> R=204, G=0, B=153 => rgb(204, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339933'? (Set 352) (Set 550)",
    "options": [
      "rgb(51, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 153, 51)",
      "rgb(51, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #339933 <=> R=51, G=153, B=51 => rgb(51, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC66'? (Set 551)",
    "options": [
      "rgb(204, 204, 102)",
      "rgb(255, 204, 102)",
      "rgb(204, 153, 102)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CCCC66 <=> R=204, G=204, B=102 => rgb(204, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 36) (Set 552)",
    "options": [
      "rgb(102, 0, 102)",
      "rgb(222, 255, 255)",
      "rgb(153, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#993399'? (Set 15) (Set 553)",
    "options": [
      "rgb(153, 51, 153)",
      "rgb(153, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(204, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #993399 <=> R=153, G=51, B=153 => rgb(153, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333333'? (Set 232) (Set 466) (Set 554)",
    "options": [
      "rgb(51, 51, 51)",
      "rgb(51, 0, 51)",
      "rgb(102, 51, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #333333 <=> R=51, G=51, B=51 => rgb(51, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663333'? (Set 116) (Set 555)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 0, 51)",
      "rgb(102, 51, 51)",
      "rgb(153, 51, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663333 <=> R=102, G=51, B=51 => rgb(102, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF33'? (Set 556)",
    "options": [
      "rgb(153, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 204, 51)",
      "rgb(102, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FF33 <=> R=102, G=255, B=51 => rgb(102, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 31) (Set 557)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 153, 204)",
      "rgb(53, 255, 255)",
      "rgb(255, 204, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'? (Set 558)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 153, 204)",
      "rgb(0, 153, 204)",
      "rgb(0, 102, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF33'? (Set 556) (Set 559)",
    "options": [
      "rgb(102, 255, 51)",
      "rgb(102, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 255, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66FF33 <=> R=102, G=255, B=51 => rgb(102, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3300'? (Set 188) (Set 446) (Set 560)",
    "options": [
      "rgb(184, 255, 255)",
      "rgb(255, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(255, 51, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF3300 <=> R=255, G=51, B=0 => rgb(255, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 45; filter for? (Set 245) (Set 561)",
    "options": [
      "Query output is all rows with age values strictly larger than 45",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 45 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 45"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 45."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'? (Set 562)",
    "options": [
      "rgb(0, 255, 255)",
      "rgb(0, 204, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC0099'? (Set 563)",
    "options": [
      "rgb(255, 0, 153)",
      "rgb(0, 0, 0)",
      "rgb(209, 255, 255)",
      "rgb(204, 0, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC0099 <=> R=204, G=0, B=153 => rgb(204, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900CC'? (Set 564)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 0, 204)",
      "rgb(204, 0, 204)",
      "rgb(7, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #9900CC <=> R=153, G=0, B=204 => rgb(153, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 403 signal? (Set 565)",
    "options": [
      "No Content (Request succeeded but returns no content body) in practice",
      "Created (Resource successfully created) as per specification",
      "OK (Request succeeded) in typical implementations",
      "Forbidden (Client validated but has no authorization permissions)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 403 with 'Forbidden (Client validated but has no authorization permissions)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3399'? (Set 279) (Set 566)",
    "options": [
      "rgb(255, 51, 153)",
      "rgb(211, 255, 255)",
      "rgb(255, 0, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF3399 <=> R=255, G=51, B=153 => rgb(255, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339900'? (Set 567)",
    "options": [
      "rgb(51, 102, 0)",
      "rgb(102, 153, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 153, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #339900 <=> R=51, G=153, B=0 => rgb(51, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0099'? (Set 137) (Set 286) (Set 568)",
    "options": [
      "rgb(158, 255, 255)",
      "rgb(255, 0, 153)",
      "rgb(133, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF0099 <=> R=255, G=0, B=153 => rgb(255, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0066CC'? (Set 224) (Set 569)",
    "options": [
      "rgb(0, 51, 204)",
      "rgb(0, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0066CC <=> R=0, G=102, B=204 => rgb(0, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6666'? (Set 570)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(204, 51, 102)",
      "rgb(204, 102, 102)",
      "rgb(255, 102, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6666 <=> R=204, G=102, B=102 => rgb(204, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 29; filter for? (Set 372) (Set 571)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 29",
      "Query output is all rows with age values strictly larger than 29",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 29 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 29."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF33FF'? (Set 572)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(155, 255, 255)",
      "rgb(255, 0, 255)",
      "rgb(255, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF33FF <=> R=255, G=51, B=255 => rgb(255, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#990033'? (Set 573)",
    "options": [
      "rgb(153, 0, 51)",
      "rgb(204, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(3, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #990033 <=> R=153, G=0, B=51 => rgb(153, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "MERN stack consists of? (Set 574)",
    "options": [
      "MySQL, Express, React, Node",
      "MongoDB, Express, Redux, Node",
      "MongoDB, Elixir, React, Node",
      "MongoDB, Express, React, Node"
    ],
    "answer": 3,
    "explanation": "Top Javascript full-stack combination."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333399'? (Set 575)",
    "options": [
      "rgb(51, 0, 153)",
      "rgb(51, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #333399 <=> R=51, G=51, B=153 => rgb(51, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 44) (Set 360) (Set 576)",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "Not Found (Target URL resource does not exist)",
      "Created (Resource successfully created) in most cases",
      "OK (Request succeeded) (widely accepted)"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264) (Set 371) (Set 577)",
    "options": [
      "rgb(153, 255, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 204, 153)",
      "rgb(204, 255, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 578)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 19; filter for? (Set 177) (Set 579)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 19",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 19 inside the database",
      "Query output is all rows with age values strictly larger than 19"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 19."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC00FF'? (Set 23) (Set 238) (Set 580)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 0, 255)",
      "rgb(255, 0, 255)",
      "rgb(113, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC00FF <=> R=204, G=0, B=255 => rgb(204, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal? (Set 37) (Set 581)",
    "options": [
      "Bad Request (Server cannot interpret payload syntax)",
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created)",
      "OK (Request succeeded) in practice"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#666633'? (Set 582)",
    "options": [
      "rgb(102, 51, 51)",
      "rgb(102, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 102, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #666633 <=> R=102, G=102, B=51 => rgb(102, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC66'? (Set 339) (Set 501) (Set 583)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 204, 102)",
      "rgb(204, 204, 102)",
      "rgb(204, 153, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCCC66 <=> R=204, G=204, B=102 => rgb(204, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333300'? (Set 584)",
    "options": [
      "rgb(102, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)",
      "rgb(51, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #333300 <=> R=51, G=51, B=0 => rgb(51, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC33'? (Set 585)",
    "options": [
      "rgb(110, 255, 255)",
      "rgb(255, 204, 51)",
      "rgb(255, 153, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFCC33 <=> R=255, G=204, B=51 => rgb(255, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 25; filter for? (Set 460) (Set 586)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 25",
      "Query output returns count representing table column rows having age less than or equal to 25",
      "Query output includes only rows having age exactly 25 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 25."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 31) (Set 331) (Set 587)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(53, 255, 255)",
      "rgb(255, 153, 204)",
      "rgb(255, 204, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS selector aligns elements by their id attribute? (Set 60) (Set 434) (Set 588)",
    "options": [
      ".id",
      "id",
      "*id",
      "#id"
    ],
    "answer": 3,
    "explanation": "# prefix is for ID selectors; . prefix is for class selectors."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 44) (Set 360) (Set 589)",
    "options": [
      "Not Found (Target URL resource does not exist)",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) (primary approach)",
      "Created (Resource successfully created) by design"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 36; filter for? (Set 590)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 36",
      "Query output includes only rows having age exactly 36 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 36"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 36."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264) (Set 371) (Set 577) (Set 591)",
    "options": [
      "rgb(153, 204, 153)",
      "rgb(153, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 255, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 33; filter for? (Set 30) (Set 402) (Set 592)",
    "options": [
      "Query output is all rows with age values strictly larger than 33",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output returns count representing table column rows having age less than or equal to 33",
      "Query output includes only rows having age exactly 33 inside the database"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 33."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3333FF'? (Set 70) (Set 593)",
    "options": [
      "rgb(51, 51, 255)",
      "rgb(51, 0, 255)",
      "rgb(102, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3333FF <=> R=51, G=51, B=255 => rgb(51, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 19) (Set 93) (Set 107) (Set 594)",
    "options": [
      "rgb(0, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 255)",
      "rgb(51, 51, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 166) (Set 595)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(102, 102, 204)",
      "rgb(51, 102, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600CC'? (Set 29) (Set 114) (Set 596)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(183, 255, 255)",
      "rgb(102, 0, 204)",
      "rgb(153, 0, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6600CC <=> R=102, G=0, B=204 => rgb(102, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC99'? (Set 597)",
    "options": [
      "rgb(204, 153, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 204, 153)",
      "rgb(204, 204, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CCCC99 <=> R=204, G=204, B=153 => rgb(204, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00FF'? (Set 84) (Set 415) (Set 598)",
    "options": [
      "rgb(233, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(107, 255, 255)",
      "rgb(255, 0, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF00FF <=> R=255, G=0, B=255 => rgb(255, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6633'? (Set 599)",
    "options": [
      "rgb(255, 102, 51)",
      "rgb(204, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(204, 102, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6633 <=> R=204, G=102, B=51 => rgb(204, 102, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663333'? (Set 600)",
    "options": [
      "rgb(153, 51, 51)",
      "rgb(102, 51, 51)",
      "rgb(102, 0, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #663333 <=> R=102, G=51, B=51 => rgb(102, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 166) (Set 298) (Set 416) (Set 601)",
    "options": [
      "rgb(51, 102, 204)",
      "rgb(102, 102, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF9999'? (Set 602)",
    "options": [
      "rgb(151, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(255, 153, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #FF9999 <=> R=255, G=153, B=153 => rgb(255, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCCC'? (Set 398) (Set 603)",
    "options": [
      "rgb(51, 153, 204)",
      "rgb(0, 0, 0)",
      "rgb(51, 204, 204)",
      "rgb(102, 204, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CCCC <=> R=51, G=204, B=204 => rgb(51, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 10) (Set 61) (Set 95) (Set 604)",
    "options": [
      "rgb(255, 51, 255)",
      "rgb(204, 51, 255)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3333'? (Set 605)",
    "options": [
      "rgb(204, 51, 51)",
      "rgb(255, 51, 51)",
      "rgb(0, 0, 0)",
      "rgb(204, 0, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC3333 <=> R=204, G=51, B=51 => rgb(204, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339933'? (Set 352) (Set 550) (Set 606)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 102, 51)",
      "rgb(51, 153, 51)",
      "rgb(102, 153, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #339933 <=> R=51, G=153, B=51 => rgb(51, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCCCC'? (Set 31) (Set 331) (Set 587) (Set 607)",
    "options": [
      "rgb(255, 153, 204)",
      "rgb(255, 204, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(53, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFCCCC <=> R=255, G=204, B=204 => rgb(255, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "Which JS keyword is hoisting-bound but initialized as undefined? (Set 221) (Set 341) (Set 608)",
    "options": [
      "function",
      "let",
      "var",
      "const"
    ],
    "answer": 2,
    "explanation": "var variables are hoisted and default to undefined."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033CC'? (Set 122) (Set 148) (Set 456) (Set 609)",
    "options": [
      "rgb(0, 51, 204)",
      "rgb(0, 0, 0)",
      "rgb(0, 0, 204)",
      "rgb(51, 51, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0033CC <=> R=0, G=51, B=204 => rgb(0, 51, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996666'? (Set 610)",
    "options": [
      "rgb(153, 51, 102)",
      "rgb(153, 102, 102)",
      "rgb(204, 102, 102)",
      "rgb(0, 0, 0) in practice"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #996666 <=> R=153, G=102, B=102 => rgb(153, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003300'? (Set 32) (Set 611)",
    "options": [
      "rgb(51, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #003300 <=> R=0, G=51, B=0 => rgb(0, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 25; filter for? (Set 612)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 25",
      "Query output includes only rows having age exactly 25 inside the database",
      "Query output is all rows with age values strictly larger than 25",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 25."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0066CC'? (Set 224) (Set 613)",
    "options": [
      "rgb(0, 102, 204)",
      "rgb(0, 51, 204)",
      "rgb(51, 102, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #0066CC <=> R=0, G=102, B=204 => rgb(0, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 264) (Set 614)",
    "options": [
      "rgb(153, 204, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 255, 153)",
      "rgb(204, 255, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which HTTP method is typically used to create a new resource on a server? (Set 479) (Set 486) (Set 615)",
    "options": [
      "PUT",
      "GET",
      "POST",
      "DELETE"
    ],
    "answer": 2,
    "explanation": "POST is standard for creating resources; PUT is for updates."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9933FF'? (Set 616)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(204, 51, 255)",
      "rgb(153, 51, 255)",
      "rgb(153, 0, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #9933FF <=> R=153, G=51, B=255 => rgb(153, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 19; filter for? (Set 617)",
    "options": [
      "Query output returns count representing table column rows having age less than or equal to 19",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 19",
      "Query output includes only rows having age exactly 19 inside the database"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 19."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFCC'? (Set 160) (Set 618)",
    "options": [
      "rgb(102, 204, 204)",
      "rgb(102, 255, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 255, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66FFCC <=> R=102, G=255, B=204 => rgb(102, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 174) (Set 233) (Set 485) (Set 619)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 255, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 204, 51)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 43; filter for? (Set 620)",
    "options": [
      "Query output is all rows with age values strictly larger than 43",
      "Query output returns count representing table column rows having age less than or equal to 43",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 43 inside the database"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 43."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900CC'? (Set 392) (Set 420) (Set 621)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(7, 255, 255)",
      "rgb(153, 0, 204)",
      "rgb(204, 0, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #9900CC <=> R=153, G=0, B=204 => rgb(153, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 36) (Set 622)",
    "options": [
      "rgb(222, 255, 255)",
      "rgb(102, 0, 102)",
      "rgb(153, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFFF'? (Set 497) (Set 623)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(102, 204, 255)",
      "rgb(153, 255, 255)",
      "rgb(102, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FFFF <=> R=102, G=255, B=255 => rgb(102, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006600'? (Set 291) (Set 624)",
    "options": [
      "rgb(0, 102, 0)",
      "rgb(0, 51, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #006600 <=> R=0, G=102, B=0 => rgb(0, 102, 0)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 30; filter for? (Set 625)",
    "options": [
      "Query output includes only rows having age exactly 30 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 30",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 30"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 30."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF00'? (Set 626)",
    "options": [
      "rgb(102, 204, 0)",
      "rgb(153, 255, 0)",
      "rgb(0, 0, 0)",
      "rgb(102, 255, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FF00 <=> R=102, G=255, B=0 => rgb(102, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 404 signal? (Set 44) (Set 360) (Set 627)",
    "options": [
      "OK (Request succeeded) (widely accepted)",
      "Created (Resource successfully created) in practice",
      "No Content (Request succeeded but returns no content body)",
      "Not Found (Target URL resource does not exist)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 404 with 'Not Found (Target URL resource does not exist)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#3366CC'? (Set 166) (Set 298) (Set 628)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 51, 204)",
      "rgb(102, 102, 204)",
      "rgb(51, 102, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #3366CC <=> R=51, G=102, B=204 => rgb(51, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFCC'? (Set 134) (Set 629)",
    "options": [
      "rgb(51, 255, 204)",
      "rgb(0, 255, 204)",
      "rgb(0, 204, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FFCC <=> R=0, G=255, B=204 => rgb(0, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0000CC'? (Set 630)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 0, 204)",
      "rgb(187, 255, 255)",
      "rgb(51, 0, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0000CC <=> R=0, G=0, B=204 => rgb(0, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 631)",
    "options": [
      "rgb(153, 153, 0)",
      "rgb(204, 153, 0)",
      "rgb(153, 102, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 403 signal? (Set 632)",
    "options": [
      "No Content (Request succeeded but returns no content body) in most cases",
      "Forbidden (Client validated but has no authorization permissions)",
      "Created (Resource successfully created) in typical implementations",
      "OK (Request succeeded) in typical implementations"
    ],
    "answer": 1,
    "explanation": "HTTP RFC specifications correlate status 403 with 'Forbidden (Client validated but has no authorization permissions)'."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 36; filter for? (Set 58) (Set 203) (Set 543) (Set 633)",
    "options": [
      "Query output is all rows with age values strictly larger than 36",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output includes only rows having age exactly 36 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 36"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 36."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999933'? (Set 365) (Set 634)",
    "options": [
      "rgb(153, 102, 51)",
      "rgb(204, 153, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #999933 <=> R=153, G=153, B=51 => rgb(153, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 476) (Set 635)",
    "options": [
      "rgb(222, 255, 255)",
      "rgb(153, 0, 102)",
      "rgb(102, 0, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FF00'? (Set 65) (Set 636)",
    "options": [
      "rgb(51, 204, 0)",
      "rgb(51, 255, 0)",
      "rgb(102, 255, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #33FF00 <=> R=51, G=255, B=0 => rgb(51, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "Which JS keyword is hoisting-bound but initialized as undefined? (Set 221) (Set 637)",
    "options": [
      "const",
      "function",
      "let",
      "var"
    ],
    "answer": 3,
    "explanation": "var variables are hoisted and default to undefined."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 176) (Set 638)",
    "options": [
      "rgb(153, 0, 102)",
      "rgb(222, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFFF'? (Set 497) (Set 623) (Set 639)",
    "options": [
      "rgb(153, 255, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(102, 204, 255)",
      "rgb(102, 255, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66FFFF <=> R=102, G=255, B=255 => rgb(102, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF3366'? (Set 64) (Set 640)",
    "options": [
      "rgb(255, 51, 102)",
      "rgb(0, 0, 0)",
      "rgb(251, 255, 255)",
      "rgb(255, 0, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF3366 <=> R=255, G=51, B=102 => rgb(255, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 240) (Set 641)",
    "options": [
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99CC66'? (Set 252) (Set 461) (Set 642)",
    "options": [
      "rgb(153, 204, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 204, 102)",
      "rgb(153, 153, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #99CC66 <=> R=153, G=204, B=102 => rgb(153, 204, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 301) (Set 317) (Set 643)",
    "options": [
      "rgb(51, 204, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 204, 51)",
      "rgb(51, 153, 51)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFFF'? (Set 96) (Set 644)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 255, 255)",
      "rgb(0, 204, 255)",
      "rgb(51, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #00FFFF <=> R=0, G=255, B=255 => rgb(0, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCFF'? (Set 81) (Set 325) (Set 645)",
    "options": [
      "rgb(51, 153, 255)",
      "rgb(102, 204, 255)",
      "rgb(51, 204, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CCFF <=> R=51, G=204, B=255 => rgb(51, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FF99'? (Set 5) (Set 20) (Set 646)",
    "options": [
      "rgb(204, 255, 153)",
      "rgb(153, 204, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 255, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #99FF99 <=> R=153, G=255, B=153 => rgb(153, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333300'? (Set 584) (Set 647)",
    "options": [
      "rgb(102, 51, 0)",
      "rgb(51, 0, 0)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #333300 <=> R=51, G=51, B=0 => rgb(51, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000033'? (Set 648)",
    "options": [
      "rgb(51, 0, 51)",
      "rgb(86, 255, 255)",
      "rgb(0, 0, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #000033 <=> R=0, G=0, B=51 => rgb(0, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC66FF'? (Set 649)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 255)",
      "rgb(204, 51, 255)",
      "rgb(204, 102, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC66FF <=> R=204, G=102, B=255 => rgb(204, 102, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 40; filter for? (Set 12) (Set 650)",
    "options": [
      "Query output is all rows with age values strictly larger than 40",
      "Query output returns count representing table column rows having age less than or equal to 40",
      "Query output includes only rows having age exactly 40 inside the database",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 0,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 40."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal? (Set 37) (Set 581) (Set 651)",
    "options": [
      "Created (Resource successfully created)",
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded) (default behavior)",
      "No Content (Request succeeded but returns no content body)"
    ],
    "answer": 0,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 326) (Set 334) (Set 652)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 153, 153)",
      "rgb(51, 153, 153)",
      "rgb(0, 102, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#669933'? (Set 146) (Set 653)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 102, 51)",
      "rgb(102, 153, 51)",
      "rgb(153, 153, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #669933 <=> R=102, G=153, B=51 => rgb(102, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336666'? (Set 654)",
    "options": [
      "rgb(102, 102, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)",
      "rgb(51, 51, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #336666 <=> R=51, G=102, B=102 => rgb(51, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0033'? (Set 655)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 0, 51)",
      "rgb(162, 255, 255)",
      "rgb(197, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF0033 <=> R=255, G=0, B=51 => rgb(255, 0, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCCC'? (Set 398) (Set 656)",
    "options": [
      "rgb(102, 204, 204)",
      "rgb(51, 153, 204)",
      "rgb(51, 204, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CCCC <=> R=51, G=204, B=204 => rgb(51, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCCFF'? (Set 247) (Set 342) (Set 657)",
    "options": [
      "rgb(204, 204, 255)",
      "rgb(255, 204, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 153, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #CCCCFF <=> R=204, G=204, B=255 => rgb(204, 204, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FF99'? (Set 175) (Set 658)",
    "options": [
      "rgb(102, 255, 153)",
      "rgb(0, 0, 0) in practice",
      "rgb(102, 204, 153)",
      "rgb(153, 255, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #66FF99 <=> R=102, G=255, B=153 => rgb(102, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 23; filter for? (Set 659)",
    "options": [
      "Query output includes only rows having age exactly 23 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 23",
      "Query output is all rows with age values strictly larger than 23",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 23."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC00'? (Set 660)",
    "options": [
      "rgb(153, 204, 0)",
      "rgb(102, 204, 0)",
      "rgb(102, 153, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66CC00 <=> R=102, G=204, B=0 => rgb(102, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 661)",
    "options": [
      "rgb(153, 153, 0)",
      "rgb(204, 153, 0)",
      "rgb(153, 102, 0)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFFF'? (Set 497) (Set 662)",
    "options": [
      "rgb(102, 204, 255)",
      "rgb(0, 0, 0) in practice",
      "rgb(102, 255, 255)",
      "rgb(153, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #66FFFF <=> R=102, G=255, B=255 => rgb(102, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 25; filter for? (Set 612) (Set 663)",
    "options": [
      "Query output includes only rows having age exactly 25 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 25",
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 25"
    ],
    "answer": 3,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 25."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999900'? (Set 80) (Set 664)",
    "options": [
      "rgb(153, 153, 0)",
      "rgb(153, 102, 0)",
      "rgb(0, 0, 0)",
      "rgb(204, 153, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #999900 <=> R=153, G=153, B=0 => rgb(153, 153, 0)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 257) (Set 363) (Set 665)",
    "options": [
      "Plain Text by design",
      "XML (default behavior)",
      "CSV (widely accepted)",
      "BSON (Binary JSON)"
    ],
    "answer": 3,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 147) (Set 515) (Set 666)",
    "options": [
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) under normal conditions",
      "Bad Request (Server cannot interpret payload syntax)",
      "Created (Resource successfully created) (default behavior)"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#339966'? (Set 667)",
    "options": [
      "rgb(51, 153, 102)",
      "rgb(102, 153, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 102, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #339966 <=> R=51, G=153, B=102 => rgb(51, 153, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFFFF'? (Set 668)",
    "options": [
      "rgb(255, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 255, 255)",
      "rgb(204, 204, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCFFFF <=> R=204, G=255, B=255 => rgb(204, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FFCC'? (Set 669)",
    "options": [
      "rgb(153, 204, 204)",
      "rgb(204, 255, 204)",
      "rgb(153, 255, 204)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #99FFCC <=> R=153, G=255, B=204 => rgb(153, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#003333'? (Set 670)",
    "options": [
      "rgb(51, 51, 51)",
      "rgb(0, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 51, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #003333 <=> R=0, G=51, B=51 => rgb(0, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#336699'? (Set 38) (Set 283) (Set 671)",
    "options": [
      "rgb(51, 102, 153)",
      "rgb(102, 102, 153)",
      "rgb(51, 51, 153)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #336699 <=> R=51, G=102, B=153 => rgb(51, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFFCC'? (Set 672)",
    "options": [
      "rgb(255, 255, 204)",
      "rgb(255, 204, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(146, 255, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FFFFCC <=> R=255, G=255, B=204 => rgb(255, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00CC'? (Set 673)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 0, 204)",
      "rgb(151, 255, 255)",
      "rgb(197, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FF00CC <=> R=255, G=0, B=204 => rgb(255, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#996666'? (Set 197) (Set 674)",
    "options": [
      "rgb(153, 102, 102)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 102)",
      "rgb(153, 51, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #996666 <=> R=153, G=102, B=102 => rgb(153, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 240) (Set 675)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(255, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600CC'? (Set 29) (Set 676)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 0, 204)",
      "rgb(102, 0, 204)",
      "rgb(183, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6600CC <=> R=102, G=0, B=204 => rgb(102, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0000FF'? (Set 293) (Set 677)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(51, 0, 255)",
      "rgb(0, 0, 255)",
      "rgb(150, 255, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #0000FF <=> R=0, G=0, B=255 => rgb(0, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 678)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCFF99'? (Set 358) (Set 679)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 204, 153)",
      "rgb(204, 255, 153)",
      "rgb(255, 255, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCFF99 <=> R=204, G=255, B=153 => rgb(204, 255, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#006666'? (Set 680)",
    "options": [
      "rgb(0, 51, 102)",
      "rgb(0, 102, 102)",
      "rgb(51, 102, 102)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #006666 <=> R=0, G=102, B=102 => rgb(0, 102, 102)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 18; filter for? (Set 681)",
    "options": [
      "Query output includes only rows having age exactly 18 inside the database",
      "Query output returns count representing table column rows having age less than or equal to 18",
      "Query output is all rows with age values strictly larger than 18",
      "Query output returns errors due to invalid query syntax parameters on filtering age"
    ],
    "answer": 2,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 18."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFCC33'? (Set 200) (Set 530) (Set 682)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(110, 255, 255)",
      "rgb(255, 153, 51)",
      "rgb(255, 204, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FFCC33 <=> R=255, G=204, B=51 => rgb(255, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF00CC'? (Set 683)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(197, 255, 255)",
      "rgb(151, 255, 255)",
      "rgb(255, 0, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #FF00CC <=> R=255, G=0, B=204 => rgb(255, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#000000'? (Set 212) (Set 299) (Set 321) (Set 684)",
    "options": [
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(204, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #000000 <=> R=0, G=0, B=0 => rgb(0, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9999CC'? (Set 159) (Set 685)",
    "options": [
      "rgb(153, 102, 204)",
      "rgb(153, 153, 204)",
      "rgb(204, 153, 204)",
      "rgb(0, 0, 0) by design"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #9999CC <=> R=153, G=153, B=204 => rgb(153, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Medium",
    "question": "In MongoDB, a document wraps data in which raw format? (Set 350) (Set 355) (Set 443) (Set 686)",
    "options": [
      "CSV (commonly used)",
      "Plain Text (general case)",
      "BSON (Binary JSON)",
      "XML (primary approach)"
    ],
    "answer": 2,
    "explanation": "MongoDB stores documents internally as binary JSON (BSON)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CCCC'? (Set 136) (Set 421) (Set 687)",
    "options": [
      "rgb(51, 153, 204)",
      "rgb(0, 0, 0)",
      "rgb(102, 204, 204)",
      "rgb(51, 204, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #33CCCC <=> R=51, G=204, B=204 => rgb(51, 204, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "CSS Box Model includes which four elements in order from inside to outside? (Set 77) (Set 688)",
    "options": [
      "Content, Border, Padding, Margin",
      "Content, Margin, Border, Padding",
      "Margin, Border, Padding, Content",
      "Content, Padding, Border, Margin"
    ],
    "answer": 3,
    "explanation": "Box model defines layout properties."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#99FFCC'? (Set 7) (Set 184) (Set 689)",
    "options": [
      "rgb(153, 204, 204)",
      "rgb(153, 255, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 255, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #99FFCC <=> R=153, G=255, B=204 => rgb(153, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333399'? (Set 690)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 51, 153)",
      "rgb(51, 0, 153)",
      "rgb(51, 51, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #333399 <=> R=51, G=51, B=153 => rgb(51, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#333399'? (Set 690) (Set 691)",
    "options": [
      "rgb(51, 51, 153)",
      "rgb(0, 0, 0)",
      "rgb(51, 0, 153)",
      "rgb(102, 51, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #333399 <=> R=51, G=51, B=153 => rgb(51, 51, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330000'? (Set 43) (Set 504) (Set 692)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(67, 255, 255)",
      "rgb(51, 0, 0)",
      "rgb(102, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #330000 <=> R=51, G=0, B=0 => rgb(51, 0, 0)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 287) (Set 507) (Set 693)",
    "options": [
      "Created (Resource successfully created) by design",
      "OK (Request succeeded) in typical implementations",
      "No Content (Request succeeded but returns no content body)",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#6600FF'? (Set 248) (Set 300) (Set 694)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(162, 255, 255)",
      "rgb(102, 0, 255)",
      "rgb(153, 0, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #6600FF <=> R=102, G=0, B=255 => rgb(102, 0, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#330066'? (Set 260) (Set 695)",
    "options": [
      "rgb(217, 255, 255)",
      "rgb(51, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(102, 0, 102)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #330066 <=> R=51, G=0, B=102 => rgb(51, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9966CC'? (Set 696)",
    "options": [
      "rgb(153, 102, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(204, 102, 204)",
      "rgb(153, 51, 204)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9966CC <=> R=153, G=102, B=204 => rgb(153, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC33FF'? (Set 697)",
    "options": [
      "rgb(204, 0, 255)",
      "rgb(204, 51, 255)",
      "rgb(255, 51, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC33FF <=> R=204, G=51, B=255 => rgb(204, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 187) (Set 251) (Set 427) (Set 698)",
    "options": [
      "rgb(255, 102, 153)",
      "rgb(204, 51, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 153)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0099CC'? (Set 14) (Set 448) (Set 542) (Set 699)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 153, 204)",
      "rgb(0, 102, 204)",
      "rgb(51, 153, 204)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0099CC <=> R=0, G=153, B=204 => rgb(0, 153, 204)."
  },
  {
    "subject": "FSD",
    "topic": "SQL Databases Select Queries",
    "difficulty": "Medium",
    "question": "For a database table containing age values, what does query: SELECT * FROM Students WHERE age > 40; filter for? (Set 12) (Set 650) (Set 700)",
    "options": [
      "Query output returns errors due to invalid query syntax parameters on filtering age",
      "Query output is all rows with age values strictly larger than 40",
      "Query output returns count representing table column rows having age less than or equal to 40",
      "Query output includes only rows having age exactly 40 inside the database"
    ],
    "answer": 1,
    "explanation": "The '>' operator returns records where the column value is strictly greater than the threshold 40."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "Which CSS display property makes child items flow either horizontally or vertically inside a flexible container? (Set 701)",
    "options": [
      "display: grid",
      "display: flex",
      "display: block",
      "display: inline-block"
    ],
    "answer": 1,
    "explanation": "Flexbox handles 1-directional layout."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFCC'? (Set 134) (Set 702)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 204, 204)",
      "rgb(0, 255, 204)",
      "rgb(51, 255, 204)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #00FFCC <=> R=0, G=255, B=204 => rgb(0, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF33'? (Set 174) (Set 233) (Set 532) (Set 703)",
    "options": [
      "rgb(0, 204, 51)",
      "rgb(51, 255, 51)",
      "rgb(0, 0, 0)",
      "rgb(0, 255, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FF33 <=> R=0, G=255, B=51 => rgb(0, 255, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 289) (Set 539) (Set 704)",
    "options": [
      "rgb(0, 0, 0) in practice",
      "rgb(255, 102, 153)",
      "rgb(204, 102, 153)",
      "rgb(204, 51, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0066CC'? (Set 102) (Set 705)",
    "options": [
      "rgb(0, 51, 204)",
      "rgb(0, 102, 204)",
      "rgb(51, 102, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #0066CC <=> R=0, G=102, B=204 => rgb(0, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 400 signal? (Set 147) (Set 515) (Set 666) (Set 706)",
    "options": [
      "OK (Request succeeded) in typical implementations",
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created) in practice",
      "Bad Request (Server cannot interpret payload syntax)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 400 with 'Bad Request (Server cannot interpret payload syntax)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#009999'? (Set 546) (Set 707)",
    "options": [
      "rgb(0, 153, 153)",
      "rgb(51, 153, 153)",
      "rgb(0, 0, 0)",
      "rgb(0, 102, 153)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #009999 <=> R=0, G=153, B=153 => rgb(0, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9966CC'? (Set 708)",
    "options": [
      "rgb(153, 51, 204)",
      "rgb(204, 102, 204)",
      "rgb(0, 0, 0) in practice",
      "rgb(153, 102, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #9966CC <=> R=153, G=102, B=204 => rgb(153, 102, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#660066'? (Set 176) (Set 709)",
    "options": [
      "rgb(153, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(222, 255, 255)",
      "rgb(102, 0, 102)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #660066 <=> R=102, G=0, B=102 => rgb(102, 0, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66FFFF'? (Set 497) (Set 710)",
    "options": [
      "rgb(102, 204, 255)",
      "rgb(102, 255, 255)",
      "rgb(0, 0, 0) by design",
      "rgb(153, 255, 255)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #66FFFF <=> R=102, G=255, B=255 => rgb(102, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC6699'? (Set 24) (Set 186) (Set 711)",
    "options": [
      "rgb(204, 51, 153)",
      "rgb(204, 102, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(255, 102, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #CC6699 <=> R=204, G=102, B=153 => rgb(204, 102, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999933'? (Set 712)",
    "options": [
      "rgb(204, 153, 51)",
      "rgb(153, 102, 51)",
      "rgb(0, 0, 0)",
      "rgb(153, 153, 51)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #999933 <=> R=153, G=153, B=51 => rgb(153, 153, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC99FF'? (Set 713)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(204, 102, 255)",
      "rgb(204, 153, 255)",
      "rgb(255, 153, 255)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC99FF <=> R=204, G=153, B=255 => rgb(204, 153, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#9900CC'? (Set 714)",
    "options": [
      "rgb(153, 0, 204)",
      "rgb(7, 255, 255)",
      "rgb(204, 0, 204)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #9900CC <=> R=153, G=0, B=204 => rgb(153, 0, 204)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 301) (Set 310) (Set 715)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(102, 204, 51)",
      "rgb(51, 204, 51)",
      "rgb(51, 153, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#999999'? (Set 716)",
    "options": [
      "rgb(153, 102, 153)",
      "rgb(153, 153, 153)",
      "rgb(0, 0, 0) by design",
      "rgb(204, 153, 153)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #999999 <=> R=153, G=153, B=153 => rgb(153, 153, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663366'? (Set 241) (Set 436) (Set 717)",
    "options": [
      "rgb(102, 0, 102)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 102)",
      "rgb(153, 51, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663366 <=> R=102, G=51, B=102 => rgb(102, 51, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FF66'? (Set 21) (Set 140) (Set 471) (Set 718)",
    "options": [
      "rgb(0, 255, 102)",
      "rgb(0, 0, 0)",
      "rgb(51, 255, 102)",
      "rgb(0, 204, 102)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #00FF66 <=> R=0, G=255, B=102 => rgb(0, 255, 102)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FFFF00'? (Set 4) (Set 719)",
    "options": [
      "rgb(255, 204, 0)",
      "rgb(255, 255, 0)",
      "rgb(166, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 1,
    "explanation": "Hex color values directly match RGB components: #FFFF00 <=> R=255, G=255, B=0 => rgb(255, 255, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33CC33'? (Set 301) (Set 720)",
    "options": [
      "rgb(102, 204, 51)",
      "rgb(51, 153, 51)",
      "rgb(51, 204, 51)",
      "rgb(0, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #33CC33 <=> R=51, G=204, B=51 => rgb(51, 204, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3300'? (Set 128) (Set 721)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 51, 0)",
      "rgb(204, 51, 0)",
      "rgb(204, 0, 0)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC3300 <=> R=204, G=51, B=0 => rgb(204, 51, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#663333'? (Set 116) (Set 722)",
    "options": [
      "rgb(102, 0, 51)",
      "rgb(0, 0, 0)",
      "rgb(102, 51, 51)",
      "rgb(153, 51, 51)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #663333 <=> R=102, G=51, B=51 => rgb(102, 51, 51)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#0033FF'? (Set 98) (Set 723)",
    "options": [
      "rgb(0, 0, 255)",
      "rgb(0, 0, 0)",
      "rgb(51, 51, 255)",
      "rgb(0, 51, 255)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #0033FF <=> R=0, G=51, B=255 => rgb(0, 51, 255)."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 201 signal? (Set 37) (Set 521) (Set 548) (Set 724)",
    "options": [
      "Bad Request (Server cannot interpret payload syntax)",
      "OK (Request succeeded) (standard definition)",
      "No Content (Request succeeded but returns no content body)",
      "Created (Resource successfully created)"
    ],
    "answer": 3,
    "explanation": "HTTP RFC specifications correlate status 201 with 'Created (Resource successfully created)'."
  },
  {
    "subject": "FSD",
    "topic": "REST HTTP Status Codes",
    "difficulty": "Easy",
    "question": "In REST Web Service API designs, what behavior does the HTTP response status code 204 signal? (Set 46) (Set 193) (Set 725)",
    "options": [
      "Bad Request (Server cannot interpret payload syntax) by design",
      "Created (Resource successfully created) based on convention",
      "No Content (Request succeeded but returns no content body)",
      "OK (Request succeeded) in typical implementations"
    ],
    "answer": 2,
    "explanation": "HTTP RFC specifications correlate status 204 with 'No Content (Request succeeded but returns no content body)'."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#FF0099'? (Set 137) (Set 726)",
    "options": [
      "rgb(255, 0, 153)",
      "rgb(133, 255, 255)",
      "rgb(158, 255, 255)",
      "rgb(0, 0, 0)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #FF0099 <=> R=255, G=0, B=153 => rgb(255, 0, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#33FFFF'? (Set 18) (Set 115) (Set 727)",
    "options": [
      "rgb(51, 255, 255)",
      "rgb(0, 0, 0)",
      "rgb(102, 255, 255)",
      "rgb(51, 204, 255)"
    ],
    "answer": 0,
    "explanation": "Hex color values directly match RGB components: #33FFFF <=> R=51, G=255, B=255 => rgb(51, 255, 255)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#00FFCC'? (Set 728)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(0, 204, 204)",
      "rgb(51, 255, 204)",
      "rgb(0, 255, 204)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #00FFCC <=> R=0, G=255, B=204 => rgb(0, 255, 204)."
  },
  {
    "subject": "FSD",
    "topic": "FSD",
    "difficulty": "Easy",
    "question": "MERN stack consists of? (Set 574) (Set 729)",
    "options": [
      "MongoDB, Express, React, Node",
      "MySQL, Express, React, Node",
      "MongoDB, Elixir, React, Node",
      "MongoDB, Express, Redux, Node"
    ],
    "answer": 0,
    "explanation": "Top Javascript full-stack combination."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CCCC99'? (Set 730)",
    "options": [
      "rgb(0, 0, 0) by design",
      "rgb(255, 204, 153)",
      "rgb(204, 204, 153)",
      "rgb(204, 153, 153)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CCCC99 <=> R=204, G=204, B=153 => rgb(204, 204, 153)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#66CC00'? (Set 660) (Set 731)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(153, 204, 0)",
      "rgb(102, 153, 0)",
      "rgb(102, 204, 0)"
    ],
    "answer": 3,
    "explanation": "Hex color values directly match RGB components: #66CC00 <=> R=102, G=204, B=0 => rgb(102, 204, 0)."
  },
  {
    "subject": "FSD",
    "topic": "CSS Hex Colors",
    "difficulty": "Easy",
    "question": "In Web Development CSS colors styling, which RGB functional code represents color hex value '#CC3366'? (Set 732)",
    "options": [
      "rgb(0, 0, 0)",
      "rgb(255, 51, 102)",
      "rgb(204, 51, 102)",
      "rgb(204, 0, 102)"
    ],
    "answer": 2,
    "explanation": "Hex color values directly match RGB components: #CC3366 <=> R=204, G=51, B=102 => rgb(204, 51, 102)."
  }
];
