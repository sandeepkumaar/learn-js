# Summary

## Event loop

- code
- tick
- Program chunks
- Event driven approach
- Evnt queue
- JS Engine
- Hosting Environment


- What is a process and threads
- parallel threading

- concurrency

- How js acheives concurrency

- non-determinism


JavaScript never shares data across threads, which means that level of nondeterminism isn't a concern


But it's at the function (event) ordering level, rather than at the statement ordering level (or, in fact, the expression operation ordering level) as it is with threads


Concurrency is when two or more "processes" are executing simultaneously over the same period, regardless of whether their individual constituent operations happen in parallel (at the same instant on separate processors or cores) or not. You can think of concurrency then as "process"-level (or task-level) parallelism, as opposed to operation-level parallelism (separate-processor threads).
