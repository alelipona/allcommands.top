---
title: What is TASKLIST Windows command?
description: Discover how to use the TASKLIST command in Windows to view a list of running processes and their details.
---

The TASKLIST command in Windows allows users to view a list of currently running processes on their system, along with detailed information about each process. It provides an overview of the processes, including the process ID, session name, memory usage, and more. This command is useful for monitoring system performance and troubleshooting issues related to running processes.
## TASKLIST Syntax:
```cmd
tasklist [/s <system>] [/u <username> [/p [<password>]]] [/m [<module>] | /svc | /v] [/fo {TABLE | LIST | CSV}] [/nh] [/fi <filter>] [/tr "<TaskName>"]
```
## TASKLIST Options:

| Option    | Description                                                  |
|-----------|--------------------------------------------------------------|
| /s        | Specifies the name or IP address of a remote computer        |
| /u        | Specifies the user context under which the command should execute |
| /p        | Specifies the password for the given user context            |
| /m        | List all tasks that have dynamic-link libraries (DLLs) loaded |
| /svc      | Display services hosted in each process                     |
| /v        | Specifies that the verbose information should be displayed   |
| /fo       | Specifies the format you want the output to be displayed in  |
| /nh       | Specifies that the "Column Header" should not be displayed   |
| /fi       | Displays tasks that meet the specified criteria             |
| /tr       | Specifies the title or name of the window                    |


:::caution
Caution: Be cautious while using the tasklist command as it displays detailed information which may contain sensitive data.
:::

## Parameters:
| Parameter  | Description                                                  |
|------------|--------------------------------------------------------------|
| <system>   | The name or IP address of a remote computer                  |
| <username> | The user context under which the command should execute      |
| <password> | The password for the given user context                      |
| <module>   | Display tasks that have dynamic-link libraries (DLLs) loaded |
| <filter>   | Display tasks that meet the specified criteria               |
| <TaskName> | The title or name of the window                              |
## TASKLIST Command Usage Examples:
### List all running tasks
```cmd
tasklist
```
Shows a list of all tasks currently running on the system.

### List tasks along with memory usage
```cmd
tasklist /v
```
Displays a list of tasks with additional information such as memory usage.

### Filter tasks by a specific image name
```cmd
tasklist /fi "imagename eq notepad.exe"
```
Lists tasks that match the image name "notepad.exe".

### List tasks on a remote computer
```cmd
tasklist /s Remote_Computer /u domain\username /p password
```
Displays a list of tasks running on a remote computer by providing the necessary credentials.

### Save the tasklist to a file
```cmd
tasklist /fo csv > tasks.csv
```
Saves the tasklist output to a CSV file named tasks.csv.
:::tip
When using the tasklist command in Windows CMD, make sure to familiarize yourself with the available options and filters to customize the output according to your requirements.
:::

### How do I use tasklist in Windows?
To use the tasklist command in CMD, execute the following command:
```cmd
tasklist
```

### How can I display detailed information with tasklist?
To display detailed information along with the tasklist command, use the "/v" option. 
```cmd
tasklist /v
```

### How can I filter tasklist results by image name?
To filter tasklist results by image name, you can use the "/fi" option along with the "imagename" parameter. 
```cmd
tasklist /fi "imagename eq chrome.exe"
```

### How to output tasklist results to a file?
To output the tasklist results to a file, you can use the ">" symbol followed by the file name. 
```cmd
tasklist /fo csv > tasklist_output.csv
```

### How to sort tasklist results by a specific column?
To sort the tasklist results by a specific column, you can use the "/nh" option to skip the header and the "/fi" option with the desired column name. 
```cmd
tasklist /nh /fi "memusage gt 100000" /fi "status eq running" | sort /+55
```

### How can I list processes from a remote system with tasklist?
To list processes from a remote system, use the "/s" option followed by the remote system name. 
```cmd
tasklist /s RemoteComputerName
```

### How do I specify the format of the tasklist output?
To specify the format of the tasklist output, use the "/fo" option followed by the desired format such as "table", "list", "csv", "html", or "xml". 
```cmd
tasklist /fo table
```

### How do I display tasklist in a specific language?
To display the tasklist output in a specific language, you can use the "/s" option followed by the language identifier. 
```cmd
tasklist /fi "status eq running" /s ar
```
## Applications of the TASKLIST Command

1. Displaying a list of currently running processes
2. Showing detailed information about processes such as process ID, session name, memory usage, and more
3. Checking for specific processes running on the system
4. Monitoring CPU and memory usage by processes
5. Identifying potential issues with specific applications or services
6. Debugging applications by viewing their associated processes
7. Listing processes to troubleshoot system performance
8. Killing or ending processes using the tasklist command options