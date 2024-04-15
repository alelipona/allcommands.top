---
title: whatis MacOS command
description: Learn about the MacOS whatis command, a useful tool for quickly looking up concise descriptions of commands in the terminal.
---
The MacOS `whatis` command is a handy tool for quickly retrieving concise descriptions of commands and programs in the terminal. It provides a brief summary of a command's functionality, making it easier to understand its purpose and usage. By simply entering `whatis` followed by the command or program name, users can instantly access helpful information without the need to search through lengthy documentation. This can be especially useful for beginners or those unfamiliar with certain commands, allowing them to quickly grasp their basic usage. Overall, the `whatis` command is a valuable resource for optimizing productivity and efficiency when working in the MacOS terminal environment.
## whatis Syntax:
```bash
whatis [keyword]
```

## whatis Options:
| Option         | Description                           |
|----------------|---------------------------------------|
| -w             | Match the keyword exactly             |
| -c             | Suppress the description output       |
| -a             | Show all occurrences of the keyword   |

:::caution
Avoid using wildcard characters as part of the keyword in order to get accurate results. 
:::

## Parameters:
| Parameter   | Description                        |
|-------------|------------------------------------|
| keyword     | The term or command to look up     |

### Search for the whatis entry for the ls command
```bash
whatis ls
```
Displays a brief description of the "ls" command.

### Find information about the mkdir command
```bash
whatis mkdir
```
Shows a short summary of the "mkdir" command.

### Look up details for the man command
```bash
whatis man
```
Provides a concise explanation of the "man" command.

### Use whatis to find information on the grep command
```bash
whatis grep
```
Retrieves a brief overview of the "grep" command.

### Check the whatis entry for the touch command
```bash
whatis touch
```
Returns a short description of the "touch" command.
```

## whatis Command Usage Examples:
### Search for the whatis entry for the ls command
```bash
whatis ls
```
Displays a brief description of the "ls" command.

### Find information about the mkdir command
```bash
whatis mkdir
```
Shows a short summary of the "mkdir" command.

### Look up details for the man command
```bash
whatis man
```
Provides a concise explanation of the "man" command.

### Use whatis to find information on the grep command
```bash
whatis grep
```
Retrieves a brief overview of the "grep" command.

### Check the whatis entry for the touch command
```bash
whatis touch
```
Returns a short description of the "touch" command.
:::tip
When using the whatis command in MacOS, keep in mind that it is used to display a short description of a command. Make sure to provide the exact command name as an argument to get the relevant information. If you are unsure about a specific command, you can always use the man command to access the full manual for that command.
:::

{​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​## How do I use whatis in MacOS?}
To use the whatis command in MacOS, execute the following command:
```bash
whatis ls
```

{## How can I get brief descriptions of multiple commands in MacOS?}
To get brief descriptions of multiple commands in MacOS, you can provide the command names as arguments, like this:
```bash
whatis ls mkdir rm
```

{## How do I search for a specific command description in MacOS?}
To search for a specific command description in MacOS, you can use grep in combination with whatis, as shown below:
```bash
whatis -l | grep -i "copy"
```

{## Is it possible to show only exact matches with the whatis command in MacOS?}
Yes, you can show only exact matches with the whatis command in MacOS by using the -w option, like this:
```bash
whatis -w mkdir
```

{## How can I display the location of the command's man page using whatis in MacOS?}
To display the location of the command's man page using whatis in MacOS, you can use the -w option, for example:
```bash
whatis -w pwd
```

{## How to ignore case sensitivity when using whatis in MacOS?}
You can ignore case sensitivity when using the whatis command in MacOS by combining it with grep using the -i option, like this:
```bash
whatis -l | grep -i "PRINTF"
```

{## How to get a list of all available commands and their descriptions with whatis in MacOS?}
To get a list of all available commands and their descriptions in MacOS, simply run the whatis command without any arguments, like this:
```bash
whatis
```

{## Can I use wildcards with the whatis command in MacOS?}
Yes, you can use wildcards with the whatis command in MacOS to search for commands with specific patterns, for example:
```bash
whatis '*conf'
```

## Applications of the whatis command

1. Displays a one-line description for a specified command
2. Helps users quickly find the purpose or usage of a particular command in the MacOS terminal