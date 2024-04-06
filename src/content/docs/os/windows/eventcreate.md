---
title: EVENTCREATE command in Windows
description: Create custom events in Windows using the eventcreate command. Learn how to specify event details such as type, source, id, and message.
---

The Windows eventcreate command allows users to create custom events in the Event Viewer. This command is useful for generating specific event entries with custom details such as event type, source, ID, and message. By using the eventcreate command, users can add more context to events in the Event Viewer, making it easier to track and troubleshoot issues on Windows systems.

## EVENTCREATE Syntax:
```cmd
eventcreate [/S system [/U username [/P [password]]]] [/ID eventid] [/L logname] [/T type] [/SO source] [/D description]
```

## Windows EVENTCREATE Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| /S     | Specifies the name or IP address of a remote system. |
| /U     | Specifies a user context under which the command should execute. |
| /P     | Specifies the password for the given username. |
| /ID    | Specifies the event ID for the custom event.      |
| /L     | Specifies the event log where the custom event will be created. |
| /T     | Specifies the event type (success, error, warning, information). |
| /SO    | Specifies the source of the custom event.         |
| /D     | Specifies the description for the custom event.   |

## EVENTCREATE Parameters:
| Parameter   | Description                                            |
|-------------|--------------------------------------------------------|
| system      | Specifies the name or IP address of a remote system.    |
| username    | Specifies the username for authentication.               |
| password    | Specifies the password for the given username.         |
| eventid     | Specifies the event ID for the custom event.           |
| logname     | Specifies the event log where the custom event will be created. |
| type        | Specifies the event type (success, error, warning, information). |
| source      | Specifies the source of the custom event.               |
| description | Specifies the description for the custom event.         |

:::caution
Exercise caution when using the `eventcreate` command, especially when specifying remote systems, usernames, and passwords as it may involve security risks if not handled properly.
:::

## How to use EVENTCREATE command:
### Create a Custom Information Event
```cmd
eventcreate /t information /id 100 /l application /so "Task Scheduler" /d "Task Scheduled Successfully"
```
Creates a custom information event in the application log with event id 100 and the source "Task Scheduler" with the description "Task Scheduled Successfully".

### Create a Warning Event with a Specific Message
```cmd
eventcreate /t warning /id 200 /so "Disk Space Monitor" /d "Warning: Low Disk Space on Drive C:"
```
Creates a warning event with event id 200 and the source "Disk Space Monitor" with the description "Warning: Low Disk Space on Drive C:".

### Create a Success Audit Event
```cmd
eventcreate /t success /id 300 /l security /so "User Management" /d "User Created Successfully"
```
Creates a success audit event in the security log with event id 300 and the source "User Management" indicating that a user was created successfully.

### Create an Error Event with Error Message
```cmd
eventcreate /t error /id 400 /l system /so "System Service" /d "Critical System Error: Service Stopped Unexpectedly"
```
Creates an error event in the system log with event id 400 and the source "System Service" displaying the error message "Critical System Error: Service Stopped Unexpectedly".

### Create a Custom Event with Detailed Description
```cmd
eventcreate /t information /id 500 /so "Application XYZ" /d "Custom Event Created with Detailed Description: This is a test event."
```
Creates a custom information event with event id 500 and the source "Application XYZ" providing a detailed description stating "Custom Event Created with Detailed Description: This is a test event."

### Create a Success Audit Event in a Custom Log
```cmd
eventcreate /t success /id 600 /l MyCustomLog /so "Custom Application" /d "Custom Event: Process Completed Successfully"
```
Creates a success audit event in a custom log named "MyCustomLog" with event id 600 and the source "Custom Application" indicating that a process was completed successfully.

### Create a Failure Audit Event
```cmd
eventcreate /t failure /id 700 /l setup /so "Setup Wizard" /d "Installation Failed: Please check the setup log for details."
```
Creates a failure audit event in the setup log with event id 700 and the source "Setup Wizard" specifying the failure message "Installation Failed: Please check the setup log for details."

### Create a Custom Warning Event
```cmd
eventcreate /t warning /id 800 /so "Backup System" /d "Warning: Backup Failed. Ensure proper configuration."
```
Creates a custom warning event with event id 800 and the source "Backup System" with the warning message "Warning: Backup Failed. Ensure proper configuration."
## EVENTCREATE Command Troubleshooting Q&A:

### How do I use eventcreate in Windows?
To use the eventcreate command in Windows, execute the following command:
```cmd
eventcreate --option <value>
```

### How do I use eventcreate in CMD?
To use the eventcreate command in CMD, you can follow the example below:
```cmd
eventcreate /t ERROR /id 100 /l Application /d "An error occurred in the application."
```

### What are the different options available with the eventcreate command?
The eventcreate command in Windows provides various options such as specifying the event type, event ID, log name, message, etc. You can explore all available options by using the command with the /? flag.
```cmd
eventcreate /?
```

### How can I create a new custom event log using eventcreate?
To create a new custom event log using eventcreate, you can use the /so (source) parameter in the command. Here is an example:
```cmd
eventcreate /t ERROR /id 101 /l CustomLog /so MyApp /d "A custom error event in MyApp."
```

### How do I specify the type of event with eventcreate?
You can specify the type of event (ERROR, WARNING, INFORMATION) using the /t parameter in the eventcreate command. For example, to create an error event, you can use:
```cmd
eventcreate /t ERROR /id 102 /l Application /d "This is an error event."
```

### Can I provide a specific event ID when using eventcreate?
Yes, you can provide a specific event ID for the event being created using the /id parameter. Here is an example:
```cmd
eventcreate /t INFORMATION /id 103 /l System /d "Informational event with ID 103 in System log."
```

### How can I specify the log name for an event with eventcreate?
To specify the log name for an event using eventcreate, you can use the /l parameter followed by the desired log name. For instance:
```cmd
eventcreate /t WARNING /id 104 /l Security /d "Warning event in the Security log."
```

### Is it possible to add event message data with eventcreate?
Yes, you can add event message data when creating an event using the /d parameter in the eventcreate command. Here is an example:
```cmd
eventcreate /t WARNING /id 105 /l Application /d "A warning message for event creation."
```

### How do I list all available event logs on my system using eventcreate?
To list all available event logs on your system, you can use the command with the query parameter. Here is an example:
```cmd
eventcreate /query /list
```


:::tip
Remember to run the eventcreate command as an administrator to ensure proper execution and to have the necessary permissions to create events in the event logs.
:::


## Applications of the EVENTCREATE Command

1. Creating custom event log entries
2. Logging specific messages or alerts
3. Notifying users or administrators about important events
4. Tracking system activities or errors
5. Monitoring system performance or changes