// DSA Problem Solutions Database
// Each problem has multiple solution approaches in different languages

export const dsaSolutions = {
  "Two Sum": {
    Python: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Example Usage:
nums = [2, 7, 11, 15]
target = 9
print(twoSum(nums, target))  # Output: [0, 1]`,
    JavaScript: `function twoSum(nums, target) {
    const seen = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in seen) {
            return [seen[complement], i];
        }
        seen[nums[i]] = i;
    }
    return [];
}

// Example Usage:
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));  // Output: [0, 1]`,
    Java: `public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }
}`,
    "C++": `#include <unordered_map>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.find(complement) != seen.end()) {
            return {seen[complement], i};
        }
        seen[nums[i]] = i;
    }
    return {};
}`,
  },
  "Reverse Array": {
    Python: `def reverseArray(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

# Example Usage:
arr = [1, 2, 3, 4, 5]
print(reverseArray(arr))  # Output: [5, 4, 3, 2, 1]`,
    JavaScript: `function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// Example Usage:
const arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));  // Output: [5, 4, 3, 2, 1]`,
    Java: `public class Solution {
    public void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}`,
  },
  "Rotate Array": {
    Python: `def rotateArray(arr, k):
    k = k % len(arr)
    def reverse(arr, start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
    
    reverse(arr, 0, len(arr) - 1)
    reverse(arr, 0, k - 1)
    reverse(arr, k, len(arr) - 1)
    return arr

# Example Usage:
arr = [1, 2, 3, 4, 5]
k = 2
print(rotateArray(arr, k))  # Output: [4, 5, 1, 2, 3]`,
    JavaScript: `function rotateArray(arr, k) {
    k = k % arr.length;
    const reverse = (start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    
    reverse(0, arr.length - 1);
    reverse(0, k - 1);
    reverse(k, arr.length - 1);
    return arr;
}

// Example Usage:
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr, k));  // Output: [4, 5, 1, 2, 3]`,
  },
  "Remove Duplicates": {
    Python: `def removeDuplicates(nums):
    if len(nums) == 0:
        return 0
    
    i = 0
    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]
    
    return i + 1

# Example Usage:
nums = [1, 1, 2, 2, 2, 3]
length = removeDuplicates(nums)
print(length, nums[:length])  # Output: 3 [1, 2, 3]`,
    JavaScript: `function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

// Example Usage:
const nums = [1, 1, 2, 2, 2, 3];
const length = removeDuplicates(nums);
console.log(length, nums.slice(0, length));  // Output: 3, [1, 2, 3]`,
  },
  "Maximum Subarray": {
    Python: `def maxSubarray(nums):
    max_sum = nums[0]
    current_sum = nums[0]
    
    for i in range(1, len(nums)):
        current_sum = max(nums[i], current_sum + nums[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# Example Usage:
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(maxSubarray(nums))  # Output: 6 (subarray [4, -1, 2, 1])`,
    JavaScript: `function maxSubarray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Example Usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(nums));  // Output: 6`,
  },
  "Reverse Linked List": {
    Python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    prev = None
    current = head
    
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    
    return prev

# Example Usage:
# Create list: 1 -> 2 -> 3
head = ListNode(1, ListNode(2, ListNode(3)))
reversed_head = reverseList(head)
# Reversed: 3 -> 2 -> 1`,
    JavaScript: `class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}`,
    Java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

public class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;
        
        while (current != null) {
            ListNode nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        
        return prev;
    }
}`,
    "C++": `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int val) : val(val), next(NULL) {}
};

class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = NULL;
        ListNode* current = head;
        
        while (current) {
            ListNode* nextTemp = current->next;
            current->next = prev;
            prev = current;
            current = nextTemp;
        }
        
        return prev;
    }
};`,
  },
  "Palindrome String": {
    Python: `def isPalindrome(s):
    # Remove non-alphanumeric and convert to lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

# Example Usage:
s = "A man, a plan, a canal: Panama"
print(isPalindrome(s))  # Output: True`,
    JavaScript: `function isPalindrome(s) {
    // Remove non-alphanumeric and convert to lowercase
    const cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

// Example Usage:
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));  // Output: true`,
    Java: `public class Solution {
    public boolean isPalindrome(String s) {
        String cleaned = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        int left = 0, right = cleaned.length() - 1;
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}`,
    "C++": `#include <string>
#include <cctype>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        string cleaned = "";
        for (char c : s) {
            if (isalnum(c)) {
                cleaned += tolower(c);
            }
        }
        int left = 0, right = cleaned.length() - 1;
        while (left < right) {
            if (cleaned[left] != cleaned[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};`,
  },
  "Valid Parentheses": {
    Python: `def isValid(s):
    stack = []
    pairs = {'(': ')', '[': ']', '{': '}'}
    
    for char in s:
        if char in pairs:
            stack.append(char)
        else:
            if not stack or pairs[stack.pop()] != char:
                return False
    
    return len(stack) == 0

# Example Usage:
s = "({[]})"
print(isValid(s))  # Output: True`,
    JavaScript: `function isValid(s) {
    const stack = [];
    const pairs = {'(': ')', '[': ']', '{': '}'};
    
    for (const char of s) {
        if (char in pairs) {
            stack.push(char);
        } else {
            if (stack.length === 0 || pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Example Usage:
const s = "({[]})";
console.log(isValid(s));  // Output: true`,
    Java: `import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c == ')' && top != '(') || 
                    (c == ']' && top != '[') || 
                    (c == '}' && top != '{')) {
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}`,
    "C++": `#include <stack>
#include <string>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st;
        for (char c : s) {
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            } else {
                if (st.empty()) return false;
                char top = st.top();
                st.pop();
                if ((c == ')' && top != '(') || 
                    (c == ']' && top != '[') || 
                    (c == '}' && top != '{')) {
                    return false;
                }
            }
        }
        return st.empty();
    }
};`,
  },
  "Inorder Traversal": {
    Python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root):
    result = []
    
    def traverse(node):
        if not node:
            return
        traverse(node.left)
        result.append(node.val)
        traverse(node.right)
    
    traverse(root)
    return result

