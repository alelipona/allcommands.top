---
title: id Linux Command Guide
description: Learn about the Linux id command, its syntax, options, and how to use it to display user and group information in the terminal.
---

The Linux id command is used to display the user and group information for the current user or a specified username. It shows the user's uid (user ID), gid (group ID), and groups that the user belongs to. By default, it displays information for the current user. However, you can specify a username as an argument to see information for a different user. This command is useful for identifying the permissions and access levels of a user within a Linux system.

## id Syntax:
```bash
id [options] [username]
```
## Options:
| Option     | Description                        |
|------------|------------------------------------|
| -g, --group| Print only the group ID             |
| -G, --groups| Print all group IDs                |
| -n, --name | Print a name instead of a number    |
| -u, --user | Print only the user ID             |

## Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| username  | Specify the user to look up           |

:::caution
Exercise caution while using the `id` command as it can reveal sensitive information about user accounts on the system.
:::
## id Command Samples:
### Display User and Group IDs
```bash
id
```
This command displays the current user's UID (User ID) and GID (Group ID).

### Display User Information
```bash
id username
```
Replace "username" with the name of the user you want to view information for. This command displays the UID, GID, and groups associated with that user.

### Display Group Information
```bash
id -g groupname
```
Replace "groupname" with the name of the group you want to view information for. This command displays the GID of the specified group.

### Display Supplementary Group IDs
```bash
id -G
```
This command displays the supplementary group IDs associated with the current user.

### Display all User Information
```bash
id -a username
```
Replace "username" with the name of the user you want to view all information for. This command displays UID, GID, groups, and group IDs associated with the specified user.

### Display Only the User ID
```bash
id -u
```
This command displays only the UID (User ID) of the current user.

### Display Only the Group ID
```bash
id -g
```
This command displays only the GID (Group ID) of the current user.
:::tip
When using the `id` command in Linux, remember that it provides information about the current user or a specified user, such as user ID, group ID, and groups the user belongs to.
:::

## id FAQ:
### How do I use id in Linux?
To use the id command in Linux, execute the following command:
```bash
id
```

### How can I display user and group information with id?
You can display user and group information by using the following command:
```bash
id <username>
```

### How do I show the group information for a user with id?
To show only the group information for a user, use the id command with the -G option like this:
```bash
id -G <username>
```

### How can I display the group names instead of IDs using id?
If you want to display group names instead of IDs, you can run the id command with the -n option:
```bash
id -nG <username>
```

### How do I check the group memberships of the current user with id?
To check the group memberships of the current user, you can simply execute the id command without any options:
```bash
id
```

### How to display the real and effective user and group IDs using id?
To display both the real and effective user and group IDs, you can use the id command with the -u option:
```bash
id -u
```
## Applications of the id command

- Check user and group information
- View the effective user and group ID
- Verify group memberships for a user
- Display the user's primary group
- Show all groups a user belongs to
- Get the user's username and user ID
- Grant or restrict access based on group membership