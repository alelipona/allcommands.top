---
title: users Linux command
description: The users command in Linux is used to display the usernames of users who are currently logged in to the system.
---

The users command in Linux is used to display the usernames of users who are currently logged in to the system. It provides a simple way to see who is actively using the system at any given time. By running the users command, you can quickly get a list of logged-in users and their usernames. This can be useful for system administrators who need to monitor user activity or for regular users who want to see who else is using the system. The output of the users command is a list of usernames separated by spaces. This command is handy for checking on user activity and managing system resources efficiently.
## users Syntax:
```bash
chmod [option] [mode] file
```
## Options:
| Option | Description                |
|--------|----------------------------|
| -R     | Recursively change files in the directory and its subdirectories |

## Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| mode      | Specifies the permissions to be set       |
| file      | The file or directory to change permissions|

:::caution
Ensure you have the appropriate permissions before changing them, as incorrect usage of the `chmod` command can result in unintended consequences such as making important files inaccessible.
:::
## users bash Examples:

### Display currently logged-in users
```bash
users
```
This command displays a list of users currently logged into the system.

### Display currently logged-in users with additional information
```bash
users -a
```
The command displays the list of users currently logged in, along with the idle time and terminal they are using.

### Display currently logged-in users and their processes
```bash
users -p
```
This command shows the list of users logged in and the processes they are running.

### Display currently logged-in users with total number
```bash
users -q
```
This command displays the total number of users currently logged in.

### Display currently logged-in users in a specific format
```bash
users -o
```
This command shows the list of users currently logged in using a specific output format.

### Display currently logged-in users with help information
```bash
users --help
```
Executing this command provides help information on how to use the users command with various options.
:::tip
When using the users command in Linux, make sure to include the necessary options and arguments to retrieve specific information about users on the system. Refer to the command's manual page (`man users`) for a detailed description of all available options.
:::

## users Command Help Center:

### How do I use users in Linux?
To use the users command in Linux, execute the following command:
```bash
users
```

### How do I list all users currently logged into the system using users command in Linux?
To list all users currently logged into the system with the users command in Linux, use the following command:
```bash
users
```

### How can I display the users' count on the system with users command in Linux?
To display the count of users on the system using the users command in Linux, run the following command:
```bash
users | wc -w
```

### How do I show the login names of the users currently logged in with users command in Linux?
To display the login names of users currently logged in using the users command in Linux, use the following command:
```bash
users | tr ' ' '\n'
```

### How can I find out the idle time of each user with users command in Linux?
To find out the idle time of each user currently logged in using the users command in Linux, you can combine it with the `w` command like this:
```bash
users | xargs -n1 w -h | awk '{print $1, $4}'
```

### How do I refresh the list of currently logged-in users using users command in Linux?
To refresh the list of currently logged-in users with the users command in Linux, simply run the command again:
```bash
users
```

### How can I show the hostnames of the users logged in with users command in Linux?
To display the hostnames of users currently logged in using the users command in Linux, you can combine it with the `w` command like this:
```bash
users | xargs -n1 w -h | awk '{print $1, $3}'
```

### How do I display a list of unique users currently logged in with users command in Linux?
To display a list of unique users currently logged in using the users command in Linux, you can use the `sort` and `uniq` commands like this:
```bash
users | tr ' ' '\n' | sort | uniq
```
## Applications of the users command

- Checking currently logged in users
- Monitoring user activity
- Determining the number of users currently logged in
- Verifying user session information