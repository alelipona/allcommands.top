---
title: DIR Windows command
description: How to effectively use the Windows dir command to list files and folders in a directory. Learn the various options and parameters available.
---

The Windows dir command is a powerful tool used to list files and folders within a specified directory. By simply typing "dir" into the command prompt, users can quickly view a list of all files and subdirectories contained within the current directory. Additionally, the dir command offers various options and parameters to customize the output, such as displaying file sizes, dates, and hidden files. This command is extremely useful for navigating and managing directories efficiently in the Windows operating system.

## DIR Syntax:
```cmd
dir [drive:][path][filename] [/A[[:]attributes]] [/B] [/C] [/D] [/L] [/N] [/O[[:]sortorder]] [/P] [/Q] [/S] [/T[[:]timefield]] [/W] [/X] [/4]
```
## Windows DIR Options:
| Option        | Description                                                  |
|---------------|--------------------------------------------------------------|
| /A            | Displays files with specified attributes                     |
| /B            | Uses bare format (no heading information or summary)         |
| /C            | Display the thousand separator in file sizes                |
| /D            | Same as wide, but files are list sorted by column            |
| /L            | Uses lowercase                                                  |
| /N            | New long list format where filenames are on the far right    |
| /O            | List by files in sorted order                                  |
| /P            | Pauses after each screenful of information                    |
| /Q            | Displays the owner of the file                                 |
| /S            | Displays files in specified directory and all subdirectories    |
| /T            | Controls which time field displayed or used for sorting        |
| /W            | Uses wide list format                                           |
| /X            | This displays the short names generated for non-8dot3 file names |
| /4            | Displays four-digit years                                      |

## DIR Parameters:
| Parameter     | Description                                            |
|---------------|--------------------------------------------------------|
| drive:        | Specifies the drive to list                               |
| path          | Specifies the directory or file to list                |
| filename      | Specifies a file or files for the command to process   |

:::caution
It is recommended to be cautious while using the dir command, especially when dealing with system directories or using options that may alter the output, as it can affect the system files and configurations.
:::
## How to use DIR command:
### List all files and folders in the current directory
```cmd
dir
```
This command displays a list of all files and folders in the current directory.

### List only the directories in the current directory
```cmd
dir /ad
```
Using the `/ad` option, this command lists only the directories in the current directory.

### Display detailed information about all files and folders in the current directory
```cmd
dir /s
```
The `/s` option enables the command to display detailed information about all files and folders, including those in subdirectories.

### List files and folders in another directory
```cmd
dir "C:\Users\username\Documents"
```
By specifying the full path of the directory within double quotes, this command lists the files and folders in the specified location.

### List files and folders with a specific extension
```cmd
dir *.txt
```
This command lists only the files with a ".txt" extension in the current directory.

### Display files and folders sorted by size
```cmd
dir /os
```
Using the `/os` option, this command lists files and folders in the current directory sorted by size, from smallest to largest.

### List files and folders with sizes in Kilobytes
```cmd
dir /s /k
```
By combining the `/s` and `/k` options, this command displays files and folders in the current directory with their sizes in kilobytes.

### List files and folders in a tree-like structure
```cmd
dir /s /p
```
The `/s` and `/p` options together create a tree-like structure for listing files and folders in the current directory and its subdirectories.
:::tip
When using the dir command in CMD, remember to utilize various options to customize the output according to your needs. Experiment with different flags such as sorting, filtering, and displaying specific file information to make the most out of this command.
:::

### How do I use dir in CMD?
To use the dir command in CMD, execute the following command:
```cmd
dir
```

### How can I list all files in a directory using dir in CMD?
To list all files in a directory, including hidden files, use the following command:
```cmd
dir /a
```

### How do I display file size with dir in CMD?
To display file size along with other information, use the command:
```cmd
dir /s
```

### How to list contents of a directory recursively with dir in CMD?
To list the contents of a directory and all its subdirectories, run the following command:
```cmd
dir /s /b
```

### How can I save the directory listing to a text file using dir in CMD?
To save the directory listing to a text file, use the following command:
```cmd
dir /s /b > directory_listing.txt
```

### How to list directories only with dir in CMD?
To list only directories and not files, use the following command:
```cmd
dir /ad
```

### How do I sort files by size using dir in CMD?
To sort files by size in descending order, execute the following command:
```cmd
dir /os -s
```

### How can I filter files with a specific extension using dir in CMD?
To filter files with a specific extension, such as .txt, use the following command:
```cmd
dir *.txt
```

### How do I display detailed file information with dir in CMD?
To display detailed file information, including attributes and timestamps, use the following command:
```cmd
dir /Q
```

## Applications of the DIR Command

- List files and directories
- Display file and directory details
- List hidden files and directories
- List files and directories in a specific directory
- Display file and directory information in a specified format