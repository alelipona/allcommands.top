---
title: Windows DATE command
description: Learn how to use the Windows date command to display or set the current date.
---

The Windows date command is a useful tool for displaying or setting the current date on a Windows system. This command allows users to view the current date, as well as change it to a specific date. By using the correct syntax and options, you can easily customize the date format and adjust it to your preferences. The date command in Windows can be particularly handy for scripting tasks, scheduling automated tasks, or troubleshooting issues related to date and time settings. Mastering the Windows date command can help you efficiently manage and manipulate dates on your Windows system.

## DATE Syntax:
```cmd
date [/t | date_values | /s system [/n]] 
```
## Options:
| Option          | Description                                 |
|-----------------|---------------------------------------------|
| /t              | Displays the current date without prompting  |
| date_values     | Sets the date to the specified values       |
| /s system       | Sets the date on a remote system            |
| /n              | Uses the short date format specified in the regional settings panel |

## Parameters:
| Parameter       | Description                           |
|-----------------|---------------------------------------|
| date_values     | Specifies the new date in the format  MM-DD-YYYY. Example: date 04-15-2021 |
| system          | Specifies the remote system name where the date will be changed      |

:::caution
Changing the date on a system may have unintended consequences on time-sensitive tasks and may affect system logs. Exercise caution when using the date command.
:::
## DATE Usage:
### Display the Current Date
```cmd
date
```
This command displays the current date according to the system's settings.

### Change the System Date
```cmd
date MM-DD-YYYY
```
Using this command, you can change the system date to the specified month, day, and year format.

### Display the Day of the Week
```cmd
date /t
```
By using the "/t" option, this command will display the current day of the week.

### Reset the System Date
```cmd
date
```
Running the "date" command without any additional parameters will prompt the user to enter a new date to reset the system's date.
:::tip
When using the `date` command in Windows, ensure you have the necessary permissions to update the system date. It is recommended to double-check the date format specified in the command to avoid any unexpected changes.
:::

## Common Questions on DATE Usage:
### How do I use date in Windows?
To use the date command in Windows, execute the following command:
```cmd
date
```

### How to display the current system date in Windows?
To display the current system date, run the following command:
```cmd
date /t
```

### How to set the system date using the date command in Windows?
To set the system date using the date command in Windows, use the following command format:
```cmd
date <MM-DD-YYYY>
```

### How do I change the system date format in Windows?
To change the system date format in Windows, you can use the Control Panel or the "Region" settings. The date command itself does not have an option to change the date format output.

### How to get help with the date command in Windows CMD?
To get help with the date command in Windows CMD, you can use the following command:
```cmd
date /?
```

### How to add a time stamp to a file using the date command in Windows CMD?
To add a time stamp to a file using the date command in Windows CMD, you can use a combination of date and redirection. For example:
```cmd
echo %date% > timestamp.txt
```

### Can I change the system time using the date command in Windows?
No, the date command in Windows is specifically for changing the system date and does not have an option to change the system time. To change the system time, you would need to use the time command or update it through the Windows settings.


## Applications of the DATE Command

1. View or set the current date
2. Display or modify the system date
3. Set the date format
4. Enable users to input a new date
5. Display the day of the week for a given date