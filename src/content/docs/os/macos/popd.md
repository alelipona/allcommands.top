---
title: MacOS popd command
description: MacOS popd command is used to remove directories from the directory stack. Learn how to use popd command in Terminal on MacOS in this guide.
---

The MacOS popd command is a built-in command that is used in the Terminal to remove directories from the directory stack. It is typically used in conjunction with the pushd command to manage the directory stack. By using the popd command, you can easily navigate through directories and rearrange the directory stack to quickly switch between directories. This command is useful for managing directories and improving workflow efficiency in the Terminal on MacOS.

## popd Syntax:
```bash
popd
```

## Options:
| Option         | Description                                              |
|----------------|----------------------------------------------------------|
| -n             | Do not change the current directory when removing from the directory stack. |
| -v             | Display the directory stack after the directory change.  |

## Parameters:
There are no specific parameters for the popd command.

:::caution
Exercise caution when using the popd command as it directly affects the directory stack and may change the current working directory unexpectedly.
:::
## popd Usage:
### Remove the most recently added directory from the directory stack
```bash
popd
```
This command removes the most recently added directory from the directory stack.
### Remove a specific directory from the directory stack
```bash
popd +N
```
Where N is the number representing the position of the directory in the stack (0 being the top, 1 the next directory, and so on).
### Return to the previous directory on the directory stack after navigating to a new directory
```bash
cd Documents
popd
```
After changing to the "Documents" directory, this command will return you to the previous directory saved on the stack.
### Clear the directory stack
```bash
popd -n
```
This command will clear the entire directory stack, removing all saved directories.
:::tip
Remember that popd is used to remove directories from the directory stack in the bash terminal. Make sure to understand how the directory stack works before using popd to avoid unexpected results.
:::

### How do I use popd in MacOS?
To use the popd command in MacOS, execute the following command:
```bash
popd
```

### What is the purpose of popd in MacOS?
popd is used to remove the top directory from the directory stack in MacOS.

### How can I remove a specific directory from the directory stack using popd in MacOS?
To remove a specific directory from the directory stack in MacOS using popd, specify the index of the directory as follows:
```bash
popd +<index>
```

### Can I use popd with options in MacOS?
Yes, you can use popd with options in MacOS. For example, to perform silent operation (no output) when using popd, you can use the `-n` option:
```bash
popd -n
```

### How do I switch to the directory popped from the stack immediately after popping it in MacOS?
To switch to the directory popped from the stack immediately after popping it in MacOS, you can use the following combination of popd and cd commands:
```bash
popd && cd +0
```

### Can I remove multiple directories from the stack at once using popd in MacOS?
Yes, you can remove multiple directories from the stack at once by specifying the number of directories you want to pop. For example, to pop the top 3 directories from the stack, you can use:
```bash
popd +3
```

### How can I view the contents of the directory stack in MacOS?
To view the contents of the directory stack in MacOS, you can use the dirs command. This will display the directories in the stack with their indices.
```bash
dirs
```
## Applications of the popd command

- Removes the top directory from the directory stack and changes to the new top directory.
- Can be used to return to the previous working directory after using the `pushd` command.
