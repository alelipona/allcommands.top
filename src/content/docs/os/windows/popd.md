---
title: All About POPD Windows command
description: Learn all about the Windows popd command and how to use it effectively for managing directories in the command line.
---

The Windows popd command is used to remove the top directory from the stack maintained by the pushd command. It allows you to navigate back to the directory that was previously stored before using pushd. This command is especially useful when working with multiple directories and need to quickly switch between them. By using popd, you can efficiently manage your directory stack and streamline your workflow in the Windows command line.
## POPD Syntax:
```cmd
popd
```

## Options:
| Option | Description                            |
|--------|----------------------------------------|
| /?     | Displays help for popd command.        |

## Parameters:
Popd command does not have any specific parameters.

:::caution
Caution: Be cautious while using the popd command as it removes the top directory from the stack and changes the current directory to the one that was at the top of the stack. Make sure you understand the implications of using this command.
:::
## POPD CMD Examples:
### Navigate back to the previous directory
```cmd
popd
```
Changes the current directory to the directory that was most recently removed from the directory stack.

### Return to the directory stored at a specific index
```cmd
popd +1
```
Pops the directory at a specific index from the directory stack and changes the current directory to that location.

### Remove multiple directories from the directory stack and navigate back
```cmd
popd +2
```
Removes two directories from the directory stack and changes the current directory to the second most recently removed directory.

### Clear the directory stack and return to the original directory
```cmd
popd /clear
```
Removes all directories from the directory stack and changes the current directory back to the original directory.

### Display the current directory stack
```cmd
popd /list
```
Shows the list of directories currently stored in the directory stack.

### Exit the directory stack without changing the current directory
```cmd
popd /?
```
Displays the help information for the popd command, providing details on its usage and options available.
:::tip
When using the popd command in Windows, remember that it is used to remove the top directory from the stack and change the current directory to the one that was on top before. It is particularly useful when navigating through multiple directories and you want to go back to the previous directory quickly.
:::

## POPD Command Help Center:
### How do I use popd in Windows?
To use the popd command in Windows, execute the following command:
```cmd
popd
```

### What is the purpose of the popd command in Windows?
The popd command is used to remove the top directory from the stack of directories that have been pushed using the pushd command and then return to the previous current directory. It helps in managing directory stack efficiently.

### How can I push a directory onto the stack with pushd?
To push a directory onto the stack using pushd command, execute the following command:
```cmd
pushd C:\ExampleDirectory
```

### How can I display the directories in the stack with popd?
To display the directories in the stack, execute the following command:
```cmd
echo %CD%
```

### How do I change to a specific directory in the stack with popd?
To change to a specific directory in the stack using popd, execute the following command:
```cmd
popd +N
```

### What are the options available with popd in Windows?
The popd command in Windows does not have any specific options or flags that can be used. It is a straightforward command for managing the directory stack.

### Is it possible to remove multiple directories from the stack using popd?
Yes, you can remove multiple directories from the stack by sequentially using the popd command for each directory that you want to remove.

### Can I use popd to return to the previous directory in Windows CMD?
Yes, the popd command is specifically designed to help you return to the previous directory quickly by removing the top directory from the stack.


## Applications of the POPD Command

- Removes the most recent directory from the stack and changes the current directory to the one that was removed.