---
title: What is WINMGMT Windows command?
description: Learn how to use the WINMGMT command in Windows to manage the WMI infrastructure efficiently.
---

The WINMGMT command in Windows is a crucial tool for managing the Windows Management Instrumentation (WMI) infrastructure. It enables users to interact with WMI, retrieve information, run queries, and execute tasks efficiently.

## WINMGMT Syntax:
```cmd
winmgmt [/backup|/restore] [/adap] [/clearadap] [/wipeadap] [/resyncperf] [/killperf] [/salvagerepository] [/resetrepository] [/register] [/upgrade] [/recoveros] [/setuguid] [/verifyrepository] [/winmgmt:remote=<ComputerName>] [/configlog=<logfile>] [/sysparm=<sysparm>] [/tunesys=<num>]
```

## WINMGMT Options:

| Option           | Description                                                  |
|------------------|--------------------------------------------------------------|
| /backup          | Backs up the WMI repository.                                 |
| /restore         | Restores the WMI repository from a backup.                   |
| /adap            | Rebuilds the WMI repository from ADAP files.                 |
| /clearadap       | Clears the existing ADAP files.                              |
| /wipeadap        | Wipes out all ADAP files.                                    |
| /resyncperf      | Resynchronizes performance counters.                        |
| /killperf        | Terminates a process that is using the WMI Performance Adapter.|
| /salvagerepository| Performs a consistency check on the WMI repository and rebuilds it if necessary.|
| /resetrepository| Resets the repository to its initial state.                 |
| /register        | Registers all the system providers.                         |
| /upgrade         | Upgrades the WMI repository schema.                         |
| /recoveros       | Recovers objects to a consistent state after a critical failure.|
| /setuguid        | Sets the universally unique identifier (UUID) of the computer.|
| /verifyrepository| Verifies the consistency of the WMI repository.             |
| /winmgmt:remote  | Specifies a remote computer to manage.                      |
| /configlog       | Specifies a log file for the WMI log.                       |
| /sysparm         | Specifies system parameters.                                |
| /tunesys         | Specifies the tuning parameter.                             |

:::caution
Improper use of the winmgmt command can result in system instability or data loss. Please ensure you have a good understanding of the command options and parameters before executing it.
:::

## Parameters:
| Parameter         | Description                                                  |
|-------------------|--------------------------------------------------------------|
| BackupFile        | The path to the file where the backup will be saved.         |
| ComputerName      | The name of the remote computer to manage.                  |
| LogFile           | The path to the log file for the WMI process.               |
| SysParam          | System parameters for WMI.                                   |
| Num               | The tuning parameter value.                                  |
|                   |                                                              |
|                                                              |
|                                                              |
|                                                              |

## WINMGMT Command Usage Examples:
### Check Windows Management Instrumentation Service Status
```cmd
winmgmt /verifyrepository
```
Verifies the Windows Management Instrumentation (WMI) repository for consistency.

### Force a WMI Repository Verification
```cmd
winmgmt /salvagerepository
```
Forces a verification and repair of the WMI repository.

### Reset WMI Repository to Consistent State
```cmd
winmgmt /resetrepository
```
Resets the WMI repository to a consistent state.

### Create a New Repository for WMI
```cmd
winmgmt /resetrepository
```
Creates a new WMI repository.

### Check and Repair WMI Repository
```cmd
winmgmt /resyncperf
```
Checks and repairs the WMI repository to ensure performance counters are up to date.
:::tip
When using the winmgmt command in Windows CMD, make sure to run the command with the necessary parameters to access the desired performance data or manage WMI. Consult the command's documentation or help option for more detailed information on options and syntax.
:::

### How do I use winmgmt in Windows?
To use the winmgmt command in CMD, execute the following command:
```cmd
winmgmt /?
```

### What is the purpose of the winmgmt command in Windows?
The winmgmt command in Windows is used for various purposes related to Windows Management Instrumentation (WMI) such as managing WMI and its repositories.

### How can I check the health of WMI using winmgmt?
To check the health of WMI using winmgmt, run the following command:
```cmd
winmgmt /verifyrepository
```

### How can I reset the WMI repository using winmgmt?
To reset the WMI repository using winmgmt, execute the following command:
```cmd
winmgmt /resetrepository
```

### Can winmgmt be used to stop the WMI service?
Yes, you can stop the WMI service using winmgmt. Use the following command:
```cmd
winmgmt /kill
```

### How do I check the version of WMI on my system with winmgmt?
To check the version of WMI on your system using winmgmt, run the command:
```cmd
winmgmt /checkversion
```

### Is there a way to resync performance counters with winmgmt?
Yes, you can resynchronize performance counters using winmgmt. Use the following command:
```cmd
winmgmt /resyncperf
```

## Applications of the WINMGMT Command

- Start the Windows Management Instrumentation service
- Stop the Windows Management Instrumentation service
- View information about the Windows Management Instrumentation service
- Register or unregister WMI providers
- View system properties using the WMI command-line interface
- View and modify system settings using WMI