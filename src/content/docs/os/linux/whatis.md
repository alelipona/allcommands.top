---
title: Linux whatis command
description: Learn about the Linux whatis command and how to quickly find the description of a command using it.
---

The Linux whatis command is used to quickly find a brief description of a specific command. It is a helpful tool for users who want to understand the purpose of a command without having to search through the manual pages. By simply entering "whatis" followed by the command name, users can access a concise summary of the command's functionality. This can save time and streamline the process of learning new commands in the Linux terminal.

## whatis Syntax:
```bash
whatis [keyword]
```
## Options:
| Option | Description |
|--------|-------------|
| -w     | Match the keyword with a whole word only |
| -r     | Search for the keyword in the names and the short descriptions |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| keyword   | The keyword to search for in the manual pages' short descriptions |
:::caution
Be cautious when using the whatis command as it only searches for matches in the short descriptions of manual pages.
:::
## whatis Usage:
### Displaying Information about the ls Command
```bash
whatis ls
```
Displays a brief description of the "ls" command.

### Finding Information about the cp Command
```bash
whatis cp
```
Retrieves a short summary of the "cp" command.

### Exploring Details about the date Command
```bash
whatis date
```
Shows a concise explanation of the "date" command.

### Checking Information about the mkdir Command
```bash
whatis mkdir
```
Provides a short overview of the "mkdir" command.
:::tip
Remember that the whatis command in Linux is used to display a short description of a command. It is a helpful tool for quickly understanding the purpose of a command without having to refer to the manual pages.
:::

### How do I use whatis in Linux?
To use the whatis command in Linux, execute the following command:
```bash
whatis command_name
```

### What is the difference between whatis and man in Linux?
The main difference between whatis and man in Linux is that whatis provides a brief description of a command, while man displays the detailed manual pages for a command. 

### How can I search for multiple commands using whatis in Linux?
You can search for multiple commands using whatis in Linux by providing the command names separated by spaces. For example:
```bash
whatis ls pwd cd
```

### Can whatis be used to search for command options in Linux?
Yes, whatis can be used to search for command options in Linux by specifying the option along with the command. For example:
```bash
whatis ls --color
```

### How can I display only the names of the commands without the descriptions using whatis in Linux?
To display only the names of the commands without their descriptions using whatis in Linux, you can use the -l (lowercase L) option. For example:
```bash
whatis -l ls
```

### Is it possible to search for commands based on keywords using whatis in Linux?
Yes, it is possible to search for commands based on keywords using whatis in Linux by providing the keyword as a parameter. For example:
```bash
whatis search
```

### Can whatis display information for shell built-in commands in Linux?
Yes, whatis can display information for shell built-in commands in Linux, along with regular external commands. For example:
```bash
whatis cd
```

## Applications of the whatis command

- Display one-line manual page descriptions
- Look up brief descriptions of commands
- Quickly find the purpose of a specific command