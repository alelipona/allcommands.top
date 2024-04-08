---
title: fc command in MacOS
description: Learn how to use the MacOS fc command for easy editing of your last executed command in the terminal.
---

The MacOS fc command allows you to edit and re-execute your previously executed commands in the terminal. With options to open the command in your default editor, you can quickly make changes and run it again. This command provides a convenient way to correct mistakes or modify previous commands without retyping entire lines.

## fc Syntax:
```bash
fc [-e editor] [-nlr] [first [last]]
```
## MacOS fc Options:
| Option | Description                       |
|--------|-----------------------------------|
| -e     | Set the editor to be used         |
| -n     | Suppress line numbers             |
| -l     | List lines, but do not execute    |
| -r     | Reverse the order of the lines    |

## fc Parameters:
| Parameter | Description                                     |
|-----------|-------------------------------------------------|
| first     | First command to edit/re-execute                |
| last      | Last command to edit/re-execute                 |

:::caution
Be cautious when using the fc command, as it gives direct access to editing and executing previous commands. Make sure to double-check the command before executing it, especially when using the -e option to specify an editor.
:::

## How to use fc command:

### Edit and Execute Previous Command
```bash
fc
```
Opens the default text editor to edit and execute the most recent command.

### Edit Previous Command by Number
```bash
fc 123
```
Opens the default text editor to edit and execute the command with the specified number (e.g., 123).

### Edit Range of Previous Commands
```bash
fc 100 105
```
Opens the default text editor to edit and execute the commands in the range from 100 to 105.

### Edit Command Starting with a Specific String
```bash
fc ssh
```
Opens the default text editor to edit and execute the most recent command starting with "ssh".

### Edit and Re-Execute Previous Command
```bash
fc -s
```
Edits and re-executes the most recent command after editing in the default text editor.

### Execute Previous Command Without Editing
```bash
fc -e - 
```
Executes the most recent command without opening the default text editor for editing.

### Edit Previous Command in Specific Editor 
```bash
fc -e vim
```
Opens the specified editor (e.g., vim) to edit and execute the most recent command.

### Display Help Information
```bash
fc --help
```
Shows the help information and usage details for the fc command.
:::tip
When using the fc command in MacOS, remember that you can access previously executed commands using different syntaxes like numerical arguments, ranges, or keywords like "first" and "last." Experiment with these options to optimize your workflow.
:::

### How do I use fc in MacOS?
To use the fc command in MacOS, execute the following command:
```bash
fc --option <value>
```

### How can I edit a previous command using fc in MacOS?
To edit a previous command using the fc command in MacOS, run the following command:
```bash
fc <command>
```

### How can I execute a specific command from my history using fc in MacOS?
To execute a specific command from your history using the fc command in MacOS, use the following syntax:
```bash
fc -s <keyword>
```

### How do I list a range of commands using fc in MacOS?
To list a range of commands using the fc command in MacOS, enter the following command:
```bash
fc -l <start_command_number> <end_command_number>
```

### How can I repeat the last command in the history using fc in MacOS?
To repeat the last command in the history using the fc command in MacOS, simply type:
```bash
fc -e -
```

### How do I reverse the order of commands in the view using fc in MacOS?
To reverse the order of commands in the view when using the fc command in MacOS, run the following command:
```bash
fc -R
```

### How can I execute the last command that started with a specific word using fc in MacOS?
To execute the last command that started with a specific word using the fc command in MacOS, use the following command:
```bash
fc <word>
```

### How do I edit and execute the last command using fc in MacOS?
To edit and execute the last command using the fc command in MacOS, simply type:
```bash
fc
```

### How can I search for a command in the history using a pattern with the fc command in MacOS?
To search for a command in the history using a pattern with the fc command in MacOS, enter the following command:
```bash
fc -e -i <pattern>
```

## Applications of the fc command

- Editing and re-executing previous commands
- Fixing errors in previous commands
- Accessing and editing command history
- Scripting and automating command line tasks