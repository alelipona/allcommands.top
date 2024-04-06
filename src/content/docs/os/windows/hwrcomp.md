---
title: Windows HWRCOMP command
description: Execute the Windows hwrcomp command to compare hardware performance between two computers efficiently.
---

The Windows hwrcomp command compares hardware performance between two computers. This command helps users evaluate the efficiency of their hardware components and identify any discrepancies. By running hwrcomp, users can make informed decisions about upgrading or replacing hardware to optimize their system's performance.

## HWRCOMP Syntax:
```cmd
hwrcomp [OPTIONS] [INPUT_FILE]
```

## Options:
| Option         | Description                                 |
|----------------|---------------------------------------------|
| /o:OutputFile  | Specifies the name of the output file.      |
| /q             | Runs hwrcomp in quiet mode.                 |
| /r             | Compiles the specified file recursively.    |
| /v             | Displays detailed information during compile.|

## Parameters:
| Parameter   | Description                                     |
|-------------|-------------------------------------------------|
| INPUT_FILE  | Specifies the input file to be compiled.        |

:::caution
Exercise caution while using the `hwrcomp` command. Incorrect usage may lead to unexpected results or errors. Make sure to provide the required input file and options to achieve the desired outcome.
:::
## HWRCOMP Usage:
### Batch Recognizing Handwriting Files
```cmd
hwrcomp /Batch myInputFolder /Out myOutputFolder /Lang en_US /Recognizer Windows
```
This command performs batch recognition of handwriting files in the "myInputFolder" directory using the English (United States) language and the Windows recognizer, saving the output files in the "myOutputFolder" directory.

### Recognize a Single Handwriting File
```cmd
hwrcomp /In myHandwritingFile /Out myOutputTextFile /Lang en_US /Recognizer Windows
```
Recognizes a single handwriting file named "myHandwritingFile" using the English (United States) language and the Windows recognizer, and saves the recognized text in the "myOutputTextFile".

### Configure Custom Recognition Options
```cmd
hwrcomp /In myHandwritingFile /Guide myCustomGuide /Out myOutputTextFile /Lang en_US /Recognizer Windows
```
Uses a custom recognition guide named "myCustomGuide" to recognize the handwriting in "myHandwritingFile" using the English (United States) language and the Windows recognizer, saving the text output in "myOutputTextFile".

### List Available Languages and Recognizers
```cmd
hwrcomp /List
```
Displays a list of available languages and recognizers for the hwrcomp command, providing users with options for language selection and recognition customization.
:::tip
When using the hwrcomp command in Windows, make sure to carefully read the command syntax and options descriptions in the official documentation to ensure proper usage and achieve the desired results.
:::

### How do I use hwrcomp in Windows?
To use the hwrcomp command in Windows, execute the following command:
```cmd
hwrcomp /gct "C:\path\to\file.txt"
```

### What is the purpose of the hwrcomp command in Windows?
The hwrcomp command in Windows is used to generate compact layouts for handwriting recognition.

### How can I specify the output directory with hwrcomp in Windows?
When using hwrcomp in Windows, you can specify the output directory using the /out parameter in the command. Example:
```cmd
hwrcomp /gct "C:\path\to\file.txt" /out "C:\output\directory"
```

### Can I include subdirectories while using hwrcomp in Windows?
Yes, you can include subdirectories by using the /s parameter in the hwrcomp command. Example:
```cmd
hwrcomp /gct "C:\path\to\directory" /s
```

### How do I view help documentation for the hwrcomp command in Windows?
To view help documentation for the hwrcomp command in Windows, you can use the /? parameter. Example:
```cmd
hwrcomp /?
```

### Is it possible to override existing files with hwrcomp in Windows?
Yes, you can override existing files by using the /y parameter in the hwrcomp command. Example:
```cmd
hwrcomp /gct "C:\path\to\file.txt" /y
```

## Applications of the HWRCOMP Command

- Compare two files to check if they are identical, byte by byte.