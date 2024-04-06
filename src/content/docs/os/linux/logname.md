---
title: Linux logname command
description: Learn about the Linux logname command and how to use it to retrieve the login name of the current user.
---

The Linux logname command is used to display the login name of the current user. It is a simple utility that prints the user's login name to the standard output. By default, it retrieves the username from the system's utmp file. The logname command does not accept any arguments or options, making it easy to use. It can be helpful in scripting and automation tasks where the current user's name needs to be accessed.

## logname Syntax:
```bash
logname
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| None   | Displays the login name of the current user. |

## Parameters:
| Parameter | Description                                       |
|-----------|---------------------------------------------------|
| None      | No parameter needed for the logname command.      |

:::caution
Avoid using any options or parameters with the logname command as it only displays the login name of the current user. 
:::
## logname Usage:
### Display the current user's login name
```bash
logname
```
This command will display the login name of the current user.

### Store the login name in a variable
```bash
current_user=$(logname)
echo "The current user is: $current_user"
```
By using logname in a variable assignment, the login name of the current user can be stored and displayed.

### Check if a user has switched to a different user account
```bash
original_user=$(logname)
su - different_user
if [ "$original_user" != "$(logname)" ]; then
    echo "User has switched accounts."
fi
```
This example demonstrates how logname can be used to check if a user has switched to a different user account.

### Use logname in a script to log user information
```bash
#!/bin/bash
current_user=$(logname)
echo "Current user: $current_user" >> user_log.txt
```
In a script, logname can be utilized to log user information such as the current user's login name.
:::tip
Remember to run the logname command without any options or arguments to display the name of the user who is currently logged in.
:::

### How do I use logname in Linux?
To use the logname command in Linux, execute the following command:
```bash
logname
```

### How to display the name of the user who is currently logged in using logname?
To display the name of the user who is currently logged in, run the logname command without any options or arguments:
```bash
logname
```

### Can logname command display the login name of another user in Linux?
No, the logname command only returns the login name of the current user on the system.

### How can I check the login name of the currently logged-in user along with the full path of the logname command in Linux?
To display the full path of the logname command and the login name of the currently logged-in user, use the which command along with logname:
```bash
which logname && logname
```

### In Linux, can the logname command be used to change the login name?
No, the logname command is used to display the login name of the current user and does not have functionality to change the login name.

### How can I see the login name of the user who owns a specific file in Linux using logname?
To see the login name of the user who owns a specific file in Linux, you can combine the logname command with the ls command:
```bash
ls -l <filename> | awk '{print $3}' | xargs logname
```

### Is there a way to get the login name of a specific user using logname in Linux?
The logname command retrieves the login name of the current user. To get the login name of a specific user, you can use the id command followed by the desired username:
```bash
id <username> | awk -F ' ' '{print $2}' | cut -d= -f2
```

## Applications of the logname command

- Display the login name of the current user.