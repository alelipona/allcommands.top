---
title: What is FINGER Windows command?
description: Learn how to use the Finger command in Windows to retrieve information about users on a network with this detailed guide.
---

The Windows finger command allows you to retrieve information about users on a network. By entering a username, you can view details such as login time, contact information, and more. The finger command is a useful tool for system administrators to check user activity and manage network resources efficiently.

## FINGER Syntax:
```cmd
finger [username]@[hostname]
```
## FINGER Options:
| Option | Description                    |
|--------|--------------------------------|
| -l     | Display long format information |
| -s     | Display information in short format |
| -h     | Display help for finger command |

:::caution
Exercise caution while using the finger command, as it may display sensitive information about users on the remote system. Make sure you have the necessary permissions before using this command.
:::

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| username  | Specifies the username of the user to query      |
| hostname  | Specifies the hostname of the remote system      |
## FINGER Command Usage Examples:

### Get Information About a Specific User
```cmd
finger username
```
Displays information about a specific user on the system.

### Monitor a Remote User
```cmd
finger username@hostname
```
Checks details about a user on a remote system.

### View List of Logged-in Users
```cmd
finger
```
Lists all users currently logged into the system.

### Check Idle Time of Users
```cmd
finger -s
```
Shows the idle time of users on the system.

### Display User Information with Custom Format
```cmd
finger username | grep -E "Name:|Login:|Directory:|Shell:"
```
Customizes the displayed user information by filtering specific details.
:::tip
When using the Finger command in Windows, make sure to specify the correct options and parameters to retrieve the desired information about users on a remote system.
:::

### How do I use finger in Windows?
To use the finger command in CMD, execute the following command:
```cmd
finger <username@hostname>
```

### What information can I get with the finger command in Windows?
To retrieve detailed information about a specific user on a remote system, such as their login name, full name, terminal, idle time, login time, possibly their office location, and more, you can use the finger command.

### How can I check if a specific user is logged in using finger in Windows?
To see if a particular user is currently logged into a remote system, you can use the finger command with the username parameter. This will display information about the user if they are logged in.

### Can finger show me the users currently logged in to the system in Windows?
Yes, you can use the finger command without providing a specific username to display a list of users currently logged in to the system.

### How do I display only the basic information of a user with the finger command in Windows?
To show only basic information about a specific user, such as their login name, full name, and when they last logged in, you can use the finger command with the -s option.

### Is it possible to get the detailed information of multiple users with finger in Windows?
Yes, you can retrieve detailed information for multiple users at once by specifying their usernames after the finger command in the command line.

### Can finger display information about local users as well in Windows?
Yes, the finger command in Windows can be used to retrieve information about both local and remote users, depending on the configuration of the system.

### How can I find out the syntax and available options for the finger command in Windows?
To view the syntax and available options for the finger command, you can use the "finger /?" command in the Windows command prompt.
## Applications of the FINGER Command

- Check user information
- Display user accounts
- Show logged in users
- Retrieve user profile data