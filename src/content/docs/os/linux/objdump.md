---
title: What is objdump Linux command?
description: Explore how to use the objdump command in Linux for analyzing object files and binaries efficiently.
---

The objdump command in Linux is used for analyzing object files and binaries. It provides information about the executable files, sections, symbols, and disassembled machine code. This tool is helpful for debugging, understanding file structure, and reverse engineering.

## objdump Syntax:
```bash
objdump [options] <file>
```
## objdump Options:

| Option       | Description                               |
|--------------|-------------------------------------------|
| -a, --archive| Display the archive headers               |
| -d, --disassemble | Display assembler contents of executable sections |
| -h, --section-headers | Display the section headers |
| -x, --all-headers | Display all headers                      |
| -t, --syms   | Display the symbol table                  |
| -T, --dynamic-syms | Display the dynamic symbol table       |
| -r, --relocs | Display the relocations in the file         |
| -R, --dynamic-relocs | Display dynamic relocations         |

:::caution
Exercise caution when using objdump command as it can display sensitive information about the executable file you are inspecting.
:::

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| file      | The executable file to be analyzed     |
## objdump Command Usage Examples:
### Display File Header Information
```bash
objdump -f executable_file
```
This command displays the file header information of the specified executable file.

### Display Section Headers
```bash
objdump -h executable_file
```
Displays the section headers of the specified executable file.

### Disassemble All Sections
```bash
objdump -d executable_file
```
Disassembles all sections in the specified executable file.

### Display Symbol Table
```bash
objdump -t executable_file
```
Displays the symbol table of the specified executable file.

### Disassemble Specific Section
```bash
objdump -d --section=.text executable_file
```
Disassembles a specific section (in this case, .text) of the specified executable file.
:::tip
When using the objdump command in Linux, make sure to carefully read the options available in the command's manual (`man objdump`) to understand how to extract the desired information from binary files effectively.
:::

### How do I use objdump in Linux?
To use the objdump command in bash, execute the following command:
```bash
objdump -d executable_file
```

### What is the purpose of objdump in Linux?
The objdump command is used for displaying information about object files, libraries, and executables.

### How can I display the headers of a binary file using objdump?
To display the headers of a binary file using objdump, run the following command:
```bash
objdump -h executable_file
```

### How can I disassemble all sections of a binary file using objdump?
You can disassemble all sections of a binary file using objdump by executing the following command:
```bash
objdump -d executable_file
```

### How do I list the symbols in a binary file with objdump?
To list the symbols in a binary file using objdump, use the following command:
```bash
objdump -t executable_file
```

### How to generate raw symbol table with line numbers using objdump?
To generate a raw symbol table with line numbers using objdump, run the command below:
```bash
objdump -t -S executable_file
```

### How can I view the dynamic symbol table of a binary file with objdump?
To view the dynamic symbol table of a binary file using objdump, execute the following command:
```bash
objdump -T executable_file
```

### How can I disassemble a particular section of a binary file with objdump?
You can disassemble a specific section of a binary file using objdump by running the command below:
```bash
objdump -d --section=.text executable_file
```
## Applications of the objdump command

- Disassembling executable files
- Analyzing object files
- Extracting information about sections in a binary
- Examining symbol tables
- Inspecting dynamic libraries
- Identifying architecture information
- Generating architecture specific information