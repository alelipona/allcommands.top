---
title: lipo MacOS Command Guide
description: Learn how to use the MacOS lipo command to create or manipulate universal binary files for multiple architectures efficiently.
---

The MacOS `lipo` command is used to create or manipulate universal binary files that contain executable code and data for multiple architectures. By using `lipo`, developers can combine object files for different processor architectures into a single file, select specific architectures from a universal file, or extract individual architectures for further processing. This command is particularly useful when creating software that needs to run on multiple CPU types, such as Intel and ARM processors. Understanding how to use `lipo` effectively can help streamline the development process and ensure compatibility across various devices and platforms.

## lipo Syntax:
```bash
lipo [options] [parameters]
```

## Options:
| Option | Description                   |
|--------|-------------------------------|
| -arch  | Specify architecture to extract/build executables for. |
| -create | Create a new universal file from the provided object files. |
| -thin | Create a file with only a single architecture from the provided universal file. |
| -info | Display information about the input file. |
| -remove | Remove a specific architecture from the universal file. |
| -extract | Extract the specified architecture from the input file. |

## Parameters:
| Parameter | Description                   |
|-----------|-------------------------------|
| input_file | The universal file to be processed. |
| output_file | The resulting file after processing. | 

:::caution
Exercise caution when using the lipo command to avoid unintentionally modifying or corrupting files.
:::
## lipo Command Samples:
### Extract Architectures from a Binary
```bash
lipo -info /path/to/binary
```
Displays the architectures present in a binary file.

### Remove an Architecture from a Binary
```bash
lipo -remove arm64 -output /path/to/new_binary /path/to/binary
```
Creates a new binary file by removing the arm64 architecture from the original binary.

### Create a Fat Binary from Multiple Binaries
```bash
lipo -create -output /path/to/fat_binary /path/to/binary1 /path/to/binary2
```
Combines multiple binaries into a single fat binary file.

### Verify Binary Architecture Compatibility
```bash
lipo -verify_arch x86_64 /path/to/binary
```
Checks if the binary at the specified path is compatible with the x86_64 architecture.

### List Architectures in a Fat Binary
```bash
lipo -detailed_info /path/to/fat_binary
```
Provides detailed information about the architectures present in a fat binary.

### Extract Specific Architecture from a Fat Binary
```bash
lipo -extract x86_64 -output /path/to/extracted_binary /path/to/fat_binary
```
Extracts the x86_64 architecture from a fat binary into a new binary file.

### Merge Binaries to Create Universal Binary
```bash
lipo -create -arch armv7 /path/to/binary1 -arch arm64 /path/to/binary2 -output /path/to/universal_binary
```
Combines two binaries with different architectures to create a universal binary file.
:::tip
When using the lipo command in MacOS, make sure to carefully read the options available and understand their functionality to achieve the desired results.
:::

### How do I use lipo in MacOS?
To use the lipo command in MacOS, execute the following command:
```bash
lipo --arch <architecture> <input_file>
```

### How do I extract architectures with lipo in MacOS?
To extract architectures using lipo in MacOS, use the following command:
```bash
lipo -extract <architecture> <input_file> -output <output_file>
```

### How can I list architectures in a file with lipo in MacOS?
To list the architectures present in a file using lipo in MacOS, run the following command:
```bash
lipo -info <input_file>
```

### How do I create a universal binary using lipo in MacOS?
To create a universal binary using lipo in MacOS, use the following command:
```bash
lipo -create <file1> <file2> -output <output_file>
```

### How can I thin a binary with lipo in MacOS?
To thin a binary using lipo in MacOS, execute the following command:
```bash
lipo -thin <architecture> <input_file> -output <output_file>
```

### How do I verify a universal binary with lipo in MacOS?
To verify a universal binary using lipo in MacOS, run the following command:
```bash
lipo -verify <input_file>
```
## Applications of the lipo command

- Manipulating universal binary files
- Inspecting the architecture support of binaries
- Converting between different executable formats
- Removing or adding architecture support to binaries