---
title: OPENFILES command in Windows
description: Manage open files and folders on your Windows system with the OPENFILES command. Learn how to view, disconnect, and manage open files efficiently.
---

The OPENFILES command in Windows allows users to view, disconnect, and manage open files and folders on their system. It provides a way to see which files and folders are currently being accessed, the users or processes that have them open, and the permissions associated with each open file. This command can help users identify potential issues with file locking, troubleshoot file access problems, and efficiently manage open resources on their system.

## OPENFILES Syntax:
```cmd
openfiles [/local] [/query | /disconnect [/id] | /s [/accepteula] [/a] [/op] [/o] [/s <servername>] [/u <username> [/p [<password>]]]
```

## Windows OPENFILES Options:
| Option          | Description                                            |
|-----------------|--------------------------------------------------------|
| /local          | Displays open files on the local system                |
| /query          | Queries and displays open files                       |
| /disconnect     | Disconnects an open file                                |
| /id             | Specifies the ID of the file to disconnect             |
| /s              | Connects to a remote system                             |
| /accepteula     | Automatically accept the EULA                           |
| /a              | Displays all connections and listening endpoints        |
| /op             | Allows administrative operations to be performed        |
| /o              | Resistance logging off                                  |
| /s <servername> | Specifies the name of the remote server                 |
| /u <username>   | Specifies the user context under which the command should execute |
| /p [<password>] | Specifies the password for the given username           |

## OPENFILES Parameters:
There are no specific parameters for the openfiles command.

:::caution
It is recommended to use caution when using the openfiles command as it may display or terminate active file connections, potentially disrupting ongoing operations.
:::
## How to use OPENFILES command:
### Display Open Files on a Remote Computer
```cmd
openfiles /query /s remote-computer
```
Displays the open files on a remote computer named "remote-computer".

### Display Open Files on the Local Computer
```cmd
openfiles /query
```
Displays the open files on the local computer.

### Disconnect a Specific Open File
```cmd
openfiles /disconnect /a FileName
```
Disconnects a specific open file named "FileName" on the computer.

### Disconnect All Open Files
```cmd
openfiles /disconnect /op-all
```
Disconnects all open files on the computer.

### Enable the "Initiator ID" Filter
```cmd
openfiles /local on
```
Enables the "Initiator ID" filter for the local computer to manage open files.

### Set the Maximum Number of Open Files
```cmd
openfiles /local /maxfiles:100
```
Sets the maximum number of open files to 100 for the local computer.

### Display Open Files with a Specific ID
```cmd
openfiles /s remote-computer /id 1234
```
Displays open files by a specific "ID" on a remote computer named "remote-computer".

### Disconnect Open Files with a Specific ID
```cmd
openfiles /disconnect /s remote-computer /id 1234
```
Disconnects open files by a specific "ID" on a remote computer named "remote-computer".
:::tip
When using the openfiles command in Windows, make sure to run the Command Prompt as an administrator to avoid permission issues.
:::

### How do I use openfiles in Windows?
To use the openfiles command in Windows, execute the following command:
```cmd
openfiles --local
```

### How can I list all open files using openfiles?
You can list all open files by running the openfiles command with the `/query` option:
```cmd
openfiles /query
```

### Can I close a specific file using openfiles in CMD?
Yes, you can close a specific file by specifying the `/disconnect` option followed by the connection ID. For example:
```cmd
openfiles /disconnect /id 1234
```

### How do I enable or disable the openfiles service?
To enable or disable the openfiles service in Windows, you can use the `sc` command. For example:
```cmd
sc config "openfiles" start= auto
```

### How can I set the cache size for open files?
You can set the cache size for open files using the `/local` parameter followed by the desired size in bytes. For example:
```cmd
openfiles /local /s 1024
```

### Can I view the opens files on a remote system using openfiles?
Yes, you can view open files on a remote system by running the openfiles command with the `/s` and `/query` parameters. For example:
```cmd
openfiles /s RemoteComputerName /query
```

### How do I disconnect all open files using openfiles in Windows?
To disconnect all open files, you can use the openfiles command with the `/disconnect` option followed by the `/o` parameter. For example:
```cmd
openfiles /disconnect /o
```

### How can I display help information for the openfiles command?
You can display help information for the openfiles command by running:
```cmd
openfiles /?
```
## Applications of the OPENFILES Command

- Viewing a list of open files on a system
- Closing open files and file locks on a system
- Managing shared files and folders in a networked environment