---
title: tccutil MacOS command
description: Manage application access to protected data on macOS with the tccutil command.
---

The MacOS tccutil command allows users to manage application access to protected data such as contacts, calendars, and photos. By using tccutil, users can reset permissions, add or remove specific apps from accessing sensitive data, and troubleshoot permission-related issues. This command-line tool is helpful for controlling privacy settings and ensuring that only trusted applications have access to personal information on a Mac device.
## tccutil Syntax:
```bash
tccutil command [option] service
```
## Options:
| Option   | Description                           |
|----------|---------------------------------------|
| --insert | Allows the specified service access   |
| --remove | Denies access for the specified service|
| --reset  | Resets all decisions for the specified service|

## Parameters:
| Parameter | Description                                  |
|-----------|----------------------------------------------|
| command   | The action to be performed (insert, remove, reset) |
| service   | The service or application to grant or revoke access |

:::caution
Exercise caution when using the tccutil command as it directly affects privacy settings on your macOS system. Incorrect usage may lead to unexpected behavior or deny necessary permissions to applications.
:::
## tccutil bash Examples:
### Reset Camera Access
```bash
tccutil reset Camera
```
Resets the camera access permissions for all applications on your macOS system.

### Add Calendar Access for Terminal
```bash
tccutil allow Calendar /usr/bin/bash
```
Grants calendar access permission to the Terminal application.

### Deny Microphone Access for Zoom
```bash
tccutil deny Microphone us.zoom.xos
```
Revokes microphone access permission for the Zoom application.

### Reset Accessibility Access
```bash
tccutil reset Accessibility
```
Resets accessibility permissions for all applications on your macOS system.

### Add Reminders Access for Safari
```bash
tccutil allow Reminders /Applications/Safari.app
```
Grants reminders access permission to the Safari application.

### List Contacts Access
```bash
tccutil list Contacts
```
Lists the apps that have requested access to contacts on your macOS system.
:::tip
To use the tccutil command effectively, make sure to carefully specify the correct options and values according to the task you want to perform. Incorrect usage of tccutil can lead to unexpected behavior or errors.
:::

### How do I reset privacy permissions using tccutil in MacOS?
To reset privacy permissions for a specific application in MacOS, you can use the tccutil command with the `reset` option. This will prompt the user to reauthorize the application.
```bash
tccutil reset AppleEvents
```

### How do I grant accessibility permissions using tccutil in MacOS?
To grant accessibility permissions to an application in MacOS, you can use the tccutil command with the `insert` option. This will add the specified application to the list of apps with accessibility permissions.
```bash
tccutil insert Accessibility com.example.app
```

### How do I check if an application has a certain permission using tccutil in MacOS?
To check if a specific application has a certain permission in MacOS, you can use the tccutil command with the `info` option. This will display the status of the specified permission for the application.
```bash
tccutil info SystemPolicyAllFiles
```

### How do I remove a specific application from privacy permissions using tccutil in MacOS?
To remove a specific application from privacy permissions in MacOS, you can use the tccutil command with the `remove` option. This will revoke the specified permission for the application.
```bash
tccutil remove Camera com.example.app
```

### How do I manage access to contacts using tccutil in MacOS?
To manage access to contacts for a specific application in MacOS, you can use the tccutil command with the `enable` or `disable` options. This will enable or disable contact access for the specified application.
```bash
tccutil enable Contacts com.example.app
```
```bash
tccutil disable Contacts com.example.app
```

### How do I clear all privacy permissions using tccutil in MacOS?
To clear all privacy permissions for all applications in MacOS, you can use the tccutil command with the `reset` option and `AppleEvents` as the target. This will reset all privacy permissions, requiring users to reauthorize apps.
```bash
tccutil reset AppleEvents
```

### How do I manage access to calendar using tccutil in MacOS?
To manage access to the calendar for a specific application in MacOS, you can use the tccutil command with the `insert` or `remove` options. This will add or remove calendar access for the specified application.
```bash
tccutil insert Calendar com.example.app
```
```bash
tccutil remove Calendar com.example.app
```
## Applications of the tccutil command

- Resetting privacy permissions for applications
- Managing privacy settings for accessibility, contacts, and calendar
- Controlling which apps have access to the microphone and camera
- Granting or revoking access to location services
- Handling notifications and system events permissions