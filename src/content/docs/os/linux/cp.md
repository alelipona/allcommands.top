---
title: What is cp Linux command?
description: Copy files and directories in Linux using the cp command. Learn how to copy files, directories, and preserve attributes with examples.
---

The Linux cp command is used to copy files and directories. It allows you to create exact copies of files while preserving their attributes like permissions and timestamps. With cp, you can also copy multiple files at once, copy directories recursively, and specify a different destination for the copied files.

## cp Syntax:
```bash
cp [option] [source] [destination]
```

## cp Options:
| Option | Description                     |
|--------|---------------------------------|
| -a     | Preserve ownership and mode      |
| -i     | Prompt before overwrite          |
| -r     | Copy directories recursively     |
| -u     | Copy only when the source file is newer than the destination file |
| -v     | Verbose mode                     |

:::caution
Exercise caution when using the cp command, as it can overwrite existing files without warning. Always double-check your source and destination paths before executing the command.
:::

## Parameters:
| Parameter  | Description                          |
|------------|--------------------------------------|
| source     | The file or directory to be copied   |
| destination| The destination path for the copied file/directory |
## cp Command Usage Examples:
### Copy a File to a Specific Destination
```bash
cp file.txt /home/user/Documents/
```
Copies the file "file.txt" to the specified destination "/home/user/Documents/".

### Copy Multiple Files to a Directory
```bash
cp file1.txt file2.txt file3.txt /home/user/Documents/
```
Copies multiple files (file1.txt, file2.txt, file3.txt) to the directory "/home/user/Documents/".

### Recursive Copy of a Directory
```bash
cp -r source_directory/ destination_directory/
```
Recursively copies all files and subdirectories from "source_directory" to "destination_directory".

### Copy a File and Preserve Timestamps
```bash
cp -p file.txt new_file.txt
```
Copies the file "file.txt" to "new_file.txt" while preserving the original file's timestamps.

### Quiet Copy (Suppress Output)
```bash
cp -q file.txt /home/user/Documents/
```
Copies the file "file.txt" to "/home/user/Documents/" quietly without displaying the copied file's details.
:::tip
When using the cp command in Linux, make sure to double-check your command arguments and options before executing to prevent accidentally overwriting important files or directories.
:::

### How do I copy a file in Linux?
To copy a file in Linux using the cp command, use the following syntax:
```bash
cp file1.txt file2.txt
```

### How do I copy a directory in Linux?
To copy a directory in Linux with all its contents using cp, you can use the following command:
```bash
cp -r directory1 directory2
```

### How do I force the copy operation in Linux?
To force the copy operation in Linux, use the `-f` option with the cp command. This will overwrite any existing destination file without prompting for confirmation. For example:
```bash
cp -f file1.txt file2.txt
```

### How do I preserve file attributes when copying in Linux?
To preserve file attributes like permissions, ownership, and timestamps when copying in Linux, use the `-p` option with the cp command. Here's an example:
```bash
cp -p file1.txt file2.txt
```

### How do I copy files interactively in Linux?
To copy files interactively in Linux, you can use the `-i` option with the cp command. This will prompt you before overwriting any existing destination files. For example:
```bash
cp -i file1.txt file2.txt
```

### How do I copy multiple files to a directory in Linux?
To copy multiple files to a directory in Linux, specify the destination directory at the end of the cp command. Here's an example:
```bash
cp file1.txt file2.txt directory/
```

### How do I display the copy progress in Linux?
To display the copy progress in Linux while using the cp command, you can use the `pv` command in combination with cp. Here's an example:
```bash
cp file.iso /dev/sdX | pv | dd of=/dev/sdY bs=4M
```

### How do I copy files excluding certain patterns in Linux?
To copy files while excluding certain patterns in Linux, you can use the `rsync` command with the `--exclude` option. Here's an example:
```bash
rsync -av --exclude='*.log' sourcedir destdir
```

## Applications of the cp command

- Copy files
- Copy directories
- Copy multiple files into a directory
- Make backups of files
- Preserve file attributes such as ownership and timestamps
- Update existing files with newer versions
- Copy files while renaming them
- Copy files across different file systems