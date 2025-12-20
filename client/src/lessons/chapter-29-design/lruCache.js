import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const lruCacheLesson = {
  id: 'lru-cache-design',
  chapterId: 29,
  title: "Design LRU Cache",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Memory Management",
        paragraphs: [
          "Shanvi, design a cache with capacity C.",
          "get(key): Return value if exists, else -1.",
          "put(key, value): Update or insert. If full, evict the Least Recently Used item.",
          "All operations must be O(1)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "What data structure gives O(1) access AND O(1) ordering?",
        options: [
          { text: "ArrayList", feedback: "Shift is O(N)." },
          { text: "HashMap + Doubly Linked List", feedback: "Correct! Map for access, DLL for order." },
          { text: "TreeMap", feedback: "O(log N)." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "List + Map.",
        issues: [
          "Use a List to store keys in order.",
          "When accessing, remove from list and add to end (O(N)).",
          "Too slow for high-frequency caches."
        ],
        codeSnippet: `
list.remove(key); list.add(key);
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Doubly Linked List.",
        paragraphs: [
          "Map stores Key -> Node.",
          "Node contains Key, Value, Prev, Next.",
          "Head = Most Recently Used. Tail = Least Recently Used.",
          "On Access: Move Node to Head (O(1) pointer changes).",
          "On Evict: Remove Tail (O(1))."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Node class.",
          "Map<Integer, Node>.",
          "Head and Tail dummy nodes.",
          "addNode(node): Add to head.",
          "removeNode(node): Unlink.",
          "moveToHead(node): remove + add.",
          "put: if exists, update & move. If new, add. If full, remove tail & delete from map."
        ],
        codeLines: [
          "class LRUCache {",
          "    class Node { int k, v; Node p, n; Node(int k, int v){this.k=k;this.v=v;} }",
          "    Map<Integer, Node> map = new HashMap<>();",
          "    Node head = new Node(0,0), tail = new Node(0,0);",
          "    int cap;",
          "    public LRUCache(int capacity) {",
          "        this.cap = capacity;",
          "        head.n = tail; tail.p = head;",
          "    }",
          "    private void remove(Node node) { node.p.n = node.n; node.n.p = node.p; }",
          "    private void insert(Node node) { node.n = head.n; node.n.p = node; head.n = node; node.p = head; }",
          "    public int get(int key) {",
          "        if(!map.containsKey(key)) return -1;",
          "        Node node = map.get(key);",
          "        remove(node); insert(node);",
          "        return node.v;",
          "    }",
          "    public void put(int key, int value) {",
          "        if(map.containsKey(key)) remove(map.get(key));",
          "        if(map.size() == cap) { remove(tail.p); map.remove(tail.p.k); }",
          "        Node node = new Node(key, value);",
          "        insert(node); map.put(key, node);",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Cap: 2.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "put(1,1). List: Head->(1,1)->Tail." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "put(2,2). List: Head->(2,2)->(1,1)->Tail." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "get(1). Move 1 to head. List: Head->(1,1)->(2,2)->Tail." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "put(3,3). Full. Evict Tail (2). List: Head->(3,3)->(1,1)->Tail." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Fresh is best.",
        takeaways: [
          "Standard interview question.",
          "Combining data structures is powerful.",
          "Java's LinkedHashMap can do this automatically (accessOrder=true)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Thread Safe?",
        task: "Make it thread-safe?",
        solution: "Use ReentrantReadWriteLock or ConcurrentHashMap (but linking is tricky). Synchronized methods.",
        explanation: "Concurrency."
      }
    }
  ]
};
