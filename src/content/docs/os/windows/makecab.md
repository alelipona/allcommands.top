---
title: MAKECAB command in Windows
description: Windows MAKECAB command allows users to create cabinet (.cab) files to compress multiple files into a single archive. Learn how to use MAKECAB on Windows.
---

Windows MAKECAB command is a built-in tool that enables users to create cabinet (.cab) files. These compressed archives can include multiple files and are commonly used for software installation packages. By utilizing MAKECAB, users can significantly reduce the size of their files for easier storage and distribution. The command offers various options for controlling the compression process and specifying file attributes within the cabinet. With MAKECAB, users can streamline their file management tasks and optimize their storage space effectively.

## MAKECAB Syntax:
```cmd
makecab [-F <Folder>] [-D <CabinetFile>] [-L <CabinetFolder>] [-V <Verbosity>] [-Z <Compression>] <File List>
```

## Windows MAKECAB Options:
| Option          | Description                                     |
|-----------------|-------------------------------------------------|
| -F <Folder>      | Set target folder for cabinet files.            |
| -D <CabinetFile> | Set the output cabinet file name.               |
| -L <CabinetFolder> | Set the cabinet folder location.              |
| -V <Verbosity>   | Set the level of verbosity (0-3).               |
| -Z <Compression> | Set the compression level (0-99).              |

## MAKECAB Parameters:
| Parameter   | Description                              |
|-------------|------------------------------------------|
| <File List> | List of files to be added to the cabinet. |

:::caution
Exercise caution when using the makecab command, as improper usage can result in data loss or corruption. Always ensure that you have a backup of the files before creating cabinet files. Verify the compression settings and file list to avoid unexpected outcomes.
:::
## How to use MAKECAB command:
### Compress Files in a Directory
```cmd
makecab C:\folder\* C:\compressed_folder\compressed.cab
```
Compresses all files in the specified directory into a CAB file.

### Specify Compression Level
```cmd
makecab /d CompressionType=LZX C:\file.txt C:\compressed_file.cab
```
Specifies the compression type (LZX) when creating a CAB file from a single file.

### Include Subdirectories
```cmd
makecab /s C:\folder\* C:\compressed_folder\compressed.cab
```
Includes all files and subdirectories in the compression process to create a CAB file.

### Verbose Output
```cmd
makecab /V1 C:\folder\* C:\compressed_folder\compressed.cab
```
Provides verbose output during the compression process with a minimal level of details.

### Exclude Files by Extension
```cmd
makecab /EX *.log C:\folder\* C:\compressed_folder\compressed.cab
```
Excludes files with the ".log" extension from being compressed into the CAB file.

### Change Compression Level
```cmd
makecab /L CompressionType=MSZIP C:\file.txt C:\compressed_file.cab
```
Changes the compression type to MSZIP when creating a CAB file from a single file.

### Set Destination Directory
```cmd
makecab /F C:\folder\* /D C:\compressed_folder\compressed.cab
```
Sets the destination directory for the compressed CAB file instead of embedding it within the source directory.

### Display Help Information
```cmd
makecab /?
```
Displays the help information for the MAKECAB command showing all available options and parameters.
:::tip
When using the makecab command in Windows CMD, make sure to provide the necessary options and values to create the desired cabinet (.cab) file successfully. Refer to the makecab documentation for a complete list of available options and their usage.
:::

### How do I use makecab in Windows?
To use the makecab command in Windows, execute the following command:
```cmd
makecab --option <value>
```

### What is the purpose of the makecab command in CMD?
The makecab command in CMD is used to create cabinet (.cab) files. These files are compressed archive files that can contain multiple files and are often used for software installations or file distribution.
```cmd
makecab file1.txt file2.txt output.cab
```

### How can I compress files using the makecab command?
To compress files using the makecab command, specify the files you want to compress and provide an output file name for the cabinet (.cab) file.
```cmd
makecab file1.txt file2.txt output.cab
```

### Can I include multiple files in a single cabinet file with makecab?
Yes, you can include multiple files in a single cabinet file using the makecab command. Simply specify the files you want to include when running the command.
```cmd
makecab file1.txt file2.txt output.cab
```

### How do I specify the compression level when using makecab?
To specify the compression level when using the makecab command, you can use the `/C` option followed by the desired compression level (0-9), where 0 is no compression and 9 is maximum compression.
```cmd
makecab file.txt -C 5 output.cab
```

### Is it possible to create a self-extracting cabinet file with makecab?
Yes, you can create a self-extracting cabinet file with makecab by using the `/E` option when running the command. This will generate a cabinet file that can extract its contents without requiring a separate extraction tool.
```cmd
makecab file.txt -E output.exe
```

### How do I specify additional compression options with makecab?
To specify additional compression options with makecab, you can use the `/D` option followed by the desired compression parameters. These parameters allow you to customize the compression process further.
```cmd
makecab file.txt -D CompressionType=LZX CompressionMemory=21 output.cab
```

## Applications of the MAKECAB Command

- Creating CAB files from one or more source files
- Compressing files to reduce storage space
- Bundling files for distribution or archival purposes