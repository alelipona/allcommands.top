---
title: Windows BREAK command
description: Learn how to use the Windows BREAK command to exit a loop or batch file execution. Find out the syntax, options, and examples for effective command line management.
---

The Windows BREAK command is a powerful tool for managing command line processes. This command is used to exit a loop, batch file, or program execution. By using the BREAK command, you can effectively terminate a running process and return to the command prompt.

The syntax of the BREAK command is simple:

```
BREAK
```

When you enter this command in the command prompt, it will immediately stop the execution of the current process. This can be useful when you need to interrupt a batch file or loop that is running indefinitely.

In addition to the basic syntax, the BREAK command also supports a few options that can enhance its functionality. For example, you can use the `/NOBREAK` option to disable the BREAK key checking, or the `/?` option to display help information about the command.

Overall, the Windows BREAK command is a handy tool for command line management. Whether you need to exit a loop, stop a batch file, or terminate a running program, the BREAK command can help you do so quickly and effectively.

## BREAK Syntax:
```cmd
break [/?]
```
## Options:
| Option    | Description                           |
|-----------|---------------------------------------|
| /?        | Displays help for the break command.   |

## Parameters:
None.

:::caution
Caution: Use caution when using the break command as it may interrupt the processing of a command or a script in a batch file.
:::
## BREAK Usage:
### Break Command on a Loop
```cmd
for %%i in (1 2 3 4 5) do (
    echo %%i
    if %%i == 3 (
        break
    )
)
```
The break command is used to exit the loop prematurely when the value of %%i equals 3.

### Breaking Out of a While Loop
```cmd
:loop
set /a count+=1
echo %count%
if %count% == 5 (
    break
)
goto :loop
```
The break command is used to exit the while loop when the value of count reaches 5.

### Exiting a For Loop Early
```cmd
for /l %%i in (1,1,10) do (
    echo %%i
    if %%i == 5 (
        break
    )
)
```
The break command is used to prematurely exit the for loop if the value of %%i equals 5.

### Terminating a Nested Loop
```cmd
for %%i in (1 2 3) do (
    for %%j in (A B C) do (
        echo %%i %%j
        if %%i == 2 (
            break
        )
    )
)
```
The break command is used to exit the nested loop early when the value of %%i equals 2.
:::tip
When using the break command in CMD, make sure to specify the appropriate options and values to achieve the desired result. Incorrect usage may lead to unexpected behaviors or errors.
:::

### How do I use break in CMD?
To use the break command in CMD, execute the following command:
```cmd
break
```

### How can I stop a CMD script execution using the break command?
To stop a CMD script execution, you can use the break command followed by the `/immediate` option. Here is an example:
```cmd
break /immediate
```

### How do I resume CMD script execution after using the break command?
You can resume CMD script execution after using the break command by turning off the break feature. Here is how you can do it:
```cmd
break off
```

### Is it possible to enable the CMD break functionality only on specific lines in a script?
Yes, you can enable the CMD break functionality only on specific lines by using the `off` option followed by line numbers. Here is an example:
```cmd
break off 5 10
```

### How do I display the current state of the break setting in CMD?
To display the current state of the break setting in CMD, you can use the `on` option. Here is an example:
```cmd
break on
```

### Can I customize the message displayed when the CMD break is triggered?
Yes, you can customize the message displayed when the CMD break is triggered by using the `/message` option. Here is an example:
```cmd
break /message "Custom Break Message"
```

### How can I enable the CMD break function globally for all scripts?
To enable the CMD break function globally for all scripts, you can use the `on` option followed by the `/global` option. Here is an example:
```cmd
break on /global
```

## Applications of the BREAK Command

- Used to set or clear extended CTRL+C checking 
- Can be used to set or clear the extended checking feature 
- Helps determine if CTRL+C checking is required 
- Used in batch files to set or clear checking for CTRL+C