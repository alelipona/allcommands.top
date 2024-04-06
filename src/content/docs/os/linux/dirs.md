---
title: What is dirs Linux command?
description: Learn about the Linux dirs command - a useful tool for managing directories efficiently in the command line environment.
---

The `dirs` command in Linux is used to display the list of currently remembered directories in the directory stack. It enables users to navigate through directories efficiently by allowing them to push and pop directories onto and from the stack.

## dirs Syntax:
```bash
dirs [-c] [+n] [-n]
```
## dirs Options:
| Option | Description                 |
|--------|-----------------------------|
| -c     | Clear the directory stack   |
| +n     | Displays the nth entry from the directory stack |
| -n     | Displays the nth entry from the directory stack starting from the top (opposite of +n) |

:::caution
Use caution when manipulating the directory stack with the dirs command, as improper usage might lead to unexpected results or errors.
:::

## Parameters:
| Parameter | Description                     |
|-----------|---------------------------------|
|          n | A number indicating the nth entry in the directory stack   |

## dirs Command Usage Examples:
### Print Current Directory Stack
```bash
dirs
```
This command prints the current directory stack.

### Add a Directory to the Stack
```bash
dirs -p /home/user/directory
```
Adds the directory "/home/user/directory" to the directory stack.

### Display Directory Stack with Indexes
```bash
dirs -v
```
Displays the directory stack along with indexes for each entry.

### Remove Specific Directory from the Stack
```bash
dirs -c 2
```
Removes the directory at index 2 from the directory stack.

### Clear Directory Stack
```bash
dirs -c
```
Clears the entire directory stack.
:::tip
It's important to note that the dirs command is used to display the directory stack, which can be navigated by using the pushd and popd commands. Understanding how to efficiently navigate this stack can greatly improve your productivity in the terminal.
:::

### How do I use dirs in Linux?
To use the dirs command in bash, execute the following command:
```bash
dirs
```

### How can I clear the directory stack in Linux?
To clear the directory stack in bash, you can use the following command:
```bash
dirs -c
```

### How do I display the directory stack in reverse order in Linux?
To display the directory stack in reverse order in bash, you can use the following command:
```bash
dirs -r
```

### How can I limit the number of directories displayed by the dirs command?
To limit the number of directories displayed by the dirs command in bash, you can use the following command:
```bash
dirs -l 5
```

### How do I display the directory stack with index numbers in Linux?
To display the directory stack with index numbers in bash, you can use the following command:
```bash
dirs -v
```

### How can I navigate to a specific directory in the stack using the dirs command?
To navigate to a specific directory in the stack using the dirs command in bash, you can use the following command:
```bash
cd $(dirs +2)
```

### How do I swap the top two directories in the stack using the dirs command?
To swap the top two directories in the stack using the dirs command in bash, you can use the following command:
```bash
dirs -s
```

## Applications of the dirs command

- List recently visited directories
- Change the directory stack order
- Navigate between recently visited directories
- Clear the directory stack