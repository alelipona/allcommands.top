---
title: What is nm Linux command?
description: Learn about the nm command in Linux and how it is used to display symbol information from object files.
---

The Linux nm command is a powerful tool used to display symbol information from object files. It helps users examine binary files and libraries to understand the symbols present within them. This command is commonly used in debugging and analyzing compiled programs.

## nm Syntax:
```bash
nm [options] [object-file]
```

## nm Options:
| Option         | Description                            |
|----------------|----------------------------------------|
| -A, --print-file-name | Print the name of the file before its symbols. |
| -C, --demangle | Decode (demangle) low-level symbol names into user-level names. |
| -D, --dynamic | Display dynamic symbols instead of normal symbols. |
| -f <format>, --format=<format> | Specify the output format for the symbols. |
| -l, --line-numbers | Show line numbers where symbols were found. |
| -n, --numeric-sort | Sort symbols numerically. |
| -p, --no-sort | Do not sort the symbols. |
| -t <sortable-column>, --radix-sort=<sortable-column> | Sort symbols on the specified column. |
| -S, --print-size | Show the size of the symbols. |
| -u, --undefined-only | Show only undefined symbols. |

## Parameters:
| Parameter   | Description                            |
|-------------|----------------------------------------|
| object-file | The object file to examine for symbols. |
## nm Command Usage Examples:
### Display Symbols in a Binary File
```bash
nm /usr/bin/ls
```
Displays the symbols (functions and variables) in the binary file "ls".

### Display Only External Symbols
```bash
nm -g /usr/bin/ls
```
Displays only the external symbols in the binary file "ls".

### Display Symbols in a Shared Library
```bash
nm /usr/lib/libc.so
```
Displays the symbols in the shared library "libc.so".

### Display Demangled C++ Symbols
```bash
nm -C /usr/bin/program
```
Displays demangled C++ symbols in the binary file "program".

### Filter Symbols by Name
```bash
nm /usr/bin/program | grep my_function
```
Filters and displays symbols with the name "my_function" in the binary file "program".
:::tip
When using the nm command in Linux, make sure to provide the appropriate options and arguments to get the desired output. Understanding the different options and flags available with nm can help you extract valuable information about object files and binaries.
:::

### How do I use nm in Linux?
To use the nm command in bash, execute the following command:
```bash
nm /path/to/your/file
```

### What are the common options used with nm in Linux?
To display the symbol table of an object file using nm in Linux, you can use the `-S` option. Here's an example:
```bash
nm -S /path/to/your/file
```

### How can I filter the output of nm in Linux?
You can filter the output of nm in Linux by using grep to search for specific symbols. For example:
```bash
nm /path/to/your/file | grep main
```

### How do I show only undefined symbols with nm in Linux?
To display only undefined symbols using nm in Linux, you can use the `-u` option. Here's how you can do it:
```bash
nm -u /path/to/your/file
```

### How can I demangle C++ symbol names with nm in Linux?
To demangle C++ symbol names when using nm in Linux, you can use the `--demangle` option. Here's an example:
```bash
nm --demangle /path/to/your/file
```

### How do I display the size of symbols with nm in Linux?
You can display the size of symbols using nm in Linux by using the `-S` and `-l` options together. Here's how you can do it:
```bash
nm -S -l /path/to/your/file
```

### How can I get the full path for symbols with nm in Linux?
To show the full path for each symbol when using nm in Linux, you can use the `-A` option. Here's an example:
```bash
nm -A /path/to/your/file
```

### How do I list only external defined symbols with nm in Linux?
To list only external defined symbols using nm in Linux, you can use the `-g` and `-D` options together. Here's an example:
```bash
nm -g -D /path/to/your/file
```

## Applications of the nm command

- Display symbols from object files
- List shared library dependencies
- Show the type of symbols (e.g., function, object, etc.)
- Check for the presence of specific symbols in binary files
- Identify undefined symbols in an object file