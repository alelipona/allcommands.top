---
title: dirs MacOS Command Guide
description: Learn how to navigate through directories and manipulate folder stacks efficiently on MacOS using the dirs command.
---

The MacOS dirs command allows users to navigate through directories and manipulate folder stacks efficiently. By managing directory locations as a stack, users can easily switch between different directories and access previously visited folders with ease. The dirs command enables users to push and pop directories onto the stack, list the stack, or navigate to a specific directory within the stack. This command can be particularly useful for users who frequently work with multiple directories and need to switch between them quickly and effectively.

## dirs Syntax:
```bash
dirs [-clpv]
```
## Options:
| Option | Description                            |
|--------|----------------------------------------|
| -c     | Clear the directory stack.             |
| -l     | Print the directory stack with one entry per line. |
| -p     | Print the directory stack with one entry per line, including indexes. |
| -v     | Display the directory stack index in front of each entry. |

## Parameters:
There are no parameters for the dirs command.

:::caution
Be cautious when using the dirs command, as it directly interacts with the directory stack and can impact your current working directory. Make sure you understand the implications of clearing the stack or manipulating the entries before proceeding.
:::
## dirs Command Samples:
### Display Current Directory Stack
```bash
dirs
```
Display the list of directories in the directory stack.

### Change to Previous Directory in Stack
```bash
cd -
```
Change to the previous directory in the directory stack.

### Change to Directory at Position in Stack
```bash
cd +2
```
Change to the directory at position 2 in the directory stack.

### Push a Directory onto the Stack
```bash
pushd /path/to/directory
```
Push a directory onto the directory stack and change to it.

### Remove Directory from Stack by Position
```bash
popd +1
```
Remove the directory at position 1 from the directory stack.

### Clear the Directory Stack
```bash
dirs -c
```
Clear the directory stack.

### Display Stack Contents as Commands
```bash
dirs -p
```
Display the directory stack contents as commands that can be copied and pasted.
:::tip
Remember that the dirs command is used to display the list of currently remembered directories by the shell. It can be useful for quickly navigating between directories. 
:::

## dirs FAQ:
### How do I use dirs in MacOS?
To use the dirs command in MacOS, execute the following command:
```bash
dirs
```

### How can I clear the directory stack in MacOS?
To clear the directory stack in MacOS, you can use the following command:
```bash
dirs -c
```

### How do I display the directory stack with line numbers in MacOS?
To display the directory stack with line numbers in MacOS, execute the following command:
```bash
dirs -v
```

### How can I navigate to a specific directory in the stack in MacOS?
To navigate to a specific directory in the stack in MacOS, you can use the following command with the directory number:
```bash
cd $(dirs +<number>)
```

### How do I add a specific directory to the stack in MacOS?
To add a specific directory to the stack in MacOS, you can use the pushd command followed by the directory path:
```bash
pushd /path/to/directory
```

### How do I remove a specific directory from the stack in MacOS?
To remove a specific directory from the stack in MacOS, you can use the popd command followed by the directory number or path:
```bash
popd +<number>
```
## Applications of the dirs command

- Save and quickly switch between frequently accessed directories
- Create a stack of directories to navigate back and forth within a session
- Simplify the navigation process in the terminal
- Improve efficiency when working with multiple directories at once