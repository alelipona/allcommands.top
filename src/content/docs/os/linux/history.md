---
title: history Linux command
description: Learn about the Linux history command, its usage, and options for browsing through previously entered commands and repeating them.
---

The Linux history command allows users to view a list of previously executed commands, making it easy to find and repeat specific commands. By default, the history command displays the list of commands along with their line numbers, which can be used to re-execute a specific command easily. Users can also search through their command history, clear the history, or limit the number of commands stored in history. This command is particularly useful for recalling and repeating complex or frequently used commands without having to retype them.
## history Syntax:
```bash
history [options] [num]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -c     | Clear the history list       |
| -w     | Write the current history to the history file |

## Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| num       | Display the last num commands in history | 

:::caution
Exercise caution when using the history command as it may display sensitive information such as passwords or commands that contain sensitive data.
:::
## history bash Examples:
### Display Command History
```bash
history
```
This command will display a list of previously executed commands along with their respective line numbers.

### Search Command History
```bash
history | grep "keyword"
```
This command will search the command history for lines containing a specific keyword.

### Repeat the Last Command
```bash
!!
```
This command will repeat the last command executed.

### Execute a Specific Command from History
```bash
!n
```
Replace 'n' with the line number of the command in history to execute that specific command.

### Clear Command History
```bash
history -c
```
This command will clear all entries from the command history.

### Limit the Number of Commands Displayed
```bash
history 5
```
This command will display the last 5 commands in the history.
:::tip
When using the history command in Linux, keep in mind that the command history is stored in memory during a session and written to a history file when the session is completed. By default, the history file is located at ~/.bash_history. To view the command history from a file, you can simply use the history command without any options.
:::

### How can I view my command history in Linux?
To view your command history in Linux, simply execute the following command:
```bash
history
```

### How do I search my command history in Linux?
To search your command history in Linux, you can use the history command with grep. For example, to search for a specific command like "ls", you can use:
```bash
history | grep ls
```

### How can I clear my command history in Linux?
To clear your command history in Linux, you can use the history command with the -c option. Execute the following command:
```bash
history -c
```

### How do I display the time stamps with command history in Linux?
To display time stamps along with your command history in Linux, you can use the history command with the -t option. Simply run the following command:
```bash
history -t
```

### How can I limit the number of commands displayed in the history in Linux?
To limit the number of commands displayed in the history in Linux, you can use the history command with the -n option followed by the number of commands you want to display. For example, to display the last 10 commands, use:
```bash
history -n 10
```

### How do I save my command history to a file in Linux?
To save your command history to a file in Linux, you can use the history command with the -w option followed by the file path where you want to save the history. Execute the following command:
```bash
history -w /path/to/file.txt
```

### How can I execute a specific command from my command history in Linux?
To execute a specific command from your command history in Linux, you can use the history command with ! followed by the command number. For example, to execute the command number 5 from history, use:
```bash
!5
```

## Applications of the history command

- Display the list of previously executed commands
- Repeat or re-execute past commands
- Search for specific commands in the command history
- Customize the history settings
- Clear command history
- Analyze usage patterns
- Troubleshoot command-related issues