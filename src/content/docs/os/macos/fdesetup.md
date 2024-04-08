---
title: fdesetup MacOS command
description: Manage FileVault on macOS using the fdesetup command. Learn how to enable, disable, add users, and more securely protect your data.
---

The fdesetup command on MacOS is a powerful tool for managing FileVault, the built-in encryption feature that helps secure your data. With fdesetup, you can enable and disable FileVault, add users to encrypted volumes, check encryption status, and perform various other tasks related to FileVault management. By utilizing the fdesetup command, you can maintain the security of your data and ensure that it remains protected from unauthorized access.
## fdesetup Syntax:
```bash
fdesetup [options] [parameters]
```

## Options:
| Option                | Description                                   |
|-----------------------|-----------------------------------------------|
| enable                | Enable FileVault on a specific user           |
| status                | Check the current status of FileVault        |
| hasinstitutionalkey   | Check if the system has an institutional key |
| changeuserpassword    | Change the current user's FileVault password |
| list                  | List the users that can unlock FileVault     |
| remove                | Remove a user from the list of FileVault users|

## Parameters:
| Parameter       | Description                              |
|-----------------|------------------------------------------|
| username        | The username of the user to interact with |
| recoverykey     | The recovery key for FileVault           |
| password        | The user's password for FileVault        | 

:::caution
Exercise caution when using the fdesetup command as it can manipulate the security settings of FileVault on the system and incorrect usage may lead to data loss or security risks.
:::
## fdesetup bash Examples:
### Enable FileVault 
```bash
sudo fdesetup enable
```
Enables FileVault encryption on the macOS system.

### Add a User as an Enabled FileVault User
```bash
sudo fdesetup add -inputplist <path_to_plist_file>
```
Adds a user as an enabled FileVault user using a specified property list file.

### Remove a User from FileVault
```bash
sudo fdesetup remove -user <username>
```
Removes a user from FileVault using their username.

### Get the List of Enabled FileVault Users
```bash
sudo fdesetup list
```
Displays the list of users who are enabled to unlock the disk encrypted using FileVault.

### Change the Recovery Key for FileVault
```bash
sudo fdesetup changerecovery -personal
```
Changes the recovery key for FileVault using the personal recovery key option.

### Suspend FileVault Encryption
```bash
sudo fdesetup suspend
```
Suspends the FileVault encryption process on the macOS system.
:::tip
When using the fdesetup command in MacOS, make sure to have administrative privileges to perform encryption tasks on the system.
:::

### How do I enable FileVault using fdesetup in MacOS?
To enable FileVault using fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup enable
```

### How do I add a user as an additional FileVault-enabled user with fdesetup in MacOS?
To add a user as an additional FileVault-enabled user with fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup add -usertoadd username
```

### How do I remove a user from being FileVault enabled using fdesetup in MacOS?
To remove a user from being FileVault enabled using fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup remove -user username
```

### How do I unlock FileVault using the recovery key with fdesetup in MacOS?
To unlock FileVault using the recovery key with fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup authrestart -inputplist
```

### How do I show FileVault status using fdesetup in MacOS?
To show FileVault status using fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup status
```

### How do I change the institutional recovery key with fdesetup in MacOS?
To change the institutional recovery key with fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup changerecovery -institutional -inputplist
```

### How do I list the enabled users for FileVault using fdesetup in MacOS?
To list the enabled users for FileVault using fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup list -extended
```

### How do I disable FileVault using fdesetup in MacOS?
To disable FileVault using fdesetup in MacOS, execute the following command:
```bash
sudo fdesetup disable
```
## Applications of the fdesetup command

- Enable FileVault
- Disable FileVault
- Add a user as a FileVault-enabled user
- Remove a user from FileVault
- Change the recovery key
- Display information about FileVault status, users, and keys
- Enable, disable, or instant user recovery
- Create a new FileVault-enabled user account
- Remove a user's password from the list of allowed to unlock FileVault
- Change the personal recovery key