---
title: What is info Linux command?
description: Learn how to use the info command in Linux to access detailed documentation for programs and utilities on the command line.
---

The info command in Linux is used to access detailed documentation for programs and utilities. It provides a more in-depth explanation compared to the man pages, including various sections and hyperlinks for easy navigation.
## info Syntax:
```bash
info [option] [topic]
```
## info Options:

| Option | Description                  |
|--------|------------------------------|
| -f     | Specify the file to read     |
| -k     | Search for a keyword          |
| -h     | Display help message          |
| -o     | Specify the output file       |

:::caution
Be cautious when using the info command as it may have a different navigation system compared to man pages. Make sure to familiarize yourself with the layout of the info documentation to effectively find the information you are looking for.
:::

## Parameters:
| Parameter | Description                             |
|-----------|-----------------------------------------|
| option    | Specifies additional behavior for info   |
| topic     | The topic or file to display             |
## info Command Usage Examples:
### Display Information on a Specific Command
```bash
info ls
```
Displays detailed information on the "ls" command.

### Navigate Through info Pages
```bash
info coreutils
```
Navigates through the info pages related to coreutils.

### Search for Specific Keywords in info Pages
```bash
info --apropos search
```
Searches for specific keywords, in this case, "search," within the info pages.

### Access info Pages Directly
```bash
info bash
```
Accesses the info pages directly for the "bash" command.

### Read Specific Sections Within a Page
```bash
info grep -n
```
Reads a specific section of the "grep" command info pages, in this case, the "-n" option.
:::tip
When using the info command in Linux, make sure to familiarize yourself with navigating and searching within the info pages using commands like `h` for help, `n` for next node, `p` for previous node, and `/` for searching.
:::

### How to view the info manual page in Linux?
To view the manual page of a specific command using info in Linux, use the following command:
```bash
info <command_name>
```

### How to search for a specific keyword in the info manual pages?
To search for a specific keyword in the info manual pages, you can use the following command:
```bash
info --apropos <keyword>
```

### How to navigate within the info pages?
To navigate within the info pages, you can use commands like `n` for the next node, `p` for the previous node, and `u` to go up one level in the info menu.
```bash
info ...
```

### How to get help while using info in Linux?
For help while using the info command in Linux, you can press `h` to display a help menu with available commands.
```bash
info ...
```

### How to follow cross-references within the info manual pages?
To follow cross-references within the info manual pages, use the `f` key to move to the next node or cross-reference.
```bash
info ...
```

### How to exit the info viewer in Linux?
To exit the info viewer in Linux, you can press `q` to quit and close the info pages.
```bash
info ...
```

### How to get a list of available info topics?
To get a list of available info topics, you can use the following command:
```bash
info --index
```
## Applications of the info command

- Access detailed documentation for various commands and utilities
- Learn about the configuration options and usage of different programs
- Navigate through a tree-structured format to understand a topic in depth
- Lookup specific information about a command, function, or concept in Linux