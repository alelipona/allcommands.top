---
title: Windows LOADHIGH command
description: Execute programs in upper memory with the Windows LOADHIGH command. Optimize memory usage for improved system performance.
---

The Windows LOADHIGH command allows users to execute programs in upper memory, optimizing memory usage for improved system performance. This command can help free up conventional memory space by loading programs into upper memory blocks, typically between 640KB and 1MB. By utilizing upper memory, users can achieve better system performance and efficiency.

## LOADHIGH Syntax:
```cmd
LOADHIGH [drive:] path\file
```
## Options:
| Option   | Description                           |
|----------|---------------------------------------|
| NONE     | Executes the specified program in upper memory. |

## Parameters:
| Parameter  | Description                                      |
|------------|--------------------------------------------------|
| drive:     | Specifies the drive letter for the program file. |
| path\file  | Specifies the path and filename of the program to be executed. |

:::caution
The LOADHIGH command should be used with caution as incorrectly specifying the drive, path, or filename can result in the program not being executed as intended or possible system errors.
:::
## LOADHIGH Usage:
### Load a Program into High Memory
```cmd
loadhigh program.exe
```
This command loads the specified program into high memory, thereby freeing up conventional memory for other applications.

### Load a Device Driver into High Memory
```cmd
loadhigh driver.sys
```
Loads the device driver specified by "driver.sys" into high memory, helping to optimize system resources.

### Load Command of a Batch File into High Memory
```cmd
loadhigh -? < batchfile.bat
```
Executes the load command from a batch file while loading it into high memory, enhancing the overall performance of the batch file.

### Load a Memory-Intensive Application in High Memory
```cmd
loadhigh -h myapp.exe highmem
```
Runs the memory-intensive application "myapp.exe" in high memory using the loadhigh command, which can help improve system stability when running resource-intensive applications.
:::tip
Ensure that you use the loadhigh command only with executable files that are compatible with being loaded high in memory. Using loadhigh with incompatible files may lead to system instability or errors.
:::

## Common Questions on LOADHIGH Usage:
### How do I use loadhigh in Windows?
To use the loadhigh command in Windows, execute the following command:
```cmd
loadhigh --option <value>
```

### What does the loadhigh command do in Windows?
The loadhigh command in Windows loads a program into upper memory, freeing conventional memory for other applications to use.

### When should I use loadhigh in Windows?
It is recommended to use the loadhigh command in Windows when you want to optimize memory usage by loading a program into upper memory, especially on systems with limited conventional memory.

### Can loadhigh be used with any type of file in Windows?
No, the loadhigh command in Windows is designed to work with executable files (.exe) that can be safely loaded high in memory.

### Is there a maximum file size limit for using loadhigh in Windows?
Yes, there may be a file size limit for using loadhigh in Windows, as certain files may not be supported for loading into upper memory. 

### How can I check if a file is compatible with using loadhigh in Windows?
You can check if a file is compatible with using loadhigh in Windows by trying to execute the loadhigh command with the file and observing if it loads successfully into upper memory.

### Are there any risks associated with using loadhigh in Windows?
Using the loadhigh command in Windows with incompatible files or incorrectly may lead to system crashes, errors, or instability, so it is important to use it with caution.

## Applications of the LOADHIGH Command

- Running memory-intensive applications
- Loading device drivers into upper memory
- Freeing conventional memory for other processes
- Improving system performance by utilizing upper memory