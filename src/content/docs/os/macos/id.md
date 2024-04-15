---
title: id MacOS command
description: Learn how to use the id command on MacOS to display user and group information. Find out about the options available for this command.
---

The `id` command on MacOS is used to display user and group information. It shows the current user's user and group IDs, as well as any supplementary group IDs. This command is useful for checking the user and group memberships of the current user, which can be important for understanding file and directory permissions. Additionally, the `id` command allows you to specify a username to display the user and group information for a different user. This can be helpful when troubleshooting permissions or access issues on a MacOS system. By using the `-G` option, you can display only the group IDs associated with the user. The `-g` option displays only the primary group ID, while the `-n` option displays the group names instead of the numerical IDs.
## id Syntax:
```bash
id [username]
```
## Options:
| Option | Description                |
|--------|----------------------------|
| -G     | Display the group IDs      |
| -g     | Display the effective group |
| -P     | Don't traverse the hierarchy |
| -u     | Display only the user ID   |

## Parameters:
| Parameter | Description                |
|-----------|----------------------------|
| username  | Specify the username to display specific user information | 

:::caution
Exercise caution when using the `id` command, especially with the `-u` option as it will only display the user ID and not the additional information.
:::  
## id Command Examples:
### Check current user's group memberships
```bash
id
```
Displays the user ID, group ID, and group memberships for the current user.

### Display group memberships for a specific user
```bash
id username
```
Shows the user ID, group ID, and group memberships for the specified username.

### Display only the user ID
```bash
id -u
```
Displays only the user ID of the current user.

### Display only the group ID
```bash
id -g
```
Shows only the group ID of the current user.

### Display detailed information about a specific user
```bash
id -u username
```
Displays detailed information about the specified user, including their user ID, group ID, and group memberships.

### Display supplementary group IDs
```bash
id -G
```
Shows the supplementary group IDs (in addition to the primary group ID) for the current user.
:::tip
When using the id command in MacOS, make sure to familiarize yourself with the available options and their respective meanings to retrieve the specific user and group information you need.
:::

## id Command Help Center:

### How do I use id in MacOS?
To use the id command in MacOS, execute the following command:
```bash
id
```

### How to display the user and group ID using id in MacOS?
To display the user and group ID, use the following command:
```bash
id -u -g
```

### How to get detailed user information with id in MacOS?
To get detailed user information, run the command below:
```bash
id -u -n -r -G
```

### How can I see all group memberships with id in MacOS?
To view all group memberships, use the id command with the following syntax:
```bash
id -Gn
```

### How to show only the user ID using id in MacOS?
To show only the user ID, use the command:
```bash
id -u
```

### How to display only the primary group ID using id in MacOS?
You can display only the primary group ID by executing the command:
```bash
id -g
```

### How do I show a specific user's information with id in MacOS?
To display information for a specific user, run the command below, replacing "username" with the actual username:
```bash
id username
```

### How to check if a user is a member of a specific group with id in MacOS?
To check if a user is a member of a specific group, use the following command:
```bash
id -nG username
```
## Applications of the id command

- Check the user and group ID of a specific user
- Determine the groups a user belongs to
- Verify a user's permissions and access levels for specific files and directories