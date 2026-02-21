export const companyCodingProblems = {
  Amazon: [
    {
      id: 'amz-1',
      title: 'Two Sum (Easy)',
      difficulty: 'Easy',
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
      link: 'https://leetcode.com/problems/two-sum/'
    },
    {
      id: 'amz-2',
      title: 'Copy List with Random Pointer (Medium)',
      difficulty: 'Medium',
      description: 'A linked list where each node has a random pointer; create a deep copy.',
      link: 'https://leetcode.com/problems/copy-list-with-random-pointer/'
    },
    {
      id: 'amz-3',
      title: 'Merge k Sorted Lists (Hard)',
      difficulty: 'Hard',
      description: 'Merge k sorted linked lists and return it as one sorted list.',
      link: 'https://leetcode.com/problems/merge-k-sorted-lists/'
    }
  ],
  TCS: [
    {
      id: 'tcs-1',
      title: 'Array Rotation Problem (Easy)',
      difficulty: 'Easy',
      description: 'Rotate array elements by k steps to the right.',
      link: 'https://www.geeksforgeeks.org/rotate-array-k-times/'
    },
    {
      id: 'tcs-2',
      title: 'Balanced Parentheses (Medium)',
      difficulty: 'Medium',
      description: 'Check if parentheses in an expression are balanced using stack.',
      link: 'https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1'
    }
  ],
  Microsoft: [
    {
      id: 'ms-1',
      title: 'Product of Array Except Self (Medium)',
      difficulty: 'Medium',
      description: 'Return an array output such that output[i] is the product of all the elements of nums except nums[i].',
      link: 'https://leetcode.com/problems/product-of-array-except-self/'
    },
    {
      id: 'ms-2',
      title: 'Kth Smallest Element in a BST (Medium)',
      difficulty: 'Medium',
      description: 'Find the kth smallest element in a BST.',
      link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/'
    }
  ],
  Google: [
    {
      id: 'goog-1',
      title: 'Longest Consecutive Sequence (Hard)',
      difficulty: 'Hard',
      description: 'Find the length of the longest consecutive elements sequence.',
      link: 'https://leetcode.com/problems/longest-consecutive-sequence/'
    },
    {
      id: 'goog-2',
      title: 'Sliding Window Maximum (Hard)',
      difficulty: 'Hard',
      description: 'Given an array and sliding window size k, return max of each subarray.',
      link: 'https://leetcode.com/problems/sliding-window-maximum/'
    }
  ],
  Infosys: [
    {
      id: 'infy-1',
      title: 'Reverse a Linked List (Easy)',
      difficulty: 'Easy',
      description: 'Reverse a singly linked list.',
      link: 'https://leetcode.com/problems/reverse-linked-list/'
    }
  ]
};

// Generic fallback problems
export const genericCodingProblems = [
  {
    id: 'gen-1',
    title: 'Binary Search (Easy)',
    difficulty: 'Easy',
    description: 'Implement binary search to find target in sorted array.',
    link: 'https://leetcode.com/problems/binary-search/'
  },
  {
    id: 'gen-2',
    title: 'Merge Sort (Medium)',
    difficulty: 'Medium',
    description: 'Implement merge sort and explain time complexity.',
    link: 'https://www.geeksforgeeks.org/merge-sort/'
  }
];

export default companyCodingProblems;
