window.quizData = window.quizData || {};
window.quizData.cloud = [
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "Which cloud service model provides OS, runtime, and tools directly?",
    "options": [
      "SaaS (primary approach)",
      "PaaS (Platform as a Service)",
      "FaaS (typical scenario)",
      "IaaS (typical scenario)"
    ],
    "answer": 1,
    "explanation": "PaaS lets you run apps without managing the OS."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "AWS EC2 stands for?",
    "options": [
      "Elastic Compute Cloud",
      "Easy Compute Center",
      "Elastic Connection Cloud",
      "Extended Core Engine"
    ],
    "answer": 0,
    "explanation": "EC2 is Amazon's resizable virtual server service."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "Standard public cloud model means?",
    "options": [
      "Resources are dedicated to a single enterprise (primary approach)",
      "Resources are shared across multiple tenants over the internet",
      "Hosted on-premises only in typical implementations",
      "Private network access only in typical implementations"
    ],
    "answer": 1,
    "explanation": "Public cloud uses multi-tenant shared infrastructure."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "Docker allows you to?",
    "options": [
      "Store databases only in typical implementations",
      "Emulate full hardware with an OS in typical implementations",
      "Deploy physical servers in typical implementations",
      "Package an app with its dependencies into a lightweight container"
    ],
    "answer": 3,
    "explanation": "Containers run isolated environments sharing the host OS kernel."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "Kubernetes is used for?",
    "options": [
      "Version control (standard definition)",
      "Creating container images (typical scenario)",
      "Container orchestration and management",
      "Web development as per specification"
    ],
    "answer": 2,
    "explanation": "K8s automates deployment, scaling, and load-balancing of containers."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "AWS S3 is an example of?",
    "options": [
      "Object Storage",
      "Block Storage",
      "File System Storage",
      "Relational Database"
    ],
    "answer": 0,
    "explanation": "S3 stores flat files/folders as objects with metadata."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "What is serverless computing?",
    "options": [
      "Physical servers are deleted in typical implementations",
      "No servers are used at all in typical implementations",
      "Running code offline in typical implementations",
      "Developer writes code without worrying about server provisioning"
    ],
    "answer": 3,
    "explanation": "Cloud provider dynamically manages resource allocation and scaling."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Medium",
    "question": "Which AWS service provides load balancing across multiple targets?",
    "options": [
      "CloudTrail (commonly used)",
      "VPC under normal conditions",
      "ALB (Application Load Balancer)",
      "Route 53 (default behavior)"
    ],
    "answer": 2,
    "explanation": "ALB operates at Layer 7 to distribute HTTP/HTTPS traffic."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Medium",
    "question": "What is the scope of a VPC (Virtual Private Cloud)?",
    "options": [
      "An encryption service in typical implementations",
      "A physical storage array in typical implementations",
      "A database instance in typical implementations",
      "A logically isolated virtual network within an AWS account"
    ],
    "answer": 3,
    "explanation": "VPC allows securing and provisioning a private network."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Medium",
    "question": "What does Auto Scaling do?",
    "options": [
      "Speeds up connection latency in typical implementations",
      "Optimizes query performance in typical implementations",
      "Dynamically adjusts the number of EC2 instances based on load",
      "Resizes databases automatically under normal conditions"
    ],
    "answer": 2,
    "explanation": "Ensures application has enough resources to handle target load."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "What is IaaS (Infrastructure as a Service)?",
    "options": [
      "Provides virtualized computing resources (VMs, storage, networks)",
      "Provides only database access in typical implementations",
      "Provides code execution environments without servers in practice",
      "Provides ready-to-run business applications under normal conditions"
    ],
    "answer": 0,
    "explanation": "Examples: AWS EC2, GCP Compute Engine."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "What is SaaS (Software as a Service)?",
    "options": [
      "Database servers in typical implementations",
      "Code execution runtimes in typical implementations",
      "End-user applications hosted and managed by a provider",
      "Virtual servers in typical implementations"
    ],
    "answer": 2,
    "explanation": "Examples: Gmail, Office 365, Salesforce."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Easy",
    "question": "What is hybrid cloud deployment?",
    "options": [
      "Offline storage only in typical implementations",
      "Using physical servers only in typical implementations",
      "Combining public cloud with private cloud/on-premises infrastructure",
      "Using multiple public clouds in typical implementations"
    ],
    "answer": 2,
    "explanation": "Allows keeping critical data private while using public cloud scale."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Medium",
    "question": "What is the AWS Shared Responsibility Model?",
    "options": [
      "AWS handles application code debugging based on convention",
      "Both manage everything together in typical implementations",
      "AWS secures the infrastructure; customer secures data and access",
      "Customer is responsible for physical host security based on convention"
    ],
    "answer": 2,
    "explanation": "Clear demarcation of cloud provider vs customer responsibilities."
  },
  {
    "subject": "Cloud",
    "topic": "Cloud",
    "difficulty": "Medium",
    "question": "Infrastructure as Code (IaC) is represented by?",
    "options": [
      "Kubernetes based on convention",
      "Terraform / AWS CloudFormation",
      "Docker in standard usage",
      "Git as per specification"
    ],
    "answer": 1,
    "explanation": "IaC provisions resources using configuration files."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 5 running instances and a desired capacity of 9. How many instances will be launched?",
    "options": [
      "6 new instances",
      "3 new instances",
      "8 new instances",
      "4 new instances"
    ],
    "answer": 3,
    "explanation": "9 desired - 5 running = 4 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "AWS Regions",
    "difficulty": "Easy",
    "question": "Which geographic location does the AWS region code 'ap-southeast-1' correspond to?",
    "options": [
      "Singapore region",
      "N. Virginia region",
      "Oregon region",
      "Ireland region"
    ],
    "answer": 0,
    "explanation": "ap-southeast-1 is the Singapore region."
  },
  {
    "subject": "Cloud",
    "topic": "Compute Instances",
    "difficulty": "Medium",
    "question": "What are the default specifications of an AWS p3.2xlarge instance type?",
    "options": [
      "8 vCPU, 61 GB RAM",
      "2 vCPU, 8 GB RAM",
      "2 vCPU, 4 GB RAM",
      "1 vCPU, 1 GB RAM"
    ],
    "answer": 0,
    "explanation": "AWS p3.2xlarge provides 8 vCPU, 61 GB RAM."
  },
  {
    "subject": "Cloud",
    "topic": "SLA Calculations",
    "difficulty": "Medium",
    "question": "A cloud provider guarantees 99.999% uptime SLA. What is the maximum allowed annual downtime?",
    "options": [
      "52.56 minutes per year",
      "365.25 minutes per year",
      "8.76 hours per year",
      "5.26 minutes per year"
    ],
    "answer": 3,
    "explanation": "99.999% uptime allows 5.26 minutes per year of downtime."
  },
  {
    "subject": "Cloud",
    "topic": "SLA Calculations",
    "difficulty": "Medium",
    "question": "A cloud provider guarantees 99.9% uptime SLA. What is the maximum allowed annual downtime?",
    "options": [
      "5.26 minutes per year",
      "52.56 minutes per year",
      "8.76 hours per year",
      "365.25 minutes per year"
    ],
    "answer": 2,
    "explanation": "99.9% uptime allows 8.76 hours per year of downtime."
  },
  {
    "subject": "Cloud",
    "topic": "AWS Regions",
    "difficulty": "Easy",
    "question": "Which geographic location does the AWS region code 'ap-south-1' correspond to?",
    "options": [
      "Mumbai region",
      "Ireland region",
      "N. Virginia region",
      "Oregon region"
    ],
    "answer": 0,
    "explanation": "ap-south-1 is the Mumbai region."
  },
  {
    "subject": "Cloud",
    "topic": "Compute Instances",
    "difficulty": "Medium",
    "question": "What are the default specifications of an AWS t2.micro instance type?",
    "options": [
      "2 vCPU, 4 GB RAM",
      "1 vCPU, 1 GB RAM",
      "2 vCPU, 8 GB RAM",
      "4 vCPU, 8 GB RAM"
    ],
    "answer": 1,
    "explanation": "AWS t2.micro provides 1 vCPU, 1 GB RAM."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 355 hours at $0.173/hour. What is the total on-demand compute cost?",
    "options": [
      "$76.91",
      "$36.85",
      "$103.41",
      "$61.41"
    ],
    "answer": 3,
    "explanation": "355 × $0.173 = $61.41."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 4 running instances and a desired capacity of 10. How many instances will be launched?",
    "options": [
      "6 new instances",
      "8 new instances",
      "5 new instances",
      "12 new instances"
    ],
    "answer": 0,
    "explanation": "10 desired - 4 running = 6 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "AWS Regions",
    "difficulty": "Easy",
    "question": "Which geographic location does the AWS region code 'eu-west-1' correspond to?",
    "options": [
      "Ireland region",
      "N. Virginia region",
      "Oregon region",
      "Mumbai region"
    ],
    "answer": 0,
    "explanation": "eu-west-1 is the Ireland region."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 435 hours at $0.127/hour. What is the total on-demand compute cost?",
    "options": [
      "$33.14",
      "$97.24",
      "$70.74",
      "$55.24"
    ],
    "answer": 3,
    "explanation": "435 × $0.127 = $55.24."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 363 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$23.53",
      "$18.32",
      "$10.97",
      "$13.07"
    ],
    "answer": 3,
    "explanation": "363 × $0.036 = $13.07 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 337 hours at $0.111/hour. What is the total on-demand compute cost?",
    "options": [
      "$37.41",
      "$79.41",
      "$52.91",
      "$22.45"
    ],
    "answer": 0,
    "explanation": "337 × $0.111 = $37.41."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 685 hours at $0.345/hour. What is the total on-demand compute cost?",
    "options": [
      "$236.32",
      "$278.32",
      "$251.82",
      "$141.79"
    ],
    "answer": 0,
    "explanation": "685 × $0.345 = $236.32."
  },
  {
    "subject": "Cloud",
    "topic": "Compute Instances",
    "difficulty": "Medium",
    "question": "What are the default specifications of an AWS c5.xlarge instance type?",
    "options": [
      "2 vCPU, 8 GB RAM",
      "2 vCPU, 4 GB RAM",
      "4 vCPU, 8 GB RAM",
      "1 vCPU, 1 GB RAM"
    ],
    "answer": 2,
    "explanation": "AWS c5.xlarge provides 4 vCPU, 8 GB RAM."
  },
  {
    "subject": "Cloud",
    "topic": "AWS Regions",
    "difficulty": "Easy",
    "question": "Which geographic location does the AWS region code 'us-east-1' correspond to?",
    "options": [
      "N. Virginia region",
      "Ireland region",
      "Oregon region",
      "Mumbai region"
    ],
    "answer": 0,
    "explanation": "us-east-1 is the N. Virginia region."
  },
  {
    "subject": "Cloud",
    "topic": "SLA Calculations",
    "difficulty": "Medium",
    "question": "A cloud provider guarantees 99.99% uptime SLA. What is the maximum allowed annual downtime?",
    "options": [
      "52.56 minutes per year",
      "365.25 minutes per year",
      "8.76 hours per year",
      "5.26 minutes per year"
    ],
    "answer": 0,
    "explanation": "99.99% uptime allows 52.56 minutes per year of downtime."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 455 hours at $0.365/hour. What is the total on-demand compute cost?",
    "options": [
      "$166.07",
      "$208.07",
      "$99.64",
      "$181.57"
    ],
    "answer": 0,
    "explanation": "455 × $0.365 = $166.07."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 4 running instances and a desired capacity of 9. How many instances will be launched?",
    "options": [
      "10 new instances",
      "7 new instances",
      "4 new instances",
      "5 new instances"
    ],
    "answer": 3,
    "explanation": "9 desired - 4 running = 5 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 302 hours at $0.121/hour. What is the total on-demand compute cost?",
    "options": [
      "$78.54",
      "$21.92",
      "$52.04",
      "$36.54"
    ],
    "answer": 3,
    "explanation": "302 × $0.121 = $36.54."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 3 running instances and a desired capacity of 9. How many instances will be launched?",
    "options": [
      "12 new instances",
      "6 new instances",
      "8 new instances",
      "5 new instances"
    ],
    "answer": 1,
    "explanation": "9 desired - 3 running = 6 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Compute Instances",
    "difficulty": "Medium",
    "question": "What are the default specifications of an AWS t3.medium instance type?",
    "options": [
      "4 vCPU, 8 GB RAM",
      "2 vCPU, 4 GB RAM",
      "1 vCPU, 1 GB RAM",
      "2 vCPU, 8 GB RAM"
    ],
    "answer": 1,
    "explanation": "AWS t3.medium provides 2 vCPU, 4 GB RAM."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 747 hours at $0.393/hour. What is the total on-demand compute cost?",
    "options": [
      "$293.57",
      "$176.14",
      "$335.57",
      "$309.07"
    ],
    "answer": 0,
    "explanation": "747 × $0.393 = $293.57."
  },
  {
    "subject": "Cloud",
    "topic": "Compute Instances",
    "difficulty": "Medium",
    "question": "What are the default specifications of an AWS r5.large instance type?",
    "options": [
      "2 vCPU, 16 GB RAM",
      "2 vCPU, 4 GB RAM",
      "2 vCPU, 8 GB RAM",
      "1 vCPU, 1 GB RAM"
    ],
    "answer": 0,
    "explanation": "AWS r5.large provides 2 vCPU, 16 GB RAM."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 468 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$3.52",
      "$5.62",
      "$10.87",
      "$10.12"
    ],
    "answer": 1,
    "explanation": "468 × $0.012 = $5.62 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Compute Instances",
    "difficulty": "Medium",
    "question": "What are the default specifications of an AWS m5.large instance type?",
    "options": [
      "2 vCPU, 8 GB RAM",
      "4 vCPU, 8 GB RAM",
      "2 vCPU, 4 GB RAM",
      "1 vCPU, 1 GB RAM"
    ],
    "answer": 0,
    "explanation": "AWS m5.large provides 2 vCPU, 8 GB RAM."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 440 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$22.10",
      "$29.45",
      "$43.56",
      "$24.20"
    ],
    "answer": 3,
    "explanation": "440 × $0.055 = $24.20 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 460 hours at $0.214/hour. What is the total on-demand compute cost?",
    "options": [
      "$140.44",
      "$98.44",
      "$113.94",
      "$59.06"
    ],
    "answer": 1,
    "explanation": "460 × $0.214 = $98.44."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 385 hours at $0.289/hour. What is the total on-demand compute cost?",
    "options": [
      "$66.76",
      "$111.26",
      "$153.26",
      "$126.76"
    ],
    "answer": 1,
    "explanation": "385 × $0.289 = $111.26."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 2 running instances and a desired capacity of 8. How many instances will be launched?",
    "options": [
      "12 new instances",
      "6 new instances",
      "8 new instances",
      "5 new instances"
    ],
    "answer": 1,
    "explanation": "8 desired - 2 running = 6 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 591 hours at $0.240/hour. What is the total on-demand compute cost?",
    "options": [
      "$183.84",
      "$157.34",
      "$85.10",
      "$141.84"
    ],
    "answer": 3,
    "explanation": "591 × $0.240 = $141.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 396 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$23.07",
      "$15.72",
      "$17.82",
      "$32.08"
    ],
    "answer": 2,
    "explanation": "396 × $0.045 = $17.82 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 5 running instances and a desired capacity of 7. How many instances will be launched?",
    "options": [
      "2 new instances",
      "4 new instances",
      "4 new instances",
      "1 new instances"
    ],
    "answer": 0,
    "explanation": "7 desired - 5 running = 2 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 228 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$9.53",
      "$20.93",
      "$11.63",
      "$16.88"
    ],
    "answer": 2,
    "explanation": "228 × $0.051 = $11.63 per month."
  },
  {
    "subject": "Cloud",
    "topic": "AWS Regions",
    "difficulty": "Easy",
    "question": "Which geographic location does the AWS region code 'us-west-2' correspond to?",
    "options": [
      "Mumbai region",
      "Ireland region",
      "N. Virginia region",
      "Oregon region"
    ],
    "answer": 3,
    "explanation": "us-west-2 is the Oregon region."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 190 GB in S3 Standard at $0.026/GB/month costs how much monthly?",
    "options": [
      "$2.84",
      "$4.94",
      "$10.19",
      "$8.89"
    ],
    "answer": 1,
    "explanation": "190 × $0.026 = $4.94 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 5 running instances and a desired capacity of 8. How many instances will be launched?",
    "options": [
      "5 new instances",
      "3 new instances",
      "6 new instances",
      "2 new instances"
    ],
    "answer": 1,
    "explanation": "8 desired - 5 running = 3 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 449 GB in S3 Standard at $0.021/GB/month costs how much monthly?",
    "options": [
      "$9.43",
      "$16.97",
      "$14.68",
      "$7.33"
    ],
    "answer": 0,
    "explanation": "449 × $0.021 = $9.43 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 4 running instances and a desired capacity of 6. How many instances will be launched?",
    "options": [
      "4 new instances",
      "2 new instances",
      "4 new instances",
      "1 new instances"
    ],
    "answer": 1,
    "explanation": "6 desired - 4 running = 2 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "AWS Regions",
    "difficulty": "Easy",
    "question": "Which geographic location does the AWS region code 'eu-central-1' correspond to?",
    "options": [
      "Oregon region",
      "Ireland region",
      "N. Virginia region",
      "Frankfurt region"
    ],
    "answer": 3,
    "explanation": "eu-central-1 is the Frankfurt region."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 510 GB in S3 Standard at $0.026/GB/month costs how much monthly?",
    "options": [
      "$13.26",
      "$18.51",
      "$11.16",
      "$23.87"
    ],
    "answer": 0,
    "explanation": "510 × $0.026 = $13.26 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 411 hours at $0.435/hour. What is the total on-demand compute cost?",
    "options": [
      "$220.78",
      "$194.28",
      "$107.27",
      "$178.78"
    ],
    "answer": 3,
    "explanation": "411 × $0.435 = $178.78."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 2 running instances and a desired capacity of 7. How many instances will be launched?",
    "options": [
      "5 new instances",
      "4 new instances",
      "10 new instances",
      "7 new instances"
    ],
    "answer": 0,
    "explanation": "7 desired - 2 running = 5 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 751 hours at $0.278/hour. What is the total on-demand compute cost?",
    "options": [
      "$250.78",
      "$208.78",
      "$125.27",
      "$224.28"
    ],
    "answer": 1,
    "explanation": "751 × $0.278 = $208.78."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 223 hours at $0.444/hour. What is the total on-demand compute cost?",
    "options": [
      "$99.01",
      "$114.51",
      "$59.41",
      "$141.01"
    ],
    "answer": 0,
    "explanation": "223 × $0.444 = $99.01."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 3 running instances and a desired capacity of 6. How many instances will be launched?",
    "options": [
      "5 new instances",
      "3 new instances",
      "2 new instances",
      "6 new instances"
    ],
    "answer": 1,
    "explanation": "6 desired - 3 running = 3 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 739 hours at $0.222/hour. What is the total on-demand compute cost?",
    "options": [
      "$179.56",
      "$164.06",
      "$98.44",
      "$206.06"
    ],
    "answer": 1,
    "explanation": "739 × $0.222 = $164.06."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 531 GB in S3 Standard at $0.028/GB/month costs how much monthly?",
    "options": [
      "$20.12",
      "$14.87",
      "$12.77",
      "$26.77"
    ],
    "answer": 1,
    "explanation": "531 × $0.028 = $14.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 520 hours at $0.184/hour. What is the total on-demand compute cost?",
    "options": [
      "$137.68",
      "$95.68",
      "$57.41",
      "$111.18"
    ],
    "answer": 1,
    "explanation": "520 × $0.184 = $95.68."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 722 hours at $0.317/hour. What is the total on-demand compute cost?",
    "options": [
      "$228.87",
      "$137.32",
      "$270.87",
      "$244.37"
    ],
    "answer": 0,
    "explanation": "722 × $0.317 = $228.87."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 369 hours at $0.205/hour. What is the total on-demand compute cost?",
    "options": [
      "$91.14",
      "$117.64",
      "$45.38",
      "$75.64"
    ],
    "answer": 3,
    "explanation": "369 × $0.205 = $75.64."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 678 hours at $0.143/hour. What is the total on-demand compute cost?",
    "options": [
      "$112.45",
      "$138.95",
      "$96.95",
      "$58.17"
    ],
    "answer": 2,
    "explanation": "678 × $0.143 = $96.95."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 553 hours at $0.518/hour. What is the total on-demand compute cost?",
    "options": [
      "$328.45",
      "$301.95",
      "$171.87",
      "$286.45"
    ],
    "answer": 3,
    "explanation": "553 × $0.518 = $286.45."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 477 hours at $0.508/hour. What is the total on-demand compute cost?",
    "options": [
      "$257.82",
      "$284.32",
      "$145.39",
      "$242.32"
    ],
    "answer": 3,
    "explanation": "477 × $0.508 = $242.32."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 491 GB in S3 Standard at $0.041/GB/month costs how much monthly?",
    "options": [
      "$25.38",
      "$20.13",
      "$36.23",
      "$18.03"
    ],
    "answer": 1,
    "explanation": "491 × $0.041 = $20.13 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 393 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$24.77",
      "$19.01",
      "$11.66",
      "$13.76"
    ],
    "answer": 3,
    "explanation": "393 × $0.035 = $13.76 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 97 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$10.39",
      "$3.04",
      "$5.14",
      "$9.25"
    ],
    "answer": 2,
    "explanation": "97 × $0.053 = $5.14 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 2 running instances and a desired capacity of 5. How many instances will be launched?",
    "options": [
      "6 new instances",
      "3 new instances",
      "2 new instances",
      "5 new instances"
    ],
    "answer": 1,
    "explanation": "5 desired - 2 running = 3 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 3 running instances and a desired capacity of 5. How many instances will be launched?",
    "options": [
      "4 new instances",
      "1 new instances",
      "4 new instances",
      "2 new instances"
    ],
    "answer": 3,
    "explanation": "5 desired - 3 running = 2 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 240 hours at $0.429/hour. What is the total on-demand compute cost?",
    "options": [
      "$102.96",
      "$118.46",
      "$144.96",
      "$61.78"
    ],
    "answer": 0,
    "explanation": "240 × $0.429 = $102.96."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 133 hours at $0.521/hour. What is the total on-demand compute cost?",
    "options": [
      "$84.79",
      "$69.29",
      "$41.57",
      "$111.29"
    ],
    "answer": 1,
    "explanation": "133 × $0.521 = $69.29."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 102 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$4.95",
      "$0.65",
      "$2.75",
      "$8.00"
    ],
    "answer": 2,
    "explanation": "102 × $0.027 = $2.75 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 241 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$2.65",
      "$0.55",
      "$4.77",
      "$7.90"
    ],
    "answer": 0,
    "explanation": "241 × $0.011 = $2.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 126 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$7.31",
      "$12.56",
      "$5.21",
      "$13.16"
    ],
    "answer": 0,
    "explanation": "126 × $0.058 = $7.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 713 hours at $0.084/hour. What is the total on-demand compute cost?",
    "options": [
      "$101.89",
      "$75.39",
      "$35.93",
      "$59.89"
    ],
    "answer": 3,
    "explanation": "713 × $0.084 = $59.89."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 5 running instances and a desired capacity of 10. How many instances will be launched?",
    "options": [
      "4 new instances",
      "7 new instances",
      "5 new instances",
      "10 new instances"
    ],
    "answer": 2,
    "explanation": "10 desired - 5 running = 5 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 406 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$23.38",
      "$10.89",
      "$18.24",
      "$12.99"
    ],
    "answer": 3,
    "explanation": "406 × $0.032 = $12.99 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 706 hours at $0.283/hour. What is the total on-demand compute cost?",
    "options": [
      "$241.80",
      "$215.30",
      "$119.88",
      "$199.80"
    ],
    "answer": 3,
    "explanation": "706 × $0.283 = $199.80."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 279 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$13.90",
      "$15.57",
      "$8.65",
      "$6.55"
    ],
    "answer": 2,
    "explanation": "279 × $0.031 = $8.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 171 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$4.30",
      "$0.29",
      "$7.64",
      "$2.39"
    ],
    "answer": 3,
    "explanation": "171 × $0.014 = $2.39 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 242 hours at $0.098/hour. What is the total on-demand compute cost?",
    "options": [
      "$14.23",
      "$23.72",
      "$65.72",
      "$39.22"
    ],
    "answer": 1,
    "explanation": "242 × $0.098 = $23.72."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 536 hours at $0.491/hour. What is the total on-demand compute cost?",
    "options": [
      "$157.91",
      "$263.18",
      "$305.18",
      "$278.68"
    ],
    "answer": 1,
    "explanation": "536 × $0.491 = $263.18."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 2 running instances and a desired capacity of 9. How many instances will be launched?",
    "options": [
      "6 new instances",
      "14 new instances",
      "7 new instances",
      "9 new instances"
    ],
    "answer": 2,
    "explanation": "9 desired - 2 running = 7 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 378 hours at $0.148/hour. What is the total on-demand compute cost?",
    "options": [
      "$71.44",
      "$55.94",
      "$33.56",
      "$97.94"
    ],
    "answer": 1,
    "explanation": "378 × $0.148 = $55.94."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 425 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$35.19",
      "$19.55",
      "$17.45",
      "$24.80"
    ],
    "answer": 1,
    "explanation": "425 × $0.046 = $19.55 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 521 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$10.31",
      "$3.63",
      "$10.98",
      "$5.73"
    ],
    "answer": 3,
    "explanation": "521 × $0.011 = $5.73 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 359 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$27.79",
      "$15.44",
      "$20.69",
      "$13.34"
    ],
    "answer": 1,
    "explanation": "359 × $0.043 = $15.44 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 515 hours at $0.298/hour. What is the total on-demand compute cost?",
    "options": [
      "$153.47",
      "$195.47",
      "$92.08",
      "$168.97"
    ],
    "answer": 0,
    "explanation": "515 × $0.298 = $153.47."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 632 hours at $0.194/hour. What is the total on-demand compute cost?",
    "options": [
      "$138.11",
      "$122.61",
      "$164.61",
      "$73.57"
    ],
    "answer": 1,
    "explanation": "632 × $0.194 = $122.61."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 229 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$2.52",
      "$4.54",
      "$7.77",
      "$0.42"
    ],
    "answer": 0,
    "explanation": "229 × $0.011 = $2.52 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 511 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$52.43",
      "$29.13",
      "$27.03",
      "$34.38"
    ],
    "answer": 1,
    "explanation": "511 × $0.057 = $29.13 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 5 running instances and a desired capacity of 12. How many instances will be launched?",
    "options": [
      "9 new instances",
      "6 new instances",
      "14 new instances",
      "7 new instances"
    ],
    "answer": 3,
    "explanation": "12 desired - 5 running = 7 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 287 hours at $0.376/hour. What is the total on-demand compute cost?",
    "options": [
      "$107.91",
      "$64.75",
      "$149.91",
      "$123.41"
    ],
    "answer": 0,
    "explanation": "287 × $0.376 = $107.91."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 678 hours at $0.128/hour. What is the total on-demand compute cost?",
    "options": [
      "$52.07",
      "$86.78",
      "$128.78",
      "$102.28"
    ],
    "answer": 1,
    "explanation": "678 × $0.128 = $86.78."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 691 hours at $0.180/hour. What is the total on-demand compute cost?",
    "options": [
      "$166.38",
      "$139.88",
      "$124.38",
      "$74.63"
    ],
    "answer": 2,
    "explanation": "691 × $0.180 = $124.38."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 457 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$14.17",
      "$19.42",
      "$12.07",
      "$25.51"
    ],
    "answer": 0,
    "explanation": "457 × $0.031 = $14.17 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 3 running instances and a desired capacity of 7. How many instances will be launched?",
    "options": [
      "3 new instances",
      "8 new instances",
      "4 new instances",
      "6 new instances"
    ],
    "answer": 2,
    "explanation": "7 desired - 3 running = 4 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 232 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$15.46",
      "$10.21",
      "$8.11",
      "$18.38"
    ],
    "answer": 1,
    "explanation": "232 × $0.044 = $10.21 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 666 hours at $0.242/hour. What is the total on-demand compute cost?",
    "options": [
      "$203.17",
      "$161.17",
      "$176.67",
      "$96.70"
    ],
    "answer": 1,
    "explanation": "666 × $0.242 = $161.17."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 191 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$6.30",
      "$13.65",
      "$8.40",
      "$15.12"
    ],
    "answer": 2,
    "explanation": "191 × $0.044 = $8.40 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 352 hours at $0.444/hour. What is the total on-demand compute cost?",
    "options": [
      "$171.79",
      "$156.29",
      "$198.29",
      "$93.77"
    ],
    "answer": 1,
    "explanation": "352 × $0.444 = $156.29."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 98 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$2.90",
      "$10.25",
      "$5.00",
      "$9.00"
    ],
    "answer": 2,
    "explanation": "98 × $0.051 = $5.00 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 553 hours at $0.411/hour. What is the total on-demand compute cost?",
    "options": [
      "$269.28",
      "$136.37",
      "$242.78",
      "$227.28"
    ],
    "answer": 3,
    "explanation": "553 × $0.411 = $227.28."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 724 hours at $0.359/hour. What is the total on-demand compute cost?",
    "options": [
      "$275.42",
      "$155.95",
      "$259.92",
      "$301.92"
    ],
    "answer": 2,
    "explanation": "724 × $0.359 = $259.92."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 759 hours at $0.160/hour. What is the total on-demand compute cost?",
    "options": [
      "$163.44",
      "$72.86",
      "$121.44",
      "$136.94"
    ],
    "answer": 2,
    "explanation": "759 × $0.160 = $121.44."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 2 running instances and a desired capacity of 6. How many instances will be launched?",
    "options": [
      "4 new instances",
      "8 new instances",
      "3 new instances",
      "6 new instances"
    ],
    "answer": 0,
    "explanation": "6 desired - 2 running = 4 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 113 hours at $0.242/hour. What is the total on-demand compute cost?",
    "options": [
      "$27.35",
      "$69.35",
      "$16.41",
      "$42.85"
    ],
    "answer": 0,
    "explanation": "113 × $0.242 = $27.35."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 278 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$16.02",
      "$6.80",
      "$8.90",
      "$14.15"
    ],
    "answer": 2,
    "explanation": "278 × $0.032 = $8.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 232 hours at $0.461/hour. What is the total on-demand compute cost?",
    "options": [
      "$122.45",
      "$148.95",
      "$64.17",
      "$106.95"
    ],
    "answer": 3,
    "explanation": "232 × $0.461 = $106.95."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 421 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$13.67",
      "$15.16",
      "$8.42",
      "$6.32"
    ],
    "answer": 2,
    "explanation": "421 × $0.020 = $8.42 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 393 hours at $0.311/hour. What is the total on-demand compute cost?",
    "options": [
      "$122.22",
      "$137.72",
      "$164.22",
      "$73.33"
    ],
    "answer": 0,
    "explanation": "393 × $0.311 = $122.22."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 526 hours at $0.541/hour. What is the total on-demand compute cost?",
    "options": [
      "$284.57",
      "$326.57",
      "$170.74",
      "$300.07"
    ],
    "answer": 0,
    "explanation": "526 × $0.541 = $284.57."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 273 hours at $0.160/hour. What is the total on-demand compute cost?",
    "options": [
      "$43.68",
      "$85.68",
      "$26.21",
      "$59.18"
    ],
    "answer": 0,
    "explanation": "273 × $0.160 = $43.68."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 385 hours at $0.479/hour. What is the total on-demand compute cost?",
    "options": [
      "$199.91",
      "$110.65",
      "$226.41",
      "$184.41"
    ],
    "answer": 3,
    "explanation": "385 × $0.479 = $184.41."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 83 GB in S3 Standard at $0.059/GB/month costs how much monthly?",
    "options": [
      "$10.15",
      "$2.80",
      "$4.90",
      "$8.82"
    ],
    "answer": 2,
    "explanation": "83 × $0.059 = $4.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 82 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$8.69",
      "$1.34",
      "$6.19",
      "$3.44"
    ],
    "answer": 3,
    "explanation": "82 × $0.042 = $3.44 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 388 hours at $0.497/hour. What is the total on-demand compute cost?",
    "options": [
      "$234.84",
      "$208.34",
      "$192.84",
      "$115.70"
    ],
    "answer": 2,
    "explanation": "388 × $0.497 = $192.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 540 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$12.64",
      "$7.02",
      "$12.27",
      "$4.92"
    ],
    "answer": 1,
    "explanation": "540 × $0.013 = $7.02 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 153 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$5.70",
      "$7.80",
      "$13.05",
      "$14.04"
    ],
    "answer": 1,
    "explanation": "153 × $0.051 = $7.80 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 511 hours at $0.471/hour. What is the total on-demand compute cost?",
    "options": [
      "$240.68",
      "$282.68",
      "$144.41",
      "$256.18"
    ],
    "answer": 0,
    "explanation": "511 × $0.471 = $240.68."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 93 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$2.70",
      "$4.86",
      "$0.60",
      "$7.95"
    ],
    "answer": 0,
    "explanation": "93 × $0.029 = $2.70 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 142 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$1.73",
      "$6.89",
      "$9.08",
      "$3.83"
    ],
    "answer": 3,
    "explanation": "142 × $0.027 = $3.83 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 535 hours at $0.422/hour. What is the total on-demand compute cost?",
    "options": [
      "$225.77",
      "$135.46",
      "$241.27",
      "$267.77"
    ],
    "answer": 0,
    "explanation": "535 × $0.422 = $225.77."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 114 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$8.10",
      "$2.85",
      "$0.75",
      "$5.13"
    ],
    "answer": 1,
    "explanation": "114 × $0.025 = $2.85 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 2 running instances and a desired capacity of 4. How many instances will be launched?",
    "options": [
      "1 new instances",
      "4 new instances",
      "4 new instances",
      "2 new instances"
    ],
    "answer": 3,
    "explanation": "4 desired - 2 running = 2 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 345 hours at $0.202/hour. What is the total on-demand compute cost?",
    "options": [
      "$111.69",
      "$69.69",
      "$85.19",
      "$41.81"
    ],
    "answer": 1,
    "explanation": "345 × $0.202 = $69.69."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 414 hours at $0.372/hour. What is the total on-demand compute cost?",
    "options": [
      "$196.01",
      "$92.41",
      "$169.51",
      "$154.01"
    ],
    "answer": 3,
    "explanation": "414 × $0.372 = $154.01."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 406 hours at $0.442/hour. What is the total on-demand compute cost?",
    "options": [
      "$107.67",
      "$194.95",
      "$221.45",
      "$179.45"
    ],
    "answer": 3,
    "explanation": "406 × $0.442 = $179.45."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 188 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$5.45",
      "$9.81",
      "$10.70",
      "$3.35"
    ],
    "answer": 0,
    "explanation": "188 × $0.029 = $5.45 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 4 running instances and a desired capacity of 8. How many instances will be launched?",
    "options": [
      "8 new instances",
      "6 new instances",
      "4 new instances",
      "3 new instances"
    ],
    "answer": 2,
    "explanation": "8 desired - 4 running = 4 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 4 running instances and a desired capacity of 7. How many instances will be launched?",
    "options": [
      "6 new instances",
      "3 new instances",
      "5 new instances",
      "2 new instances"
    ],
    "answer": 1,
    "explanation": "7 desired - 4 running = 3 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 195 GB in S3 Standard at $0.060/GB/month costs how much monthly?",
    "options": [
      "$16.95",
      "$9.60",
      "$11.70",
      "$21.06"
    ],
    "answer": 2,
    "explanation": "195 × $0.060 = $11.70 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 85 GB in S3 Standard at $0.039/GB/month costs how much monthly?",
    "options": [
      "$8.56",
      "$1.21",
      "$5.96",
      "$3.31"
    ],
    "answer": 3,
    "explanation": "85 × $0.039 = $3.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 759 hours at $0.089/hour. What is the total on-demand compute cost?",
    "options": [
      "$109.55",
      "$40.53",
      "$67.55",
      "$83.05"
    ],
    "answer": 2,
    "explanation": "759 × $0.089 = $67.55."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 137 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$5.85",
      "$14.31",
      "$13.20",
      "$7.95"
    ],
    "answer": 3,
    "explanation": "137 × $0.058 = $7.95 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 383 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$2.11",
      "$9.46",
      "$7.58",
      "$4.21"
    ],
    "answer": 3,
    "explanation": "383 × $0.011 = $4.21 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 455 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$10.66",
      "$3.82",
      "$5.92",
      "$11.17"
    ],
    "answer": 2,
    "explanation": "455 × $0.013 = $5.92 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 380 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$13.61",
      "$15.05",
      "$8.36",
      "$6.26"
    ],
    "answer": 2,
    "explanation": "380 × $0.022 = $8.36 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 223 hours at $0.060/hour. What is the total on-demand compute cost?",
    "options": [
      "$55.38",
      "$8.03",
      "$28.88",
      "$13.38"
    ],
    "answer": 3,
    "explanation": "223 × $0.060 = $13.38."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 3 running instances and a desired capacity of 10. How many instances will be launched?",
    "options": [
      "14 new instances",
      "7 new instances",
      "6 new instances",
      "9 new instances"
    ],
    "answer": 1,
    "explanation": "10 desired - 3 running = 7 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 196 hours at $0.163/hour. What is the total on-demand compute cost?",
    "options": [
      "$47.45",
      "$31.95",
      "$73.95",
      "$19.17"
    ],
    "answer": 1,
    "explanation": "196 × $0.163 = $31.95."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 207 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$12.29",
      "$12.67",
      "$4.94",
      "$7.04"
    ],
    "answer": 3,
    "explanation": "207 × $0.034 = $7.04 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 688 hours at $0.477/hour. What is the total on-demand compute cost?",
    "options": [
      "$328.18",
      "$370.18",
      "$196.91",
      "$343.68"
    ],
    "answer": 0,
    "explanation": "688 × $0.477 = $328.18."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 426 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$14.48",
      "$26.06",
      "$19.73",
      "$12.38"
    ],
    "answer": 0,
    "explanation": "426 × $0.034 = $14.48 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 484 hours at $0.437/hour. What is the total on-demand compute cost?",
    "options": [
      "$253.51",
      "$211.51",
      "$126.91",
      "$227.01"
    ],
    "answer": 1,
    "explanation": "484 × $0.437 = $211.51."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 402 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$2.32",
      "$7.96",
      "$4.42",
      "$9.67"
    ],
    "answer": 2,
    "explanation": "402 × $0.011 = $4.42 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 4 running instances and a desired capacity of 11. How many instances will be launched?",
    "options": [
      "7 new instances",
      "14 new instances",
      "9 new instances",
      "6 new instances"
    ],
    "answer": 0,
    "explanation": "11 desired - 4 running = 7 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 486 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$13.12",
      "$12.54",
      "$7.29",
      "$5.19"
    ],
    "answer": 2,
    "explanation": "486 × $0.015 = $7.29 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 293 hours at $0.110/hour. What is the total on-demand compute cost?",
    "options": [
      "$19.34",
      "$47.73",
      "$32.23",
      "$74.23"
    ],
    "answer": 2,
    "explanation": "293 × $0.110 = $32.23."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 721 hours at $0.243/hour. What is the total on-demand compute cost?",
    "options": [
      "$190.70",
      "$217.20",
      "$175.20",
      "$105.12"
    ],
    "answer": 2,
    "explanation": "721 × $0.243 = $175.20."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 519 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$23.93",
      "$33.62",
      "$18.68",
      "$16.58"
    ],
    "answer": 2,
    "explanation": "519 × $0.036 = $18.68 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 218 hours at $0.174/hour. What is the total on-demand compute cost?",
    "options": [
      "$22.76",
      "$79.93",
      "$37.93",
      "$53.43"
    ],
    "answer": 2,
    "explanation": "218 × $0.174 = $37.93."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 408 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$16.67",
      "$33.79",
      "$18.77",
      "$24.02"
    ],
    "answer": 2,
    "explanation": "408 × $0.046 = $18.77 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 237 GB in S3 Standard at $0.039/GB/month costs how much monthly?",
    "options": [
      "$9.24",
      "$14.49",
      "$7.14",
      "$16.63"
    ],
    "answer": 0,
    "explanation": "237 × $0.039 = $9.24 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 240 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$6.96",
      "$12.53",
      "$12.21",
      "$4.86"
    ],
    "answer": 0,
    "explanation": "240 × $0.029 = $6.96 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 232 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$8.82",
      "$14.07",
      "$6.72",
      "$15.88"
    ],
    "answer": 0,
    "explanation": "232 × $0.038 = $8.82 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 3 running instances and a desired capacity of 8. How many instances will be launched?",
    "options": [
      "5 new instances",
      "4 new instances",
      "10 new instances",
      "7 new instances"
    ],
    "answer": 0,
    "explanation": "8 desired - 3 running = 5 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 153 hours at $0.196/hour. What is the total on-demand compute cost?",
    "options": [
      "$17.99",
      "$45.49",
      "$71.99",
      "$29.99"
    ],
    "answer": 3,
    "explanation": "153 × $0.196 = $29.99."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 595 hours at $0.347/hour. What is the total on-demand compute cost?",
    "options": [
      "$123.88",
      "$206.46",
      "$248.46",
      "$221.96"
    ],
    "answer": 1,
    "explanation": "595 × $0.347 = $206.46."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 296 hours at $0.278/hour. What is the total on-demand compute cost?",
    "options": [
      "$82.29",
      "$97.79",
      "$49.37",
      "$124.29"
    ],
    "answer": 0,
    "explanation": "296 × $0.278 = $82.29."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 148 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$14.11",
      "$5.74",
      "$13.09",
      "$7.84"
    ],
    "answer": 3,
    "explanation": "148 × $0.053 = $7.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 678 hours at $0.221/hour. What is the total on-demand compute cost?",
    "options": [
      "$149.84",
      "$89.90",
      "$191.84",
      "$165.34"
    ],
    "answer": 0,
    "explanation": "678 × $0.221 = $149.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 443 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$23.15",
      "$30.50",
      "$45.45",
      "$25.25"
    ],
    "answer": 3,
    "explanation": "443 × $0.057 = $25.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 251 hours at $0.419/hour. What is the total on-demand compute cost?",
    "options": [
      "$63.10",
      "$105.17",
      "$120.67",
      "$147.17"
    ],
    "answer": 1,
    "explanation": "251 × $0.419 = $105.17."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 336 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$15.67",
      "$18.76",
      "$10.42",
      "$8.32"
    ],
    "answer": 2,
    "explanation": "336 × $0.031 = $10.42 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 418 hours at $0.144/hour. What is the total on-demand compute cost?",
    "options": [
      "$36.11",
      "$75.69",
      "$102.19",
      "$60.19"
    ],
    "answer": 3,
    "explanation": "418 × $0.144 = $60.19."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 413 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$6.16",
      "$8.26",
      "$14.87",
      "$13.51"
    ],
    "answer": 1,
    "explanation": "413 × $0.020 = $8.26 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 383 hours at $0.544/hour. What is the total on-demand compute cost?",
    "options": [
      "$125.01",
      "$208.35",
      "$250.35",
      "$223.85"
    ],
    "answer": 1,
    "explanation": "383 × $0.544 = $208.35."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 462 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$29.11",
      "$21.42",
      "$14.07",
      "$16.17"
    ],
    "answer": 3,
    "explanation": "462 × $0.035 = $16.17 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 781 hours at $0.142/hour. What is the total on-demand compute cost?",
    "options": [
      "$126.40",
      "$66.54",
      "$152.90",
      "$110.90"
    ],
    "answer": 3,
    "explanation": "781 × $0.142 = $110.90."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 158 hours at $0.285/hour. What is the total on-demand compute cost?",
    "options": [
      "$27.02",
      "$60.53",
      "$45.03",
      "$87.03"
    ],
    "answer": 2,
    "explanation": "158 × $0.285 = $45.03."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 350 hours at $0.266/hour. What is the total on-demand compute cost?",
    "options": [
      "$108.60",
      "$55.86",
      "$93.10",
      "$135.10"
    ],
    "answer": 2,
    "explanation": "350 × $0.266 = $93.10."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 609 hours at $0.477/hour. What is the total on-demand compute cost?",
    "options": [
      "$174.29",
      "$290.49",
      "$332.49",
      "$305.99"
    ],
    "answer": 1,
    "explanation": "609 × $0.477 = $290.49."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 279 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$12.28",
      "$22.10",
      "$17.53",
      "$10.18"
    ],
    "answer": 0,
    "explanation": "279 × $0.044 = $12.28 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 451 hours at $0.371/hour. What is the total on-demand compute cost?",
    "options": [
      "$100.39",
      "$182.82",
      "$209.32",
      "$167.32"
    ],
    "answer": 3,
    "explanation": "451 × $0.371 = $167.32."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 137 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$2.60",
      "$0.50",
      "$4.68",
      "$7.85"
    ],
    "answer": 0,
    "explanation": "137 × $0.019 = $2.60 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 307 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$16.92",
      "$11.67",
      "$9.57",
      "$21.01"
    ],
    "answer": 1,
    "explanation": "307 × $0.038 = $11.67 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 680 hours at $0.274/hour. What is the total on-demand compute cost?",
    "options": [
      "$201.82",
      "$228.32",
      "$111.79",
      "$186.32"
    ],
    "answer": 3,
    "explanation": "680 × $0.274 = $186.32."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 580 hours at $0.074/hour. What is the total on-demand compute cost?",
    "options": [
      "$42.92",
      "$84.92",
      "$25.75",
      "$58.42"
    ],
    "answer": 0,
    "explanation": "580 × $0.074 = $42.92."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 752 hours at $0.142/hour. What is the total on-demand compute cost?",
    "options": [
      "$64.07",
      "$106.78",
      "$122.28",
      "$148.78"
    ],
    "answer": 1,
    "explanation": "752 × $0.142 = $106.78."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 354 hours at $0.150/hour. What is the total on-demand compute cost?",
    "options": [
      "$31.86",
      "$95.10",
      "$68.60",
      "$53.10"
    ],
    "answer": 3,
    "explanation": "354 × $0.150 = $53.10."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 165 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$14.26",
      "$13.17",
      "$5.82",
      "$7.92"
    ],
    "answer": 3,
    "explanation": "165 × $0.048 = $7.92 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 794 hours at $0.500/hour. What is the total on-demand compute cost?",
    "options": [
      "$439.00",
      "$397.00",
      "$412.50",
      "$238.20"
    ],
    "answer": 1,
    "explanation": "794 × $0.500 = $397.00."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 131 GB in S3 Standard at $0.010/GB/month costs how much monthly?",
    "options": [
      "$1.31",
      "$-0.79",
      "$2.36",
      "$6.56"
    ],
    "answer": 0,
    "explanation": "131 × $0.010 = $1.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 537 hours at $0.154/hour. What is the total on-demand compute cost?",
    "options": [
      "$124.70",
      "$49.62",
      "$82.70",
      "$98.20"
    ],
    "answer": 2,
    "explanation": "537 × $0.154 = $82.70."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 409 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$40.50",
      "$20.40",
      "$27.75",
      "$22.50"
    ],
    "answer": 3,
    "explanation": "409 × $0.055 = $22.50 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Auto Scaling",
    "difficulty": "Easy",
    "question": "An auto-scaling group has 5 running instances and a desired capacity of 11. How many instances will be launched?",
    "options": [
      "12 new instances",
      "6 new instances",
      "5 new instances",
      "8 new instances"
    ],
    "answer": 1,
    "explanation": "11 desired - 5 running = 6 new instances."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 495 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$27.52",
      "$40.09",
      "$20.17",
      "$22.27"
    ],
    "answer": 3,
    "explanation": "495 × $0.045 = $22.27 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 791 hours at $0.055/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.51",
      "$26.11",
      "$43.51",
      "$59.01"
    ],
    "answer": 2,
    "explanation": "791 × $0.055 = $43.51."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 769 hours at $0.347/hour. What is the total on-demand compute cost?",
    "options": [
      "$266.84",
      "$308.84",
      "$282.34",
      "$160.10"
    ],
    "answer": 0,
    "explanation": "769 × $0.347 = $266.84."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 814 hours at $0.292/hour. What is the total on-demand compute cost?",
    "options": [
      "$253.19",
      "$142.61",
      "$279.69",
      "$237.69"
    ],
    "answer": 3,
    "explanation": "814 × $0.292 = $237.69."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 429 hours at $0.174/hour. What is the total on-demand compute cost?",
    "options": [
      "$44.79",
      "$116.65",
      "$74.65",
      "$90.15"
    ],
    "answer": 2,
    "explanation": "429 × $0.174 = $74.65."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 679 hours at $0.311/hour. What is the total on-demand compute cost?",
    "options": [
      "$226.67",
      "$253.17",
      "$211.17",
      "$126.70"
    ],
    "answer": 2,
    "explanation": "679 × $0.311 = $211.17."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 324 hours at $0.194/hour. What is the total on-demand compute cost?",
    "options": [
      "$104.86",
      "$37.72",
      "$78.36",
      "$62.86"
    ],
    "answer": 3,
    "explanation": "324 × $0.194 = $62.86."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 563 hours at $0.447/hour. What is the total on-demand compute cost?",
    "options": [
      "$151.00",
      "$251.66",
      "$267.16",
      "$293.66"
    ],
    "answer": 1,
    "explanation": "563 × $0.447 = $251.66."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 530 hours at $0.118/hour. What is the total on-demand compute cost?",
    "options": [
      "$78.04",
      "$104.54",
      "$37.52",
      "$62.54"
    ],
    "answer": 3,
    "explanation": "530 × $0.118 = $62.54."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 491 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$25.63",
      "$14.24",
      "$19.49",
      "$12.14"
    ],
    "answer": 1,
    "explanation": "491 × $0.029 = $14.24 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 529 hours at $0.482/hour. What is the total on-demand compute cost?",
    "options": [
      "$270.48",
      "$296.98",
      "$152.99",
      "$254.98"
    ],
    "answer": 3,
    "explanation": "529 × $0.482 = $254.98."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 512 GB in S3 Standard at $0.041/GB/month costs how much monthly?",
    "options": [
      "$18.89",
      "$26.24",
      "$37.78",
      "$20.99"
    ],
    "answer": 3,
    "explanation": "512 × $0.041 = $20.99 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 221 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$3.87",
      "$5.97",
      "$10.75",
      "$11.22"
    ],
    "answer": 1,
    "explanation": "221 × $0.027 = $5.97 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 494 hours at $0.116/hour. What is the total on-demand compute cost?",
    "options": [
      "$72.80",
      "$34.38",
      "$57.30",
      "$99.30"
    ],
    "answer": 2,
    "explanation": "494 × $0.116 = $57.30."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 347 hours at $0.404/hour. What is the total on-demand compute cost?",
    "options": [
      "$140.19",
      "$84.11",
      "$182.19",
      "$155.69"
    ],
    "answer": 0,
    "explanation": "347 × $0.404 = $140.19."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 503 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$19.84",
      "$12.49",
      "$14.59",
      "$26.26"
    ],
    "answer": 2,
    "explanation": "503 × $0.029 = $14.59 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 545 hours at $0.345/hour. What is the total on-demand compute cost?",
    "options": [
      "$203.52",
      "$188.02",
      "$230.02",
      "$112.81"
    ],
    "answer": 1,
    "explanation": "545 × $0.345 = $188.02."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 775 hours at $0.539/hour. What is the total on-demand compute cost?",
    "options": [
      "$417.73",
      "$433.23",
      "$250.64",
      "$459.73"
    ],
    "answer": 0,
    "explanation": "775 × $0.539 = $417.73."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 337 GB in S3 Standard at $0.021/GB/month costs how much monthly?",
    "options": [
      "$12.74",
      "$12.33",
      "$7.08",
      "$4.98"
    ],
    "answer": 2,
    "explanation": "337 × $0.021 = $7.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 487 hours at $0.451/hour. What is the total on-demand compute cost?",
    "options": [
      "$235.14",
      "$261.64",
      "$219.64",
      "$131.78"
    ],
    "answer": 2,
    "explanation": "487 × $0.451 = $219.64."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 236 hours at $0.309/hour. What is the total on-demand compute cost?",
    "options": [
      "$43.75",
      "$114.92",
      "$72.92",
      "$88.42"
    ],
    "answer": 2,
    "explanation": "236 × $0.309 = $72.92."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 267 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$11.05",
      "$11.39",
      "$4.04",
      "$6.14"
    ],
    "answer": 3,
    "explanation": "267 × $0.023 = $6.14 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 455 hours at $0.273/hour. What is the total on-demand compute cost?",
    "options": [
      "$166.22",
      "$124.22",
      "$139.72",
      "$74.53"
    ],
    "answer": 1,
    "explanation": "455 × $0.273 = $124.22."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 283 hours at $0.499/hour. What is the total on-demand compute cost?",
    "options": [
      "$141.22",
      "$183.22",
      "$156.72",
      "$84.73"
    ],
    "answer": 0,
    "explanation": "283 × $0.499 = $141.22."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 406 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$17.05",
      "$30.69",
      "$14.95",
      "$22.30"
    ],
    "answer": 0,
    "explanation": "406 × $0.042 = $17.05 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 598 hours at $0.517/hour. What is the total on-demand compute cost?",
    "options": [
      "$351.17",
      "$309.17",
      "$324.67",
      "$185.50"
    ],
    "answer": 1,
    "explanation": "598 × $0.517 = $309.17."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 56 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$-1.26",
      "$0.84",
      "$6.09",
      "$1.51"
    ],
    "answer": 1,
    "explanation": "56 × $0.015 = $0.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 169 GB in S3 Standard at $0.047/GB/month costs how much monthly?",
    "options": [
      "$7.94",
      "$14.29",
      "$5.84",
      "$13.19"
    ],
    "answer": 0,
    "explanation": "169 × $0.047 = $7.94 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 178 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$8.01",
      "$4.45",
      "$2.35",
      "$9.70"
    ],
    "answer": 1,
    "explanation": "178 × $0.025 = $4.45 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 796 hours at $0.497/hour. What is the total on-demand compute cost?",
    "options": [
      "$395.61",
      "$237.37",
      "$411.11",
      "$437.61"
    ],
    "answer": 0,
    "explanation": "796 × $0.497 = $395.61."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 149 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$6.17",
      "$3.43",
      "$8.68",
      "$1.33"
    ],
    "answer": 1,
    "explanation": "149 × $0.023 = $3.43 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 491 hours at $0.185/hour. What is the total on-demand compute cost?",
    "options": [
      "$106.33",
      "$54.50",
      "$90.83",
      "$132.83"
    ],
    "answer": 2,
    "explanation": "491 × $0.185 = $90.83."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 197 hours at $0.518/hour. What is the total on-demand compute cost?",
    "options": [
      "$102.05",
      "$117.55",
      "$144.05",
      "$61.23"
    ],
    "answer": 0,
    "explanation": "197 × $0.518 = $102.05."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 269 hours at $0.368/hour. What is the total on-demand compute cost?",
    "options": [
      "$59.39",
      "$140.99",
      "$98.99",
      "$114.49"
    ],
    "answer": 2,
    "explanation": "269 × $0.368 = $98.99."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 677 hours at $0.470/hour. What is the total on-demand compute cost?",
    "options": [
      "$318.19",
      "$333.69",
      "$360.19",
      "$190.91"
    ],
    "answer": 0,
    "explanation": "677 × $0.470 = $318.19."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 363 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$13.15",
      "$27.45",
      "$20.50",
      "$15.25"
    ],
    "answer": 3,
    "explanation": "363 × $0.042 = $15.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 418 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$25.31",
      "$36.11",
      "$20.06",
      "$17.96"
    ],
    "answer": 2,
    "explanation": "418 × $0.048 = $20.06 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 179 hours at $0.370/hour. What is the total on-demand compute cost?",
    "options": [
      "$66.23",
      "$108.23",
      "$81.73",
      "$39.74"
    ],
    "answer": 0,
    "explanation": "179 × $0.370 = $66.23."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 125 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$7.20",
      "$4.00",
      "$9.25",
      "$1.90"
    ],
    "answer": 1,
    "explanation": "125 × $0.032 = $4.00 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 492 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$11.65",
      "$6.40",
      "$11.52",
      "$4.30"
    ],
    "answer": 1,
    "explanation": "492 × $0.013 = $6.40 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 241 GB in S3 Standard at $0.059/GB/month costs how much monthly?",
    "options": [
      "$14.22",
      "$12.12",
      "$19.47",
      "$25.60"
    ],
    "answer": 0,
    "explanation": "241 × $0.059 = $14.22 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 509 GB in S3 Standard at $0.028/GB/month costs how much monthly?",
    "options": [
      "$25.65",
      "$19.50",
      "$14.25",
      "$12.15"
    ],
    "answer": 2,
    "explanation": "509 × $0.028 = $14.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 289 hours at $0.194/hour. What is the total on-demand compute cost?",
    "options": [
      "$56.07",
      "$33.64",
      "$98.07",
      "$71.57"
    ],
    "answer": 0,
    "explanation": "289 × $0.194 = $56.07."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 599 hours at $0.494/hour. What is the total on-demand compute cost?",
    "options": [
      "$337.91",
      "$177.55",
      "$295.91",
      "$311.41"
    ],
    "answer": 2,
    "explanation": "599 × $0.494 = $295.91."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 583 hours at $0.310/hour. What is the total on-demand compute cost?",
    "options": [
      "$222.73",
      "$108.44",
      "$180.73",
      "$196.23"
    ],
    "answer": 2,
    "explanation": "583 × $0.310 = $180.73."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 403 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$26.84",
      "$20.16",
      "$14.91",
      "$12.81"
    ],
    "answer": 2,
    "explanation": "403 × $0.037 = $14.91 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 378 GB in S3 Standard at $0.050/GB/month costs how much monthly?",
    "options": [
      "$18.90",
      "$34.02",
      "$24.15",
      "$16.80"
    ],
    "answer": 0,
    "explanation": "378 × $0.050 = $18.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 557 hours at $0.522/hour. What is the total on-demand compute cost?",
    "options": [
      "$290.75",
      "$332.75",
      "$174.45",
      "$306.25"
    ],
    "answer": 0,
    "explanation": "557 × $0.522 = $290.75."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 519 GB in S3 Standard at $0.041/GB/month costs how much monthly?",
    "options": [
      "$26.53",
      "$38.30",
      "$21.28",
      "$19.18"
    ],
    "answer": 2,
    "explanation": "519 × $0.041 = $21.28 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 544 hours at $0.524/hour. What is the total on-demand compute cost?",
    "options": [
      "$285.06",
      "$171.04",
      "$300.56",
      "$327.06"
    ],
    "answer": 0,
    "explanation": "544 × $0.524 = $285.06."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 80 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$8.29",
      "$0.94",
      "$5.47",
      "$3.04"
    ],
    "answer": 3,
    "explanation": "80 × $0.038 = $3.04 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 549 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$20.86",
      "$26.11",
      "$18.76",
      "$37.55"
    ],
    "answer": 0,
    "explanation": "549 × $0.038 = $20.86 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 50 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$7.55",
      "$4.14",
      "$0.20",
      "$2.30"
    ],
    "answer": 3,
    "explanation": "50 × $0.046 = $2.30 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 481 GB in S3 Standard at $0.039/GB/month costs how much monthly?",
    "options": [
      "$33.77",
      "$18.76",
      "$16.66",
      "$24.01"
    ],
    "answer": 1,
    "explanation": "481 × $0.039 = $18.76 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 217 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$5.93",
      "$14.45",
      "$8.03",
      "$13.28"
    ],
    "answer": 2,
    "explanation": "217 × $0.037 = $8.03 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 395 hours at $0.334/hour. What is the total on-demand compute cost?",
    "options": [
      "$131.93",
      "$79.16",
      "$147.43",
      "$173.93"
    ],
    "answer": 0,
    "explanation": "395 × $0.334 = $131.93."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 375 hours at $0.451/hour. What is the total on-demand compute cost?",
    "options": [
      "$101.48",
      "$169.13",
      "$184.63",
      "$211.13"
    ],
    "answer": 1,
    "explanation": "375 × $0.451 = $169.13."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 461 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$22.79",
      "$30.14",
      "$24.89",
      "$44.80"
    ],
    "answer": 2,
    "explanation": "461 × $0.054 = $24.89 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 201 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$10.49",
      "$3.73",
      "$11.08",
      "$5.83"
    ],
    "answer": 3,
    "explanation": "201 × $0.029 = $5.83 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 538 GB in S3 Standard at $0.050/GB/month costs how much monthly?",
    "options": [
      "$24.80",
      "$32.15",
      "$26.90",
      "$48.42"
    ],
    "answer": 2,
    "explanation": "538 × $0.050 = $26.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 450 hours at $0.070/hour. What is the total on-demand compute cost?",
    "options": [
      "$18.90",
      "$31.50",
      "$73.50",
      "$47.00"
    ],
    "answer": 1,
    "explanation": "450 × $0.070 = $31.50."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 754 hours at $0.266/hour. What is the total on-demand compute cost?",
    "options": [
      "$216.06",
      "$200.56",
      "$120.34",
      "$242.56"
    ],
    "answer": 1,
    "explanation": "754 × $0.266 = $200.56."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 639 hours at $0.423/hour. What is the total on-demand compute cost?",
    "options": [
      "$270.30",
      "$312.30",
      "$162.18",
      "$285.80"
    ],
    "answer": 0,
    "explanation": "639 × $0.423 = $270.30."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 369 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$19.93",
      "$35.87",
      "$17.83",
      "$25.18"
    ],
    "answer": 0,
    "explanation": "369 × $0.054 = $19.93 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 138 hours at $0.405/hour. What is the total on-demand compute cost?",
    "options": [
      "$55.89",
      "$33.53",
      "$97.89",
      "$71.39"
    ],
    "answer": 0,
    "explanation": "138 × $0.405 = $55.89."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 514 hours at $0.060/hour. What is the total on-demand compute cost?",
    "options": [
      "$46.34",
      "$18.50",
      "$72.84",
      "$30.84"
    ],
    "answer": 3,
    "explanation": "514 × $0.060 = $30.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 503 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$47.09",
      "$24.06",
      "$31.41",
      "$26.16"
    ],
    "answer": 3,
    "explanation": "503 × $0.052 = $26.16 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 433 hours at $0.067/hour. What is the total on-demand compute cost?",
    "options": [
      "$44.51",
      "$71.01",
      "$29.01",
      "$17.41"
    ],
    "answer": 2,
    "explanation": "433 × $0.067 = $29.01."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 407 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$42.50",
      "$23.61",
      "$21.51",
      "$28.86"
    ],
    "answer": 1,
    "explanation": "407 × $0.058 = $23.61 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 471 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$19.49",
      "$8.73",
      "$10.83",
      "$16.08"
    ],
    "answer": 2,
    "explanation": "471 × $0.023 = $10.83 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 616 hours at $0.440/hour. What is the total on-demand compute cost?",
    "options": [
      "$286.54",
      "$271.04",
      "$162.62",
      "$313.04"
    ],
    "answer": 1,
    "explanation": "616 × $0.440 = $271.04."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 627 hours at $0.226/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.02",
      "$183.70",
      "$157.20",
      "$141.70"
    ],
    "answer": 3,
    "explanation": "627 × $0.226 = $141.70."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 473 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$10.41",
      "$18.74",
      "$15.66",
      "$8.31"
    ],
    "answer": 0,
    "explanation": "473 × $0.022 = $10.41 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 341 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$14.46",
      "$7.11",
      "$16.58",
      "$9.21"
    ],
    "answer": 3,
    "explanation": "341 × $0.027 = $9.21 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 643 hours at $0.121/hour. What is the total on-demand compute cost?",
    "options": [
      "$93.30",
      "$119.80",
      "$77.80",
      "$46.68"
    ],
    "answer": 2,
    "explanation": "643 × $0.121 = $77.80."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 84 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$1.82",
      "$1.01",
      "$-1.09",
      "$6.26"
    ],
    "answer": 1,
    "explanation": "84 × $0.012 = $1.01 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 129 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$11.57",
      "$6.32",
      "$11.38",
      "$4.22"
    ],
    "answer": 1,
    "explanation": "129 × $0.049 = $6.32 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 81 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$5.54",
      "$3.08",
      "$0.98",
      "$8.33"
    ],
    "answer": 1,
    "explanation": "81 × $0.038 = $3.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 348 hours at $0.074/hour. What is the total on-demand compute cost?",
    "options": [
      "$15.45",
      "$67.75",
      "$25.75",
      "$41.25"
    ],
    "answer": 2,
    "explanation": "348 × $0.074 = $25.75."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 608 hours at $0.207/hour. What is the total on-demand compute cost?",
    "options": [
      "$167.86",
      "$75.52",
      "$125.86",
      "$141.36"
    ],
    "answer": 2,
    "explanation": "608 × $0.207 = $125.86."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 404 hours at $0.493/hour. What is the total on-demand compute cost?",
    "options": [
      "$199.17",
      "$119.50",
      "$214.67",
      "$241.17"
    ],
    "answer": 0,
    "explanation": "404 × $0.493 = $199.17."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 191 hours at $0.377/hour. What is the total on-demand compute cost?",
    "options": [
      "$87.51",
      "$114.01",
      "$43.21",
      "$72.01"
    ],
    "answer": 3,
    "explanation": "191 × $0.377 = $72.01."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 788 hours at $0.299/hour. What is the total on-demand compute cost?",
    "options": [
      "$251.11",
      "$141.37",
      "$235.61",
      "$277.61"
    ],
    "answer": 2,
    "explanation": "788 × $0.299 = $235.61."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 389 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$19.29",
      "$38.50",
      "$21.39",
      "$26.64"
    ],
    "answer": 2,
    "explanation": "389 × $0.055 = $21.39 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 80 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$6.69",
      "$1.44",
      "$2.59",
      "$-0.66"
    ],
    "answer": 1,
    "explanation": "80 × $0.018 = $1.44 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 513 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$22.57",
      "$27.82",
      "$40.63",
      "$20.47"
    ],
    "answer": 0,
    "explanation": "513 × $0.044 = $22.57 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 438 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$41.78",
      "$23.21",
      "$21.11",
      "$28.46"
    ],
    "answer": 1,
    "explanation": "438 × $0.053 = $23.21 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 231 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$13.30",
      "$7.39",
      "$5.29",
      "$12.64"
    ],
    "answer": 1,
    "explanation": "231 × $0.032 = $7.39 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 403 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$14.52",
      "$7.17",
      "$16.69",
      "$9.27"
    ],
    "answer": 3,
    "explanation": "403 × $0.023 = $9.27 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 281 hours at $0.218/hour. What is the total on-demand compute cost?",
    "options": [
      "$103.26",
      "$76.76",
      "$61.26",
      "$36.76"
    ],
    "answer": 2,
    "explanation": "281 × $0.218 = $61.26."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 195 hours at $0.204/hour. What is the total on-demand compute cost?",
    "options": [
      "$81.78",
      "$55.28",
      "$39.78",
      "$23.87"
    ],
    "answer": 2,
    "explanation": "195 × $0.204 = $39.78."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 155 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$12.07",
      "$12.28",
      "$4.72",
      "$6.82"
    ],
    "answer": 3,
    "explanation": "155 × $0.044 = $6.82 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 502 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$31.86",
      "$24.51",
      "$47.90",
      "$26.61"
    ],
    "answer": 3,
    "explanation": "502 × $0.053 = $26.61 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 78 GB in S3 Standard at $0.047/GB/month costs how much monthly?",
    "options": [
      "$6.61",
      "$8.92",
      "$1.57",
      "$3.67"
    ],
    "answer": 3,
    "explanation": "78 × $0.047 = $3.67 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 256 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$8.83",
      "$6.44",
      "$1.48",
      "$3.58"
    ],
    "answer": 3,
    "explanation": "256 × $0.014 = $3.58 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 245 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$6.48",
      "$8.58",
      "$15.44",
      "$13.83"
    ],
    "answer": 1,
    "explanation": "245 × $0.035 = $8.58 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 171 hours at $0.250/hour. What is the total on-demand compute cost?",
    "options": [
      "$42.75",
      "$84.75",
      "$25.65",
      "$58.25"
    ],
    "answer": 0,
    "explanation": "171 × $0.250 = $42.75."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 53 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$0.28",
      "$2.38",
      "$7.63",
      "$4.28"
    ],
    "answer": 1,
    "explanation": "53 × $0.045 = $2.38 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 539 hours at $0.424/hour. What is the total on-demand compute cost?",
    "options": [
      "$137.12",
      "$244.04",
      "$228.54",
      "$270.54"
    ],
    "answer": 2,
    "explanation": "539 × $0.424 = $228.54."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 277 hours at $0.125/hour. What is the total on-demand compute cost?",
    "options": [
      "$34.63",
      "$50.13",
      "$20.78",
      "$76.63"
    ],
    "answer": 0,
    "explanation": "277 × $0.125 = $34.63."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 126 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$4.30",
      "$7.64",
      "$0.29",
      "$2.39"
    ],
    "answer": 3,
    "explanation": "126 × $0.019 = $2.39 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 138 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$-0.17",
      "$7.18",
      "$1.93",
      "$3.47"
    ],
    "answer": 2,
    "explanation": "138 × $0.014 = $1.93 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 741 hours at $0.339/hour. What is the total on-demand compute cost?",
    "options": [
      "$150.72",
      "$251.20",
      "$266.70",
      "$293.20"
    ],
    "answer": 1,
    "explanation": "741 × $0.339 = $251.20."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 103 GB in S3 Standard at $0.059/GB/month costs how much monthly?",
    "options": [
      "$6.08",
      "$10.94",
      "$3.98",
      "$11.33"
    ],
    "answer": 0,
    "explanation": "103 × $0.059 = $6.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 519 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$26.99",
      "$24.89",
      "$32.24",
      "$48.58"
    ],
    "answer": 0,
    "explanation": "519 × $0.052 = $26.99 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 729 hours at $0.059/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.01",
      "$25.81",
      "$58.51",
      "$43.01"
    ],
    "answer": 3,
    "explanation": "729 × $0.059 = $43.01."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 220 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$7.58",
      "$9.68",
      "$14.93",
      "$17.42"
    ],
    "answer": 1,
    "explanation": "220 × $0.044 = $9.68 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 525 GB in S3 Standard at $0.028/GB/month costs how much monthly?",
    "options": [
      "$12.60",
      "$19.95",
      "$26.46",
      "$14.70"
    ],
    "answer": 3,
    "explanation": "525 × $0.028 = $14.70 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 329 hours at $0.491/hour. What is the total on-demand compute cost?",
    "options": [
      "$203.54",
      "$161.54",
      "$96.92",
      "$177.04"
    ],
    "answer": 1,
    "explanation": "329 × $0.491 = $161.54."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 270 hours at $0.068/hour. What is the total on-demand compute cost?",
    "options": [
      "$18.36",
      "$33.86",
      "$60.36",
      "$11.02"
    ],
    "answer": 0,
    "explanation": "270 × $0.068 = $18.36."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 506 hours at $0.480/hour. What is the total on-demand compute cost?",
    "options": [
      "$145.73",
      "$284.88",
      "$258.38",
      "$242.88"
    ],
    "answer": 3,
    "explanation": "506 × $0.480 = $242.88."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 417 hours at $0.307/hour. What is the total on-demand compute cost?",
    "options": [
      "$143.52",
      "$170.02",
      "$76.81",
      "$128.02"
    ],
    "answer": 3,
    "explanation": "417 × $0.307 = $128.02."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 157 hours at $0.534/hour. What is the total on-demand compute cost?",
    "options": [
      "$125.84",
      "$99.34",
      "$83.84",
      "$50.30"
    ],
    "answer": 2,
    "explanation": "157 × $0.534 = $83.84."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 148 hours at $0.155/hour. What is the total on-demand compute cost?",
    "options": [
      "$22.94",
      "$64.94",
      "$13.76",
      "$38.44"
    ],
    "answer": 0,
    "explanation": "148 × $0.155 = $22.94."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 664 hours at $0.057/hour. What is the total on-demand compute cost?",
    "options": [
      "$53.35",
      "$37.85",
      "$79.85",
      "$22.71"
    ],
    "answer": 1,
    "explanation": "664 × $0.057 = $37.85."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 466 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$32.28",
      "$48.65",
      "$24.93",
      "$27.03"
    ],
    "answer": 3,
    "explanation": "466 × $0.058 = $27.03 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 235 hours at $0.357/hour. What is the total on-demand compute cost?",
    "options": [
      "$125.89",
      "$83.89",
      "$50.33",
      "$99.39"
    ],
    "answer": 1,
    "explanation": "235 × $0.357 = $83.89."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 538 hours at $0.509/hour. What is the total on-demand compute cost?",
    "options": [
      "$273.84",
      "$164.30",
      "$289.34",
      "$315.84"
    ],
    "answer": 0,
    "explanation": "538 × $0.509 = $273.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 152 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$-0.28",
      "$7.07",
      "$3.28",
      "$1.82"
    ],
    "answer": 3,
    "explanation": "152 × $0.012 = $1.82 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 192 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$17.62",
      "$9.79",
      "$15.04",
      "$7.69"
    ],
    "answer": 1,
    "explanation": "192 × $0.051 = $9.79 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 271 hours at $0.475/hour. What is the total on-demand compute cost?",
    "options": [
      "$144.22",
      "$170.72",
      "$128.72",
      "$77.23"
    ],
    "answer": 2,
    "explanation": "271 × $0.475 = $128.72."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 455 GB in S3 Standard at $0.050/GB/month costs how much monthly?",
    "options": [
      "$40.95",
      "$20.65",
      "$22.75",
      "$28.00"
    ],
    "answer": 2,
    "explanation": "455 × $0.050 = $22.75 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 680 hours at $0.259/hour. What is the total on-demand compute cost?",
    "options": [
      "$105.67",
      "$176.12",
      "$218.12",
      "$191.62"
    ],
    "answer": 1,
    "explanation": "680 × $0.259 = $176.12."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 601 hours at $0.515/hour. What is the total on-demand compute cost?",
    "options": [
      "$309.51",
      "$325.01",
      "$351.51",
      "$185.71"
    ],
    "answer": 0,
    "explanation": "601 × $0.515 = $309.51."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 70 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$-0.77",
      "$6.58",
      "$1.33",
      "$2.39"
    ],
    "answer": 2,
    "explanation": "70 × $0.019 = $1.33 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 743 hours at $0.422/hour. What is the total on-demand compute cost?",
    "options": [
      "$313.55",
      "$329.05",
      "$355.55",
      "$188.13"
    ],
    "answer": 0,
    "explanation": "743 × $0.422 = $313.55."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 415 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$16.46",
      "$20.18",
      "$9.11",
      "$11.21"
    ],
    "answer": 3,
    "explanation": "415 × $0.027 = $11.21 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 594 hours at $0.072/hour. What is the total on-demand compute cost?",
    "options": [
      "$58.27",
      "$25.66",
      "$84.77",
      "$42.77"
    ],
    "answer": 3,
    "explanation": "594 × $0.072 = $42.77."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 200 hours at $0.307/hour. What is the total on-demand compute cost?",
    "options": [
      "$76.90",
      "$36.84",
      "$61.40",
      "$103.40"
    ],
    "answer": 2,
    "explanation": "200 × $0.307 = $61.40."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 438 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$20.15",
      "$25.40",
      "$18.05",
      "$36.27"
    ],
    "answer": 0,
    "explanation": "438 × $0.046 = $20.15 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 770 hours at $0.189/hour. What is the total on-demand compute cost?",
    "options": [
      "$187.53",
      "$87.32",
      "$145.53",
      "$161.03"
    ],
    "answer": 2,
    "explanation": "770 × $0.189 = $145.53."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 224 hours at $0.056/hour. What is the total on-demand compute cost?",
    "options": [
      "$54.54",
      "$12.54",
      "$7.52",
      "$28.04"
    ],
    "answer": 1,
    "explanation": "224 × $0.056 = $12.54."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 300 hours at $0.285/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.50",
      "$101.00",
      "$51.30",
      "$127.50"
    ],
    "answer": 0,
    "explanation": "300 × $0.285 = $85.50."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 223 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$7.22",
      "$1.91",
      "$9.26",
      "$4.01"
    ],
    "answer": 3,
    "explanation": "223 × $0.018 = $4.01 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 484 hours at $0.291/hour. What is the total on-demand compute cost?",
    "options": [
      "$84.50",
      "$156.34",
      "$140.84",
      "$182.84"
    ],
    "answer": 2,
    "explanation": "484 × $0.291 = $140.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 274 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$11.34",
      "$11.55",
      "$4.20",
      "$6.30"
    ],
    "answer": 3,
    "explanation": "274 × $0.023 = $6.30 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 482 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$25.49",
      "$18.14",
      "$20.24",
      "$36.43"
    ],
    "answer": 2,
    "explanation": "482 × $0.042 = $20.24 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 809 hours at $0.397/hour. What is the total on-demand compute cost?",
    "options": [
      "$363.17",
      "$192.70",
      "$336.67",
      "$321.17"
    ],
    "answer": 3,
    "explanation": "809 × $0.397 = $321.17."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 471 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$19.38",
      "$25.43",
      "$14.13",
      "$12.03"
    ],
    "answer": 2,
    "explanation": "471 × $0.030 = $14.13 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 407 hours at $0.416/hour. What is the total on-demand compute cost?",
    "options": [
      "$211.31",
      "$184.81",
      "$169.31",
      "$101.59"
    ],
    "answer": 2,
    "explanation": "407 × $0.416 = $169.31."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 512 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$20.43",
      "$22.53",
      "$40.55",
      "$27.78"
    ],
    "answer": 1,
    "explanation": "512 × $0.044 = $22.53 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 598 hours at $0.541/hour. What is the total on-demand compute cost?",
    "options": [
      "$339.02",
      "$323.52",
      "$365.52",
      "$194.11"
    ],
    "answer": 1,
    "explanation": "598 × $0.541 = $323.52."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 638 hours at $0.157/hour. What is the total on-demand compute cost?",
    "options": [
      "$60.10",
      "$115.67",
      "$142.17",
      "$100.17"
    ],
    "answer": 3,
    "explanation": "638 × $0.157 = $100.17."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 512 hours at $0.263/hour. What is the total on-demand compute cost?",
    "options": [
      "$176.66",
      "$150.16",
      "$80.80",
      "$134.66"
    ],
    "answer": 3,
    "explanation": "512 × $0.263 = $134.66."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 517 hours at $0.523/hour. What is the total on-demand compute cost?",
    "options": [
      "$312.39",
      "$270.39",
      "$162.23",
      "$285.89"
    ],
    "answer": 1,
    "explanation": "517 × $0.523 = $270.39."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 209 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$19.57",
      "$8.77",
      "$10.87",
      "$16.12"
    ],
    "answer": 2,
    "explanation": "209 × $0.052 = $10.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 527 hours at $0.054/hour. What is the total on-demand compute cost?",
    "options": [
      "$70.46",
      "$17.08",
      "$43.96",
      "$28.46"
    ],
    "answer": 3,
    "explanation": "527 × $0.054 = $28.46."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 476 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$23.13",
      "$25.23",
      "$45.41",
      "$30.48"
    ],
    "answer": 1,
    "explanation": "476 × $0.053 = $25.23 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 504 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$16.34",
      "$8.99",
      "$11.09",
      "$19.96"
    ],
    "answer": 2,
    "explanation": "504 × $0.022 = $11.09 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 230 hours at $0.133/hour. What is the total on-demand compute cost?",
    "options": [
      "$46.09",
      "$30.59",
      "$72.59",
      "$18.35"
    ],
    "answer": 1,
    "explanation": "230 × $0.133 = $30.59."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 369 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$6.02",
      "$8.12",
      "$13.37",
      "$14.62"
    ],
    "answer": 1,
    "explanation": "369 × $0.022 = $8.12 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 327 GB in S3 Standard at $0.047/GB/month costs how much monthly?",
    "options": [
      "$20.62",
      "$13.27",
      "$15.37",
      "$27.67"
    ],
    "answer": 2,
    "explanation": "327 × $0.047 = $15.37 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 366 hours at $0.137/hour. What is the total on-demand compute cost?",
    "options": [
      "$65.64",
      "$92.14",
      "$50.14",
      "$30.08"
    ],
    "answer": 2,
    "explanation": "366 × $0.137 = $50.14."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 189 hours at $0.265/hour. What is the total on-demand compute cost?",
    "options": [
      "$30.05",
      "$50.09",
      "$65.59",
      "$92.09"
    ],
    "answer": 1,
    "explanation": "189 × $0.265 = $50.09."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 690 hours at $0.121/hour. What is the total on-demand compute cost?",
    "options": [
      "$83.49",
      "$125.49",
      "$98.99",
      "$50.09"
    ],
    "answer": 0,
    "explanation": "690 × $0.121 = $83.49."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 434 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$8.59",
      "$10.02",
      "$2.67",
      "$4.77"
    ],
    "answer": 3,
    "explanation": "434 × $0.011 = $4.77 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 331 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$16.88",
      "$22.13",
      "$30.38",
      "$14.78"
    ],
    "answer": 0,
    "explanation": "331 × $0.051 = $16.88 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 370 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$12.65",
      "$5.30",
      "$13.32",
      "$7.40"
    ],
    "answer": 3,
    "explanation": "370 × $0.020 = $7.40 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 277 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$14.95",
      "$17.46",
      "$7.60",
      "$9.70"
    ],
    "answer": 3,
    "explanation": "277 × $0.035 = $9.70 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 206 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$9.02",
      "$11.12",
      "$20.02",
      "$16.37"
    ],
    "answer": 1,
    "explanation": "206 × $0.054 = $11.12 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 262 hours at $0.067/hour. What is the total on-demand compute cost?",
    "options": [
      "$33.05",
      "$10.53",
      "$17.55",
      "$59.55"
    ],
    "answer": 2,
    "explanation": "262 × $0.067 = $17.55."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 246 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$8.61",
      "$6.51",
      "$15.50",
      "$13.86"
    ],
    "answer": 0,
    "explanation": "246 × $0.035 = $8.61 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 229 hours at $0.238/hour. What is the total on-demand compute cost?",
    "options": [
      "$70.00",
      "$96.50",
      "$32.70",
      "$54.50"
    ],
    "answer": 3,
    "explanation": "229 × $0.238 = $54.50."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 102 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$1.84",
      "$3.31",
      "$-0.26",
      "$7.09"
    ],
    "answer": 0,
    "explanation": "102 × $0.018 = $1.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 722 hours at $0.530/hour. What is the total on-demand compute cost?",
    "options": [
      "$398.16",
      "$382.66",
      "$229.60",
      "$424.66"
    ],
    "answer": 1,
    "explanation": "722 × $0.530 = $382.66."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 200 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$8.40",
      "$13.65",
      "$6.30",
      "$15.12"
    ],
    "answer": 0,
    "explanation": "200 × $0.042 = $8.40 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 88 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$8.24",
      "$9.83",
      "$2.48",
      "$4.58"
    ],
    "answer": 3,
    "explanation": "88 × $0.052 = $4.58 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 493 hours at $0.205/hour. What is the total on-demand compute cost?",
    "options": [
      "$116.56",
      "$101.06",
      "$60.64",
      "$143.06"
    ],
    "answer": 1,
    "explanation": "493 × $0.205 = $101.06."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 435 hours at $0.126/hour. What is the total on-demand compute cost?",
    "options": [
      "$70.31",
      "$54.81",
      "$96.81",
      "$32.89"
    ],
    "answer": 1,
    "explanation": "435 × $0.126 = $54.81."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 476 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$28.10",
      "$20.75",
      "$22.85",
      "$41.13"
    ],
    "answer": 2,
    "explanation": "476 × $0.048 = $22.85 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 635 hours at $0.383/hour. What is the total on-demand compute cost?",
    "options": [
      "$285.21",
      "$145.93",
      "$258.71",
      "$243.21"
    ],
    "answer": 3,
    "explanation": "635 × $0.383 = $243.21."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 794 hours at $0.212/hour. What is the total on-demand compute cost?",
    "options": [
      "$101.00",
      "$210.33",
      "$168.33",
      "$183.83"
    ],
    "answer": 2,
    "explanation": "794 × $0.212 = $168.33."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 363 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$11.62",
      "$20.92",
      "$9.52",
      "$16.87"
    ],
    "answer": 0,
    "explanation": "363 × $0.032 = $11.62 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 153 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$0.81",
      "$5.24",
      "$8.16",
      "$2.91"
    ],
    "answer": 3,
    "explanation": "153 × $0.019 = $2.91 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 392 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$22.11",
      "$30.35",
      "$16.86",
      "$14.76"
    ],
    "answer": 2,
    "explanation": "392 × $0.043 = $16.86 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 634 hours at $0.260/hour. What is the total on-demand compute cost?",
    "options": [
      "$98.90",
      "$206.84",
      "$180.34",
      "$164.84"
    ],
    "answer": 3,
    "explanation": "634 × $0.260 = $164.84."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 264 hours at $0.448/hour. What is the total on-demand compute cost?",
    "options": [
      "$133.77",
      "$160.27",
      "$70.96",
      "$118.27"
    ],
    "answer": 3,
    "explanation": "264 × $0.448 = $118.27."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 427 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$24.77",
      "$30.02",
      "$22.67",
      "$44.59"
    ],
    "answer": 0,
    "explanation": "427 × $0.058 = $24.77 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 360 hours at $0.362/hour. What is the total on-demand compute cost?",
    "options": [
      "$145.82",
      "$130.32",
      "$172.32",
      "$78.19"
    ],
    "answer": 1,
    "explanation": "360 × $0.362 = $130.32."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 806 hours at $0.332/hour. What is the total on-demand compute cost?",
    "options": [
      "$283.09",
      "$309.59",
      "$160.55",
      "$267.59"
    ],
    "answer": 3,
    "explanation": "806 × $0.332 = $267.59."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 86 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$3.56",
      "$-0.12",
      "$7.23",
      "$1.98"
    ],
    "answer": 3,
    "explanation": "86 × $0.023 = $1.98 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 228 hours at $0.169/hour. What is the total on-demand compute cost?",
    "options": [
      "$54.03",
      "$80.53",
      "$38.53",
      "$23.12"
    ],
    "answer": 2,
    "explanation": "228 × $0.169 = $38.53."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 522 GB in S3 Standard at $0.017/GB/month costs how much monthly?",
    "options": [
      "$8.87",
      "$15.97",
      "$6.77",
      "$14.12"
    ],
    "answer": 0,
    "explanation": "522 × $0.017 = $8.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 56 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$1.06",
      "$1.91",
      "$-1.04",
      "$6.31"
    ],
    "answer": 0,
    "explanation": "56 × $0.019 = $1.06 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 461 hours at $0.263/hour. What is the total on-demand compute cost?",
    "options": [
      "$163.24",
      "$136.74",
      "$121.24",
      "$72.74"
    ],
    "answer": 2,
    "explanation": "461 × $0.263 = $121.24."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 290 hours at $0.224/hour. What is the total on-demand compute cost?",
    "options": [
      "$38.98",
      "$106.96",
      "$64.96",
      "$80.46"
    ],
    "answer": 2,
    "explanation": "290 × $0.224 = $64.96."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 131 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$5.90",
      "$3.28",
      "$1.18",
      "$8.53"
    ],
    "answer": 1,
    "explanation": "131 × $0.025 = $3.28 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 675 hours at $0.526/hour. What is the total on-demand compute cost?",
    "options": [
      "$213.03",
      "$370.55",
      "$397.05",
      "$355.05"
    ],
    "answer": 3,
    "explanation": "675 × $0.526 = $355.05."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 428 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$5.56",
      "$10.81",
      "$3.46",
      "$10.01"
    ],
    "answer": 0,
    "explanation": "428 × $0.013 = $5.56 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 482 GB in S3 Standard at $0.047/GB/month costs how much monthly?",
    "options": [
      "$22.65",
      "$20.55",
      "$27.90",
      "$40.77"
    ],
    "answer": 0,
    "explanation": "482 × $0.047 = $22.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 201 hours at $0.191/hour. What is the total on-demand compute cost?",
    "options": [
      "$53.89",
      "$38.39",
      "$80.39",
      "$23.03"
    ],
    "answer": 1,
    "explanation": "201 × $0.191 = $38.39."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 119 hours at $0.103/hour. What is the total on-demand compute cost?",
    "options": [
      "$7.36",
      "$54.26",
      "$12.26",
      "$27.76"
    ],
    "answer": 2,
    "explanation": "119 × $0.103 = $12.26."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 396 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$15.15",
      "$7.80",
      "$17.82",
      "$9.90"
    ],
    "answer": 3,
    "explanation": "396 × $0.025 = $9.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 153 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$8.42",
      "$6.32",
      "$15.16",
      "$13.67"
    ],
    "answer": 0,
    "explanation": "153 × $0.055 = $8.42 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 59 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$1.30",
      "$-0.80",
      "$2.34",
      "$6.55"
    ],
    "answer": 0,
    "explanation": "59 × $0.022 = $1.30 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 426 GB in S3 Standard at $0.041/GB/month costs how much monthly?",
    "options": [
      "$15.37",
      "$17.47",
      "$22.72",
      "$31.45"
    ],
    "answer": 1,
    "explanation": "426 × $0.041 = $17.47 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 476 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$39.42",
      "$21.90",
      "$19.80",
      "$27.15"
    ],
    "answer": 1,
    "explanation": "476 × $0.046 = $21.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 294 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$14.11",
      "$25.40",
      "$12.01",
      "$19.36"
    ],
    "answer": 0,
    "explanation": "294 × $0.048 = $14.11 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 281 hours at $0.152/hour. What is the total on-demand compute cost?",
    "options": [
      "$42.71",
      "$84.71",
      "$25.63",
      "$58.21"
    ],
    "answer": 0,
    "explanation": "281 × $0.152 = $42.71."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 500 GB in S3 Standard at $0.056/GB/month costs how much monthly?",
    "options": [
      "$50.40",
      "$28.00",
      "$25.90",
      "$33.25"
    ],
    "answer": 1,
    "explanation": "500 × $0.056 = $28.00 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 368 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$23.85",
      "$18.50",
      "$13.25",
      "$11.15"
    ],
    "answer": 2,
    "explanation": "368 × $0.036 = $13.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 259 hours at $0.318/hour. What is the total on-demand compute cost?",
    "options": [
      "$124.36",
      "$82.36",
      "$49.42",
      "$97.86"
    ],
    "answer": 1,
    "explanation": "259 × $0.318 = $82.36."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 521 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$17.23",
      "$21.56",
      "$11.98",
      "$9.88"
    ],
    "answer": 2,
    "explanation": "521 × $0.023 = $11.98 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 411 GB in S3 Standard at $0.017/GB/month costs how much monthly?",
    "options": [
      "$12.24",
      "$6.99",
      "$4.89",
      "$12.58"
    ],
    "answer": 1,
    "explanation": "411 × $0.017 = $6.99 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 727 hours at $0.395/hour. What is the total on-demand compute cost?",
    "options": [
      "$287.17",
      "$172.30",
      "$302.67",
      "$329.17"
    ],
    "answer": 0,
    "explanation": "727 × $0.395 = $287.17."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 160 hours at $0.246/hour. What is the total on-demand compute cost?",
    "options": [
      "$54.86",
      "$81.36",
      "$39.36",
      "$23.62"
    ],
    "answer": 2,
    "explanation": "160 × $0.246 = $39.36."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 271 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$12.80",
      "$26.82",
      "$20.15",
      "$14.90"
    ],
    "answer": 3,
    "explanation": "271 × $0.055 = $14.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 534 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$20.74",
      "$15.49",
      "$27.88",
      "$13.39"
    ],
    "answer": 1,
    "explanation": "534 × $0.029 = $15.49 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 468 hours at $0.223/hour. What is the total on-demand compute cost?",
    "options": [
      "$146.36",
      "$104.36",
      "$119.86",
      "$62.62"
    ],
    "answer": 1,
    "explanation": "468 × $0.223 = $104.36."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 114 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$-0.39",
      "$1.71",
      "$6.96",
      "$3.08"
    ],
    "answer": 1,
    "explanation": "114 × $0.015 = $1.71 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 105 hours at $0.410/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.05",
      "$58.55",
      "$43.05",
      "$25.83"
    ],
    "answer": 2,
    "explanation": "105 × $0.410 = $43.05."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 348 hours at $0.404/hour. What is the total on-demand compute cost?",
    "options": [
      "$156.09",
      "$182.59",
      "$140.59",
      "$84.35"
    ],
    "answer": 2,
    "explanation": "348 × $0.404 = $140.59."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 484 hours at $0.143/hour. What is the total on-demand compute cost?",
    "options": [
      "$69.21",
      "$111.21",
      "$41.53",
      "$84.71"
    ],
    "answer": 0,
    "explanation": "484 × $0.143 = $69.21."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 417 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$19.43",
      "$25.52",
      "$14.18",
      "$12.08"
    ],
    "answer": 2,
    "explanation": "417 × $0.034 = $14.18 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 430 hours at $0.462/hour. What is the total on-demand compute cost?",
    "options": [
      "$214.16",
      "$198.66",
      "$240.66",
      "$119.20"
    ],
    "answer": 1,
    "explanation": "430 × $0.462 = $198.66."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 282 hours at $0.383/hour. What is the total on-demand compute cost?",
    "options": [
      "$108.01",
      "$64.81",
      "$123.51",
      "$150.01"
    ],
    "answer": 0,
    "explanation": "282 × $0.383 = $108.01."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 382 hours at $0.349/hour. What is the total on-demand compute cost?",
    "options": [
      "$79.99",
      "$133.32",
      "$148.82",
      "$175.32"
    ],
    "answer": 1,
    "explanation": "382 × $0.349 = $133.32."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 111 GB in S3 Standard at $0.028/GB/month costs how much monthly?",
    "options": [
      "$8.36",
      "$1.01",
      "$3.11",
      "$5.60"
    ],
    "answer": 2,
    "explanation": "111 × $0.028 = $3.11 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 427 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$42.26",
      "$23.48",
      "$21.38",
      "$28.73"
    ],
    "answer": 1,
    "explanation": "427 × $0.055 = $23.48 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 452 GB in S3 Standard at $0.040/GB/month costs how much monthly?",
    "options": [
      "$18.08",
      "$23.33",
      "$32.54",
      "$15.98"
    ],
    "answer": 0,
    "explanation": "452 × $0.040 = $18.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 287 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$10.24",
      "$17.59",
      "$22.21",
      "$12.34"
    ],
    "answer": 3,
    "explanation": "287 × $0.043 = $12.34 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 502 hours at $0.335/hour. What is the total on-demand compute cost?",
    "options": [
      "$168.17",
      "$100.90",
      "$183.67",
      "$210.17"
    ],
    "answer": 0,
    "explanation": "502 × $0.335 = $168.17."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 814 hours at $0.248/hour. What is the total on-demand compute cost?",
    "options": [
      "$201.87",
      "$243.87",
      "$121.12",
      "$217.37"
    ],
    "answer": 0,
    "explanation": "814 × $0.248 = $201.87."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 451 hours at $0.258/hour. What is the total on-demand compute cost?",
    "options": [
      "$116.36",
      "$69.82",
      "$131.86",
      "$158.36"
    ],
    "answer": 0,
    "explanation": "451 × $0.258 = $116.36."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 735 hours at $0.051/hour. What is the total on-demand compute cost?",
    "options": [
      "$37.48",
      "$22.49",
      "$52.98",
      "$79.48"
    ],
    "answer": 0,
    "explanation": "735 × $0.051 = $37.48."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 157 hours at $0.441/hour. What is the total on-demand compute cost?",
    "options": [
      "$111.24",
      "$69.24",
      "$84.74",
      "$41.54"
    ],
    "answer": 1,
    "explanation": "157 × $0.441 = $69.24."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 194 hours at $0.101/hour. What is the total on-demand compute cost?",
    "options": [
      "$19.59",
      "$61.59",
      "$11.75",
      "$35.09"
    ],
    "answer": 0,
    "explanation": "194 × $0.101 = $19.59."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 379 hours at $0.060/hour. What is the total on-demand compute cost?",
    "options": [
      "$64.74",
      "$38.24",
      "$13.64",
      "$22.74"
    ],
    "answer": 3,
    "explanation": "379 × $0.060 = $22.74."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 520 GB in S3 Standard at $0.039/GB/month costs how much monthly?",
    "options": [
      "$25.53",
      "$36.50",
      "$20.28",
      "$18.18"
    ],
    "answer": 2,
    "explanation": "520 × $0.039 = $20.28 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 117 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$7.94",
      "$2.69",
      "$4.84",
      "$0.59"
    ],
    "answer": 1,
    "explanation": "117 × $0.023 = $2.69 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 571 hours at $0.236/hour. What is the total on-demand compute cost?",
    "options": [
      "$80.86",
      "$150.26",
      "$134.76",
      "$176.76"
    ],
    "answer": 2,
    "explanation": "571 × $0.236 = $134.76."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 345 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$17.56",
      "$19.66",
      "$35.39",
      "$24.91"
    ],
    "answer": 1,
    "explanation": "345 × $0.057 = $19.66 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 336 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$22.37",
      "$12.43",
      "$10.33",
      "$17.68"
    ],
    "answer": 1,
    "explanation": "336 × $0.037 = $12.43 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 754 hours at $0.219/hour. What is the total on-demand compute cost?",
    "options": [
      "$99.08",
      "$180.63",
      "$165.13",
      "$207.13"
    ],
    "answer": 2,
    "explanation": "754 × $0.219 = $165.13."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 663 hours at $0.255/hour. What is the total on-demand compute cost?",
    "options": [
      "$169.06",
      "$184.56",
      "$211.06",
      "$101.44"
    ],
    "answer": 0,
    "explanation": "663 × $0.255 = $169.06."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 187 hours at $0.241/hour. What is the total on-demand compute cost?",
    "options": [
      "$45.07",
      "$27.04",
      "$60.57",
      "$87.07"
    ],
    "answer": 0,
    "explanation": "187 × $0.241 = $45.07."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 376 hours at $0.531/hour. What is the total on-demand compute cost?",
    "options": [
      "$241.66",
      "$215.16",
      "$199.66",
      "$119.80"
    ],
    "answer": 2,
    "explanation": "376 × $0.531 = $199.66."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 496 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$5.95",
      "$3.85",
      "$11.20",
      "$10.71"
    ],
    "answer": 0,
    "explanation": "496 × $0.012 = $5.95 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 212 hours at $0.203/hour. What is the total on-demand compute cost?",
    "options": [
      "$25.82",
      "$58.54",
      "$85.04",
      "$43.04"
    ],
    "answer": 3,
    "explanation": "212 × $0.203 = $43.04."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 380 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$10.06",
      "$21.89",
      "$12.16",
      "$17.41"
    ],
    "answer": 2,
    "explanation": "380 × $0.032 = $12.16 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 332 hours at $0.167/hour. What is the total on-demand compute cost?",
    "options": [
      "$33.26",
      "$55.44",
      "$97.44",
      "$70.94"
    ],
    "answer": 1,
    "explanation": "332 × $0.167 = $55.44."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 714 hours at $0.412/hour. What is the total on-demand compute cost?",
    "options": [
      "$294.17",
      "$176.50",
      "$336.17",
      "$309.67"
    ],
    "answer": 0,
    "explanation": "714 × $0.412 = $294.17."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 136 GB in S3 Standard at $0.017/GB/month costs how much monthly?",
    "options": [
      "$2.31",
      "$7.56",
      "$0.21",
      "$4.16"
    ],
    "answer": 0,
    "explanation": "136 × $0.017 = $2.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 518 hours at $0.136/hour. What is the total on-demand compute cost?",
    "options": [
      "$70.45",
      "$112.45",
      "$42.27",
      "$85.95"
    ],
    "answer": 0,
    "explanation": "518 × $0.136 = $70.45."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 60 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$2.38",
      "$6.57",
      "$1.32",
      "$-0.78"
    ],
    "answer": 2,
    "explanation": "60 × $0.022 = $1.32 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 265 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$19.56",
      "$25.76",
      "$14.31",
      "$12.21"
    ],
    "answer": 2,
    "explanation": "265 × $0.054 = $14.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 509 hours at $0.393/hour. What is the total on-demand compute cost?",
    "options": [
      "$215.54",
      "$242.04",
      "$120.02",
      "$200.04"
    ],
    "answer": 3,
    "explanation": "509 × $0.393 = $200.04."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 338 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$29.81",
      "$21.81",
      "$16.56",
      "$14.46"
    ],
    "answer": 2,
    "explanation": "338 × $0.049 = $16.56 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 431 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$14.73",
      "$7.38",
      "$17.06",
      "$9.48"
    ],
    "answer": 3,
    "explanation": "431 × $0.022 = $9.48 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 181 hours at $0.296/hour. What is the total on-demand compute cost?",
    "options": [
      "$69.08",
      "$95.58",
      "$53.58",
      "$32.15"
    ],
    "answer": 2,
    "explanation": "181 × $0.296 = $53.58."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 763 hours at $0.395/hour. What is the total on-demand compute cost?",
    "options": [
      "$180.83",
      "$343.38",
      "$301.38",
      "$316.88"
    ],
    "answer": 2,
    "explanation": "763 × $0.395 = $301.38."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 654 hours at $0.457/hour. What is the total on-demand compute cost?",
    "options": [
      "$179.33",
      "$314.38",
      "$298.88",
      "$340.88"
    ],
    "answer": 2,
    "explanation": "654 × $0.457 = $298.88."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 636 hours at $0.182/hour. What is the total on-demand compute cost?",
    "options": [
      "$157.75",
      "$131.25",
      "$69.45",
      "$115.75"
    ],
    "answer": 3,
    "explanation": "636 × $0.182 = $115.75."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 282 GB in S3 Standard at $0.021/GB/month costs how much monthly?",
    "options": [
      "$3.82",
      "$10.66",
      "$5.92",
      "$11.17"
    ],
    "answer": 2,
    "explanation": "282 × $0.021 = $5.92 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 150 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$0.15",
      "$2.25",
      "$7.50",
      "$4.05"
    ],
    "answer": 1,
    "explanation": "150 × $0.015 = $2.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 579 hours at $0.383/hour. What is the total on-demand compute cost?",
    "options": [
      "$263.76",
      "$221.76",
      "$133.06",
      "$237.26"
    ],
    "answer": 1,
    "explanation": "579 × $0.383 = $221.76."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 428 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$18.52",
      "$13.27",
      "$11.17",
      "$23.89"
    ],
    "answer": 1,
    "explanation": "428 × $0.031 = $13.27 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 378 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$4.91",
      "$2.81",
      "$10.16",
      "$8.84"
    ],
    "answer": 0,
    "explanation": "378 × $0.013 = $4.91 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 145 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$7.28",
      "$2.03",
      "$3.65",
      "$-0.07"
    ],
    "answer": 1,
    "explanation": "145 × $0.014 = $2.03 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 395 hours at $0.073/hour. What is the total on-demand compute cost?",
    "options": [
      "$17.30",
      "$70.83",
      "$28.83",
      "$44.33"
    ],
    "answer": 2,
    "explanation": "395 × $0.073 = $28.83."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 549 hours at $0.066/hour. What is the total on-demand compute cost?",
    "options": [
      "$36.23",
      "$51.73",
      "$21.74",
      "$78.23"
    ],
    "answer": 0,
    "explanation": "549 × $0.066 = $36.23."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 518 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$11.47",
      "$4.12",
      "$11.20",
      "$6.22"
    ],
    "answer": 3,
    "explanation": "518 × $0.012 = $6.22 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 161 GB in S3 Standard at $0.033/GB/month costs how much monthly?",
    "options": [
      "$3.21",
      "$5.31",
      "$10.56",
      "$9.56"
    ],
    "answer": 1,
    "explanation": "161 × $0.033 = $5.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 405 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$22.27",
      "$27.52",
      "$20.17",
      "$40.09"
    ],
    "answer": 0,
    "explanation": "405 × $0.055 = $22.27 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 327 hours at $0.482/hour. What is the total on-demand compute cost?",
    "options": [
      "$173.11",
      "$94.57",
      "$157.61",
      "$199.61"
    ],
    "answer": 2,
    "explanation": "327 × $0.482 = $157.61."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 182 hours at $0.468/hour. What is the total on-demand compute cost?",
    "options": [
      "$100.68",
      "$127.18",
      "$85.18",
      "$51.11"
    ],
    "answer": 2,
    "explanation": "182 × $0.468 = $85.18."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 319 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$12.59",
      "$7.34",
      "$13.21",
      "$5.24"
    ],
    "answer": 1,
    "explanation": "319 × $0.023 = $7.34 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 342 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$12.65",
      "$17.90",
      "$22.77",
      "$10.55"
    ],
    "answer": 0,
    "explanation": "342 × $0.037 = $12.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 263 hours at $0.103/hour. What is the total on-demand compute cost?",
    "options": [
      "$16.25",
      "$42.59",
      "$69.09",
      "$27.09"
    ],
    "answer": 3,
    "explanation": "263 × $0.103 = $27.09."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 216 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$9.56",
      "$20.99",
      "$11.66",
      "$16.91"
    ],
    "answer": 2,
    "explanation": "216 × $0.054 = $11.66 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 105 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$2.62",
      "$8.50",
      "$4.72",
      "$9.97"
    ],
    "answer": 2,
    "explanation": "105 × $0.045 = $4.72 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 708 hours at $0.130/hour. What is the total on-demand compute cost?",
    "options": [
      "$107.54",
      "$92.04",
      "$55.22",
      "$134.04"
    ],
    "answer": 1,
    "explanation": "708 × $0.130 = $92.04."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 753 hours at $0.154/hour. What is the total on-demand compute cost?",
    "options": [
      "$131.46",
      "$69.58",
      "$157.96",
      "$115.96"
    ],
    "answer": 3,
    "explanation": "753 × $0.154 = $115.96."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 182 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$16.70",
      "$7.18",
      "$9.28",
      "$14.53"
    ],
    "answer": 2,
    "explanation": "182 × $0.051 = $9.28 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 539 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$6.47",
      "$11.72",
      "$11.65",
      "$4.37"
    ],
    "answer": 0,
    "explanation": "539 × $0.012 = $6.47 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 380 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$2.46",
      "$8.21",
      "$9.81",
      "$4.56"
    ],
    "answer": 3,
    "explanation": "380 × $0.012 = $4.56 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 187 hours at $0.102/hour. What is the total on-demand compute cost?",
    "options": [
      "$61.07",
      "$19.07",
      "$34.57",
      "$11.44"
    ],
    "answer": 1,
    "explanation": "187 × $0.102 = $19.07."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 283 hours at $0.242/hour. What is the total on-demand compute cost?",
    "options": [
      "$110.49",
      "$68.49",
      "$41.09",
      "$83.99"
    ],
    "answer": 1,
    "explanation": "283 × $0.242 = $68.49."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 699 hours at $0.316/hour. What is the total on-demand compute cost?",
    "options": [
      "$262.88",
      "$220.88",
      "$236.38",
      "$132.53"
    ],
    "answer": 1,
    "explanation": "699 × $0.316 = $220.88."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 534 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$10.68",
      "$15.93",
      "$8.58",
      "$19.22"
    ],
    "answer": 0,
    "explanation": "534 × $0.020 = $10.68 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 388 hours at $0.086/hour. What is the total on-demand compute cost?",
    "options": [
      "$48.87",
      "$75.37",
      "$33.37",
      "$20.02"
    ],
    "answer": 2,
    "explanation": "388 × $0.086 = $33.37."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 812 hours at $0.295/hour. What is the total on-demand compute cost?",
    "options": [
      "$255.04",
      "$239.54",
      "$281.54",
      "$143.72"
    ],
    "answer": 1,
    "explanation": "812 × $0.295 = $239.54."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 114 hours at $0.510/hour. What is the total on-demand compute cost?",
    "options": [
      "$58.14",
      "$100.14",
      "$73.64",
      "$34.88"
    ],
    "answer": 0,
    "explanation": "114 × $0.510 = $58.14."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 814 hours at $0.501/hour. What is the total on-demand compute cost?",
    "options": [
      "$407.81",
      "$449.81",
      "$244.69",
      "$423.31"
    ],
    "answer": 0,
    "explanation": "814 × $0.501 = $407.81."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 471 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$12.50",
      "$26.28",
      "$14.60",
      "$19.85"
    ],
    "answer": 2,
    "explanation": "471 × $0.031 = $14.60 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 193 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$7.76",
      "$2.51",
      "$4.52",
      "$0.41"
    ],
    "answer": 1,
    "explanation": "193 × $0.013 = $2.51 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 541 hours at $0.319/hour. What is the total on-demand compute cost?",
    "options": [
      "$172.58",
      "$214.58",
      "$188.08",
      "$103.55"
    ],
    "answer": 0,
    "explanation": "541 × $0.319 = $172.58."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 780 hours at $0.114/hour. What is the total on-demand compute cost?",
    "options": [
      "$53.35",
      "$130.92",
      "$88.92",
      "$104.42"
    ],
    "answer": 2,
    "explanation": "780 × $0.114 = $88.92."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 437 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$7.51",
      "$14.86",
      "$9.61",
      "$17.30"
    ],
    "answer": 2,
    "explanation": "437 × $0.022 = $9.61 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 691 hours at $0.512/hour. What is the total on-demand compute cost?",
    "options": [
      "$369.29",
      "$353.79",
      "$395.79",
      "$212.27"
    ],
    "answer": 1,
    "explanation": "691 × $0.512 = $353.79."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 132 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$2.64",
      "$7.89",
      "$0.54",
      "$4.75"
    ],
    "answer": 0,
    "explanation": "132 × $0.020 = $2.64 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 433 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$27.33",
      "$39.74",
      "$19.98",
      "$22.08"
    ],
    "answer": 3,
    "explanation": "433 × $0.051 = $22.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 362 GB in S3 Standard at $0.041/GB/month costs how much monthly?",
    "options": [
      "$20.09",
      "$14.84",
      "$26.71",
      "$12.74"
    ],
    "answer": 1,
    "explanation": "362 × $0.041 = $14.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 282 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$21.61",
      "$14.26",
      "$16.36",
      "$29.45"
    ],
    "answer": 2,
    "explanation": "282 × $0.058 = $16.36 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 69 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$1.59",
      "$6.84",
      "$2.86",
      "$-0.51"
    ],
    "answer": 0,
    "explanation": "69 × $0.023 = $1.59 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 428 hours at $0.189/hour. What is the total on-demand compute cost?",
    "options": [
      "$96.39",
      "$80.89",
      "$48.53",
      "$122.89"
    ],
    "answer": 1,
    "explanation": "428 × $0.189 = $80.89."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 480 hours at $0.340/hour. What is the total on-demand compute cost?",
    "options": [
      "$163.20",
      "$205.20",
      "$178.70",
      "$97.92"
    ],
    "answer": 0,
    "explanation": "480 × $0.340 = $163.20."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 273 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$5.27",
      "$13.27",
      "$7.37",
      "$12.62"
    ],
    "answer": 2,
    "explanation": "273 × $0.027 = $7.37 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 287 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$14.98",
      "$8.32",
      "$13.57",
      "$6.22"
    ],
    "answer": 1,
    "explanation": "287 × $0.029 = $8.32 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 544 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$24.83",
      "$35.24",
      "$17.48",
      "$19.58"
    ],
    "answer": 3,
    "explanation": "544 × $0.036 = $19.58 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 350 hours at $0.429/hour. What is the total on-demand compute cost?",
    "options": [
      "$192.15",
      "$165.65",
      "$150.15",
      "$90.09"
    ],
    "answer": 2,
    "explanation": "350 × $0.429 = $150.15."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 396 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$17.03",
      "$14.93",
      "$22.28",
      "$30.65"
    ],
    "answer": 0,
    "explanation": "396 × $0.043 = $17.03 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 597 hours at $0.242/hour. What is the total on-demand compute cost?",
    "options": [
      "$159.97",
      "$144.47",
      "$186.47",
      "$86.68"
    ],
    "answer": 1,
    "explanation": "597 × $0.242 = $144.47."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 388 hours at $0.250/hour. What is the total on-demand compute cost?",
    "options": [
      "$112.50",
      "$97.00",
      "$58.20",
      "$139.00"
    ],
    "answer": 1,
    "explanation": "388 × $0.250 = $97.00."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 207 hours at $0.132/hour. What is the total on-demand compute cost?",
    "options": [
      "$27.32",
      "$69.32",
      "$16.39",
      "$42.82"
    ],
    "answer": 0,
    "explanation": "207 × $0.132 = $27.32."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 438 GB in S3 Standard at $0.041/GB/month costs how much monthly?",
    "options": [
      "$15.86",
      "$17.96",
      "$32.33",
      "$23.21"
    ],
    "answer": 1,
    "explanation": "438 × $0.041 = $17.96 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 253 hours at $0.121/hour. What is the total on-demand compute cost?",
    "options": [
      "$18.37",
      "$30.61",
      "$72.61",
      "$46.11"
    ],
    "answer": 1,
    "explanation": "253 × $0.121 = $30.61."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 514 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$21.28",
      "$9.72",
      "$11.82",
      "$17.07"
    ],
    "answer": 2,
    "explanation": "514 × $0.023 = $11.82 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 692 hours at $0.330/hour. What is the total on-demand compute cost?",
    "options": [
      "$243.86",
      "$137.02",
      "$270.36",
      "$228.36"
    ],
    "answer": 3,
    "explanation": "692 × $0.330 = $228.36."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 167 hours at $0.158/hour. What is the total on-demand compute cost?",
    "options": [
      "$41.89",
      "$26.39",
      "$68.39",
      "$15.83"
    ],
    "answer": 1,
    "explanation": "167 × $0.158 = $26.39."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 170 hours at $0.526/hour. What is the total on-demand compute cost?",
    "options": [
      "$53.65",
      "$89.42",
      "$104.92",
      "$131.42"
    ],
    "answer": 1,
    "explanation": "170 × $0.526 = $89.42."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 296 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$18.57",
      "$13.32",
      "$11.22",
      "$23.98"
    ],
    "answer": 1,
    "explanation": "296 × $0.045 = $13.32 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 429 hours at $0.254/hour. What is the total on-demand compute cost?",
    "options": [
      "$124.47",
      "$108.97",
      "$65.38",
      "$150.97"
    ],
    "answer": 1,
    "explanation": "429 × $0.254 = $108.97."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 173 hours at $0.350/hour. What is the total on-demand compute cost?",
    "options": [
      "$60.55",
      "$36.33",
      "$76.05",
      "$102.55"
    ],
    "answer": 0,
    "explanation": "173 × $0.350 = $60.55."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 171 GB in S3 Standard at $0.033/GB/month costs how much monthly?",
    "options": [
      "$10.89",
      "$10.15",
      "$3.54",
      "$5.64"
    ],
    "answer": 3,
    "explanation": "171 × $0.033 = $5.64 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 203 GB in S3 Standard at $0.028/GB/month costs how much monthly?",
    "options": [
      "$3.58",
      "$10.22",
      "$10.93",
      "$5.68"
    ],
    "answer": 3,
    "explanation": "203 × $0.028 = $5.68 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 375 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$23.63",
      "$18.38",
      "$11.03",
      "$13.13"
    ],
    "answer": 3,
    "explanation": "375 × $0.035 = $13.13 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 489 hours at $0.224/hour. What is the total on-demand compute cost?",
    "options": [
      "$125.04",
      "$151.54",
      "$65.72",
      "$109.54"
    ],
    "answer": 3,
    "explanation": "489 × $0.224 = $109.54."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 752 hours at $0.496/hour. What is the total on-demand compute cost?",
    "options": [
      "$388.49",
      "$372.99",
      "$223.79",
      "$414.99"
    ],
    "answer": 1,
    "explanation": "752 × $0.496 = $372.99."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 434 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$21.34",
      "$28.69",
      "$23.44",
      "$42.19"
    ],
    "answer": 2,
    "explanation": "434 × $0.054 = $23.44 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 182 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$6.23",
      "$1.36",
      "$3.46",
      "$8.71"
    ],
    "answer": 2,
    "explanation": "182 × $0.019 = $3.46 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 276 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$8.39",
      "$10.49",
      "$18.88",
      "$15.74"
    ],
    "answer": 1,
    "explanation": "276 × $0.038 = $10.49 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 117 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$3.98",
      "$1.88",
      "$9.23",
      "$7.16"
    ],
    "answer": 0,
    "explanation": "117 × $0.034 = $3.98 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 301 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$19.51",
      "$10.84",
      "$16.09",
      "$8.74"
    ],
    "answer": 1,
    "explanation": "301 × $0.036 = $10.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 374 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$21.55",
      "$17.22",
      "$9.87",
      "$11.97"
    ],
    "answer": 3,
    "explanation": "374 × $0.032 = $11.97 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 774 hours at $0.288/hour. What is the total on-demand compute cost?",
    "options": [
      "$238.41",
      "$264.91",
      "$222.91",
      "$133.75"
    ],
    "answer": 2,
    "explanation": "774 × $0.288 = $222.91."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 686 hours at $0.209/hour. What is the total on-demand compute cost?",
    "options": [
      "$143.37",
      "$86.02",
      "$158.87",
      "$185.37"
    ],
    "answer": 0,
    "explanation": "686 × $0.209 = $143.37."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 222 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$8.78",
      "$10.88",
      "$16.13",
      "$19.58"
    ],
    "answer": 1,
    "explanation": "222 × $0.049 = $10.88 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 719 hours at $0.149/hour. What is the total on-demand compute cost?",
    "options": [
      "$107.13",
      "$64.28",
      "$149.13",
      "$122.63"
    ],
    "answer": 0,
    "explanation": "719 × $0.149 = $107.13."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 432 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$26.44",
      "$12.59",
      "$19.94",
      "$14.69"
    ],
    "answer": 3,
    "explanation": "432 × $0.034 = $14.69 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 555 hours at $0.301/hour. What is the total on-demand compute cost?",
    "options": [
      "$167.06",
      "$100.24",
      "$209.06",
      "$182.56"
    ],
    "answer": 0,
    "explanation": "555 × $0.301 = $167.06."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 139 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$2.77",
      "$4.87",
      "$8.77",
      "$10.12"
    ],
    "answer": 1,
    "explanation": "139 × $0.035 = $4.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 343 hours at $0.214/hour. What is the total on-demand compute cost?",
    "options": [
      "$73.40",
      "$44.04",
      "$88.90",
      "$115.40"
    ],
    "answer": 0,
    "explanation": "343 × $0.214 = $73.40."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 451 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$5.41",
      "$3.31",
      "$10.66",
      "$9.74"
    ],
    "answer": 0,
    "explanation": "451 × $0.012 = $5.41 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 397 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$19.06",
      "$34.31",
      "$24.31",
      "$16.96"
    ],
    "answer": 0,
    "explanation": "397 × $0.048 = $19.06 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 750 hours at $0.166/hour. What is the total on-demand compute cost?",
    "options": [
      "$124.50",
      "$74.70",
      "$140.00",
      "$166.50"
    ],
    "answer": 0,
    "explanation": "750 × $0.166 = $124.50."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 278 hours at $0.534/hour. What is the total on-demand compute cost?",
    "options": [
      "$148.45",
      "$190.45",
      "$89.07",
      "$163.95"
    ],
    "answer": 0,
    "explanation": "278 × $0.534 = $148.45."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 305 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$10.98",
      "$4.00",
      "$11.35",
      "$6.10"
    ],
    "answer": 3,
    "explanation": "305 × $0.020 = $6.10 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 445 hours at $0.427/hour. What is the total on-demand compute cost?",
    "options": [
      "$205.51",
      "$190.01",
      "$114.01",
      "$232.01"
    ],
    "answer": 1,
    "explanation": "445 × $0.427 = $190.01."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 176 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$9.30",
      "$4.05",
      "$7.29",
      "$1.95"
    ],
    "answer": 1,
    "explanation": "176 × $0.023 = $4.05 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 402 hours at $0.078/hour. What is the total on-demand compute cost?",
    "options": [
      "$73.36",
      "$18.82",
      "$31.36",
      "$46.86"
    ],
    "answer": 2,
    "explanation": "402 × $0.078 = $31.36."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 165 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$15.14",
      "$8.41",
      "$6.31",
      "$13.66"
    ],
    "answer": 1,
    "explanation": "165 × $0.051 = $8.41 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 202 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$6.79",
      "$14.14",
      "$8.89",
      "$16.00"
    ],
    "answer": 2,
    "explanation": "202 × $0.044 = $8.89 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 534 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$11.66",
      "$4.31",
      "$6.41",
      "$11.54"
    ],
    "answer": 2,
    "explanation": "534 × $0.012 = $6.41 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 800 hours at $0.068/hour. What is the total on-demand compute cost?",
    "options": [
      "$96.40",
      "$54.40",
      "$69.90",
      "$32.64"
    ],
    "answer": 1,
    "explanation": "800 × $0.068 = $54.40."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 117 hours at $0.266/hour. What is the total on-demand compute cost?",
    "options": [
      "$46.62",
      "$31.12",
      "$18.67",
      "$73.12"
    ],
    "answer": 1,
    "explanation": "117 × $0.266 = $31.12."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 176 hours at $0.324/hour. What is the total on-demand compute cost?",
    "options": [
      "$57.02",
      "$99.02",
      "$72.52",
      "$34.21"
    ],
    "answer": 0,
    "explanation": "176 × $0.324 = $57.02."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 123 hours at $0.218/hour. What is the total on-demand compute cost?",
    "options": [
      "$26.81",
      "$68.81",
      "$42.31",
      "$16.09"
    ],
    "answer": 0,
    "explanation": "123 × $0.218 = $26.81."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 660 hours at $0.509/hour. What is the total on-demand compute cost?",
    "options": [
      "$377.94",
      "$351.44",
      "$201.56",
      "$335.94"
    ],
    "answer": 3,
    "explanation": "660 × $0.509 = $335.94."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 57 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$2.57",
      "$-0.67",
      "$1.43",
      "$6.68"
    ],
    "answer": 2,
    "explanation": "57 × $0.025 = $1.43 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 399 hours at $0.105/hour. What is the total on-demand compute cost?",
    "options": [
      "$57.39",
      "$83.89",
      "$25.13",
      "$41.89"
    ],
    "answer": 3,
    "explanation": "399 × $0.105 = $41.89."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 703 hours at $0.484/hour. What is the total on-demand compute cost?",
    "options": [
      "$204.15",
      "$355.75",
      "$382.25",
      "$340.25"
    ],
    "answer": 3,
    "explanation": "703 × $0.484 = $340.25."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 378 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$2.44",
      "$8.17",
      "$9.79",
      "$4.54"
    ],
    "answer": 3,
    "explanation": "378 × $0.012 = $4.54 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 222 hours at $0.511/hour. What is the total on-demand compute cost?",
    "options": [
      "$128.94",
      "$68.06",
      "$113.44",
      "$155.44"
    ],
    "answer": 2,
    "explanation": "222 × $0.511 = $113.44."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 161 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$7.02",
      "$3.19",
      "$1.77",
      "$-0.33"
    ],
    "answer": 2,
    "explanation": "161 × $0.011 = $1.77 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 354 GB in S3 Standard at $0.059/GB/month costs how much monthly?",
    "options": [
      "$26.14",
      "$20.89",
      "$37.60",
      "$18.79"
    ],
    "answer": 1,
    "explanation": "354 × $0.059 = $20.89 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 101 hours at $0.416/hour. What is the total on-demand compute cost?",
    "options": [
      "$25.21",
      "$42.02",
      "$84.02",
      "$57.52"
    ],
    "answer": 1,
    "explanation": "101 × $0.416 = $42.02."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 231 hours at $0.539/hour. What is the total on-demand compute cost?",
    "options": [
      "$140.01",
      "$124.51",
      "$74.71",
      "$166.51"
    ],
    "answer": 1,
    "explanation": "231 × $0.539 = $124.51."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 232 hours at $0.226/hour. What is the total on-demand compute cost?",
    "options": [
      "$52.43",
      "$94.43",
      "$31.46",
      "$67.93"
    ],
    "answer": 0,
    "explanation": "232 × $0.226 = $52.43."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 146 hours at $0.418/hour. What is the total on-demand compute cost?",
    "options": [
      "$76.53",
      "$103.03",
      "$36.62",
      "$61.03"
    ],
    "answer": 3,
    "explanation": "146 × $0.418 = $61.03."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 721 hours at $0.348/hour. What is the total on-demand compute cost?",
    "options": [
      "$266.41",
      "$150.55",
      "$292.91",
      "$250.91"
    ],
    "answer": 3,
    "explanation": "721 × $0.348 = $250.91."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 694 hours at $0.442/hour. What is the total on-demand compute cost?",
    "options": [
      "$348.75",
      "$322.25",
      "$184.05",
      "$306.75"
    ],
    "answer": 3,
    "explanation": "694 × $0.442 = $306.75."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 687 hours at $0.054/hour. What is the total on-demand compute cost?",
    "options": [
      "$79.10",
      "$52.60",
      "$37.10",
      "$22.26"
    ],
    "answer": 2,
    "explanation": "687 × $0.054 = $37.10."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 328 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$7.74",
      "$15.09",
      "$17.71",
      "$9.84"
    ],
    "answer": 3,
    "explanation": "328 × $0.030 = $9.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 456 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$9.85",
      "$5.47",
      "$10.72",
      "$3.37"
    ],
    "answer": 1,
    "explanation": "456 × $0.012 = $5.47 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 485 hours at $0.109/hour. What is the total on-demand compute cost?",
    "options": [
      "$94.87",
      "$52.87",
      "$31.72",
      "$68.37"
    ],
    "answer": 1,
    "explanation": "485 × $0.109 = $52.87."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 228 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$10.21",
      "$22.16",
      "$12.31",
      "$17.56"
    ],
    "answer": 2,
    "explanation": "228 × $0.054 = $12.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 228 GB in S3 Standard at $0.026/GB/month costs how much monthly?",
    "options": [
      "$10.67",
      "$11.18",
      "$5.93",
      "$3.83"
    ],
    "answer": 2,
    "explanation": "228 × $0.026 = $5.93 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 300 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$16.65",
      "$20.52",
      "$9.30",
      "$11.40"
    ],
    "answer": 3,
    "explanation": "300 × $0.038 = $11.40 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 642 hours at $0.161/hour. What is the total on-demand compute cost?",
    "options": [
      "$103.36",
      "$62.02",
      "$145.36",
      "$118.86"
    ],
    "answer": 0,
    "explanation": "642 × $0.161 = $103.36."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 162 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$7.87",
      "$9.62",
      "$4.37",
      "$2.27"
    ],
    "answer": 2,
    "explanation": "162 × $0.027 = $4.37 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 660 hours at $0.349/hour. What is the total on-demand compute cost?",
    "options": [
      "$138.20",
      "$245.84",
      "$272.34",
      "$230.34"
    ],
    "answer": 3,
    "explanation": "660 × $0.349 = $230.34."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 480 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$27.36",
      "$49.25",
      "$25.26",
      "$32.61"
    ],
    "answer": 0,
    "explanation": "480 × $0.057 = $27.36 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 632 hours at $0.484/hour. What is the total on-demand compute cost?",
    "options": [
      "$305.89",
      "$347.89",
      "$321.39",
      "$183.53"
    ],
    "answer": 0,
    "explanation": "632 × $0.484 = $305.89."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 362 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$8.48",
      "$4.71",
      "$9.96",
      "$2.61"
    ],
    "answer": 1,
    "explanation": "362 × $0.013 = $4.71 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 141 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$3.24",
      "$5.83",
      "$8.49",
      "$1.14"
    ],
    "answer": 0,
    "explanation": "141 × $0.023 = $3.24 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 214 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$13.17",
      "$14.26",
      "$5.82",
      "$7.92"
    ],
    "answer": 3,
    "explanation": "214 × $0.037 = $7.92 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 476 GB in S3 Standard at $0.010/GB/month costs how much monthly?",
    "options": [
      "$4.76",
      "$2.66",
      "$8.57",
      "$10.01"
    ],
    "answer": 0,
    "explanation": "476 × $0.010 = $4.76 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 460 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$30.64",
      "$17.02",
      "$22.27",
      "$14.92"
    ],
    "answer": 1,
    "explanation": "460 × $0.037 = $17.02 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 565 hours at $0.211/hour. What is the total on-demand compute cost?",
    "options": [
      "$119.21",
      "$71.53",
      "$161.21",
      "$134.71"
    ],
    "answer": 0,
    "explanation": "565 × $0.211 = $119.21."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 479 hours at $0.541/hour. What is the total on-demand compute cost?",
    "options": [
      "$301.14",
      "$155.48",
      "$274.64",
      "$259.14"
    ],
    "answer": 3,
    "explanation": "479 × $0.541 = $259.14."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 121 hours at $0.376/hour. What is the total on-demand compute cost?",
    "options": [
      "$61.00",
      "$87.50",
      "$27.30",
      "$45.50"
    ],
    "answer": 3,
    "explanation": "121 × $0.376 = $45.50."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 294 hours at $0.059/hour. What is the total on-demand compute cost?",
    "options": [
      "$17.35",
      "$59.35",
      "$10.41",
      "$32.85"
    ],
    "answer": 0,
    "explanation": "294 × $0.059 = $17.35."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 80 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$2.46",
      "$9.81",
      "$8.21",
      "$4.56"
    ],
    "answer": 3,
    "explanation": "80 × $0.057 = $4.56 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 773 hours at $0.546/hour. What is the total on-demand compute cost?",
    "options": [
      "$464.06",
      "$437.56",
      "$422.06",
      "$253.24"
    ],
    "answer": 2,
    "explanation": "773 × $0.546 = $422.06."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 354 hours at $0.427/hour. What is the total on-demand compute cost?",
    "options": [
      "$151.16",
      "$193.16",
      "$166.66",
      "$90.70"
    ],
    "answer": 0,
    "explanation": "354 × $0.427 = $151.16."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 111 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$3.67",
      "$10.39",
      "$11.02",
      "$5.77"
    ],
    "answer": 3,
    "explanation": "111 × $0.052 = $5.77 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 527 hours at $0.283/hour. What is the total on-demand compute cost?",
    "options": [
      "$89.48",
      "$149.14",
      "$164.64",
      "$191.14"
    ],
    "answer": 1,
    "explanation": "527 × $0.283 = $149.14."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 278 hours at $0.442/hour. What is the total on-demand compute cost?",
    "options": [
      "$122.88",
      "$164.88",
      "$73.73",
      "$138.38"
    ],
    "answer": 0,
    "explanation": "278 × $0.442 = $122.88."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 268 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$13.67",
      "$18.92",
      "$24.61",
      "$11.57"
    ],
    "answer": 0,
    "explanation": "268 × $0.051 = $13.67 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 762 hours at $0.155/hour. What is the total on-demand compute cost?",
    "options": [
      "$133.61",
      "$70.87",
      "$160.11",
      "$118.11"
    ],
    "answer": 3,
    "explanation": "762 × $0.155 = $118.11."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 760 hours at $0.354/hour. What is the total on-demand compute cost?",
    "options": [
      "$311.04",
      "$284.54",
      "$269.04",
      "$161.42"
    ],
    "answer": 2,
    "explanation": "760 × $0.354 = $269.04."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 220 hours at $0.332/hour. What is the total on-demand compute cost?",
    "options": [
      "$73.04",
      "$88.54",
      "$115.04",
      "$43.82"
    ],
    "answer": 0,
    "explanation": "220 × $0.332 = $73.04."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 230 hours at $0.112/hour. What is the total on-demand compute cost?",
    "options": [
      "$41.26",
      "$25.76",
      "$67.76",
      "$15.46"
    ],
    "answer": 1,
    "explanation": "230 × $0.112 = $25.76."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 490 hours at $0.174/hour. What is the total on-demand compute cost?",
    "options": [
      "$100.76",
      "$85.26",
      "$127.26",
      "$51.16"
    ],
    "answer": 1,
    "explanation": "490 × $0.174 = $85.26."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 522 hours at $0.322/hour. What is the total on-demand compute cost?",
    "options": [
      "$183.58",
      "$168.08",
      "$100.85",
      "$210.08"
    ],
    "answer": 1,
    "explanation": "522 × $0.322 = $168.08."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 237 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$18.05",
      "$12.80",
      "$23.04",
      "$10.70"
    ],
    "answer": 1,
    "explanation": "237 × $0.054 = $12.80 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 541 hours at $0.136/hour. What is the total on-demand compute cost?",
    "options": [
      "$73.58",
      "$115.58",
      "$44.15",
      "$89.08"
    ],
    "answer": 0,
    "explanation": "541 × $0.136 = $73.58."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 515 hours at $0.382/hour. What is the total on-demand compute cost?",
    "options": [
      "$196.73",
      "$212.23",
      "$238.73",
      "$118.04"
    ],
    "answer": 0,
    "explanation": "515 × $0.382 = $196.73."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 374 hours at $0.391/hour. What is the total on-demand compute cost?",
    "options": [
      "$161.73",
      "$87.74",
      "$188.23",
      "$146.23"
    ],
    "answer": 3,
    "explanation": "374 × $0.391 = $146.23."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 604 hours at $0.214/hour. What is the total on-demand compute cost?",
    "options": [
      "$144.76",
      "$77.56",
      "$171.26",
      "$129.26"
    ],
    "answer": 3,
    "explanation": "604 × $0.214 = $129.26."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 812 hours at $0.308/hour. What is the total on-demand compute cost?",
    "options": [
      "$265.60",
      "$150.06",
      "$292.10",
      "$250.10"
    ],
    "answer": 3,
    "explanation": "812 × $0.308 = $250.10."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 547 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$31.18",
      "$36.43",
      "$29.08",
      "$56.12"
    ],
    "answer": 0,
    "explanation": "547 × $0.057 = $31.18 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 178 hours at $0.248/hour. What is the total on-demand compute cost?",
    "options": [
      "$26.48",
      "$59.64",
      "$86.14",
      "$44.14"
    ],
    "answer": 3,
    "explanation": "178 × $0.248 = $44.14."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 274 hours at $0.074/hour. What is the total on-demand compute cost?",
    "options": [
      "$35.78",
      "$20.28",
      "$12.17",
      "$62.28"
    ],
    "answer": 1,
    "explanation": "274 × $0.074 = $20.28."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 190 hours at $0.352/hour. What is the total on-demand compute cost?",
    "options": [
      "$82.38",
      "$40.13",
      "$108.88",
      "$66.88"
    ],
    "answer": 3,
    "explanation": "190 × $0.352 = $66.88."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 182 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$7.64",
      "$12.89",
      "$5.54",
      "$13.75"
    ],
    "answer": 0,
    "explanation": "182 × $0.042 = $7.64 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 332 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$4.54",
      "$6.64",
      "$11.89",
      "$11.95"
    ],
    "answer": 1,
    "explanation": "332 × $0.020 = $6.64 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 507 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$24.26",
      "$47.45",
      "$31.61",
      "$26.36"
    ],
    "answer": 3,
    "explanation": "507 × $0.052 = $26.36 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 504 hours at $0.376/hour. What is the total on-demand compute cost?",
    "options": [
      "$113.70",
      "$189.50",
      "$231.50",
      "$205.00"
    ],
    "answer": 1,
    "explanation": "504 × $0.376 = $189.50."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 125 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$3.13",
      "$1.03",
      "$5.63",
      "$8.38"
    ],
    "answer": 0,
    "explanation": "125 × $0.025 = $3.13 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 271 GB in S3 Standard at $0.017/GB/month costs how much monthly?",
    "options": [
      "$8.30",
      "$2.51",
      "$9.86",
      "$4.61"
    ],
    "answer": 3,
    "explanation": "271 × $0.017 = $4.61 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 236 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$11.47",
      "$11.62",
      "$4.27",
      "$6.37"
    ],
    "answer": 3,
    "explanation": "236 × $0.027 = $6.37 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 264 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$15.31",
      "$20.56",
      "$27.56",
      "$13.21"
    ],
    "answer": 0,
    "explanation": "264 × $0.058 = $15.31 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 349 hours at $0.385/hour. What is the total on-demand compute cost?",
    "options": [
      "$134.37",
      "$176.37",
      "$149.87",
      "$80.62"
    ],
    "answer": 0,
    "explanation": "349 × $0.385 = $134.37."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 357 GB in S3 Standard at $0.028/GB/month costs how much monthly?",
    "options": [
      "$15.25",
      "$10.00",
      "$18.00",
      "$7.90"
    ],
    "answer": 1,
    "explanation": "357 × $0.028 = $10.00 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 487 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$14.50",
      "$7.15",
      "$9.25",
      "$16.65"
    ],
    "answer": 2,
    "explanation": "487 × $0.019 = $9.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 496 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$29.06",
      "$23.81",
      "$42.86",
      "$21.71"
    ],
    "answer": 1,
    "explanation": "496 × $0.048 = $23.81 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 393 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$21.22",
      "$26.47",
      "$19.12",
      "$38.20"
    ],
    "answer": 0,
    "explanation": "393 × $0.054 = $21.22 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 362 hours at $0.314/hour. What is the total on-demand compute cost?",
    "options": [
      "$129.17",
      "$113.67",
      "$68.20",
      "$155.67"
    ],
    "answer": 1,
    "explanation": "362 × $0.314 = $113.67."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 211 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$7.18",
      "$16.70",
      "$14.53",
      "$9.28"
    ],
    "answer": 3,
    "explanation": "211 × $0.044 = $9.28 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 290 hours at $0.310/hour. What is the total on-demand compute cost?",
    "options": [
      "$89.90",
      "$53.94",
      "$131.90",
      "$105.40"
    ],
    "answer": 0,
    "explanation": "290 × $0.310 = $89.90."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 364 hours at $0.130/hour. What is the total on-demand compute cost?",
    "options": [
      "$89.32",
      "$28.39",
      "$47.32",
      "$62.82"
    ],
    "answer": 2,
    "explanation": "364 × $0.130 = $47.32."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 457 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$10.73",
      "$9.86",
      "$3.38",
      "$5.48"
    ],
    "answer": 3,
    "explanation": "457 × $0.012 = $5.48 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 285 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$1.89",
      "$3.99",
      "$7.18",
      "$9.24"
    ],
    "answer": 1,
    "explanation": "285 × $0.014 = $3.99 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 794 hours at $0.320/hour. What is the total on-demand compute cost?",
    "options": [
      "$296.08",
      "$152.45",
      "$254.08",
      "$269.58"
    ],
    "answer": 2,
    "explanation": "794 × $0.320 = $254.08."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 391 GB in S3 Standard at $0.016/GB/month costs how much monthly?",
    "options": [
      "$11.51",
      "$6.26",
      "$4.16",
      "$11.27"
    ],
    "answer": 1,
    "explanation": "391 × $0.016 = $6.26 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 149 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$3.56",
      "$10.91",
      "$10.19",
      "$5.66"
    ],
    "answer": 3,
    "explanation": "149 × $0.038 = $5.66 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 434 hours at $0.539/hour. What is the total on-demand compute cost?",
    "options": [
      "$233.93",
      "$249.43",
      "$275.93",
      "$140.36"
    ],
    "answer": 0,
    "explanation": "434 × $0.539 = $233.93."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 282 GB in S3 Standard at $0.056/GB/month costs how much monthly?",
    "options": [
      "$15.79",
      "$21.04",
      "$28.42",
      "$13.69"
    ],
    "answer": 0,
    "explanation": "282 × $0.056 = $15.79 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 311 hours at $0.386/hour. What is the total on-demand compute cost?",
    "options": [
      "$72.03",
      "$135.55",
      "$120.05",
      "$162.05"
    ],
    "answer": 2,
    "explanation": "311 × $0.386 = $120.05."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 418 GB in S3 Standard at $0.026/GB/month costs how much monthly?",
    "options": [
      "$8.77",
      "$16.12",
      "$19.57",
      "$10.87"
    ],
    "answer": 3,
    "explanation": "418 × $0.026 = $10.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 418 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$5.42",
      "$13.54",
      "$7.52",
      "$12.77"
    ],
    "answer": 2,
    "explanation": "418 × $0.018 = $7.52 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 99 GB in S3 Standard at $0.056/GB/month costs how much monthly?",
    "options": [
      "$10.79",
      "$3.44",
      "$9.97",
      "$5.54"
    ],
    "answer": 3,
    "explanation": "99 × $0.056 = $5.54 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 230 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$9.85",
      "$8.28",
      "$2.50",
      "$4.60"
    ],
    "answer": 3,
    "explanation": "230 × $0.020 = $4.60 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 501 hours at $0.206/hour. What is the total on-demand compute cost?",
    "options": [
      "$61.93",
      "$103.21",
      "$118.71",
      "$145.21"
    ],
    "answer": 1,
    "explanation": "501 × $0.206 = $103.21."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 348 hours at $0.479/hour. What is the total on-demand compute cost?",
    "options": [
      "$100.01",
      "$166.69",
      "$182.19",
      "$208.69"
    ],
    "answer": 1,
    "explanation": "348 × $0.479 = $166.69."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 523 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$5.75",
      "$10.35",
      "$3.65",
      "$11.00"
    ],
    "answer": 0,
    "explanation": "523 × $0.011 = $5.75 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 189 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$14.63",
      "$8.13",
      "$13.38",
      "$6.03"
    ],
    "answer": 1,
    "explanation": "189 × $0.043 = $8.13 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 352 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$15.14",
      "$13.04",
      "$20.39",
      "$27.25"
    ],
    "answer": 0,
    "explanation": "352 × $0.043 = $15.14 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 551 hours at $0.407/hour. What is the total on-demand compute cost?",
    "options": [
      "$224.26",
      "$266.26",
      "$239.76",
      "$134.56"
    ],
    "answer": 0,
    "explanation": "551 × $0.407 = $224.26."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 524 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$6.81",
      "$4.71",
      "$12.26",
      "$12.06"
    ],
    "answer": 0,
    "explanation": "524 × $0.013 = $6.81 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 312 hours at $0.368/hour. What is the total on-demand compute cost?",
    "options": [
      "$130.32",
      "$114.82",
      "$68.89",
      "$156.82"
    ],
    "answer": 1,
    "explanation": "312 × $0.368 = $114.82."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 413 GB in S3 Standard at $0.040/GB/month costs how much monthly?",
    "options": [
      "$14.42",
      "$29.74",
      "$21.77",
      "$16.52"
    ],
    "answer": 3,
    "explanation": "413 × $0.040 = $16.52 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 712 hours at $0.445/hour. What is the total on-demand compute cost?",
    "options": [
      "$332.34",
      "$358.84",
      "$316.84",
      "$190.10"
    ],
    "answer": 2,
    "explanation": "712 × $0.445 = $316.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 480 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$39.74",
      "$22.08",
      "$27.33",
      "$19.98"
    ],
    "answer": 1,
    "explanation": "480 × $0.046 = $22.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 315 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$17.32",
      "$22.57",
      "$31.18",
      "$15.22"
    ],
    "answer": 0,
    "explanation": "315 × $0.055 = $17.32 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 500 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$32.40",
      "$23.25",
      "$18.00",
      "$15.90"
    ],
    "answer": 2,
    "explanation": "500 × $0.036 = $18.00 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 68 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$-0.13",
      "$1.97",
      "$3.55",
      "$7.22"
    ],
    "answer": 1,
    "explanation": "68 × $0.029 = $1.97 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 428 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$9.84",
      "$17.71",
      "$7.74",
      "$15.09"
    ],
    "answer": 0,
    "explanation": "428 × $0.023 = $9.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 566 hours at $0.138/hour. What is the total on-demand compute cost?",
    "options": [
      "$78.11",
      "$93.61",
      "$120.11",
      "$46.87"
    ],
    "answer": 0,
    "explanation": "566 × $0.138 = $78.11."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 165 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$2.15",
      "$7.40",
      "$0.05",
      "$3.87"
    ],
    "answer": 0,
    "explanation": "165 × $0.013 = $2.15 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 300 GB in S3 Standard at $0.040/GB/month costs how much monthly?",
    "options": [
      "$17.25",
      "$9.90",
      "$21.60",
      "$12.00"
    ],
    "answer": 3,
    "explanation": "300 × $0.040 = $12.00 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 330 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$20.20",
      "$11.22",
      "$9.12",
      "$16.47"
    ],
    "answer": 1,
    "explanation": "330 × $0.034 = $11.22 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 121 hours at $0.485/hour. What is the total on-demand compute cost?",
    "options": [
      "$58.68",
      "$100.68",
      "$74.18",
      "$35.21"
    ],
    "answer": 0,
    "explanation": "121 × $0.485 = $58.68."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 293 hours at $0.195/hour. What is the total on-demand compute cost?",
    "options": [
      "$99.14",
      "$34.28",
      "$72.64",
      "$57.14"
    ],
    "answer": 3,
    "explanation": "293 × $0.195 = $57.14."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 555 hours at $0.284/hour. What is the total on-demand compute cost?",
    "options": [
      "$199.62",
      "$94.57",
      "$173.12",
      "$157.62"
    ],
    "answer": 3,
    "explanation": "555 × $0.284 = $157.62."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 545 hours at $0.210/hour. What is the total on-demand compute cost?",
    "options": [
      "$114.45",
      "$156.45",
      "$68.67",
      "$129.95"
    ],
    "answer": 0,
    "explanation": "545 × $0.210 = $114.45."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 418 hours at $0.268/hour. What is the total on-demand compute cost?",
    "options": [
      "$67.21",
      "$154.02",
      "$127.52",
      "$112.02"
    ],
    "answer": 3,
    "explanation": "418 × $0.268 = $112.02."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 131 hours at $0.056/hour. What is the total on-demand compute cost?",
    "options": [
      "$7.34",
      "$22.84",
      "$4.40",
      "$49.34"
    ],
    "answer": 0,
    "explanation": "131 × $0.056 = $7.34."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 424 hours at $0.354/hour. What is the total on-demand compute cost?",
    "options": [
      "$90.06",
      "$165.60",
      "$192.10",
      "$150.10"
    ],
    "answer": 3,
    "explanation": "424 × $0.354 = $150.10."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 584 hours at $0.460/hour. What is the total on-demand compute cost?",
    "options": [
      "$268.64",
      "$284.14",
      "$161.18",
      "$310.64"
    ],
    "answer": 0,
    "explanation": "584 × $0.460 = $268.64."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 462 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$24.49",
      "$22.39",
      "$29.74",
      "$44.08"
    ],
    "answer": 0,
    "explanation": "462 × $0.053 = $24.49 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 247 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$8.27",
      "$15.62",
      "$18.67",
      "$10.37"
    ],
    "answer": 3,
    "explanation": "247 × $0.042 = $10.37 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 187 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$14.47",
      "$5.94",
      "$13.29",
      "$8.04"
    ],
    "answer": 3,
    "explanation": "187 × $0.043 = $8.04 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 666 hours at $0.113/hour. What is the total on-demand compute cost?",
    "options": [
      "$117.26",
      "$45.16",
      "$90.76",
      "$75.26"
    ],
    "answer": 3,
    "explanation": "666 × $0.113 = $75.26."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 147 GB in S3 Standard at $0.016/GB/month costs how much monthly?",
    "options": [
      "$7.60",
      "$4.23",
      "$0.25",
      "$2.35"
    ],
    "answer": 3,
    "explanation": "147 × $0.016 = $2.35 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 183 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$0.46",
      "$2.56",
      "$7.81",
      "$4.61"
    ],
    "answer": 1,
    "explanation": "183 × $0.014 = $2.56 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 182 GB in S3 Standard at $0.024/GB/month costs how much monthly?",
    "options": [
      "$7.87",
      "$2.27",
      "$9.62",
      "$4.37"
    ],
    "answer": 3,
    "explanation": "182 × $0.024 = $4.37 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 58 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$4.39",
      "$2.44",
      "$0.34",
      "$7.69"
    ],
    "answer": 1,
    "explanation": "58 × $0.042 = $2.44 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 370 GB in S3 Standard at $0.039/GB/month costs how much monthly?",
    "options": [
      "$25.97",
      "$19.68",
      "$12.33",
      "$14.43"
    ],
    "answer": 3,
    "explanation": "370 × $0.039 = $14.43 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 285 hours at $0.359/hour. What is the total on-demand compute cost?",
    "options": [
      "$102.31",
      "$117.81",
      "$61.39",
      "$144.31"
    ],
    "answer": 0,
    "explanation": "285 × $0.359 = $102.31."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 84 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$6.66",
      "$8.95",
      "$1.60",
      "$3.70"
    ],
    "answer": 3,
    "explanation": "84 × $0.044 = $3.70 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 475 hours at $0.151/hour. What is the total on-demand compute cost?",
    "options": [
      "$87.22",
      "$71.72",
      "$113.72",
      "$43.03"
    ],
    "answer": 1,
    "explanation": "475 × $0.151 = $71.72."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 371 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$17.56",
      "$24.91",
      "$19.66",
      "$35.39"
    ],
    "answer": 2,
    "explanation": "371 × $0.053 = $19.66 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 738 hours at $0.104/hour. What is the total on-demand compute cost?",
    "options": [
      "$76.75",
      "$92.25",
      "$118.75",
      "$46.05"
    ],
    "answer": 0,
    "explanation": "738 × $0.104 = $76.75."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 413 hours at $0.250/hour. What is the total on-demand compute cost?",
    "options": [
      "$61.95",
      "$118.75",
      "$103.25",
      "$145.25"
    ],
    "answer": 2,
    "explanation": "413 × $0.250 = $103.25."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 610 hours at $0.105/hour. What is the total on-demand compute cost?",
    "options": [
      "$106.05",
      "$64.05",
      "$38.43",
      "$79.55"
    ],
    "answer": 1,
    "explanation": "610 × $0.105 = $64.05."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 353 GB in S3 Standard at $0.016/GB/month costs how much monthly?",
    "options": [
      "$3.55",
      "$5.65",
      "$10.17",
      "$10.90"
    ],
    "answer": 1,
    "explanation": "353 × $0.016 = $5.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 354 GB in S3 Standard at $0.012/GB/month costs how much monthly?",
    "options": [
      "$7.65",
      "$4.25",
      "$2.15",
      "$9.50"
    ],
    "answer": 1,
    "explanation": "354 × $0.012 = $4.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 526 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$20.52",
      "$22.62",
      "$27.87",
      "$40.72"
    ],
    "answer": 1,
    "explanation": "526 × $0.043 = $22.62 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 314 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$23.74",
      "$18.44",
      "$11.09",
      "$13.19"
    ],
    "answer": 3,
    "explanation": "314 × $0.042 = $13.19 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 544 hours at $0.470/hour. What is the total on-demand compute cost?",
    "options": [
      "$271.18",
      "$153.41",
      "$297.68",
      "$255.68"
    ],
    "answer": 3,
    "explanation": "544 × $0.470 = $255.68."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 176 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$6.97",
      "$3.87",
      "$9.12",
      "$1.77"
    ],
    "answer": 1,
    "explanation": "176 × $0.022 = $3.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 332 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$6.57",
      "$1.55",
      "$8.90",
      "$3.65"
    ],
    "answer": 3,
    "explanation": "332 × $0.011 = $3.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 253 GB in S3 Standard at $0.059/GB/month costs how much monthly?",
    "options": [
      "$20.18",
      "$26.87",
      "$14.93",
      "$12.83"
    ],
    "answer": 2,
    "explanation": "253 × $0.059 = $14.93 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 547 hours at $0.378/hour. What is the total on-demand compute cost?",
    "options": [
      "$124.06",
      "$248.77",
      "$222.27",
      "$206.77"
    ],
    "answer": 3,
    "explanation": "547 × $0.378 = $206.77."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 390 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$14.04",
      "$19.29",
      "$11.94",
      "$25.27"
    ],
    "answer": 0,
    "explanation": "390 × $0.036 = $14.04 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 500 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$33.30",
      "$18.50",
      "$16.40",
      "$23.75"
    ],
    "answer": 1,
    "explanation": "500 × $0.037 = $18.50 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 462 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$15.80",
      "$6.68",
      "$14.03",
      "$8.78"
    ],
    "answer": 3,
    "explanation": "462 × $0.019 = $8.78 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 526 hours at $0.177/hour. What is the total on-demand compute cost?",
    "options": [
      "$108.60",
      "$93.10",
      "$55.86",
      "$135.10"
    ],
    "answer": 1,
    "explanation": "526 × $0.177 = $93.10."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 810 hours at $0.483/hour. What is the total on-demand compute cost?",
    "options": [
      "$391.23",
      "$234.74",
      "$433.23",
      "$406.73"
    ],
    "answer": 0,
    "explanation": "810 × $0.483 = $391.23."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 169 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$5.50",
      "$7.60",
      "$13.68",
      "$12.85"
    ],
    "answer": 1,
    "explanation": "169 × $0.045 = $7.60 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 296 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$10.95",
      "$16.20",
      "$19.71",
      "$8.85"
    ],
    "answer": 0,
    "explanation": "296 × $0.037 = $10.95 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 207 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$8.04",
      "$10.14",
      "$18.25",
      "$15.39"
    ],
    "answer": 1,
    "explanation": "207 × $0.049 = $10.14 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 307 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$14.74",
      "$12.64",
      "$19.99",
      "$26.53"
    ],
    "answer": 0,
    "explanation": "307 × $0.048 = $14.74 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 190 hours at $0.139/hour. What is the total on-demand compute cost?",
    "options": [
      "$15.85",
      "$26.41",
      "$68.41",
      "$41.91"
    ],
    "answer": 1,
    "explanation": "190 × $0.139 = $26.41."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 392 hours at $0.282/hour. What is the total on-demand compute cost?",
    "options": [
      "$126.04",
      "$66.32",
      "$152.54",
      "$110.54"
    ],
    "answer": 3,
    "explanation": "392 × $0.282 = $110.54."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 572 hours at $0.331/hour. What is the total on-demand compute cost?",
    "options": [
      "$113.60",
      "$189.33",
      "$231.33",
      "$204.83"
    ],
    "answer": 1,
    "explanation": "572 × $0.331 = $189.33."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 599 hours at $0.442/hour. What is the total on-demand compute cost?",
    "options": [
      "$306.76",
      "$158.86",
      "$264.76",
      "$280.26"
    ],
    "answer": 2,
    "explanation": "599 × $0.442 = $264.76."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 447 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$23.33",
      "$18.21",
      "$12.96",
      "$10.86"
    ],
    "answer": 2,
    "explanation": "447 × $0.029 = $12.96 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 495 hours at $0.384/hour. What is the total on-demand compute cost?",
    "options": [
      "$205.58",
      "$114.05",
      "$232.08",
      "$190.08"
    ],
    "answer": 3,
    "explanation": "495 × $0.384 = $190.08."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 805 hours at $0.453/hour. What is the total on-demand compute cost?",
    "options": [
      "$380.17",
      "$406.67",
      "$218.80",
      "$364.67"
    ],
    "answer": 3,
    "explanation": "805 × $0.453 = $364.67."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 616 hours at $0.154/hour. What is the total on-demand compute cost?",
    "options": [
      "$110.36",
      "$94.86",
      "$56.92",
      "$136.86"
    ],
    "answer": 1,
    "explanation": "616 × $0.154 = $94.86."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 73 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$6.64",
      "$1.39",
      "$-0.71",
      "$2.50"
    ],
    "answer": 1,
    "explanation": "73 × $0.019 = $1.39 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 113 hours at $0.394/hour. What is the total on-demand compute cost?",
    "options": [
      "$60.02",
      "$26.71",
      "$44.52",
      "$86.52"
    ],
    "answer": 2,
    "explanation": "113 × $0.394 = $44.52."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 636 hours at $0.144/hour. What is the total on-demand compute cost?",
    "options": [
      "$107.08",
      "$133.58",
      "$54.95",
      "$91.58"
    ],
    "answer": 3,
    "explanation": "636 × $0.144 = $91.58."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 216 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$11.66",
      "$11.73",
      "$6.48",
      "$4.38"
    ],
    "answer": 2,
    "explanation": "216 × $0.030 = $6.48 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 173 hours at $0.295/hour. What is the total on-demand compute cost?",
    "options": [
      "$51.03",
      "$93.03",
      "$66.53",
      "$30.62"
    ],
    "answer": 0,
    "explanation": "173 × $0.295 = $51.03."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 518 hours at $0.505/hour. What is the total on-demand compute cost?",
    "options": [
      "$261.59",
      "$277.09",
      "$156.95",
      "$303.59"
    ],
    "answer": 0,
    "explanation": "518 × $0.505 = $261.59."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 237 GB in S3 Standard at $0.050/GB/month costs how much monthly?",
    "options": [
      "$21.33",
      "$11.85",
      "$9.75",
      "$17.10"
    ],
    "answer": 1,
    "explanation": "237 × $0.050 = $11.85 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 50 GB in S3 Standard at $0.039/GB/month costs how much monthly?",
    "options": [
      "$3.51",
      "$-0.15",
      "$1.95",
      "$7.20"
    ],
    "answer": 2,
    "explanation": "50 × $0.039 = $1.95 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 261 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$15.03",
      "$8.35",
      "$13.60",
      "$6.25"
    ],
    "answer": 1,
    "explanation": "261 × $0.032 = $8.35 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 339 hours at $0.350/hour. What is the total on-demand compute cost?",
    "options": [
      "$160.65",
      "$118.65",
      "$71.19",
      "$134.15"
    ],
    "answer": 1,
    "explanation": "339 × $0.350 = $118.65."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 202 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$19.28",
      "$8.61",
      "$15.96",
      "$10.71"
    ],
    "answer": 3,
    "explanation": "202 × $0.053 = $10.71 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 501 hours at $0.051/hour. What is the total on-demand compute cost?",
    "options": [
      "$15.33",
      "$41.05",
      "$67.55",
      "$25.55"
    ],
    "answer": 3,
    "explanation": "501 × $0.051 = $25.55."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 272 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$14.77",
      "$7.42",
      "$9.52",
      "$17.14"
    ],
    "answer": 2,
    "explanation": "272 × $0.035 = $9.52 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 245 hours at $0.534/hour. What is the total on-demand compute cost?",
    "options": [
      "$130.83",
      "$172.83",
      "$78.50",
      "$146.33"
    ],
    "answer": 0,
    "explanation": "245 × $0.534 = $130.83."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 435 hours at $0.257/hour. What is the total on-demand compute cost?",
    "options": [
      "$111.80",
      "$67.08",
      "$127.30",
      "$153.80"
    ],
    "answer": 0,
    "explanation": "435 × $0.257 = $111.80."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 77 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$6.94",
      "$1.69",
      "$-0.41",
      "$3.04"
    ],
    "answer": 1,
    "explanation": "77 × $0.022 = $1.69 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 364 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$16.46",
      "$33.41",
      "$18.56",
      "$23.81"
    ],
    "answer": 2,
    "explanation": "364 × $0.051 = $18.56 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 350 hours at $0.270/hour. What is the total on-demand compute cost?",
    "options": [
      "$136.50",
      "$94.50",
      "$56.70",
      "$110.00"
    ],
    "answer": 1,
    "explanation": "350 × $0.270 = $94.50."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 434 hours at $0.192/hour. What is the total on-demand compute cost?",
    "options": [
      "$125.33",
      "$50.00",
      "$98.83",
      "$83.33"
    ],
    "answer": 3,
    "explanation": "434 × $0.192 = $83.33."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 104 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$6.73",
      "$1.64",
      "$3.74",
      "$8.99"
    ],
    "answer": 2,
    "explanation": "104 × $0.036 = $3.74 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 412 hours at $0.365/hour. What is the total on-demand compute cost?",
    "options": [
      "$165.88",
      "$150.38",
      "$192.38",
      "$90.23"
    ],
    "answer": 1,
    "explanation": "412 × $0.365 = $150.38."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 790 hours at $0.407/hour. What is the total on-demand compute cost?",
    "options": [
      "$192.92",
      "$363.53",
      "$321.53",
      "$337.03"
    ],
    "answer": 2,
    "explanation": "790 × $0.407 = $321.53."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 103 GB in S3 Standard at $0.027/GB/month costs how much monthly?",
    "options": [
      "$8.03",
      "$2.78",
      "$0.68",
      "$5.00"
    ],
    "answer": 1,
    "explanation": "103 × $0.027 = $2.78 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 531 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$18.16",
      "$7.99",
      "$15.34",
      "$10.09"
    ],
    "answer": 3,
    "explanation": "531 × $0.019 = $10.09 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 288 GB in S3 Standard at $0.029/GB/month costs how much monthly?",
    "options": [
      "$6.25",
      "$13.60",
      "$15.03",
      "$8.35"
    ],
    "answer": 3,
    "explanation": "288 × $0.029 = $8.35 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 306 GB in S3 Standard at $0.017/GB/month costs how much monthly?",
    "options": [
      "$10.45",
      "$9.36",
      "$5.20",
      "$3.10"
    ],
    "answer": 2,
    "explanation": "306 × $0.017 = $5.20 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 517 hours at $0.094/hour. What is the total on-demand compute cost?",
    "options": [
      "$48.60",
      "$64.10",
      "$90.60",
      "$29.16"
    ],
    "answer": 0,
    "explanation": "517 × $0.094 = $48.60."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 351 hours at $0.244/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.64",
      "$51.38",
      "$101.14",
      "$127.64"
    ],
    "answer": 0,
    "explanation": "351 × $0.244 = $85.64."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 57 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$0.29",
      "$7.64",
      "$4.30",
      "$2.39"
    ],
    "answer": 3,
    "explanation": "57 × $0.042 = $2.39 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 593 hours at $0.299/hour. What is the total on-demand compute cost?",
    "options": [
      "$192.81",
      "$219.31",
      "$106.39",
      "$177.31"
    ],
    "answer": 3,
    "explanation": "593 × $0.299 = $177.31."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 651 hours at $0.451/hour. What is the total on-demand compute cost?",
    "options": [
      "$309.10",
      "$176.16",
      "$293.60",
      "$335.60"
    ],
    "answer": 2,
    "explanation": "651 × $0.451 = $293.60."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 92 GB in S3 Standard at $0.016/GB/month costs how much monthly?",
    "options": [
      "$-0.63",
      "$2.65",
      "$1.47",
      "$6.72"
    ],
    "answer": 2,
    "explanation": "92 × $0.016 = $1.47 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 381 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$10.58",
      "$3.23",
      "$9.59",
      "$5.33"
    ],
    "answer": 3,
    "explanation": "381 × $0.014 = $5.33 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 235 GB in S3 Standard at $0.047/GB/month costs how much monthly?",
    "options": [
      "$19.87",
      "$16.29",
      "$8.94",
      "$11.04"
    ],
    "answer": 3,
    "explanation": "235 × $0.047 = $11.04 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 181 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$14.12",
      "$15.97",
      "$6.77",
      "$8.87"
    ],
    "answer": 3,
    "explanation": "181 × $0.049 = $8.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 397 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$21.84",
      "$19.74",
      "$27.09",
      "$39.31"
    ],
    "answer": 0,
    "explanation": "397 × $0.055 = $21.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 516 hours at $0.064/hour. What is the total on-demand compute cost?",
    "options": [
      "$48.52",
      "$19.81",
      "$33.02",
      "$75.02"
    ],
    "answer": 2,
    "explanation": "516 × $0.064 = $33.02."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 446 hours at $0.348/hour. What is the total on-demand compute cost?",
    "options": [
      "$197.21",
      "$93.13",
      "$155.21",
      "$170.71"
    ],
    "answer": 2,
    "explanation": "446 × $0.348 = $155.21."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 531 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$50.65",
      "$28.14",
      "$26.04",
      "$33.39"
    ],
    "answer": 1,
    "explanation": "531 × $0.053 = $28.14 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 568 hours at $0.441/hour. What is the total on-demand compute cost?",
    "options": [
      "$250.49",
      "$292.49",
      "$150.29",
      "$265.99"
    ],
    "answer": 0,
    "explanation": "568 × $0.441 = $250.49."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 344 hours at $0.155/hour. What is the total on-demand compute cost?",
    "options": [
      "$31.99",
      "$95.32",
      "$53.32",
      "$68.82"
    ],
    "answer": 2,
    "explanation": "344 × $0.155 = $53.32."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 178 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$-0.14",
      "$1.96",
      "$7.21",
      "$3.53"
    ],
    "answer": 1,
    "explanation": "178 × $0.011 = $1.96 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 325 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$9.92",
      "$17.27",
      "$21.64",
      "$12.02"
    ],
    "answer": 3,
    "explanation": "325 × $0.037 = $12.02 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 403 hours at $0.104/hour. What is the total on-demand compute cost?",
    "options": [
      "$25.15",
      "$41.91",
      "$83.91",
      "$57.41"
    ],
    "answer": 1,
    "explanation": "403 × $0.104 = $41.91."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 313 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$11.58",
      "$20.84",
      "$9.48",
      "$16.83"
    ],
    "answer": 0,
    "explanation": "313 × $0.037 = $11.58 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 371 hours at $0.129/hour. What is the total on-demand compute cost?",
    "options": [
      "$47.86",
      "$63.36",
      "$28.72",
      "$89.86"
    ],
    "answer": 0,
    "explanation": "371 × $0.129 = $47.86."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 157 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$3.67",
      "$-0.06",
      "$2.04",
      "$7.29"
    ],
    "answer": 2,
    "explanation": "157 × $0.013 = $2.04 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 519 GB in S3 Standard at $0.016/GB/month costs how much monthly?",
    "options": [
      "$14.94",
      "$6.20",
      "$13.55",
      "$8.30"
    ],
    "answer": 3,
    "explanation": "519 × $0.016 = $8.30 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 267 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$20.74",
      "$13.39",
      "$27.88",
      "$15.49"
    ],
    "answer": 3,
    "explanation": "267 × $0.058 = $15.49 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 715 hours at $0.351/hour. What is the total on-demand compute cost?",
    "options": [
      "$266.46",
      "$292.96",
      "$150.58",
      "$250.96"
    ],
    "answer": 3,
    "explanation": "715 × $0.351 = $250.96."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 185 GB in S3 Standard at $0.017/GB/month costs how much monthly?",
    "options": [
      "$8.40",
      "$1.05",
      "$5.67",
      "$3.15"
    ],
    "answer": 3,
    "explanation": "185 × $0.017 = $3.15 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 62 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$6.06",
      "$1.46",
      "$-1.29",
      "$0.81"
    ],
    "answer": 3,
    "explanation": "62 × $0.013 = $0.81 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 328 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$21.32",
      "$16.07",
      "$28.93",
      "$13.97"
    ],
    "answer": 1,
    "explanation": "328 × $0.049 = $16.07 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 474 GB in S3 Standard at $0.035/GB/month costs how much monthly?",
    "options": [
      "$14.49",
      "$21.84",
      "$29.86",
      "$16.59"
    ],
    "answer": 3,
    "explanation": "474 × $0.035 = $16.59 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 541 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$13.37",
      "$8.12",
      "$6.02",
      "$14.62"
    ],
    "answer": 1,
    "explanation": "541 × $0.015 = $8.12 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 334 hours at $0.237/hour. What is the total on-demand compute cost?",
    "options": [
      "$47.50",
      "$121.16",
      "$79.16",
      "$94.66"
    ],
    "answer": 2,
    "explanation": "334 × $0.237 = $79.16."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 93 GB in S3 Standard at $0.050/GB/month costs how much monthly?",
    "options": [
      "$4.65",
      "$8.37",
      "$2.55",
      "$9.90"
    ],
    "answer": 0,
    "explanation": "93 × $0.050 = $4.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 198 hours at $0.264/hour. What is the total on-demand compute cost?",
    "options": [
      "$94.27",
      "$67.77",
      "$52.27",
      "$31.36"
    ],
    "answer": 2,
    "explanation": "198 × $0.264 = $52.27."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 79 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$4.55",
      "$7.78",
      "$2.53",
      "$0.43"
    ],
    "answer": 2,
    "explanation": "79 × $0.032 = $2.53 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 648 hours at $0.077/hour. What is the total on-demand compute cost?",
    "options": [
      "$91.90",
      "$65.40",
      "$49.90",
      "$29.94"
    ],
    "answer": 2,
    "explanation": "648 × $0.077 = $49.90."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 503 hours at $0.369/hour. What is the total on-demand compute cost?",
    "options": [
      "$201.11",
      "$111.37",
      "$185.61",
      "$227.61"
    ],
    "answer": 2,
    "explanation": "503 × $0.369 = $185.61."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 97 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$4.75",
      "$10.00",
      "$2.65",
      "$8.55"
    ],
    "answer": 0,
    "explanation": "97 × $0.049 = $4.75 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 147 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$0.55",
      "$2.65",
      "$4.77",
      "$7.90"
    ],
    "answer": 1,
    "explanation": "147 × $0.018 = $2.65 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 577 hours at $0.245/hour. What is the total on-demand compute cost?",
    "options": [
      "$84.82",
      "$156.87",
      "$141.37",
      "$183.37"
    ],
    "answer": 2,
    "explanation": "577 × $0.245 = $141.37."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 453 hours at $0.241/hour. What is the total on-demand compute cost?",
    "options": [
      "$65.50",
      "$109.17",
      "$151.17",
      "$124.67"
    ],
    "answer": 1,
    "explanation": "453 × $0.241 = $109.17."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 411 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$10.64",
      "$17.99",
      "$22.93",
      "$12.74"
    ],
    "answer": 3,
    "explanation": "411 × $0.031 = $12.74 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 752 hours at $0.088/hour. What is the total on-demand compute cost?",
    "options": [
      "$81.68",
      "$66.18",
      "$108.18",
      "$39.71"
    ],
    "answer": 1,
    "explanation": "752 × $0.088 = $66.18."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 166 hours at $0.135/hour. What is the total on-demand compute cost?",
    "options": [
      "$22.41",
      "$13.45",
      "$64.41",
      "$37.91"
    ],
    "answer": 0,
    "explanation": "166 × $0.135 = $22.41."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 674 hours at $0.319/hour. What is the total on-demand compute cost?",
    "options": [
      "$257.01",
      "$129.01",
      "$215.01",
      "$230.51"
    ],
    "answer": 2,
    "explanation": "674 × $0.319 = $215.01."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 125 hours at $0.242/hour. What is the total on-demand compute cost?",
    "options": [
      "$30.25",
      "$72.25",
      "$45.75",
      "$18.15"
    ],
    "answer": 0,
    "explanation": "125 × $0.242 = $30.25."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 765 hours at $0.519/hour. What is the total on-demand compute cost?",
    "options": [
      "$238.22",
      "$439.04",
      "$412.54",
      "$397.04"
    ],
    "answer": 3,
    "explanation": "765 × $0.519 = $397.04."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 210 hours at $0.516/hour. What is the total on-demand compute cost?",
    "options": [
      "$65.02",
      "$150.36",
      "$123.86",
      "$108.36"
    ],
    "answer": 3,
    "explanation": "210 × $0.516 = $108.36."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 186 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$4.60",
      "$6.70",
      "$12.06",
      "$11.95"
    ],
    "answer": 1,
    "explanation": "186 × $0.036 = $6.70 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 486 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$18.80",
      "$37.62",
      "$26.15",
      "$20.90"
    ],
    "answer": 3,
    "explanation": "486 × $0.043 = $20.90 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 476 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$15.43",
      "$6.47",
      "$13.82",
      "$8.57"
    ],
    "answer": 3,
    "explanation": "476 × $0.018 = $8.57 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 451 hours at $0.343/hour. What is the total on-demand compute cost?",
    "options": [
      "$154.69",
      "$196.69",
      "$170.19",
      "$92.81"
    ],
    "answer": 0,
    "explanation": "451 × $0.343 = $154.69."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 477 hours at $0.268/hour. What is the total on-demand compute cost?",
    "options": [
      "$169.84",
      "$143.34",
      "$76.70",
      "$127.84"
    ],
    "answer": 3,
    "explanation": "477 × $0.268 = $127.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 104 GB in S3 Standard at $0.010/GB/month costs how much monthly?",
    "options": [
      "$-1.06",
      "$1.04",
      "$1.87",
      "$6.29"
    ],
    "answer": 1,
    "explanation": "104 × $0.010 = $1.04 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 799 hours at $0.416/hour. What is the total on-demand compute cost?",
    "options": [
      "$199.43",
      "$347.88",
      "$332.38",
      "$374.38"
    ],
    "answer": 2,
    "explanation": "799 × $0.416 = $332.38."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 460 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$27.33",
      "$39.74",
      "$22.08",
      "$19.98"
    ],
    "answer": 2,
    "explanation": "460 × $0.048 = $22.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 361 GB in S3 Standard at $0.048/GB/month costs how much monthly?",
    "options": [
      "$31.19",
      "$17.33",
      "$22.58",
      "$15.23"
    ],
    "answer": 1,
    "explanation": "361 × $0.048 = $17.33 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 595 hours at $0.504/hour. What is the total on-demand compute cost?",
    "options": [
      "$315.38",
      "$341.88",
      "$179.93",
      "$299.88"
    ],
    "answer": 3,
    "explanation": "595 × $0.504 = $299.88."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 243 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$6.12",
      "$3.40",
      "$1.30",
      "$8.65"
    ],
    "answer": 1,
    "explanation": "243 × $0.014 = $3.40 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 532 hours at $0.511/hour. What is the total on-demand compute cost?",
    "options": [
      "$313.85",
      "$287.35",
      "$163.11",
      "$271.85"
    ],
    "answer": 3,
    "explanation": "532 × $0.511 = $271.85."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 715 hours at $0.420/hour. What is the total on-demand compute cost?",
    "options": [
      "$342.30",
      "$315.80",
      "$300.30",
      "$180.18"
    ],
    "answer": 2,
    "explanation": "715 × $0.420 = $300.30."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 216 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$5.44",
      "$3.02",
      "$8.27",
      "$0.92"
    ],
    "answer": 1,
    "explanation": "216 × $0.014 = $3.02 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 643 hours at $0.308/hour. What is the total on-demand compute cost?",
    "options": [
      "$198.04",
      "$213.54",
      "$118.82",
      "$240.04"
    ],
    "answer": 0,
    "explanation": "643 × $0.308 = $198.04."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 201 GB in S3 Standard at $0.049/GB/month costs how much monthly?",
    "options": [
      "$15.10",
      "$9.85",
      "$17.73",
      "$7.75"
    ],
    "answer": 1,
    "explanation": "201 × $0.049 = $9.85 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 316 hours at $0.488/hour. What is the total on-demand compute cost?",
    "options": [
      "$154.21",
      "$169.71",
      "$196.21",
      "$92.53"
    ],
    "answer": 0,
    "explanation": "316 × $0.488 = $154.21."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 657 hours at $0.331/hour. What is the total on-demand compute cost?",
    "options": [
      "$130.48",
      "$217.47",
      "$259.47",
      "$232.97"
    ],
    "answer": 1,
    "explanation": "657 × $0.331 = $217.47."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 328 GB in S3 Standard at $0.047/GB/month costs how much monthly?",
    "options": [
      "$13.32",
      "$20.67",
      "$27.76",
      "$15.42"
    ],
    "answer": 3,
    "explanation": "328 × $0.047 = $15.42 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 383 hours at $0.460/hour. What is the total on-demand compute cost?",
    "options": [
      "$218.18",
      "$105.71",
      "$176.18",
      "$191.68"
    ],
    "answer": 2,
    "explanation": "383 × $0.460 = $176.18."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 428 GB in S3 Standard at $0.039/GB/month costs how much monthly?",
    "options": [
      "$14.59",
      "$30.04",
      "$21.94",
      "$16.69"
    ],
    "answer": 3,
    "explanation": "428 × $0.039 = $16.69 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 361 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$4.40",
      "$11.75",
      "$11.70",
      "$6.50"
    ],
    "answer": 3,
    "explanation": "361 × $0.018 = $6.50 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 555 hours at $0.198/hour. What is the total on-demand compute cost?",
    "options": [
      "$151.89",
      "$65.93",
      "$109.89",
      "$125.39"
    ],
    "answer": 2,
    "explanation": "555 × $0.198 = $109.89."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 752 hours at $0.395/hour. What is the total on-demand compute cost?",
    "options": [
      "$297.04",
      "$339.04",
      "$312.54",
      "$178.22"
    ],
    "answer": 0,
    "explanation": "752 × $0.395 = $297.04."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 404 hours at $0.157/hour. What is the total on-demand compute cost?",
    "options": [
      "$38.06",
      "$63.43",
      "$78.93",
      "$105.43"
    ],
    "answer": 1,
    "explanation": "404 × $0.157 = $63.43."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 436 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$17.52",
      "$19.62",
      "$35.32",
      "$24.87"
    ],
    "answer": 1,
    "explanation": "436 × $0.045 = $19.62 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 249 GB in S3 Standard at $0.033/GB/month costs how much monthly?",
    "options": [
      "$14.80",
      "$8.22",
      "$13.47",
      "$6.12"
    ],
    "answer": 1,
    "explanation": "249 × $0.033 = $8.22 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 377 hours at $0.053/hour. What is the total on-demand compute cost?",
    "options": [
      "$11.99",
      "$35.48",
      "$19.98",
      "$61.98"
    ],
    "answer": 2,
    "explanation": "377 × $0.053 = $19.98."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 397 hours at $0.285/hour. What is the total on-demand compute cost?",
    "options": [
      "$155.14",
      "$128.64",
      "$67.88",
      "$113.14"
    ],
    "answer": 3,
    "explanation": "397 × $0.285 = $113.14."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 259 hours at $0.348/hour. What is the total on-demand compute cost?",
    "options": [
      "$132.13",
      "$90.13",
      "$54.08",
      "$105.63"
    ],
    "answer": 1,
    "explanation": "259 × $0.348 = $90.13."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 159 GB in S3 Standard at $0.047/GB/month costs how much monthly?",
    "options": [
      "$13.45",
      "$7.47",
      "$5.37",
      "$12.72"
    ],
    "answer": 1,
    "explanation": "159 × $0.047 = $7.47 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 455 hours at $0.428/hour. What is the total on-demand compute cost?",
    "options": [
      "$194.74",
      "$116.84",
      "$236.74",
      "$210.24"
    ],
    "answer": 0,
    "explanation": "455 × $0.428 = $194.74."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 786 hours at $0.276/hour. What is the total on-demand compute cost?",
    "options": [
      "$258.94",
      "$130.16",
      "$216.94",
      "$232.44"
    ],
    "answer": 2,
    "explanation": "786 × $0.276 = $216.94."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 302 hours at $0.450/hour. What is the total on-demand compute cost?",
    "options": [
      "$151.40",
      "$81.54",
      "$177.90",
      "$135.90"
    ],
    "answer": 3,
    "explanation": "302 × $0.450 = $135.90."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 150 hours at $0.304/hour. What is the total on-demand compute cost?",
    "options": [
      "$45.60",
      "$61.10",
      "$87.60",
      "$27.36"
    ],
    "answer": 0,
    "explanation": "150 × $0.304 = $45.60."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 800 hours at $0.422/hour. What is the total on-demand compute cost?",
    "options": [
      "$353.10",
      "$337.60",
      "$379.60",
      "$202.56"
    ],
    "answer": 1,
    "explanation": "800 × $0.422 = $337.60."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 467 GB in S3 Standard at $0.019/GB/month costs how much monthly?",
    "options": [
      "$6.77",
      "$8.87",
      "$14.12",
      "$15.97"
    ],
    "answer": 1,
    "explanation": "467 × $0.019 = $8.87 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 541 hours at $0.180/hour. What is the total on-demand compute cost?",
    "options": [
      "$58.43",
      "$97.38",
      "$139.38",
      "$112.88"
    ],
    "answer": 1,
    "explanation": "541 × $0.180 = $97.38."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 422 hours at $0.154/hour. What is the total on-demand compute cost?",
    "options": [
      "$64.99",
      "$106.99",
      "$80.49",
      "$38.99"
    ],
    "answer": 0,
    "explanation": "422 × $0.154 = $64.99."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 628 hours at $0.235/hour. What is the total on-demand compute cost?",
    "options": [
      "$147.58",
      "$189.58",
      "$163.08",
      "$88.55"
    ],
    "answer": 0,
    "explanation": "628 × $0.235 = $147.58."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 302 hours at $0.230/hour. What is the total on-demand compute cost?",
    "options": [
      "$111.46",
      "$84.96",
      "$41.68",
      "$69.46"
    ],
    "answer": 3,
    "explanation": "302 × $0.230 = $69.46."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 325 GB in S3 Standard at $0.024/GB/month costs how much monthly?",
    "options": [
      "$7.80",
      "$5.70",
      "$14.04",
      "$13.05"
    ],
    "answer": 0,
    "explanation": "325 × $0.024 = $7.80 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 114 hours at $0.180/hour. What is the total on-demand compute cost?",
    "options": [
      "$12.31",
      "$62.52",
      "$36.02",
      "$20.52"
    ],
    "answer": 3,
    "explanation": "114 × $0.180 = $20.52."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 345 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$10.70",
      "$8.60",
      "$15.95",
      "$19.26"
    ],
    "answer": 0,
    "explanation": "345 × $0.031 = $10.70 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 654 hours at $0.097/hour. What is the total on-demand compute cost?",
    "options": [
      "$78.94",
      "$63.44",
      "$38.06",
      "$105.44"
    ],
    "answer": 1,
    "explanation": "654 × $0.097 = $63.44."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 191 GB in S3 Standard at $0.040/GB/month costs how much monthly?",
    "options": [
      "$5.54",
      "$12.89",
      "$7.64",
      "$13.75"
    ],
    "answer": 2,
    "explanation": "191 × $0.040 = $7.64 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 510 GB in S3 Standard at $0.021/GB/month costs how much monthly?",
    "options": [
      "$10.71",
      "$15.96",
      "$19.28",
      "$8.61"
    ],
    "answer": 0,
    "explanation": "510 × $0.021 = $10.71 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 293 hours at $0.312/hour. What is the total on-demand compute cost?",
    "options": [
      "$91.42",
      "$54.85",
      "$106.92",
      "$133.42"
    ],
    "answer": 0,
    "explanation": "293 × $0.312 = $91.42."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 222 hours at $0.371/hour. What is the total on-demand compute cost?",
    "options": [
      "$82.36",
      "$49.42",
      "$124.36",
      "$97.86"
    ],
    "answer": 0,
    "explanation": "222 × $0.371 = $82.36."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 68 GB in S3 Standard at $0.055/GB/month costs how much monthly?",
    "options": [
      "$3.74",
      "$8.99",
      "$1.64",
      "$6.73"
    ],
    "answer": 0,
    "explanation": "68 × $0.055 = $3.74 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 252 hours at $0.136/hour. What is the total on-demand compute cost?",
    "options": [
      "$49.77",
      "$34.27",
      "$20.56",
      "$76.27"
    ],
    "answer": 1,
    "explanation": "252 × $0.136 = $34.27."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 791 hours at $0.519/hour. What is the total on-demand compute cost?",
    "options": [
      "$410.53",
      "$426.03",
      "$452.53",
      "$246.32"
    ],
    "answer": 0,
    "explanation": "791 × $0.519 = $410.53."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 178 hours at $0.434/hour. What is the total on-demand compute cost?",
    "options": [
      "$119.25",
      "$92.75",
      "$77.25",
      "$46.35"
    ],
    "answer": 2,
    "explanation": "178 × $0.434 = $77.25."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 267 GB in S3 Standard at $0.026/GB/month costs how much monthly?",
    "options": [
      "$4.84",
      "$6.94",
      "$12.19",
      "$12.49"
    ],
    "answer": 1,
    "explanation": "267 × $0.026 = $6.94 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 170 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$15.91",
      "$14.09",
      "$8.84",
      "$6.74"
    ],
    "answer": 2,
    "explanation": "170 × $0.052 = $8.84 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 312 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$11.54",
      "$20.77",
      "$16.79",
      "$9.44"
    ],
    "answer": 0,
    "explanation": "312 × $0.037 = $11.54 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 515 hours at $0.297/hour. What is the total on-demand compute cost?",
    "options": [
      "$152.95",
      "$194.95",
      "$168.45",
      "$91.77"
    ],
    "answer": 0,
    "explanation": "515 × $0.297 = $152.95."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 599 hours at $0.487/hour. What is the total on-demand compute cost?",
    "options": [
      "$291.71",
      "$333.71",
      "$307.21",
      "$175.03"
    ],
    "answer": 0,
    "explanation": "599 × $0.487 = $291.71."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 598 hours at $0.198/hour. What is the total on-demand compute cost?",
    "options": [
      "$71.04",
      "$160.40",
      "$133.90",
      "$118.40"
    ],
    "answer": 3,
    "explanation": "598 × $0.198 = $118.40."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 414 hours at $0.236/hour. What is the total on-demand compute cost?",
    "options": [
      "$113.20",
      "$139.70",
      "$58.62",
      "$97.70"
    ],
    "answer": 3,
    "explanation": "414 × $0.236 = $97.70."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 287 hours at $0.071/hour. What is the total on-demand compute cost?",
    "options": [
      "$35.88",
      "$20.38",
      "$12.23",
      "$62.38"
    ],
    "answer": 1,
    "explanation": "287 × $0.071 = $20.38."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 324 hours at $0.463/hour. What is the total on-demand compute cost?",
    "options": [
      "$150.01",
      "$90.01",
      "$165.51",
      "$192.01"
    ],
    "answer": 0,
    "explanation": "324 × $0.463 = $150.01."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 290 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$18.59",
      "$24.01",
      "$11.24",
      "$13.34"
    ],
    "answer": 3,
    "explanation": "290 × $0.046 = $13.34 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 627 hours at $0.303/hour. What is the total on-demand compute cost?",
    "options": [
      "$189.98",
      "$231.98",
      "$205.48",
      "$113.99"
    ],
    "answer": 0,
    "explanation": "627 × $0.303 = $189.98."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 650 hours at $0.234/hour. What is the total on-demand compute cost?",
    "options": [
      "$91.26",
      "$152.10",
      "$167.60",
      "$194.10"
    ],
    "answer": 1,
    "explanation": "650 × $0.234 = $152.10."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 687 hours at $0.430/hour. What is the total on-demand compute cost?",
    "options": [
      "$177.25",
      "$337.41",
      "$295.41",
      "$310.91"
    ],
    "answer": 2,
    "explanation": "687 × $0.430 = $295.41."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 434 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$29.68",
      "$21.74",
      "$14.39",
      "$16.49"
    ],
    "answer": 3,
    "explanation": "434 × $0.038 = $16.49 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 624 hours at $0.301/hour. What is the total on-demand compute cost?",
    "options": [
      "$187.82",
      "$203.32",
      "$112.69",
      "$229.82"
    ],
    "answer": 0,
    "explanation": "624 × $0.301 = $187.82."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 395 GB in S3 Standard at $0.014/GB/month costs how much monthly?",
    "options": [
      "$9.95",
      "$10.78",
      "$3.43",
      "$5.53"
    ],
    "answer": 3,
    "explanation": "395 × $0.014 = $5.53 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 142 GB in S3 Standard at $0.056/GB/month costs how much monthly?",
    "options": [
      "$13.20",
      "$14.31",
      "$5.85",
      "$7.95"
    ],
    "answer": 3,
    "explanation": "142 × $0.056 = $7.95 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 132 GB in S3 Standard at $0.045/GB/month costs how much monthly?",
    "options": [
      "$5.94",
      "$10.69",
      "$11.19",
      "$3.84"
    ],
    "answer": 0,
    "explanation": "132 × $0.045 = $5.94 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 130 GB in S3 Standard at $0.059/GB/month costs how much monthly?",
    "options": [
      "$5.57",
      "$12.92",
      "$13.81",
      "$7.67"
    ],
    "answer": 3,
    "explanation": "130 × $0.059 = $7.67 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 151 GB in S3 Standard at $0.042/GB/month costs how much monthly?",
    "options": [
      "$11.59",
      "$6.34",
      "$4.24",
      "$11.41"
    ],
    "answer": 1,
    "explanation": "151 × $0.042 = $6.34 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 154 hours at $0.509/hour. What is the total on-demand compute cost?",
    "options": [
      "$93.89",
      "$120.39",
      "$47.03",
      "$78.39"
    ],
    "answer": 3,
    "explanation": "154 × $0.509 = $78.39."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 355 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$5.71",
      "$13.06",
      "$14.06",
      "$7.81"
    ],
    "answer": 3,
    "explanation": "355 × $0.022 = $7.81 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 170 GB in S3 Standard at $0.040/GB/month costs how much monthly?",
    "options": [
      "$12.05",
      "$4.70",
      "$12.24",
      "$6.80"
    ],
    "answer": 3,
    "explanation": "170 × $0.040 = $6.80 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 249 GB in S3 Standard at $0.040/GB/month costs how much monthly?",
    "options": [
      "$9.96",
      "$7.86",
      "$17.93",
      "$15.21"
    ],
    "answer": 0,
    "explanation": "249 × $0.040 = $9.96 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 414 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$17.67",
      "$22.36",
      "$12.42",
      "$10.32"
    ],
    "answer": 2,
    "explanation": "414 × $0.030 = $12.42 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 605 hours at $0.133/hour. What is the total on-demand compute cost?",
    "options": [
      "$80.47",
      "$95.97",
      "$122.47",
      "$48.28"
    ],
    "answer": 0,
    "explanation": "605 × $0.133 = $80.47."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 262 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$19.14",
      "$25.00",
      "$13.89",
      "$11.79"
    ],
    "answer": 2,
    "explanation": "262 × $0.053 = $13.89 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 277 GB in S3 Standard at $0.054/GB/month costs how much monthly?",
    "options": [
      "$26.93",
      "$14.96",
      "$12.86",
      "$20.21"
    ],
    "answer": 1,
    "explanation": "277 × $0.054 = $14.96 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 800 hours at $0.155/hour. What is the total on-demand compute cost?",
    "options": [
      "$124.00",
      "$166.00",
      "$74.40",
      "$139.50"
    ],
    "answer": 0,
    "explanation": "800 × $0.155 = $124.00."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 375 hours at $0.106/hour. What is the total on-demand compute cost?",
    "options": [
      "$55.25",
      "$39.75",
      "$81.75",
      "$23.85"
    ],
    "answer": 1,
    "explanation": "375 × $0.106 = $39.75."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 287 hours at $0.097/hour. What is the total on-demand compute cost?",
    "options": [
      "$43.34",
      "$69.84",
      "$16.70",
      "$27.84"
    ],
    "answer": 3,
    "explanation": "287 × $0.097 = $27.84."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 350 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$8.75",
      "$14.00",
      "$6.65",
      "$15.75"
    ],
    "answer": 0,
    "explanation": "350 × $0.025 = $8.75 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 190 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$16.27",
      "$8.92",
      "$19.84",
      "$11.02"
    ],
    "answer": 3,
    "explanation": "190 × $0.058 = $11.02 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 124 hours at $0.153/hour. What is the total on-demand compute cost?",
    "options": [
      "$18.97",
      "$60.97",
      "$11.38",
      "$34.47"
    ],
    "answer": 0,
    "explanation": "124 × $0.153 = $18.97."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 801 hours at $0.411/hour. What is the total on-demand compute cost?",
    "options": [
      "$197.53",
      "$344.71",
      "$329.21",
      "$371.21"
    ],
    "answer": 2,
    "explanation": "801 × $0.411 = $329.21."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 233 hours at $0.431/hour. What is the total on-demand compute cost?",
    "options": [
      "$60.25",
      "$100.42",
      "$115.92",
      "$142.42"
    ],
    "answer": 1,
    "explanation": "233 × $0.431 = $100.42."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 459 hours at $0.547/hour. What is the total on-demand compute cost?",
    "options": [
      "$293.07",
      "$251.07",
      "$266.57",
      "$150.64"
    ],
    "answer": 1,
    "explanation": "459 × $0.547 = $251.07."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 595 hours at $0.237/hour. What is the total on-demand compute cost?",
    "options": [
      "$84.61",
      "$141.01",
      "$183.01",
      "$156.51"
    ],
    "answer": 1,
    "explanation": "595 × $0.237 = $141.01."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 148 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$9.05",
      "$10.28",
      "$5.03",
      "$2.93"
    ],
    "answer": 2,
    "explanation": "148 × $0.034 = $5.03 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 592 hours at $0.191/hour. What is the total on-demand compute cost?",
    "options": [
      "$128.57",
      "$113.07",
      "$155.07",
      "$67.84"
    ],
    "answer": 1,
    "explanation": "592 × $0.191 = $113.07."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 387 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$9.51",
      "$2.16",
      "$7.67",
      "$4.26"
    ],
    "answer": 3,
    "explanation": "387 × $0.011 = $4.26 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 195 hours at $0.484/hour. What is the total on-demand compute cost?",
    "options": [
      "$136.38",
      "$94.38",
      "$56.63",
      "$109.88"
    ],
    "answer": 1,
    "explanation": "195 × $0.484 = $94.38."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 514 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$12.85",
      "$18.10",
      "$23.13",
      "$10.75"
    ],
    "answer": 0,
    "explanation": "514 × $0.025 = $12.85 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 119 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$9.30",
      "$1.95",
      "$4.05",
      "$7.29"
    ],
    "answer": 2,
    "explanation": "119 × $0.034 = $4.05 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 242 GB in S3 Standard at $0.021/GB/month costs how much monthly?",
    "options": [
      "$2.98",
      "$9.14",
      "$10.33",
      "$5.08"
    ],
    "answer": 3,
    "explanation": "242 × $0.021 = $5.08 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 470 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$11.75",
      "$9.65",
      "$21.15",
      "$17.00"
    ],
    "answer": 0,
    "explanation": "470 × $0.025 = $11.75 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 287 hours at $0.192/hour. What is the total on-demand compute cost?",
    "options": [
      "$55.10",
      "$70.60",
      "$33.06",
      "$97.10"
    ],
    "answer": 0,
    "explanation": "287 × $0.192 = $55.10."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 450 hours at $0.073/hour. What is the total on-demand compute cost?",
    "options": [
      "$48.35",
      "$19.71",
      "$74.85",
      "$32.85"
    ],
    "answer": 3,
    "explanation": "450 × $0.073 = $32.85."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 615 hours at $0.062/hour. What is the total on-demand compute cost?",
    "options": [
      "$53.63",
      "$22.88",
      "$80.13",
      "$38.13"
    ],
    "answer": 3,
    "explanation": "615 × $0.062 = $38.13."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 374 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$8.60",
      "$15.48",
      "$13.85",
      "$6.50"
    ],
    "answer": 0,
    "explanation": "374 × $0.023 = $8.60 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 817 hours at $0.500/hour. What is the total on-demand compute cost?",
    "options": [
      "$408.50",
      "$450.50",
      "$245.10",
      "$424.00"
    ],
    "answer": 0,
    "explanation": "817 × $0.500 = $408.50."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 144 hours at $0.085/hour. What is the total on-demand compute cost?",
    "options": [
      "$12.24",
      "$7.34",
      "$27.74",
      "$54.24"
    ],
    "answer": 0,
    "explanation": "144 × $0.085 = $12.24."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 212 hours at $0.507/hour. What is the total on-demand compute cost?",
    "options": [
      "$149.48",
      "$122.98",
      "$64.49",
      "$107.48"
    ],
    "answer": 3,
    "explanation": "212 × $0.507 = $107.48."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 427 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$11.14",
      "$18.49",
      "$23.83",
      "$13.24"
    ],
    "answer": 3,
    "explanation": "427 × $0.031 = $13.24 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 354 hours at $0.394/hour. What is the total on-demand compute cost?",
    "options": [
      "$181.48",
      "$139.48",
      "$154.98",
      "$83.69"
    ],
    "answer": 1,
    "explanation": "354 × $0.394 = $139.48."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 216 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$11.23",
      "$16.48",
      "$20.21",
      "$9.13"
    ],
    "answer": 0,
    "explanation": "216 × $0.052 = $11.23 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 160 hours at $0.248/hour. What is the total on-demand compute cost?",
    "options": [
      "$23.81",
      "$39.68",
      "$81.68",
      "$55.18"
    ],
    "answer": 1,
    "explanation": "160 × $0.248 = $39.68."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 310 hours at $0.445/hour. What is the total on-demand compute cost?",
    "options": [
      "$137.95",
      "$153.45",
      "$179.95",
      "$82.77"
    ],
    "answer": 0,
    "explanation": "310 × $0.445 = $137.95."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 617 hours at $0.500/hour. What is the total on-demand compute cost?",
    "options": [
      "$350.50",
      "$308.50",
      "$324.00",
      "$185.10"
    ],
    "answer": 1,
    "explanation": "617 × $0.500 = $308.50."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 74 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$8.06",
      "$0.71",
      "$5.06",
      "$2.81"
    ],
    "answer": 3,
    "explanation": "74 × $0.038 = $2.81 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 557 hours at $0.380/hour. What is the total on-demand compute cost?",
    "options": [
      "$211.66",
      "$127.00",
      "$227.16",
      "$253.66"
    ],
    "answer": 0,
    "explanation": "557 × $0.380 = $211.66."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 589 hours at $0.072/hour. What is the total on-demand compute cost?",
    "options": [
      "$84.41",
      "$42.41",
      "$25.45",
      "$57.91"
    ],
    "answer": 1,
    "explanation": "589 × $0.072 = $42.41."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 344 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$35.91",
      "$25.20",
      "$19.95",
      "$17.85"
    ],
    "answer": 2,
    "explanation": "344 × $0.058 = $19.95 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 639 hours at $0.410/hour. What is the total on-demand compute cost?",
    "options": [
      "$277.49",
      "$261.99",
      "$303.99",
      "$157.19"
    ],
    "answer": 1,
    "explanation": "639 × $0.410 = $261.99."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 237 GB in S3 Standard at $0.037/GB/month costs how much monthly?",
    "options": [
      "$14.02",
      "$15.79",
      "$6.67",
      "$8.77"
    ],
    "answer": 3,
    "explanation": "237 × $0.037 = $8.77 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 576 hours at $0.291/hour. What is the total on-demand compute cost?",
    "options": [
      "$183.12",
      "$209.62",
      "$100.57",
      "$167.62"
    ],
    "answer": 3,
    "explanation": "576 × $0.291 = $167.62."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 68 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$1.78",
      "$3.88",
      "$9.13",
      "$6.98"
    ],
    "answer": 1,
    "explanation": "68 × $0.057 = $3.88 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 562 hours at $0.119/hour. What is the total on-demand compute cost?",
    "options": [
      "$40.13",
      "$82.38",
      "$108.88",
      "$66.88"
    ],
    "answer": 3,
    "explanation": "562 × $0.119 = $66.88."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 486 hours at $0.091/hour. What is the total on-demand compute cost?",
    "options": [
      "$86.23",
      "$59.73",
      "$26.54",
      "$44.23"
    ],
    "answer": 3,
    "explanation": "486 × $0.091 = $44.23."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 119 GB in S3 Standard at $0.025/GB/month costs how much monthly?",
    "options": [
      "$5.36",
      "$2.98",
      "$8.23",
      "$0.88"
    ],
    "answer": 1,
    "explanation": "119 × $0.025 = $2.98 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 444 hours at $0.054/hour. What is the total on-demand compute cost?",
    "options": [
      "$23.98",
      "$39.48",
      "$65.98",
      "$14.39"
    ],
    "answer": 0,
    "explanation": "444 × $0.054 = $23.98."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 631 hours at $0.438/hour. What is the total on-demand compute cost?",
    "options": [
      "$276.38",
      "$291.88",
      "$165.83",
      "$318.38"
    ],
    "answer": 0,
    "explanation": "631 × $0.438 = $276.38."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 458 hours at $0.164/hour. What is the total on-demand compute cost?",
    "options": [
      "$75.11",
      "$90.61",
      "$45.07",
      "$117.11"
    ],
    "answer": 0,
    "explanation": "458 × $0.164 = $75.11."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 52 GB in S3 Standard at $0.056/GB/month costs how much monthly?",
    "options": [
      "$8.16",
      "$5.24",
      "$0.81",
      "$2.91"
    ],
    "answer": 3,
    "explanation": "52 × $0.056 = $2.91 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 389 hours at $0.430/hour. What is the total on-demand compute cost?",
    "options": [
      "$209.27",
      "$182.77",
      "$167.27",
      "$100.36"
    ],
    "answer": 2,
    "explanation": "389 × $0.430 = $167.27."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 621 hours at $0.111/hour. What is the total on-demand compute cost?",
    "options": [
      "$110.93",
      "$41.36",
      "$84.43",
      "$68.93"
    ],
    "answer": 3,
    "explanation": "621 × $0.111 = $68.93."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 435 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$13.05",
      "$18.30",
      "$23.49",
      "$10.95"
    ],
    "answer": 0,
    "explanation": "435 × $0.030 = $13.05 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 539 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$21.08",
      "$28.43",
      "$23.18",
      "$41.72"
    ],
    "answer": 2,
    "explanation": "539 × $0.043 = $23.18 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 548 hours at $0.308/hour. What is the total on-demand compute cost?",
    "options": [
      "$184.28",
      "$168.78",
      "$101.27",
      "$210.78"
    ],
    "answer": 1,
    "explanation": "548 × $0.308 = $168.78."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 280 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$15.12",
      "$8.40",
      "$6.30",
      "$13.65"
    ],
    "answer": 1,
    "explanation": "280 × $0.030 = $8.40 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 324 GB in S3 Standard at $0.053/GB/month costs how much monthly?",
    "options": [
      "$17.17",
      "$30.91",
      "$22.42",
      "$15.07"
    ],
    "answer": 0,
    "explanation": "324 × $0.053 = $17.17 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 533 hours at $0.248/hour. What is the total on-demand compute cost?",
    "options": [
      "$174.18",
      "$147.68",
      "$79.31",
      "$132.18"
    ],
    "answer": 3,
    "explanation": "533 × $0.248 = $132.18."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 525 hours at $0.526/hour. What is the total on-demand compute cost?",
    "options": [
      "$165.69",
      "$276.15",
      "$291.65",
      "$318.15"
    ],
    "answer": 1,
    "explanation": "525 × $0.526 = $276.15."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 249 hours at $0.166/hour. What is the total on-demand compute cost?",
    "options": [
      "$56.83",
      "$41.33",
      "$83.33",
      "$24.80"
    ],
    "answer": 1,
    "explanation": "249 × $0.166 = $41.33."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 476 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$16.20",
      "$19.71",
      "$10.95",
      "$8.85"
    ],
    "answer": 2,
    "explanation": "476 × $0.023 = $10.95 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 133 hours at $0.330/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.89",
      "$26.33",
      "$43.89",
      "$59.39"
    ],
    "answer": 2,
    "explanation": "133 × $0.330 = $43.89."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 188 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$10.89",
      "$10.15",
      "$5.64",
      "$3.54"
    ],
    "answer": 2,
    "explanation": "188 × $0.030 = $5.64 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 634 hours at $0.094/hour. What is the total on-demand compute cost?",
    "options": [
      "$35.76",
      "$75.10",
      "$101.60",
      "$59.60"
    ],
    "answer": 3,
    "explanation": "634 × $0.094 = $59.60."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 567 hours at $0.228/hour. What is the total on-demand compute cost?",
    "options": [
      "$144.78",
      "$171.28",
      "$77.57",
      "$129.28"
    ],
    "answer": 3,
    "explanation": "567 × $0.228 = $129.28."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 378 GB in S3 Standard at $0.046/GB/month costs how much monthly?",
    "options": [
      "$22.64",
      "$31.30",
      "$15.29",
      "$17.39"
    ],
    "answer": 3,
    "explanation": "378 × $0.046 = $17.39 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 391 GB in S3 Standard at $0.010/GB/month costs how much monthly?",
    "options": [
      "$9.16",
      "$7.04",
      "$1.81",
      "$3.91"
    ],
    "answer": 3,
    "explanation": "391 × $0.010 = $3.91 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 456 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$10.49",
      "$15.74",
      "$18.88",
      "$8.39"
    ],
    "answer": 0,
    "explanation": "456 × $0.023 = $10.49 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 474 GB in S3 Standard at $0.033/GB/month costs how much monthly?",
    "options": [
      "$28.15",
      "$13.54",
      "$15.64",
      "$20.89"
    ],
    "answer": 2,
    "explanation": "474 × $0.033 = $15.64 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 548 GB in S3 Standard at $0.031/GB/month costs how much monthly?",
    "options": [
      "$16.99",
      "$22.24",
      "$30.58",
      "$14.89"
    ],
    "answer": 0,
    "explanation": "548 × $0.031 = $16.99 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 472 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$32.63",
      "$27.38",
      "$25.28",
      "$49.28"
    ],
    "answer": 1,
    "explanation": "472 × $0.058 = $27.38 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 502 hours at $0.211/hour. What is the total on-demand compute cost?",
    "options": [
      "$63.55",
      "$147.92",
      "$121.42",
      "$105.92"
    ],
    "answer": 3,
    "explanation": "502 × $0.211 = $105.92."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 179 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$12.24",
      "$4.70",
      "$12.05",
      "$6.80"
    ],
    "answer": 3,
    "explanation": "179 × $0.038 = $6.80 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 113 hours at $0.203/hour. What is the total on-demand compute cost?",
    "options": [
      "$38.44",
      "$64.94",
      "$22.94",
      "$13.76"
    ],
    "answer": 2,
    "explanation": "113 × $0.203 = $22.94."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 423 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$11.41",
      "$6.34",
      "$4.24",
      "$11.59"
    ],
    "answer": 1,
    "explanation": "423 × $0.015 = $6.34 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 545 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$10.78",
      "$3.89",
      "$11.24",
      "$5.99"
    ],
    "answer": 3,
    "explanation": "545 × $0.011 = $5.99 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 225 hours at $0.247/hour. What is the total on-demand compute cost?",
    "options": [
      "$71.08",
      "$55.58",
      "$33.35",
      "$97.58"
    ],
    "answer": 1,
    "explanation": "225 × $0.247 = $55.58."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 746 hours at $0.402/hour. What is the total on-demand compute cost?",
    "options": [
      "$299.89",
      "$179.93",
      "$341.89",
      "$315.39"
    ],
    "answer": 0,
    "explanation": "746 × $0.402 = $299.89."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 807 hours at $0.352/hour. What is the total on-demand compute cost?",
    "options": [
      "$170.44",
      "$326.06",
      "$284.06",
      "$299.56"
    ],
    "answer": 2,
    "explanation": "807 × $0.352 = $284.06."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 509 GB in S3 Standard at $0.026/GB/month costs how much monthly?",
    "options": [
      "$18.48",
      "$13.23",
      "$11.13",
      "$23.81"
    ],
    "answer": 1,
    "explanation": "509 × $0.026 = $13.23 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 422 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$12.85",
      "$13.68",
      "$5.50",
      "$7.60"
    ],
    "answer": 3,
    "explanation": "422 × $0.018 = $7.60 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 507 GB in S3 Standard at $0.043/GB/month costs how much monthly?",
    "options": [
      "$19.70",
      "$27.05",
      "$21.80",
      "$39.24"
    ],
    "answer": 2,
    "explanation": "507 × $0.043 = $21.80 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 552 hours at $0.210/hour. What is the total on-demand compute cost?",
    "options": [
      "$115.92",
      "$69.55",
      "$131.42",
      "$157.92"
    ],
    "answer": 0,
    "explanation": "552 × $0.210 = $115.92."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 365 GB in S3 Standard at $0.034/GB/month costs how much monthly?",
    "options": [
      "$22.34",
      "$10.31",
      "$17.66",
      "$12.41"
    ],
    "answer": 3,
    "explanation": "365 × $0.034 = $12.41 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 186 GB in S3 Standard at $0.051/GB/month costs how much monthly?",
    "options": [
      "$17.08",
      "$9.49",
      "$7.39",
      "$14.74"
    ],
    "answer": 1,
    "explanation": "186 × $0.051 = $9.49 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 130 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$2.34",
      "$7.59",
      "$0.24",
      "$4.21"
    ],
    "answer": 0,
    "explanation": "130 × $0.018 = $2.34 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 236 hours at $0.054/hour. What is the total on-demand compute cost?",
    "options": [
      "$12.74",
      "$28.24",
      "$54.74",
      "$7.64"
    ],
    "answer": 0,
    "explanation": "236 × $0.054 = $12.74."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 637 hours at $0.276/hour. What is the total on-demand compute cost?",
    "options": [
      "$191.31",
      "$175.81",
      "$217.81",
      "$105.49"
    ],
    "answer": 1,
    "explanation": "637 × $0.276 = $175.81."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 124 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$4.46",
      "$8.03",
      "$2.36",
      "$9.71"
    ],
    "answer": 0,
    "explanation": "124 × $0.036 = $4.46 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 186 GB in S3 Standard at $0.044/GB/month costs how much monthly?",
    "options": [
      "$6.08",
      "$13.43",
      "$8.18",
      "$14.72"
    ],
    "answer": 2,
    "explanation": "186 × $0.044 = $8.18 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 146 hours at $0.532/hour. What is the total on-demand compute cost?",
    "options": [
      "$119.67",
      "$93.17",
      "$46.60",
      "$77.67"
    ],
    "answer": 3,
    "explanation": "146 × $0.532 = $77.67."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 217 hours at $0.117/hour. What is the total on-demand compute cost?",
    "options": [
      "$15.23",
      "$25.39",
      "$67.39",
      "$40.89"
    ],
    "answer": 1,
    "explanation": "217 × $0.117 = $25.39."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 113 hours at $0.389/hour. What is the total on-demand compute cost?",
    "options": [
      "$26.38",
      "$43.96",
      "$59.46",
      "$85.96"
    ],
    "answer": 1,
    "explanation": "113 × $0.389 = $43.96."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 584 hours at $0.469/hour. What is the total on-demand compute cost?",
    "options": [
      "$289.40",
      "$273.90",
      "$164.34",
      "$315.90"
    ],
    "answer": 1,
    "explanation": "584 × $0.469 = $273.90."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 201 GB in S3 Standard at $0.018/GB/month costs how much monthly?",
    "options": [
      "$3.62",
      "$6.52",
      "$8.87",
      "$1.52"
    ],
    "answer": 0,
    "explanation": "201 × $0.018 = $3.62 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 814 hours at $0.294/hour. What is the total on-demand compute cost?",
    "options": [
      "$239.32",
      "$254.82",
      "$281.32",
      "$143.59"
    ],
    "answer": 0,
    "explanation": "814 × $0.294 = $239.32."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 515 hours at $0.336/hour. What is the total on-demand compute cost?",
    "options": [
      "$103.82",
      "$188.54",
      "$215.04",
      "$173.04"
    ],
    "answer": 3,
    "explanation": "515 × $0.336 = $173.04."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 475 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$19.50",
      "$14.25",
      "$25.65",
      "$12.15"
    ],
    "answer": 1,
    "explanation": "475 × $0.030 = $14.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 87 GB in S3 Standard at $0.011/GB/month costs how much monthly?",
    "options": [
      "$-1.14",
      "$6.21",
      "$0.96",
      "$1.73"
    ],
    "answer": 2,
    "explanation": "87 × $0.011 = $0.96 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 235 GB in S3 Standard at $0.033/GB/month costs how much monthly?",
    "options": [
      "$13.01",
      "$5.66",
      "$13.97",
      "$7.76"
    ],
    "answer": 3,
    "explanation": "235 × $0.033 = $7.76 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 501 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$28.85",
      "$16.03",
      "$21.28",
      "$13.93"
    ],
    "answer": 1,
    "explanation": "501 × $0.032 = $16.03 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 485 GB in S3 Standard at $0.056/GB/month costs how much monthly?",
    "options": [
      "$32.41",
      "$25.06",
      "$48.89",
      "$27.16"
    ],
    "answer": 3,
    "explanation": "485 × $0.056 = $27.16 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 276 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$8.28",
      "$6.18",
      "$14.90",
      "$13.53"
    ],
    "answer": 0,
    "explanation": "276 × $0.030 = $8.28 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 807 hours at $0.106/hour. What is the total on-demand compute cost?",
    "options": [
      "$85.54",
      "$101.04",
      "$127.54",
      "$51.32"
    ],
    "answer": 0,
    "explanation": "807 × $0.106 = $85.54."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 473 hours at $0.085/hour. What is the total on-demand compute cost?",
    "options": [
      "$40.21",
      "$24.13",
      "$82.21",
      "$55.71"
    ],
    "answer": 0,
    "explanation": "473 × $0.085 = $40.21."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 201 hours at $0.345/hour. What is the total on-demand compute cost?",
    "options": [
      "$69.34",
      "$84.84",
      "$111.34",
      "$41.60"
    ],
    "answer": 0,
    "explanation": "201 × $0.345 = $69.34."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 173 GB in S3 Standard at $0.030/GB/month costs how much monthly?",
    "options": [
      "$3.09",
      "$10.44",
      "$5.19",
      "$9.34"
    ],
    "answer": 2,
    "explanation": "173 × $0.030 = $5.19 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 436 hours at $0.089/hour. What is the total on-demand compute cost?",
    "options": [
      "$80.80",
      "$38.80",
      "$54.30",
      "$23.28"
    ],
    "answer": 1,
    "explanation": "436 × $0.089 = $38.80."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 415 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$11.47",
      "$6.22",
      "$4.12",
      "$11.20"
    ],
    "answer": 1,
    "explanation": "415 × $0.015 = $6.22 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 265 hours at $0.326/hour. What is the total on-demand compute cost?",
    "options": [
      "$101.89",
      "$86.39",
      "$128.39",
      "$51.83"
    ],
    "answer": 1,
    "explanation": "265 × $0.326 = $86.39."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 184 GB in S3 Standard at $0.022/GB/month costs how much monthly?",
    "options": [
      "$1.95",
      "$9.30",
      "$7.29",
      "$4.05"
    ],
    "answer": 3,
    "explanation": "184 × $0.022 = $4.05 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 496 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$23.11",
      "$17.86",
      "$32.15",
      "$15.76"
    ],
    "answer": 1,
    "explanation": "496 × $0.036 = $17.86 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 209 hours at $0.446/hour. What is the total on-demand compute cost?",
    "options": [
      "$93.21",
      "$108.71",
      "$55.93",
      "$135.21"
    ],
    "answer": 0,
    "explanation": "209 × $0.446 = $93.21."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 114 hours at $0.068/hour. What is the total on-demand compute cost?",
    "options": [
      "$7.75",
      "$4.65",
      "$23.25",
      "$49.75"
    ],
    "answer": 0,
    "explanation": "114 × $0.068 = $7.75."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 246 hours at $0.253/hour. What is the total on-demand compute cost?",
    "options": [
      "$62.24",
      "$37.34",
      "$77.74",
      "$104.24"
    ],
    "answer": 0,
    "explanation": "246 × $0.253 = $62.24."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 230 hours at $0.543/hour. What is the total on-demand compute cost?",
    "options": [
      "$140.39",
      "$74.93",
      "$124.89",
      "$166.89"
    ],
    "answer": 2,
    "explanation": "230 × $0.543 = $124.89."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 111 GB in S3 Standard at $0.057/GB/month costs how much monthly?",
    "options": [
      "$6.33",
      "$11.58",
      "$4.23",
      "$11.39"
    ],
    "answer": 0,
    "explanation": "111 × $0.057 = $6.33 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 793 hours at $0.241/hour. What is the total on-demand compute cost?",
    "options": [
      "$191.11",
      "$233.11",
      "$206.61",
      "$114.67"
    ],
    "answer": 0,
    "explanation": "793 × $0.241 = $191.11."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 132 GB in S3 Standard at $0.052/GB/month costs how much monthly?",
    "options": [
      "$6.86",
      "$4.76",
      "$12.11",
      "$12.35"
    ],
    "answer": 0,
    "explanation": "132 × $0.052 = $6.86 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 673 hours at $0.416/hour. What is the total on-demand compute cost?",
    "options": [
      "$321.97",
      "$279.97",
      "$167.98",
      "$295.47"
    ],
    "answer": 1,
    "explanation": "673 × $0.416 = $279.97."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 784 hours at $0.225/hour. What is the total on-demand compute cost?",
    "options": [
      "$105.84",
      "$191.90",
      "$176.40",
      "$218.40"
    ],
    "answer": 2,
    "explanation": "784 × $0.225 = $176.40."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 220 hours at $0.152/hour. What is the total on-demand compute cost?",
    "options": [
      "$20.06",
      "$33.44",
      "$48.94",
      "$75.44"
    ],
    "answer": 1,
    "explanation": "220 × $0.152 = $33.44."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 161 GB in S3 Standard at $0.032/GB/month costs how much monthly?",
    "options": [
      "$10.40",
      "$5.15",
      "$9.27",
      "$3.05"
    ],
    "answer": 1,
    "explanation": "161 × $0.032 = $5.15 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 631 hours at $0.341/hour. What is the total on-demand compute cost?",
    "options": [
      "$257.17",
      "$230.67",
      "$129.10",
      "$215.17"
    ],
    "answer": 3,
    "explanation": "631 × $0.341 = $215.17."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 222 hours at $0.072/hour. What is the total on-demand compute cost?",
    "options": [
      "$31.48",
      "$9.59",
      "$15.98",
      "$57.98"
    ],
    "answer": 2,
    "explanation": "222 × $0.072 = $15.98."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 119 GB in S3 Standard at $0.028/GB/month costs how much monthly?",
    "options": [
      "$1.23",
      "$3.33",
      "$8.58",
      "$5.99"
    ],
    "answer": 1,
    "explanation": "119 × $0.028 = $3.33 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 256 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$3.33",
      "$8.58",
      "$1.23",
      "$5.99"
    ],
    "answer": 0,
    "explanation": "256 × $0.013 = $3.33 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 101 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$7.27",
      "$-0.08",
      "$3.64",
      "$2.02"
    ],
    "answer": 3,
    "explanation": "101 × $0.020 = $2.02 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 679 hours at $0.387/hour. What is the total on-demand compute cost?",
    "options": [
      "$157.66",
      "$278.27",
      "$304.77",
      "$262.77"
    ],
    "answer": 3,
    "explanation": "679 × $0.387 = $262.77."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 394 hours at $0.297/hour. What is the total on-demand compute cost?",
    "options": [
      "$159.02",
      "$70.21",
      "$117.02",
      "$132.52"
    ],
    "answer": 2,
    "explanation": "394 × $0.297 = $117.02."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 207 GB in S3 Standard at $0.036/GB/month costs how much monthly?",
    "options": [
      "$7.45",
      "$5.35",
      "$13.41",
      "$12.70"
    ],
    "answer": 0,
    "explanation": "207 × $0.036 = $7.45 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 315 GB in S3 Standard at $0.023/GB/month costs how much monthly?",
    "options": [
      "$12.50",
      "$5.15",
      "$7.25",
      "$13.05"
    ],
    "answer": 2,
    "explanation": "315 × $0.023 = $7.25 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 434 hours at $0.269/hour. What is the total on-demand compute cost?",
    "options": [
      "$116.75",
      "$158.75",
      "$132.25",
      "$70.05"
    ],
    "answer": 0,
    "explanation": "434 × $0.269 = $116.75."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 755 hours at $0.441/hour. What is the total on-demand compute cost?",
    "options": [
      "$332.95",
      "$374.95",
      "$199.77",
      "$348.45"
    ],
    "answer": 0,
    "explanation": "755 × $0.441 = $332.95."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 255 GB in S3 Standard at $0.033/GB/month costs how much monthly?",
    "options": [
      "$15.16",
      "$6.32",
      "$8.42",
      "$13.67"
    ],
    "answer": 2,
    "explanation": "255 × $0.033 = $8.42 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 331 GB in S3 Standard at $0.038/GB/month costs how much monthly?",
    "options": [
      "$17.83",
      "$22.64",
      "$10.48",
      "$12.58"
    ],
    "answer": 3,
    "explanation": "331 × $0.038 = $12.58 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 514 hours at $0.350/hour. What is the total on-demand compute cost?",
    "options": [
      "$107.94",
      "$221.90",
      "$195.40",
      "$179.90"
    ],
    "answer": 3,
    "explanation": "514 × $0.350 = $179.90."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 493 hours at $0.434/hour. What is the total on-demand compute cost?",
    "options": [
      "$229.46",
      "$255.96",
      "$213.96",
      "$128.38"
    ],
    "answer": 2,
    "explanation": "493 × $0.434 = $213.96."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 270 GB in S3 Standard at $0.017/GB/month costs how much monthly?",
    "options": [
      "$2.49",
      "$9.84",
      "$4.59",
      "$8.26"
    ],
    "answer": 2,
    "explanation": "270 × $0.017 = $4.59 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 444 GB in S3 Standard at $0.015/GB/month costs how much monthly?",
    "options": [
      "$6.66",
      "$11.99",
      "$4.56",
      "$11.91"
    ],
    "answer": 0,
    "explanation": "444 × $0.015 = $6.66 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 121 hours at $0.463/hour. What is the total on-demand compute cost?",
    "options": [
      "$33.61",
      "$71.52",
      "$98.02",
      "$56.02"
    ],
    "answer": 3,
    "explanation": "121 × $0.463 = $56.02."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 339 GB in S3 Standard at $0.058/GB/month costs how much monthly?",
    "options": [
      "$19.66",
      "$24.91",
      "$35.39",
      "$17.56"
    ],
    "answer": 0,
    "explanation": "339 × $0.058 = $19.66 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 118 GB in S3 Standard at $0.033/GB/month costs how much monthly?",
    "options": [
      "$7.00",
      "$3.89",
      "$9.14",
      "$1.79"
    ],
    "answer": 1,
    "explanation": "118 × $0.033 = $3.89 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 722 hours at $0.085/hour. What is the total on-demand compute cost?",
    "options": [
      "$103.37",
      "$61.37",
      "$76.87",
      "$36.82"
    ],
    "answer": 1,
    "explanation": "722 × $0.085 = $61.37."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 185 hours at $0.540/hour. What is the total on-demand compute cost?",
    "options": [
      "$141.90",
      "$59.94",
      "$115.40",
      "$99.90"
    ],
    "answer": 3,
    "explanation": "185 × $0.540 = $99.90."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 354 hours at $0.111/hour. What is the total on-demand compute cost?",
    "options": [
      "$54.79",
      "$23.57",
      "$39.29",
      "$81.29"
    ],
    "answer": 2,
    "explanation": "354 × $0.111 = $39.29."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 338 hours at $0.466/hour. What is the total on-demand compute cost?",
    "options": [
      "$173.01",
      "$199.51",
      "$157.51",
      "$94.51"
    ],
    "answer": 2,
    "explanation": "338 × $0.466 = $157.51."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 345 hours at $0.306/hour. What is the total on-demand compute cost?",
    "options": [
      "$63.34",
      "$121.07",
      "$147.57",
      "$105.57"
    ],
    "answer": 3,
    "explanation": "345 × $0.306 = $105.57."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 443 GB in S3 Standard at $0.020/GB/month costs how much monthly?",
    "options": [
      "$14.11",
      "$6.76",
      "$8.86",
      "$15.95"
    ],
    "answer": 2,
    "explanation": "443 × $0.020 = $8.86 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 388 hours at $0.504/hour. What is the total on-demand compute cost?",
    "options": [
      "$211.05",
      "$237.55",
      "$117.33",
      "$195.55"
    ],
    "answer": 3,
    "explanation": "388 × $0.504 = $195.55."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 176 hours at $0.099/hour. What is the total on-demand compute cost?",
    "options": [
      "$17.42",
      "$10.45",
      "$59.42",
      "$32.92"
    ],
    "answer": 0,
    "explanation": "176 × $0.099 = $17.42."
  },
  {
    "subject": "Cloud",
    "topic": "Storage Pricing",
    "difficulty": "Easy",
    "question": "Storing 427 GB in S3 Standard at $0.013/GB/month costs how much monthly?",
    "options": [
      "$10.80",
      "$9.99",
      "$5.55",
      "$3.45"
    ],
    "answer": 2,
    "explanation": "427 × $0.013 = $5.55 per month."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 594 hours at $0.469/hour. What is the total on-demand compute cost?",
    "options": [
      "$167.15",
      "$294.09",
      "$320.59",
      "$278.59"
    ],
    "answer": 3,
    "explanation": "594 × $0.469 = $278.59."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 758 hours at $0.492/hour. What is the total on-demand compute cost?",
    "options": [
      "$414.94",
      "$223.76",
      "$388.44",
      "$372.94"
    ],
    "answer": 3,
    "explanation": "758 × $0.492 = $372.94."
  },
  {
    "subject": "Cloud",
    "topic": "Cost Management",
    "difficulty": "Medium",
    "question": "An EC2 instance runs for 683 hours at $0.134/hour. What is the total on-demand compute cost?",
    "options": [
      "$107.02",
      "$54.91",
      "$133.52",
      "$91.52"
    ],
    "answer": 3,
    "explanation": "683 × $0.134 = $91.52."
  }
];
