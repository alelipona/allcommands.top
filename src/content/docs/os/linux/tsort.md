---
title: tsort command in Linux
description: Sort text in topological order with the tsort command in Linux. Learn how to use this command efficiently with examples and tips.
---

The tsort command in Linux is used to sort text in topological order. It reads pairs of items from standard input and writes to standard output the same items but in such a way that for any pair A B, where A appears before B in the input, A also appears before B in the output. This command is particularly useful for sorting dependencies in build systems or directed graphs. The tsort command can help in organizing tasks or processes that are dependent on each other in a meaningful sequence.
## tsort Syntax:
```bash
tsort [options] [file]
```
## Linux tsort Options:
| Option | Description                  |
|--------|------------------------------|
| - | Detect cycles in the input and report |
| -z | Use a 0-terminated list of values in the input file |
| --help | Display help message and exit |
| --version | Output version information and exit |

## tsort Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| file      | Input file containing a list of items and their dependencies |
 
:::caution
When using the tsort command, be cautious to provide correct input files and avoid cyclic dependencies, which can lead to incorrect results.
:::
## How to use tsort command:
### Sort a Text File Containing Dependency Information
```bash
tsort dependencies.txt
```
Sorts a text file containing dependency information.

### Resolve Circular Dependencies
```bash
tsort -q dependencies.txt
```
Tries to resolve circular dependencies in a text file.

### Display Sorted List With Numbers
```bash
tsort -n input.txt
```
Displays the sorted list with numbers assigned to each item.

### Sort a File in Reverse Order
```bash
tsort -r input.txt
```
Sorts a file in reverse order.

### Read Input From Standard Input
```bash
echo "B A C" | tsort
```
Reads input from standard input and sorts it.

### Ignore Lines in Input Starting With #
```bash
tsort -i input.txt
```
Ignores lines in the input file starting with #.

### Ignore Case Sensitivity
```bash
tsort -f input.txt
```
Sorts ignoring case sensitivity.

### Specify Output File
```bash
tsort input.txt > output.txt
```
Writes the sorted result to an output file.
:::tip
When using the tsort command in Linux, make sure to provide the input as directed to avoid errors in sorting the data. You can also explore different options available with the tsort command to customize the sorting output according to your requirements.
:::

## tsort Command Troubleshooting Q&A:

### How do I use tsort in bash?
To use the tsort command in Linux, execute the following command:
```bash
tsort file.txt
```

### What is the purpose of the tsort command?
The tsort command in Linux is used to perform topological sorting on directed graphs. It reads a list of pairs of strings from a file representing directed edges and writes to standard output the strings in a valid order for which all the input edges are from the first string of the pair to the second string.

### How can I provide input to tsort?
You can provide input to tsort by creating a text file with pairs of strings representing directed edges. Each pair should be on a new line in the file.

```bash
echo -e "b a\nc b\na c" > input.txt
tsort input.txt
```

### Can tsort handle cyclic graphs?
No, tsort is not able to handle cyclic graphs. If the input contains a cycle, tsort will report an error mentioning the specific cycle that caused the issue.

### How does tsort handle overlapping edges?
If there are overlapping edges in the input file provided to tsort, the command will consider the later edge as an additional constraint and adjust the sorting order accordingly.

### How can I display the numeric IDs of the sorted strings instead of their names?
You can use the `-g` option with tsort to display the numeric IDs of the sorted strings along with their names.

```bash
tsort -g input.txt
```

### Is it possible to reverse the sorting order with tsort?
Yes, you can reverse the sorting order of tsort output by using the `-r` option. This will display the sorted strings in reverse order.

```bash
tsort -r input.txt
```

### Can tsort handle multiple input files?
Yes, tsort can process multiple input files simultaneously. Simply provide all the input file names separated by spaces as arguments.

```bash
tsort file1.txt file2.txt file3.txt
```

### How can I ignore whitespace and empty lines in the input file?
To ignore whitespace and empty lines in the input file provided to tsort, you can use the `-d` option. This will skip any whitespace or empty lines while processing the input.

```bash
tsort -d input.txt
```

## Applications of the tsort command

- Resolving dependencies in makefiles
- Checking for circular dependencies
- Generating execution order for tasks in a workflow
- Sorting directed acyclic graphs