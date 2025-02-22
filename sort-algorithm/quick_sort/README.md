# Quick sort

> Ref: https://www.geeksforgeeks.org/quick-sort-algorithm/

### QuickSort Algorithm Overview
- **Principle**: Based on divide and conquer, breaking down the problem into smaller sub-problems.
- **Steps**:
  1. **Choose a Pivot**: Select an element as the pivot (e.g., first, last, random, or median).
  2. **Partition the Array**: Rearrange the array around the pivot, placing it in its correct position.
  3. **Recursively Call**: Apply the same process to the sub-arrays on the left and right of the pivot.

### Partition Algorithms
- **Naive Partition**: Creates a copy of the array, requiring extra space.
- **Lomuto Partition**: Simple algorithm, keeps track of smaller elements and swaps.
- **Hoare’s Partition**: Fastest, traverses from both sides and swaps elements.

### Complexity Analysis
- **Time Complexity**:
  - Best Case: $$\Omega(n \log n)$$
  - Average Case: $$\Theta(n \log n)$$
  - Worst Case: $$O(n^2)$$
- **Auxiliary Space**: $$O(n)$$ due to the recursive call stack.

### Advantages
- Efficient on large datasets.
- Low overhead and cache-friendly.
- Fastest general-purpose algorithm for large data when stability is not required.

### Disadvantages
- Worst-case time complexity of $$O(n^2)$$.
- Not suitable for small datasets.
- Not a stable sort.

### Applications
- Sorting large datasets.
- Partitioning problems like finding the kth smallest element.
- Used in cryptography and parallelized for multi-core systems.
