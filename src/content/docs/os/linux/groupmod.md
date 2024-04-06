---
title: Linux groupmod command
description: Learn how to modify a group using the Linux groupmod command. Change group attributes easily and efficiently.
---

The Linux groupmod command allows users to modify group attributes such as group name or GID. By using this command, system administrators can easily manage groups on a Linux system without having to create a new group. The groupmod command provides a simple and efficient way to make changes to existing groups, ensuring proper organization and access control within the system. This command is especially useful in scenarios where group attributes need to be updated or corrected without disrupting user access or permissions.
## groupmod Syntax:
```bash
groupmod [options] [parameters]
```

## Options:
| Option                  | Description                           |
|-------------------------|---------------------------------------|
| -g, --gid GID           | Change the group ID to GID            |
| -n, --new-name NEW_GROUP| Change the name of the group to NEW_GROUP |
| -o, --non-unique        | Allow to use a non-unique GID         |
| -h, --help              | Display help information               |

## Parameters:
| Parameter     | Description                                      |
|---------------|--------------------------------------------------|
| GROUP_NAME    | Name of the group to modify                      |
## groupmod Usage:
### Add a user to a group
```bash
groupmod -A username groupname
```
This command adds a user to a specific group.

### Change the name of a group
```bash
groupmod -n newgroupname oldgroupname
```
This command changes the name of a group from "oldgroupname" to "newgroupname".

### Change the group ID of a group
```bash
groupmod -g newgroupid groupname
```
This command changes the group ID of a group to the specified "newgroupid".

### Set the group password
```bash
groupmod -p password groupname
```
This command sets a password for a specified group.

:::tip
When using the groupmod command in Linux, make sure to have the necessary permissions to modify group information. Incorrect usage of this command can lead to unintended changes in group settings.
:::

### How do I change the name of a group in Linux?
To change the name of a group in Linux, use the groupmod command with the -n option followed by the new group name. For example:
```bash
groupmod -n newgroupname oldgroupname
```

### How can I change the GID of a group in Linux?
To change the GID (group identifier) of a group in Linux, you can use the groupmod command with the -g option followed by the new GID. Here is an example:
```bash
groupmod -g 5000 groupname
```

### How do I add a user to a group using groupmod in Linux?
To add a user to an existing group using groupmod in Linux, you can utilize the -a option followed by the username. For example:
```bash
groupmod -a -G groupname username
```

### How can I remove a user from a group with groupmod in Linux?
To remove a user from a group in Linux using groupmod, employ the -R option followed by the username and the group. Here is an example:
```bash
groupmod -R groupname username
```

### How do I display the current settings of a group with groupmod in Linux?
To display the current settings of a group in Linux using groupmod, you can utilize the -H option followed by the group name. For example:
```bash
groupmod -H groupname
```

### How can I lock a group to prevent its members from logging in?
To lock a group and prevent its members from logging in, you can use the lock command option (-L) in groupmod. Here is an example:
```bash
groupmod -L groupname
```

## Applications of the groupmod command

- Modify the name of a group
- Change the group ID
- Add or remove a user from a group
- Change the group's name in the group database
- Modify the group password
- Update the group settings in the `/etc/group` and `/etc/gshadow` files