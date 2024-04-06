---
title: Windows EVENTTRIGGERS command
description: Windows eventtriggers command allows users to create and manage event triggers on a Windows system.
---

The Windows eventtriggers command enables users to create, query, enable, disable, delete, and dump event triggers on a Windows system. This command is useful for automating tasks based on specific events or criteria within the operating system. Event triggers can be set up to run scripts or programs in response to events such as system startup, shutdown, or user logon. By using the eventtriggers command, users can efficiently manage and customize event triggers to meet their specific needs.

## EVENTTRIGGERS Syntax:
```cmd
eventtriggers /query
```
## Options:
| Option   | Description                               |
|----------|-------------------------------------------|
| /create  | Creates a new event trigger.               |
| /delete  | Deletes one or more event triggers.        |
| /query   | Displays a list of event triggers.         |
| /queryid | Displays detailed information for an event trigger identified by its GUID. |

## Parameters:
| Parameter | Description                                                                                    |
|-----------|------------------------------------------------------------------------------------------------|
| /?        | Displays help for the command syntax.                                                           |
| /server   | Specifies the target server for the command (default is the local server).                   |
| /run      | Specifies the command to execute when the event trigger is activated.                         |
| /tr       | Specifies the trigger event type (can be System, UserLogon, UserLogoff, Custom, or RemoteConnect). |

:::caution
Be cautious when creating or deleting event triggers as they can have an impact on system performance and functionality if not configured correctly.
:::
## EVENTTRIGGERS Usage:
### Create an Event Trigger for System Startup
```cmd
eventtriggers /create /tr "StartupTrigger" /l system /eid 100 /tk "cmd /c echo System has started"
```
Creates an event trigger named "StartupTrigger" that will execute the command "echo System has started" when event ID 100 is triggered in the system log.

### List all Event Triggers
```cmd
eventtriggers /query
```
Displays a list of all existing event triggers along with their details.

### Delete a Specific Event Trigger
```cmd
eventtriggers /delete /tn "StartupTrigger"
```
Deletes the event trigger named "StartupTrigger" from the system.

### Set the Timeout for Event Trigger
```cmd
eventtriggers /query /tn "StartupTrigger" /v timeout
eventtriggers /set /tn "StartupTrigger" /ttl 300
```
Displays the current timeout value for the event trigger named "StartupTrigger" and sets the timeout to 300 seconds (5 minutes).
## Common Questions on EVENTTRIGGERS Usage:

### How do I use eventtriggers in Windows?
To use the eventtriggers command in Windows, execute the following command:
```cmd
eventtriggers /query
```

### What is the purpose of the eventtriggers command?
The eventtriggers command is used to display and configure event triggers on a local or remote machine.

### How can I view the list of event triggers on my Windows machine?
To view the list of event triggers, you can use the following command:
```cmd
eventtriggers /query
```

### How do I create a new event trigger using eventtriggers?
To create a new event trigger, you can use the following command syntax:
```cmd
eventtriggers /create /tr "<trigger_name>" /l <log_name> /so <source_name> /d <description> /t <task_name> /tk <task_command>
```

### Can I delete an existing event trigger with eventtriggers?
Yes, you can delete an existing event trigger using the following command:
```cmd
eventtriggers /delete /tr "<trigger_name>"
```

### How can I enable an event trigger using eventtriggers?
To enable an event trigger, use the following command:
```cmd
eventtriggers /enable /tr "<trigger_name>"
```

### How do I disable a specific event trigger with eventtriggers?
You can disable a specific event trigger by running the following command:
```cmd
eventtriggers /disable /tr "<trigger_name>"
```

:::tip
Remember to run eventtriggers commands with administrative privileges to ensure proper configuration and management of event triggers.
:::



## Applications of the EVENTTRIGGERS Command

- View a list of event triggers
- Enable or disable event triggers
- Create new event triggers
- Delete existing event triggers