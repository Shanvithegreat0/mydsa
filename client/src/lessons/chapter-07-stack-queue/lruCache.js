import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const lruCacheLesson = {
  id: 'lru-cache',
  chapterId: 7,
  title: "LRU Cache",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "The Bookshelf",
        paragraphs: [
          "Shanvi, imagine a small shelf that holds 3 books.",
          "When you read a book, you put it at the front.",
          "When you buy a new book and the shelf is full, you throw away the one at the back (Least Recently Used).",
          "This is an LRU Cache."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Shelf: [A, B, C] (A is newest). Read C. Shelf becomes?",
        options: [
          { text: "[C, A, B]", feedback: "Correct! C moves to front." },
          { text: "[A, B, C]", feedback: "C was just used!" },
          { text: "[A, C, B]", feedback: "Order matters." }
        ],
        correctIndex: 0
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Array or List?",
        issues: [
          "Moving an element to the front of an array takes O(N).",
          "Searching in a list takes O(N).",
          "We need O(1) for both Get and Put."
        ],
        codeSnippet: `
list.remove(obj);
list.add(0, obj); // O(N)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "HashMap + Doubly Linked List.",
        paragraphs: [
          "HashMap gives O(1) access to the node.",
          "Doubly Linked List allows O(1) removal and insertion.",
          "Map stores {Key -> Node}.",
          "List stores Nodes in order of usage (Head=Newest, Tail=Oldest)."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "The Design.",
        explanations: [
          "Node class: key, val, prev, next.",
          "Get: Check map. If exists, move node to head, return val.",
          "Put: If exists, update val, move to head. If new, add to head. If capacity exceeded, remove tail."
        ],
        codeLines: [
          "class LRUCache {",
          "    class Node { int key, val; Node prev, next; }",
          "    // ... Map<Integer, Node> map ...",
          "    // ... addNode(node), removeNode(node) ...",
          "    public int get(int key) {",
          "        if (map.containsKey(key)) {",
          "            Node node = map.get(key);",
          "            removeNode(node);",
          "            addNode(node);",
          "            return node.val;",
          "        }",
          "        return -1;",
          "    }",
          "    // ... put logic ...",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Cache operations.",
        frames: [
          { array: [1, 2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Put(1), Put(2). List: 2->1." },
          { array: [1, 2], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Get(1). Move 1 to head. List: 1->2." },
          { array: [1, 2, 3], highlightIndex: 2, currentSum: 0, maxSum: 0, explanation: "Put(3). Cap 2. Remove Tail(2). Add 3. List: 3->1." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Keep it fresh.",
        takeaways: [
          "Combining data structures (Map + DLL) creates powerful systems.",
          "Used heavily in databases, operating systems, and web servers.",
          "O(1) is the gold standard for caches."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "LFU Cache?",
        task: "Least Frequently Used.",
        solution: "Much harder. Needs multiple lists or a frequency map.",
        explanation: "Tracks how many times an item is used, not just when."
      }
    }
  ]
};
