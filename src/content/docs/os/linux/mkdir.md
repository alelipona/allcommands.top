---
title: mkdir Linux Command Guide
description: Learn how to use the Linux mkdir command to create directories easily and efficiently.
---

The Linux mkdir command is used to create directories in the file system. It allows users to specify the names of the directories they want to create and can also create multiple directories at once. By using the mkdir command, users can organize their files and data efficiently. Overall, the mkdir command is a simple yet powerful tool for managing directories in a Linux environment.

## mkdir Syntax:
```bash
mkdir [option] [directory_name]
```

## Options:
| Option | Description                            |
|--------|----------------------------------------|
| -m     | Set file mode (permissions) of the created directory                  |
| -p     | Create parent directories as needed                                  |
| -v     | Print a message for each created directory                           |

## Parameters:
| Parameter      | Description                            |
|----------------|----------------------------------------|
| directory_name | Name of the directory to be created                                   |

:::caution
Exercise caution when using the mkdir command, especially with the -p option to avoid unintentionally creating multiple directories.
:::
## mkdir Command Samples:
### Create a New Directory
```bash
mkdir new_directory
```
Creates a new directory named "new_directory" in the current location.

### Create Nested Directories
```bash
mkdir -p parent_directory/child_directory
```
Creates a parent directory named "parent_directory" and a nested child directory named "child_directory" within it.

### Verbose Mode
```bash
mkdir -v directory1 directory2 directory3
```
Creates multiple directories ("directory1", "directory2", "directory3") and displays a message for each directory created.

### Specify Permissions
```bash
mkdir -m 755 secure_directory
```
Creates a directory named "secure_directory" with permissions set to 755 (read, write, execute for owner; read and execute for group and others).

### Create Directory with Spaces
```bash
mkdir "directory with spaces"
```
Creates a directory with a name containing spaces by encapsulating the directory name within double quotes.

### Create Directory with Parent
```bash
mkdir -p parent_directory/child_directory/grandchild_directory
```
Creates directories starting with "parent_directory" followed by "child_directory", and finally "grandchild_directory" as a nested directory.

### Create Directories with Specific Group
```bash
mkdir -g developers project1 project2
```
Creates directories for projects "project1" and "project2" with the group ownership set to "developers".
:::tip
When using the mkdir command in Linux, remember to use appropriate permissions and options to create directories with the desired settings. Additionally, you can create multiple directories at once by specifying multiple directory names in a single mkdir command.
:::

## mkdir FAQ:
### How do I use mkdir in Linux?
To use the mkdir command in Linux, execute the following command:
```bash
mkdir directory_name
```

### What is the purpose of the -p option in mkdir?
The -p option in mkdir is used to create parent directories along with the specified directory. This is useful when you want to create a directory and its parent directories if they do not already exist.
```bash
mkdir -p path/to/parent_directory/new_directory
```

### How can I set permissions for a directory while creating it with mkdir?
You can set permissions for a directory while creating it by using the chmod command in combination with the mkdir command. Here is an example:
```bash
mkdir new_directory && chmod 755 new_directory
```

### How can I create multiple directories at once with mkdir?
To create multiple directories at once with mkdir, you can specify the directory names separated by spaces in a single command. Here is an example:
```bash
mkdir directory1 directory2 directory3
```

### How do I prevent mkdir from displaying error messages if the directory already exists?
You can prevent mkdir from displaying error messages if the directory already exists by using the -p option. This option ensures that no error message is shown if the directory is already present.
```bash
mkdir -p existing_directory
```

### Can I use mkdir to create directories with spaces in their names?
Yes, you can create directories with spaces in their names by enclosing the directory name in quotes. Here is an example:
```bash
mkdir "directory with spaces"
```
## Applications of the mkdir command

- Create a new directory
- Create multiple directories at once
- Create directories with specific permissions
- Create parent directories as needed with the -p option
- Create directories with symbolic links or absolute paths
- Create nested directories efficiently