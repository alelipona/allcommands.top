---
title: WEVTUTIL Windows command
description: Learn how to effectively use the Windows wevtutil command to manage event logs and perform various administrative tasks.
---

The Windows wevtutil command is a powerful tool used to manage event logs, query logs, export logs, and perform other administrative tasks related to event logging. With wevtutil, users can easily clear event logs, export logs to various file formats, query specific events based on filters, and manage subscriptions for event forwarding. This command-line utility provides a wide range of functionalities to help system administrators maintain and troubleshoot event logs efficiently. Whether you need to automate log management tasks or analyze specific events, wevtutil is a valuable tool in the Windows operating system toolkit.
## WEVTUTIL Syntax:
```cmd
wevtutil [options] [parameter]
```

## Options:
| Option | Description                           |
|--------|---------------------------------------|
| el     | Enumerates the events in a log or a channel. |
| cl     | Clears the specified channel.          |
| gli    | Gets information about a log or a channel. |
| sl     | Gets the contents of an event log.     |
| im     | Imports an XML-formatted query from a file to a specified log.  |
| xe     | Exports events from an event log.      |
| imh    | Imports an XML-formatted subscription from a file. |
| xh     | Exports a subscription.                |
| slc    | Gets and sets the configuration for log files. |
| gl     | Gets information about a log.          |
| ve     | Enumerates the occurs extension events in a log. |
| tq     | Submits an XPath query against a log.   |
| dump   | Displays event logs in text.           |
| sw     | Starts the Windows Event Log service.  |
| es     | Ends the Windows Event Log service.    |
| um     | Updates automatically published manifests. |
| im um  | Imports an XML-formatted manifest.     |
| wss    | Displays the schema version.           |
| ur     | Spares a log.                          |
| r      | Renames a log.                         |
| clc    | Clears a log of events.                |
| regsrv | Registers the Event Message File.      |
| unregsrv | Unregisters the Event Message File.   |

## Parameters:
| Parameter  | Description                           |
|------------|---------------------------------------|
| [channel]  | Specifies the channel name in which you want to perform an operation. |
| [logname]  | Specifies the name of a channel or a log. |
| [query]    | Specifies a query to be executed.     |
| [logfile]  | Specifies the file to export or import events. |
| [file]     | Specifies the source file for importing. |
| [destination] | Specifies the destination file for exporting. |
| [SubName]  | Specifies the name of the subscription to import or export. |

:::caution
Exercise caution when using the wevtutil command as it can manipulate event logs and channels in the Windows Event Viewer, which may impact system monitoring and troubleshooting capabilities.
:::
## WEVTUTIL CMD Examples:
### Exporting a Event Log to a File
```cmd
wevtutil epl Application C:\Logs\Application.evtx
```
Exports the Application event log to a file named "Application.evtx" located at "C:\Logs".

### Querying Events with a Specific ID
```cmd
wevtutil qe System /q:"Event[System/EventID=1001]"
```
Queries the System event log for events with Event ID 1001.

### Clearing a Specific Event Log
```cmd
wevtutil cl Setup
```
Clears the Setup event log, removing all events from it.

### Finding Subscription Details
```cmd
wevtutil es
```
Displays subscription details such as subscription ID, name, query, status, and delivery information.

### Displaying Event Log Metadata
```cmd
wevtutil gli Security
```
Displays detailed metadata information for the Security event log.

### Backup Event Log Configuration
```cmd
wevtutil export-log System C:\Backups\SystemBackup.evtx
```
Creates a backup of the System event log configuration to the file "SystemBackup.evtx" located at "C:\Backups".
:::tip
It is recommended to run the wevtutil command with administrative privileges to ensure full access and functionality.
:::

### How do I use wevtutil in Windows?
To use the wevtutil command in Windows, execute the following command:
```cmd
wevtutil query-events System
```

### What is the purpose of the wevtutil command?
The wevtutil command in Windows is used to manage event logs from the command line.

### How can I export event logs using wevtutil?
To export event logs using wevtutil, use the following command:
```cmd
wevtutil epl System C:\Logs\SystemEvents.evtx
```

### How do I clear event logs with wevtutil?
You can clear event logs using wevtutil with the following command:
```cmd
wevtutil cl System
```

### How can I backup event logs using wevtutil?
To backup event logs using wevtutil, run the following command:
```cmd
wevtutil gli System C:\Backup\SystemEventsBackup.evtx
```

### What is the syntax for querying event logs with wevtutil?
To query event logs with wevtutil, use the following syntax:
```cmd
wevtutil qe System /q:"*[System[Provider[@Name='ServiceControlManager']]]"
```

### How do I find the path to the event logs using wevtutil?
To find the path to the event logs using wevtutil, execute the following command:
```cmd
wevtutil el
```

### How can I display detailed information about a specific event log with wevtutil?
To display detailed information about a specific event log using wevtutil, use the following command:
```cmd
wevtutil gli System
```
## Applications of the WEVTUTIL Command

- Querying event logs
- Exporting event logs
- Clearing event logs
- Managing event logs
- Reconfiguring event logs
- Checking event log properties