---
title: MacOS osacompile command
description: Compile AppleScripts on MacOS using the osacompile command to create standalone script applications or script bundles.
---

The MacOS osacompile command is a powerful tool for compiling AppleScripts into standalone script applications or script bundles. This command-line utility allows users to easily create executable files from their AppleScripts, giving them the ability to share or distribute their scripts without revealing the source code. By using the osacompile command, users can streamline their workflow and simplify the process of running AppleScripts on MacOS. This tool is especially useful for developers and power users who frequently work with AppleScripts and need a convenient way to package their scripts for distribution.

## osacompile Syntax:
```bash
osacompile [options] [parameter]
```
## Options:
| Option | Description                         |
|--------|-------------------------------------|
| -o     | Specify output file path            |
| -x     | Don't run the resulting app          |
| -l     | Bundle interface or script library  |
| -d     | Display result in AppleScript format|

## Parameters:
| Parameter   | Description                        |
|-------------|------------------------------------|
| script_file | AppleScript file to be compiled    |

:::caution
Exercise caution when using the osacompile command as it compiles AppleScript files and can potentially overwrite existing files. Ensure you have backups of important scripts before compiling.
:::
## osacompile Usage:
### Create an AppleScript Application
```bash
osacompile -o /Users/User/Desktop/MyScript.app /Users/User/Desktop/MyScript.scpt
```
Compiles an AppleScript saved as "MyScript.scpt" into an application named "MyScript.app" and saves it on the desktop.

### Compile an AppleScript with Custom Icon
```bash
osacompile -o /Users/User/Desktop/MyScript.app -i /Users/User/Desktop/MyIcon.icns /Users/User/Desktop/MyScript.scpt
```
Compiles an AppleScript saved as "MyScript.scpt" into an application named "MyScript.app", using a custom icon "MyIcon.icns", and saves it on the desktop.

### Specify a Scripting Language
```bash
osacompile -l JavaScript -o /Users/User/Desktop/MyScript.app /Users/User/Desktop/MyScript.js
```
Compiles a JavaScript script saved as "MyScript.js" into an application named "MyScript.app" and saves it on the desktop.

### Compile an AppleScript with Verbose Output
```bash
osacompile -v -o /Users/User/Desktop/MyScript.app /Users/User/Desktop/MyScript.scpt
```
Compiles an AppleScript saved as "MyScript.scpt" into an application named "MyScript.app" with verbose output to track the compilation process.
:::tip
When using the osacompile command in MacOS, make sure to carefully review the available options and syntax to achieve the desired script compilation successfully. Ensure that you have the necessary permissions and valid script files before executing the osacompile command.
:::

## Common Questions on osacompile Usage:

### How do I use osacompile in MacOS?
To use the osacompile command in MacOS, execute the following command:
```bash
osacompile -o /path/to/outputfile /path/to/inputfile
```

### How can I specify additional options with osacompile in MacOS?
To specify additional options when using osacompile in MacOS, you can include them in the command. For example:
```bash
osacompile -s -o /path/to/outputfile /path/to/inputfile
```

### How do I compile a script with osacompile and output as a bundle in MacOS?
To compile a script and output it as a bundle using osacompile in MacOS, you can use the following command:
```bash
osacompile -o /path/to/outputbundle -l AppleScript /path/to/inputfile
```

### How can I set the file type and creator codes while using osacompile in MacOS?
You can set the file type and creator codes when compiling a script with osacompile in MacOS by using the -t and -c options. Here is an example command:
```bash
osacompile -o /path/to/outputfile -t TEXT -c ttxt /path/to/inputfile
```

### How do I compile a script with osacompile and specify the script language?
To compile a script with osacompile in MacOS and specify the script language, you can use the -l option. For example:
```bash
osacompile -o /path/to/outputfile -l JavaScript /path/to/inputfile
```

### How can I create a compiled script with run-only permissions using osacompile in MacOS?
To create a compiled script with run-only permissions using osacompile in MacOS, you can use the -r option. Here's an example command:
```bash
osacompile -o /path/to/outputfile -r /path/to/inputfile
```

### How do I compile a script with included libraries using osacompile in MacOS?
You can compile a script with included libraries using osacompile in MacOS by specifying the libraries with the -l option. Here's how you can do it:
```bash
osacompile -o /path/to/outputfile -l "Library1" -l "Library2" /path/to/inputfile
```

## Applications of the osacompile command

- Compiling AppleScripts into runnable script applications or script bundles
- Generating standalone applications from AppleScript code
- Securing and protecting AppleScript code by compiling it into an executable format