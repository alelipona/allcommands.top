---
title: GPUPDATE command in Windows
description: Learn how to use the Windows gpupdate command to update Group Policy settings on your system efficiently.
---

The Windows gpupdate command is a powerful tool used to refresh Group Policy settings on local and remote computers, ensuring that any recent changes are applied without requiring a system reboot. By running this command, you can update policy settings, force a group policy refresh, and resolve inconsistencies in Group Policy settings across your network. It allows system administrators to manage and enforce policy settings effectively without disruption to end-users.

## GPUPDATE Syntax:
```cmd
gpupdate [/Target:{Computer | User}] [/Force] [/Wait:<value>] [/Logoff] [/Boot] [/Sync] [/Link] [/Forceboot] [/Retry:<value>] [/CSE:<value>] [/Remote] [/V] [/?]
```
## Windows GPUPDATE Options:
| Option    | Description                                          |
|-----------|------------------------------------------------------|
| /Target   | Specifies the target of the update (Computer or User)|
| /Force    | Forces the update even if there are no changes       |
| /Wait     | Specifies the number of seconds to wait for policy processing to finish                   |
| /Logoff   | Logs off the user after the update                   |
| /Boot     | Restarts the computer after the update               |
| /Sync     | Synchronizes policy processing                       |
| /Link     | Enables linking of remote GPOs                        |
| /Forceboot| Forces the computer to reboot, regardless of policy  |
| /Retry    | Changes the number of retries for getting policy    |
| /CSE      | Specifies a client-side extension to process        |
| /Remote   | Performs the operation on a remote computer          |
| /V        | Specifies more detailed output                      |
| /?        | Displays help/usage information                       |

## GPUPDATE Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| /Target   | Specifies the target of the update (Computer or User)|
| /Wait:<value> | Specifies the number of seconds to wait for policy processing to finish       |
| /Retry:<value> | Changes the number of retries for getting policy                        |
| /CSE:<value> | Specifies a client-side extension to process                                |

:::caution
Use with caution. Running gpupdate can cause immediate enforcement of group policies, potentially affecting system settings and configurations. Make sure to understand the implications of the options and parameters used.
:::
## How to use GPUPDATE command:

### Update Group Policy on Local Computer
```cmd
gpupdate /force
```
Updates the group policy on the local computer immediately.

### Update Group Policy on Remote Computer
```cmd
gpupdate /target:computer /s:RemoteComputerName /force
```
Forces an update of the group policy on a remote computer named "RemoteComputerName".

### Update Group Policy on Specific User
```cmd
gpupdate /target:user /user:username /force
```
Updates the group policy for a specific user (replace "username" with the actual username).

### Update Group Policy and Log Off
```cmd
gpupdate /force /logoff
```
Updates the group policy and then logs off the current user.

### Update Group Policy and Reboot
```cmd
gpupdate /force /boot
```
Updates the group policy and then reboots the computer.

### Check for Group Policy Updates
```cmd
gpupdate /force /scope:computer
```
Checks for group policy updates for the computer without actually applying the changes.

### Update Group Policy and Reestablish Network Connections
```cmd
gpupdate /force /sync
```
Updates the group policy and then synchronizes network connections.

### Update Group Policy and Display Detailed Information
```cmd
gpupdate /force /v
```
Updates the group policy displaying detailed information during the process.
:::tip
Remember to run the gpupdate command with administrative privileges to ensure that group policy settings are properly updated.
:::

### How do I use gpupdate in Windows?
To use the gpupdate command in Windows, execute the following command:
```cmd
gpupdate
```

### What is the purpose of the gpupdate /force option?
The /force option in gpupdate forces a reapplication of all settings, regardless of whether they have changed or not. This can be useful in ensuring that all policies are immediately updated.
```cmd
gpupdate /force
```

### How can I update group policies only for the user configuration in gpupdate?
To update group policies only for the user configuration using gpupdate, you can use the /target parameter as follows:
```cmd
gpupdate /target:user
```

### How do I suppress the display of the gpupdate process in the command prompt?
To run gpupdate quietly without displaying the process in the command prompt, use the /quiet option:
```cmd
gpupdate /quiet
```

### Can I delay the application of group policy settings with gpupdate?
Yes, you can delay the application of group policy settings using the /wait parameter in gpupdate. This allows you to specify the number of seconds to wait before applying the update.
```cmd
gpupdate /wait:60
```

### How do I update group policies only for the computer configuration in gpupdate?
To update group policies only for the computer configuration using gpupdate, you can use the /target parameter as follows:
```cmd
gpupdate /target:computer
```

### What is the difference between gpupdate and gpupdate /sync?
The gpupdate command refreshes group policy settings immediately, while gpupdate /sync processes any asynchronous policy settings that are waiting in the background.
```cmd
gpupdate /sync
```

### How do I update group policies with additional logging in gpupdate?
To enable additional logging in gpupdate for troubleshooting purposes, you can use the /log parameter and specify the file path for the log:
```cmd
gpupdate /log:C:\Logs\gpupdate.log
```

## Applications of the GPUPDATE Command

- Refresh Group Policy settings
- Apply new Group Policy settings
- Force a computer to re-pull Group Policy settings
- Troubleshoot Group Policy issues
- Update Group Policy settings without rebooting the computer