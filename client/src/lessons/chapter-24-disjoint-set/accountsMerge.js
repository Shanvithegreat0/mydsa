import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const accountsMergeLesson = {
  id: 'accounts-merge',
  chapterId: 24,
  title: "Accounts Merge",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "Email Consolidation",
        paragraphs: [
          "Shanvi, you have a list of accounts.",
          "Each account has a name and emails.",
          "If two accounts share an email, they belong to the same person.",
          "Merge them."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "John: [a@b.com], John: [a@b.com, c@d.com]. Same?",
        options: [
          { text: "No", feedback: "They share a@b.com." },
          { text: "Yes", feedback: "Correct! Merge emails." },
          { text: "Maybe", feedback: "Yes." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Graph BFS.",
        issues: [
          "Build graph where emails are nodes.",
          "Edges between emails in same account.",
          "BFS to find connected components.",
          "Works, but DSU is cleaner."
        ],
        codeSnippet: `
adj.get(email).add(nextEmail)
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "DSU on Indices.",
        paragraphs: [
          "Map each email to the Account Index (ID) that first introduced it.",
          "If we see the email again in another account, Union the two Account IDs.",
          "Finally, group all emails by the Root Account ID.",
          "Sort emails and format output."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "DSU for N accounts.",
          "Map<Email, AccountIndex>.",
          "Loop accounts i:",
          "  Loop emails:",
          "    If email in map: Union(i, map.get(email)).",
          "    Else: map.put(email, i).",
          "Group emails by find(i).",
          "Format result."
        ],
        codeLines: [
          "public List<List<String>> accountsMerge(List<List<String>> accounts) {",
          "    int n = accounts.size();",
          "    DSU dsu = new DSU(n);",
          "    Map<String, Integer> emailToId = new HashMap<>();",
          "    for (int i = 0; i < n; i++) {",
          "        for (int j = 1; j < accounts.get(i).size(); j++) {",
          "            String email = accounts.get(i).get(j);",
          "            if (emailToId.containsKey(email)) {",
          "                dsu.union(i, emailToId.get(email));",
          "            } else {",
          "                emailToId.put(email, i);",
          "            }",
          "        }",
          "    }",
          "    // Collect emails by root...",
          "    // Sort and return...",
          "    return result;",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "Acc0: [e1], Acc1: [e1, e2].",
        frames: [
          { array: [0, 1], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Acc0 has e1. Map: e1->0." },
          { array: [0, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Acc1 has e1. Map has e1->0. Union(1, 0). Parent[1]=0." },
          { array: [0, 1], highlightIndex: 1, currentSum: 0, maxSum: 0, explanation: "Acc1 has e2. Map: e2->1 (or 0)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Result: Acc0 has [e1, e2]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Identity crisis solved.",
        takeaways: [
          "Mapping strings to integer IDs is a common DSU pattern.",
          "Time: O(A * alpha(N)), A = total emails.",
          "Space: O(A)."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Name Mismatch?",
        task: "What if names differ but emails match?",
        solution: "Problem statement usually says names match. If not, pick one.",
        explanation: "Data cleaning."
      }
    }
  ]
};
