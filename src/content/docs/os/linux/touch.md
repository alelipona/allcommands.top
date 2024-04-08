---
title: touch Linux command
description: Learn how to use the touch command in Linux to create empty files with specified timestamps. Master the touch command efficiently.
---

The Linux touch command is used to create empty files with specified timestamps or update the accessed, modified, or changed times of a file. It is a versatile command that can be used for various purposes such as creating placeholder files, changing file timestamps, and triggering certain actions based on file modification times. The touch command is a powerful tool for managing files and directories efficiently in a Linux environment.
## touch Syntax:
```bash
touch [option] [file]
```
## Options:

| Option   | Description                  |
|----------|------------------------------|
| -a       | Update the access time       |
| -c       | Do not create a new file     |
| -m       | Update the modification time |
| -r       | Use the access and modification times of another file |
| -t       | Use a specific timestamp      |

## Parameters:

| Parameter | Description                                  |
|-----------|----------------------------------------------|
| file      | Name of the file to be created or updated   |

:::caution
Exercise caution when using the touch command, as it can update file timestamps and potentially create new files if used carelessly.
:::
## touch bash Examples:

### Create an Empty File
```bash
touch example.txt
```
Creates a new empty file named "example.txt".

### Update the Timestamp of a File
```bash
touch -m example.txt
```
Updates the modification timestamp of the file "example.txt".

### Create Multiple Empty Files
```bash
touch file1.txt file2.txt file3.txt
```
Creates three empty files named file1.txt, file2.txt, and file3.txt.

### Update Access and Modification Time of a File
```bash
touch -a -m example.txt
```
Updates both the access and modification times of the file "example.txt".

### Create a File with Specific Timestamp
```bash
touch -t 202201011200 example.txt
```
Creates a file "example.txt" with a specific timestamp of January 1st, 2022, 12:00 PM.

### Create a File with a Future Timestamp
```bash
touch -t 202301011200 example.txt
```
Creates a file "example.txt" with a future timestamp of January 1st, 2023, 12:00 PM.
:::tip
When using the touch command in Linux, remember that it is primarily used to update the access and modification timestamps of a file. If the file does not exist, touch will create an empty file. Keep in mind that touch can be useful for various tasks such as updating timestamps, creating placeholder files, or simply checking if a file exists.
:::

## touch Command Help Center:

### How do I use touch in Linux?
To use the touch command in Linux, execute the following command:
```bash
touch filename.txt
```

### What is the purpose of the touch command in Linux?
The touch command in Linux is used to update the access and modification timestamps of a file. It can also be used to create a new empty file if the specified file does not already exist.
```bash
touch filename.txt
```

### How can I update the timestamps of a file using touch?
To update the timestamps of a file to the current time, you can use the touch command with the file name as an argument:
```bash
touch filename.txt
```

### Can I create multiple files at once with the touch command?
Yes, you can create multiple files at once using the touch command by specifying multiple file names as arguments:
```bash
touch file1.txt file2.txt file3.txt
```

### How can I change the access and modification timestamps to a specific date/time using touch?
To change the timestamps of a file to a specific date and time, you can use the -t option followed by a specific timestamp in the format [[CC]YY]MMDDhhmm[.ss]:
```bash
touch -t 202112311200.00 filename.txt
```

### Is there a way to suppress error messages when using touch in Linux?
Yes, you can suppress error messages by using the -c option with the touch command. This will prevent error messages from being displayed if a file does not exist.
```bash
touch -c non_existent_file.txt
```

### How can I update the timestamp of a file without creating a new file if it does not exist?
If you want to update the timestamp of a file without creating a new file if it does not exist, you can use the -m option with the touch command:
```bash
touch -m filename.txt
```

### Can I use touch with symbolic links in Linux?
Yes, you can use touch with symbolic links in Linux. By default, touch will update the timestamps of the symbolic link itself, not the target file that the link points to.
```bash
touch symlink_name
```

## Applications of the touch command

- Create an empty file
- Update the access and modification timestamps of a file
- Change the timestamps of a file to a specific date and time
- Create a new file with specific content and timestamp
- Create multiple files at once using touch with file name patterns