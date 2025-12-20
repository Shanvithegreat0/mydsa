import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const undergroundSystemLesson = {
  id: 'underground-system',
  chapterId: 29,
  title: "Design Underground System",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Subway Stats",
        paragraphs: [
          "Shanvi, track passenger travel times.",
          "checkIn(id, station, time).",
          "checkOut(id, station, time).",
          "getAverageTime(startStation, endStation)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Need to store pending trips?",
        options: [
          { text: "No", feedback: "How to calculate duration?" },
          { text: "Yes", feedback: "Correct! Map ID -> (StartStation, StartTime)." },
          { text: "Store everything in one list", feedback: "Slow." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "List of Trips.",
        issues: [
          "Store every completed trip in a list.",
          "getAverage: Iterate list, filter by start/end, calculate mean.",
          "O(N) for getAverage.",
          "Too slow if many queries."
        ],
        codeSnippet: `
for trip in trips: if match sum+=t
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Two Maps.",
        paragraphs: [
          "1. `checkInMap`: ID -> {Station, Time}. Tracks active travelers.",
          "2. `statsMap`: String(Start+End) -> {TotalTime, Count}. Aggregates data.",
          "CheckOut: Look up ID, calc diff, update statsMap, remove from checkInMap.",
          "GetAverage: O(1) lookup in statsMap."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "Pair classes.",
          "checkIn: put to map.",
          "checkOut: get start info, key = start + '-' + end. Update stats.",
          "getAverage: total / count."
        ],
        codeLines: [
          "class UndergroundSystem {",
          "    Map<Integer, Pair<String, Integer>> checkIns = new HashMap<>();",
          "    Map<String, Pair<Double, Integer>> stats = new HashMap<>();",
          "    public void checkIn(int id, String stationName, int t) {",
          "        checkIns.put(id, new Pair<>(stationName, t));",
          "    }",
          "    public void checkOut(int id, String stationName, int t) {",
          "        Pair<String, Integer> start = checkIns.remove(id);",
          "        String route = start.getKey() + \"->\" + stationName;",
          "        int duration = t - start.getValue();",
          "        Pair<Double, Integer> stat = stats.getOrDefault(route, new Pair<>(0.0, 0));",
          "        stats.put(route, new Pair<>(stat.getKey() + duration, stat.getValue() + 1));",
          "    }",
          "    public double getAverageTime(String startStation, String endStation) {",
          "        Pair<Double, Integer> stat = stats.get(startStation + \"->\" + endStation);",
          "        return stat.getKey() / stat.getValue();",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "ID 45: In A(10), Out B(20).",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "CheckIn 45. Map: {45: (A, 10)}." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "CheckOut 45 at B(20). Diff=10. Route A->B. Stats: {A->B: (10, 1)}." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "ID 20: In A(5), Out B(25). Diff=20. Stats: {A->B: (30, 2)}." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Avg: 30/2 = 15." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Mind the gap.",
        takeaways: [
          "Data aggregation pattern.",
          "O(1) for all ops.",
          "Separation of active state vs historical stats."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Concurrency?",
        task: "Thread safety?",
        solution: "ConcurrentHashMap. Atomic updates for stats (or synchronized block).",
        explanation: "Real systems are concurrent."
      }
    }
  ]
};
