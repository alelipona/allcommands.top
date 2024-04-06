---
title: groups Linux command
description: Learn how to efficiently manage user groups on Linux systems with the groups command. Find out how to list the groups a user belongs to and how to add or remove users from groups.
---

The Linux groups command allows users to manage group information on a system. It displays the groups a user belongs to, including primary and supplementary groups. By simply typing 'groups' followed by a username, you can easily view all the groups associated with that specific user. Additionally, administrators can add or remove users from groups using this command, enabling efficient management of user permissions and access rights.
## groups Syntax:
```bash
groups [options] [username]
```
## Options:
| Option      | Description                             |
|-------------|-----------------------------------------|
| -h, --help  | Display help information                 |
| -v, --version | Display version information             |

## Parameters:
| Parameter   | Description                             |
|-------------|-----------------------------------------|
| username    | The username to display groups for       |

:::caution
Exercise caution when using the groups command, especially when specifying a username. Incorrect usage can potentially lead to unintended results.
:::
## groups bash Examples:
### Display the groups a user belongs to
```bash
groups username
```
This command will show the groups that the specified user "username" is a member of.

### Display all groups on the system
```bash
groups
```
Running this command without any arguments will display all the groups that the current user is a member of.

### Create a new group
```bash
sudo groupadd newgroup
```
It creates a new group called "newgroup" on the system.

### Add a user to a group
```bash
sudo usermod -aG groupname username
```
This adds the user "username" to the group "groupname" without removing the user from their existing groups.

### Remove a user from a group
```bash
sudo deluser username groupname
```
This removes the user "username" from the group "groupname".

### Check members of a particular group
```bash
getent group groupname
```
This command shows the list of users who are members of the group "groupname".
:::tip
When using the `groups` command in Linux, make sure to include the appropriate options and arguments to get the desired output. Refer to the command's man page (`man groups`) for more detailed information on its usage and available options.
:::

### How do I use groups in Linux?
To use the `groups` command in Linux, execute the following command:
```bash
groups
```

### How can I display all groups a user belongs to in Linux?
To display all groups a user belongs to in Linux using the `groups` command, use the following syntax:
```bash
groups username
```

### How do I show the group ID instead of the group name with the groups command?
To display the group ID instead of the group name when using the `groups` command in Linux, use the `-g` option like this:
```bash
groups -g
```

### How can I display groups in a comma-separated list with the groups command?
To display groups in a comma-separated list using the `groups` command in Linux, include the `-c` option in your command:
```bash
groups -c
```

### How do I display the effective group ID of the current user with groups command?
To display the effective group ID of the current user using the `groups` command in Linux, use the `-e` option like this:
```bash
groups -e
```

### How can I see additional information about the groups command in Linux?
To see additional information about the `groups` command in Linux, refer to its man page by executing the following command:
```bash
man groups
```

### How do I display the version information for the groups command?
To display the version information for the `groups` command in Linux, you can use the `--version` option like this:
```bash
groups --version
```
## Applications of the groups command

- Display the groups to which a user belongs.