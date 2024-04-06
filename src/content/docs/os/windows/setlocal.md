---
title: SETLOCAL command in Windows
description: Learn how to use the SETLOCAL command in Windows to localize the changes made in a batch file to a specific scope.
---

The SETLOCAL command in Windows is used to localise the changes made in a batch file to a specific scope. By using SETLOCAL, any changes to environment variables, the current directory, or the command shell options made within the scope of SETLOCAL will be reverted when the ENDLOCAL command is used or the batch file ends. This allows for changes to be made temporarily without affecting the global environment. This can be particularly useful when writing complex batch scripts that need to make changes to the environment in a controlled manner.

## SETLOCAL Syntax:
```cmd
setlocal enableextensions [enabledelayedexpansion]
```

## Windows SETLOCAL Options:
| Option               | Description                                     |
|----------------------|-------------------------------------------------|
| enableextensions     | Enable the command extensions feature           |
| enabledelayedexpansion| Enable the delayed environment variable expansion|

## SETLOCAL Parameters:
| Parameter            | Description                                     |
|----------------------|-------------------------------------------------|
| None                 | No parameters are used with the SETLOCAL command|

:::caution
Be cautious when using the SETLOCAL command as it alters the behavior of the command shell and may affect the script or batch file being executed.
:::
## How to use SETLOCAL command:
### Create a Local Scope
```cmd
setlocal
```
Creates a local environment that prevents changes to the current variables from affecting the outside environment.

### Display a Local Variable
```cmd
setlocal
set myVar=Hello
echo %myVar%
endlocal
```
Sets a local variable within a scope and displays its value before exiting the scope.

### Limit the Scope of Changes
```cmd
set myVar=InitialValue
echo Initial Value: %myVar%
setlocal
set myVar=NewValue
echo New Value: %myVar%
endlocal
echo After Scope: %myVar%
```
Demonstrates how the local scope of the setlocal command limits changes to a variable within that scope.

### Prevent Changes to System-Wide Variables
```cmd
set myVar=BeforeLocal
echo Before Local: %myVar%
setlocal
set myVar=InsideLocal
echo Inside Local: %myVar%
endlocal
echo After Local: %myVar%
```
Illustrates how setlocal can be used to prevent changes to global variables.

### Enable Delayed Expansion within a Scope
```cmd
setlocal enabledelayedexpansion
set myVar=InitialValue
set myVar2=OtherValue
echo !myVar! !myVar2!
endlocal
```
Enables delayed variable expansion within a local scope to evaluate variables at execution time.

### Use Setlocal with Endlocal Together
```cmd
set myVar=BeforeLocal
echo Before Local: %myVar%
setlocal
set myVar=InsideLocal
echo Inside Local: %myVar%
endlocal
echo After Local: %myVar%
```
Shows the combined use of setlocal and endlocal to create and exit a local environment.

### Create and Access Local Variables
```cmd
setlocal
set var1=Value1
set var2=Value2
echo Local Variables: %var1% %var2%
endlocal
```
Creates local variables within a new scope and displays their values before exiting the scope.

### Avoid Variable Override in Global Environment
```cmd
set myVar=GlobalValue
echo Current Value: %myVar%
setlocal
set myVar=LocalValue
echo New Value: %myVar%
endlocal
echo After Local: %myVar%
```
Prevents overriding global variables by using a local scope with setlocal command.
:::tip
When using the setlocal command in a Windows CMD session, keep in mind that any variables or changes made within the setlocal scope will be lost once the session ends or another setlocal is initiated. To persist changes beyond the current scope, you can use the endlocal command to exit the local context. 
:::

### How do I use setlocal in Windows?
To use the setlocal command in Windows, execute the following command:
```cmd
setlocal
```

### What is the purpose of setlocal in CMD?
The setlocal command is used in CMD to localize changes to the current batch script environment by creating a local scope. This ensures that any modifications made to variables or settings are confined to the local scope and do not affect the global environment.

### How can I display the current setlocal environment settings?
To display the current setlocal environment settings, use the following command:
```cmd
setlocal
```

### How do I end a setlocal environment and return to the previous context in CMD?
To end a setlocal environment and return to the previous context in CMD, execute the following command:
```cmd
endlocal
```

### What are some common use cases for the setlocal command in Windows CMD?
The setlocal command is commonly used in Windows CMD scripts to isolate changes, manipulate variables within a specific scope, and ensure that modifications do not impact the global environment.

### How do I retain changes made within a setlocal context after exiting it?
To retain changes made within a setlocal context after exiting it, you can use the setlocal command with the enabledelayedexpansion option along with the endlocal command. This enables delayed variable expansion, allowing modifications to persist beyond the local scope.

### Can I nest setlocal environments in Windows CMD?
Yes, you can nest setlocal environments in Windows CMD. Each nested setlocal creates a new local scope, and changes made within each scope are isolated from the outer scopes.

### How does the setlocal command impact the global CMD environment?
The setlocal command in CMD creates a local scope, ensuring that any modifications made within that scope, such as variable changes, do not affect the global CMD environment or other scripts running concurrently.

## Applications of the SETLOCAL Command

- Limit the scope of environment variables changes
- Manage temporary variables within a batch script
- Ensure the changes made to the environment variables are local to the current context
- Avoid unintended global changes to environment variables from affecting the system outside of the script