---
title: SET Windows Command Guide
description: Learn how to use the Windows set command to create, change, or display environment variables. Control system settings efficiently with this powerful command.
---

The Windows set command is a powerful tool used to create, change, or display environment variables. With this command, users can control system settings efficiently, making it an essential component of the Windows command line interface.

## SET Syntax:
```cmd
set [option] [parameter]
```
## Options:
| Option     | Description             |
|------------|-------------------------|
| /A         | Specifies that the string to the right of the equal sign is a numerical expression that is evaluated. |
| /P         | Prompts for confirmation before setting the environment variable. |
| /S         | Modifies variables in the current command shell. |
  
## Parameters:
| Parameter  | Description             |
|------------|-------------------------|
| variable   | The name of the environment variable to set.  |
| value      | The value to assign to the variable. |

:::caution
Exercise caution when using the `set` command as it can modify environment variables and have system-wide effects. Make sure you understand the implications of the changes you are making before executing the command.
:::
## SET Command Samples:
### Set a Environment Variable
```cmd
set MYVAR=myvalue
```
Sets the environment variable MYVAR to the value "myvalue".

### Set a Variable in a Batch File
```cmd
set VAR1=12345
```
Sets the variable VAR1 to the value "12345" in a batch file.

### Display All Environment Variables
```cmd
set
```
Displays all environment variables with their current values.

### Set a Variable Without Displaying 
```cmd
set /p VAR2=Enter a value:
```
Sets the variable VAR2 by prompting the user to enter a value without displaying it.

### Set a Variable String with Spaces
```cmd
set MYSTRING="Hello, World!"
```
Sets the variable MYSTRING to the string "Hello, World!" including spaces.

### Set a System Variable
```cmd
setx PATH "%PATH%;C:\NewFolder"
```
Sets a new folder to the system variable PATH, which includes the previous PATH value and the new folder.

### Set Variables for an If-Else Condition
```cmd
set USER=Admin 
if "%USER%" == "Admin" ( 
  echo Welcome,%USER%! 
) else ( 
  echo Access denied. 
)
```
Demonstrates setting a variable and using it in an if-else condition to display a message based on the variable value.
:::tip
When using the set command in Windows CMD, remember that variables are case-insensitive. This means that SET, set, and SeT are all interpreted as the same command. Additionally, when setting a variable, avoid using spaces around the equal sign to prevent any unexpected behavior.
:::

## SET FAQ:
### How do I use set in Windows?
To use the set command in Windows, execute the following command:
```cmd
set myVar=Hello
```

### How can I display all variables in Windows CMD?
To display all variables in Windows CMD, use the following command:
```cmd
set
```

### How do I clear a specific variable in Windows CMD?
To clear a specific variable in Windows CMD, use the following command:
```cmd
set myVar=
```

### How can I display the value of a specific variable in Windows CMD?
To display the value of a specific variable in Windows CMD, use the following command:
```cmd
echo %myVar%
```

### How do I set an environment variable that persists after the CMD window is closed?
To set an environment variable that persists after the CMD window is closed, use the following command:
```cmd
setx myVar Hello
```

### How can I combine multiple set commands in a single line in Windows CMD?
To combine multiple set commands in a single line in Windows CMD, use the following command:
```cmd
set var1=value1 && set var2=value2
```
## Applications of the SET Command

- Assigning a value to a variable
- Displaying the values of variables
- Setting environment variables
- Displaying the current environment variables
- Setting system variables