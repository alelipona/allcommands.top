---
title: complete command in MacOS
description: The `complete` command in MacOS allows you to enable advanced autocompletion features for your shell environment.
---

The `complete` command in MacOS is used to enable advanced autocompletion features for your shell environment. By setting up completion rules for different commands, options, and arguments, you can enhance your productivity and streamline your workflow. With the `complete` command, you can customize autocompletion behavior to suit your specific needs and preferences, making your command-line experience more efficient and intuitive.
## complete Syntax:
```bash
command [option] [parameter]
```

## MacOS complete Options:
| Option | Description               |
|--------|---------------------------|
| -a     | Display all files         |
| -l     | Use a long listing format |
| -R     | Recursively list subdirectories |
| -h     | Show file sizes in a human-readable format |

## complete Parameters:
| Parameter   | Description                     |
|-------------|---------------------------------|
| file        | Specifies the file to be listed |

:::caution
Exercise caution while using the command, as it can display sensitive information if not used carefully.
:::
## How to use complete command:
### Complete file or folder path
```bash
complete -f -c cp
```
Completes file or folder paths when using the "cp" command.

### Complete only if a file exists
```bash
complete -f -f -X '!*"'"'"(@n.*"'"'",
```
Completes only if a file exists, useful when combined with specific flags.

### Complete command for specific users
```bash
complete -u -c ls
```
Completes the "ls" command only for specific users.

### Complete for specific groups
```bash
complete -g -c cd
```
Completes the "cd" command for specific groups of users.

### Complete option names
```bash
complete -o ls
```
Completes option names for the "ls" command.

### Complete command options
```bash
complete -o ls -s '-'
```
Completes command options with the "ls" command when using a hyphen.

### Complete based on pattern matching
```bash
complete -g '*(txt|pdf)'
```
Completes based on pattern matching for files with "txt" or "pdf" extensions.

### Complete for specific directories
```bash
complete -D /path/to/directory
```
Completes for specific directories, useful for custom completion of commands related to a specific folder.
:::tip
When using the complete command in MacOS, make sure to familiarize yourself with the various options and values available for customizing tab completion behavior. Experiment with different options to see how they impact the completion results based on your specific requirements.
:::

### How do I use complete in MacOS?
To use the complete command in MacOS, execute the following command:
```bash
complete --option <value>
```

### How do I customize tab completion behavior with complete in MacOS?
To customize tab completion behavior using the complete command in MacOS, you can specify different options and values. For example:
```bash
complete -W "option1 option2 option3" command
```

### How can I list the completions currently defined in MacOS?
To list the completions currently defined in MacOS, you can use the complete command with the -p option:
```bash
complete -p
```

### How do I remove a completion for a specific command using complete in MacOS?
To remove a completion for a specific command in MacOS, you can use the complete command with the -r option followed by the command name:
```bash
complete -r command_name
```

### How do I enable autocompletion for a custom command in MacOS?
To enable autocompletion for a custom command in MacOS, you can define a function that generates the desired completion options and then use the complete command to associate that function with your command:
```bash
_custom_command_autocomplete() {
    # Autocompletion logic
}
complete -F _custom_command_autocomplete custom_command
```

### How do I complete file paths in MacOS using the complete command?
To complete file paths in MacOS using the complete command, you can use the -f option along with the command name:
```bash
complete -f command_name
```

### How can I set multiple completion options for a command with complete in MacOS?
To set multiple completion options for a command in MacOS, you can combine different options within a single complete command. For example:
```bash
complete -W "option1 option2 option3" -o default command_name
```

### How do I provide completions based on a specific pattern in MacOS using the complete command?
To provide completions based on a specific pattern in MacOS using the complete command, you can utilize the -G option followed by the pattern and the command name:
```bash
complete -G 'pattern*' command_name
```
## Applications of the complete MacOS command

- Execute a command with all possible options and arguments
- Display help information for a specific command
- Expand options and arguments from the relevant command's man page and options 
- Complete file paths or commands when typing in the terminal
- Improve efficiency and accuracy in the terminal usage by providing autocomplete suggestions.