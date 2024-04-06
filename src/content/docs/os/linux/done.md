---
title: What is done Linux command?
description: The done command in Linux is used to notify the shell that a background task has completed. It is primarily used in shell scripts to mark the end of a background task.
---

The done command in Linux is used to notify the shell that a background task has completed. It is primarily used in shell scripts to mark the end of a background task.
## done Syntax:
```bash
rsync [options] source destination
```

## done Options:

| Option | Description |
|--------|-------------|
| -v     | Verbose output showing the files being transferred |
| -r     | Recursively transfer files and directories |
| -a     | Archive mode; preserves permissions, timestamps, etc. |
| -z     | Compress file data during transfer |
| -h     | Output numbers in a human-readable format |
| -P     | Shows progress during file transfer |
| -n     | Perform a trial run with no changes made |
| -u     | Update: skip files that are newer on the destination |
| -e     | Specify the remote shell to use |

## Parameters:
| Parameter  | Description                          |
|------------|--------------------------------------|
| source     | The source file or directory to copy |
| destination| The destination where files will be copied to |
## done Command Usage Examples:
### Marking a Task as Completed
```bash
done task1
```
Marks the task named "task1" as completed.

### Marking Multiple Tasks as Done
```bash
done task2 task3 task4
```
Marks multiple tasks ("task2", "task3", and "task4") as done in one command.

### Using Regular Expressions
```bash
done task*
```
Uses a regular expression to mark all tasks starting with "task" as done.

### Adding Notes to a Completed Task
```bash
done -l "task5: Completed with notes"
```
Marks the task "task5" as done and adds the note "Completed with notes".

### Repeating the Last Done Task
```bash
done -r
```
Repeats the action of marking the last task as done.
:::tip
When using the `done` command in Linux, make sure to properly complete the related loop or function before executing the `done` command to avoid syntax errors.
:::

### How do I use done in Linux?
To use the done command in bash, execute the following command:
```bash
for i in {1..5}; do echo $i; done
```

### What is the purpose of done in Linux?
The done keyword marks the end of a script's loop construct, such as a for loop or while loop.
```bash
while condition; do
    # Commands to execute
done
```

### How to properly close a loop in bash using done?
To properly close a loop in bash using the done command, ensure that the corresponding loop structure is completed and that the done keyword is correctly placed to mark the end of the loop.
```bash
for file in *.txt; do
    echo "Processing file: $file"
done
```

### Can the done command be used outside of loops in bash?
No, the done command is specifically used to mark the end of loop constructs in bash scripts. It is not used outside of loops.
```bash
for i in {1..3}; do
    if [ $i -eq 2 ]; then
        echo "Found number 2"
    fi
done
```

### How does done work in a nested loop?
When using nested loops in bash, each inner loop must have its corresponding done keyword to properly mark the end of the loop construct.
```bash
for i in {1..3}; do
    for j in {a..c}; do
        echo "Combination: $i$j"
    done
done
```

### Is it necessary to use done after a while loop in bash?
Yes, the done keyword is essential to mark the end of a while loop in bash. If omitted, it will result in a syntax error.
```bash
while read line; do
    echo "$line"
done < file.txt
```

### How to handle errors related to the done command in bash scripts?
To handle errors related to the done command in bash scripts, carefully check for correct placement and matching with the corresponding loop structure, ensuring there are no missing or extra done keywords.
```bash
for (( i=1; i<=5; i++ )); do
    echo "Iteration: $i"
done
```
## Applications of the done command

- Terminating a loop in a bash script
- Marking the end of a group of commands in a script
- Used in conjunction with the `for`, `while`, or `until` loop constructs