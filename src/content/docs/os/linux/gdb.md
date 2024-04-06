---
title: gdb command in Linux
description: Learn how to use the gdb command in Linux for debugging programs efficiently. Explore advanced features to analyze and troubleshoot code effectively.
---

The gdb command in Linux is a powerful tool for debugging programs. It allows developers to inspect and manipulate the execution of their code, set breakpoints, and analyze memory usage. With gdb, users can trace the flow of their program, step through code line by line, and identify errors in their logic. This command also provides advanced features for analyzing and troubleshooting code effectively, making it an essential tool for software developers working on Linux systems.

## gdb Syntax:
```bash
gdb [options] [executable_file [core_file or process_id]]
```

## Linux gdb Options:
| Option            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| -c \<file\>       | Use a core dump file for debugging                   |
| -e \<file\>       | Use an executable file for debugging                 |
| -q                | Don't print version message on startup               |
| -x \<file\>       | Read and execute commands from a file                |
| -pid \<number\>   | Attach to a running process by process ID            |
| -s \<file\>       | Use a command script provided in a file              |
| -batch            | Run in batch mode                                   |
| -cd \<directory\> | Run in the specified directory                       |
| -n                | Initiate without reading init file                   |

## gdb Parameters:
| Parameter         | Description                                          |
| ----------------- | ---------------------------------------------------- |
| executable_file   | The executable file to be debugged                   |
| core_file         | The core dump file for debugging (if applicable)     |
| process_id        | The Process ID of a running process to attach to     |

:::caution
Use gdb command with caution as incorrect usage may lead to unexpected behavior or even crashes. Always ensure you have necessary permissions before debugging and be cautious with memory access and breakpoints in the debugging process.
:::
## How to use gdb command:
### Run a Program in gdb
```bash
gdb ./my_program
```
Run a program called "my_program" within gdb to start the debugging session.

### Set a Breakpoint
```bash
break main
```
Set a breakpoint at the beginning of the main function in the program being debugged.

### List Source Code
```bash
list
```
Display the source code around the current point of execution within gdb.

### Display Variable Value
```bash
p my_variable
```
Print the current value of a variable named "my_variable" during debugging.

### Step Through Code
```bash
next
```
Execute the next line of code within gdb, stepping over function calls.

### Step Into Function
```bash
step
```
Execute the next line of code within gdb, stepping into functions if applicable.

### Continue Execution
```bash
continue
```
Continue the execution of the program until the next breakpoint is encountered or the program completes.

### Examine Memory
```bash
x/10x 0x7fffffffeff8
```
Display the hexadecimal values of 10 memory locations starting from the specified address within gdb.
:::tip
When using the gdb command in Linux, make sure to familiarize yourself with its various options and functionalities to effectively debug programs and analyze issues.
:::

### How do I run gdb in Linux?
To run the gdb command in Linux, use the following syntax:
```bash
gdb <program_name>
```

### How can I set breakpoints in gdb?
To set breakpoints in gdb, use the following command:
```bash
break <line_number>
```

### How do I start gdb with a specific program?
To start gdb with a specific program, use the following command:
```bash
gdb -exec <program_name>
```

### How can I display the source code in gdb?
To display the source code in gdb, use the following command:
```bash
list
```

### How do I continue execution in gdb?
To continue execution in gdb, use the following command:
```bash
continue
```

### How can I examine variables in gdb?
To examine variables in gdb, use the following command:
```bash
print <variable_name>
```

### How do I step through code in gdb?
To step through code in gdb, use the following command:
```bash
step
```

### How can I quit gdb?
To quit gdb, use the following command:
```bash
quit
```

### How do I enable verbose mode in gdb?
To enable verbose mode in gdb, use the following command:
```bash
set verbose on
```

## Applications of the gdb command

- Debugging programs
- Analyzing memory usage
- Inspection and modification of program variables
- Backtracing function calls
- Catching and handling signals
- Examining registers and memory contents
- Setting breakpoints
- Stepping through code
- Viewing disassembled code