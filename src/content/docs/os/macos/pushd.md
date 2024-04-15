---
title: pushd command in MacOS
description: Learn how to efficiently navigate directories with the pushd command in MacOS. Master the pushd command for seamless directory navigation.
---

The pushd command in MacOS is a built-in shell command that allows you to efficiently navigate directories by pushing them onto a directory stack. This enables you to easily switch between directories and track your navigation history. By using pushd along with the popd command, you can push directories onto the stack, change directories, and navigate back to previous directories effortlessly. This can be particularly useful when working with multiple directories and need to switch between them frequently. Pushd simplifies directory navigation and enhances your overall command line experience on MacOS.

## pushd Syntax:
```bash
pushd [dir]
```

## MacOS pushd Options:
| Option | Description |
|--------|-------------|
| -n     | Suppresses the normal change of directory. |

## pushd Parameters:
| Parameter | Description |
|-----------|-------------|
| dir       | The directory to push onto the directory stack and change to. |

:::caution
Use caution when using the pushd command, as it changes the directory stack which might lead to unexpected behavior.
:::
## How to use pushd command:

### Change to a Different Directory and Add to Directory Stack
```bash
pushd /path/to/directory
```
This command changes to the specified directory "/path/to/directory" and adds it to the directory stack.

### View Directory Stack
```bash
pushd
```
Displays the directory stack showing the current working directory and previous directories.

### Change to the Second Directory on the Directory Stack
```bash
pushd +2
```
Switches the current directory to the second directory on the directory stack.

### Rotate the First Two Directories on the Directory Stack
```bash
pushd -n
```
Rotates the first two directories on the directory stack.

### Change to the Last Directory on the Directory Stack
```bash
pushd -0
```
Shifts to the last directory on the directory stack.

### Swap the Current Working Directory with the n-th Directory on the Directory Stack
```bash
pushd ~n
```
Swaps the current working directory with the n-th directory in the directory stack.

### Pop the Last Directory Off the Directory Stack and Change to It
```bash
pushd -
```
Pops the last directory off the directory stack and changes to it.

### Swap the Current Working Directory with the -n-th Directory in the Stack
```bash
pushd ~-n
```
Swaps the current working directory with the -n-th directory in the directory stack.
:::tip
Remember that the pushd command in MacOS is used to manipulate the directory stack. By using pushd along with popd and dirs, you can efficiently manage your working directories in the terminal.
:::

### How do I use pushd in MacOS?
To use the pushd command in MacOS, execute the following command:
```bash
pushd --option <value>
```

### What is the purpose of pushd in bash?
The pushd command in bash is used to push directories onto the directory stack.

### How can I push a specific directory onto the stack using pushd?
You can push a specific directory onto the stack using pushd by specifying the path to the directory. For example:
```bash
pushd /path/to/directory
```

### Can I switch between directories on the stack with pushd?
Yes, you can switch between directories on the stack by using the pushd command without any arguments. This will rotate the directories in the stack.

### How can I view the directories in the stack with pushd?
You can view the directories in the stack by executing the pushd command with no arguments. This will display the directory stack.

### Is it possible to remove specific directories from the stack with pushd?
Yes, you can remove specific directories from the stack by providing the index of the directory to be removed. For example:
```bash
pushd +2
```

### How can I quickly navigate between directories using pushd?
To quickly navigate between directories using pushd, you can combine it with the directory stack index. For instance:
```bash
pushd +1
```

### Can pushd be used in scripts for directory manipulation?
Yes, pushd can be utilized in shell scripts for efficient directory manipulation. You can incorporate pushd commands within your scripts to streamline directory operations.

## Applications of the pushd command

1. Efficiently switch between different directories in the terminal.
2. Useful for navigating deep directory structures quickly.
3. Helpful for creating a directory stack for easy access to previous working directories.
4. Simplifies workflows that involve moving back and forth between multiple directories.
5. Can be used in scripts to automate directory navigation processes.