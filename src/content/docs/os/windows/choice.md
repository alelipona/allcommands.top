---
title: All About CHOICE Windows command
description: Learn how to use the Windows choice command to prompt users to select from a list of options. Understand its syntax, parameters, and use cases.
---

The Windows choice command is a valuable tool for prompting users to make a selection from a list of options. This command is especially useful in batch files and scripts to automate processes and interact with users. The syntax for the choice command is simple, requiring only the list of options to be displayed to the user. This command also allows for customization, such as setting the default choice and specifying the time to wait for user input. By using the choice command, you can create interactive scripts that streamline tasks and enhance user experience.
## CHOICE Syntax:
```cmd
choice [/c choices] [/n] [/cs] [/t timeout /d choice] [/m text]
```
## Options:
| Option      | Description                              |
|-------------|------------------------------------------|
| /c choices  | Specifies the list of choices to display.|
| /n          | Disables the default choice prompt.      |
| /cs         | Enables case-sensitive choices.          |
| /t timeout  | Specifies the number of seconds to pause before using the default choice. |
| /d choice   | Specifies the default choice after timeout. |
| /m text     | Specifies the text to display in the prompt. |

## Parameters:
| Parameter  | Description                                             |
|------------|---------------------------------------------------------|
| choices    | A string of characters that represent the choices to be displayed. |
| timeout    | The number of seconds to pause before using the default choice. |
| choice     | The default choice to use if timeout occurs.            |
| text       | The message to display in the prompt.                   |

:::caution
Using the `choice` command incorrectly may lead to unexpected results or cause the user to be unable to make a selection. It is important to follow the syntax and options carefully to avoid errors.
:::
## CHOICE CMD Examples:
### Display a Simple Message with Choices
```cmd
choice /C YN /M "Do you want to continue (Y/N)?"
```
Displays a message asking the user to choose between "Y" for Yes and "N" for No.

### Customize Time Limit for User Selection
```cmd
choice /T 10 /C YN /D Y /M "Do you want to continue (Y/N)?"
```
Displays a message with a default choice of "Y," giving the user 10 seconds to select between "Y" for Yes and "N" for No.

### Handle Different User Choices
```cmd
choice /C ABCD /N /M "Choose a letter (A/B/C/D):"
```
Asks the user to select one letter from the provided choices of A, B, C, or D, with the option to display the choices without a letter index.

### Add Error Handling for Invalid Inputs
```cmd
choice /C YN /T 5 /D N /N /M "Do you want to continue (Y/N)?"
if errorlevel 2 goto NoChoice
if errorlevel 1 goto YesChoice
:YesChoice
echo User chose Yes!
goto end
:NoChoice
echo User chose No!
goto end
:end
```
Sets a default choice as "N," provides a 5-second timeout, and includes error-level handling for user selections.

### Use Case for Restarting a Service
```cmd
choice /C RS /M "Do you want to Restart or Stop the service (R/S)?"
if errorlevel 2 net stop ServiceName
if errorlevel 1 net start ServiceName
```
Prompts the user to choose between Restart (R) or Stop (S) for a service and subsequently executes the corresponding action using the errorlevel.
:::tip
When using the choice command in CMD, make sure to specify the available options and handle the user input accordingly to ensure the correct flow of your script or program.
:::

### How do I use choice in CMD?
To use the choice command in CMD, execute the following command:
```cmd
choice /C YN /M "Do you want to continue? (Y/N)"
```

### What does the /C option do in the choice command?
The /C option in the choice command is used to specify the list of choices that the user can select from. Each character in the list represents a valid choice.
```cmd
choice /C YN /M "Do you want to continue? (Y/N)"
```

### How can I prompt a message with the choice command in CMD?
You can display a message to the user by using the /M option in the choice command. This message will be shown before the user is prompted to make a choice.
```cmd
choice /C YN /M "Do you want to continue? (Y/N)"
```

### Can I set a default choice for the user in the choice command?
Yes, you can set a default choice for the user by using the /D option followed by the default choice character. If the user presses Enter without making a selection, the default choice will be used.
```cmd
choice /C YN /M "Do you want to continue? (Y/N)" /D N
```

### How do I use the ERRORLEVEL returned by the choice command?
After the user makes a choice using the choice command, the ERRORLEVEL will be set to the value corresponding to the user's selection. You can then use this ERRORLEVEL value in your script to conditionally execute commands.
```cmd
choice /C YN /M "Do you want to continue? (Y/N)"
if errorlevel 2 (
    echo You chose No
) else (
    echo You chose Yes
)
```

### Is it possible to customize the text of the prompt shown to the user in the choice command?
Yes, you can customize the text of the prompt by changing the message provided after the /M option in the choice command. This allows you to provide specific instructions or information to the user before they make a choice.
```cmd
choice /C YN /M "Do you want to save the file? (Y/N)"
```

### How can I use the choice command in a batch script to control the flow of execution?
By incorporating the choice command in a batch script, you can create interactive elements that allow users to make decisions during the script's execution. This can be useful for creating user-friendly interfaces and controlling the logic of your script based on user input.
```cmd
@echo off
choice /C YN /M "Do you want to run the script? (Y/N)"
if errorlevel 2 (
    echo Exiting script...
    exit
) else (
    echo Running the script...
)
```
## Applications of the CHOICE Command

- Creating batch scripts with user input options
- Providing a simple menu for users to choose from in command-line interfaces
- Adding interactivity to command-line processes
- Controlling the flow of a batch script based on user input
- Creating custom dialog boxes for user interaction