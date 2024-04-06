---
title: START Windows command
description: Learn how to use the Windows start command to open a new command window or launch a program quickly. Find out the syntax, options, and practical examples.
---

The Windows start command is a useful tool for opening a new command window, starting a program, or specifying options for how a program should be run. It allows you to launch applications and processes in a new window, enforcing different settings like the window title or priority. Understanding the syntax and available options of the start command can help you streamline your workflow and efficiently manage tasks on your Windows system.
## START Syntax:
```cmd
start [options] [parameters]
```

## Options:
| Option    | Description                              |
|-----------|------------------------------------------|
| /MAX      | Start the window maximized                |
| /MIN      | Start the window minimized                |
| /WAIT     | Wait for the started program to close    |
| /B        | Start application without creating a new window |
| /SEPARATE | Start 16-bit Windows-based program in separate memory space |
| /LOW      | Start application in the IDLE priority class |
| /NORMAL   | Start application in the NORMAL priority class |
| /HIGH     | Start application in the HIGH priority class |
| /REALTIME | Start application in the REALTIME priority class |

## Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| command   | The command, batch file, or executable to run |
| arguments | The arguments to pass to the command |
| path      | The path to the file or folder to open |

:::caution
Using the `start` command incorrectly may result in unintended behavior. Carefully read through the options and parameters to ensure proper usage of the command.
:::
## START CMD Examples:
### Open a File Explorer window
```cmd
start explorer
```
Opens a new File Explorer window.

### Launch a website in the default browser
```cmd
start https://www.google.com
```
Opens the URL in the default web browser.

### Open a specific program
```cmd
start notepad.exe
```
Launches the Notepad application.

### Start a new command prompt window
```cmd
start cmd
```
Opens a new Command Prompt window.

### Open the Control Panel
```cmd
start control
```
Launches the Control Panel interface.

### Open the Windows Calculator
```cmd
start calc
```
Launches the Windows Calculator application.
:::tip
When using the start command in Windows, make sure to include the necessary options and values to specify how you want to start a program or a process. Refer to the command examples for guidance on the correct syntax.
:::

## START Command Help Center:
{Questions}

### How do I use start in Windows?
To use the start command in Windows, execute the following command:
```cmd
start --option <value>
```

### How can I open a specific file with start in Windows?
To open a specific file using the start command in Windows, use the following command:
```cmd
start filename.txt
```

### Can I start a program with specific options using the start command?
Yes, you can start a program with specific options using the start command in Windows. Here is an example command:
```cmd
start /D "C:\Program Files\Application" /MAX program.exe
```

### How do I open a website URL in my default browser using the start command?
To open a website URL in your default browser with the start command in Windows, use this command:
```cmd
start https://www.example.com
```

### Is it possible to start a program minimized with the start command in Windows?
Yes, you can start a program minimized using the start command. Here is an example command:
```cmd
start /MIN program.exe
```

### How do I open a new command prompt window using the start command?
To open a new command prompt window with the start command in Windows, execute the following command:
```cmd
start cmd
```

### Can I run a batch script using the start command in Windows?
Yes, you can run a batch script using the start command. Here is an example command:
```cmd
start script.bat
```

### How can I list all available options for the start command in Windows?
To list all available options for the start command in Windows, you can use the help command. Execute the following command:
```cmd
start /?
```
## Applications of the START Command

- Opening a file or program
- Opening a website or URL
- Running a batch script or command prompt command
- Opening a specific folder or directory
- Opening a Control Panel applet
- Launching a program with specific parameters or options
- Running multiple instances of a program