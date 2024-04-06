---
title: What is date Linux command?
description: Use the Linux date command to display or set the system date and time. Learn about formatting options for time and date in Linux.
---

The Linux date command is a versatile tool for displaying and setting the system date and time. It allows users to customize the output by specifying formatting options for time and date. This command is essential for system administrators and users who need to work with timestamps or schedule tasks based on the current date and time.

## date Syntax:
```bash
date [OPTION]... [+FORMAT]
```
## date Options:

| Option | Description                  |
|--------|------------------------------|
| -d     | Display the time described by STRING                  |
| -u     | Use Coordinated Universal Time (UTC)                  |
| -R     | Equivalent to '-u -d'          |
| -I[TIMESPEC] | Like -d, but allow setting only the time               |
| -r     | Display the last modification time of FILE              |
| -s     | Set the system date and time                             |
| -v     | Like --date, but also accept fairly arbitrary values    |
| -D[FMT] | Fully specified date; FMT='2004-02-29 16:21:42'          |
| -f FMT  | Parse and use date & time from FMT                      |

:::caution
Exercise caution when using the date command, as setting the system date and time or modifying system files can have serious consequences.
:::

## Parameters:

| Parameter | Description                                                             |
|-----------|-------------------------------------------------------------------------|
| +FORMAT   | Display date and time according to FORMAT, which uses the following escape sequences: %a, %A, %b, %B, %c, %C, %d, %D, %e, %F, %g, %G, %H, %I, %j, %m, %M, %n, %p, %P, %r, %R, %S, %t, %T, %u, %U, %V, %w, %W, %x, %X, %y, %Y, and %z. |
## date Command Usage Examples:
### Display Current Date and Time
```bash
date
```
Displays the current date and time.

### Display the Date in a Specific Format
```bash
date +"%Y-%m-%d %H:%M:%S"
```
Displays the date and time in the format "Year-Month-Day Hour:Minute:Second".

### Display the Day of the Week
```bash
date +"%A"
```
Displays the full weekday name.

### Calculate a Future Date
```bash
date -d "2 days" 
```
Calculates and displays the date that is 2 days ahead from the current date.

### Display Unix Timestamp
```bash
date +%s
```
Displays the current Unix timestamp (number of seconds elapsed since January 1, 1970).
:::tip
When using the date command in Linux, remember to refer to the man page for detailed information on all available options and their usage. Experiment with different options to format the output according to your requirements.
:::

### How do I use date in Linux?
To use the date command in bash, execute the following command:
```bash
date
```

### How can I display the current date and time in a specific format?
To display the current date and time in a particular format, use the following command with the desired format specified:
```bash
date "+%Y-%m-%d %H:%M:%S"
```

### How do I display the current year using the date command?
To display just the current year using the date command, use the following command:
```bash
date "+%Y"
```

### How can I get the day of the week for a specific date using date in Linux?
To determine the day of the week for a particular date, use the following command with the date specified:
```bash
date -d "2022-12-25" "+%A"
```

### How do I show the time in a specific timezone using date command?
To display the time in a specific timezone, use the following command with the timezone specified:
```bash
TZ="America/New_York" date
```

### How can I display the date and time in UTC using the date command?
To show the date and time in Coordinated Universal Time (UTC), use the following command:
```bash
date -u
```

### How do I display the number of seconds since the Epoch using date in Linux?
To get the number of seconds since the Unix Epoch, use the following date command:
```bash
date "+%s"
```
## Applications of the date command

- Displaying the current date and time
- Setting the system date and time
- Formatting the date in a specific way
- Finding the day or time difference between dates
- Calculating future or past dates
- Displaying the calendar for a specific month/year
- Converting dates between different formats