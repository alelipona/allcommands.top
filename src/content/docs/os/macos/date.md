---
title: date MacOS command
description: Learn how to use the date command in MacOS to display or set the system date and time. Easily format dates, calculate time differences, and more.
---

The `date` command in MacOS allows users to display and set the system date and time. It offers various options to customize the date and time format, calculate time differences, and perform other date-related tasks. By using this versatile command, MacOS users can efficiently manage date and time operations directly from the terminal.

## date Syntax:
```bash
date [options] [+format] 
```
## Options:
| Option           | Description                                   |
|------------------|-----------------------------------------------|
| -d, --date       | Display the date specified                     |
| -u, --utc        | Print or set Coordinated Universal Time (UTC)  |
| -r, --reference  | Display the last modification time of a file   |
| -R, --rfc-2822   | Output date and time in RFC 2822 format        |
| -I, --iso-8601   | Output date and time in ISO 8601 format        |
| -j, --date=%s    | Display time as seconds since epoch (1970)     |
| -f, --file       | Use date from a file instead of current date   |

## Parameters:
| Parameter     | Description                                    |
|---------------|------------------------------------------------|
| +FORMAT       | Use FORMAT as the output date and time format  |

:::caution
Exercise caution when using the `date` command as it can directly impact system date and time settings.
:::
## date bash Examples:
### Display the current date and time
```bash
date
```
Display the current date and time in the default format.

### Display the date in a specific format
```bash
date "+%Y-%m-%d %H:%M:%S"
```
Display the date and time in a customized format.

### Display the day of the week
```bash
date "+%A"
```
Display the full name of the day of the week.

### Display the time in 12-hour format
```bash
date "+%r"
```
Display the time in 12-hour format with AM/PM.

### Display the week number of the year
```bash
date "+%U"
```
Display the week number of the year (starting on Sunday).

### Convert a date string to a Unix timestamp
```bash
date -j -f "%Y-%m-%d %H:%M:%S" "2022-12-31 23:59:59" "+%s"
```
Convert a specific date and time string to a Unix timestamp.
:::tip
When using the date command in MacOS, make sure to refer to the official documentation or use the `man date` command in the terminal to explore all the available options and formats.
:::

### How do I format the output of the date command in MacOS?
To format the output of the date command in MacOS, use the following command:
```bash
date "+%Y-%m-%d %H:%M:%S"
```

### How can I display the current date and time using the date command in MacOS?
To display the current date and time using the date command in MacOS, run the following command:
```bash
date
```

### How do I display the current date in a specific timezone with the date command in MacOS?
To display the current date in a specific timezone using the date command in MacOS, use the following command:
```bash
date -ju "+%Y-%m-%d %H:%M:%S" -v<value>H
```

### How can I get the epoch/Unix timestamp using the date command in MacOS?
To get the epoch/Unix timestamp using the date command in MacOS, execute the following command:
```bash
date +%s
```

### How do I show the calendar for a specific year with the date command in MacOS?
To show the calendar for a specific year using the date command in MacOS, run the following command:
```bash
cal <year>
```

### How can I display the week number of the current year with the date command in MacOS?
To display the week number of the current year using the date command in MacOS, use the following command:
```bash
date "+%V"
```

### How do I find the day of the week for a specific date with the date command in MacOS?
To find the day of the week for a specific date using the date command in MacOS, run the following command:
```bash
date -jf "%Y-%m-%d" "2022-12-25" "+%A"
```
## Applications of the date command

- Displaying the current date and time
- Converting timestamps to human-readable dates
- Setting the system date and time
- Calculating time differences
- Formatting date and time in scripts