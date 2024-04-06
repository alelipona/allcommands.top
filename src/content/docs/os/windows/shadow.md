---
title: All About SHADOW Windows command
description: Execute the Windows shadow command to create shadow copies of shared folders, enabling easy file recovery and version history.
---

The Windows shadow command allows users to create shadow copies of shared folders, providing a convenient way to recover files and access previous versions. Shadow copies capture the state of a shared folder at a specific point in time, enabling users to retrieve previous versions of files or folders without relying on traditional backups. By using the shadow command, users can easily restore files that were accidentally deleted or modified, reducing the risk of data loss. This feature enhances data security and offers an additional layer of protection for important files and folders.

## SHADOW Syntax:
```cmd
shadow [session ID | session name] [/server:ServerName] [/v]
```
## Options:
| Option | Description                               |
|--------|-------------------------------------------|
| /server:ServerName | Specifies the Terminal Server to use for shadowing. |
| /v     | Displays information about the actions being performed. |


## Parameters:
| Parameter      | Description                                |
|----------------|--------------------------------------------|
| session ID     | Specifies the ID of the session to shadow. |
| session name   | Specifies the name of the session to shadow. |

:::caution
Be cautious while using the `shadow` command as it allows you to view and interact with another user's session on the system. Make sure to have the necessary permissions and inform the user before initiating shadowing.
:::
## SHADOW CMD Examples:
### Create a Shadow Copy of a Specific Drive
```cmd
vssadmin create shadow /for=C:
```
Creates a shadow copy of the C: drive.

### List all Available Shadow Copies
```cmd
vssadmin list shadows
```
Displays a list of all available shadow copies on the system.

### Delete a Specific Shadow Copy by ID
```cmd
vssadmin delete shadows /id={ID}
```
Deletes a specific shadow copy using its unique identifier.

### Assign a Drive Letter to a Shadow Copy
```cmd
Diskshadow
add volume X: set id={ID}
```
Assigns a drive letter X:\ to a specific shadow copy using Diskshadow command.

### Import a Shadow Copy from External Media
```cmd
Diskshadow
import nowriters
```
Imports a shadow copy from external media using the Diskshadow command.

### Create a Shadow Copy with a Specific Storage Location
```cmd
vssadmin create shadow /for=C: /on=D:
```
Creates a shadow copy of the C: drive and stores it on the D: drive.
:::tip
When using the shadow command in Windows, make sure to have the necessary permissions to execute shadow operations. Additionally, always double-check the syntax and options to avoid unintended consequences.
:::

### How do I use shadow in Windows?
{answer}

### What is the purpose of the shadow command in Windows?
{answer}

### How can I list active shadow sessions in Windows?
{answer}

### How do I disconnect a specific shadow session in Windows?
{answer}

### How can I initiate a shadow session with a specific user in Windows?
{answer}

### What options are available with the shadow command in Windows?
{answer}

### How do I end all shadow sessions in Windows?
{answer}

### Is it possible to initiate shadow sessions remotely in Windows using the shadow command?
{answer}
## Applications of the SHADOW Command

1. View and interact with another user's session.
2. Provide remote assistance or support.
3. Monitor user activity without interrupting their work.
4. Troubleshoot and fix issues on a remote computer.
5. Collaborate on projects by sharing screens.