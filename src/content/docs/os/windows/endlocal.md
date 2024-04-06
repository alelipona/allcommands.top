---
title: ENDLOCAL command in Windows
description: Learn how to use the Windows endlocal command to end the localization of environment variables in batch scripts.
---

The Windows endlocal command is used to end the localization of environment variables in batch scripts. It is often paired with the setlocal command to limit the scope of changes made to variables. By using endlocal, you can ensure that any modifications to variables made within a certain scope are reverted once that scope is exited. This command is particularly useful when you want to isolate changes to environment variables within a specific section of a script without affecting the rest of the script or the system's environment.
## ENDLOCAL Syntax:
```cmd
endlocal
```
## Windows ENDLOCAL Options:
| Option    | Description                              |
|-----------|------------------------------------------|
| N/A       | No specific options for the endlocal command.|

## ENDLOCAL Parameters:
| Parameter    | Description                              |
|--------------|------------------------------------------|
| N/A          | The endlocal command does not take any parameters.|

:::caution
Always use the endlocal command within a batch script or command prompt window, as it will end the localization of environment variables set by setlocal. It is crucial to match each setlocal command with a corresponding endlocal command to avoid unintended side effects.
:::
## How to use ENDLOCAL command:
### Store and Display a Variable
```cmd
setlocal
set myVar=Hello World
echo %myVar%
endlocal
```
This example demonstrates how to store a variable, display its value, and then use the ENDLOCAL command to end the local environment.
### Batch Script to Set and Clear Variable
```cmd
setlocal
set myVar=123
echo %myVar%
endlocal
set myVar=
echo %myVar%
```
In this example, a variable is set and then cleared within a batch script using the ENDLOCAL command to manage the scope of the variable.
### Delayed Expansion Mode enabled to access a local variable
```cmd
setlocal enabledelayedexpansion
set myVar=BatchScript
echo !myVar!
endlocal
```
Here, Delayed Expansion Mode is enabled to access a local variable, and the ENDLOCAL command is used to exit the local scope.
### Nested Use of ENDLOCAL
```cmd
setlocal
set myVar=Example
(
    setlocal
    set myVar=NewValue
    echo Inner: %myVar%
    endlocal
)
echo Outer: %myVar%
endlocal
```
In this example, the ENDLOCAL command is used in a nested context to control the scope of variables and display the values within and outside the inner scope.
### Local Scope with Environment Variables
```cmd
set myVar=Global
setlocal
set myVar=Local
echo %myVar%
endlocal
echo %myVar%
```
This example showcases the use of the ENDLOCAL command to manage the scope of environment variables within a batch script.
### Conditional Execution with ENDLOCAL
```cmd
setlocal
set myVar=Test
if not defined myVar (
    echo Variable not defined
)
endlocal
```
Here, a conditional check is made for the existence of a variable before the ENDLOCAL command is used to manage the local scope and display a message based on the condition.
### Using ENDLOCAL within a Loop
```cmd
setlocal
set myVar=Initial
for %%a in (1,2,3) do (
    set myVar=LoopValue%%a
)
echo %myVar%
endlocal
```
This example illustrates the use of ENDLOCAL within a loop to control the scope of a variable and display its final value outside the loop.
### Reading File Content within a Local Scope
```cmd
setlocal
for /f "tokens=*" %%a in (sample.txt) do (
    set fileContent=%%a
)
echo %fileContent%
endlocal
```
Here, the ENDLOCAL command is used after reading the content of a file within a local scope to manage the environment and display the file content afterwards.
:::tip
When using the `endlocal` command in a batch script, it is important to remember that it is used to end the localization of environment changes in the current batch script. It is typically used in combination with `setlocal` to limit the scope of environment changes to the current script or block of code. Remember that `endlocal` only affects the local environment changes and does not undo global system environment changes.
:::

## ENDLOCAL Command Troubleshooting Q&A:

### How do I use endlocal in Windows?
To use the endlocal command in Windows, execute the following command:
```cmd
endlocal
```

### What is the purpose of endlocal in CMD?
The endlocal command is used to end the localization of environment changes in the current batch script. 

### How can I use endlocal to reset environment changes in a batch script?
To reset environment changes and revert to the previous state, you can use endlocal without any arguments like this:
```cmd
endlocal
```

### How to use endlocal in combination with setlocal to limit environment changes?
To limit the scope of environment changes in a batch script, use setlocal at the beginning and endlocal at the end like this:
```cmd
setlocal
REM Other commands here
endlocal
```

### Can endlocal be used to undo global system environment changes?
No, endlocal only affects the local environment changes within the current script or block of code. It does not undo global system environment changes.

### Is it necessary to always use endlocal after setlocal in a batch script?
It is good practice to use endlocal after setlocal in a batch script to ensure proper scoping of environment changes. 

### How does endlocal differ from setlocal in batch scripting?
While setlocal is used to localize environment changes, limiting their scope, endlocal is used to end this localization and revert to the previous state. 

### When should I use endlocal in a Windows batch script?
Use endlocal in a batch script when you want to end the localization of environment changes made within a specific script or block of code. 

### Are there any advanced options or flags for the endlocal command?
No, the endlocal command does not have any additional options or flags. It is used simply to end the localization of environment changes in a batch script.

## Applications of the ENDLOCAL Command

1. Restores the environment variables scope after using SETLOCAL command. 
2. Ends the local environment changes made within a batch script.