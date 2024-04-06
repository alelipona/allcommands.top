---
title: Windows GPRESULT command
description: A comprehensive guide to the Windows gpresult command, including syntax, parameters, and usage. Learn how to generate Group Policy Result reports.
---

The Windows gpresult command is a powerful tool used to generate Group Policy Result reports on a local or remote computer. It provides detailed information about applied Group Policies, settings, and configurations. By running gpresult with various parameters, users can troubleshoot Group Policy-related issues, identify misconfigurations, and verify policy settings. This command is essential for system administrators to ensure proper Group Policy application and compliance across their network.

## GPRESULT Syntax:
```cmd
gpresult [/S system [/U username [/P [password]]]] [/SCOPE {user | computer}] [/USER targetusername] [/R | /V | /Z | /X filename] [/H htmlfilename | /F] [/?]
```
## Options:
| Option     | Description                                                    |
|------------|----------------------------------------------------------------|
| /S         | Specifies the remote system to connect to.                    |
| /U         | Specifies the user context under which the command should execute. |
| /P         | Specifies the password for the given user context.            |
| /SCOPE     | Specifies the scope of the command (user or computer).        |
| /USER      | Specifies the username for which to display policies.         |
| /R         | Displays Resultant Set of Policy for the user or computer.    |
| /V         | Specifies verbose output.                                      |
| /Z         | Displays all available information.                            |
| /X         | Saves the report in XML format.                               |
| /H         | Saves the report in HTML format.                              |
| /F         | Forces gpresult to apply user settings and policy processing. |
| /?         | Displays the Help information.                                 |

## Parameters:
| Parameter    | Description                                                    |
|--------------|----------------------------------------------------------------|
| system       | Specifies the remote system to connect to.                    |
| username     | Specifies the user context under which the command should execute. |
| password     | Specifies the password for the given user context.            |
| targetusername | Specifies the username for which to display policies.        |
| filename     | Specifies the file name to save the XML or HTML formatted output. |
| htmlfilename | Specifies the file name to save the HTML formatted output.     |

:::caution
Exercise caution when using the gpresult command, especially when providing sensitive information such as passwords. Ensure that the command is executed with the appropriate permissions to avoid unintended data exposure or system changes.
:::
## GPRESULT Usage:
### Display Result for Current User
```cmd
gpresult /scope user /v
```
This command displays the Group Policy settings for the current user in verbose mode.

### Display Result for Current Computer
```cmd
gpresult /scope computer /v
```
This command displays the Group Policy settings for the current computer in verbose mode.

### Save Result to a Text File
```cmd
gpresult /h C:\gpresult_output.html
```
This command saves the Group Policy result to an HTML file named "gpresult_output.html".

### Display Only Applied GPOs
```cmd
gpresult /r /scope user
```
This command displays only the applied Group Policy Objects for the current user.
:::tip
When using the gpresult command in Windows, make sure to run it with administrative privileges to obtain accurate and detailed information about group policies applied to the current user or computer.
:::

### How do I use gpresult in Windows?
To use the gpresult command in Windows, execute the following command:
```cmd
gpresult /r
```

### How can I save the gpresult output to a file?
To save the gpresult output to a text file, use the following command:
```cmd
gpresult /r > C:\path\to\output.txt
```

### How do I force gpresult to only display user policy settings?
To force gpresult to only display user policy settings, run the following command:
```cmd
gpresult /scope:user
```

### How can I generate the gpresult report in HTML format?
To generate the gpresult report in HTML format, use the following command:
```cmd
gpresult /h C:\path\to\output.html
```

### How do I troubleshoot gpresult errors?
To troubleshoot gpresult errors, make sure to specify the user or computer for which you want to retrieve the group policy results by using the necessary parameters.

### How do I view all available options for the gpresult command?
To view all available options for the gpresult command, you can use the help flag as follows:
```cmd
gpresult /?
```
## Applications of the GPRESULT Command

- To display Resultant Set of Policy (RSoP) data for a user or computer
- To troubleshoot Group Policy settings and conflicts
- To verify the applied Group Policy settings on a specific user or computer
- To check the effect of policy changes on user or computer configurations
- To analyze Group Policy settings and their impact on the system