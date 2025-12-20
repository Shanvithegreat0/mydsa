import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const minPlatformsLesson = {
  id: 'min-platforms',
  chapterId: 14,
  title: "Minimum Platforms",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Train Station Chaos",
        paragraphs: [
          "Shanvi, trains are arriving and departing all day.",
          "If two trains are at the station at the same time, they need different platforms.",
          "What is the MINIMUM number of platforms needed so no train has to wait?"
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "Train A: 9:00-10:00. Train B: 9:30-10:30. Platforms?",
        options: [
          { text: "1", feedback: "Overlap from 9:30 to 10:00." },
          { text: "2", feedback: "Correct! They overlap." },
          { text: "0", feedback: "Trains need platforms." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Check Overlaps.",
        issues: [
          "For every train, count how many other trains overlap with it.",
          "Take the maximum count.",
          "O(N^2).",
          "Can we do better?"
        ],
        codeSnippet: `
for i: for j: if overlap count++
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Chronological Order.",
        paragraphs: [
          "Treat Arrival and Departure as separate events.",
          "Sort ALL arrivals and ALL departures.",
          "Walk through time.",
          "Arrival? Need +1 platform.",
          "Departure? Free up -1 platform.",
          "Track max platforms needed at any instant."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Two Pointer Sweep.",
        explanations: [
          "Sort arr[] and dep[].",
          "i points to arr, j points to dep.",
          "If arr[i] <= dep[j]: Train arriving. plat++, i++.",
          "Else: Train departing. plat--, j++.",
          "Update result with max(plat)."
        ],
        codeLines: [
          "public int findPlatform(int arr[], int dep[], int n) {",
          "    Arrays.sort(arr);",
          "    Arrays.sort(dep);",
          "    int plat_needed = 1, result = 1;",
          "    int i = 1, j = 0;",
          "    while (i < n && j < n) {",
          "        if (arr[i] <= dep[j]) {",
          "            plat_needed++;",
          "            i++;",
          "        } else {",
          "            plat_needed--;",
          "            j++;",
          "        }",
          "        if (plat_needed > result) result = plat_needed;",
          "    }",
          "    return result;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "A: 900-1000, B: 940-1200, C: 950-1120, D: 1100-1130, E: 1500-1900, F: 1800-2000.",
        frames: [
          { array: [900, 940, 950, 1100, 1500, 1800], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Sorted Arr: 900, 940, 950, 1100, 1500, 1800. Dep: 1000, 1120, 1130, 1200, 1900, 2000." },
          { array: [1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "900 Arr. Plat: 1." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "940 Arr. Plat: 2." },
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "950 Arr. Plat: 3. (Max so far)." },
          { array: [2], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "1000 Dep. Plat: 2." },
          { array: [3], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "1100 Arr. Plat: 3." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Peak traffic.",
        takeaways: [
          "We don't need to know WHICH train is on WHICH platform.",
          "Just the COUNT matters.",
          "Time: O(N log N) for sorting."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Bus Station?",
        task: "Same logic?",
        solution: "Yes. Any resource allocation with time intervals works this way.",
        explanation: "Also known as 'Meeting Rooms II' on LeetCode."
      }
    }
  ]
};
