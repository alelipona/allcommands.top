---
title: history MacOS Command Guide
description: Learn about the MacOS history command and how to use it to view past terminal commands.
---

The MacOS history command allows users to view a list of previously executed terminal commands. By accessing this command history, users can easily recall and re-run specific commands without having to manually type them again. This feature can improve efficiency and productivity for users who frequently use the terminal for various tasks. The history command displays a numbered list of commands, making it easy to reference and execute specific commands by their corresponding numbers. Additionally, users can customize the behavior of the history command by specifying options such as the number of commands to display or ignoring duplicate commands. By familiarizing themselves with the history command, MacOS users can leverage this tool to streamline their workflow and make the most of their terminal sessions.
## history Syntax:
```bash
history [options] [number]
```

## Options:
| Option | Description             |
|--------|-------------------------|
| -c     | Clear the history list  |
| -d     | Delete a specific entry |
| -a     | Append new history lines to history file |
| -n     | Read all history lines without checking lines for duplicates |
| -r     | Read the history from the history file and append it to the current history list |
| -w     | Write the current history to the history file |
| -p     | Replace the current history with the history lines in the file |

## Parameters:
| Parameter | Description                         |
|-----------|-------------------------------------|
| number    | Recall the command at the given number in the history list | 

:::caution
Exercise caution when using the history command, especially with the -c option as it can permanently delete the history list. Make sure to use it with care.
:::
## history Command Samples:
### Show the Command History
```bash
history
```
Displays the list of previously executed commands.

### Run a Previous Command by Number
```bash
!5
```
Executes the command at position 5 in the command history.

### Search the Command History
```bash
history | grep "keyword"
```
Filters the command history for commands containing the specified keyword.

### Clear Command History
```bash
history -c
```
Clears the entire command history.

### Limit the Number of Commands Displayed
```bash
history 5
```
Displays only the last 5 commands from the history.

### Redirect Command History to a File
```bash
history > command_history.txt
```
Saves the command history to a text file named "command_history.txt".

### Repeat the Last Command Entered
```bash
!!
```
Executes the most recently entered command again.
:::tip
When using the history command in MacOS, keep in mind that it stores a list of previously executed commands in your terminal session. This can be useful for viewing recent commands, repeating commands, or searching for specific commands. You can also customize the behavior of the history command using various options and flags.
:::

## history FAQ:
### How do I view the list of previous commands in MacOS?
To view the list of previous commands in MacOS, simply use the following command:
```bash
history
```

### How do I search for a specific command in the history in MacOS?
To search for a specific command in the history in MacOS, you can use the following command:
```bash
history | grep "keyword"
```

### How do I limit the number of commands displayed in the history in MacOS?
To limit the number of commands displayed in the history in MacOS, you can use the following command with the desired number of lines:
```bash
history <number_of_lines>
```

### How do I clear the history of commands in MacOS?
To clear the history of commands in MacOS, you can use the following command:
```bash
history -c
```

### How do I save the history of commands to a file in MacOS?
To save the history of commands to a file in MacOS, you can use the following command with the filename:
```bash
history > filename.txt
```

### How do I exclude specific commands from being saved in the history in MacOS?
To exclude specific commands from being saved in the history in MacOS, you can use the following command including the command to exclude in the HISTIGNORE variable:
```bash
export HISTIGNORE="command_to_ignore"
```
## Applications of the history command

- Tracking previously executed commands
- Repeating or recalling previous commands
- Analyzing the user's command-line activity
- Troubleshooting by reviewing past commands executed