---
title: cal Linux Command Guide
description: The Linux cal command displays a simple calendar in the terminal. Learn how to use cal to view calendars for specific months and years.
---

The **cal** command in Linux is used to display a simple calendar in the terminal. It shows the current month by default or allows you to specify a month and year to view. The calendar includes the day of the week, followed by the days of the month. By providing a specific month and year as arguments, you can view calendars for those dates. **cal** is a handy tool for quickly checking dates and planning events within the terminal environment.

## cal Syntax:
```bash
cal [options] [month] [year]
```
## Options:
| Option | Description                  |
|--------|------------------------------|
| -1     | Display single month         |
| -3     | Display previous, current, and next month |
| -y     | Display full year             |

## Parameters:
| Parameter | Description                  |
|-----------|------------------------------|
| month     | Display calendar for specific month (1-12) |
| year      | Display calendar for specific year          |

:::caution
It is important to note that the cal command does not have many options. Ensure to provide the correct combination of month and year for accurate calendar output.
:::
## cal Command Samples:
### Display Current Month Calendar
```bash
cal
```
Display the current month's calendar.

### Display Specific Year Calendar
```bash
cal 2023
```
Display the calendar for the year 2023.

### Display Specific Month Calendar of a Year
```bash
cal 7 2024
```
Display the calendar for July 2024.

### Show Calendar in Landscape Format
```bash
cal -m
```
Display the calendar in landscape format.

### Display Specific Month and Year Calendar
```bash
cal 12 2022
```
Display the calendar for December 2022.

### Display Calendar with a Specific Starting Day
```bash
cal -s 3
```
Display the calendar with Wednesday as the starting day of the week.

### Show Julian Days in Calendar
```bash
cal -J
```
Display Julian days in the calendar output.
:::tip
When using the cal command in Linux, make sure to refer to the man page (`man cal`) for a full list of options and customization possibilities.
:::

## cal FAQ:
### How do I use cal in Linux?
To use the cal command in Linux, execute the following command:
```bash
cal
```

### How can I display a specific month using cal in Linux?
To display a specific month with the cal command in Linux, provide the month and year as arguments:
```bash
cal 12 2022
```

### How can I highlight the current day when using cal in Linux?
To highlight the current day when running the cal command in Linux, use the -h flag:
```bash
cal -h
```

### How do I show a full year calendar using cal in Linux?
To display a full year calendar with the cal command in Linux, provide the year as an argument:
```bash
cal 2023
```

### How can I display a calendar for a specific year range with cal in Linux?
To show a calendar for a specific year range using the cal command in Linux, provide the start and end year as arguments:
```bash
cal 2022 2025
```

### How do I show the calendar month in a specific format using cal in Linux?
To display the calendar month in a specific format using the cal command in Linux, use the -3 flag:
```bash
cal -3
```
## Applications of the cal Command

- Display a calendar for the current month
- Display a calendar for a specific month and year
- Show a calendar for a specific year
- Highlight the current day in the calendar
- View different months or years by specifying the month and year