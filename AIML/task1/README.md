# AIML Task 1

A simple logistic regression model to predict machine failures based on operational parameters.

## Dataset

The dataset contains 10,000 industrial machine operations with measurements like temperature, rotational speed, torque, and tool wear. About 3.4% of operations result in failures.

## What it does

The model predicts whether a machine operation will fail (binary classification). It uses logistic regression with balanced class weights to handle the imbalanced dataset.

## Running the notebook

1. Make sure `Dataset.csv` is in the same folder as the notebook
2. Open `task1.ipynb` 
3. Run all cells from top to bottom
4. The model trains automatically and shows evaluation metrics

## Results

The model achieves 82% recall, meaning it catches about 82% of actual failures. Precision is lower (14%) because the model is tuned to avoid missing failures, even if it means some false alarms.

## Files

- `task1.ipynb` - main notebook with all code and explanations
- `Dataset.csv` - machine operations data
- `README.md` - this file
