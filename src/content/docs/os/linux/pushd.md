---
title: pushd Linux Command Guide
description: Learn how to use the pushd command in Linux to manage directories efficiently. 
---

The Linux pushd command allows you to push directories onto a directory stack, making it easier to switch between directories in the terminal. This command remembers the current directory and allows you to quickly navigate back to it without typing the full path. By using pushd, you can efficiently manage multiple directories and streamline your workflow on the command line.

## pushd Syntax:
```bash
pushd [options] [directory]
```
## Options:
| Option   | Description                           |
|----------|---------------------------------------|
| -n       | Suppresses the normal change of directory operation associated with the current directory stack. |

## Parameters:
| Parameter  | Description                                         |
|------------|-----------------------------------------------------|
| directory  | The directory to push onto the directory stack.     |

:::caution
Avoid using `pushd` without understanding its effects on directory navigation and the directory stack.
:::
## pushd Command Samples:

### Change to a Directory and Push It onto the Directory Stack
```bash
pushd /var/log
```
Changes the current working directory to /var/log and pushes it onto the directory stack.

### Push Multiple Directories onto the Directory Stack
```bash
pushd /etc /var /usr/local
```
Pushes multiple directories (/etc, /var, and /usr/local) onto the directory stack.

### Navigate to a Directory and View the Directory Stack
```bash
pushd /etc
dirs
```
Navigates to /etc and then displays the directory stack, showing the directories in the order they were pushed.

### Change to a Directory, Push It onto the Stack, and Display the Stack
```bash
pushd /home/user/Documents
dirs
```
Changes to /home/user/Documents, pushes it onto the stack, and displays the directory stack.

### Cycle Through Directories in the Stack
```bash
pushd /opt
pushd /var/log
pushd +2
```
Pushes /opt, then /var/log onto the stack, and finally goes back 2 directories in the stack.

### Push a Directory on the Stack and Switch to the Next Directory in the Stack
```bash
pushd /usr
pushd +1
```
Pushes /usr onto the stack and then switches to the next directory on the stack.

### Swap the Top Two Directories on the Stack
```bash
pushd /var/log
pushd /etc
pushd -2
dirs
```
Pushes /var/log and /etc onto the stack, swaps the top two directories, and then displays the updated directory stack.
:::tip
Remember that the pushd command is used to manipulate the directory stack, allowing you to easily switch between directories and manage navigation in Linux.
:::

## pushd FAQ:
### How do I use pushd in Linux?
To use the pushd command in Linux, execute the following command:
```bash
pushd <directory>
```

### What is the purpose of pushd in Linux?
The pushd command is used to save the current working directory to a stack and change the current directory to the specified one.

### How do I view the directory stack with pushd?
To view the directory stack using pushd, run the following command:
```bash
dirs
```

### Can I navigate between directories using pushd?
Yes, you can navigate between directories using pushd by using the directory index in the stack. For example:
```bash
pushd +2
```

### How do I remove specific directories from the stack with pushd?
To remove specific directories from the stack using pushd, you can use the popd command followed by the directory index. For example:
```bash
popd +2
```

### Is it possible to rotate the directory stack in pushd?
Yes, you can rotate the directory stack in pushd by using the pushd command with the +n or -n option to shift the directories in the stack. For example:
```bash
pushd +3
```
## Applications of the pushd command

- Quickly change the current directory while saving the previous directory for easy navigation back
- Useful for navigating between multiple directories efficiently
- Can be used in shell scripts to simplify directory handling
- Works well in combination with the popd command to swap between directories efficiently