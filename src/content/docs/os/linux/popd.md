---
title: popd Linux Command Guide
description: Learn how to use the popd command in Linux to change to the previous directory on the stack quickly. 
---

The popd command in Linux is used to remove the top directory from the directory stack and change to the new top directory. This command is useful for quickly navigating through previously accessed directories. By using popd, you can easily switch back and forth between directories without having to remember their specific paths. This can save time and make navigation more efficient when working in the terminal.

## popd Syntax:
```bash
popd
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -n     | Suppresses the normal change of directory when removing directories from the stack. |

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| None      | There are no parameters for the `popd` command. |

:::caution
Exercise caution when using the `popd` command as it directly affects the directory stack and can lead to unexpected changes in the working directory.
:::
## popd Command Samples:
### Remove the top directory from the directory stack and change to the new top directory
```bash
popd
```
Removes the top directory from the directory stack and changes to the new top directory.

### Pop the directory at a specific position in the stack
```bash
popd +2
```
Removes the directory at the specified position in the stack (2 directories down) and changes to that directory.

### Using popd to return to the previously visited directory
```bash
popd -
```
Removes the top directory from the stack and changes to the directory that was previously visited.

### Display the directories in the stack before popping
```bash
dirs
popd -n
```
Displays the directories in the stack before popping and removes the top directory from the stack without changing the current directory.

### Pop all directories from the stack
```bash
popd -n +0
```
Removes all directories from the stack without changing the current directory.

### Pop the directory at a specific position without changing to it
```bash
popd +2 -n
```
Removes the directory at the specified position in the stack (2 directories down) without changing to it.

### Remove the top two directories from the stack
```bash
popd +2 +1
```
Removes the top two directories from the stack and changes to the new top directory.
:::tip
Remember that the `popd` command is used to remove entries from the directory stack and change the current working directory to the previous one. It is especially useful when navigating through multiple directories.
:::

## popd FAQ:
### How do I use popd in Linux?
To use the popd command in Linux, execute the following command:
```bash
popd
```

### How can I remove specific directories from the directory stack using popd in Linux?
You can remove specific directories from the directory stack by specifying the index of the directory. For example:
```bash
popd +2
```

### How do I disable the directory stack functionality temporarily in popd in Linux?
To temporarily disable the directory stack functionality in popd, you can use the `pushd` command with the `+` option before executing the command that would normally update the stack. For instance:
```bash
pushd +3 && cd /tmp
```

### How can I clear all directories from the directory stack using popd in Linux?
To clear all directories from the directory stack, you can use the following command:
```bash
popd -n +0
```

### How do I change to a specific directory from the directory stack without popping it off in Linux using popd?
To change to a specific directory from the directory stack without removing it, you can use the following command:
```bash
pushd +3
```

### How can I view the contents of the directory stack in Linux using popd?
You can view the contents of the directory stack using the following command:
```bash
dirs -v
```
## Applications of the popd command

- Remove the top directory from the directory stack and change to the new top directory
- Useful for quickly navigating back to previous directories that have been pushed onto the stack using the pushd command