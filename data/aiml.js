window.quizData = window.quizData || {};
window.quizData.aiml = [
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Supervised learning uses?",
    "options": [
      "Unlabeled data",
      "Labeled data",
      "Random data",
      "No data"
    ],
    "answer": 1,
    "explanation": "Supervised learning maps input to known output labels."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Unsupervised learning is used for?",
    "options": [
      "Predicting known outputs (typical scenario)",
      "Finding hidden patterns without labels",
      "Classification with labels (general case)",
      "Regression with targets (general case)"
    ],
    "answer": 1,
    "explanation": "No target variable; discovers structure in data."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Reinforcement learning learns through?",
    "options": [
      "Rewards and penalties",
      "Clustering in standard usage",
      "Backpropagation only",
      "Labeled datasets"
    ],
    "answer": 0,
    "explanation": "Agent maximizes cumulative reward via trial and error."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Linear regression predicts?",
    "options": [
      "Clusters in standard usage",
      "Categories in standard usage",
      "Binary classes (general case)",
      "Continuous numerical values"
    ],
    "answer": 3,
    "explanation": "Fits a line to minimize squared errors."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Logistic regression is used for?",
    "options": [
      "Regression by design",
      "Clustering (widely accepted)",
      "Binary classification",
      "Dimensionality reduction"
    ],
    "answer": 2,
    "explanation": "Outputs probability via sigmoid function."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Decision tree splits data based on?",
    "options": [
      "Target variable only (commonly used)",
      "Random features based on convention",
      "Feature that gives best information gain",
      "All features equally in typical implementations"
    ],
    "answer": 2,
    "explanation": "Greedy splits maximize purity of child nodes."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Random forest is?",
    "options": [
      "Single deep tree (commonly used)",
      "Clustering method (general case)",
      "Neural network in standard usage",
      "Ensemble of decision trees"
    ],
    "answer": 3,
    "explanation": "Aggregates predictions from multiple trees."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "K-Nearest Neighbors classifies by?",
    "options": [
      "Feature elimination (general case)",
      "Gradient descent based on convention",
      "Majority vote of K nearest points",
      "Tree splitting (typical scenario)"
    ],
    "answer": 2,
    "explanation": "Distance-based lazy learner."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "SVM finds?",
    "options": [
      "Principal components",
      "Cluster centers in practice",
      "Minimum distance in most cases",
      "Maximum margin hyperplane"
    ],
    "answer": 3,
    "explanation": "Support vectors define the decision boundary."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Naive Bayes assumes?",
    "options": [
      "Feature independence given class",
      "Linear separability (widely accepted)",
      "All features are correlated",
      "No prior probability (general case)"
    ],
    "answer": 0,
    "explanation": "Conditional independence assumption simplifies computation."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "K-Means clustering minimizes?",
    "options": [
      "Within-cluster sum of squares",
      "Entropy under normal conditions",
      "Between-cluster distance",
      "Number of features (general case)"
    ],
    "answer": 0,
    "explanation": "Iteratively assigns points to nearest centroid."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Hierarchical clustering produces?",
    "options": [
      "Dendrogram",
      "Decision boundary",
      "ROC curve",
      "Confusion matrix"
    ],
    "answer": 0,
    "explanation": "Agglomerative or divisive approach builds tree."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Hard",
    "question": "DBSCAN clusters based on?",
    "options": [
      "Feature importance",
      "Distance to centroid only",
      "Random assignment",
      "Density of points"
    ],
    "answer": 3,
    "explanation": "Density-Based Spatial Clustering finds arbitrary shapes."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Perceptron is?",
    "options": [
      "Unsupervised method in typical implementations",
      "Single-layer neural network for linear classification",
      "Regression only in typical implementations",
      "Clustering algorithm in typical implementations"
    ],
    "answer": 1,
    "explanation": "Weighted sum + activation function."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Backpropagation computes?",
    "options": [
      "Gradients of loss w.r.t. weights",
      "Feature importance (typical scenario)",
      "Forward pass only (general case)",
      "Cluster assignments (primary approach)"
    ],
    "answer": 0,
    "explanation": "Chain rule propagates error backwards through layers."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Activation function introduces?",
    "options": [
      "Non-linearity into neural networks",
      "Randomness in typical implementations",
      "Linearity (widely accepted)",
      "Overfitting under normal conditions"
    ],
    "answer": 0,
    "explanation": "Without activation, network is just linear transformation."
  },
  {
    "subject": "AI / ML",
    "topic": "Deep Learning",
    "difficulty": "Easy",
    "question": "CNN is best for?",
    "options": [
      "Image recognition tasks",
      "Tabular data only by design",
      "Audio only based on convention",
      "Sequential text data"
    ],
    "answer": 0,
    "explanation": "Convolutional layers detect spatial patterns."
  },
  {
    "subject": "AI / ML",
    "topic": "Deep Learning",
    "difficulty": "Easy",
    "question": "RNN is designed for?",
    "options": [
      "Image data as per specification",
      "Sequential/time-series data",
      "Static tabular data (general case)",
      "Clustering as per specification"
    ],
    "answer": 1,
    "explanation": "Recurrent connections maintain hidden state across time steps."
  },
  {
    "subject": "AI / ML",
    "topic": "Deep Learning",
    "difficulty": "Medium",
    "question": "LSTM solves?",
    "options": [
      "Data imbalance under normal conditions",
      "Overfitting in standard usage",
      "Underfitting (widely accepted)",
      "Vanishing gradient in standard RNNs"
    ],
    "answer": 3,
    "explanation": "Gates control information flow through memory cell."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Transformers use?",
    "options": [
      "Convolutional filters",
      "Random forests in practice",
      "Recurrent connections",
      "Self-attention mechanism"
    ],
    "answer": 3,
    "explanation": "Attention scores capture relationships regardless of distance."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Easy",
    "question": "Accuracy = ?",
    "options": [
      "(TP+TN) / Total",
      "TP/(TP+FN)",
      "2*P*R/(P+R)",
      "TP/FP by design"
    ],
    "answer": 0,
    "explanation": "Correct predictions divided by total."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Easy",
    "question": "Precision = ?",
    "options": [
      "TP / (TP + FP)",
      "FP/(FP+TN)",
      "(TP+TN)/Total",
      "TP / (TP+FN)"
    ],
    "answer": 0,
    "explanation": "Of predicted positives, how many are actually positive."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Easy",
    "question": "Recall = ?",
    "options": [
      "FN/(FP+FN)",
      "(TP+TN)/Total",
      "TP / (TP+FP)",
      "TP / (TP + FN)"
    ],
    "answer": 3,
    "explanation": "Of actual positives, how many were correctly predicted."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "F1 Score is?",
    "options": [
      "Harmonic mean of Precision and Recall",
      "Simple average of accuracy in standard usage",
      "Geometric mean under normal conditions",
      "Arithmetic mean (typical scenario)"
    ],
    "answer": 0,
    "explanation": "F1 = 2*P*R/(P+R), balances precision and recall."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "ROC curve plots?",
    "options": [
      "Precision vs Recall based on convention",
      "Error vs Epochs (default behavior)",
      "True Positive Rate vs False Positive Rate",
      "Accuracy vs Loss (primary approach)"
    ],
    "answer": 2,
    "explanation": "Shows classifier performance across all thresholds."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Easy",
    "question": "Confusion matrix shows?",
    "options": [
      "Learning rate in most cases",
      "Feature importance",
      "Cluster assignments",
      "TP, TN, FP, FN counts"
    ],
    "answer": 3,
    "explanation": "Tabulates actual vs predicted classifications."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Overfitting means?",
    "options": [
      "Model fails on both in typical implementations",
      "Model is too simple in typical implementations",
      "Model has no parameters in typical implementations",
      "Model performs well on training but poorly on test data"
    ],
    "answer": 3,
    "explanation": "Model memorizes noise instead of learning patterns."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Underfitting means?",
    "options": [
      "Model overfits in standard usage",
      "Perfect generalization (widely accepted)",
      "Model is too simple to capture patterns",
      "Model memorizes data in standard usage"
    ],
    "answer": 2,
    "explanation": "High bias, low variance; needs more complexity."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Cross-validation purpose?",
    "options": [
      "Increase features (default behavior)",
      "Reduce dataset size as per specification",
      "Assess model generalization on unseen data",
      "Speed up training under normal conditions"
    ],
    "answer": 2,
    "explanation": "K-fold splits data into train/validate partitions."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Feature scaling is needed because?",
    "options": [
      "Algorithms sensitive to magnitude perform poorly without it",
      "It adds noise in typical implementations",
      "It reduces accuracy in typical implementations",
      "It removes features in typical implementations"
    ],
    "answer": 0,
    "explanation": "Normalization/standardization ensures equal feature contribution."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "One-Hot Encoding is used for?",
    "options": [
      "Scaling numerical features (widely accepted)",
      "Removing outliers in typical implementations",
      "Converting categorical variables to binary vectors",
      "Reducing dimensions in typical implementations"
    ],
    "answer": 2,
    "explanation": "Each category becomes a binary column."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Label Encoding assigns?",
    "options": [
      "Integer values to categories",
      "String hashes (primary approach)",
      "Binary vectors in practice",
      "Random floats in standard usage"
    ],
    "answer": 0,
    "explanation": "Each unique category gets a unique integer."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Missing values can be handled by?",
    "options": [
      "Setting all to zero based on convention",
      "Imputation (mean, median, mode) or deletion",
      "Ignoring them always under normal conditions",
      "Multiplying by -1 (default behavior)"
    ],
    "answer": 1,
    "explanation": "Strategy depends on data distribution and missingness pattern."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Gradient descent minimizes?",
    "options": [
      "Data size by design",
      "Number of features",
      "Accuracy (commonly used)",
      "Loss/cost function"
    ],
    "answer": 3,
    "explanation": "Iteratively updates parameters in direction of steepest descent."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Learning rate controls?",
    "options": [
      "Data augmentation in standard usage",
      "Dropout rate under normal conditions",
      "Step size in gradient descent",
      "Number of features by design"
    ],
    "answer": 2,
    "explanation": "Too high: overshoots; too low: slow convergence."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Regularization reduces?",
    "options": [
      "Underfitting in typical implementations",
      "Training time in typical implementations",
      "Overfitting by penalizing large weights",
      "Dataset size based on convention"
    ],
    "answer": 2,
    "explanation": "L1/L2 add penalty term to loss function."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "NumPy is used for?",
    "options": [
      "File compression (general case)",
      "Numerical array operations",
      "Web scraping by design",
      "Database queries (general case)"
    ],
    "answer": 1,
    "explanation": "Efficient multidimensional array computations."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Pandas provides?",
    "options": [
      "Image processing (standard definition)",
      "GPU computing in typical implementations",
      "Neural network layers based on convention",
      "DataFrame for structured data manipulation"
    ],
    "answer": 3,
    "explanation": "Tabular data analysis tool in Python."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Scikit-learn provides?",
    "options": [
      "Machine learning algorithms and utilities",
      "Deep learning only (primary approach)",
      "Web framework under normal conditions",
      "Database ORM (standard definition)"
    ],
    "answer": 0,
    "explanation": "Preprocessing, models, metrics all in one library."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Matplotlib is used for?",
    "options": [
      "Data visualization and plotting",
      "Web development (primary approach)",
      "ML training (standard definition)",
      "Data storage (general case)"
    ],
    "answer": 0,
    "explanation": "Creates charts, graphs, and visual representations."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Train-test split typically uses?",
    "options": [
      "50-50 always in most cases",
      "80-20 or 70-30 ratio",
      "99-1 (commonly used)",
      "No split needed"
    ],
    "answer": 1,
    "explanation": "Majority for training, held-out portion for evaluation."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Bias in ML refers to?",
    "options": [
      "Error from oversimplified assumptions",
      "Dataset size in standard usage",
      "Error from noise (standard definition)",
      "Feature count (primary approach)"
    ],
    "answer": 0,
    "explanation": "High bias = underfitting the training data."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Variance in ML refers to?",
    "options": [
      "Average error under normal conditions",
      "Constant error in typical implementations",
      "Sensitivity to fluctuations in training data",
      "Zero error in typical implementations"
    ],
    "answer": 2,
    "explanation": "High variance = overfitting to training data."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Principal Component Analysis (PCA) does?",
    "options": [
      "Regression (commonly used)",
      "Clustering (commonly used)",
      "Classification in most cases",
      "Dimensionality reduction"
    ],
    "answer": 3,
    "explanation": "Projects data onto directions of maximum variance."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Dropout in neural networks?",
    "options": [
      "Adds more neurons based on convention",
      "Speeds up inference as per specification",
      "Removes layers permanently in standard usage",
      "Randomly deactivates neurons during training"
    ],
    "answer": 3,
    "explanation": "Regularization technique preventing co-adaptation."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Hard",
    "question": "Batch normalization does?",
    "options": [
      "Removes all layers in standard usage",
      "Normalizes layer inputs during training",
      "Reduces features (primary approach)",
      "Increases batch size based on convention"
    ],
    "answer": 1,
    "explanation": "Stabilizes learning and allows higher learning rates."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Transfer learning means?",
    "options": [
      "Feature deletion (commonly used)",
      "Training from scratch (typical scenario)",
      "Unsupervised clustering based on convention",
      "Using pre-trained model for a new task"
    ],
    "answer": 3,
    "explanation": "Fine-tune existing model on new domain data."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Epoch means?",
    "options": [
      "One layer update in typical implementations",
      "One sample in typical implementations",
      "One batch in typical implementations",
      "One complete pass through the entire training dataset"
    ],
    "answer": 3,
    "explanation": "Multiple epochs improve learning."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Batch size is?",
    "options": [
      "Number of samples processed before updating weights",
      "Number of features in typical implementations",
      "Number of epochs in typical implementations",
      "Total dataset size in typical implementations"
    ],
    "answer": 0,
    "explanation": "Larger batch = more stable gradient, more memory."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "A* search algorithm uses?",
    "options": [
      "Heuristic + path cost (f = g + h)",
      "Only heuristic as per specification",
      "Random selection (widely accepted)",
      "Only path cost (commonly used)"
    ],
    "answer": 0,
    "explanation": "Combines actual cost and heuristic estimate."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Minimax algorithm is used for?",
    "options": [
      "Clustering (default behavior)",
      "Data preprocessing by design",
      "Game playing (adversarial search)",
      "Regression under normal conditions"
    ],
    "answer": 2,
    "explanation": "Maximizes own score while minimizing opponent's."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Types of AI include?",
    "options": [
      "Only Deep Learning in standard usage",
      "Narrow AI, General AI, Super AI",
      "Hardware and Software by design",
      "Only Narrow AI (primary approach)"
    ],
    "answer": 1,
    "explanation": "Classification by capability level."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Intelligent agent in AI?",
    "options": [
      "Static program in typical implementations",
      "Entity that perceives environment and acts to maximize goals",
      "Passive data store in typical implementations",
      "Simple calculator in typical implementations"
    ],
    "answer": 1,
    "explanation": "Agents sense, decide, and act in their environment."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Knowledge representation in AI uses?",
    "options": [
      "Only numbers in typical implementations",
      "Only text in typical implementations",
      "Logic, semantic networks, frames, ontologies",
      "Only images in typical implementations"
    ],
    "answer": 2,
    "explanation": "Structures to encode knowledge for reasoning."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Polynomial regression fits?",
    "options": [
      "Curved relationships using polynomial terms",
      "Categorical data (standard definition)",
      "No relationships as per specification",
      "Only straight lines in standard usage"
    ],
    "answer": 0,
    "explanation": "Transforms features to polynomial degree."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Multiple regression uses?",
    "options": [
      "Multiple independent variables to predict one dependent",
      "Only categorical in typical implementations",
      "One independent variable in typical implementations",
      "No variables in typical implementations"
    ],
    "answer": 0,
    "explanation": "Extends simple linear regression to multiple predictors."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "Ethics in AI includes?",
    "options": [
      "Bias mitigation, privacy, transparency, accountability",
      "Only profit in typical implementations",
      "Only speed optimization under normal conditions",
      "Only accuracy in typical implementations"
    ],
    "answer": 0,
    "explanation": "Responsible AI development considers societal impact."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Medium",
    "question": "Data augmentation is?",
    "options": [
      "Normalizing only in typical implementations",
      "Deleting data in typical implementations",
      "Creating modified copies of data to increase dataset size",
      "Reducing features in typical implementations"
    ],
    "answer": 2,
    "explanation": "Flips, rotations, crops etc. for image data."
  },
  {
    "subject": "AI / ML",
    "topic": "ML Basics",
    "difficulty": "Easy",
    "question": "TensorFlow is?",
    "options": [
      "Web framework in typical implementations",
      "Database system in typical implementations",
      "Open-source deep learning framework by Google",
      "Operating system in typical implementations"
    ],
    "answer": 2,
    "explanation": "Enables building and training neural networks at scale."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 22x + (19), what is the predicted response variable y value for x = 26?",
    "options": [
      "616",
      "591",
      "695",
      "553"
    ],
    "answer": 1,
    "explanation": "y = 22(26) + 19 = 591."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 226, FP = 78, FN = 42, and TN = 328, what is the exact Accuracy?",
    "options": [
      "82.20%",
      "72.33%",
      "91.20%",
      "68.20%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=226, FP=78, FN=42, TN=328."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18000 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "14400",
      "10800",
      "9000",
      "13900"
    ],
    "answer": 0,
    "explanation": "80% of 18000 is 14400. 20% is 3600."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17400 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "8700",
      "13050",
      "12550",
      "9787.5"
    ],
    "answer": 1,
    "explanation": "75% of 17400 is 13050. 25% is 4350."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(0, 1) and point B(8, 7) in a 2D Euclidean coordinate space?",
    "options": [
      "17.50",
      "14.00",
      "11.75",
      "18.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 14.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 2x + (-15), what is the predicted response variable y value for x = 8?",
    "options": [
      "33",
      "26",
      "31",
      "1"
    ],
    "answer": 3,
    "explanation": "y = 2(8) + -15 = 1."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(27, 30) and point B(37, 44) in a 2D Euclidean coordinate space?",
    "options": [
      "14.95",
      "17.20",
      "21.35",
      "21.51"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 17.20."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 153, FP = 15, FN = 39, and TN = 311, what is the exact Specificity?",
    "options": [
      "95.40%",
      "81.40%",
      "83.95%",
      "104.40%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=153, FP=15, FN=39, TN=311."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5000 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1500",
      "2000",
      "2500",
      "1875"
    ],
    "answer": 0,
    "explanation": "70% of 5000 is 3500. 30% is 1500."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (17), what is the predicted response variable y value for x = 76?",
    "options": [
      "1638",
      "1613",
      "1917",
      "1579"
    ],
    "answer": 1,
    "explanation": "y = 21(76) + 17 = 1613."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 148, FP = 47, FN = 68, and TN = 393, what is the exact Specificity?",
    "options": [
      "78.60%",
      "89.32%",
      "75.32%",
      "98.32%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=148, FP=47, FN=68, TN=393."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 158, FP = 12, FN = 18, and TN = 360, what is the exact Precision?",
    "options": [
      "81.79%",
      "78.94%",
      "101.94%",
      "92.94%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=158, FP=12, FN=18, TN=360."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (5), what is the predicted response variable y value for x = 98?",
    "options": [
      "1563",
      "1965",
      "1573",
      "1598"
    ],
    "answer": 2,
    "explanation": "y = 16(98) + 5 = 1573."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(45, 30) and point B(23, 12) in a 2D Euclidean coordinate space?",
    "options": [
      "37.75",
      "50.00",
      "44.15",
      "40.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 40.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 162, FP = 42, FN = 22, and TN = 353, what is the exact Specificity?",
    "options": [
      "75.37%",
      "98.37%",
      "89.37%",
      "78.64%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=162, FP=42, FN=22, TN=353."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-18), what is the predicted response variable y value for x = 98?",
    "options": [
      "1183",
      "1158",
      "1550",
      "1194"
    ],
    "answer": 1,
    "explanation": "y = 12(98) + -18 = 1158."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(11, 25) and point B(15, 26) in a 2D Euclidean coordinate space?",
    "options": [
      "8.27",
      "5.15",
      "4.12",
      "1.87"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 4.12."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9800 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "4900",
      "7340",
      "5880",
      "7840"
    ],
    "answer": 3,
    "explanation": "80% of 9800 is 7840. 20% is 1960."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17500 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "8750",
      "13500",
      "10500",
      "14000"
    ],
    "answer": 3,
    "explanation": "80% of 17500 is 14000. 20% is 3500."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-15), what is the predicted response variable y value for x = 68?",
    "options": [
      "1685",
      "1957",
      "1710",
      "1715"
    ],
    "answer": 0,
    "explanation": "y = 25(68) + -15 = 1685."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(40, 13) and point B(52, 20) in a 2D Euclidean coordinate space?",
    "options": [
      "19.00",
      "23.75",
      "23.15",
      "16.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 19.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 4x + (1), what is the predicted response variable y value for x = 76?",
    "options": [
      "609",
      "305",
      "303",
      "330"
    ],
    "answer": 1,
    "explanation": "y = 4(76) + 1 = 305."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15400 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "8085",
      "7700",
      "10780",
      "10280"
    ],
    "answer": 2,
    "explanation": "70% of 15400 is 10780. 30% is 4620."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 292, FP = 47, FN = 66, and TN = 133, what is the exact Recall?",
    "options": [
      "81.56%",
      "67.56%",
      "71.78%",
      "90.56%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=292, FP=47, FN=66, TN=133."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(37, 16) and point B(19, 53) in a 2D Euclidean coordinate space?",
    "options": [
      "41.15",
      "45.30",
      "51.43",
      "38.90"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 41.15."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (19), what is the predicted response variable y value for x = 80?",
    "options": [
      "684",
      "621",
      "659",
      "979"
    ],
    "answer": 2,
    "explanation": "y = 8(80) + 19 = 659."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (-2), what is the predicted response variable y value for x = 11?",
    "options": [
      "75",
      "79",
      "119",
      "100"
    ],
    "answer": 0,
    "explanation": "y = 7(11) + -2 = 75."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 10x + (-2), what is the predicted response variable y value for x = 56?",
    "options": [
      "558",
      "562",
      "583",
      "782"
    ],
    "answer": 0,
    "explanation": "y = 10(56) + -2 = 558."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(14, 25) and point B(48, 24) in a 2D Euclidean coordinate space?",
    "options": [
      "31.76",
      "38.16",
      "42.52",
      "34.01"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 34.01."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 13800 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "7762.5",
      "9850",
      "10350",
      "6900"
    ],
    "answer": 2,
    "explanation": "75% of 13800 is 10350. 25% is 3450."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(15, 16) and point B(26, 35) in a 2D Euclidean coordinate space?",
    "options": [
      "26.10",
      "27.44",
      "21.95",
      "19.70"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 21.95."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 74, FP = 81, FN = 60, and TN = 312, what is the exact Specificity?",
    "options": [
      "79.39%",
      "69.86%",
      "88.39%",
      "65.39%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=74, FP=81, FN=60, TN=312."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7900 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "2475",
      "1975",
      "2468.75",
      "3950"
    ],
    "answer": 1,
    "explanation": "75% of 7900 is 5925. 25% is 1975."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 137, FP = 21, FN = 53, and TN = 116, what is the exact Recall?",
    "options": [
      "72.11%",
      "58.11%",
      "81.11%",
      "63.45%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=137, FP=21, FN=53, TN=116."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15700 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "11775",
      "7850",
      "11275",
      "8831.25"
    ],
    "answer": 0,
    "explanation": "75% of 15700 is 11775. 25% is 3925."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12600 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "9450",
      "8950",
      "7087.5",
      "6300"
    ],
    "answer": 0,
    "explanation": "75% of 12600 is 9450. 25% is 3150."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 55, FP = 83, FN = 51, and TN = 576, what is the exact Accuracy?",
    "options": [
      "68.48%",
      "82.48%",
      "72.59%",
      "91.48%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=55, FP=83, FN=51, TN=576."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 233, FP = 23, FN = 62, and TN = 118, what is the exact Recall?",
    "options": [
      "78.98%",
      "64.98%",
      "87.98%",
      "69.51%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=233, FP=23, FN=62, TN=118."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 297, FP = 84, FN = 63, and TN = 295, what is the exact Accuracy?",
    "options": [
      "80.11%",
      "70.50%",
      "66.11%",
      "89.11%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=297, FP=84, FN=63, TN=295."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(10, 3) and point B(5, 11) in a 2D Euclidean coordinate space?",
    "options": [
      "7.18",
      "11.79",
      "13.58",
      "9.43"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 9.43."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(6, 41) and point B(40, 42) in a 2D Euclidean coordinate space?",
    "options": [
      "34.01",
      "38.16",
      "31.76",
      "42.52"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 34.01."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 157, FP = 32, FN = 40, and TN = 380, what is the exact Accuracy?",
    "options": [
      "74.18%",
      "77.60%",
      "97.18%",
      "88.18%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=157, FP=32, FN=40, TN=380."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4200 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "3360",
      "2520",
      "2100",
      "2860"
    ],
    "answer": 0,
    "explanation": "80% of 4200 is 3360. 20% is 840."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15500 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3875",
      "7750",
      "3100",
      "3600"
    ],
    "answer": 2,
    "explanation": "80% of 15500 is 12400. 20% is 3100."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 263, FP = 43, FN = 44, and TN = 421, what is the exact Recall?",
    "options": [
      "94.67%",
      "75.39%",
      "71.67%",
      "85.67%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=263, FP=43, FN=44, TN=421."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9500 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "6650",
      "4750",
      "4987.5",
      "6150"
    ],
    "answer": 0,
    "explanation": "70% of 9500 is 6650. 30% is 2850."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(2, 13) and point B(38, 10) in a 2D Euclidean coordinate space?",
    "options": [
      "36.75",
      "39.00",
      "43.15",
      "48.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 39.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15100 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "11325",
      "7550",
      "8493.75",
      "10825"
    ],
    "answer": 0,
    "explanation": "75% of 15100 is 11325. 25% is 3775."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9700 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "2910",
      "3410",
      "4850",
      "3637.5"
    ],
    "answer": 0,
    "explanation": "70% of 9700 is 6790. 30% is 2910."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(37, 1) and point B(32, 22) in a 2D Euclidean coordinate space?",
    "options": [
      "26.00",
      "23.75",
      "30.15",
      "32.50"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 26.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(48, 0) and point B(29, 5) in a 2D Euclidean coordinate space?",
    "options": [
      "23.80",
      "19.65",
      "17.40",
      "24.56"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 19.65."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 4x + (-8), what is the predicted response variable y value for x = 9?",
    "options": [
      "53",
      "64",
      "28",
      "44"
    ],
    "answer": 2,
    "explanation": "y = 4(9) + -8 = 28."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(44, 41) and point B(10, 51) in a 2D Euclidean coordinate space?",
    "options": [
      "35.44",
      "39.59",
      "33.19",
      "44.30"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 35.44."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3400 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "1700",
      "2550",
      "2050",
      "1912.5"
    ],
    "answer": 1,
    "explanation": "75% of 3400 is 2550. 25% is 850."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(13, 25) and point B(30, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "15.47",
      "21.87",
      "22.15",
      "17.72"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 17.72."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(18, 0) and point B(26, 40) in a 2D Euclidean coordinate space?",
    "options": [
      "45.75",
      "52.15",
      "60.00",
      "48.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 48.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(14, 29) and point B(17, 47) in a 2D Euclidean coordinate space?",
    "options": [
      "22.40",
      "18.25",
      "16.00",
      "22.81"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 18.25."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (-19), what is the predicted response variable y value for x = 0?",
    "options": [
      "19",
      "-19",
      "6",
      "77"
    ],
    "answer": 1,
    "explanation": "y = 7(0) + -19 = -19."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 339, FP = 15, FN = 51, and TN = 423, what is the exact Precision?",
    "options": [
      "84.27%",
      "95.76%",
      "81.76%",
      "104.76%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=339, FP=15, FN=51, TN=423."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (-6), what is the predicted response variable y value for x = 72?",
    "options": [
      "1434",
      "1146",
      "1158",
      "1171"
    ],
    "answer": 1,
    "explanation": "y = 16(72) + -6 = 1146."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 144, FP = 8, FN = 17, and TN = 370, what is the exact Specificity?",
    "options": [
      "86.14%",
      "97.88%",
      "106.88%",
      "83.88%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=144, FP=8, FN=17, TN=370."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 344, FP = 48, FN = 55, and TN = 322, what is the exact Accuracy?",
    "options": [
      "72.61%",
      "76.21%",
      "95.61%",
      "86.61%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=344, FP=48, FN=55, TN=322."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5200 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "3140",
      "3640",
      "2730",
      "2600"
    ],
    "answer": 1,
    "explanation": "70% of 5200 is 3640. 30% is 1560."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(6, 34) and point B(45, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "49.01",
      "39.20",
      "43.35",
      "36.95"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 39.20."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7000 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "2600",
      "3500",
      "2100",
      "2625"
    ],
    "answer": 2,
    "explanation": "70% of 7000 is 4900. 30% is 2100."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(30, 35) and point B(17, 26) in a 2D Euclidean coordinate space?",
    "options": [
      "19.76",
      "13.56",
      "15.81",
      "19.96"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 15.81."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11000 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3300",
      "3800",
      "4125",
      "5500"
    ],
    "answer": 0,
    "explanation": "70% of 11000 is 7700. 30% is 3300."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5900 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1843.75",
      "1975",
      "1475",
      "2950"
    ],
    "answer": 2,
    "explanation": "75% of 5900 is 4425. 25% is 1475."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4800 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1200",
      "1500",
      "2400",
      "1700"
    ],
    "answer": 0,
    "explanation": "75% of 4800 is 3600. 25% is 1200."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 13x + (0), what is the predicted response variable y value for x = 71?",
    "options": [
      "948",
      "923",
      "1000",
      "1207"
    ],
    "answer": 1,
    "explanation": "y = 13(71) + 0 = 923."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (-10), what is the predicted response variable y value for x = 22?",
    "options": [
      "342",
      "367",
      "362",
      "430"
    ],
    "answer": 0,
    "explanation": "y = 16(22) + -10 = 342."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12200 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3660",
      "4575",
      "4160",
      "6100"
    ],
    "answer": 0,
    "explanation": "70% of 12200 is 8540. 30% is 3660."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (0), what is the predicted response variable y value for x = 41?",
    "options": [
      "246",
      "271",
      "323",
      "410"
    ],
    "answer": 0,
    "explanation": "y = 6(41) + 0 = 246."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 71, FP = 30, FN = 16, and TN = 361, what is the exact Specificity?",
    "options": [
      "101.33%",
      "81.25%",
      "78.33%",
      "92.33%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=71, FP=30, FN=16, TN=361."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-13), what is the predicted response variable y value for x = 75?",
    "options": [
      "587",
      "612",
      "887",
      "613"
    ],
    "answer": 0,
    "explanation": "y = 8(75) + -13 = 587."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(47, 39) and point B(48, 43) in a 2D Euclidean coordinate space?",
    "options": [
      "1.87",
      "4.12",
      "5.15",
      "8.27"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 4.12."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (13), what is the predicted response variable y value for x = 45?",
    "options": [
      "328",
      "302",
      "353",
      "508"
    ],
    "answer": 0,
    "explanation": "y = 7(45) + 13 = 328."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 88, FP = 11, FN = 35, and TN = 498, what is the exact Specificity?",
    "options": [
      "106.84%",
      "97.84%",
      "86.10%",
      "83.84%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=88, FP=11, FN=35, TN=498."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 107, FP = 62, FN = 74, and TN = 199, what is the exact Specificity?",
    "options": [
      "85.25%",
      "76.25%",
      "62.25%",
      "67.10%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=107, FP=62, FN=74, TN=199."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (-18), what is the predicted response variable y value for x = 0?",
    "options": [
      "77",
      "18",
      "-18",
      "7"
    ],
    "answer": 2,
    "explanation": "y = 24(0) + -18 = -18."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 270, FP = 61, FN = 68, and TN = 295, what is the exact Precision?",
    "options": [
      "90.57%",
      "71.78%",
      "81.57%",
      "67.57%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=270, FP=61, FN=68, TN=295."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 2500 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "1250",
      "1312.5",
      "1250",
      "1750"
    ],
    "answer": 3,
    "explanation": "70% of 2500 is 1750. 30% is 750."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 278, FP = 53, FN = 13, and TN = 324, what is the exact Recall?",
    "options": [
      "84.07%",
      "104.53%",
      "81.53%",
      "95.53%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=278, FP=53, FN=13, TN=324."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7600 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "4560",
      "5580",
      "3800",
      "6080"
    ],
    "answer": 3,
    "explanation": "80% of 7600 is 6080. 20% is 1520."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (8), what is the predicted response variable y value for x = 37?",
    "options": [
      "144",
      "103",
      "267",
      "119"
    ],
    "answer": 3,
    "explanation": "y = 3(37) + 8 = 119."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(11, 1) and point B(32, 22) in a 2D Euclidean coordinate space?",
    "options": [
      "33.85",
      "29.70",
      "27.45",
      "37.12"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 29.70."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 333, FP = 23, FN = 21, and TN = 502, what is the exact Specificity?",
    "options": [
      "84.14%",
      "104.62%",
      "95.62%",
      "81.62%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=333, FP=23, FN=21, TN=502."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (16), what is the predicted response variable y value for x = 84?",
    "options": [
      "2168",
      "2200",
      "2536",
      "2225"
    ],
    "answer": 1,
    "explanation": "y = 26(84) + 16 = 2200."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 305, FP = 53, FN = 53, and TN = 128, what is the exact Precision?",
    "options": [
      "94.20%",
      "85.20%",
      "71.20%",
      "74.97%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=305, FP=53, FN=53, TN=128."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15600 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "9360",
      "12480",
      "7800",
      "11980"
    ],
    "answer": 1,
    "explanation": "80% of 15600 is 12480. 20% is 3120."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 110, FP = 57, FN = 50, and TN = 404, what is the exact Recall?",
    "options": [
      "77.75%",
      "68.75%",
      "60.50%",
      "54.75%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=110, FP=57, FN=50, TN=404."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(47, 1) and point B(19, 11) in a 2D Euclidean coordinate space?",
    "options": [
      "42.15",
      "35.75",
      "47.50",
      "38.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 38.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(47, 17) and point B(45, 14) in a 2D Euclidean coordinate space?",
    "options": [
      "5.00",
      "2.75",
      "9.15",
      "6.25"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 5.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (10), what is the predicted response variable y value for x = 5?",
    "options": [
      "20",
      "65",
      "40",
      "60"
    ],
    "answer": 2,
    "explanation": "y = 6(5) + 10 = 40."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 70, FP = 19, FN = 23, and TN = 182, what is the exact Accuracy?",
    "options": [
      "71.71%",
      "94.71%",
      "85.71%",
      "75.43%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=70, FP=19, FN=23, TN=182."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 200, FP = 26, FN = 13, and TN = 563, what is the exact Specificity?",
    "options": [
      "81.59%",
      "104.59%",
      "84.12%",
      "95.59%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=200, FP=26, FN=13, TN=563."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 53, FP = 58, FN = 8, and TN = 392, what is the exact Specificity?",
    "options": [
      "73.11%",
      "76.66%",
      "96.11%",
      "87.11%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=53, FP=58, FN=8, TN=392."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17900 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "8950",
      "12530",
      "9397.5",
      "12030"
    ],
    "answer": 1,
    "explanation": "70% of 17900 is 12530. 30% is 5370."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(30, 24) and point B(36, 48) in a 2D Euclidean coordinate space?",
    "options": [
      "24.74",
      "22.49",
      "30.92",
      "28.89"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 24.74."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11600 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "2820",
      "2320",
      "5800",
      "2900"
    ],
    "answer": 1,
    "explanation": "80% of 11600 is 9280. 20% is 2320."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 224, FP = 62, FN = 76, and TN = 408, what is the exact Recall?",
    "options": [
      "83.67%",
      "74.67%",
      "65.71%",
      "60.67%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=224, FP=62, FN=76, TN=408."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (17), what is the predicted response variable y value for x = 95?",
    "options": [
      "682",
      "302",
      "268",
      "327"
    ],
    "answer": 1,
    "explanation": "y = 3(95) + 17 = 302."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(11, 46) and point B(51, 9) in a 2D Euclidean coordinate space?",
    "options": [
      "96.25",
      "77.00",
      "81.15",
      "74.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 77.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (3), what is the predicted response variable y value for x = 95?",
    "options": [
      "1897",
      "2283",
      "1928",
      "1903"
    ],
    "answer": 3,
    "explanation": "y = 20(95) + 3 = 1903."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (-13), what is the predicted response variable y value for x = 27?",
    "options": [
      "257",
      "174",
      "149",
      "175"
    ],
    "answer": 2,
    "explanation": "y = 6(27) + -13 = 149."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(19, 14) and point B(6, 53) in a 2D Euclidean coordinate space?",
    "options": [
      "56.15",
      "49.75",
      "65.00",
      "52.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 52.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 118, FP = 77, FN = 75, and TN = 521, what is the exact Precision?",
    "options": [
      "46.51%",
      "53.25%",
      "69.51%",
      "60.51%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=118, FP=77, FN=75, TN=521."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 342, FP = 34, FN = 27, and TN = 336, what is the exact Recall?",
    "options": [
      "92.68%",
      "101.68%",
      "81.56%",
      "78.68%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=342, FP=34, FN=27, TN=336."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 99, FP = 34, FN = 59, and TN = 557, what is the exact Specificity?",
    "options": [
      "103.25%",
      "82.94%",
      "80.25%",
      "94.25%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=99, FP=34, FN=59, TN=557."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16600 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "8300",
      "4150",
      "4650",
      "5187.5"
    ],
    "answer": 1,
    "explanation": "75% of 16600 is 12450. 25% is 4150."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(43, 1) and point B(26, 48) in a 2D Euclidean coordinate space?",
    "options": [
      "68.15",
      "61.75",
      "64.00",
      "80.00"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 64.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (16), what is the predicted response variable y value for x = 76?",
    "options": [
      "244",
      "212",
      "269",
      "548"
    ],
    "answer": 0,
    "explanation": "y = 3(76) + 16 = 244."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-3), what is the predicted response variable y value for x = 60?",
    "options": [
      "1582",
      "1557",
      "1797",
      "1563"
    ],
    "answer": 1,
    "explanation": "y = 26(60) + -3 = 1557."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (-11), what is the predicted response variable y value for x = 16?",
    "options": [
      "69",
      "133",
      "94",
      "91"
    ],
    "answer": 0,
    "explanation": "y = 5(16) + -11 = 69."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(44, 36) and point B(10, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "35.44",
      "39.59",
      "33.19",
      "44.30"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 35.44."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11600 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "8120",
      "5800",
      "7620",
      "6090"
    ],
    "answer": 0,
    "explanation": "70% of 11600 is 8120. 30% is 3480."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 301, FP = 84, FN = 83, and TN = 404, what is the exact Accuracy?",
    "options": [
      "89.85%",
      "71.15%",
      "80.85%",
      "66.85%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=301, FP=84, FN=83, TN=404."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 22x + (-13), what is the predicted response variable y value for x = 71?",
    "options": [
      "1574",
      "1549",
      "1575",
      "1833"
    ],
    "answer": 1,
    "explanation": "y = 22(71) + -13 = 1549."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(36, 24) and point B(42, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "10.00",
      "14.15",
      "12.50",
      "7.75"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 10.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(18, 21) and point B(22, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "12.31",
      "7.60",
      "14.00",
      "9.85"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 9.85."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16500 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "6187.5",
      "4950",
      "5450",
      "8250"
    ],
    "answer": 1,
    "explanation": "70% of 16500 is 11550. 30% is 4950."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8400 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "6220",
      "5040",
      "6720",
      "4200"
    ],
    "answer": 2,
    "explanation": "80% of 8400 is 6720. 20% is 1680."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6400 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "4620",
      "5120",
      "3200",
      "3840"
    ],
    "answer": 1,
    "explanation": "80% of 6400 is 5120. 20% is 1280."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(13, 41) and point B(22, 10) in a 2D Euclidean coordinate space?",
    "options": [
      "32.28",
      "36.43",
      "30.03",
      "40.35"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 32.28."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 194, FP = 36, FN = 28, and TN = 401, what is the exact Recall?",
    "options": [
      "96.39%",
      "87.39%",
      "73.39%",
      "76.90%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=194, FP=36, FN=28, TN=401."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (-11), what is the predicted response variable y value for x = 88?",
    "options": [
      "1661",
      "2013",
      "1683",
      "1686"
    ],
    "answer": 0,
    "explanation": "y = 19(88) + -11 = 1661."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(1, 3) and point B(51, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "81.75",
      "105.00",
      "88.15",
      "84.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 84.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14900 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3725",
      "7450",
      "2980",
      "3480"
    ],
    "answer": 2,
    "explanation": "80% of 14900 is 11920. 20% is 2980."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17700 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3540",
      "4425",
      "4040",
      "8850"
    ],
    "answer": 0,
    "explanation": "80% of 17700 is 14160. 20% is 3540."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (-11), what is the predicted response variable y value for x = 36?",
    "options": [
      "781",
      "637",
      "662",
      "659"
    ],
    "answer": 1,
    "explanation": "y = 18(36) + -11 = 637."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 321, FP = 30, FN = 62, and TN = 563, what is the exact Precision?",
    "options": [
      "80.48%",
      "91.45%",
      "100.45%",
      "77.45%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=321, FP=30, FN=62, TN=563."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(8, 36) and point B(36, 12) in a 2D Euclidean coordinate space?",
    "options": [
      "36.88",
      "46.10",
      "34.63",
      "41.03"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 36.88."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15300 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "10210",
      "7650",
      "10710",
      "8032.5"
    ],
    "answer": 2,
    "explanation": "70% of 15300 is 10710. 30% is 4590."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (-20), what is the predicted response variable y value for x = 91?",
    "options": [
      "1840",
      "1825",
      "1800",
      "2164"
    ],
    "answer": 2,
    "explanation": "y = 20(91) + -20 = 1800."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 119, FP = 66, FN = 10, and TN = 141, what is the exact Specificity?",
    "options": [
      "77.12%",
      "68.12%",
      "59.94%",
      "54.12%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=119, FP=66, FN=10, TN=141."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(22, 0) and point B(13, 34) in a 2D Euclidean coordinate space?",
    "options": [
      "53.75",
      "47.15",
      "40.75",
      "43.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 43.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (-6), what is the predicted response variable y value for x = 79?",
    "options": [
      "414",
      "401",
      "705",
      "389"
    ],
    "answer": 3,
    "explanation": "y = 5(79) + -6 = 389."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(23, 8) and point B(22, 48) in a 2D Euclidean coordinate space?",
    "options": [
      "38.75",
      "51.25",
      "45.15",
      "41.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 41.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (0), what is the predicted response variable y value for x = 33?",
    "options": [
      "817",
      "792",
      "924",
      "869"
    ],
    "answer": 1,
    "explanation": "y = 24(33) + 0 = 792."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15300 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "5737.5",
      "7650",
      "5090",
      "4590"
    ],
    "answer": 3,
    "explanation": "70% of 15300 is 10710. 30% is 4590."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(24, 31) and point B(37, 29) in a 2D Euclidean coordinate space?",
    "options": [
      "18.75",
      "19.15",
      "12.75",
      "15.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 15.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(47, 12) and point B(19, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "43.75",
      "57.50",
      "50.15",
      "46.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 46.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 192, FP = 74, FN = 65, and TN = 397, what is the exact Accuracy?",
    "options": [
      "71.20%",
      "66.91%",
      "80.91%",
      "89.91%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=192, FP=74, FN=65, TN=397."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(38, 36) and point B(37, 24) in a 2D Euclidean coordinate space?",
    "options": [
      "17.15",
      "13.00",
      "16.25",
      "10.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 13.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 263, FP = 73, FN = 80, and TN = 433, what is the exact Recall?",
    "options": [
      "62.68%",
      "85.68%",
      "76.68%",
      "67.48%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=263, FP=73, FN=80, TN=433."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9500 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "5343.75",
      "7125",
      "4750",
      "6625"
    ],
    "answer": 1,
    "explanation": "75% of 9500 is 7125. 25% is 2375."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (0), what is the predicted response variable y value for x = 54?",
    "options": [
      "378",
      "239",
      "187",
      "162"
    ],
    "answer": 3,
    "explanation": "y = 3(54) + 0 = 162."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (9), what is the predicted response variable y value for x = 23?",
    "options": [
      "172",
      "129",
      "147",
      "239"
    ],
    "answer": 2,
    "explanation": "y = 6(23) + 9 = 147."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(18, 48) and point B(16, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "17.15",
      "13.00",
      "10.75",
      "16.25"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 13.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 219, FP = 83, FN = 5, and TN = 494, what is the exact Recall?",
    "options": [
      "86.04%",
      "106.77%",
      "83.77%",
      "97.77%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=219, FP=83, FN=5, TN=494."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (4), what is the predicted response variable y value for x = 78?",
    "options": [
      "1564",
      "1589",
      "1876",
      "1556"
    ],
    "answer": 0,
    "explanation": "y = 20(78) + 4 = 1564."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (-11), what is the predicted response variable y value for x = 45?",
    "options": [
      "439",
      "284",
      "259",
      "281"
    ],
    "answer": 2,
    "explanation": "y = 6(45) + -11 = 259."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 217, FP = 12, FN = 54, and TN = 182, what is the exact Specificity?",
    "options": [
      "93.81%",
      "82.56%",
      "79.81%",
      "102.81%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=217, FP=12, FN=54, TN=182."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 349, FP = 38, FN = 18, and TN = 289, what is the exact Specificity?",
    "options": [
      "97.38%",
      "74.38%",
      "77.77%",
      "88.38%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=349, FP=38, FN=18, TN=289."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 294, FP = 47, FN = 67, and TN = 287, what is the exact Precision?",
    "options": [
      "86.22%",
      "75.87%",
      "95.22%",
      "72.22%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=294, FP=47, FN=67, TN=287."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17200 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "13760",
      "13260",
      "8600",
      "10320"
    ],
    "answer": 0,
    "explanation": "80% of 17200 is 13760. 20% is 3440."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 322, FP = 6, FN = 46, and TN = 116, what is the exact Recall?",
    "options": [
      "73.50%",
      "77.00%",
      "87.50%",
      "96.50%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=322, FP=6, FN=46, TN=116."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 246, FP = 70, FN = 61, and TN = 281, what is the exact Specificity?",
    "options": [
      "66.06%",
      "70.45%",
      "80.06%",
      "89.06%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=246, FP=70, FN=61, TN=281."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 62, FP = 81, FN = 57, and TN = 529, what is the exact Precision?",
    "options": [
      "52.36%",
      "29.36%",
      "38.15%",
      "43.36%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=62, FP=81, FN=57, TN=529."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1900 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1070",
      "950",
      "570",
      "712.5"
    ],
    "answer": 2,
    "explanation": "70% of 1900 is 1330. 30% is 570."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 82, FP = 18, FN = 38, and TN = 147, what is the exact Recall?",
    "options": [
      "77.33%",
      "54.33%",
      "68.33%",
      "60.13%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=82, FP=18, FN=38, TN=147."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(12, 25) and point B(42, 22) in a 2D Euclidean coordinate space?",
    "options": [
      "37.69",
      "34.30",
      "30.15",
      "27.90"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 30.15."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 274, FP = 64, FN = 7, and TN = 256, what is the exact Specificity?",
    "options": [
      "66.00%",
      "89.00%",
      "80.00%",
      "70.40%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=274, FP=64, FN=7, TN=256."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(21, 38) and point B(31, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "10.05",
      "14.20",
      "7.80",
      "12.56"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 10.05."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(17, 43) and point B(42, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "40.15",
      "45.00",
      "36.00",
      "33.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 36.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 324, FP = 73, FN = 24, and TN = 265, what is the exact Accuracy?",
    "options": [
      "75.56%",
      "85.86%",
      "71.86%",
      "94.86%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=324, FP=73, FN=24, TN=265."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7800 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1560",
      "3900",
      "1950",
      "2060"
    ],
    "answer": 0,
    "explanation": "80% of 7800 is 6240. 20% is 1560."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11400 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "5700",
      "3920",
      "4275",
      "3420"
    ],
    "answer": 3,
    "explanation": "70% of 11400 is 7980. 30% is 3420."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 123, FP = 66, FN = 78, and TN = 339, what is the exact Accuracy?",
    "options": [
      "62.24%",
      "67.09%",
      "76.24%",
      "85.24%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=123, FP=66, FN=78, TN=339."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 271, FP = 68, FN = 22, and TN = 294, what is the exact Specificity?",
    "options": [
      "81.22%",
      "90.22%",
      "71.47%",
      "67.22%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=271, FP=68, FN=22, TN=294."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 89, FP = 27, FN = 7, and TN = 530, what is the exact Accuracy?",
    "options": [
      "103.79%",
      "80.79%",
      "83.42%",
      "94.79%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=89, FP=27, FN=7, TN=530."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17400 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "5437.5",
      "4850",
      "8700",
      "4350"
    ],
    "answer": 3,
    "explanation": "75% of 17400 is 13050. 25% is 4350."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (4), what is the predicted response variable y value for x = 81?",
    "options": [
      "434",
      "401",
      "409",
      "733"
    ],
    "answer": 2,
    "explanation": "y = 5(81) + 4 = 409."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (-14), what is the predicted response variable y value for x = 96?",
    "options": [
      "466",
      "850",
      "491",
      "494"
    ],
    "answer": 0,
    "explanation": "y = 5(96) + -14 = 466."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(18, 31) and point B(35, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "21.75",
      "28.15",
      "30.00",
      "24.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 24.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(5, 16) and point B(53, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "48.09",
      "60.12",
      "45.84",
      "52.24"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 48.09."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4400 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "880",
      "1100",
      "2200",
      "1380"
    ],
    "answer": 0,
    "explanation": "80% of 4400 is 3520. 20% is 880."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 289, FP = 72, FN = 18, and TN = 503, what is the exact Accuracy?",
    "options": [
      "89.80%",
      "79.02%",
      "98.80%",
      "75.80%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=289, FP=72, FN=18, TN=503."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(9, 4) and point B(37, 9) in a 2D Euclidean coordinate space?",
    "options": [
      "35.55",
      "28.44",
      "32.59",
      "26.19"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 28.44."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(20, 28) and point B(35, 41) in a 2D Euclidean coordinate space?",
    "options": [
      "19.85",
      "17.60",
      "24.81",
      "24.00"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 19.85."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18600 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "14380",
      "14880",
      "11160",
      "9300"
    ],
    "answer": 1,
    "explanation": "80% of 18600 is 14880. 20% is 3720."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(7, 42) and point B(35, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "40.00",
      "32.00",
      "29.75",
      "36.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 32.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(27, 17) and point B(25, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "29.07",
      "26.82",
      "33.22",
      "36.34"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 29.07."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16900 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "12175",
      "9506.25",
      "8450",
      "12675"
    ],
    "answer": 3,
    "explanation": "75% of 16900 is 12675. 25% is 4225."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 315, FP = 59, FN = 36, and TN = 464, what is the exact Precision?",
    "options": [
      "74.12%",
      "93.22%",
      "84.22%",
      "70.22%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=315, FP=59, FN=36, TN=464."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (6), what is the predicted response variable y value for x = 59?",
    "options": [
      "1776",
      "1528",
      "1540",
      "1565"
    ],
    "answer": 2,
    "explanation": "y = 26(59) + 6 = 1540."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (-14), what is the predicted response variable y value for x = 26?",
    "options": [
      "454",
      "482",
      "479",
      "558"
    ],
    "answer": 0,
    "explanation": "y = 18(26) + -14 = 454."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17900 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "10068.75",
      "13425",
      "12925",
      "8950"
    ],
    "answer": 1,
    "explanation": "75% of 17900 is 13425. 25% is 4475."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3300 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1650",
      "990",
      "1490",
      "1237.5"
    ],
    "answer": 1,
    "explanation": "70% of 3300 is 2310. 30% is 990."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (17), what is the predicted response variable y value for x = 66?",
    "options": [
      "1171",
      "1230",
      "1205",
      "1469"
    ],
    "answer": 2,
    "explanation": "y = 18(66) + 17 = 1205."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (5), what is the predicted response variable y value for x = 66?",
    "options": [
      "1655",
      "1391",
      "1381",
      "1416"
    ],
    "answer": 1,
    "explanation": "y = 21(66) + 5 = 1391."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(23, 1) and point B(45, 43) in a 2D Euclidean coordinate space?",
    "options": [
      "80.00",
      "61.75",
      "68.15",
      "64.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 64.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11200 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "5600",
      "7840",
      "5880",
      "7340"
    ],
    "answer": 1,
    "explanation": "70% of 11200 is 7840. 30% is 3360."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(43, 19) and point B(25, 39) in a 2D Euclidean coordinate space?",
    "options": [
      "31.06",
      "33.63",
      "26.91",
      "24.66"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 26.91."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(22, 33) and point B(16, 51) in a 2D Euclidean coordinate space?",
    "options": [
      "16.72",
      "23.72",
      "23.12",
      "18.97"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 18.97."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(43, 38) and point B(47, 20) in a 2D Euclidean coordinate space?",
    "options": [
      "26.15",
      "19.75",
      "27.50",
      "22.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 22.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 328, FP = 26, FN = 55, and TN = 247, what is the exact Precision?",
    "options": [
      "81.54%",
      "101.66%",
      "92.66%",
      "78.66%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=328, FP=26, FN=55, TN=247."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3600 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1800",
      "1220",
      "900",
      "720"
    ],
    "answer": 3,
    "explanation": "80% of 3600 is 2880. 20% is 720."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19300 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "11580",
      "15440",
      "14940",
      "9650"
    ],
    "answer": 1,
    "explanation": "80% of 19300 is 15440. 20% is 3860."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(30, 32) and point B(50, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "27.59",
      "34.48",
      "31.74",
      "25.34"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 27.59."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (0), what is the predicted response variable y value for x = 24?",
    "options": [
      "720",
      "649",
      "701",
      "624"
    ],
    "answer": 3,
    "explanation": "y = 26(24) + 0 = 624."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 2300 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "1207.5",
      "1150",
      "1610",
      "1110"
    ],
    "answer": 2,
    "explanation": "70% of 2300 is 1610. 30% is 690."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1000 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "800",
      "500",
      "600",
      "300"
    ],
    "answer": 0,
    "explanation": "80% of 1000 is 800. 20% is 200."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 52, FP = 18, FN = 32, and TN = 513, what is the exact Accuracy?",
    "options": [
      "91.87%",
      "77.87%",
      "80.85%",
      "100.87%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=52, FP=18, FN=32, TN=513."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(24, 43) and point B(22, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "13.98",
      "11.18",
      "15.33",
      "8.93"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 11.18."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(37, 27) and point B(45, 29) in a 2D Euclidean coordinate space?",
    "options": [
      "10.00",
      "12.50",
      "14.15",
      "7.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 10.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9800 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "2460",
      "1960",
      "2450",
      "4900"
    ],
    "answer": 1,
    "explanation": "80% of 9800 is 7840. 20% is 1960."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (-13), what is the predicted response variable y value for x = 15?",
    "options": [
      "373",
      "372",
      "407",
      "347"
    ],
    "answer": 3,
    "explanation": "y = 24(15) + -13 = 347."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(29, 29) and point B(6, 36) in a 2D Euclidean coordinate space?",
    "options": [
      "30.00",
      "34.15",
      "37.50",
      "27.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 30.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (2), what is the predicted response variable y value for x = 53?",
    "options": [
      "610",
      "581",
      "797",
      "585"
    ],
    "answer": 3,
    "explanation": "y = 11(53) + 2 = 585."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(15, 10) and point B(36, 14) in a 2D Euclidean coordinate space?",
    "options": [
      "19.13",
      "21.38",
      "25.53",
      "26.72"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 21.38."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(42, 0) and point B(19, 6) in a 2D Euclidean coordinate space?",
    "options": [
      "27.92",
      "29.71",
      "21.52",
      "23.77"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 23.77."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 111, FP = 43, FN = 31, and TN = 518, what is the exact Accuracy?",
    "options": [
      "78.74%",
      "89.47%",
      "98.47%",
      "75.47%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=111, FP=43, FN=31, TN=518."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-14), what is the predicted response variable y value for x = 50?",
    "options": [
      "1236",
      "1264",
      "1436",
      "1261"
    ],
    "answer": 0,
    "explanation": "y = 25(50) + -14 = 1236."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(46, 3) and point B(15, 7) in a 2D Euclidean coordinate space?",
    "options": [
      "43.75",
      "32.75",
      "35.00",
      "39.15"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 35.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 68, FP = 14, FN = 15, and TN = 140, what is the exact Recall?",
    "options": [
      "90.93%",
      "81.93%",
      "72.10%",
      "67.93%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=68, FP=14, FN=15, TN=140."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(9, 40) and point B(6, 5) in a 2D Euclidean coordinate space?",
    "options": [
      "35.13",
      "43.91",
      "32.88",
      "39.28"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 35.13."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6600 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1650",
      "1320",
      "1820",
      "3300"
    ],
    "answer": 1,
    "explanation": "80% of 6600 is 5280. 20% is 1320."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8900 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "2225",
      "2781.25",
      "4450",
      "2725"
    ],
    "answer": 0,
    "explanation": "75% of 8900 is 6675. 25% is 2225."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(44, 35) and point B(42, 53) in a 2D Euclidean coordinate space?",
    "options": [
      "22.64",
      "18.11",
      "15.86",
      "22.26"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 18.11."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(9, 29) and point B(14, 6) in a 2D Euclidean coordinate space?",
    "options": [
      "27.69",
      "23.54",
      "29.42",
      "21.29"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 23.54."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (-12), what is the predicted response variable y value for x = 68?",
    "options": [
      "736",
      "1008",
      "761",
      "760"
    ],
    "answer": 0,
    "explanation": "y = 11(68) + -12 = 736."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 184, FP = 51, FN = 45, and TN = 477, what is the exact Recall?",
    "options": [
      "80.35%",
      "66.35%",
      "89.35%",
      "70.71%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=184, FP=51, FN=45, TN=477."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(47, 43) and point B(31, 14) in a 2D Euclidean coordinate space?",
    "options": [
      "33.12",
      "37.27",
      "30.87",
      "41.40"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 33.12."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 78, FP = 61, FN = 49, and TN = 352, what is the exact Accuracy?",
    "options": [
      "88.63%",
      "79.63%",
      "70.07%",
      "65.63%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=78, FP=61, FN=49, TN=352."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19600 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "9800",
      "11025",
      "14700",
      "14200"
    ],
    "answer": 2,
    "explanation": "75% of 19600 is 14700. 25% is 4900."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 303, FP = 80, FN = 46, and TN = 480, what is the exact Specificity?",
    "options": [
      "94.71%",
      "85.71%",
      "71.71%",
      "75.43%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=303, FP=80, FN=46, TN=480."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5100 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1275",
      "1020",
      "2550",
      "1520"
    ],
    "answer": 1,
    "explanation": "80% of 5100 is 4080. 20% is 1020."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-5), what is the predicted response variable y value for x = 60?",
    "options": [
      "1735",
      "1495",
      "1520",
      "1505"
    ],
    "answer": 1,
    "explanation": "y = 25(60) + -5 = 1495."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12100 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4130",
      "3630",
      "6050",
      "4537.5"
    ],
    "answer": 1,
    "explanation": "70% of 12100 is 8470. 30% is 3630."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 53, FP = 80, FN = 13, and TN = 313, what is the exact Precision?",
    "options": [
      "48.85%",
      "35.07%",
      "25.85%",
      "39.85%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=53, FP=80, FN=13, TN=313."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (6), what is the predicted response variable y value for x = 60?",
    "options": [
      "366",
      "354",
      "391",
      "606"
    ],
    "answer": 0,
    "explanation": "y = 6(60) + 6 = 366."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (14), what is the predicted response variable y value for x = 47?",
    "options": [
      "390",
      "578",
      "415",
      "362"
    ],
    "answer": 0,
    "explanation": "y = 8(47) + 14 = 390."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 70, FP = 26, FN = 58, and TN = 247, what is the exact Accuracy?",
    "options": [
      "79.05%",
      "69.57%",
      "88.05%",
      "65.05%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=70, FP=26, FN=58, TN=247."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16300 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "6112.5",
      "8150",
      "5390",
      "4890"
    ],
    "answer": 3,
    "explanation": "70% of 16300 is 11410. 30% is 4890."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14600 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "9720",
      "10220",
      "7665",
      "7300"
    ],
    "answer": 1,
    "explanation": "70% of 14600 is 10220. 30% is 4380."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 308, FP = 48, FN = 11, and TN = 428, what is the exact Specificity?",
    "options": [
      "98.92%",
      "79.13%",
      "89.92%",
      "75.92%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=308, FP=48, FN=11, TN=428."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (11), what is the predicted response variable y value for x = 40?",
    "options": [
      "1029",
      "1051",
      "1076",
      "1211"
    ],
    "answer": 1,
    "explanation": "y = 26(40) + 11 = 1051."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 275, FP = 53, FN = 8, and TN = 408, what is the exact Accuracy?",
    "options": [
      "91.80%",
      "77.80%",
      "100.80%",
      "80.78%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=275, FP=53, FN=8, TN=408."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11900 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "5950",
      "7140",
      "9520",
      "9020"
    ],
    "answer": 2,
    "explanation": "80% of 11900 is 9520. 20% is 2380."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 183, FP = 72, FN = 34, and TN = 365, what is the exact Precision?",
    "options": [
      "63.15%",
      "71.76%",
      "80.76%",
      "57.76%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=183, FP=72, FN=34, TN=365."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1600 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "980",
      "600",
      "480",
      "800"
    ],
    "answer": 2,
    "explanation": "70% of 1600 is 1120. 30% is 480."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 183, FP = 36, FN = 53, and TN = 494, what is the exact Accuracy?",
    "options": [
      "97.38%",
      "88.38%",
      "74.38%",
      "77.78%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=183, FP=36, FN=53, TN=494."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17100 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "8550",
      "11470",
      "8977.5",
      "11970"
    ],
    "answer": 3,
    "explanation": "70% of 17100 is 11970. 30% is 5130."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(16, 13) and point B(12, 11) in a 2D Euclidean coordinate space?",
    "options": [
      "3.75",
      "7.50",
      "6.00",
      "10.15"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 6.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12500 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3750",
      "4250",
      "4687.5",
      "6250"
    ],
    "answer": 0,
    "explanation": "70% of 12500 is 8750. 30% is 3750."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-19), what is the predicted response variable y value for x = 34?",
    "options": [
      "414",
      "525",
      "427",
      "389"
    ],
    "answer": 3,
    "explanation": "y = 12(34) + -19 = 389."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(12, 15) and point B(15, 44) in a 2D Euclidean coordinate space?",
    "options": [
      "33.30",
      "29.15",
      "36.44",
      "26.90"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 29.15."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (-8), what is the predicted response variable y value for x = 3?",
    "options": [
      "58",
      "62",
      "71",
      "46"
    ],
    "answer": 3,
    "explanation": "y = 18(3) + -8 = 46."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (-18), what is the predicted response variable y value for x = 13?",
    "options": [
      "291",
      "307",
      "280",
      "255"
    ],
    "answer": 3,
    "explanation": "y = 21(13) + -18 = 255."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 235, FP = 28, FN = 15, and TN = 376, what is the exact Specificity?",
    "options": [
      "81.90%",
      "93.07%",
      "79.07%",
      "102.07%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=235, FP=28, FN=15, TN=376."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 66, FP = 6, FN = 56, and TN = 140, what is the exact Accuracy?",
    "options": [
      "67.64%",
      "76.87%",
      "62.87%",
      "85.87%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=66, FP=6, FN=56, TN=140."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-20), what is the predicted response variable y value for x = 68?",
    "options": [
      "1680",
      "1952",
      "1720",
      "1705"
    ],
    "answer": 0,
    "explanation": "y = 25(68) + -20 = 1680."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-19), what is the predicted response variable y value for x = 61?",
    "options": [
      "751",
      "713",
      "957",
      "738"
    ],
    "answer": 1,
    "explanation": "y = 12(61) + -19 = 713."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 103, FP = 62, FN = 69, and TN = 531, what is the exact Recall?",
    "options": [
      "45.88%",
      "52.70%",
      "59.88%",
      "68.88%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=103, FP=62, FN=69, TN=531."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16600 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "12780",
      "8300",
      "13280",
      "9960"
    ],
    "answer": 2,
    "explanation": "80% of 16600 is 13280. 20% is 3320."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (15), what is the predicted response variable y value for x = 25?",
    "options": [
      "615",
      "690",
      "560",
      "590"
    ],
    "answer": 3,
    "explanation": "y = 23(25) + 15 = 590."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10800 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4050",
      "3240",
      "5400",
      "3740"
    ],
    "answer": 1,
    "explanation": "70% of 10800 is 7560. 30% is 3240."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (-5), what is the predicted response variable y value for x = 32?",
    "options": [
      "357",
      "372",
      "347",
      "475"
    ],
    "answer": 2,
    "explanation": "y = 11(32) + -5 = 347."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (-20), what is the predicted response variable y value for x = 28?",
    "options": [
      "176",
      "216",
      "288",
      "201"
    ],
    "answer": 0,
    "explanation": "y = 7(28) + -20 = 176."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 17x + (-14), what is the predicted response variable y value for x = 22?",
    "options": [
      "388",
      "360",
      "448",
      "385"
    ],
    "answer": 1,
    "explanation": "y = 17(22) + -14 = 360."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(1, 29) and point B(44, 6) in a 2D Euclidean coordinate space?",
    "options": [
      "48.76",
      "46.51",
      "52.91",
      "60.96"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 48.76."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 2x + (9), what is the predicted response variable y value for x = 54?",
    "options": [
      "142",
      "117",
      "99",
      "333"
    ],
    "answer": 1,
    "explanation": "y = 2(54) + 9 = 117."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (12), what is the predicted response variable y value for x = 66?",
    "options": [
      "1530",
      "1794",
      "1555",
      "1506"
    ],
    "answer": 0,
    "explanation": "y = 23(66) + 12 = 1530."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 17x + (-8), what is the predicted response variable y value for x = 8?",
    "options": [
      "160",
      "128",
      "153",
      "144"
    ],
    "answer": 1,
    "explanation": "y = 17(8) + -8 = 128."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(25, 3) and point B(43, 9) in a 2D Euclidean coordinate space?",
    "options": [
      "28.15",
      "24.00",
      "21.75",
      "30.00"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 24.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(5, 12) and point B(8, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "21.00",
      "18.75",
      "26.25",
      "25.15"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 21.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 113, FP = 62, FN = 58, and TN = 344, what is the exact Precision?",
    "options": [
      "73.57%",
      "64.57%",
      "56.82%",
      "50.57%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=113, FP=62, FN=58, TN=344."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 309, FP = 36, FN = 38, and TN = 154, what is the exact Accuracy?",
    "options": [
      "86.22%",
      "95.22%",
      "75.87%",
      "72.22%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=309, FP=36, FN=38, TN=154."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (-12), what is the predicted response variable y value for x = 1?",
    "options": [
      "2",
      "6",
      "27",
      "26"
    ],
    "answer": 0,
    "explanation": "y = 14(1) + -12 = 2."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (-19), what is the predicted response variable y value for x = 68?",
    "options": [
      "933",
      "971",
      "1205",
      "958"
    ],
    "answer": 0,
    "explanation": "y = 14(68) + -19 = 933."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(36, 39) and point B(22, 21) in a 2D Euclidean coordinate space?",
    "options": [
      "40.00",
      "32.00",
      "29.75",
      "36.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 32.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 241, FP = 74, FN = 53, and TN = 426, what is the exact Specificity?",
    "options": [
      "85.20%",
      "74.98%",
      "94.20%",
      "71.20%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=241, FP=74, FN=53, TN=426."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 197, FP = 55, FN = 67, and TN = 532, what is the exact Specificity?",
    "options": [
      "90.63%",
      "99.63%",
      "79.75%",
      "76.63%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=197, FP=55, FN=67, TN=532."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6800 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1700",
      "3400",
      "2200",
      "2125"
    ],
    "answer": 0,
    "explanation": "75% of 6800 is 5100. 25% is 1700."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-1), what is the predicted response variable y value for x = 35?",
    "options": [
      "419",
      "444",
      "559",
      "421"
    ],
    "answer": 0,
    "explanation": "y = 12(35) + -1 = 419."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 275, FP = 15, FN = 46, and TN = 115, what is the exact Recall?",
    "options": [
      "85.67%",
      "71.67%",
      "75.39%",
      "94.67%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=275, FP=15, FN=46, TN=115."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 114, FP = 41, FN = 41, and TN = 241, what is the exact Precision?",
    "options": [
      "64.72%",
      "73.55%",
      "59.55%",
      "82.55%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=114, FP=41, FN=41, TN=241."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (-20), what is the predicted response variable y value for x = 43?",
    "options": [
      "1012",
      "1184",
      "1052",
      "1037"
    ],
    "answer": 0,
    "explanation": "y = 24(43) + -20 = 1012."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16000 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3700",
      "8000",
      "4000",
      "3200"
    ],
    "answer": 3,
    "explanation": "80% of 16000 is 12800. 20% is 3200."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17300 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "5406.25",
      "4325",
      "4825",
      "8650"
    ],
    "answer": 1,
    "explanation": "75% of 17300 is 12975. 25% is 4325."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-1), what is the predicted response variable y value for x = 5?",
    "options": [
      "14",
      "34",
      "16",
      "39"
    ],
    "answer": 0,
    "explanation": "y = 3(5) + -1 = 14."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(29, 15) and point B(11, 8) in a 2D Euclidean coordinate space?",
    "options": [
      "23.46",
      "24.14",
      "19.31",
      "17.06"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 19.31."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-2), what is the predicted response variable y value for x = 69?",
    "options": [
      "1748",
      "1999",
      "1727",
      "1723"
    ],
    "answer": 3,
    "explanation": "y = 25(69) + -2 = 1723."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 143, FP = 40, FN = 72, and TN = 360, what is the exact Recall?",
    "options": [
      "75.51%",
      "52.51%",
      "66.51%",
      "58.53%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=143, FP=40, FN=72, TN=360."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-16), what is the predicted response variable y value for x = 74?",
    "options": [
      "608",
      "576",
      "601",
      "872"
    ],
    "answer": 1,
    "explanation": "y = 8(74) + -16 = 576."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(5, 35) and point B(9, 21) in a 2D Euclidean coordinate space?",
    "options": [
      "18.00",
      "22.15",
      "22.50",
      "15.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 18.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (7), what is the predicted response variable y value for x = 37?",
    "options": [
      "562",
      "400",
      "414",
      "439"
    ],
    "answer": 2,
    "explanation": "y = 11(37) + 7 = 414."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(2, 16) and point B(17, 25) in a 2D Euclidean coordinate space?",
    "options": [
      "21.64",
      "15.24",
      "17.49",
      "21.87"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 17.49."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (2), what is the predicted response variable y value for x = 77?",
    "options": [
      "1619",
      "1644",
      "1927",
      "1615"
    ],
    "answer": 0,
    "explanation": "y = 21(77) + 2 = 1619."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 196, FP = 23, FN = 43, and TN = 333, what is the exact Accuracy?",
    "options": [
      "78.24%",
      "97.91%",
      "88.91%",
      "74.91%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=196, FP=23, FN=43, TN=333."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 338, FP = 47, FN = 63, and TN = 230, what is the exact Precision?",
    "options": [
      "87.79%",
      "77.26%",
      "96.79%",
      "73.79%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=338, FP=47, FN=63, TN=230."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (2), what is the predicted response variable y value for x = 78?",
    "options": [
      "938",
      "1250",
      "963",
      "934"
    ],
    "answer": 0,
    "explanation": "y = 12(78) + 2 = 938."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 10x + (7), what is the predicted response variable y value for x = 5?",
    "options": [
      "57",
      "82",
      "43",
      "77"
    ],
    "answer": 0,
    "explanation": "y = 10(5) + 7 = 57."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(16, 9) and point B(17, 24) in a 2D Euclidean coordinate space?",
    "options": [
      "20.00",
      "13.75",
      "16.00",
      "20.15"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 16.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (15), what is the predicted response variable y value for x = 44?",
    "options": [
      "568",
      "513",
      "543",
      "719"
    ],
    "answer": 2,
    "explanation": "y = 12(44) + 15 = 543."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 144, FP = 68, FN = 6, and TN = 249, what is the exact Precision?",
    "options": [
      "53.92%",
      "67.92%",
      "59.77%",
      "76.92%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=144, FP=68, FN=6, TN=249."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (-9), what is the predicted response variable y value for x = 10?",
    "options": [
      "69",
      "51",
      "76",
      "91"
    ],
    "answer": 1,
    "explanation": "y = 6(10) + -9 = 51."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (11), what is the predicted response variable y value for x = 52?",
    "options": [
      "687",
      "457",
      "479",
      "504"
    ],
    "answer": 2,
    "explanation": "y = 9(52) + 11 = 479."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 285, FP = 46, FN = 34, and TN = 183, what is the exact Accuracy?",
    "options": [
      "94.40%",
      "85.40%",
      "71.40%",
      "75.15%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=285, FP=46, FN=34, TN=183."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 247, FP = 54, FN = 72, and TN = 362, what is the exact Accuracy?",
    "options": [
      "82.86%",
      "68.86%",
      "91.86%",
      "72.91%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=247, FP=54, FN=72, TN=362."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(7, 14) and point B(5, 7) in a 2D Euclidean coordinate space?",
    "options": [
      "11.25",
      "13.15",
      "9.00",
      "6.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 9.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-1), what is the predicted response variable y value for x = 82?",
    "options": [
      "2133",
      "2131",
      "2459",
      "2156"
    ],
    "answer": 1,
    "explanation": "y = 26(82) + -1 = 2131."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1600 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "800",
      "900",
      "1200",
      "700"
    ],
    "answer": 2,
    "explanation": "75% of 1600 is 1200. 25% is 400."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1700 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "1360",
      "860",
      "1020",
      "850"
    ],
    "answer": 0,
    "explanation": "80% of 1700 is 1360. 20% is 340."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (12), what is the predicted response variable y value for x = 45?",
    "options": [
      "847",
      "822",
      "1002",
      "798"
    ],
    "answer": 1,
    "explanation": "y = 18(45) + 12 = 822."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (-14), what is the predicted response variable y value for x = 42?",
    "options": [
      "812",
      "952",
      "784",
      "809"
    ],
    "answer": 2,
    "explanation": "y = 19(42) + -14 = 784."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11400 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "8550",
      "5700",
      "8050",
      "6412.5"
    ],
    "answer": 0,
    "explanation": "75% of 11400 is 8550. 25% is 2850."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(20, 28) and point B(44, 51) in a 2D Euclidean coordinate space?",
    "options": [
      "41.55",
      "37.39",
      "33.24",
      "30.99"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 33.24."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 13100 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3275",
      "2620",
      "3120",
      "6550"
    ],
    "answer": 1,
    "explanation": "80% of 13100 is 10480. 20% is 2620."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (7), what is the predicted response variable y value for x = 52?",
    "options": [
      "267",
      "253",
      "475",
      "292"
    ],
    "answer": 0,
    "explanation": "y = 5(52) + 7 = 267."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3600 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "2380",
      "2880",
      "1800",
      "2160"
    ],
    "answer": 1,
    "explanation": "80% of 3600 is 2880. 20% is 720."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 13600 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "6800",
      "4580",
      "4080",
      "5100"
    ],
    "answer": 2,
    "explanation": "70% of 13600 is 9520. 30% is 4080."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10100 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3530",
      "3787.5",
      "5050",
      "3030"
    ],
    "answer": 3,
    "explanation": "70% of 10100 is 7070. 30% is 3030."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(6, 27) and point B(11, 39) in a 2D Euclidean coordinate space?",
    "options": [
      "10.75",
      "13.00",
      "16.25",
      "17.15"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 13.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(38, 15) and point B(18, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "41.15",
      "34.75",
      "46.25",
      "37.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 37.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 109, FP = 43, FN = 10, and TN = 400, what is the exact Precision?",
    "options": [
      "63.11%",
      "57.71%",
      "71.71%",
      "80.71%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=109, FP=43, FN=10, TN=400."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(45, 44) and point B(29, 33) in a 2D Euclidean coordinate space?",
    "options": [
      "24.75",
      "33.75",
      "31.15",
      "27.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 27.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 283, FP = 27, FN = 63, and TN = 488, what is the exact Specificity?",
    "options": [
      "103.76%",
      "83.39%",
      "80.76%",
      "94.76%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=283, FP=27, FN=63, TN=488."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (18), what is the predicted response variable y value for x = 9?",
    "options": [
      "243",
      "207",
      "171",
      "232"
    ],
    "answer": 1,
    "explanation": "y = 21(9) + 18 = 207."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(7, 32) and point B(26, 18) in a 2D Euclidean coordinate space?",
    "options": [
      "23.60",
      "27.75",
      "21.35",
      "29.50"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 23.60."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 216, FP = 43, FN = 82, and TN = 420, what is the exact Specificity?",
    "options": [
      "76.71%",
      "99.71%",
      "79.83%",
      "90.71%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=216, FP=43, FN=82, TN=420."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (19), what is the predicted response variable y value for x = 35?",
    "options": [
      "856",
      "1034",
      "894",
      "919"
    ],
    "answer": 2,
    "explanation": "y = 25(35) + 19 = 894."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (-9), what is the predicted response variable y value for x = 20?",
    "options": [
      "309",
      "371",
      "291",
      "316"
    ],
    "answer": 2,
    "explanation": "y = 15(20) + -9 = 291."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4200 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1050",
      "2100",
      "1340",
      "840"
    ],
    "answer": 3,
    "explanation": "80% of 4200 is 3360. 20% is 840."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(38, 8) and point B(26, 21) in a 2D Euclidean coordinate space?",
    "options": [
      "25.00",
      "29.15",
      "22.75",
      "31.25"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 25.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 326, FP = 19, FN = 48, and TN = 214, what is the exact Specificity?",
    "options": [
      "100.85%",
      "91.85%",
      "77.85%",
      "80.82%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=326, FP=19, FN=48, TN=214."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10600 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3975",
      "3180",
      "5300",
      "3680"
    ],
    "answer": 1,
    "explanation": "70% of 10600 is 7420. 30% is 3180."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12900 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "6450",
      "3225",
      "2580",
      "3080"
    ],
    "answer": 2,
    "explanation": "80% of 12900 is 10320. 20% is 2580."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(2, 4) and point B(34, 33) in a 2D Euclidean coordinate space?",
    "options": [
      "61.00",
      "76.25",
      "65.15",
      "58.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 61.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7100 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "3550",
      "4260",
      "5180",
      "5680"
    ],
    "answer": 3,
    "explanation": "80% of 7100 is 5680. 20% is 1420."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19100 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "9550",
      "7162.5",
      "5730",
      "6230"
    ],
    "answer": 2,
    "explanation": "70% of 19100 is 13370. 30% is 5730."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18500 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "9250",
      "6937.5",
      "5550",
      "6050"
    ],
    "answer": 2,
    "explanation": "70% of 18500 is 12950. 30% is 5550."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(12, 40) and point B(17, 28) in a 2D Euclidean coordinate space?",
    "options": [
      "17.15",
      "13.00",
      "10.75",
      "16.25"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 13.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 325, FP = 9, FN = 56, and TN = 452, what is the exact Recall?",
    "options": [
      "94.30%",
      "85.30%",
      "71.30%",
      "75.07%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=325, FP=9, FN=56, TN=452."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 94, FP = 66, FN = 41, and TN = 462, what is the exact Precision?",
    "options": [
      "44.75%",
      "51.70%",
      "67.75%",
      "58.75%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=94, FP=66, FN=41, TN=462."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19400 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "14550",
      "14050",
      "10912.5",
      "9700"
    ],
    "answer": 0,
    "explanation": "75% of 19400 is 14550. 25% is 4850."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 70, FP = 77, FN = 8, and TN = 226, what is the exact Specificity?",
    "options": [
      "60.59%",
      "74.59%",
      "65.64%",
      "83.59%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=70, FP=77, FN=8, TN=226."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8600 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "4300",
      "5950",
      "6450",
      "4837.5"
    ],
    "answer": 2,
    "explanation": "75% of 8600 is 6450. 25% is 2150."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4800 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "960",
      "1460",
      "1200",
      "2400"
    ],
    "answer": 0,
    "explanation": "80% of 4800 is 3840. 20% is 960."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(48, 48) and point B(48, 52) in a 2D Euclidean coordinate space?",
    "options": [
      "5.00",
      "8.15",
      "1.75",
      "4.00"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 4.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 185, FP = 39, FN = 80, and TN = 440, what is the exact Recall?",
    "options": [
      "78.81%",
      "61.43%",
      "55.81%",
      "69.81%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=185, FP=39, FN=80, TN=440."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(44, 40) and point B(45, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "3.83",
      "7.60",
      "10.23",
      "6.08"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 6.08."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (-18), what is the predicted response variable y value for x = 46?",
    "options": [
      "902",
      "754",
      "718",
      "743"
    ],
    "answer": 2,
    "explanation": "y = 16(46) + -18 = 718."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (9), what is the predicted response variable y value for x = 91?",
    "options": [
      "2193",
      "2175",
      "2557",
      "2218"
    ],
    "answer": 0,
    "explanation": "y = 24(91) + 9 = 2193."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10200 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "2540",
      "2550",
      "2040",
      "5100"
    ],
    "answer": 2,
    "explanation": "80% of 10200 is 8160. 20% is 2040."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 59, FP = 37, FN = 35, and TN = 428, what is the exact Precision?",
    "options": [
      "54.08%",
      "70.46%",
      "47.46%",
      "61.46%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=59, FP=37, FN=35, TN=428."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 92, FP = 17, FN = 25, and TN = 443, what is the exact Specificity?",
    "options": [
      "84.75%",
      "82.30%",
      "96.30%",
      "105.30%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=92, FP=17, FN=25, TN=443."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(27, 6) and point B(12, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "34.17",
      "37.52",
      "27.77",
      "30.02"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 30.02."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(43, 28) and point B(32, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "17.77",
      "14.21",
      "18.36",
      "11.96"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 14.21."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7200 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "4900",
      "4050",
      "3600",
      "5400"
    ],
    "answer": 3,
    "explanation": "75% of 7200 is 5400. 25% is 1800."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-4), what is the predicted response variable y value for x = 78?",
    "options": [
      "932",
      "940",
      "1244",
      "957"
    ],
    "answer": 0,
    "explanation": "y = 12(78) + -4 = 932."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 190, FP = 9, FN = 58, and TN = 380, what is the exact Specificity?",
    "options": [
      "83.69%",
      "85.96%",
      "106.69%",
      "97.69%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=190, FP=9, FN=58, TN=380."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(36, 2) and point B(13, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "42.50",
      "38.15",
      "34.00",
      "31.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 34.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19700 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "11820",
      "15760",
      "9850",
      "15260"
    ],
    "answer": 1,
    "explanation": "80% of 19700 is 15760. 20% is 3940."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11300 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3390",
      "3890",
      "4237.5",
      "5650"
    ],
    "answer": 0,
    "explanation": "70% of 11300 is 7910. 30% is 3390."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 135, FP = 11, FN = 54, and TN = 233, what is the exact Accuracy?",
    "options": [
      "93.99%",
      "84.99%",
      "74.79%",
      "70.99%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=135, FP=11, FN=54, TN=233."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5400 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1580",
      "1350",
      "1080",
      "2700"
    ],
    "answer": 2,
    "explanation": "80% of 5400 is 4320. 20% is 1080."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(27, 0) and point B(29, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "47.57",
      "38.05",
      "35.80",
      "42.20"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 38.05."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (-7), what is the predicted response variable y value for x = 50?",
    "options": [
      "493",
      "318",
      "307",
      "293"
    ],
    "answer": 3,
    "explanation": "y = 6(50) + -7 = 293."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 284, FP = 14, FN = 56, and TN = 308, what is the exact Recall?",
    "options": [
      "92.53%",
      "73.51%",
      "83.53%",
      "69.53%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=284, FP=14, FN=56, TN=308."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 335, FP = 13, FN = 41, and TN = 368, what is the exact Recall?",
    "options": [
      "75.10%",
      "98.10%",
      "89.10%",
      "78.40%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=335, FP=13, FN=41, TN=368."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 13x + (10), what is the predicted response variable y value for x = 24?",
    "options": [
      "322",
      "418",
      "347",
      "302"
    ],
    "answer": 0,
    "explanation": "y = 13(24) + 10 = 322."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18800 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "15040",
      "9400",
      "11280",
      "14540"
    ],
    "answer": 0,
    "explanation": "80% of 18800 is 15040. 20% is 3760."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (12), what is the predicted response variable y value for x = 98?",
    "options": [
      "331",
      "282",
      "306",
      "698"
    ],
    "answer": 2,
    "explanation": "y = 3(98) + 12 = 306."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(43, 35) and point B(45, 12) in a 2D Euclidean coordinate space?",
    "options": [
      "27.24",
      "28.86",
      "23.09",
      "20.84"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 23.09."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(12, 46) and point B(25, 19) in a 2D Euclidean coordinate space?",
    "options": [
      "37.75",
      "40.00",
      "44.15",
      "50.00"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 40.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 97, FP = 57, FN = 55, and TN = 325, what is the exact Specificity?",
    "options": [
      "85.08%",
      "71.08%",
      "94.08%",
      "74.87%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=97, FP=57, FN=55, TN=325."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 166, FP = 59, FN = 43, and TN = 397, what is the exact Recall?",
    "options": [
      "88.43%",
      "79.43%",
      "65.43%",
      "69.89%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=166, FP=59, FN=43, TN=397."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(17, 19) and point B(17, 48) in a 2D Euclidean coordinate space?",
    "options": [
      "33.15",
      "36.25",
      "26.75",
      "29.00"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 29.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1100 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "618.75",
      "550",
      "825",
      "325"
    ],
    "answer": 2,
    "explanation": "75% of 1100 is 825. 25% is 275."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (-8), what is the predicted response variable y value for x = 18?",
    "options": [
      "118",
      "134",
      "190",
      "143"
    ],
    "answer": 0,
    "explanation": "y = 7(18) + -8 = 118."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-18), what is the predicted response variable y value for x = 84?",
    "options": [
      "270",
      "259",
      "234",
      "570"
    ],
    "answer": 2,
    "explanation": "y = 3(84) + -18 = 234."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (1), what is the predicted response variable y value for x = 36?",
    "options": [
      "325",
      "350",
      "469",
      "323"
    ],
    "answer": 0,
    "explanation": "y = 9(36) + 1 = 325."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18500 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "9712.5",
      "12450",
      "9250",
      "12950"
    ],
    "answer": 3,
    "explanation": "70% of 18500 is 12950. 30% is 5550."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 334, FP = 35, FN = 69, and TN = 234, what is the exact Precision?",
    "options": [
      "90.51%",
      "79.65%",
      "76.51%",
      "99.51%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=334, FP=35, FN=69, TN=234."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (-2), what is the predicted response variable y value for x = 21?",
    "options": [
      "460",
      "380",
      "401",
      "376"
    ],
    "answer": 3,
    "explanation": "y = 18(21) + -2 = 376."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(21, 10) and point B(6, 36) in a 2D Euclidean coordinate space?",
    "options": [
      "51.25",
      "45.15",
      "38.75",
      "41.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 41.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 100, FP = 23, FN = 15, and TN = 191, what is the exact Precision?",
    "options": [
      "67.30%",
      "81.30%",
      "71.54%",
      "90.30%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=100, FP=23, FN=15, TN=191."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18800 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "13600",
      "10575",
      "9400",
      "14100"
    ],
    "answer": 3,
    "explanation": "75% of 18800 is 14100. 25% is 4700."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8800 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "4950",
      "6600",
      "6100",
      "4400"
    ],
    "answer": 1,
    "explanation": "75% of 8800 is 6600. 25% is 2200."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(4, 15) and point B(35, 54) in a 2D Euclidean coordinate space?",
    "options": [
      "47.57",
      "62.27",
      "49.82",
      "53.97"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 49.82."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 237, FP = 30, FN = 10, and TN = 466, what is the exact Specificity?",
    "options": [
      "102.95%",
      "82.68%",
      "79.95%",
      "93.95%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=237, FP=30, FN=10, TN=466."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 212, FP = 49, FN = 73, and TN = 344, what is the exact Recall?",
    "options": [
      "74.39%",
      "65.46%",
      "83.39%",
      "60.39%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=212, FP=49, FN=73, TN=344."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (-1), what is the predicted response variable y value for x = 24?",
    "options": [
      "576",
      "647",
      "551",
      "553"
    ],
    "answer": 2,
    "explanation": "y = 23(24) + -1 = 551."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(24, 2) and point B(14, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "37.36",
      "41.51",
      "35.11",
      "46.70"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 37.36."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 135, FP = 41, FN = 62, and TN = 173, what is the exact Specificity?",
    "options": [
      "71.14%",
      "66.84%",
      "89.84%",
      "80.84%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=135, FP=41, FN=62, TN=173."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 322, FP = 18, FN = 5, and TN = 368, what is the exact Specificity?",
    "options": [
      "83.90%",
      "104.34%",
      "81.34%",
      "95.34%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=322, FP=18, FN=5, TN=368."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(19, 1) and point B(38, 28) in a 2D Euclidean coordinate space?",
    "options": [
      "57.50",
      "50.15",
      "46.00",
      "43.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 46.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (3), what is the predicted response variable y value for x = 74?",
    "options": [
      "219",
      "225",
      "250",
      "521"
    ],
    "answer": 1,
    "explanation": "y = 3(74) + 3 = 225."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-8), what is the predicted response variable y value for x = 56?",
    "options": [
      "1417",
      "1616",
      "1392",
      "1408"
    ],
    "answer": 2,
    "explanation": "y = 25(56) + -8 = 1392."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-19), what is the predicted response variable y value for x = 30?",
    "options": [
      "341",
      "221",
      "259",
      "246"
    ],
    "answer": 1,
    "explanation": "y = 8(30) + -19 = 221."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 269, FP = 75, FN = 78, and TN = 513, what is the exact Recall?",
    "options": [
      "86.52%",
      "68.22%",
      "63.52%",
      "77.52%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=269, FP=75, FN=78, TN=513."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 323, FP = 44, FN = 82, and TN = 181, what is the exact Recall?",
    "options": [
      "65.75%",
      "88.75%",
      "70.18%",
      "79.75%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=323, FP=44, FN=82, TN=181."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (-19), what is the predicted response variable y value for x = 92?",
    "options": [
      "1729",
      "1399",
      "1361",
      "1386"
    ],
    "answer": 2,
    "explanation": "y = 15(92) + -19 = 1361."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (-13), what is the predicted response variable y value for x = 12?",
    "options": [
      "72",
      "47",
      "95",
      "73"
    ],
    "answer": 1,
    "explanation": "y = 5(12) + -13 = 47."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 22x + (-10), what is the predicted response variable y value for x = 38?",
    "options": [
      "826",
      "851",
      "978",
      "846"
    ],
    "answer": 0,
    "explanation": "y = 22(38) + -10 = 826."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(1, 13) and point B(41, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "62.75",
      "69.15",
      "81.25",
      "65.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 65.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(27, 38) and point B(14, 45) in a 2D Euclidean coordinate space?",
    "options": [
      "18.46",
      "14.76",
      "18.91",
      "12.51"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 14.76."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 92, FP = 56, FN = 16, and TN = 227, what is the exact Specificity?",
    "options": [
      "66.21%",
      "89.21%",
      "70.59%",
      "80.21%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=92, FP=56, FN=16, TN=227."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (-1), what is the predicted response variable y value for x = 36?",
    "options": [
      "323",
      "325",
      "348",
      "467"
    ],
    "answer": 0,
    "explanation": "y = 9(36) + -1 = 323."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 306, FP = 23, FN = 17, and TN = 476, what is the exact Specificity?",
    "options": [
      "81.39%",
      "95.39%",
      "83.94%",
      "104.39%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=306, FP=23, FN=17, TN=476."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4900 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1225",
      "2450",
      "1725",
      "1531.25"
    ],
    "answer": 0,
    "explanation": "75% of 4900 is 3675. 25% is 1225."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (-15), what is the predicted response variable y value for x = 15?",
    "options": [
      "310",
      "315",
      "345",
      "285"
    ],
    "answer": 3,
    "explanation": "y = 20(15) + -15 = 285."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 2400 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "1200",
      "1350",
      "1800",
      "1300"
    ],
    "answer": 2,
    "explanation": "75% of 2400 is 1800. 25% is 600."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19700 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "10342.5",
      "13290",
      "13790",
      "9850"
    ],
    "answer": 2,
    "explanation": "70% of 19700 is 13790. 30% is 5910."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16300 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "4575",
      "4075",
      "8150",
      "5093.75"
    ],
    "answer": 1,
    "explanation": "75% of 16300 is 12225. 25% is 4075."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12200 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "8540",
      "8040",
      "6405",
      "6100"
    ],
    "answer": 0,
    "explanation": "70% of 12200 is 8540. 30% is 3660."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18000 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3600",
      "9000",
      "4500",
      "4100"
    ],
    "answer": 0,
    "explanation": "80% of 18000 is 14400. 20% is 3600."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 116, FP = 57, FN = 51, and TN = 513, what is the exact Accuracy?",
    "options": [
      "85.35%",
      "71.35%",
      "94.35%",
      "75.10%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=116, FP=57, FN=51, TN=513."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-9), what is the predicted response variable y value for x = 90?",
    "options": [
      "2601",
      "2259",
      "2266",
      "2241"
    ],
    "answer": 3,
    "explanation": "y = 25(90) + -9 = 2241."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(18, 38) and point B(42, 26) in a 2D Euclidean coordinate space?",
    "options": [
      "36.00",
      "45.00",
      "40.15",
      "33.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 36.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 198, FP = 69, FN = 22, and TN = 148, what is the exact Recall?",
    "options": [
      "79.20%",
      "99.00%",
      "76.00%",
      "90.00%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=198, FP=69, FN=22, TN=148."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12000 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "6750",
      "9000",
      "6000",
      "8500"
    ],
    "answer": 1,
    "explanation": "75% of 12000 is 9000. 25% is 3000."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12000 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4500",
      "4100",
      "6000",
      "3600"
    ],
    "answer": 3,
    "explanation": "70% of 12000 is 8400. 30% is 3600."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 154, FP = 27, FN = 33, and TN = 355, what is the exact Accuracy?",
    "options": [
      "89.46%",
      "75.46%",
      "98.46%",
      "78.72%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=154, FP=27, FN=33, TN=355."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 153, FP = 8, FN = 6, and TN = 485, what is the exact Recall?",
    "options": [
      "96.23%",
      "82.23%",
      "105.23%",
      "84.68%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=153, FP=8, FN=6, TN=485."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(29, 18) and point B(19, 21) in a 2D Euclidean coordinate space?",
    "options": [
      "14.59",
      "13.05",
      "10.44",
      "8.19"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 10.44."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (2), what is the predicted response variable y value for x = 32?",
    "options": [
      "350",
      "482",
      "379",
      "354"
    ],
    "answer": 3,
    "explanation": "y = 11(32) + 2 = 354."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 301, FP = 58, FN = 62, and TN = 154, what is the exact Accuracy?",
    "options": [
      "88.13%",
      "69.63%",
      "65.13%",
      "79.13%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=301, FP=58, FN=62, TN=154."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(36, 18) and point B(25, 40) in a 2D Euclidean coordinate space?",
    "options": [
      "28.75",
      "30.75",
      "24.60",
      "22.35"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 24.60."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 104, FP = 32, FN = 63, and TN = 546, what is the exact Precision?",
    "options": [
      "67.29%",
      "62.47%",
      "85.47%",
      "76.47%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=104, FP=32, FN=63, TN=546."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (6), what is the predicted response variable y value for x = 53?",
    "options": [
      "789",
      "1013",
      "801",
      "826"
    ],
    "answer": 2,
    "explanation": "y = 15(53) + 6 = 801."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(6, 42) and point B(49, 50) in a 2D Euclidean coordinate space?",
    "options": [
      "47.89",
      "41.49",
      "54.67",
      "43.74"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 43.74."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (3), what is the predicted response variable y value for x = 13?",
    "options": [
      "36",
      "67",
      "94",
      "42"
    ],
    "answer": 3,
    "explanation": "y = 3(13) + 3 = 42."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-16), what is the predicted response variable y value for x = 71?",
    "options": [
      "552",
      "577",
      "836",
      "584"
    ],
    "answer": 0,
    "explanation": "y = 8(71) + -16 = 552."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12700 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "6350",
      "7143.75",
      "9025",
      "9525"
    ],
    "answer": 3,
    "explanation": "75% of 12700 is 9525. 25% is 3175."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (9), what is the predicted response variable y value for x = 4?",
    "options": [
      "62",
      "37",
      "19",
      "53"
    ],
    "answer": 1,
    "explanation": "y = 7(4) + 9 = 37."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16800 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "11260",
      "11760",
      "8820",
      "8400"
    ],
    "answer": 1,
    "explanation": "70% of 16800 is 11760. 30% is 5040."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9700 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "2425",
      "2440",
      "4850",
      "1940"
    ],
    "answer": 3,
    "explanation": "80% of 9700 is 7760. 20% is 1940."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (3), what is the predicted response variable y value for x = 27?",
    "options": [
      "678",
      "786",
      "703",
      "672"
    ],
    "answer": 0,
    "explanation": "y = 25(27) + 3 = 678."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19800 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "7425",
      "9900",
      "5940",
      "6440"
    ],
    "answer": 2,
    "explanation": "70% of 19800 is 13860. 30% is 5940."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17200 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "12400",
      "12900",
      "8600",
      "9675"
    ],
    "answer": 1,
    "explanation": "75% of 17200 is 12900. 25% is 4300."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15700 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "3925",
      "4906.25",
      "7850",
      "4425"
    ],
    "answer": 0,
    "explanation": "75% of 15700 is 11775. 25% is 3925."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (7), what is the predicted response variable y value for x = 78?",
    "options": [
      "1255",
      "968",
      "929",
      "943"
    ],
    "answer": 3,
    "explanation": "y = 12(78) + 7 = 943."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16100 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "4025",
      "8050",
      "5031.25",
      "4525"
    ],
    "answer": 0,
    "explanation": "75% of 16100 is 12075. 25% is 4025."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5100 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "2550",
      "1275",
      "1775",
      "1593.75"
    ],
    "answer": 1,
    "explanation": "75% of 5100 is 3825. 25% is 1275."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 269, FP = 42, FN = 58, and TN = 592, what is the exact Specificity?",
    "options": [
      "82.17%",
      "79.38%",
      "93.38%",
      "102.38%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=269, FP=42, FN=58, TN=592."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 303, FP = 43, FN = 38, and TN = 347, what is the exact Specificity?",
    "options": [
      "78.30%",
      "74.97%",
      "97.97%",
      "88.97%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=303, FP=43, FN=38, TN=347."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 164, FP = 27, FN = 80, and TN = 417, what is the exact Precision?",
    "options": [
      "71.86%",
      "94.86%",
      "75.56%",
      "85.86%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=164, FP=27, FN=80, TN=417."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 135, FP = 67, FN = 37, and TN = 419, what is the exact Recall?",
    "options": [
      "69.07%",
      "87.49%",
      "64.49%",
      "78.49%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=135, FP=67, FN=37, TN=419."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (13), what is the predicted response variable y value for x = 86?",
    "options": [
      "1733",
      "1389",
      "1414",
      "1363"
    ],
    "answer": 1,
    "explanation": "y = 16(86) + 13 = 1389."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(16, 46) and point B(41, 16) in a 2D Euclidean coordinate space?",
    "options": [
      "52.75",
      "68.75",
      "55.00",
      "59.15"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 55.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 140, FP = 68, FN = 69, and TN = 322, what is the exact Precision?",
    "options": [
      "59.23%",
      "76.31%",
      "53.31%",
      "67.31%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=140, FP=68, FN=69, TN=322."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(39, 8) and point B(16, 54) in a 2D Euclidean coordinate space?",
    "options": [
      "64.29",
      "55.58",
      "51.43",
      "49.18"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 51.43."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(9, 46) and point B(31, 43) in a 2D Euclidean coordinate space?",
    "options": [
      "31.25",
      "25.00",
      "29.15",
      "22.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 25.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-2), what is the predicted response variable y value for x = 42?",
    "options": [
      "1258",
      "1090",
      "1115",
      "1094"
    ],
    "answer": 1,
    "explanation": "y = 26(42) + -2 = 1090."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 2x + (2), what is the predicted response variable y value for x = 33?",
    "options": [
      "200",
      "93",
      "64",
      "68"
    ],
    "answer": 3,
    "explanation": "y = 2(33) + 2 = 68."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 300, FP = 54, FN = 39, and TN = 173, what is the exact Specificity?",
    "options": [
      "62.21%",
      "85.21%",
      "76.21%",
      "67.07%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=300, FP=54, FN=39, TN=173."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(26, 42) and point B(40, 18) in a 2D Euclidean coordinate space?",
    "options": [
      "31.93",
      "27.78",
      "34.73",
      "25.53"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 27.78."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(3, 41) and point B(38, 12) in a 2D Euclidean coordinate space?",
    "options": [
      "45.45",
      "56.82",
      "43.20",
      "49.60"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 45.45."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (3), what is the predicted response variable y value for x = 33?",
    "options": [
      "432",
      "300",
      "325",
      "294"
    ],
    "answer": 1,
    "explanation": "y = 9(33) + 3 = 300."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15200 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "7600",
      "3540",
      "3040",
      "3800"
    ],
    "answer": 2,
    "explanation": "80% of 15200 is 12160. 20% is 3040."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (17), what is the predicted response variable y value for x = 16?",
    "options": [
      "241",
      "305",
      "266",
      "207"
    ],
    "answer": 0,
    "explanation": "y = 14(16) + 17 = 241."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(21, 30) and point B(39, 11) in a 2D Euclidean coordinate space?",
    "options": [
      "30.32",
      "32.72",
      "26.17",
      "23.92"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 26.17."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5000 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "2500",
      "3750",
      "2812.5",
      "3250"
    ],
    "answer": 1,
    "explanation": "75% of 5000 is 3750. 25% is 1250."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(12, 34) and point B(49, 41) in a 2D Euclidean coordinate space?",
    "options": [
      "41.81",
      "37.66",
      "35.41",
      "47.07"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 37.66."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 174, FP = 41, FN = 73, and TN = 419, what is the exact Specificity?",
    "options": [
      "91.09%",
      "77.09%",
      "100.09%",
      "80.16%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=174, FP=41, FN=73, TN=419."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (1), what is the predicted response variable y value for x = 83?",
    "options": [
      "2076",
      "1744",
      "1742",
      "1769"
    ],
    "answer": 1,
    "explanation": "y = 21(83) + 1 = 1744."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(31, 33) and point B(44, 20) in a 2D Euclidean coordinate space?",
    "options": [
      "22.98",
      "22.53",
      "18.38",
      "16.13"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 18.38."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 111, FP = 67, FN = 17, and TN = 570, what is the exact Specificity?",
    "options": [
      "98.48%",
      "75.48%",
      "78.74%",
      "89.48%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=111, FP=67, FN=17, TN=570."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 303, FP = 67, FN = 62, and TN = 166, what is the exact Specificity?",
    "options": [
      "80.24%",
      "71.24%",
      "62.70%",
      "57.24%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=303, FP=67, FN=62, TN=166."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(48, 42) and point B(10, 41) in a 2D Euclidean coordinate space?",
    "options": [
      "48.75",
      "43.15",
      "39.00",
      "36.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 39.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(5, 39) and point B(39, 7) in a 2D Euclidean coordinate space?",
    "options": [
      "44.44",
      "58.36",
      "46.69",
      "50.84"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 46.69."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6300 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1575",
      "3150",
      "2075",
      "1968.75"
    ],
    "answer": 0,
    "explanation": "75% of 6300 is 4725. 25% is 1575."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(29, 31) and point B(48, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "16.78",
      "23.78",
      "19.03",
      "23.18"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 19.03."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(14, 15) and point B(20, 23) in a 2D Euclidean coordinate space?",
    "options": [
      "7.75",
      "10.00",
      "14.15",
      "12.50"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 10.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19800 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "10395",
      "9900",
      "13360",
      "13860"
    ],
    "answer": 3,
    "explanation": "70% of 19800 is 13860. 30% is 5940."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 166, FP = 12, FN = 58, and TN = 580, what is the exact Recall?",
    "options": [
      "74.11%",
      "83.11%",
      "65.21%",
      "60.11%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=166, FP=12, FN=58, TN=580."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (-9), what is the predicted response variable y value for x = 54?",
    "options": [
      "531",
      "315",
      "333",
      "340"
    ],
    "answer": 1,
    "explanation": "y = 6(54) + -9 = 315."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (-15), what is the predicted response variable y value for x = 62?",
    "options": [
      "878",
      "1101",
      "883",
      "853"
    ],
    "answer": 3,
    "explanation": "y = 14(62) + -15 = 853."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (5), what is the predicted response variable y value for x = 96?",
    "options": [
      "1470",
      "1829",
      "1445",
      "1435"
    ],
    "answer": 2,
    "explanation": "y = 15(96) + 5 = 1445."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(48, 10) and point B(13, 12) in a 2D Euclidean coordinate space?",
    "options": [
      "37.00",
      "46.25",
      "41.15",
      "34.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 37.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (15), what is the predicted response variable y value for x = 20?",
    "options": [
      "175",
      "145",
      "255",
      "200"
    ],
    "answer": 0,
    "explanation": "y = 8(20) + 15 = 175."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4200 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1260",
      "1760",
      "1575",
      "2100"
    ],
    "answer": 0,
    "explanation": "70% of 4200 is 2940. 30% is 1260."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (10), what is the predicted response variable y value for x = 42?",
    "options": [
      "640",
      "472",
      "497",
      "452"
    ],
    "answer": 1,
    "explanation": "y = 11(42) + 10 = 472."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9600 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "7180",
      "4800",
      "7680",
      "5760"
    ],
    "answer": 2,
    "explanation": "80% of 9600 is 7680. 20% is 1920."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(12, 11) and point B(40, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "38.21",
      "35.96",
      "47.76",
      "42.36"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 38.21."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18400 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "9200",
      "14220",
      "11040",
      "14720"
    ],
    "answer": 3,
    "explanation": "80% of 18400 is 14720. 20% is 3680."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9700 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "5820",
      "7760",
      "7260",
      "4850"
    ],
    "answer": 1,
    "explanation": "80% of 9700 is 7760. 20% is 1940."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(24, 25) and point B(47, 9) in a 2D Euclidean coordinate space?",
    "options": [
      "43.15",
      "48.75",
      "39.00",
      "36.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 39.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (-13), what is the predicted response variable y value for x = 81?",
    "options": [
      "1526",
      "1202",
      "1227",
      "1228"
    ],
    "answer": 1,
    "explanation": "y = 15(81) + -13 = 1202."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(4, 40) and point B(51, 45) in a 2D Euclidean coordinate space?",
    "options": [
      "47.27",
      "59.08",
      "45.02",
      "51.42"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 47.27."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 10x + (9), what is the predicted response variable y value for x = 68?",
    "options": [
      "714",
      "961",
      "671",
      "689"
    ],
    "answer": 3,
    "explanation": "y = 10(68) + 9 = 689."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 324, FP = 66, FN = 76, and TN = 292, what is the exact Recall?",
    "options": [
      "90.00%",
      "71.28%",
      "67.00%",
      "81.00%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=324, FP=66, FN=76, TN=292."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(12, 12) and point B(54, 42) in a 2D Euclidean coordinate space?",
    "options": [
      "90.00",
      "72.00",
      "76.15",
      "69.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 72.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15100 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "11580",
      "12080",
      "7550",
      "9060"
    ],
    "answer": 1,
    "explanation": "80% of 15100 is 12080. 20% is 3020."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (-5), what is the predicted response variable y value for x = 30?",
    "options": [
      "605",
      "715",
      "620",
      "595"
    ],
    "answer": 3,
    "explanation": "y = 20(30) + -5 = 595."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 167, FP = 8, FN = 9, and TN = 196, what is the exact Accuracy?",
    "options": [
      "84.06%",
      "104.53%",
      "95.53%",
      "81.53%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=167, FP=8, FN=9, TN=196."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(22, 40) and point B(6, 43) in a 2D Euclidean coordinate space?",
    "options": [
      "20.35",
      "14.03",
      "20.43",
      "16.28"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 16.28."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (-16), what is the predicted response variable y value for x = 18?",
    "options": [
      "340",
      "308",
      "333",
      "380"
    ],
    "answer": 1,
    "explanation": "y = 18(18) + -16 = 308."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 4x + (10), what is the predicted response variable y value for x = 95?",
    "options": [
      "390",
      "770",
      "370",
      "415"
    ],
    "answer": 0,
    "explanation": "y = 4(95) + 10 = 390."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(19, 33) and point B(20, 43) in a 2D Euclidean coordinate space?",
    "options": [
      "10.05",
      "12.56",
      "14.20",
      "7.80"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 10.05."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (-19), what is the predicted response variable y value for x = 93?",
    "options": [
      "1469",
      "1507",
      "1841",
      "1494"
    ],
    "answer": 0,
    "explanation": "y = 16(93) + -19 = 1469."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(28, 39) and point B(33, 31) in a 2D Euclidean coordinate space?",
    "options": [
      "13.58",
      "9.43",
      "7.18",
      "11.79"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 9.43."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 173, FP = 14, FN = 56, and TN = 509, what is the exact Specificity?",
    "options": [
      "85.64%",
      "83.32%",
      "106.32%",
      "97.32%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=173, FP=14, FN=56, TN=509."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 181, FP = 20, FN = 12, and TN = 538, what is the exact Recall?",
    "options": [
      "82.53%",
      "93.78%",
      "79.78%",
      "102.78%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=181, FP=20, FN=12, TN=538."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-1), what is the predicted response variable y value for x = 57?",
    "options": [
      "170",
      "398",
      "195",
      "172"
    ],
    "answer": 0,
    "explanation": "y = 3(57) + -1 = 170."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(48, 48) and point B(26, 15) in a 2D Euclidean coordinate space?",
    "options": [
      "52.75",
      "59.15",
      "55.00",
      "68.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 55.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-6), what is the predicted response variable y value for x = 55?",
    "options": [
      "159",
      "171",
      "379",
      "184"
    ],
    "answer": 0,
    "explanation": "y = 3(55) + -6 = 159."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 57, FP = 14, FN = 17, and TN = 417, what is the exact Specificity?",
    "options": [
      "85.14%",
      "96.75%",
      "105.75%",
      "82.75%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=57, FP=14, FN=17, TN=417."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17500 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "12625",
      "9843.75",
      "8750",
      "13125"
    ],
    "answer": 3,
    "explanation": "75% of 17500 is 13125. 25% is 4375."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8200 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "2050",
      "2140",
      "4100",
      "1640"
    ],
    "answer": 3,
    "explanation": "80% of 8200 is 6560. 20% is 1640."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12200 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "9760",
      "7320",
      "9260",
      "6100"
    ],
    "answer": 0,
    "explanation": "80% of 12200 is 9760. 20% is 2440."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5200 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1300",
      "1540",
      "1040",
      "2600"
    ],
    "answer": 2,
    "explanation": "80% of 5200 is 4160. 20% is 1040."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5500 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1650",
      "2150",
      "2750",
      "2062.5"
    ],
    "answer": 0,
    "explanation": "70% of 5500 is 3850. 30% is 1650."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-19), what is the predicted response variable y value for x = 53?",
    "options": [
      "655",
      "642",
      "829",
      "617"
    ],
    "answer": 3,
    "explanation": "y = 12(53) + -19 = 617."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (-11), what is the predicted response variable y value for x = 18?",
    "options": [
      "439",
      "392",
      "389",
      "367"
    ],
    "answer": 3,
    "explanation": "y = 21(18) + -11 = 367."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(0, 5) and point B(49, 10) in a 2D Euclidean coordinate space?",
    "options": [
      "58.15",
      "51.75",
      "67.50",
      "54.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 54.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-7), what is the predicted response variable y value for x = 0?",
    "options": [
      "-7",
      "7",
      "77",
      "18"
    ],
    "answer": 0,
    "explanation": "y = 8(0) + -7 = -7."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4200 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "2940",
      "2440",
      "2205",
      "2100"
    ],
    "answer": 0,
    "explanation": "70% of 4200 is 2940. 30% is 1260."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(40, 22) and point B(26, 41) in a 2D Euclidean coordinate space?",
    "options": [
      "23.60",
      "29.50",
      "21.35",
      "27.75"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 23.60."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19300 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "7237.5",
      "6290",
      "9650",
      "5790"
    ],
    "answer": 3,
    "explanation": "70% of 19300 is 13510. 30% is 5790."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (-14), what is the predicted response variable y value for x = 90?",
    "options": [
      "2416",
      "2081",
      "2084",
      "2056"
    ],
    "answer": 3,
    "explanation": "y = 23(90) + -14 = 2056."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (-17), what is the predicted response variable y value for x = 34?",
    "options": [
      "629",
      "527",
      "493",
      "518"
    ],
    "answer": 2,
    "explanation": "y = 15(34) + -17 = 493."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-15), what is the predicted response variable y value for x = 32?",
    "options": [
      "815",
      "913",
      "785",
      "810"
    ],
    "answer": 2,
    "explanation": "y = 25(32) + -15 = 785."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (-19), what is the predicted response variable y value for x = 43?",
    "options": [
      "836",
      "970",
      "823",
      "798"
    ],
    "answer": 3,
    "explanation": "y = 19(43) + -19 = 798."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (-11), what is the predicted response variable y value for x = 0?",
    "options": [
      "11",
      "14",
      "-11",
      "77"
    ],
    "answer": 2,
    "explanation": "y = 23(0) + -11 = -11."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(41, 34) and point B(40, 31) in a 2D Euclidean coordinate space?",
    "options": [
      "7.31",
      "0.91",
      "3.95",
      "3.16"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 3.16."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 165, FP = 44, FN = 44, and TN = 556, what is the exact Precision?",
    "options": [
      "78.95%",
      "87.95%",
      "64.95%",
      "69.47%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=165, FP=44, FN=44, TN=556."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 61, FP = 78, FN = 26, and TN = 466, what is the exact Precision?",
    "options": [
      "38.62%",
      "43.88%",
      "52.88%",
      "29.88%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=61, FP=78, FN=26, TN=466."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15500 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "7750",
      "8137.5",
      "10350",
      "10850"
    ],
    "answer": 3,
    "explanation": "70% of 15500 is 10850. 30% is 4650."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6600 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "4120",
      "3465",
      "3300",
      "4620"
    ],
    "answer": 3,
    "explanation": "70% of 6600 is 4620. 30% is 1980."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10100 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "7580",
      "8080",
      "6060",
      "5050"
    ],
    "answer": 1,
    "explanation": "80% of 10100 is 8080. 20% is 2020."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(39, 47) and point B(34, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "32.12",
      "38.52",
      "34.37",
      "42.96"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 34.37."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16200 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "4050",
      "5062.5",
      "4550",
      "8100"
    ],
    "answer": 0,
    "explanation": "75% of 16200 is 12150. 25% is 4050."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 4x + (-19), what is the predicted response variable y value for x = 36?",
    "options": [
      "125",
      "269",
      "163",
      "150"
    ],
    "answer": 0,
    "explanation": "y = 4(36) + -19 = 125."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16000 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4800",
      "5300",
      "8000",
      "6000"
    ],
    "answer": 0,
    "explanation": "70% of 16000 is 11200. 30% is 4800."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (3), what is the predicted response variable y value for x = 69?",
    "options": [
      "1038",
      "1032",
      "1314",
      "1063"
    ],
    "answer": 0,
    "explanation": "y = 15(69) + 3 = 1038."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 128, FP = 9, FN = 19, and TN = 440, what is the exact Accuracy?",
    "options": [
      "83.87%",
      "104.30%",
      "95.30%",
      "81.30%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=128, FP=9, FN=19, TN=440."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 83, FP = 38, FN = 29, and TN = 365, what is the exact Accuracy?",
    "options": [
      "72.99%",
      "76.55%",
      "95.99%",
      "86.99%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=83, FP=38, FN=29, TN=365."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-12), what is the predicted response variable y value for x = 34?",
    "options": [
      "896",
      "897",
      "872",
      "1008"
    ],
    "answer": 2,
    "explanation": "y = 26(34) + -12 = 872."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 2x + (13), what is the predicted response variable y value for x = 20?",
    "options": [
      "53",
      "78",
      "27",
      "133"
    ],
    "answer": 0,
    "explanation": "y = 2(20) + 13 = 53."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 341, FP = 16, FN = 73, and TN = 364, what is the exact Recall?",
    "options": [
      "72.48%",
      "91.37%",
      "68.37%",
      "82.37%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=341, FP=16, FN=73, TN=364."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16400 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "4100",
      "3280",
      "8200",
      "3780"
    ],
    "answer": 1,
    "explanation": "80% of 16400 is 13120. 20% is 3280."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (-19), what is the predicted response variable y value for x = 9?",
    "options": [
      "197",
      "199",
      "186",
      "161"
    ],
    "answer": 3,
    "explanation": "y = 20(9) + -19 = 161."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (8), what is the predicted response variable y value for x = 6?",
    "options": [
      "117",
      "76",
      "92",
      "116"
    ],
    "answer": 2,
    "explanation": "y = 14(6) + 8 = 92."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (-1), what is the predicted response variable y value for x = 4?",
    "options": [
      "25",
      "39",
      "48",
      "23"
    ],
    "answer": 3,
    "explanation": "y = 6(4) + -1 = 23."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 105, FP = 17, FN = 61, and TN = 396, what is the exact Accuracy?",
    "options": [
      "72.53%",
      "95.53%",
      "86.53%",
      "76.15%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=105, FP=17, FN=61, TN=396."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 228, FP = 69, FN = 53, and TN = 239, what is the exact Accuracy?",
    "options": [
      "88.29%",
      "79.29%",
      "65.29%",
      "69.77%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=228, FP=69, FN=53, TN=239."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19600 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "9800",
      "5400",
      "4900",
      "6125"
    ],
    "answer": 2,
    "explanation": "75% of 19600 is 14700. 25% is 4900."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10400 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "5850",
      "7300",
      "7800",
      "5200"
    ],
    "answer": 2,
    "explanation": "75% of 10400 is 7800. 25% is 2600."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 267, FP = 51, FN = 70, and TN = 421, what is the exact Specificity?",
    "options": [
      "75.19%",
      "78.49%",
      "98.19%",
      "89.19%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=267, FP=51, FN=70, TN=421."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 50, FP = 32, FN = 46, and TN = 356, what is the exact Specificity?",
    "options": [
      "91.75%",
      "100.75%",
      "80.74%",
      "77.75%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=50, FP=32, FN=46, TN=356."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 4x + (15), what is the predicted response variable y value for x = 57?",
    "options": [
      "243",
      "213",
      "268",
      "471"
    ],
    "answer": 0,
    "explanation": "y = 4(57) + 15 = 243."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(43, 32) and point B(24, 19) in a 2D Euclidean coordinate space?",
    "options": [
      "27.17",
      "20.77",
      "23.02",
      "28.78"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 23.02."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 124, FP = 24, FN = 60, and TN = 376, what is the exact Accuracy?",
    "options": [
      "71.62%",
      "94.62%",
      "85.62%",
      "75.34%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=124, FP=24, FN=60, TN=376."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(11, 40) and point B(48, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "39.00",
      "48.75",
      "36.75",
      "43.15"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 39.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7500 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "3750",
      "5125",
      "5625",
      "4218.75"
    ],
    "answer": 2,
    "explanation": "75% of 7500 is 5625. 25% is 1875."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-7), what is the predicted response variable y value for x = 52?",
    "options": [
      "1553",
      "1370",
      "1345",
      "1359"
    ],
    "answer": 2,
    "explanation": "y = 26(52) + -7 = 1345."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(2, 13) and point B(24, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "58.75",
      "44.75",
      "47.00",
      "51.15"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 47.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (8), what is the predicted response variable y value for x = 18?",
    "options": [
      "170",
      "98",
      "82",
      "123"
    ],
    "answer": 1,
    "explanation": "y = 5(18) + 8 = 98."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (14), what is the predicted response variable y value for x = 78?",
    "options": [
      "2014",
      "2067",
      "2042",
      "2354"
    ],
    "answer": 2,
    "explanation": "y = 26(78) + 14 = 2042."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 140, FP = 34, FN = 34, and TN = 483, what is the exact Precision?",
    "options": [
      "70.80%",
      "80.46%",
      "66.46%",
      "89.46%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=140, FP=34, FN=34, TN=483."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 164, FP = 22, FN = 69, and TN = 133, what is the exact Specificity?",
    "options": [
      "71.81%",
      "94.81%",
      "85.81%",
      "75.51%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=164, FP=22, FN=69, TN=133."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-13), what is the predicted response variable y value for x = 19?",
    "options": [
      "215",
      "241",
      "240",
      "291"
    ],
    "answer": 0,
    "explanation": "y = 12(19) + -13 = 215."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 9800 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "5512.5",
      "4900",
      "6850",
      "7350"
    ],
    "answer": 3,
    "explanation": "75% of 9800 is 7350. 25% is 2450."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6200 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "3100",
      "4460",
      "3720",
      "4960"
    ],
    "answer": 3,
    "explanation": "80% of 6200 is 4960. 20% is 1240."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10200 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "6640",
      "5355",
      "5100",
      "7140"
    ],
    "answer": 3,
    "explanation": "70% of 10200 is 7140. 30% is 3060."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14100 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "3525",
      "4406.25",
      "4025",
      "7050"
    ],
    "answer": 0,
    "explanation": "75% of 14100 is 10575. 25% is 3525."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(25, 44) and point B(37, 9) in a 2D Euclidean coordinate space?",
    "options": [
      "47.00",
      "51.15",
      "58.75",
      "44.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 47.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 108, FP = 22, FN = 14, and TN = 475, what is the exact Accuracy?",
    "options": [
      "82.88%",
      "94.18%",
      "103.18%",
      "80.18%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=108, FP=22, FN=14, TN=475."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 316, FP = 84, FN = 42, and TN = 358, what is the exact Specificity?",
    "options": [
      "90.00%",
      "81.00%",
      "71.28%",
      "67.00%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=316, FP=84, FN=42, TN=358."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (1), what is the predicted response variable y value for x = 62?",
    "options": [
      "1576",
      "1549",
      "1799",
      "1551"
    ],
    "answer": 3,
    "explanation": "y = 25(62) + 1 = 1551."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12900 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "9030",
      "8530",
      "6450",
      "6772.5"
    ],
    "answer": 0,
    "explanation": "70% of 12900 is 9030. 30% is 3870."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 251, FP = 26, FN = 25, and TN = 253, what is the exact Precision?",
    "options": [
      "99.61%",
      "79.74%",
      "76.61%",
      "90.61%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=251, FP=26, FN=25, TN=253."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (5), what is the predicted response variable y value for x = 44?",
    "options": [
      "646",
      "611",
      "621",
      "797"
    ],
    "answer": 2,
    "explanation": "y = 14(44) + 5 = 621."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 131, FP = 39, FN = 33, and TN = 434, what is the exact Recall?",
    "options": [
      "65.88%",
      "79.88%",
      "88.88%",
      "70.29%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=131, FP=39, FN=33, TN=434."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12400 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "6975",
      "6200",
      "9300",
      "8800"
    ],
    "answer": 2,
    "explanation": "75% of 12400 is 9300. 25% is 3100."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (-2), what is the predicted response variable y value for x = 75?",
    "options": [
      "1348",
      "1048",
      "1052",
      "1073"
    ],
    "answer": 1,
    "explanation": "y = 14(75) + -2 = 1048."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(26, 30) and point B(22, 8) in a 2D Euclidean coordinate space?",
    "options": [
      "22.36",
      "27.95",
      "26.51",
      "20.11"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 22.36."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (16), what is the predicted response variable y value for x = 23?",
    "options": [
      "269",
      "177",
      "202",
      "145"
    ],
    "answer": 1,
    "explanation": "y = 7(23) + 16 = 177."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12800 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "9600",
      "9100",
      "7200",
      "6400"
    ],
    "answer": 0,
    "explanation": "75% of 12800 is 9600. 25% is 3200."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 22x + (-3), what is the predicted response variable y value for x = 14?",
    "options": [
      "330",
      "361",
      "305",
      "311"
    ],
    "answer": 2,
    "explanation": "y = 22(14) + -3 = 305."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(42, 13) and point B(16, 14) in a 2D Euclidean coordinate space?",
    "options": [
      "26.02",
      "23.77",
      "30.17",
      "32.52"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 26.02."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15800 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3950",
      "7900",
      "3660",
      "3160"
    ],
    "answer": 3,
    "explanation": "80% of 15800 is 12640. 20% is 3160."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 311, FP = 80, FN = 82, and TN = 140, what is the exact Accuracy?",
    "options": [
      "59.57%",
      "64.74%",
      "82.57%",
      "73.57%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=311, FP=80, FN=82, TN=140."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14600 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "7300",
      "8212.5",
      "10450",
      "10950"
    ],
    "answer": 3,
    "explanation": "75% of 14600 is 10950. 25% is 3650."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3700 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1110",
      "1387.5",
      "1610",
      "1850"
    ],
    "answer": 0,
    "explanation": "70% of 3700 is 2590. 30% is 1110."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (-8), what is the predicted response variable y value for x = 10?",
    "options": [
      "218",
      "227",
      "242",
      "202"
    ],
    "answer": 3,
    "explanation": "y = 21(10) + -8 = 202."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(11, 29) and point B(38, 44) in a 2D Euclidean coordinate space?",
    "options": [
      "46.15",
      "52.50",
      "42.00",
      "39.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 42.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (18), what is the predicted response variable y value for x = 17?",
    "options": [
      "375",
      "339",
      "400",
      "443"
    ],
    "answer": 0,
    "explanation": "y = 21(17) + 18 = 375."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (-18), what is the predicted response variable y value for x = 69?",
    "options": [
      "1605",
      "1569",
      "1594",
      "1845"
    ],
    "answer": 1,
    "explanation": "y = 23(69) + -18 = 1569."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 294, FP = 22, FN = 38, and TN = 198, what is the exact Accuracy?",
    "options": [
      "78.43%",
      "89.13%",
      "98.13%",
      "75.13%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=294, FP=22, FN=38, TN=198."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 220, FP = 7, FN = 43, and TN = 398, what is the exact Accuracy?",
    "options": [
      "92.51%",
      "81.41%",
      "78.51%",
      "101.51%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=220, FP=7, FN=43, TN=398."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 235, FP = 47, FN = 55, and TN = 342, what is the exact Recall?",
    "options": [
      "81.03%",
      "90.03%",
      "71.31%",
      "67.03%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=235, FP=47, FN=55, TN=342."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (-4), what is the predicted response variable y value for x = 10?",
    "options": [
      "194",
      "226",
      "186",
      "211"
    ],
    "answer": 2,
    "explanation": "y = 19(10) + -4 = 186."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17800 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "11960",
      "8900",
      "9345",
      "12460"
    ],
    "answer": 3,
    "explanation": "70% of 17800 is 12460. 30% is 5340."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14400 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "10080",
      "7560",
      "7200",
      "9580"
    ],
    "answer": 0,
    "explanation": "70% of 14400 is 10080. 30% is 4320."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(45, 28) and point B(38, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "6.75",
      "13.15",
      "9.00",
      "11.25"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 9.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4900 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "2756.25",
      "3175",
      "3675",
      "2450"
    ],
    "answer": 2,
    "explanation": "75% of 4900 is 3675. 25% is 1225."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(20, 45) and point B(35, 22) in a 2D Euclidean coordinate space?",
    "options": [
      "47.50",
      "42.15",
      "38.00",
      "35.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 38.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (14), what is the predicted response variable y value for x = 9?",
    "options": [
      "112",
      "176",
      "140",
      "165"
    ],
    "answer": 2,
    "explanation": "y = 14(9) + 14 = 140."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(32, 27) and point B(22, 47) in a 2D Euclidean coordinate space?",
    "options": [
      "22.36",
      "27.95",
      "20.11",
      "26.51"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 22.36."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(29, 19) and point B(23, 24) in a 2D Euclidean coordinate space?",
    "options": [
      "13.75",
      "15.15",
      "8.75",
      "11.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 11.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (16), what is the predicted response variable y value for x = 79?",
    "options": [
      "1754",
      "1438",
      "1463",
      "1406"
    ],
    "answer": 1,
    "explanation": "y = 18(79) + 16 = 1438."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 10x + (19), what is the predicted response variable y value for x = 80?",
    "options": [
      "781",
      "844",
      "819",
      "1139"
    ],
    "answer": 2,
    "explanation": "y = 10(80) + 19 = 819."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14200 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "4437.5",
      "7100",
      "3550",
      "4050"
    ],
    "answer": 2,
    "explanation": "75% of 14200 is 10650. 25% is 3550."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 197, FP = 53, FN = 65, and TN = 170, what is the exact Recall?",
    "options": [
      "66.17%",
      "61.19%",
      "75.19%",
      "84.19%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=197, FP=53, FN=65, TN=170."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 99, FP = 18, FN = 65, and TN = 246, what is the exact Accuracy?",
    "options": [
      "89.61%",
      "70.93%",
      "80.61%",
      "66.61%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=99, FP=18, FN=65, TN=246."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3500 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "2300",
      "2800",
      "1750",
      "2100"
    ],
    "answer": 1,
    "explanation": "80% of 3500 is 2800. 20% is 700."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 231, FP = 15, FN = 19, and TN = 586, what is the exact Specificity?",
    "options": [
      "97.50%",
      "106.50%",
      "85.80%",
      "83.50%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=231, FP=15, FN=19, TN=586."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(14, 28) and point B(45, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "40.00",
      "44.15",
      "50.00",
      "37.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 40.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3100 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1120",
      "620",
      "1550",
      "775"
    ],
    "answer": 1,
    "explanation": "80% of 3100 is 2480. 20% is 620."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 141, FP = 29, FN = 22, and TN = 398, what is the exact Specificity?",
    "options": [
      "82.02%",
      "79.21%",
      "93.21%",
      "102.21%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=141, FP=29, FN=22, TN=398."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(37, 15) and point B(47, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "30.21",
      "21.92",
      "28.32",
      "24.17"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 24.17."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 2100 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "970",
      "1050",
      "1470",
      "1102.5"
    ],
    "answer": 2,
    "explanation": "70% of 2100 is 1470. 30% is 630."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10300 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "5150",
      "3590",
      "3862.5",
      "3090"
    ],
    "answer": 3,
    "explanation": "70% of 10300 is 7210. 30% is 3090."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(48, 20) and point B(9, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "51.02",
      "44.62",
      "46.87",
      "58.59"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 46.87."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19200 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "9600",
      "7200",
      "6260",
      "5760"
    ],
    "answer": 3,
    "explanation": "70% of 19200 is 13440. 30% is 5760."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(19, 46) and point B(39, 19) in a 2D Euclidean coordinate space?",
    "options": [
      "42.00",
      "31.35",
      "37.75",
      "33.60"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 33.60."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 182, FP = 31, FN = 70, and TN = 360, what is the exact Specificity?",
    "options": [
      "92.07%",
      "81.02%",
      "78.07%",
      "101.07%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=182, FP=31, FN=70, TN=360."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (17), what is the predicted response variable y value for x = 7?",
    "options": [
      "101",
      "73",
      "39",
      "98"
    ],
    "answer": 1,
    "explanation": "y = 8(7) + 17 = 73."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 176, FP = 69, FN = 57, and TN = 330, what is the exact Accuracy?",
    "options": [
      "66.06%",
      "89.06%",
      "70.46%",
      "80.06%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=176, FP=69, FN=57, TN=330."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (15), what is the predicted response variable y value for x = 49?",
    "options": [
      "1210",
      "1265",
      "1240",
      "1436"
    ],
    "answer": 2,
    "explanation": "y = 25(49) + 15 = 1240."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(8, 6) and point B(50, 51) in a 2D Euclidean coordinate space?",
    "options": [
      "76.94",
      "61.55",
      "59.30",
      "65.70"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 61.55."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 188, FP = 37, FN = 9, and TN = 501, what is the exact Recall?",
    "options": [
      "104.43%",
      "81.43%",
      "95.43%",
      "83.98%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=188, FP=37, FN=9, TN=501."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 100, FP = 38, FN = 25, and TN = 392, what is the exact Accuracy?",
    "options": [
      "97.65%",
      "78.01%",
      "88.65%",
      "74.65%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=100, FP=38, FN=25, TN=392."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-4), what is the predicted response variable y value for x = 21?",
    "options": [
      "84",
      "59",
      "67",
      "143"
    ],
    "answer": 1,
    "explanation": "y = 3(21) + -4 = 59."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(8, 9) and point B(47, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "72.15",
      "68.00",
      "85.00",
      "65.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 68.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 74, FP = 30, FN = 32, and TN = 134, what is the exact Specificity?",
    "options": [
      "67.71%",
      "71.90%",
      "90.71%",
      "81.71%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=74, FP=30, FN=32, TN=134."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(4, 8) and point B(16, 15) in a 2D Euclidean coordinate space?",
    "options": [
      "16.75",
      "23.75",
      "23.15",
      "19.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 19.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 10x + (14), what is the predicted response variable y value for x = 66?",
    "options": [
      "646",
      "674",
      "699",
      "938"
    ],
    "answer": 1,
    "explanation": "y = 10(66) + 14 = 674."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(27, 45) and point B(30, 23) in a 2D Euclidean coordinate space?",
    "options": [
      "22.75",
      "25.00",
      "29.15",
      "31.25"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 25.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (15), what is the predicted response variable y value for x = 63?",
    "options": [
      "1464",
      "1182",
      "1212",
      "1237"
    ],
    "answer": 2,
    "explanation": "y = 19(63) + 15 = 1212."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(48, 38) and point B(30, 54) in a 2D Euclidean coordinate space?",
    "options": [
      "30.10",
      "24.08",
      "28.23",
      "21.83"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 24.08."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(41, 31) and point B(28, 42) in a 2D Euclidean coordinate space?",
    "options": [
      "30.00",
      "28.15",
      "21.75",
      "24.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 24.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(24, 45) and point B(51, 47) in a 2D Euclidean coordinate space?",
    "options": [
      "31.22",
      "33.84",
      "24.82",
      "27.07"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 27.07."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4000 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "2000",
      "2800",
      "2300",
      "2100"
    ],
    "answer": 1,
    "explanation": "70% of 4000 is 2800. 30% is 1200."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14400 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4820",
      "4320",
      "5400",
      "7200"
    ],
    "answer": 1,
    "explanation": "70% of 14400 is 10080. 30% is 4320."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (-11), what is the predicted response variable y value for x = 32?",
    "options": [
      "299",
      "405",
      "277",
      "302"
    ],
    "answer": 2,
    "explanation": "y = 9(32) + -11 = 277."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(43, 29) and point B(7, 7) in a 2D Euclidean coordinate space?",
    "options": [
      "52.74",
      "39.94",
      "46.34",
      "42.19"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 42.19."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-12), what is the predicted response variable y value for x = 8?",
    "options": [
      "212",
      "188",
      "213",
      "220"
    ],
    "answer": 1,
    "explanation": "y = 25(8) + -12 = 188."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8400 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "4410",
      "4200",
      "5880",
      "5380"
    ],
    "answer": 2,
    "explanation": "70% of 8400 is 5880. 30% is 2520."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5100 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "3325",
      "2550",
      "2868.75",
      "3825"
    ],
    "answer": 3,
    "explanation": "75% of 5100 is 3825. 25% is 1275."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-13), what is the predicted response variable y value for x = 99?",
    "options": [
      "2587",
      "2957",
      "2561",
      "2586"
    ],
    "answer": 2,
    "explanation": "y = 26(99) + -13 = 2561."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 225, FP = 81, FN = 70, and TN = 149, what is the exact Accuracy?",
    "options": [
      "62.69%",
      "71.24%",
      "80.24%",
      "57.24%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=225, FP=81, FN=70, TN=149."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (-5), what is the predicted response variable y value for x = 52?",
    "options": [
      "255",
      "265",
      "463",
      "280"
    ],
    "answer": 0,
    "explanation": "y = 5(52) + -5 = 255."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(7, 36) and point B(35, 26) in a 2D Euclidean coordinate space?",
    "options": [
      "42.15",
      "35.75",
      "38.00",
      "47.50"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 38.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 338, FP = 22, FN = 23, and TN = 544, what is the exact Recall?",
    "options": [
      "93.63%",
      "79.63%",
      "82.39%",
      "102.63%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=338, FP=22, FN=23, TN=544."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 154, FP = 58, FN = 6, and TN = 154, what is the exact Specificity?",
    "options": [
      "58.64%",
      "72.64%",
      "81.64%",
      "63.92%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=154, FP=58, FN=6, TN=154."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (17), what is the predicted response variable y value for x = 95?",
    "options": [
      "1752",
      "1727",
      "2107",
      "1693"
    ],
    "answer": 1,
    "explanation": "y = 18(95) + 17 = 1727."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(1, 31) and point B(27, 39) in a 2D Euclidean coordinate space?",
    "options": [
      "38.15",
      "34.00",
      "31.75",
      "42.50"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 34.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-4), what is the predicted response variable y value for x = 9?",
    "options": [
      "23",
      "59",
      "48",
      "31"
    ],
    "answer": 0,
    "explanation": "y = 3(9) + -4 = 23."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-3), what is the predicted response variable y value for x = 29?",
    "options": [
      "757",
      "867",
      "751",
      "776"
    ],
    "answer": 2,
    "explanation": "y = 26(29) + -3 = 751."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(1, 49) and point B(20, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "38.75",
      "31.00",
      "28.75",
      "35.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 31.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 55, FP = 65, FN = 33, and TN = 213, what is the exact Precision?",
    "options": [
      "40.33%",
      "45.83%",
      "31.83%",
      "54.83%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=55, FP=65, FN=33, TN=213."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (17), what is the predicted response variable y value for x = 34?",
    "options": [
      "246",
      "187",
      "357",
      "221"
    ],
    "answer": 3,
    "explanation": "y = 6(34) + 17 = 221."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (18), what is the predicted response variable y value for x = 14?",
    "options": [
      "393",
      "332",
      "368",
      "424"
    ],
    "answer": 2,
    "explanation": "y = 25(14) + 18 = 368."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17100 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "5630",
      "8550",
      "5130",
      "6412.5"
    ],
    "answer": 2,
    "explanation": "70% of 17100 is 11970. 30% is 5130."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 61, FP = 29, FN = 42, and TN = 165, what is the exact Specificity?",
    "options": [
      "85.05%",
      "94.05%",
      "74.85%",
      "71.05%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=61, FP=29, FN=42, TN=165."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (0), what is the predicted response variable y value for x = 93?",
    "options": [
      "1048",
      "1100",
      "1395",
      "1023"
    ],
    "answer": 3,
    "explanation": "y = 11(93) + 0 = 1023."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18200 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "9100",
      "4550",
      "5687.5",
      "5050"
    ],
    "answer": 1,
    "explanation": "75% of 18200 is 13650. 25% is 4550."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 251, FP = 55, FN = 43, and TN = 258, what is the exact Recall?",
    "options": [
      "85.37%",
      "75.13%",
      "71.37%",
      "94.37%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=251, FP=55, FN=43, TN=258."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 281, FP = 18, FN = 56, and TN = 102, what is the exact Specificity?",
    "options": [
      "85.00%",
      "94.00%",
      "71.00%",
      "74.80%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=281, FP=18, FN=56, TN=102."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(47, 1) and point B(38, 26) in a 2D Euclidean coordinate space?",
    "options": [
      "24.32",
      "26.57",
      "30.72",
      "33.21"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 26.57."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(42, 38) and point B(35, 11) in a 2D Euclidean coordinate space?",
    "options": [
      "25.64",
      "34.87",
      "32.04",
      "27.89"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 27.89."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4900 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1470",
      "1837.5",
      "1970",
      "2450"
    ],
    "answer": 0,
    "explanation": "70% of 4900 is 3430. 30% is 1470."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14900 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4470",
      "7450",
      "5587.5",
      "4970"
    ],
    "answer": 0,
    "explanation": "70% of 14900 is 10430. 30% is 4470."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(12, 11) and point B(47, 27) in a 2D Euclidean coordinate space?",
    "options": [
      "51.00",
      "48.75",
      "63.75",
      "55.15"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 51.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (-10), what is the predicted response variable y value for x = 83?",
    "options": [
      "1172",
      "1177",
      "1152",
      "1484"
    ],
    "answer": 2,
    "explanation": "y = 14(83) + -10 = 1152."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 17600 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "12320",
      "8800",
      "9240",
      "11820"
    ],
    "answer": 0,
    "explanation": "70% of 17600 is 12320. 30% is 5280."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (0), what is the predicted response variable y value for x = 21?",
    "options": [
      "403",
      "378",
      "462",
      "455"
    ],
    "answer": 1,
    "explanation": "y = 18(21) + 0 = 378."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 58, FP = 30, FN = 47, and TN = 143, what is the exact Specificity?",
    "options": [
      "82.66%",
      "72.74%",
      "91.66%",
      "68.66%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=58, FP=30, FN=47, TN=143."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18600 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "4650",
      "4220",
      "3720",
      "9300"
    ],
    "answer": 2,
    "explanation": "80% of 18600 is 14880. 20% is 3720."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(49, 4) and point B(52, 36) in a 2D Euclidean coordinate space?",
    "options": [
      "35.00",
      "32.75",
      "43.75",
      "39.15"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 35.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(49, 42) and point B(53, 25) in a 2D Euclidean coordinate space?",
    "options": [
      "25.15",
      "21.00",
      "26.25",
      "18.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 21.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(47, 22) and point B(54, 35) in a 2D Euclidean coordinate space?",
    "options": [
      "20.00",
      "17.75",
      "25.00",
      "24.15"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 20.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10600 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "5962.5",
      "7950",
      "5300",
      "7450"
    ],
    "answer": 1,
    "explanation": "75% of 10600 is 7950. 25% is 2650."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (10), what is the predicted response variable y value for x = 1?",
    "options": [
      "40",
      "36",
      "16",
      "61"
    ],
    "answer": 1,
    "explanation": "y = 26(1) + 10 = 36."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 132, FP = 48, FN = 65, and TN = 104, what is the exact Recall?",
    "options": [
      "58.96%",
      "67.01%",
      "53.01%",
      "76.01%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=132, FP=48, FN=65, TN=104."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(18, 37) and point B(32, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "18.75",
      "12.75",
      "19.15",
      "15.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 15.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 334, FP = 78, FN = 14, and TN = 112, what is the exact Specificity?",
    "options": [
      "67.95%",
      "44.95%",
      "58.95%",
      "51.87%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=334, FP=78, FN=14, TN=112."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1400 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "350",
      "700",
      "780",
      "280"
    ],
    "answer": 3,
    "explanation": "80% of 1400 is 1120. 20% is 280."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (-11), what is the predicted response variable y value for x = 31?",
    "options": [
      "662",
      "764",
      "665",
      "640"
    ],
    "answer": 3,
    "explanation": "y = 21(31) + -11 = 640."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 243, FP = 11, FN = 41, and TN = 252, what is the exact Recall?",
    "options": [
      "71.56%",
      "85.56%",
      "75.30%",
      "94.56%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=243, FP=11, FN=41, TN=252."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-6), what is the predicted response variable y value for x = 72?",
    "options": [
      "210",
      "222",
      "235",
      "498"
    ],
    "answer": 0,
    "explanation": "y = 3(72) + -6 = 210."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11000 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "6187.5",
      "7750",
      "5500",
      "8250"
    ],
    "answer": 3,
    "explanation": "75% of 11000 is 8250. 25% is 2750."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6600 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "3300",
      "3712.5",
      "4950",
      "4450"
    ],
    "answer": 2,
    "explanation": "75% of 6600 is 4950. 25% is 1650."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(44, 24) and point B(17, 48) in a 2D Euclidean coordinate space?",
    "options": [
      "55.15",
      "48.75",
      "51.00",
      "63.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 51.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (-20), what is the predicted response variable y value for x = 66?",
    "options": [
      "1538",
      "1762",
      "1498",
      "1523"
    ],
    "answer": 2,
    "explanation": "y = 23(66) + -20 = 1498."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 22x + (17), what is the predicted response variable y value for x = 44?",
    "options": [
      "985",
      "1161",
      "1010",
      "951"
    ],
    "answer": 0,
    "explanation": "y = 22(44) + 17 = 985."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 59, FP = 70, FN = 41, and TN = 113, what is the exact Accuracy?",
    "options": [
      "53.48%",
      "46.78%",
      "60.78%",
      "69.78%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=59, FP=70, FN=41, TN=113."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6900 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "4330",
      "3622.5",
      "4830",
      "3450"
    ],
    "answer": 2,
    "explanation": "70% of 6900 is 4830. 30% is 2070."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(4, 44) and point B(33, 21) in a 2D Euclidean coordinate space?",
    "options": [
      "52.00",
      "56.15",
      "65.00",
      "49.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 52.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (8), what is the predicted response variable y value for x = 60?",
    "options": [
      "652",
      "668",
      "908",
      "693"
    ],
    "answer": 1,
    "explanation": "y = 11(60) + 8 = 668."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15600 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "4400",
      "4875",
      "7800",
      "3900"
    ],
    "answer": 3,
    "explanation": "75% of 15600 is 11700. 25% is 3900."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 6x + (-12), what is the predicted response variable y value for x = 42?",
    "options": [
      "265",
      "264",
      "408",
      "240"
    ],
    "answer": 3,
    "explanation": "y = 6(42) + -12 = 240."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 17x + (0), what is the predicted response variable y value for x = 34?",
    "options": [
      "655",
      "578",
      "714",
      "603"
    ],
    "answer": 1,
    "explanation": "y = 17(34) + 0 = 578."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (19), what is the predicted response variable y value for x = 26?",
    "options": [
      "189",
      "227",
      "331",
      "252"
    ],
    "answer": 1,
    "explanation": "y = 8(26) + 19 = 227."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (-5), what is the predicted response variable y value for x = 53?",
    "options": [
      "959",
      "1161",
      "949",
      "974"
    ],
    "answer": 2,
    "explanation": "y = 18(53) + -5 = 949."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 251, FP = 24, FN = 61, and TN = 583, what is the exact Recall?",
    "options": [
      "66.45%",
      "70.79%",
      "80.45%",
      "89.45%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=251, FP=24, FN=61, TN=583."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(17, 48) and point B(28, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "36.25",
      "33.15",
      "29.00",
      "26.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 29.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(17, 11) and point B(31, 18) in a 2D Euclidean coordinate space?",
    "options": [
      "13.40",
      "19.57",
      "19.80",
      "15.65"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 15.65."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 317, FP = 44, FN = 58, and TN = 168, what is the exact Precision?",
    "options": [
      "73.81%",
      "87.81%",
      "96.81%",
      "77.27%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=317, FP=44, FN=58, TN=168."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(31, 30) and point B(27, 50) in a 2D Euclidean coordinate space?",
    "options": [
      "20.40",
      "24.55",
      "25.50",
      "18.15"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 20.40."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5900 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1680",
      "1475",
      "2950",
      "1180"
    ],
    "answer": 3,
    "explanation": "80% of 5900 is 4720. 20% is 1180."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (6), what is the predicted response variable y value for x = 91?",
    "options": [
      "2099",
      "2124",
      "2087",
      "2463"
    ],
    "answer": 0,
    "explanation": "y = 23(91) + 6 = 2099."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 75, FP = 82, FN = 38, and TN = 380, what is the exact Accuracy?",
    "options": [
      "65.13%",
      "79.13%",
      "69.63%",
      "88.13%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=75, FP=82, FN=38, TN=380."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-5), what is the predicted response variable y value for x = 98?",
    "options": [
      "2935",
      "2568",
      "2553",
      "2543"
    ],
    "answer": 3,
    "explanation": "y = 26(98) + -5 = 2543."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (-15), what is the predicted response variable y value for x = 72?",
    "options": [
      "2001",
      "1743",
      "1738",
      "1713"
    ],
    "answer": 3,
    "explanation": "y = 24(72) + -15 = 1713."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6100 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "4880",
      "3050",
      "3660",
      "4380"
    ],
    "answer": 0,
    "explanation": "80% of 6100 is 4880. 20% is 1220."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(25, 3) and point B(20, 47) in a 2D Euclidean coordinate space?",
    "options": [
      "46.75",
      "49.00",
      "53.15",
      "61.25"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 49.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(29, 6) and point B(17, 39) in a 2D Euclidean coordinate space?",
    "options": [
      "35.11",
      "43.89",
      "32.86",
      "39.26"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 35.11."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 2800 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1400",
      "1200",
      "875",
      "700"
    ],
    "answer": 3,
    "explanation": "75% of 2800 is 2100. 25% is 700."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 2000 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "1000",
      "1000",
      "1125",
      "1500"
    ],
    "answer": 3,
    "explanation": "75% of 2000 is 1500. 25% is 500."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 65, FP = 41, FN = 68, and TN = 479, what is the exact Accuracy?",
    "options": [
      "69.31%",
      "92.31%",
      "73.31%",
      "83.31%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=65, FP=41, FN=68, TN=479."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(32, 31) and point B(54, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "26.17",
      "22.02",
      "27.53",
      "19.77"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 22.02."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8100 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "5980",
      "4860",
      "4050",
      "6480"
    ],
    "answer": 3,
    "explanation": "80% of 8100 is 6480. 20% is 1620."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (12), what is the predicted response variable y value for x = 78?",
    "options": [
      "1416",
      "1129",
      "1080",
      "1104"
    ],
    "answer": 3,
    "explanation": "y = 14(78) + 12 = 1104."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 243, FP = 58, FN = 81, and TN = 542, what is the exact Precision?",
    "options": [
      "71.04%",
      "80.73%",
      "89.73%",
      "66.73%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=243, FP=58, FN=81, TN=542."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(28, 28) and point B(10, 45) in a 2D Euclidean coordinate space?",
    "options": [
      "35.00",
      "39.15",
      "32.75",
      "43.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 35.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(1, 17) and point B(22, 54) in a 2D Euclidean coordinate space?",
    "options": [
      "58.00",
      "62.15",
      "72.50",
      "55.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 58.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (8), what is the predicted response variable y value for x = 79?",
    "options": [
      "1613",
      "1572",
      "1904",
      "1588"
    ],
    "answer": 3,
    "explanation": "y = 20(79) + 8 = 1588."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-12), what is the predicted response variable y value for x = 78?",
    "options": [
      "246",
      "534",
      "222",
      "247"
    ],
    "answer": 2,
    "explanation": "y = 3(78) + -12 = 222."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(49, 18) and point B(35, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "16.19",
      "22.59",
      "18.44",
      "23.05"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 18.44."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 272, FP = 19, FN = 9, and TN = 436, what is the exact Specificity?",
    "options": [
      "104.82%",
      "84.33%",
      "95.82%",
      "81.82%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=272, FP=19, FN=9, TN=436."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (4), what is the predicted response variable y value for x = 77?",
    "options": [
      "1236",
      "1228",
      "1261",
      "1544"
    ],
    "answer": 0,
    "explanation": "y = 16(77) + 4 = 1236."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(0, 17) and point B(27, 47) in a 2D Euclidean coordinate space?",
    "options": [
      "61.15",
      "57.00",
      "54.75",
      "71.25"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 57.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 274, FP = 23, FN = 33, and TN = 562, what is the exact Precision?",
    "options": [
      "81.19%",
      "101.26%",
      "78.26%",
      "92.26%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=274, FP=23, FN=33, TN=562."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(36, 21) and point B(50, 16) in a 2D Euclidean coordinate space?",
    "options": [
      "19.02",
      "14.87",
      "12.62",
      "18.58"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 14.87."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(13, 25) and point B(9, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "15.81",
      "16.80",
      "10.40",
      "12.65"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 12.65."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(17, 11) and point B(23, 6) in a 2D Euclidean coordinate space?",
    "options": [
      "7.81",
      "5.56",
      "9.76",
      "11.96"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 7.81."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (11), what is the predicted response variable y value for x = 4?",
    "options": [
      "73",
      "120",
      "95",
      "111"
    ],
    "answer": 2,
    "explanation": "y = 21(4) + 11 = 95."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(15, 5) and point B(12, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "55.00",
      "44.00",
      "41.75",
      "48.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 44.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (15), what is the predicted response variable y value for x = 12?",
    "options": [
      "69",
      "147",
      "99",
      "124"
    ],
    "answer": 2,
    "explanation": "y = 7(12) + 15 = 99."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 261, FP = 11, FN = 81, and TN = 247, what is the exact Precision?",
    "options": [
      "81.96%",
      "95.96%",
      "84.44%",
      "104.96%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=261, FP=11, FN=81, TN=247."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 279, FP = 55, FN = 17, and TN = 221, what is the exact Accuracy?",
    "options": [
      "73.41%",
      "96.41%",
      "76.92%",
      "87.41%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=279, FP=55, FN=17, TN=221."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (1), what is the predicted response variable y value for x = 89?",
    "options": [
      "2073",
      "2404",
      "2048",
      "2046"
    ],
    "answer": 2,
    "explanation": "y = 23(89) + 1 = 2048."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(38, 0) and point B(12, 39) in a 2D Euclidean coordinate space?",
    "options": [
      "46.87",
      "44.62",
      "58.59",
      "51.02"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 46.87."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (-13), what is the predicted response variable y value for x = 65?",
    "options": [
      "1352",
      "1612",
      "1377",
      "1378"
    ],
    "answer": 0,
    "explanation": "y = 21(65) + -13 = 1352."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (-20), what is the predicted response variable y value for x = 19?",
    "options": [
      "476",
      "436",
      "461",
      "512"
    ],
    "answer": 1,
    "explanation": "y = 24(19) + -20 = 436."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 66, FP = 18, FN = 39, and TN = 313, what is the exact Precision?",
    "options": [
      "69.14%",
      "87.57%",
      "64.57%",
      "78.57%"
    ],
    "answer": 3,
    "explanation": "Precision is calculated by standard formula using counts: TP=66, FP=18, FN=39, TN=313."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(48, 16) and point B(26, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "25.00",
      "22.75",
      "31.25",
      "29.15"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 25.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 197, FP = 10, FN = 56, and TN = 272, what is the exact Specificity?",
    "options": [
      "82.45%",
      "84.88%",
      "96.45%",
      "105.45%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=197, FP=10, FN=56, TN=272."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 73, FP = 47, FN = 46, and TN = 264, what is the exact Specificity?",
    "options": [
      "93.89%",
      "74.70%",
      "70.89%",
      "84.89%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=73, FP=47, FN=46, TN=264."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (7), what is the predicted response variable y value for x = 68?",
    "options": [
      "605",
      "891",
      "619",
      "644"
    ],
    "answer": 2,
    "explanation": "y = 9(68) + 7 = 619."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 75, FP = 44, FN = 18, and TN = 597, what is the exact Precision?",
    "options": [
      "72.03%",
      "49.03%",
      "63.03%",
      "55.46%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=75, FP=44, FN=18, TN=597."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 169, FP = 37, FN = 59, and TN = 499, what is the exact Recall?",
    "options": [
      "74.12%",
      "60.12%",
      "65.23%",
      "83.12%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=169, FP=37, FN=59, TN=499."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-17), what is the predicted response variable y value for x = 38?",
    "options": [
      "312",
      "287",
      "439",
      "321"
    ],
    "answer": 1,
    "explanation": "y = 8(38) + -17 = 287."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(31, 3) and point B(36, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "52.15",
      "48.00",
      "60.00",
      "45.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 48.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 86, FP = 12, FN = 7, and TN = 234, what is the exact Recall?",
    "options": [
      "101.47%",
      "78.47%",
      "92.47%",
      "81.38%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=86, FP=12, FN=7, TN=234."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3000 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "1687.5",
      "1750",
      "1500",
      "2250"
    ],
    "answer": 3,
    "explanation": "75% of 3000 is 2250. 25% is 750."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(41, 43) and point B(26, 53) in a 2D Euclidean coordinate space?",
    "options": [
      "22.53",
      "15.78",
      "18.03",
      "22.18"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 18.03."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 220, FP = 66, FN = 10, and TN = 257, what is the exact Precision?",
    "options": [
      "62.92%",
      "76.92%",
      "85.92%",
      "67.69%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=220, FP=66, FN=10, TN=257."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(16, 11) and point B(33, 51) in a 2D Euclidean coordinate space?",
    "options": [
      "54.33",
      "41.21",
      "47.61",
      "43.46"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 43.46."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11900 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "8425",
      "8925",
      "6693.75",
      "5950"
    ],
    "answer": 1,
    "explanation": "75% of 11900 is 8925. 25% is 2975."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 325, FP = 59, FN = 40, and TN = 250, what is the exact Recall?",
    "options": [
      "98.04%",
      "89.04%",
      "75.04%",
      "78.36%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=325, FP=59, FN=40, TN=250."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 10x + (-1), what is the predicted response variable y value for x = 97?",
    "options": [
      "971",
      "994",
      "1357",
      "969"
    ],
    "answer": 3,
    "explanation": "y = 10(97) + -1 = 969."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(46, 3) and point B(45, 48) in a 2D Euclidean coordinate space?",
    "options": [
      "57.50",
      "43.75",
      "50.15",
      "46.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 46.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-14), what is the predicted response variable y value for x = 81?",
    "options": [
      "662",
      "659",
      "958",
      "634"
    ],
    "answer": 3,
    "explanation": "y = 8(81) + -14 = 634."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 86, FP = 34, FN = 84, and TN = 446, what is the exact Specificity?",
    "options": [
      "101.92%",
      "92.92%",
      "78.92%",
      "81.77%"
    ],
    "answer": 1,
    "explanation": "Specificity is calculated by standard formula using counts: TP=86, FP=34, FN=84, TN=446."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5800 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "2900",
      "1160",
      "1660",
      "1450"
    ],
    "answer": 1,
    "explanation": "80% of 5800 is 4640. 20% is 1160."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 213, FP = 54, FN = 19, and TN = 262, what is the exact Recall?",
    "options": [
      "80.79%",
      "77.81%",
      "100.81%",
      "91.81%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=213, FP=54, FN=19, TN=262."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 3900 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1950",
      "1670",
      "1170",
      "1462.5"
    ],
    "answer": 2,
    "explanation": "70% of 3900 is 2730. 30% is 1170."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(11, 30) and point B(31, 35) in a 2D Euclidean coordinate space?",
    "options": [
      "22.75",
      "31.25",
      "25.00",
      "29.15"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 25.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (15), what is the predicted response variable y value for x = 32?",
    "options": [
      "712",
      "657",
      "815",
      "687"
    ],
    "answer": 3,
    "explanation": "y = 21(32) + 15 = 687."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(26, 41) and point B(32, 44) in a 2D Euclidean coordinate space?",
    "options": [
      "4.46",
      "10.86",
      "6.71",
      "8.39"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 6.71."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11100 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3330",
      "4162.5",
      "5550",
      "3830"
    ],
    "answer": 0,
    "explanation": "70% of 11100 is 7770. 30% is 3330."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(6, 40) and point B(21, 41) in a 2D Euclidean coordinate space?",
    "options": [
      "13.75",
      "16.00",
      "20.00",
      "20.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 16.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (9), what is the predicted response variable y value for x = 72?",
    "options": [
      "1521",
      "1546",
      "1503",
      "1809"
    ],
    "answer": 0,
    "explanation": "y = 21(72) + 9 = 1521."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 16300 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "8150",
      "12540",
      "13040",
      "9780"
    ],
    "answer": 2,
    "explanation": "80% of 16300 is 13040. 20% is 3260."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(43, 33) and point B(53, 52) in a 2D Euclidean coordinate space?",
    "options": [
      "25.62",
      "21.47",
      "19.22",
      "26.84"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 21.47."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-9), what is the predicted response variable y value for x = 45?",
    "options": [
      "306",
      "126",
      "151",
      "144"
    ],
    "answer": 1,
    "explanation": "y = 3(45) + -9 = 126."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (13), what is the predicted response variable y value for x = 3?",
    "options": [
      "2",
      "40",
      "28",
      "53"
    ],
    "answer": 2,
    "explanation": "y = 5(3) + 13 = 28."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18200 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "14560",
      "9100",
      "10920",
      "14060"
    ],
    "answer": 0,
    "explanation": "80% of 18200 is 14560. 20% is 3640."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(0, 33) and point B(22, 36) in a 2D Euclidean coordinate space?",
    "options": [
      "27.75",
      "19.95",
      "22.20",
      "26.35"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 22.20."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 205, FP = 55, FN = 78, and TN = 517, what is the exact Precision?",
    "options": [
      "87.85%",
      "78.85%",
      "64.85%",
      "69.38%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=205, FP=55, FN=78, TN=517."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 15x + (10), what is the predicted response variable y value for x = 52?",
    "options": [
      "815",
      "790",
      "770",
      "998"
    ],
    "answer": 1,
    "explanation": "y = 15(52) + 10 = 790."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (4), what is the predicted response variable y value for x = 6?",
    "options": [
      "47",
      "14",
      "22",
      "46"
    ],
    "answer": 2,
    "explanation": "y = 3(6) + 4 = 22."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (18), what is the predicted response variable y value for x = 93?",
    "options": [
      "2622",
      "2275",
      "2250",
      "2214"
    ],
    "answer": 2,
    "explanation": "y = 24(93) + 18 = 2250."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(28, 49) and point B(28, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "3.75",
      "7.15",
      "0.75",
      "3.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 3.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (0), what is the predicted response variable y value for x = 73?",
    "options": [
      "1391",
      "1314",
      "1339",
      "1606"
    ],
    "answer": 1,
    "explanation": "y = 18(73) + 0 = 1314."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 111, FP = 19, FN = 17, and TN = 359, what is the exact Accuracy?",
    "options": [
      "101.89%",
      "92.89%",
      "78.89%",
      "81.74%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=111, FP=19, FN=17, TN=359."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 14x + (-4), what is the predicted response variable y value for x = 14?",
    "options": [
      "192",
      "200",
      "217",
      "248"
    ],
    "answer": 0,
    "explanation": "y = 14(14) + -4 = 192."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 2900 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "1450",
      "1820",
      "2320",
      "1740"
    ],
    "answer": 2,
    "explanation": "80% of 2900 is 2320. 20% is 580."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 250, FP = 16, FN = 82, and TN = 195, what is the exact Specificity?",
    "options": [
      "92.42%",
      "81.33%",
      "78.42%",
      "101.42%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=250, FP=16, FN=82, TN=195."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 23x + (-19), what is the predicted response variable y value for x = 57?",
    "options": [
      "1292",
      "1330",
      "1520",
      "1317"
    ],
    "answer": 0,
    "explanation": "y = 23(57) + -19 = 1292."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12600 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "6615",
      "8820",
      "8320",
      "6300"
    ],
    "answer": 1,
    "explanation": "70% of 12600 is 8820. 30% is 3780."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 336, FP = 83, FN = 60, and TN = 226, what is the exact Recall?",
    "options": [
      "70.85%",
      "74.67%",
      "84.85%",
      "93.85%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=336, FP=83, FN=60, TN=226."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 135, FP = 35, FN = 5, and TN = 410, what is the exact Recall?",
    "options": [
      "96.43%",
      "84.86%",
      "82.43%",
      "105.43%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=135, FP=35, FN=5, TN=410."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7200 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "5260",
      "3600",
      "5760",
      "4320"
    ],
    "answer": 2,
    "explanation": "80% of 7200 is 5760. 20% is 1440."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(17, 13) and point B(41, 23) in a 2D Euclidean coordinate space?",
    "options": [
      "31.75",
      "38.15",
      "42.50",
      "34.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 34.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5000 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1250",
      "1000",
      "1500",
      "2500"
    ],
    "answer": 1,
    "explanation": "80% of 5000 is 4000. 20% is 1000."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (6), what is the predicted response variable y value for x = 61?",
    "options": [
      "1556",
      "1531",
      "1519",
      "1775"
    ],
    "answer": 1,
    "explanation": "y = 25(61) + 6 = 1531."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(35, 11) and point B(22, 54) in a 2D Euclidean coordinate space?",
    "options": [
      "60.15",
      "56.00",
      "70.00",
      "53.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 56.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(37, 34) and point B(52, 21) in a 2D Euclidean coordinate space?",
    "options": [
      "28.00",
      "25.75",
      "35.00",
      "32.15"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 28.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 202, FP = 51, FN = 81, and TN = 363, what is the exact Precision?",
    "options": [
      "65.84%",
      "79.84%",
      "70.26%",
      "88.84%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=202, FP=51, FN=81, TN=363."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(47, 35) and point B(37, 37) in a 2D Euclidean coordinate space?",
    "options": [
      "12.00",
      "9.75",
      "16.15",
      "15.00"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 12.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(45, 34) and point B(53, 49) in a 2D Euclidean coordinate space?",
    "options": [
      "21.15",
      "14.75",
      "17.00",
      "21.25"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 17.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(5, 7) and point B(13, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "17.50",
      "18.15",
      "11.75",
      "14.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 14.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8300 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "6640",
      "4150",
      "6140",
      "4980"
    ],
    "answer": 0,
    "explanation": "80% of 8300 is 6640. 20% is 1660."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8400 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "4200",
      "2625",
      "2600",
      "2100"
    ],
    "answer": 3,
    "explanation": "75% of 8400 is 6300. 25% is 2100."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 13x + (10), what is the predicted response variable y value for x = 4?",
    "options": [
      "87",
      "78",
      "62",
      "42"
    ],
    "answer": 2,
    "explanation": "y = 13(4) + 10 = 62."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 11600 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4350",
      "5800",
      "3480",
      "3980"
    ],
    "answer": 2,
    "explanation": "70% of 11600 is 8120. 30% is 3480."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 281, FP = 20, FN = 53, and TN = 153, what is the exact Precision?",
    "options": [
      "93.36%",
      "79.36%",
      "82.15%",
      "102.36%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=281, FP=20, FN=53, TN=153."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12800 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3200",
      "2560",
      "3060",
      "6400"
    ],
    "answer": 1,
    "explanation": "80% of 12800 is 10240. 20% is 2560."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(48, 37) and point B(39, 14) in a 2D Euclidean coordinate space?",
    "options": [
      "29.75",
      "36.15",
      "32.00",
      "40.00"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 32.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15700 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "7850",
      "10990",
      "10490",
      "8242.5"
    ],
    "answer": 1,
    "explanation": "70% of 15700 is 10990. 30% is 4710."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (6), what is the predicted response variable y value for x = 4?",
    "options": [
      "122",
      "131",
      "94",
      "106"
    ],
    "answer": 3,
    "explanation": "y = 25(4) + 6 = 106."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 19800 records. If configured with a 75/25 train/test split, how many samples are in the training set?",
    "options": [
      "9900",
      "14850",
      "11137.5",
      "14350"
    ],
    "answer": 1,
    "explanation": "75% of 19800 is 14850. 25% is 4950."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15100 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "7550",
      "5662.5",
      "4530",
      "5030"
    ],
    "answer": 2,
    "explanation": "70% of 15100 is 10570. 30% is 4530."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (1), what is the predicted response variable y value for x = 72?",
    "options": [
      "505",
      "242",
      "217",
      "215"
    ],
    "answer": 2,
    "explanation": "y = 3(72) + 1 = 217."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5500 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1375",
      "1718.75",
      "1875",
      "2750"
    ],
    "answer": 0,
    "explanation": "75% of 5500 is 4125. 25% is 1375."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 8200 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "4100",
      "3075",
      "2960",
      "2460"
    ],
    "answer": 3,
    "explanation": "70% of 8200 is 5740. 30% is 2460."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 143, FP = 34, FN = 7, and TN = 478, what is the exact Precision?",
    "options": [
      "71.10%",
      "80.79%",
      "66.79%",
      "89.79%"
    ],
    "answer": 1,
    "explanation": "Precision is calculated by standard formula using counts: TP=143, FP=34, FN=7, TN=478."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 346, FP = 38, FN = 33, and TN = 549, what is the exact Accuracy?",
    "options": [
      "78.65%",
      "101.65%",
      "81.53%",
      "92.65%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=346, FP=38, FN=33, TN=549."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 22x + (8), what is the predicted response variable y value for x = 91?",
    "options": [
      "2374",
      "2035",
      "2010",
      "1994"
    ],
    "answer": 2,
    "explanation": "y = 22(91) + 8 = 2010."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 4x + (14), what is the predicted response variable y value for x = 72?",
    "options": [
      "274",
      "327",
      "302",
      "590"
    ],
    "answer": 2,
    "explanation": "y = 4(72) + 14 = 302."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (-12), what is the predicted response variable y value for x = 3?",
    "options": [
      "48",
      "24",
      "36",
      "49"
    ],
    "answer": 1,
    "explanation": "y = 12(3) + -12 = 24."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14800 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "4200",
      "4625",
      "3700",
      "7400"
    ],
    "answer": 2,
    "explanation": "75% of 14800 is 11100. 25% is 3700."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(29, 2) and point B(50, 50) in a 2D Euclidean coordinate space?",
    "options": [
      "66.75",
      "69.00",
      "86.25",
      "73.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 69.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(20, 35) and point B(34, 42) in a 2D Euclidean coordinate space?",
    "options": [
      "13.40",
      "19.80",
      "15.65",
      "19.57"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 15.65."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 12300 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "3075",
      "6150",
      "2460",
      "2960"
    ],
    "answer": 2,
    "explanation": "80% of 12300 is 9840. 20% is 2460."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(10, 26) and point B(34, 47) in a 2D Euclidean coordinate space?",
    "options": [
      "39.86",
      "29.64",
      "36.04",
      "31.89"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 31.89."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(44, 19) and point B(5, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "38.86",
      "41.11",
      "51.39",
      "45.26"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 41.11."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (-14), what is the predicted response variable y value for x = 26?",
    "options": [
      "193",
      "196",
      "168",
      "272"
    ],
    "answer": 2,
    "explanation": "y = 7(26) + -14 = 168."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 16x + (-9), what is the predicted response variable y value for x = 53?",
    "options": [
      "857",
      "864",
      "839",
      "1051"
    ],
    "answer": 2,
    "explanation": "y = 16(53) + -9 = 839."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(6, 23) and point B(44, 34) in a 2D Euclidean coordinate space?",
    "options": [
      "61.25",
      "46.75",
      "53.15",
      "49.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 49.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4600 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "1420",
      "1150",
      "2300",
      "920"
    ],
    "answer": 3,
    "explanation": "80% of 4600 is 3680. 20% is 920."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(41, 32) and point B(54, 52) in a 2D Euclidean coordinate space?",
    "options": [
      "37.15",
      "30.75",
      "41.25",
      "33.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 33.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 13x + (-11), what is the predicted response variable y value for x = 27?",
    "options": [
      "365",
      "340",
      "362",
      "448"
    ],
    "answer": 1,
    "explanation": "y = 13(27) + -11 = 340."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(22, 16) and point B(44, 30) in a 2D Euclidean coordinate space?",
    "options": [
      "36.00",
      "40.15",
      "45.00",
      "33.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 36.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (5), what is the predicted response variable y value for x = 67?",
    "options": [
      "474",
      "742",
      "499",
      "464"
    ],
    "answer": 0,
    "explanation": "y = 7(67) + 5 = 474."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 5x + (-14), what is the predicted response variable y value for x = 41?",
    "options": [
      "191",
      "355",
      "219",
      "216"
    ],
    "answer": 0,
    "explanation": "y = 5(41) + -14 = 191."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (1), what is the predicted response variable y value for x = 63?",
    "options": [
      "1576",
      "1324",
      "1349",
      "1322"
    ],
    "answer": 1,
    "explanation": "y = 21(63) + 1 = 1324."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 328, FP = 55, FN = 51, and TN = 128, what is the exact Accuracy?",
    "options": [
      "90.14%",
      "67.14%",
      "81.14%",
      "71.40%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=328, FP=55, FN=51, TN=128."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(45, 49) and point B(34, 25) in a 2D Euclidean coordinate space?",
    "options": [
      "33.00",
      "30.55",
      "24.15",
      "26.40"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 26.40."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4600 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "1880",
      "1380",
      "1725",
      "2300"
    ],
    "answer": 1,
    "explanation": "70% of 4600 is 3220. 30% is 1380."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 14700 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "7350",
      "9790",
      "10290",
      "7717.5"
    ],
    "answer": 2,
    "explanation": "70% of 14700 is 10290. 30% is 4410."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (-1), what is the predicted response variable y value for x = 28?",
    "options": [
      "783",
      "696",
      "673",
      "671"
    ],
    "answer": 3,
    "explanation": "y = 24(28) + -1 = 671."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(27, 35) and point B(39, 21) in a 2D Euclidean coordinate space?",
    "options": [
      "23.05",
      "22.59",
      "18.44",
      "16.19"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 18.44."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 6900 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "3450",
      "2070",
      "2587.5",
      "2570"
    ],
    "answer": 1,
    "explanation": "70% of 6900 is 4830. 30% is 2070."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 219, FP = 26, FN = 28, and TN = 531, what is the exact Accuracy?",
    "options": [
      "79.28%",
      "82.09%",
      "93.28%",
      "102.28%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=219, FP=26, FN=28, TN=531."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 13x + (15), what is the predicted response variable y value for x = 61?",
    "options": [
      "808",
      "833",
      "1052",
      "778"
    ],
    "answer": 0,
    "explanation": "y = 13(61) + 15 = 808."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(11, 6) and point B(52, 41) in a 2D Euclidean coordinate space?",
    "options": [
      "51.66",
      "67.38",
      "58.06",
      "53.91"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 53.91."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 239, FP = 36, FN = 6, and TN = 306, what is the exact Specificity?",
    "options": [
      "78.74%",
      "98.47%",
      "75.47%",
      "89.47%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=239, FP=36, FN=6, TN=306."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(3, 48) and point B(19, 22) in a 2D Euclidean coordinate space?",
    "options": [
      "34.68",
      "38.16",
      "30.53",
      "28.28"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 30.53."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 347, FP = 43, FN = 27, and TN = 471, what is the exact Specificity?",
    "options": [
      "100.63%",
      "80.64%",
      "91.63%",
      "77.63%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=347, FP=43, FN=27, TN=471."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 25x + (-17), what is the predicted response variable y value for x = 46?",
    "options": [
      "1133",
      "1317",
      "1167",
      "1158"
    ],
    "answer": 0,
    "explanation": "y = 25(46) + -17 = 1133."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 268, FP = 9, FN = 10, and TN = 504, what is the exact Precision?",
    "options": [
      "85.14%",
      "105.75%",
      "96.75%",
      "82.75%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=268, FP=9, FN=10, TN=504."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(21, 48) and point B(28, 24) in a 2D Euclidean coordinate space?",
    "options": [
      "29.15",
      "22.75",
      "25.00",
      "31.25"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 25.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 104, FP = 67, FN = 81, and TN = 536, what is the exact Specificity?",
    "options": [
      "97.89%",
      "74.89%",
      "78.22%",
      "88.89%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=104, FP=67, FN=81, TN=536."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(6, 33) and point B(30, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "28.17",
      "24.02",
      "30.03",
      "21.77"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 24.02."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 75, FP = 51, FN = 8, and TN = 181, what is the exact Recall?",
    "options": [
      "90.36%",
      "76.36%",
      "79.52%",
      "99.36%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=75, FP=51, FN=8, TN=181."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(15, 6) and point B(7, 45) in a 2D Euclidean coordinate space?",
    "options": [
      "37.56",
      "49.77",
      "43.96",
      "39.81"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 39.81."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(2, 16) and point B(42, 33) in a 2D Euclidean coordinate space?",
    "options": [
      "43.46",
      "47.61",
      "41.21",
      "54.33"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 43.46."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 1400 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "920",
      "420",
      "700",
      "525"
    ],
    "answer": 1,
    "explanation": "70% of 1400 is 980. 30% is 420."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 258, FP = 68, FN = 79, and TN = 493, what is the exact Specificity?",
    "options": [
      "87.88%",
      "73.88%",
      "96.88%",
      "77.33%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=258, FP=68, FN=79, TN=493."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 252, FP = 61, FN = 64, and TN = 257, what is the exact Specificity?",
    "options": [
      "71.12%",
      "89.82%",
      "80.82%",
      "66.82%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=252, FP=61, FN=64, TN=257."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 10900 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "6540",
      "8720",
      "8220",
      "5450"
    ],
    "answer": 1,
    "explanation": "80% of 10900 is 8720. 20% is 2180."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(45, 45) and point B(17, 52) in a 2D Euclidean coordinate space?",
    "options": [
      "28.86",
      "36.08",
      "26.61",
      "33.01"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 28.86."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 7x + (2), what is the predicted response variable y value for x = 68?",
    "options": [
      "478",
      "750",
      "503",
      "474"
    ],
    "answer": 0,
    "explanation": "y = 7(68) + 2 = 478."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(44, 39) and point B(30, 28) in a 2D Euclidean coordinate space?",
    "options": [
      "21.95",
      "22.26",
      "17.80",
      "15.55"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 17.80."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (14), what is the predicted response variable y value for x = 5?",
    "options": [
      "94",
      "74",
      "46",
      "99"
    ],
    "answer": 1,
    "explanation": "y = 12(5) + 14 = 74."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 308, FP = 82, FN = 51, and TN = 524, what is the exact Accuracy?",
    "options": [
      "95.22%",
      "86.22%",
      "72.22%",
      "75.87%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=308, FP=82, FN=51, TN=524."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (16), what is the predicted response variable y value for x = 1?",
    "options": [
      "19",
      "44",
      "23",
      "-13"
    ],
    "answer": 0,
    "explanation": "y = 3(1) + 16 = 19."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 172, FP = 57, FN = 24, and TN = 342, what is the exact Accuracy?",
    "options": [
      "76.02%",
      "86.39%",
      "72.39%",
      "95.39%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=172, FP=57, FN=24, TN=342."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (6), what is the predicted response variable y value for x = 47?",
    "options": [
      "1159",
      "1122",
      "1322",
      "1134"
    ],
    "answer": 3,
    "explanation": "y = 24(47) + 6 = 1134."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-8), what is the predicted response variable y value for x = 62?",
    "options": [
      "736",
      "513",
      "504",
      "488"
    ],
    "answer": 3,
    "explanation": "y = 8(62) + -8 = 488."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 137, FP = 13, FN = 30, and TN = 542, what is the exact Accuracy?",
    "options": [
      "103.04%",
      "82.76%",
      "80.04%",
      "94.04%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=137, FP=13, FN=30, TN=542."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 218, FP = 26, FN = 43, and TN = 567, what is the exact Recall?",
    "options": [
      "69.52%",
      "83.52%",
      "73.50%",
      "92.52%"
    ],
    "answer": 1,
    "explanation": "Recall is calculated by standard formula using counts: TP=218, FP=26, FN=43, TN=567."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (3), what is the predicted response variable y value for x = 77?",
    "options": [
      "721",
      "690",
      "1004",
      "696"
    ],
    "answer": 3,
    "explanation": "y = 9(77) + 3 = 696."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (17), what is the predicted response variable y value for x = 42?",
    "options": [
      "504",
      "479",
      "647",
      "445"
    ],
    "answer": 1,
    "explanation": "y = 11(42) + 17 = 479."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 125, FP = 32, FN = 42, and TN = 278, what is the exact Recall?",
    "options": [
      "74.85%",
      "60.85%",
      "83.85%",
      "65.87%"
    ],
    "answer": 0,
    "explanation": "Recall is calculated by standard formula using counts: TP=125, FP=32, FN=42, TN=278."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(12, 31) and point B(11, 6) in a 2D Euclidean coordinate space?",
    "options": [
      "26.00",
      "32.50",
      "30.15",
      "23.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 26.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 249, FP = 13, FN = 72, and TN = 397, what is the exact Accuracy?",
    "options": [
      "88.37%",
      "97.37%",
      "74.37%",
      "77.77%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=249, FP=13, FN=72, TN=397."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (9), what is the predicted response variable y value for x = 2?",
    "options": [
      "69",
      "86",
      "43",
      "61"
    ],
    "answer": 3,
    "explanation": "y = 26(2) + 9 = 61."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 20x + (-18), what is the predicted response variable y value for x = 17?",
    "options": [
      "390",
      "358",
      "347",
      "322"
    ],
    "answer": 3,
    "explanation": "y = 20(17) + -18 = 322."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 9x + (9), what is the predicted response variable y value for x = 69?",
    "options": [
      "612",
      "906",
      "630",
      "655"
    ],
    "answer": 2,
    "explanation": "y = 9(69) + 9 = 630."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 7800 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "2437.5",
      "2450",
      "1950",
      "3900"
    ],
    "answer": 2,
    "explanation": "75% of 7800 is 5850. 25% is 1950."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 72, FP = 21, FN = 51, and TN = 156, what is the exact Accuracy?",
    "options": [
      "66.88%",
      "76.00%",
      "62.00%",
      "85.00%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=72, FP=21, FN=51, TN=156."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 138, FP = 36, FN = 72, and TN = 400, what is the exact Recall?",
    "options": [
      "57.83%",
      "74.71%",
      "65.71%",
      "51.71%"
    ],
    "answer": 2,
    "explanation": "Recall is calculated by standard formula using counts: TP=138, FP=36, FN=72, TN=400."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(22, 45) and point B(52, 38) in a 2D Euclidean coordinate space?",
    "options": [
      "46.25",
      "37.00",
      "41.15",
      "34.75"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 37.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(33, 4) and point B(17, 45) in a 2D Euclidean coordinate space?",
    "options": [
      "48.16",
      "41.76",
      "44.01",
      "55.01"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 44.01."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (-10), what is the predicted response variable y value for x = 87?",
    "options": [
      "1842",
      "1837",
      "2165",
      "1817"
    ],
    "answer": 3,
    "explanation": "y = 21(87) + -10 = 1817."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 5700 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "2850",
      "1640",
      "1140",
      "1425"
    ],
    "answer": 2,
    "explanation": "80% of 5700 is 4560. 20% is 1140."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 17x + (-18), what is the predicted response variable y value for x = 34?",
    "options": [
      "596",
      "696",
      "560",
      "585"
    ],
    "answer": 2,
    "explanation": "y = 17(34) + -18 = 560."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(35, 18) and point B(15, 24) in a 2D Euclidean coordinate space?",
    "options": [
      "20.88",
      "25.03",
      "18.63",
      "26.10"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 20.88."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(23, 0) and point B(47, 50) in a 2D Euclidean coordinate space?",
    "options": [
      "92.50",
      "71.75",
      "74.00",
      "78.15"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 74.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 73, FP = 76, FN = 74, and TN = 442, what is the exact Specificity?",
    "options": [
      "94.33%",
      "71.33%",
      "75.09%",
      "85.33%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=73, FP=76, FN=74, TN=442."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 329, FP = 38, FN = 37, and TN = 526, what is the exact Accuracy?",
    "options": [
      "91.94%",
      "100.94%",
      "80.90%",
      "77.94%"
    ],
    "answer": 0,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=329, FP=38, FN=37, TN=526."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(23, 17) and point B(6, 13) in a 2D Euclidean coordinate space?",
    "options": [
      "21.61",
      "15.21",
      "21.83",
      "17.46"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 17.46."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(25, 1) and point B(30, 29) in a 2D Euclidean coordinate space?",
    "options": [
      "33.00",
      "37.15",
      "30.75",
      "41.25"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 33.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (-5), what is the predicted response variable y value for x = 56?",
    "options": [
      "1059",
      "1283",
      "1084",
      "1069"
    ],
    "answer": 0,
    "explanation": "y = 19(56) + -5 = 1059."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 18200 records. If configured with a 80/20 train/test split, how many samples are in the testing set?",
    "options": [
      "4140",
      "3640",
      "4550",
      "9100"
    ],
    "answer": 1,
    "explanation": "80% of 18200 is 14560. 20% is 3640."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (-3), what is the predicted response variable y value for x = 57?",
    "options": [
      "1080",
      "1105",
      "1086",
      "1308"
    ],
    "answer": 0,
    "explanation": "y = 19(57) + -3 = 1080."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(8, 41) and point B(28, 35) in a 2D Euclidean coordinate space?",
    "options": [
      "32.50",
      "30.15",
      "26.00",
      "23.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 26.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (18), what is the predicted response variable y value for x = 1?",
    "options": [
      "69",
      "8",
      "48",
      "44"
    ],
    "answer": 3,
    "explanation": "y = 26(1) + 18 = 44."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (10), what is the predicted response variable y value for x = 72?",
    "options": [
      "1666",
      "1403",
      "1358",
      "1378"
    ],
    "answer": 3,
    "explanation": "y = 19(72) + 10 = 1378."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 26x + (-19), what is the predicted response variable y value for x = 13?",
    "options": [
      "371",
      "357",
      "319",
      "344"
    ],
    "answer": 2,
    "explanation": "y = 26(13) + -19 = 319."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 95, FP = 61, FN = 55, and TN = 477, what is the exact Precision?",
    "options": [
      "53.59%",
      "69.90%",
      "60.90%",
      "46.90%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=95, FP=61, FN=55, TN=477."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 13x + (-8), what is the predicted response variable y value for x = 98?",
    "options": [
      "1266",
      "1291",
      "1282",
      "1658"
    ],
    "answer": 0,
    "explanation": "y = 13(98) + -8 = 1266."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 22x + (-1), what is the predicted response variable y value for x = 29?",
    "options": [
      "662",
      "637",
      "639",
      "753"
    ],
    "answer": 1,
    "explanation": "y = 22(29) + -1 = 637."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 238, FP = 81, FN = 13, and TN = 341, what is the exact Specificity?",
    "options": [
      "80.81%",
      "66.81%",
      "89.81%",
      "71.11%"
    ],
    "answer": 0,
    "explanation": "Specificity is calculated by standard formula using counts: TP=238, FP=81, FN=13, TN=341."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 335, FP = 27, FN = 34, and TN = 311, what is the exact Accuracy?",
    "options": [
      "80.41%",
      "100.37%",
      "91.37%",
      "77.37%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=335, FP=27, FN=34, TN=311."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(49, 1) and point B(5, 39) in a 2D Euclidean coordinate space?",
    "options": [
      "62.29",
      "72.67",
      "55.89",
      "58.14"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 58.14."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(19, 19) and point B(39, 41) in a 2D Euclidean coordinate space?",
    "options": [
      "27.48",
      "33.88",
      "37.17",
      "29.73"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 29.73."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 12x + (15), what is the predicted response variable y value for x = 97?",
    "options": [
      "1179",
      "1204",
      "1567",
      "1149"
    ],
    "answer": 0,
    "explanation": "y = 12(97) + 15 = 1179."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(19, 10) and point B(35, 25) in a 2D Euclidean coordinate space?",
    "options": [
      "28.75",
      "38.75",
      "35.15",
      "31.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 31.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(41, 24) and point B(23, 31) in a 2D Euclidean coordinate space?",
    "options": [
      "31.25",
      "29.15",
      "22.75",
      "25.00"
    ],
    "answer": 3,
    "explanation": "Manhattan distance formula resolves to 25.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 76, FP = 13, FN = 30, and TN = 426, what is the exact Recall?",
    "options": [
      "57.70%",
      "63.09%",
      "80.70%",
      "71.70%"
    ],
    "answer": 3,
    "explanation": "Recall is calculated by standard formula using counts: TP=76, FP=13, FN=30, TN=426."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 8x + (-19), what is the predicted response variable y value for x = 10?",
    "options": [
      "61",
      "99",
      "86",
      "101"
    ],
    "answer": 0,
    "explanation": "y = 8(10) + -19 = 61."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 3x + (-10), what is the predicted response variable y value for x = 1?",
    "options": [
      "13",
      "18",
      "-3",
      "-7"
    ],
    "answer": 3,
    "explanation": "y = 3(1) + -10 = -7."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 144, FP = 44, FN = 39, and TN = 293, what is the exact Precision?",
    "options": [
      "62.60%",
      "85.60%",
      "76.60%",
      "67.40%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=144, FP=44, FN=39, TN=293."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(26, 31) and point B(43, 48) in a 2D Euclidean coordinate space?",
    "options": [
      "21.79",
      "30.05",
      "28.19",
      "24.04"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 24.04."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 128, FP = 80, FN = 40, and TN = 229, what is the exact Accuracy?",
    "options": [
      "60.84%",
      "83.84%",
      "74.84%",
      "65.86%"
    ],
    "answer": 2,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=128, FP=80, FN=40, TN=229."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (5), what is the predicted response variable y value for x = 64?",
    "options": [
      "1339",
      "1349",
      "1374",
      "1605"
    ],
    "answer": 1,
    "explanation": "y = 21(64) + 5 = 1349."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 57, FP = 76, FN = 58, and TN = 519, what is the exact Precision?",
    "options": [
      "42.86%",
      "28.86%",
      "51.86%",
      "37.71%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=57, FP=76, FN=58, TN=519."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 13700 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "6850",
      "3425",
      "4281.25",
      "3925"
    ],
    "answer": 1,
    "explanation": "75% of 13700 is 10275. 25% is 3425."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(21, 28) and point B(35, 46) in a 2D Euclidean coordinate space?",
    "options": [
      "28.50",
      "26.95",
      "20.55",
      "22.80"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 22.80."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(17, 40) and point B(34, 23) in a 2D Euclidean coordinate space?",
    "options": [
      "21.79",
      "30.05",
      "24.04",
      "28.19"
    ],
    "answer": 2,
    "explanation": "Euclidean distance formula resolves to 24.04."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 88, FP = 11, FN = 44, and TN = 200, what is the exact Specificity?",
    "options": [
      "103.79%",
      "80.79%",
      "94.79%",
      "83.41%"
    ],
    "answer": 2,
    "explanation": "Specificity is calculated by standard formula using counts: TP=88, FP=11, FN=44, TN=200."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(23, 32) and point B(10, 32) in a 2D Euclidean coordinate space?",
    "options": [
      "13.00",
      "10.75",
      "17.15",
      "16.25"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 13.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 11x + (14), what is the predicted response variable y value for x = 3?",
    "options": [
      "72",
      "47",
      "59",
      "19"
    ],
    "answer": 1,
    "explanation": "y = 11(3) + 14 = 47."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 147, FP = 82, FN = 22, and TN = 398, what is the exact Precision?",
    "options": [
      "64.19%",
      "50.19%",
      "73.19%",
      "56.49%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=147, FP=82, FN=22, TN=398."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (-8), what is the predicted response variable y value for x = 54?",
    "options": [
      "1018",
      "1034",
      "1043",
      "1234"
    ],
    "answer": 0,
    "explanation": "y = 19(54) + -8 = 1018."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 24x + (-6), what is the predicted response variable y value for x = 83?",
    "options": [
      "2318",
      "1998",
      "2011",
      "1986"
    ],
    "answer": 3,
    "explanation": "y = 24(83) + -6 = 1986."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 15400 records. If configured with a 80/20 train/test split, how many samples are in the training set?",
    "options": [
      "12320",
      "9240",
      "11820",
      "7700"
    ],
    "answer": 0,
    "explanation": "80% of 15400 is 12320. 20% is 3080."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 21x + (17), what is the predicted response variable y value for x = 91?",
    "options": [
      "1928",
      "1894",
      "1953",
      "2292"
    ],
    "answer": 0,
    "explanation": "y = 21(91) + 17 = 1928."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(29, 40) and point B(11, 29) in a 2D Euclidean coordinate space?",
    "options": [
      "21.10",
      "26.37",
      "18.85",
      "25.25"
    ],
    "answer": 0,
    "explanation": "Euclidean distance formula resolves to 21.10."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 17x + (-14), what is the predicted response variable y value for x = 30?",
    "options": [
      "521",
      "524",
      "616",
      "496"
    ],
    "answer": 3,
    "explanation": "y = 17(30) + -14 = 496."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(38, 32) and point B(34, 6) in a 2D Euclidean coordinate space?",
    "options": [
      "32.88",
      "26.31",
      "30.46",
      "24.06"
    ],
    "answer": 1,
    "explanation": "Euclidean distance formula resolves to 26.31."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(29, 44) and point B(13, 39) in a 2D Euclidean coordinate space?",
    "options": [
      "25.15",
      "18.75",
      "21.00",
      "26.25"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 21.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4300 records. If configured with a 70/30 train/test split, how many samples are in the training set?",
    "options": [
      "2150",
      "2510",
      "3010",
      "2257.5"
    ],
    "answer": 2,
    "explanation": "70% of 4300 is 3010. 30% is 1290."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 19x + (10), what is the predicted response variable y value for x = 82?",
    "options": [
      "1568",
      "1896",
      "1593",
      "1548"
    ],
    "answer": 0,
    "explanation": "y = 19(82) + 10 = 1568."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(14, 29) and point B(5, 7) in a 2D Euclidean coordinate space?",
    "options": [
      "27.92",
      "29.71",
      "21.52",
      "23.77"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 23.77."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 289, FP = 21, FN = 20, and TN = 106, what is the exact Precision?",
    "options": [
      "93.23%",
      "79.23%",
      "82.04%",
      "102.23%"
    ],
    "answer": 0,
    "explanation": "Precision is calculated by standard formula using counts: TP=289, FP=21, FN=20, TN=106."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 103, FP = 13, FN = 44, and TN = 250, what is the exact Accuracy?",
    "options": [
      "72.10%",
      "86.10%",
      "75.77%",
      "95.10%"
    ],
    "answer": 1,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=103, FP=13, FN=44, TN=250."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(43, 25) and point B(47, 20) in a 2D Euclidean coordinate space?",
    "options": [
      "13.15",
      "11.25",
      "9.00",
      "6.75"
    ],
    "answer": 2,
    "explanation": "Manhattan distance formula resolves to 9.00."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(28, 1) and point B(50, 31) in a 2D Euclidean coordinate space?",
    "options": [
      "65.00",
      "52.00",
      "49.75",
      "56.15"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 52.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4600 records. If configured with a 75/25 train/test split, how many samples are in the testing set?",
    "options": [
      "1437.5",
      "1150",
      "1650",
      "2300"
    ],
    "answer": 1,
    "explanation": "75% of 4600 is 3450. 25% is 1150."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(25, 12) and point B(21, 10) in a 2D Euclidean coordinate space?",
    "options": [
      "10.15",
      "6.00",
      "3.75",
      "7.50"
    ],
    "answer": 1,
    "explanation": "Manhattan distance formula resolves to 6.00."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 2x + (10), what is the predicted response variable y value for x = 91?",
    "options": [
      "556",
      "172",
      "217",
      "192"
    ],
    "answer": 3,
    "explanation": "y = 2(91) + 10 = 192."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Euclidean distance between coordinate point A(36, 36) and point B(41, 52) in a 2D Euclidean coordinate space?",
    "options": [
      "20.91",
      "14.51",
      "20.95",
      "16.76"
    ],
    "answer": 3,
    "explanation": "Euclidean distance formula resolves to 16.76."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 73, FP = 34, FN = 74, and TN = 263, what is the exact Accuracy?",
    "options": [
      "84.68%",
      "61.68%",
      "66.59%",
      "75.68%"
    ],
    "answer": 3,
    "explanation": "Accuracy is calculated by standard formula using counts: TP=73, FP=34, FN=74, TN=263."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 173, FP = 69, FN = 10, and TN = 393, what is the exact Specificity?",
    "options": [
      "71.06%",
      "94.06%",
      "74.86%",
      "85.06%"
    ],
    "answer": 3,
    "explanation": "Specificity is calculated by standard formula using counts: TP=173, FP=69, FN=10, TN=393."
  },
  {
    "subject": "AI / ML",
    "topic": "Evaluation Metrics",
    "difficulty": "Medium",
    "question": "Given a classification report with TP = 94, FP = 59, FN = 28, and TN = 260, what is the exact Precision?",
    "options": [
      "47.44%",
      "54.07%",
      "61.44%",
      "70.44%"
    ],
    "answer": 2,
    "explanation": "Precision is calculated by standard formula using counts: TP=94, FP=59, FN=28, TN=260."
  },
  {
    "subject": "AI / ML",
    "topic": "Data Splitting",
    "difficulty": "Easy",
    "question": "A machine learning pipeline is partitioning a dataset of 4000 records. If configured with a 70/30 train/test split, how many samples are in the testing set?",
    "options": [
      "2000",
      "1700",
      "1500",
      "1200"
    ],
    "answer": 3,
    "explanation": "70% of 4000 is 2800. 30% is 1200."
  },
  {
    "subject": "AI / ML",
    "topic": "Linear Regression",
    "difficulty": "Easy",
    "question": "For a linear regression model parameterized as y = 18x + (6), what is the predicted response variable y value for x = 67?",
    "options": [
      "1212",
      "1200",
      "1237",
      "1480"
    ],
    "answer": 0,
    "explanation": "y = 18(67) + 6 = 1212."
  },
  {
    "subject": "AI / ML",
    "topic": "KNN & Clustering",
    "difficulty": "Medium",
    "question": "What is the Manhattan distance between coordinate point A(15, 42) and point B(11, 40) in a 2D Euclidean coordinate space?",
    "options": [
      "6.00",
      "7.50",
      "10.15",
      "3.75"
    ],
    "answer": 0,
    "explanation": "Manhattan distance formula resolves to 6.00."
  }
];
