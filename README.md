# Javascript: Unexpected NaN with Undefined Inputs

This repository demonstrates a common JavaScript error: unexpected NaN results when using undefined values in arithmetic operations. The original code fails to explicitly handle undefined inputs, leading to incorrect NaN outputs. The solution provides a corrected version that explicitly checks for and handles undefined values, ensuring more robust and reliable arithmetic operations.

## Bug
The original `foo` function checks for `null` values, but not `undefined` values. When called with `undefined`, it results in `NaN`. 

## Solution
The improved `foo` function adds an explicit check for `undefined`, providing more accurate and predictable behavior.