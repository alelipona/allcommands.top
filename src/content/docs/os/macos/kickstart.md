---
title: kickstart command in MacOS
description: Learn how to use the kickstart command in MacOS to automate system setup and configuration processes efficiently. 
---

The kickstart command in MacOS allows users to automate the setup and configuration of system preferences during the initial system setup process. By using a specifically formatted property list file, users can customize various settings such as language, time zone, network configuration, and more. This command is particularly useful for IT administrators or power users who need to deploy multiple Mac devices with consistent settings quickly and efficiently.
## kickstart Syntax:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -restart -agent -privs -allowAccessFor -users -delete -all
```

## MacOS kickstart Options:
| Options      | Descriptions                                  |
|--------------|-----------------------------------------------|
| -activate    | Enable remote management                      |
| -configure   | Configure Remote Management settings          |
| -access      | Specify access privileges for Remote Management|
| -restart     | Restart the Remote Management agent           |
| -agent       | Manage Remote Management agent settings       |
| -privs       | Manage privileges for Remote Management       |
| -allowAccessFor | Allow access for specified users/groups     |
| -users       | Specify user accounts for Remote Management   |
| -delete      | Delete the Remote Management settings         |
| -all         | Apply changes to all applicable components    |

## kickstart Parameters:
| Parameters   | Descriptions                           |
|--------------|----------------------------------------|
| None         | There are no required parameters for the kickstart command. | 

:::caution
Be cautious while using the kickstart command as it can make changes to Remote Management settings on the macOS system, potentially affecting access and security configurations.
:::
## How to use kickstart command:
### Enable remote management with a specified user
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -on -users adminuser -privs -all
```
Enables remote management with the specified user "adminuser" and grants all privileges.

### Disable remote management
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -deactivate -configure -access -off
```
Disables remote management on the Mac.

### Set a VNC password
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -configure -clientopts -setvnclegacy -vnclegacy yes -vncpw mypassword
```
Sets a VNC password for remote access, using "mypassword" as the password.

### Start Screen Sharing with specified settings
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -on -allowAccessFor -specifiedUsers -privs -all -clientopts -setMenuExtra -menuExtra yes -clientopts -setvnclegacy -vnclegacy yes -clientopts -setvncpw -vncpw mypassword
```
Starts screen sharing with specified settings, allowing access for specified users and setting a VNC password.

### Disable the ability to control the remote screen
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -clientopts -setScreenSharing -disable
```
Disables the ability to control the remote screen during screen sharing.

### Enable remote management with a blank password
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -on -privs -all -clientopts -setvnclegacy -vnclegacy no -clientopts -setvncpw -vncpw ''
```
Enables remote management with all privileges and a blank VNC password.

### Add a user to the list of allowed remote management users
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -configure -clientopts -setvnclegacy -vnclegacy yes -vncpw mypassword -clientopts -allowAccessFor -specifiedUsers -users admin1,admin2
```
Adds the users "admin1" and "admin2" to the list of allowed users for remote management with specified VNC password.

### Reset Remote Management settings to default
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -deactivate -configure -access -off
```
Resets all Remote Management settings to their default values.
:::tip
When using the kickstart command in MacOS, make sure to carefully review the available options and their respective values to ensure proper configuration. Double-check the syntax of the command to avoid any errors.
:::

### How do I use kickstart in MacOS?
To use the kickstart command in MacOS, execute the following command:
```bash
kickstart --option <value>
```

### How can I enable remote management using kickstart in MacOS?
To enable remote management using kickstart in MacOS, use the following command:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -activate -configure -access -on -restart -agent -privs -all
```

### How do I disable guest access through kickstart in MacOS?
To disable guest access through kickstart in MacOS, run the following command:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -deactivate -configure -access -off
```

### What command should I use to restart the ARD agent with kickstart in MacOS?
To restart the ARD agent using kickstart in MacOS, use the following command:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -restart -agent
```

### How do I list the status of remote management settings with kickstart in MacOS?
To list the status of remote management settings using kickstart in MacOS, execute the following command:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -print
```

### How can I configure additional parameters for remote management through kickstart in MacOS?
To configure additional parameters for remote management using kickstart in MacOS, use the following command as an example:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -configure -allowAccessFor -specifiedUsers -privs -all
```

### How do I set the VNC password using kickstart in MacOS?
To set the VNC password using kickstart in MacOS, execute the following command:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -configure -clientopts -setvnclegacy -vnclegacy yes -vncpw <password>
```

### What command should I use to clear all existing settings and fully reset kickstart in MacOS?
To clear all existing settings and fully reset kickstart in MacOS, use the following command:
```bash
sudo /System/Library/CoreServices/RemoteManagement/ARDAgent.app/Contents/Resources/kickstart -clear
```

## Applications of the kickstart command

1. Enabling remote management:
   - Allows for remote access and control of the macOS system.

2. Running automated tasks:
   - Can be used to automate various system tasks or configurations.

3. Configuring system settings:
   - Changes or sets system preferences without user interaction.

4. Remote lock and erase:
   - Enables the ability to remotely lock or erase a macOS device.

5. Managing software updates:
   - Can be utilized to manage software update settings remotely.