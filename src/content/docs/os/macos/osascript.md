---
title: MacOS osascript command
description: Execute AppleScript commands in macOS using the osascript command line tool. Learn how to run scripts from the command line efficiently.
---

The MacOS osascript command is a useful utility for executing AppleScript commands directly from the command line. This allows users to automate tasks, interact with applications, and control various system functions using scripting languages. With osascript, users can seamlessly integrate AppleScript functionality into shell scripts and terminal commands, streamlining the workflow and enhancing productivity.
## osascript Syntax:
```bash
osascript [option] [parameter]
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -e     | Execute a one-line script     |
| -s     | Uses stdin for script input   |
| -l     | Set the language dialect      |
| -ss    | Uses stdin for Apple event input |
| -so    | Event start offset for file input |

## Parameters:
| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| script    | The script to run                                |
| input     | Input for the script (used with -s and -ss)      |
| dialect   | Scripting language dialect (used with -l)        |
| offset    | Starting position in the event input file (used with -so) |

:::caution
Exercise caution when using the `osascript` command, as incorrect scripts or input can have unintended consequences on your system.
:::
### Get System Information
```bash
osascript -e 'do shell script "system_profiler SPHardwareDataType"'
```
This command uses osascript to retrieve system information by running the `system_profiler` command.

### Display a Notification
```bash
osascript -e 'display notification "Hello, from osascript!" with title "Notification Title"'
```
Shows a system notification with a message and a custom title using the `display notification` command in osascript.

### Execute a Shell Command
```bash
osascript -e 'do shell script "ls -l" with administrator privileges'
```
Executes a shell command with administrator privileges, in this case, listing files in the current directory using osascript.

### Display a Dialog Box
```bash
osascript -e 'display dialog "This is a dialog box" with title "Dialog Title"'
```
Opens a dialog box with a message and a custom title using the `display dialog` command in osascript.

## osascript Usage:
### EXAMPLES
:::tip
When using the osascript command in MacOS, make sure to carefully format the AppleScript syntax within the command to ensure proper execution. Additionally, always test your scripts in a safe environment before implementing them in critical processes.
:::

## Common Questions on osascript Usage:

### How do I run a simple AppleScript using osascript in MacOS?

To run a simple AppleScript using osascript in MacOS, use the following command:
```bash
osascript -e 'display dialog "Hello, World!"'
```

### How do I execute an external AppleScript file with osascript in MacOS?

To execute an external AppleScript file with osascript in MacOS, use the following command:
```bash
osascript path/to/script.scpt
```

### How can I pass arguments to an AppleScript executed with osascript in MacOS?

To pass arguments to an AppleScript executed with osascript in MacOS, use the following command:
```bash
osascript -e 'display dialog "Hello, $1"' -- 'World'
```

### How do I suppress output when running an AppleScript using osascript in MacOS?

To suppress output when running an AppleScript using osascript in MacOS, use the following command:
```bash
osascript -e 'display dialog "Hello, World!"' > /dev/null
```

### How can I execute a JavaScript in an AppleScript file using osascript in MacOS?

To execute a JavaScript in an AppleScript file using osascript in MacOS, use the following command:
```bash
osascript -l JavaScript path/to/script.applescript
```

### How do I get the result of an AppleScript executed through osascript in MacOS?

To get the result of an AppleScript executed through osascript in MacOS, use the following command:
```bash
result=$(osascript -e 'display dialog "Hello, World!"'); echo $result
```

### How can I specify a different language when executing an AppleScript with osascript in MacOS?

To specify a different language when executing an AppleScript with osascript in MacOS, use the following command:
```bash
osascript -l AppleScript path/to/script.applescript
```

## Applications of the osascript command

- Execute AppleScript commands
- Automate tasks in MacOS
- Interact with applications and system preferences
- Access and control various functionalities of MacOS
- Retrieve system information
- Control and manage scripting capabilities in MacOS