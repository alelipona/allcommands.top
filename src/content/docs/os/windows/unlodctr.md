---
title: UNLODCTR command in Windows
description: Remove performance counter names and explain text for a service or driver. Learn more about the unlodctr command in Windows.
---

The Windows unlodctr command is used to remove the performance counter names and explain text for a particular service or driver. This command helps in cleaning up unnecessary or corrupted performance counter information on the system.
## UNLODCTR Syntax:
```cmd
unlodctr [service_ini_file]
```
## Windows UNLODCTR Options:
|  Option  | Description                        |
|----------|------------------------------------|
|          |                                    |

## UNLODCTR Parameters:
|  Parameter       | Description                                     |
|------------------|-------------------------------------------------|
| service_ini_file | Specifies the .ini file containing the counters | 

:::caution
Exercise caution when using this command as it permanently removes the counters specified in the service_ini_file from the system. Make sure you understand the implications before proceeding.
:::
## How to use UNLODCTR command:
### Unload a Performance Counter from the system
```cmd
unlodctr ExampleCounter
```
Removes the specified performance counter from the system.

### Restore all Performance Counters to their original state
```cmd
unlodctr *
```
Restores all performance counters to their original state and removes all custom changes.

### Unload multiple Performance Counters
```cmd
unlodctr Counter1 Counter2
```
Unloads multiple specified performance counters from the system.

### Unload counters using a wildcard pattern
```cmd
unlodctr "Counter*"
```
Removes performance counters that match the specified wildcard pattern.

### Unload a specific set of counters
```cmd
unlodctr -m Counter1 "Counter 2"
```
Unloads the specified counters from the system and removes them from the registry.

### Unload counters for a specific language
```cmd
unlodctr /u:CounterName
```
Unloads the specified performance counter for the default language.

### Unload counters for a specific computer
```cmd
unlodctr /r:CounterName
```
Removes the specified performance counter from the remote computer.

### Suppress confirmation prompt
```cmd
unlodctr -q CounterName
```
Unloads the specified performance counter without showing a confirmation prompt.
:::tip
When using the unlodctr command in Windows, make sure to run the command prompt as an administrator to avoid any permission issues.
:::

### How do I use unlodctr in Windows?
To use the unlodctr command in Windows, execute the following command:
```cmd
unlodctr --backup MyService
```

### What is the purpose of the unlodctr command?
The unlodctr command is used to remove the counters of a service or driver from the Windows registry.

### How can I unload performance counters using unlodctr?
To unload performance counters using unlodctr, you can specify the service or driver name as shown in the following command:
```cmd
unlodctr MyService
```

### Can unlodctr be used to backup performance counter settings?
Yes, you can backup performance counter settings using the unlodctr command. Here is an example of how to back up the settings:
```cmd
unlodctr --backup MyService
```

### How do I remove the performance counter settings backup with unlodctr?
To remove the performance counter settings backup using unlodctr, you can use the following command:
```cmd
unlodctr --backup MyService --remove
```

### Is it possible to restore performance counter settings with unlodctr?
Yes, you can restore performance counter settings using the unlodctr command. Here is an example of how to restore the settings:
```cmd
unlodctr --restore MyService
```

### How can I list the performance counters loaded in Windows using unlodctr?
To list the performance counters loaded in Windows using unlodctr, you can execute the following command:
```cmd
unlodctr --list
```

### What happens if I try to unload performance counters that are not loaded?
If you try to unload performance counters that are not currently loaded, you will receive an error message indicating that the specified service or driver is not found.

### Can I use the unlodctr command to troubleshoot performance counter issues in Windows?
Yes, the unlodctr command can be helpful in troubleshooting performance counter issues by removing and reloading specific counters as needed.

## Applications of the UNLODCTR Command

- Unloads the counters used by the specified service or application
- Removes the counter names and explain text for the specified service or application from the Windows registry