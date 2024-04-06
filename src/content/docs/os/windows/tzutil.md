---
title: Windows TZUTIL command
description: Learn how to manage time zones on Windows using the tzutil command. Explore options for setting, retrieving, and listing time zones.
---

The Windows tzutil command is a powerful tool for managing time zones on your system. With tzutil, you can easily set, retrieve, and list time zones on your Windows machine. This command-line utility provides various options for interacting with time zones, allowing you to customize your system's time settings to suit your needs. Whether you need to change your time zone, find out the current setting, or view a list of available time zones, tzutil has got you covered. Mastering the tzutil command can help you efficiently manage time-related tasks on Windows.
## TZUTIL Syntax:
```cmd
tzutil [option] [parameter]
```
## Options:
| Option | Description                            |
|--------|----------------------------------------|
| /s     | Set the time zone                       |
| /g     | Get the current time zone ID            |
| /l     | List all time zone IDs                  |
| /?     | Display help message                    |

## Parameters:
| Parameter   | Description                            |
|-------------|----------------------------------------|
| TimeZoneID  | Time zone ID to be set or retrieved     |

:::caution
Exercise caution when using the tzutil command as it can affect the system's time zone settings. Make sure to input the correct time zone ID to avoid unintentional changes.
:::
## TZUTIL Usage:
### Display the Current Time Zone
```cmd
tzutil /g
```
This command displays the current time zone setting on the Windows operating system.

### List Available Time Zones
```cmd
tzutil /l
```
Lists all available time zones that can be set on the Windows operating system.

### Set the Time Zone to Pacific Standard Time
```cmd
tzutil /s "Pacific Standard Time"
```
This command sets the time zone on the Windows operating system to Pacific Standard Time.

### Disable Daylight Saving Time
```cmd
tzutil /l
tzutil /s "Pacific Standard Time"
```
This pair of commands lists all available time zones and then sets the time zone to Pacific Standard Time, effectively disabling daylight saving time adjustments.
:::tip
It is recommended to run the tzutil command with administrative privileges to ensure proper functionality and avoid any permission-related issues.
:::

### How do I use tzutil in Windows?
To use the tzutil command in Windows, execute the following command:
```cmd
tzutil /l
```

### How can I list all available time zones using tzutil?
To list all available time zones in Windows using tzutil, run the following command:
```cmd
tzutil /g
```

### How do I set the time zone using tzutil in Windows?
To set the time zone in Windows using tzutil, use the following command with the desired time zone ID (for example, "Eastern Standard Time"):
```cmd
tzutil /s "Eastern Standard Time"
```

### How can I get the current time zone setting with tzutil?
To retrieve the current time zone setting in Windows using tzutil, execute the following command:
```cmd
tzutil /g
```

### How do I delete a saved time zone entry using tzutil in Windows?
To delete a previously saved time zone entry in Windows using tzutil, run the following command with the time zone ID:
```cmd
tzutil /x "<time zone ID>"
```

### How can I obtain detailed information about a specific time zone with tzutil?
To get detailed information about a specific time zone in Windows using tzutil, use the following command with the time zone ID:
```cmd
tzutil /s "<time zone ID>"
```

### Can I set the time zone using tzutil in a script or batch file?
Yes, you can set the time zone using tzutil in a script or batch file by incorporating the tzutil command with the desired time zone ID as needed.
```cmd
tzutil /s "<time zone ID>"
```

## Applications of the TZUTIL Command

- Setting a time zone
- Listing available time zones
- Displaying the current time zone
- Daylight Saving Time (DST) settings