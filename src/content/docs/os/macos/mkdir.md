---
title: mkdir MacOS Command Guide
description: Learn how to create directories with the mkdir command on MacOS. Understand the syntax and options to efficiently organize your files and folders.
---

The "mkdir" command in MacOS allows users to create directories or folders in the file system. This command is used to organize files and folders efficiently. By specifying the directory name after the command, users can create a new directory within the current working directory. Additionally, users can use options such as "-p" to create parent directories as needed and "-v" to display a message for each directory created. With the mkdir command, users can easily manage their file system and keep their files organized.

## mkdir Syntax:
```bash
mkdir [option] [directory]
```
## Options:
| Option | Description                            |
|--------|----------------------------------------|
| -p     | Create parent directories as needed    |
| -v     | Display a message for each created directory  |
| -m mode| Set permissions for the created directory   |

## Parameters:
| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| directory | The name of the directory to be created         |

:::caution
Exercise caution while using the mkdir command, as creating directories with incorrect permissions or in the wrong locations can have unintended consequences.
:::
## mkdir Command Samples:
### Create a New Directory
```bash
mkdir new_directory
```
Creates a new directory named "new_directory".

### Create Multiple Directories at Once
```bash
mkdir dir1 dir2 dir3
```
Creates three directories named "dir1", "dir2", and "dir3" simultaneously.

### Create Nested Directories
```bash
mkdir -p parent_directory/child_directory
```
Creates a parent directory and a child directory within it in a single command.

### Create a Directory with Specific Permissions
```bash
mkdir -m 755 restricted_directory
```
Creates a directory named "restricted_directory" with specific permission settings (755 in this case).

### Create a Directory with Specified Path
```bash
mkdir /path/to/new_directory
```
Creates a new directory with the specified full path "/path/to/new_directory".

### Create a Directory with an Environment Variable
```bash
mkdir $HOME/my_folder
```
Creates a directory named "my_folder" in the user's home directory using the $HOME environment variable.

### Create Hidden Directory
```bash
mkdir .hidden_folder
```
Creates a hidden directory named ".hidden_folder".
:::tip
When using the mkdir command in MacOS, make sure to specify the full path where you want to create the new directory if it is not in the current working directory. This will ensure that the directory is created in the correct location.
:::

## mkdir FAQ:
### How do I use mkdir in MacOS?
To use the mkdir command in MacOS, execute the following command:
```bash
mkdir new_directory
```

### What are some common options for the mkdir command in MacOS?
Some common options for the mkdir command in MacOS include:
```bash
mkdir -p path/to/directory
```

### How can I create multiple directories at once with mkdir in MacOS?
To create multiple directories at once with mkdir in MacOS, you can use the following command:
```bash
mkdir directory1 directory2 directory3
```

### Is it possible to set permissions for a new directory created with mkdir in MacOS?
Yes, you can set permissions for a new directory created with mkdir in MacOS using the following command:
```bash
mkdir -m 755 new_directory
```

### How can I create a directory inside another directory using mkdir in MacOS?
To create a directory inside another directory using mkdir in MacOS, you can specify the full path of the new directory like this:
```bash
mkdir path/to/parent_directory/new_directory
```

### Can I create a nested directory structure with a single command using mkdir in MacOS?
Yes, you can create a nested directory structure with a single command using mkdir in MacOS by using the `-p` option like this:
```bash
mkdir -p path/to/nested/directory
```
## Applications of the mkdir command

- Creating a new directory
- Creating multiple directories at once
- Specifying the permission mode of the newly created directory
- Creating a directory within another directory (nested directories)
- Creating parent directories along with the specified directory (mkdir -p option)
- Creating directories with specific names or paths