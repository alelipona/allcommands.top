---
title: ROBOCOPY command in Windows
description: Copy files efficiently with the Windows robocopy command. Learn how to use robocopy for fast and reliable file copying tasks.
---

Robocopy is a robust file-copying tool in Windows, known for its speed and reliability. With various options for customizing the copying process, Robocopy is a powerful command-line utility for efficiently transferring files and directories. It can handle tasks such as mirroring directories, copying large files with resume capabilities, and synchronizing content between different locations. Robocopy is especially useful for backup and migration scenarios, thanks to its ability to copy file attributes, security settings, and timestamps.
## ROBOCOPY Syntax:
```cmd
robocopy Source Destination [File] [Options]
```

## Windows ROBOCOPY Options:
| Option         | Description                            |
|----------------|----------------------------------------|
| /S             | Copy subdirectories excluding empty ones|
| /E             | Copy subdirectories, including empty ones|
| /Z             | Copy files in restart mode             |
| /B             | Copy files in Backup mode              |

## ROBOCOPY Parameters:
| Parameter      | Description                            |
|----------------|----------------------------------------|
| Source         | Specifies the path to the source directory|
| Destination    | Specifies the path to the destination directory|
| File           | Specifies the file(s) to copy           |
| Options        | Specifies the options to apply during copy|

:::caution
Exercise caution when using the robocopy command, as incorrect usage can lead to unintended data loss or file corruption. Make sure to double-check your source and destination paths before executing the command.
:::
## How to use ROBOCOPY command:
### Copy a Folder to Another Location
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /E
```
Copies all contents of "SourceFolder" to "DestinationFolder" including subdirectories.

### Mirror a Folder to Another Location
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /MIR
```
Mirrors "SourceFolder" to "DestinationFolder" by copying all files and directories and deleting any not present in the source.

### Copy Files Based on a Certain Date
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /MAXAGE:7
```
Copies only files from "SourceFolder" that are 7 days old or newer to "DestinationFolder".

### Display Detailed Progress Information
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /NDL /NP /NJS /V
```
Displays detailed progress information without listing directories, processing separately per file, and providing verbose output.

### Copy Files in Backup Mode
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /B
```
Copies files in "Backup" mode, allowing Robocopy to override security restrictions if necessary.

### Exclude Specific Files or Directories
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /XF *.txt /XD "ExcludedFolder"
```
Excludes all .txt files and the "ExcludedFolder" from the copying process.

### Copy Files in Restartable Mode
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /ZB
```
Copies files in "Restartable" mode, allowing Robocopy to resume copying in case of interruptions.

### Synchronize Two Directories
```cmd
robocopy "C:\SourceFolder" "D:\DestinationFolder" /MIR /FFT /Z
```
Synchronizes "SourceFolder" to "DestinationFolder" using fast file times and unbuffered I/O.
:::tip
When using robocopy in Windows CMD, it's important to carefully specify the source and destination paths to ensure that files are copied correctly. Additionally, always test the command with the "/L" flag (list only) before executing it to see what files would be affected without actually performing any operations.
:::

### How do I use robocopy in Windows?
To use the robocopy command in Windows, execute the following command:
```cmd
robocopy --option <value>
```

### What are some common options for using robocopy in CMD?
Some common options for using robocopy in CMD include:
```cmd
robocopy /S /E /COPY:DAT
```

### How can I copy only new or changed files with robocopy?
To copy only new or changed files with robocopy, use the "/XO" (exclude older) or "/MIR" (mirror) option. For example:
```cmd
robocopy /MIR /XO source_folder destination_folder
```

### How do I exclude certain files or directories when using robocopy?
To exclude certain files or directories when using robocopy, use the "/XF" (exclude files) or "/XD" (exclude directories) option. For example:
```cmd
robocopy source_folder destination_folder /XF *.txt /XD folder_to_exclude
```

### Can I use robocopy to copy files over the network?
Yes, robocopy can be used to copy files over the network by specifying the network path in the source or destination. For example:
```cmd
robocopy \\server\share\source_folder C:\destination_folder
```

### How do I copy files with permissions and timestamps using robocopy?
To copy files with permissions and timestamps using robocopy, use the "/COPYALL" option. For example:
```cmd
robocopy source_folder destination_folder /COPYALL
```

### How do I display progress while copying files with robocopy?
To display progress while copying files with robocopy, use the "/TEE" (output to console and log file) and "/NP" (no progress) options. For example:
```cmd
robocopy source_folder destination_folder /TEE /NP
```

### How can I retry copying files that failed with robocopy?
To retry copying files that failed with robocopy, use the "/R" (number of retries) and "/W" (wait time between retries in seconds) options. For example:
```cmd
robocopy source_folder destination_folder /R:3 /W:5
```

### How do I log the output of robocopy to a file?
To log the output of robocopy to a file, use the "/LOG" option followed by the log file path. For example:
```cmd
robocopy source_folder destination_folder /LOG:C:\robocopy_log.txt
```

## Applications of the ROBOCOPY Command

1. Backup and restore files and directories
2. Synchronize files between different locations
3. Copy files with specific attributes or properties
4. Mirror content of directories
5. Copy files with support for resuming interrupted transfers
6. Log file copying operations
7. Exclude specific files or directories from the copy process
8. Copy files and directories with security settings and NTFS permissions preserved
9. Multithreaded copying for faster performance
10. Copy files and directories with timestamps preserved