# Example Usage:
root = TreeNode(1, TreeNode(2), TreeNode(3))
print(inorderTraversal(root))  # Output: [2, 1, 3]`,
    JavaScript: `class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
}

// Example Usage:
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(inorderTraversal(root));  // Output: [2, 1, 3]`,
    Java: `class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

public class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        traverse(root, result);
        return result;
    }
    
    private void traverse(TreeNode node, List<Integer> result) {
        if (node == null) return;
        traverse(node.left, result);
        result.add(node.val);
        traverse(node.right, result);
    }
}`,
    "C++": `#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val) : val(val), left(NULL), right(NULL) {}
};

class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        vector<int> result;
        traverse(root, result);
        return result;
    }
    
private:
    void traverse(TreeNode* node, vector<int>& result) {
        if (!node) return;
        traverse(node->left, result);
        result.push_back(node->val);
        traverse(node->right, result);
    }
};`,
  },
  "Best Time to Buy and Sell Stock": {
    Python: `def maxProfit(prices):
    if not prices:
        return 0
    min_price = prices[0]
    max_profit = 0
    for price in prices:
        max_profit = max(max_profit, price - min_price)
        min_price = min(min_price, price)
    return max_profit

# Example Usage:
prices = [7, 1, 5, 3, 6, 4]
print(maxProfit(prices))  # Output: 5`,
    JavaScript: `function maxProfit(prices) {
    if (!prices.length) return 0;
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let price of prices) {
        maxProfit = Math.max(maxProfit, price - minPrice);
        minPrice = Math.min(minPrice, price);
    }
    return maxProfit;
}

// Example Usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));  // Output: 5`,
    Java: `public class Solution {
    public int maxProfit(int[] prices) {
        if (prices.length == 0) return 0;
        int minPrice = prices[0];
        int maxProfit = 0;
        for (int price : prices) {
            maxProfit = Math.max(maxProfit, price - minPrice);
            minPrice = Math.min(minPrice, price);
        }
        return maxProfit;
    }
}`,
    "C++": `int maxProfit(vector<int>& prices) {
    if (prices.empty()) return 0;
    int minPrice = prices[0];
    int maxProfit = 0;
    for (int price : prices) {
        maxProfit = max(maxProfit, price - minPrice);
        minPrice = min(minPrice, price);
    }
    return maxProfit;
}`,
  },
  "Contains Duplicate": {
    Python: `def containsDuplicate(nums):
    return len(nums) != len(set(nums))

# Example Usage:
nums = [1, 2, 3, 1]
print(containsDuplicate(nums))  # Output: True`,
    JavaScript: `function containsDuplicate(nums) {
    return new Set(nums).size !== nums.length;
}

// Example Usage:
const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));  // Output: true`,
    Java: `public boolean containsDuplicate(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int num : nums) {
        if (set.contains(num)) return true;
        set.add(num);
    }
    return false;
}`,
    "C++": `bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> s(nums.begin(), nums.end());
    return s.size() != nums.size();
}`,
  },
  "Palindrome String Match": {
    Python: `def isPalindrome(s):
    s = ''.join(c.lower() for c in s if c.isalnum())
    return s == s[::-1]

# Example Usage:
s = "A man, a plan, a canal: Panama"
print(isPalindrome(s))  # Output: True`,
    JavaScript: `function isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

// Example Usage:
const s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));  // Output: true`,
    Java: `public class Solution {
    public boolean isPalindrome(String s) {
        String clean = s.toLowerCase().replaceAll("[^a-z0-9]", "");
        int left = 0, right = clean.length() - 1;
        while (left < right) {
            if (clean.charAt(left) != clean.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}`,
    "C++": `#include <string>
#include <cctype>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {
        string clean = "";
        for (char c : s) {
            if (isalnum(c)) {
                clean += tolower(c);
            }
        }
        int left = 0, right = clean.length() - 1;
        while (left < right) {
            if (clean[left] != clean[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};`,
  },
};

// Get solution for a specific problem in a specific language
export const getSolution = (problemName, language) => {
  const solutions = dsaSolutions[problemName] || {};
  
  // First try exact language match
  if (solutions[language]) {
    return solutions[language];
  }
  
  // Fallback: Try Python if available
  if (solutions['Python']) {
    return solutions['Python'];
  }
  
  // Fallback: Try any available language
  const availableLangs = Object.keys(solutions);
  if (availableLangs.length > 0) {
    return solutions[availableLangs[0]];
  }
  
  // Last resort: Generic template
  return `// Solution for ${problemName} in ${language}\n// Implementation coming soon!\n\n// Example approach:\n// 1. Understand the problem\n// 2. Plan your approach\n// 3. Code the solution\n// 4. Test with examples\n\nfunction solve() {\n  // Write your code here\n}\n\n// Test case\nconsole.log(solve()); // Expected output`;
};

// Get all available languages for a problem
export const getAvailableLanguages = (problemName) => {
  return Object.keys(dsaSolutions[problemName] || {});
};
