---
title: shred command in Linux
description: Learn about the Linux shred command and how to securely delete files using this powerful tool.
---
The Linux shred command is used to securely delete files by overwriting their contents before unlinking them. This helps prevent data recovery efforts by making it difficult or impossible to retrieve the original data. Shred works by overwriting the file with random data multiple times, ensuring that the original content is effectively erased. This command can be useful when you need to permanently delete sensitive information and ensure that it cannot be recovered.

## shred Syntax:
```bash
shred [OPTION]... FILE...
```
## Linux shred Options:
| Option  | Description                               |
|---------|-------------------------------------------|
| -f      | Change permission to allow writing if necessary                                |
| -n [N]  | Overwrite N times                       |
| -s [N]  | Overwrite N bytes                       |
| -u      | Truncate and remove file after overwriting |
| -v      | Verbose mode                             |
| -x      | Do not expand files on a mounted file system |
| --iterations=N | Overwrite N times (same as -n)    |
| --random-source=FILE | Get random bytes from FILE    |
| --remove[=HOW]       | Like -u but give control on removal   |
| --round=       | Same as --zero, but for each pass wipe a different character   |
| --zero=    | Add a final overwrite with zeros to hide shredding     |

## shred Parameters:
| Parameter    | Description                                      |
|--------------|--------------------------------------------------|
| FILE         | The file(s) to shred                            | 

:::caution
Using the shred command irreversibly deletes files by overwriting them. Be cautious and ensure that you are shredding the correct files as the data cannot be recovered.
:::
## How to use shred command:
### Delete a File Securely
```bash
shred -u -z file.txt
```
This command will securely delete the file "file.txt" by overwriting it three times and then filling it with zeros.

### Shred a Directory and Its Contents
```bash
shred -u directory/
```
This command will securely delete all files and directories within the "directory" by overwriting them with random data three times and then filling them with zeros.

### Shred a File with a Specific Number of Iterations
```bash
shred -n 5 file.txt
```
This command will overwrite the file "file.txt" 5 times with random data before deleting it.

### Shred a File Verbosely
```bash
shred -v file.txt
```
This command will display the progress of overwriting the file "file.txt" with random data before deleting it.

### Shred a Partition
```bash
shred -n 3 -z /dev/sdb1
```
This command will overwrite all data on the partition "/dev/sdb1" three times with random data and then zero it out.

### Shred Free Space on a Disk
```bash
shred -v -z -n 3 /dev/sdb
```
This command will overwrite all free space on the disk "/dev/sdb" three times with random data and then zero it out, displaying the progress.

### Shred a File and Change Its Permissions
```bash
shred --remove=wipes file.txt
```
This command will securely delete the file "file.txt" by overwriting it three times and then filling it with zeros, changing the file's permissions to prevent recovery.

### Shred a File Using a Specific Pattern
```bash
shred -v -n 3 -z -s 1M file.txt
```
This command will overwrite the file "file.txt" three times with random data starting from a 1MB-sized pattern before zeroing it out, displaying the progress.
:::tip
It is important to use the shred command with caution, as it irreversibly deletes files by overwriting them. Always double-check the options and files you are specifying to avoid accidentally losing important data.
:::

### How do I use shred in Linux?
To use the shred command in Linux, execute the following command:
```bash
shred --option <value>
```

### How can I securely delete a file using shred?
You can securely delete a file using shred by running the following command:
```bash
shred --remove <filename>
```

### How do I overwrite data multiple times using shred?
To overwrite data multiple times using the shred command, use the `-n` option to specify the number of times to overwrite. Here is an example:
```bash
shred -n 3 <filename>
```

### How can I shred a directory in Linux?
To shred a directory in Linux, you can use the `shred` command with the `-u` option to remove the directory after shredding its contents. Here is an example:
```bash
shred -u -z -n 3 <directoryname>
```

### How do I force shred to overwrite special files?
To force shred to overwrite special files such as block or character devices, you can use the `-f` option. Here is how you can do it:
```bash
shred -f <specialfile>
```

### How can I shred a file and rename it at the same time in bash?
You can shred a file and rename it at the same time in bash by using the `mv` command along with the `shred` command. Here is an example:
```bash
shred --remove --iterations=3 <filename> && mv <filename>.shred <newfilename>
```

### How do I shred only the content of a file without removing it?
You can shred only the content of a file without removing it by using the `-n` option with a value of `0` to overwrite the file without truncating it. Here is an example:
```bash
shred -n 0 <filename>
```

### How can I shred a file and display progress information?
To shred a file and display progress information during the operation, you can use the `-v` option with the shred command. Here is how you can do it:
```bash
shred -v <filename>
```

## Applications of the shred command

- Securely delete files 
- Shred entire directories 
- Overwrite specific sectors of a file 
- Remove sensitive data before disk disposal 
- Securely erase free disk space 
- Erase a file while preserving some of its structures