---
title: What is CHGLOGON Windows command?
description: Change user logon information using the Windows chglogon command. Learn how to modify usernames and passwords effortlessly.
---

The Windows chglogon command enables users to change user logon information effortlessly. This command allows users to modify usernames and passwords with ease. By utilizing the chglogon command, users can update their login details quickly and effectively. This feature provides a convenient way to manage user credentials within the Windows operating system. Ultimately, the chglogon command offers a seamless solution for users looking to modify their logon information without any hassle.

## CHGLOGON Syntax:
```cmd
chglogon [enable|disable]
```
## CHGLOGON Options:

| Option   | Description                      |
|----------|----------------------------------|
| enable   | Enables automatic logon          |
| disable  | Disables automatic logon         |

:::caution
Exercise caution when using the chglogon command as it directly affects the automatic logon feature on Windows systems. Incorrect usage can lead to security risks or unintended access to the system.
:::

## Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| enable    | Enables automatic logon with the specified user  |
| disable   | Disables automatic logon                         |
## CHGLOGON Command Usage Examples:
### Change the Logon Prompt Message
```cmd
chglogon /random "Welcome to My Computer"
```
Changes the logon prompt message to "Welcome to My Computer".

### Reset Logon Prompt Message to Default
```cmd
chglogon /random ""
```
Resets the logon prompt message to the default message.

### Display Current Logon Prompt Message
```cmd
chglogon /query
```
Displays the current logon prompt message.

### Set Logon Prompt Message with Specific Text
```cmd
chglogon /random "Enter your credentials to access the system."
```
Sets a custom logon prompt message as "Enter your credentials to access the system."

### Disable Logon Prompt Message
```cmd
chglogon /disable
```
Disables the logon prompt message displayed during logon.
:::tip
Remember to run the chglogon command with administrative privileges to ensure proper functionality.
:::

### How do I use chglogon in CMD?
To use the chglogon command in CMD, execute the following command:
```cmd
chglogon --logoff
```

### What is the purpose of the chglogon command in Windows CMD?
The chglogon command in Windows CMD is used to change the logon options for a user session.

### How can I logoff a user session using the chglogon command in CMD?
To logoff a user session using the chglogon command in CMD, you can use the following command:
```cmd
chglogon --logoff
```

### How do I switch users using the chglogon command in CMD?
To switch users using the chglogon command in CMD, you can use the following command:
```cmd
chglogon --switchuser
```

### Can I lock a user session using the chglogon command in CMD?
Yes, you can lock a user session using the chglogon command in CMD by executing the following command:
```cmd
chglogon --lock
```

### How do I unlock a locked user session with the chglogon command in CMD?
To unlock a locked user session using the chglogon command in CMD, you can use the following command:
```cmd
chglogon --unlock
```

### Can I change the password for a user session using the chglogon command in CMD?
Yes, you can change the password for a user session using the chglogon command in CMD by executing the following command:
```cmd
chglogon --chgpwd
```
## Applications of the CHGLOGON Command

- Change the currently logged-on user
- Automate user switching tasks