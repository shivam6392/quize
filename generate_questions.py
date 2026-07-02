import json
import os
import time

# NOTE: Since generating 8,000 highly-complex questions will exhaust single-response token limits,
# run this Python script on your machine to automatically generate and save them directly 
# to the JavaScript files so your website works!

# Prerequisites: 
# pip install google-genai

# Add your API key here (e.g., Gemini API Key)
API_KEY = "YOUR_GEMINI_API_KEY_HERE"

# Ensure you have 'google-genai' installed
try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Please install google-genai using: pip install google-genai")
    exit(1)

client = genai.Client(api_key=API_KEY)

# ==========================================
# SUPER COMPREHENSIVE SYLLABUS MAPPING (8 Subjects)
# ==========================================

SYLLABUS = {
    "dsa": {
        "title": "Data Structures & Algorithms",
        "topics": [
            "Complexity Analysis", "Arrays", "Strings", "Linked List", "Stack", 
            "Queue", "Hashing", "Trees", "Graph", "Dynamic Programming", 
            "Greedy", "Backtracking", "Bit Manipulation", "Advanced Topics"
        ]
    },
    "aiml": {
        "title": "Artificial Intelligence / Machine Learning",
        "topics": [
            "AI Basics", "Machine Learning Basics", "Data Preprocessing", "Regression",
            "Classification", "Clustering", "Neural Networks", "Deep Learning",
            "Evaluation Metrics", "Libraries (NumPy, Pandas, Scikit-Learn)"
        ]
    },
    "java": {
        "title": "Java (Core + OOP)",
        "topics": [
            "Java Basics", "OOP Concepts", "Advanced OOP", "Exception Handling",
            "Collections", "Strings Handling", "Multithreading", "File Handling",
            "Java 8 Features", "JVM Ecosystem and Garbage Collection"
        ]
    },
    "os": {
        "title": "Operating Systems",
        "topics": [
            "Process Management", "Threads and Concurrency", "CPU Scheduling",
            "Synchronization (Semaphore, Mutex)", "Deadlock Management",
            "Memory Management", "File System", "System Calls"
        ]
    },
    "cn": {
        "title": "Computer Networks",
        "topics": [
            "OSI Model", "TCP/IP Suite", "Physical & Data Link Layer",
            "Network Layer & IP Addressing", "Transport Layer", "Application Layer",
            "Networking Protocols (DNS, HTTPS, DHCP)", "Congestion Control"
        ]
    },
    "cloud": {
        "title": "Cloud Computing",
        "topics": [
            "Cloud Basics & Service Models", "Deployment Models", "Virtualization",
            "Containers & Docker / Kubernetes", "AWS/Azure/GCP Basics",
            "Cloud Security", "Microservices & Serverless"
        ]
    },
    "coa": {
        "title": "Computer Organization & Architecture (COA)",
        "topics": [
            "Number Systems & Boolean Algebra", "Digital Logic", "CPU Architecture",
            "Instruction Pipeline", "Memory Hierarchy & Cache", "Addressing Modes",
            "I/O Organization", "Parallel Processing"
        ]
    },
    "fsd": {
        "title": "Full Stack Development",
        "topics": [
            "Internet Fundamentals", "HTML5 & CSS3", "JavaScript & TypeScript",
            "React.js Core", "Node.js & Express.js", "Databases (SQL vs NoSQL)",
            "Authentication & Security", "API Development & Version Control",
            "System Design & Deployment"
        ]
    }
}


def get_generation_prompt(subject_name, topic, count):
    return f"""
    You are an expert technical interviewer for Indian tech companies (Zoho, TCS Digital).
    We are generating exactly {count} multiple choice questions for a quiz application.
    
    Subject: {subject_name}
    Topic: {topic}
    Difficulty blend: approximately 40% Easy, 40% Medium, 20% Hard.
    
    Structure your answer as STRICT JSON representing an array of objects. 
    Do NOT output markdown wrappers like ```json, just the pure JSON array.
    
    Example format:
    [
      {{
        "subject": "{subject_name}",
        "topic": "{topic}",
        "difficulty": "Medium",
        "question": "What does a React Hook do?",
        "options": ["A", "B", "C", "D"],
        "answer": 1, 
        "explanation": "Because..."
      }}
    ]
    """

def bulk_generate_subject(subject_key, subject_data, target_total=1000):
    subject_title = subject_data["title"]
    topics = subject_data["topics"]
    
    # Calculate questions per topic
    q_per_topic = target_total // len(topics)
    remainder = target_total % len(topics)
    
    all_questions = []
    
    for idx, topic in enumerate(topics):
        # The first topic takes any remainder to hit exactly target_total
        count_for_this_topic = q_per_topic + (remainder if idx == 0 else 0)
        
        print(f"Generating {count_for_this_topic} questions for '{subject_title}' - Topic: '{topic}'...")
        prompt = get_generation_prompt(subject_title, topic, count_for_this_topic)
        
        try:
            # Using Gemini Pro Model
            response = client.models.generate_content(
                model='gemini-2.5-pro',
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json", # Ensures consistent JSON out
                ),
            )
            
            # Parse the JSON array
            questions_array = json.loads(response.text)
            all_questions.extend(questions_array)
            print(f"  -> Generated {len(questions_array)} successfully.")
            
            # Sleep briefly to respect API rate limits
            time.sleep(2)
            
        except Exception as e:
            print(f"  -> Error generating {topic}: {e}")
            break

    # Save to the javascript file format
    if all_questions:
        file_path = f"data/{subject_key}.js"
        content = f"window.quizData = window.quizData || {{}};\n"
        content += f"window.quizData.{subject_key} = " + json.dumps(all_questions, indent=4) + ";\n"
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"✅ Successfully wrote {len(all_questions)} questions to {file_path}\n")

if __name__ == "__main__":
    print("🚀 Starting bulk generation script for NextGen Prep 🚀")
    if API_KEY == "YOUR_GEMINI_API_KEY_HERE":
        print("ERROR: Please enter your Gemini API Key at the top of the script first!")
        exit(1)
        
    for subject_key, data in SYLLABUS.items():
        print(f"\\n--- RUNNING BATCH FOR: {data['title']} ---")
        # Generating 1000 questions per subject
        bulk_generate_subject(subject_key, data, 1000)
        
    print("🎉 All 8,000 Questions Generated Successfully! Open index.html to view.")
