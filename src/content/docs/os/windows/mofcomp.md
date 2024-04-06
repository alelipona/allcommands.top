---
title: MOFCOMP command in Windows
description: Learn how to use the MOFCOMP command in Windows to compile Managed Object Format (MOF) files and add or remove classes and class instances in the WMI repository.
---

The MOFCOMP command in Windows is used to compile Managed Object Format (MOF) files and add or remove classes and class instances in the WMI repository. It can be run from the command prompt and is useful for managing WMI classes and instances. The MOFCOMP command helps ensure the proper functioning of Windows Management Instrumentation (WMI) by updating the WMI repository with the information from the MOF files. By using MOFCOMP, users can make changes to the WMI database, such as creating custom classes or updating existing ones.
## MOFCOMP Syntax:
```cmd
mofcomp [FileName] 
```
## Windows MOFCOMP Options:
| Option | Description                             |
|--------|-----------------------------------------|
| None   | There are no specific options for MOFCOMP. |

## MOFCOMP Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| FileName  | Specifies the path to the MOF file to be compiled. |

:::caution
Exercise caution while using the MOFCOMP command as it compiles Managed Object Format (MOF) files into WMI classes. Make sure to provide the correct file path to avoid unintended system changes.
:::
## How to use MOFCOMP command:
### Compile a MOF File
```cmd
mofcomp C:\myfolder\mydata.mof
```
Compiles the MOF file "mydata.mof" located in the folder "myfolder".

### Display MOF File Contents
```cmd
mofcomp /E:mydata.mof
```
Displays the contents of the MOF file "mydata.mof".

### Compile a MOF File and Save Output to a Log File
```cmd
mofcomp C:\myfolder\mydata.mof > C:\myfolder\output.log
```
Compiles the MOF file "mydata.mof" and saves the compilation output to a log file named "output.log".

### Revert to Default WMI Repository
```cmd
mofcomp C:\Windows\System32\wbem\wilogutl.mof
```
Reverts the WMI repository to the default state using the "wilogutl.mof" file.

### Check for MOF File Syntax Errors
```cmd
mofcomp /A:1 C:\myfolder\mydata.mof
```
Checks the MOF file "mydata.mof" for syntax errors and displays any encountered errors.

### Compile Multiple MOF Files
```cmd
mofcomp C:\myfolder\file1.mof C:\myfolder\file2.mof
```
Compiles multiple MOF files ("file1.mof" and "file2.mof") located in the folder "myfolder".

### Add an Alias to a MOF File
```cmd
mofcomp /A:1 C:\myfolder\mydata.mof
```
Adds an alias to the MOF file "mydata.mof" to reference other MOF files.

### Output Compiled MOF File Details
```cmd
mofcomp /D:1 C:\myfolder\mydata.mof
```
Outputs detailed information about the compiled MOF file "mydata.mof".
:::tip
When using the mofcomp command in Windows CMD, make sure to double-check the syntax of your command and any specified options to avoid any errors.
:::

### How do I use mofcomp in Windows?
To use the mofcomp command in Windows, execute the following command:
```cmd
mofcomp C:\example\sample.mof
```

### What is the purpose of the mofcomp command in Windows?
The mofcomp command in Windows is used to compile Managed Object Format (MOF) files into the WMI database.

### How can I list all options available with the mofcomp command in CMD?
To view all available options with the mofcomp command in CMD, you can use the following command:
```cmd
mofcomp /?
```

### How can I check the version of mofcomp installed on my Windows system?
To check the version of mofcomp installed on your Windows system, you can run the following command:
```cmd
mofcomp /version
```

### How do I compile multiple MOF files using mofcomp in Windows CMD?
To compile multiple MOF files using mofcomp in Windows CMD, you can execute the following command:
```cmd
mofcomp C:\example\sample1.mof C:\example\sample2.mof
```

### Can I specify a different output directory for the compiled MOF files with mofcomp in Windows?
Yes, you can specify a different output directory for the compiled MOF files by using the /D parameter followed by the directory path. Here's an example:
```cmd
mofcomp C:\example\sample.mof /D C:\output\
```

### How do I suppress output messages while using mofcomp in Windows CMD?
To suppress output messages while using mofcomp in Windows CMD, you can add the /Q parameter to the command. Here's an example:
```cmd
mofcomp C:\example\sample.mof /Q
```

### What is the syntax for recompiling a MOF file that has previously been compiled with mofcomp in Windows?
To recompile a MOF file that has previously been compiled with mofcomp in Windows, you can use the /A parameter in the command. Here's an example:
```cmd
mofcomp C:\example\sample.mof /A
```

## Applications of the MOFCOMP Command

- Compile Managed Object Format (MOF) files
- Parse MOF files and generate corresponding WMI classes
- Update the WMI repository with new or updated classes and properties