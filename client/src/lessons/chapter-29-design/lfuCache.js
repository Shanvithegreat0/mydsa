import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const lfuCacheLesson = {
  id: 'lfu-cache-design',
  chapterId: 29,
  title: "Design LFU Cache",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Frequency Matters",
        paragraphs: [
          "Shanvi, LRU evicts the oldest timestamp.",
          "LFU (Least Frequently Used) evicts the item with the lowest usage count.",
          "If tie, evict LRU among them.",
          "All O(1)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "A(1 use), B(5 uses), C(1 use). Evict?",
        options: [
          { text: "B", feedback: "Most used." },
          { text: "A or C", feedback: "Correct! Tie-break with LRU." },
          { text: "Random", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Priority Queue?",
        issues: [
          "Store items in Min-Heap by frequency.",
          "get() updates frequency -> Heap re-heapify takes O(log N).",
          "We need O(1)."
        ],
        codeSnippet: `
heap.update(node) // O(log N)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Three Maps.",
        paragraphs: [
          "1. `keyMap`: Key -> Node (val, freq).",
          "2. `freqMap`: Freq -> DoublyLinkedList (of Nodes).",
          "3. `minFreq`: Tracks the current minimum frequency.",
          "On Access: Remove node from freqMap[f], add to freqMap[f+1]. Update minFreq if needed."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Node: k, v, freq.",
          "freqMap stores a DLL for each frequency.",
          "get(key): remove from freq list, freq++, add to new freq list.",
          "put(key): if new, add to freq=1 list. minFreq=1. If full, remove from minFreq list."
        ],
        codeLines: [
          "class LFUCache {",
          "    // Node, DLL classes omitted for brevity",
          "    Map<Integer, Node> keyMap;",
          "    Map<Integer, DLL> freqMap;",
          "    int minFreq, cap;",
          "    public int get(int key) {",
          "        if(!keyMap.containsKey(key)) return -1;",
          "        Node node = keyMap.get(key);",
          "        update(node);",
          "        return node.val;",
          "    }",
          "    private void update(Node node) {",
          "        freqMap.get(node.freq).remove(node);",
          "        if(node.freq == minFreq && freqMap.get(node.freq).size == 0) minFreq++;",
          "        node.freq++;",
          "        freqMap.computeIfAbsent(node.freq, k->new DLL()).add(node);",
          "    }",
          "    // put logic similar...",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Cap: 2.",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "put(1,1). Freq 1 List: [1]. minFreq=1." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "put(2,2). Freq 1 List: [2, 1]. minFreq=1." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "get(1). 1 moves to Freq 2 List. Freq 1: [2]. Freq 2: [1]. minFreq=1." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "put(3,3). Full. Evict minFreq(1) -> 2. Freq 1: [3]. Freq 2: [1]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Popularity contest.",
        takeaways: [
          "Complex state management.",
          "O(1) achieved by bucketing items by frequency.",
          "Harder than LRU."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Aging?",
        task: "Prevent cache pollution?",
        solution: "LFU suffers if an item was popular long ago. Use aging (decay frequency).",
        explanation: "Real-world LFU."
      }
    }
  ]
};
