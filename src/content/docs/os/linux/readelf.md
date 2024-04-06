---
title: What is readelf Linux command?
description: Discover how the readelf Linux command can help you analyze ELF files easily and efficiently.
---

The readelf command in Linux provides detailed information about ELF files, including headers, sections, and symbols. It is a powerful tool for developers and system administrators to analyze executables and libraries.

## readelf Syntax:
```bash
readelf [options] elf-file
```
## readelf Options:
| Option | Description |
|--------|-------------|
| -a     | Equivalent to -h -l -S -s -r -d -V -A -I. |
| -h     | Display the ELF file header. |
| -l     | Display the program headers. |
| -S     | Display the sections' headers. |
| -s     | Display the symbol table. |
| -r     | Display the relocations. |
| -d     | Display the dynamic section. |
| -V     | Display the version sections. |
| -A     | Display the special sections. |
| -I     | Display the information sections. |
| -e     | Displays the headers read from the section headers. |
| -p     | Displays section names instead of numbers. |
| -u     | Displays the symbol table name instead of number. |
| -w[lLiaprmfFsoRt] | Enable warnings for various conditions. |
| -x <number or symbol name> | Displays the contents of the file at the specified offset. |

:::caution
Exercise caution when using the readelf command as it provides detailed information about ELF files which can be overwhelming for beginners and may require a good understanding of the ELF format.
:::

## Parameters:
| Parameter | Description |
|-----------|-------------|
| elf-file  | The ELF file to be analyzed. |
## readelf Command Usage Examples:
### Displaying the ELF Header of a Binary File
```bash
readelf -h binary_file
```
Displays the ELF header information of the specified binary file.

### Displaying Symbol Table Information
```bash
readelf -s binary_file
```
Displays the symbol table information of the specified binary file.

### Displaying Section Headers
```bash
readelf -S binary_file
```
Displays the section headers of the specified binary file.

### Displaying Dynamic Section Information
```bash
readelf -d binary_file
```
Displays the dynamic section information of the specified binary file.

### Displaying Program Headers
```bash
readelf -l binary_file
```
Displays the program headers of the specified binary file.
:::tip
When using the readelf command in Linux, it is important to understand the various options available to extract specific information from executable files. Familiarize yourself with the different flags and their functions to effectively analyze binary files.
:::

### How do I use readelf in Linux?
To use the readelf command in bash, execute the following command:
```bash
readelf --file-header <executable_file>
```

### What information can I extract with readelf?
You can extract various information such as the file header, section headers, program headers, symbol tables, dynamic section, relocation entries, and notes from an executable file using readelf in Linux.

### How can I display the section headers of an executable file with readelf?
To display the section headers of an executable file using readelf, run the following command:
```bash
readelf --sections <executable_file>
```

### How do I view the dynamic section information of a binary file with readelf?
To view the dynamic section information of a binary file using readelf, use the following command:
```bash
readelf --dynamic <executable_file>
```

### Can readelf display symbol tables from an executable file?
Yes, readelf can display symbol tables from an executable file in Linux. You can do this by running the following command:
```bash
readelf --syms <executable_file>
```

### How to extract the program headers of an executable file with readelf?
You can extract the program headers of an executable file using readelf by running the command:
```bash
readelf --program-headers <executable_file>
```

### Is it possible to show relocation entries with readelf?
Yes, it is possible to show relocation entries from an executable file using readelf. Execute the following command to display the relocation entries:
```bash
readelf --relocs <executable_file>
```

### How can I examine the symbol version tables of an executable file with readelf?
To examine the symbol version tables of an executable file using readelf, use the following command:
```bash
readelf --version <executable_file>
```
## Applications of the readelf command

- Displaying information about ELF files
- Analyzing object files and shared libraries
- Extracting detailed information about the sections, segments, symbols, and other aspects of ELF files
- Inspecting the dynamic linking information of ELF files
- Verifying the architecture and attributes of ELF files
- Understanding the structure and layout of ELF files