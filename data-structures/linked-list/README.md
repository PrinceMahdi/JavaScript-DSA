# Linked List

- A list full of elements that are linked to each other
- Every element knows about the next element in line
- This allows for efficient resizing and insertion at start and end of the list

- [5, "hi", 8, 11]

  - 5 is linked to "hi", "hi" is linked to 8, etc.

- The elements in a linked list are typically called "nodes"
- The example above has 4 nodes
- Typically, you have to keep track of the first element in the linked list (head node) and the last element (tail node)

# Why would you want to use a linked list?

- It helps with memory management
  - You don't have to specify the the size in advance
- javaScript has dynamic arrays (built in dynamic re-sizing) therefore memory isn't the primary issue in JS apps
- Linked lists are useful if you have a lot of insertions at the beginning of lists (linked lists are faster at this than arrays)

## Time & Space Complexity

![Big-O Complexity Chart](https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg)
|                  | Linked List                               | Arrays         |
| ---------------- | ----------------------------------------- | -------------- |
| Element Access   | O(n)                                      | O(1)           |
| Insertion at the End | With tail: O(1) <br /> Without tail: O(n) | O(1) |
| Insertion at the Beginning  | O(1)                            | O(n) |
| Insertion at the Middle  | Search time + O(1)                            | O(n) |
| Search Elements  | O(n)                            | O(n) |
