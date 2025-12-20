import StepWarmUp from '../../components/lesson/StepWarmUp';
import StepThink from '../../components/lesson/StepThink';
import StepNaive from '../../components/lesson/StepNaive';
import StepInsight from '../../components/lesson/StepInsight';
import StepCode from '../../components/lesson/StepCode';
import StepVisualize from '../../components/lesson/StepVisualize';
import StepReflect from '../../components/lesson/StepReflect';
import StepChallenge from '../../components/lesson/StepChallenge';

export const designTwitterLesson = {
  id: 'design-twitter',
  chapterId: 29,
  title: "Design Twitter",
  steps: [
    {
      component: StepWarmUp,
      data: {
        title: "News Feed",
        paragraphs: [
          "Shanvi, design a simplified Twitter.",
          "postTweet(userId, tweetId).",
          "getNewsFeed(userId): Retrieve 10 most recent tweets from user and followees.",
          "follow(followerId, followeeId).",
          "unfollow(followerId, followeeId)."
        ]
      }
    },
    {
      component: StepThink,
      data: {
        question: "How to merge tweets from 100 people?",
        options: [
          { text: "Sort all tweets every time.", feedback: "Too slow." },
          { text: "Merge K Sorted Lists.", feedback: "Correct! Each user's tweets are already sorted by time." },
          { text: "Random pick.", feedback: "No." }
        ],
        correctIndex: 1
      }
    },
    {
      component: StepNaive,
      data: {
        description: "Pull All.",
        issues: [
          "Fetch all tweets from all followees.",
          "Put them in a giant list.",
          "Sort by timestamp.",
          "Take top 10.",
          "If following 1000 people with 1000 tweets each, sorting 1M items is slow."
        ],
        codeSnippet: `
allTweets.sort(); return top10;
        `
      }
    },
    {
      component: StepInsight,
      data: {
        insight: "Heaps + Linked Lists.",
        paragraphs: [
          "Store each user's tweets as a Linked List (Head = newest).",
          "User object has a set of followees.",
          "getNewsFeed: Gather the Heads of tweet lists for all followees.",
          "Put them in a Max-Heap (by time).",
          "Extract max, push next tweet from that list to Heap.",
          "Repeat 10 times."
        ]
      }
    },
    {
      component: StepCode,
      data: {
        description: "Implementation.",
        explanations: [
          "User class: id, followed Set, Tweet head.",
          "Tweet class: id, time, next.",
          "Global timestamp++.",
          "getNewsFeed: PriorityQueue of Tweets.",
          "Add heads to PQ.",
          "Poll 10 times."
        ],
        codeLines: [
          "class Twitter {",
          "    private static int timeStamp = 0;",
          "    private class Tweet { int id; int time; Tweet next; ... }",
          "    private class User { int id; Set<Integer> followed; Tweet head; ... }",
          "    private Map<Integer, User> userMap = new HashMap<>();",
          "    public void postTweet(int userId, int tweetId) {",
          "        User u = userMap.get(userId);",
          "        Tweet t = new Tweet(tweetId, timeStamp++);",
          "        t.next = u.head; u.head = t;",
          "    }",
          "    public List<Integer> getNewsFeed(int userId) {",
          "        PriorityQueue<Tweet> pq = new PriorityQueue<>((a,b)->b.time-a.time);",
          "        User u = userMap.get(userId);",
          "        for(int fId : u.followed) {",
          "            Tweet t = userMap.get(fId).head;",
          "            if(t!=null) pq.add(t);",
          "        }",
          "        List<Integer> res = new ArrayList<>();",
          "        while(!pq.isEmpty() && res.size()<10) {",
          "            Tweet t = pq.poll();",
          "            res.add(t.id);",
          "            if(t.next!=null) pq.add(t.next);",
          "        }",
          "        return res;",
          "    }",
          "}"
        ]
      }
    },
    {
      component: StepVisualize,
      data: {
        description: "User 1 follows 2. 1 tweets T1(time 1). 2 tweets T2(time 2).",
        frames: [
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "1's list: T1. 2's list: T2." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Feed for 1: PQ adds T1, T2." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll max: T2 (time 2). Res: [T2]. PQ adds T2.next (null)." },
          { array: [], highlightIndex: 0, currentSum: 0, maxSum: 0, explanation: "Poll max: T1 (time 1). Res: [T2, T1]." }
        ]
      }
    },
    {
      component: StepReflect,
      data: {
        quote: "Feed generation.",
        takeaways: [
          "Pull-based architecture (Fan-out on read).",
          "Efficient for small number of followees.",
          "Real Twitter uses Push-based (Fan-out on write) for celebrities."
        ]
      }
    },
    {
      component: StepChallenge,
      data: {
        description: "Scalability?",
        task: "What if Justin Bieber tweets?",
        solution: "Don't push to 100M followers. Let them pull. Hybrid approach.",
        explanation: "System Design deep dive."
      }
    }
  ]
};
