---
title: Linux readlink command
description: Learn how to use the Linux readlink command to display the target of a symbolic link. 
---

The Linux readlink command is used to print out the target of a symbolic link. By running this command, you can quickly determine the path that a symbolic link is pointing to. This can be especially useful when you need to troubleshoot or understand the structure of your file system. The readlink command can also be used with options to manipulate the output format and display additional information. Overall, mastering the readlink command can help improve your efficiency and productivity when working with symbolic links in Linux environments.

## readlink Syntax:
```bash
readlink [option] [file]
```
## Options:
| Option     | Description                           |
|------------|---------------------------------------|
| -f, --canonicalize | Canonicalize the given filename by following every symlink in every component of the given name recursively |

## Parameters:
| Parameter | Description                                 |
|-----------|---------------------------------------------|
| file      | The name of the file whose link target will be printed | 

:::caution
Caution: Be cautious when using the readlink command, especially with the -f option as it can follow symbolic links recursively and potentially lead to unexpected results or infinite loops.
:::
## readlink Usage:
### Show the Absolute Path of a Symbolic Link
```bash
readlink -f mylink
```
This command will display the absolute path of the symbolic link named "mylink".

### Show the Target of a Symbolic Link
```bash
readlink mylink
```
This command will show the target file or directory of the symbolic link named "mylink".

### Resolve Multiple Levels of Symbolic Links
```bash
readlink -e mylink
```
By using the -e option, this command resolves multiple levels of symbolic links starting from the given symbolic link named "mylink".

### Display the Canonicalized Path of a File
```bash
readlink -m mylink
```
When using the -m option, this command will display the canonicalized path of the file or directory named "mylink", which resolves any symbolic links in the path.
:::tip
When using the readlink command in Linux, remember that it resolves symbolic links and prints the final target of the link. Make sure to check the options available to tailor the command to your specific needs.
:::

### How do I use readlink in Linux?
To use the readlink command in Linux, execute the following command:
```bash
readlink /path/to/symlink
```

### What is the purpose of readlink in Linux?
The readlink command in Linux is used to print the resolved symbolic links or canonical file names.

### How can I show the canonicalized path of a file using readlink in Linux?
To display the canonicalized path of a file with readlink in Linux, use the following command:
```bash
readlink -f /path/to/file
```

### How do I display all links in a symbolic link chain using readlink in Linux?
To show all links in a symbolic link chain with readlink in Linux, you can use the `-e` option like this:
```bash
readlink -e /path/to/symlink
```

### How can I suppress error messages when using readlink in Linux?
To suppress error messages when using readlink in Linux, you can use the `-q` or `--quiet` option like this:
```bash
readlink -q /path/to/symlink
```

### How do I display just the target if the link points to a directory with readlink in Linux?
To only display the target if the link points to a directory with readlink in Linux, you can use the `-m` or `--canonicalize-missing` option like this:
```bash
readlink -m /path/to/symlink
```

### How can I have readlink follow all symbolic links and print the final target in Linux?
To have readlink follow all symbolic links and print the final target in Linux, you can use the `-e` or `--canonicalize` option like this:
```bash
readlink -e /path/to/symlink
```
## Applications of the readlink command

- Resolve symbolic links
- Print the resolved path of a symbolic link
- Display the final target of a symbolic link