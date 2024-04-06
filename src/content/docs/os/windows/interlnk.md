---
title: What is INTERLNK Windows command?
description: Learn how to use the INTERLNK command in Windows for file transfer between two computers over a serial or parallel connection.
---

The INTERLNK command in Windows allows users to transfer files between two computers using a serial or parallel connection. This feature enables efficient data exchange without the need for external storage devices, providing a convenient solution for network-less environments.

## INTERLNK Syntax:
```cmd
C:\INTERLNK [drive1] [drive2]
```
## INTERLNK Options:
| Option | Description                   |
|--------|-------------------------------|
|   None | No options available for this command. |

:::caution
The INTERLNK command can only be used on DOS-based systems with the INTERLNK program installed. It is not available in modern versions of Windows.
:::

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
|  [drive1] | Specifies the drive letter or network path of the source drive.  |
|  [drive2] | Specifies the drive letter or network path of the destination drive. |
## INTERLNK Command Usage Examples:
### Connect to Another Computer via INTERLINK Cable
```cmd
interlnk connect
```
Allows you to establish a connection to another computer using an INTERLNK cable.

### List Files and Directories on Connected Computer
```cmd
interlnk dir
```
Displays a list of files and directories on the computer that is connected via INTERLNK.

### Copy Files from Connected Computer
```cmd
interlnk copy c:\file.txt
```
Copies the file "file.txt" from the connected computer to the current computer.

### Delete a File on the Connected Computer
```cmd
interlnk del c:\documents\file.doc
```
Deletes the file "file.doc" from the "documents" directory on the connected computer.

### Disconnect from Another Computer
```cmd
interlnk disconnect
```
Closes the connection to the computer that was established using INTERLNK.
:::tip
When using the interlnk command in Windows CMD, ensure that you have the necessary permissions to access the desired files or directories, as well as the correct syntax for the command options you intend to use.
:::

### How do I use interlnk in Windows?
To use the interlnk command in CMD, execute the following command:
```cmd
interlnk --option <value>
```

### How do I connect two computers using interlnk in Windows?
To connect two computers using interlnk in Windows CMD, you can use the following command:
```cmd
interlnk \computer1\shared_folder\ \computer2\destination_folder\
```

### How do I transfer files with interlnk in Windows?
To transfer files using interlnk in Windows CMD, you can use the following command:
```cmd
interlnk /d \computer1\file.txt \computer2\
```

### How can I check the status of a file transfer with interlnk in Windows?
To check the status of a file transfer using interlnk in Windows CMD, you can use the following command:
```cmd
interlnk /s
```

### How do I disconnect computers after using interlnk in Windows?
To disconnect computers after using interlnk in Windows CMD, you can use the following command:
```cmd
interlnk /q
```

### How do I list the connected computers with interlnk in Windows?
To list the connected computers using interlnk in Windows CMD, you can use the following command:
```cmd
interlnk /l
```

### Can I transfer entire directories with interlnk in Windows CMD?
Yes, you can transfer entire directories using interlnk in Windows CMD by specifying the source and destination directories in the command:
```cmd
interlnk /d /s \computer1\folder \computer2\
```

### How do I display help information for the interlnk command in Windows?
To display help information for the interlnk command in Windows CMD, you can use the following command:
```cmd
interlnk /?
```
## Applications of the INTERLNK Command

- Connecting two computers using a parallel port
- Transferring files between connected computers
- Sharing resources such as printers or storage devices