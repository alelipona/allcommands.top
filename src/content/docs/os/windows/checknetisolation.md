---
title: What is CHECKNETISOLATION Windows command?
description: Learn how to use the Windows checknetisolation command efficiently to manage network isolation settings.
---

The Windows checknetisolation command is a powerful tool used to manage network isolation settings for Windows apps. It allows users to check the network capabilities for a specific app, enabling them to troubleshoot network-related issues and ensure the app's proper functionality. By running the command with various parameters, users can view, add, or remove network capabilities for apps, inspect the network capabilities of installed Windows apps, and reset network isolation settings. This command is particularly useful for IT professionals and system administrators who need to maintain and monitor network configurations on Windows devices.

## CHECKNETISOLATION Syntax:
```cmd
checknetisolation [command] [-n | -d] [-l | -v] [-s | -e] PackageFamilyName
```

## CHECKNETISOLATION Options:

| Option         | Description                                      |
|----------------|--------------------------------------------------|
| -n             | Displays internet capabilities in a non-verbose format. |
| -d             | Displays the internet capabilities for all apps in the specified package family package. |
| -l             | Displays the loopback capabilities for all apps in the specified package family package. |
| -v             | Displays the package family name instead of the app name in the results. |
| -s             | Disables network loopback protection for an app with internet capabilities. |
| -e             | Enables network loopback protection for an app with internet capabilities. |

## Parameters:

| Parameter            | Description                                     |
|----------------------|-------------------------------------------------|
| PackageFamilyName    | The package family name associated with the app for which you want to check network isolation settings. |
## CHECKNETISOLATION Command Usage Examples:
### Check network isolation for a specific Windows Store application
```cmd
checknetisolation LoopbackExempt -s -n=Microsoft.WindowsStore_8wekyb3d8bbwe
```
This command checks the network isolation status for the specific Windows Store application "Microsoft.WindowsStore_8wekyb3d8bbwe".

### List all LoopbackExempt apps
```cmd
checknetisolation LoopbackExempt -c
```
Lists all LoopbackExempt apps on the system, showing which apps are exempted from network loopback restrictions.

### Add an app to the LoopbackExempt list
```cmd
checknetisolation LoopbackExempt -a -n=Microsoft.MicrosoftEdge_8wekyb3d8bbwe
```
Adds the app "Microsoft.MicrosoftEdge_8wekyb3d8bbwe" to the LoopbackExempt list, allowing it to access the network loopback.

### Remove an app from the LoopbackExempt list
```cmd
checknetisolation LoopbackExempt -r -n=Microsoft.MicrosoftEdge_8wekyb3d8bbwe
```
Removes the app "Microsoft.MicrosoftEdge_8wekyb3d8bbwe" from the LoopbackExempt list, restricting its network loopback access.

### Show help and usage information for CheckNetIsolation
```cmd
checknetisolation -h
```
Displays the help and usage information for the CheckNetIsolation command, providing explanations on its parameters and functions.
:::tip
When using the checknetisolation command in Windows CMD, make sure to run the command with the appropriate options and values to perform the desired operation effectively.
:::

### How do I use checknetisolation in CMD?
To use the checknetisolation command in CMD, execute the following command:
```cmd
checknetisolation
```

### What is the purpose of the checknetisolation command in CMD?
The checknetisolation command in Windows CMD is used to query or change network isolation settings for Windows Store apps.

### How can I list network capabilities with checknetisolation in CMD?
To list network capabilities using checknetisolation in CMD, you can use the following command:
```cmd
checknetisolation LoopbackExempt -s
```

### How do I add an app to the loopback exemption list with checknetisolation in CMD?
To add an app to the loopback exemption list using checknetisolation in CMD, you can use the following command:
```cmd
checknetisolation LoopbackExempt -a -n=<PackageFamilyName>
```

### How do I remove an app from the loopback exemption list with checknetisolation in CMD?
To remove an app from the loopback exemption list using checknetisolation in CMD, you can use the following command:
```cmd
checknetisolation LoopbackExempt -r -n=<PackageFamilyName>
```

### How can I reset the network isolation settings for all Windows Store apps in CMD?
To reset the network isolation settings for all Windows Store apps using checknetisolation in CMD, you can use the following command:
```cmd
checknetisolation reset
```

### How do I show detailed information about network capabilities with checknetisolation in CMD?
To display detailed information about network capabilities using checknetisolation in CMD, you can use the following command:
```cmd
checknetisolation LoopbackExempt -d
```

## Applications of the CHECKNETISOLATION Command

- Listing the network capabilities of Windows Store apps
- Checking network capabilities and loopback exemption status for Windows Store apps