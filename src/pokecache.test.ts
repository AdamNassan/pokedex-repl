import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 500, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  // Wait for the entry to expire AND for the reap loop to run
  // The reap loop runs every `interval` ms, so we need to wait for:
  // 1. The entry to be older than `interval` (interval + buffer)
  // 2. The next reap cycle to execute (another interval)
  await new Promise((resolve) => setTimeout(resolve, interval * 2 + 100));
  const reaped = cache.get(key);
  expect(reaped).toBe(undefined);

  cache.stopReapLoop();
});

test("Cache should return undefined for missing key", () => {
  const cache = new Cache(1000);
  
  const result = cache.get("nonexistent");
  expect(result).toBe(undefined);
  
  cache.stopReapLoop();
});

test("Cache should store and retrieve multiple entries", () => {
  const cache = new Cache(5000);
  
  cache.add("key1", "value1");
  cache.add("key2", { data: "value2" });
  cache.add("key3", 123);
  
  expect(cache.get("key1")).toBe("value1");
  expect(cache.get("key2")).toEqual({ data: "value2" });
  expect(cache.get("key3")).toBe(123);
  
  cache.stopReapLoop();
});

test("Cache should overwrite existing entries", () => {
  const cache = new Cache(5000);
  
  cache.add("key", "original");
  expect(cache.get("key")).toBe("original");
  
  cache.add("key", "updated");
  expect(cache.get("key")).toBe("updated");
  
  cache.stopReapLoop();
});
