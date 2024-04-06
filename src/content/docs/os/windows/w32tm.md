---
title: What is W32TM Windows command?
description: Learn how to use the Windows w32tm command for time synchronization between computers.
---

The Windows w32tm command is used for configuring the time service in Windows operating systems to synchronize time with external sources.

## W32TM Syntax:
```cmd
w32tm [options] [parameters]
```

## W32TM Options:
| Option        | Description                       |
|---------------|-----------------------------------|
| /register     | Register the time service         |
| /unregister   | Unregister the time service       |
| /query        | Query the configuration            |
| /config       | Change configuration settings     |
| /resync       | Resynchronize the clock           |
| /stripchart   | Display an offset between two hosts|

## Parameters:
| Parameter  | Description                                                     |
|------------|-----------------------------------------------------------------|
| /computer: | Specifies the remote computer to operate on, defaults to local  |
| /quiet     | Suppresses success messages                                      |
| /verbose   | Displays detailed information                                    |
| /monitor   | Monitor mode                                                     |
| /manualpeerlist: | Manually specify the list of NTP peers                    |
## W32TM Command Usage Examples:
### Sync Time with a Specific NTP Server
```cmd
w32tm /config /syncfromflags:manual /manualpeerlist:"time.windows.com"
```
Configures the Windows Time service to synchronize time with the NTP server "time.windows.com".

### Check the Current Time Configuration
```cmd
w32tm /query /status
```
Displays the current configuration and status of the Windows Time service.

### Force Synchronization with Time Source
```cmd
w32tm /resync
```
Forces the Windows Time service to immediately synchronize with its configured time source.

### Set the Time Source to Local CMOS Clock
```cmd
w32tm /config /syncfromflags:domhier /update
```
Configures the Windows Time service to synchronize time with the local CMOS clock as the source.

### Display Detailed Configuration Information
```cmd
w32tm /query /configuration
```
Provides detailed information on the configuration settings of the Windows Time service.
:::tip
Make sure to run the w32tm command with administrative privileges to avoid any permission-related issues.
:::

### How do I synchronize the time on a Windows machine using w32tm?
To synchronize the time on a Windows machine, use the following command:
```cmd
w32tm /resync
```

### How do I check the current status of the Windows Time service with w32tm?
To check the current status of the Windows Time service, use the following command:
```cmd
w32tm /query /status
```

### How do I configure the NTP server settings with w32tm on Windows?
To configure the NTP server settings, use the following command as an example:
```cmd
w32tm /config /manualpeerlist:"time.windows.com" /syncfromflags:manual /reliable:yes /update
```

### How can I force a Windows machine to update its time immediately using w32tm?
To force a Windows machine to update its time immediately, use the following command:
```cmd
w32tm /resync /force
```

### How do I display the last synchronization time and result with w32tm?
To display the last synchronization time and result, use the following command:
```cmd
w32tm /query /status
```

### How do I set the Windows Time service to start automatically with w32tm?
To set the Windows Time service to start automatically, use the following command:
```cmd
w32tm /register
```

### How do I unregister the Windows Time service with w32tm?
To unregister the Windows Time service, use the following command:
```cmd
w32tm /unregister
```

### How can I diagnose issues with time synchronization using w32tm in Windows?
To diagnose issues with time synchronization, use the following command:
```cmd
w32tm /stripchart /computer:<NTP_server> /samples:<number> /dataonly
```
## Applications of the W32TM Command

- Set time service configuration
- Synchronize time with a specified server
- Query the current status of the time service
- Change time configuration settings
- Diagnose issues related to time synchronization
- Monitor time service performance