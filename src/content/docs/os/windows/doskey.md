---
title: DOSKEY Windows Command Guide
description: Learn how to use the DOSKEY command in Windows to create macros and increase productivity in the command prompt.
---

The DOSKEY command in Windows allows users to create macros, edit command lines, and recall previously entered commands easily. By enabling command line editing and history recall functionalities, DOSKEY helps optimize workflow and increase productivity for users who frequently work in the command prompt. This guide provides an overview of how to utilize DOSKEY, including how to create macros, edit commands, recall command history, and customize settings. With DOSKEY, users can streamline their command line tasks and work more efficiently in the Windows operating system.
## DOSKEY Syntax:
```cmd
doskey [macroname]=[command]
```
## Options:
| Option     | Description                |
|------------|----------------------------|
| macroname  | Name of the macro to create|
| command    | Command to assign to the macro|

## Parameters:
| Parameter  | Description                |
|------------|----------------------------|
| macroname  | Name of the macro          |
| command    | Command to assign to the macro|

:::caution
Be cautious when creating macros with doskey as it can affect the behavior of your command line. Make sure to use it wisely and avoid overwriting existing commands.
:::
## DOSKEY Command Samples:
### Create a Shortcut for Listing Directory Contents
```cmd
doskey l=dir
```
Creates a shortcut "l" that executes the "dir" command to list the contents of a directory.

### Create a Macro to Clear Screen and List Directory
```cmd
doskey ldc=cls ^& dir
```
Creates a macro "ldc" that clears the screen and lists the directory contents in one command.

### View All Defined Macros
```cmd
doskey /macros
```
Displays a list of all defined macros for quick reference.

### Create a Shortcut to Change Directory to C:
```cmd
doskey cdC=cd /d C:\
```
Creates a shortcut "cdC" that changes to the C: drive's root directory in a single command.

### Define a Macro to Run Multiple Commands Sequentially
```cmd
doskey update=echo Updating... ^& echo Please wait... ^& myScript.bat
```
Defines a macro "update" to display messages and then run a custom batch file named "myScript.bat".

### Remove a Defined Macro
```cmd
doskey /R l
```
Removes the defined macro "l" that was set to execute the "dir" command.

### Create a Shortcut for Opening Notepad
```cmd
doskey np=notepad
```
Sets up a shortcut "np" to launch Notepad quickly with a single command.
:::tip
Remember to use doskey in Windows for creating macros, key bindings, or recalling previous commands easily in the CMD prompt.
:::

## DOSKEY FAQ:
### How do I use doskey in Windows?
To use the doskey command in Windows, execute the following command:
```cmd
doskey --option <value>
```

### How can I create a macro with doskey?
To create a macro with doskey, use the following syntax:
```cmd
doskey macro_name=command
```

### How do I list all defined macros in doskey?
To list all defined macros in doskey, use the command:
```cmd
doskey /macros
```

### How do I recall a specific macro in doskey?
To recall a specific macro in doskey, use the command with the macro name preceded by a $ symbol:
```cmd
$macro_name
```

### How do I delete a specific macro in doskey?
To delete a specific macro in doskey, use the command:
```cmd
doskey macro_name=
```

### Can doskey be used to repeat previous commands?
Yes. By pressing the F3 key in the CMD prompt, doskey will recall the most recent command you executed.

## Applications of the DOSKEY Command

1. Creating macros for commonly used commands
2. Defining aliases for long and complex commands
3. Listing and recalling previous commands with modifications
4. Increasing efficiency and productivity in the Command Prompt
5. Simplifying command line tasks with shortcuts
6. Customizing the Command Prompt experience