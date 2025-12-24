# Task 2

A notebook that identifies why a binary classification model reported misleading high accuracy.

## Problem

The original model achieved near-perfect accuracy on an imbalanced dataset. This notebook shows why that result was unreliable.

## Key Issue

Target leakage: one feature (feature_4) was identical to the target variable, so the model wasn't actually learning patterns—it was just copying the answer.

## What Was Done

1. Identified that feature_4 contained the target labels
2. Removed the leaked feature
3. Re-evaluated the model on clean features
4. Showed that without the leaked feature, the model defaults to predicting the majority class
5. Demonstrated why accuracy alone is misleading for imbalanced data
