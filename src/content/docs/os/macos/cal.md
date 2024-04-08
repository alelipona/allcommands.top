---
title: cal command in MacOS
description: Display a monthly calendar in MacOS terminal using the cal command.
---

The cal command in MacOS is used to display a monthly calendar in the terminal. It shows the current month by default or lets you specify a different month and year. The cal command also allows you to display a calendar for an entire year or a specific day of the week. This powerful tool is a convenient way to quickly check dates and plan ahead directly from the command line.
## cal Syntax:
```bash
cal [month] [year]
```
## MacOS cal Options:
| Option | Description              |
|--------|--------------------------|
| -3     | Display previous, current, and next month's calendar |

## cal Parameters:
| Parameter | Description            |
|-----------|------------------------|
| month     | Specify a month (1-12) |
| year      | Specify a year         |

:::caution
Exercise caution while using the cal command as it may display a lot of information on the terminal, especially when using the option to show multiple months.
:::

### Display the Calendar for the Current Month
```bash
cal
```
Displays the calendar for the current month.

### Display the Calendar for a Specific Month in a Year
```bash
cal 12 2022
```
Displays the calendar for December 2022.

### Display the Calendar for a Specific Year
```bash
cal -y 2023
```
Displays the calendar for the year 2023.

### Display the Calendar for a Specific Month and Year
```bash
cal 6 2022
```
Displays the calendar for June 2022.

### Display the Julian Calendar for a Specific Year
```bash
cal -j 2022
```
Displays the Julian calendar for the year 2022.

### Display the Calendar in an Alternate Format
```bash
cal -3
```
Displays the calendar for the given month with the previous, current, and next month.

### Display the Calendar Highlighting Today's Date
```bash
cal -h
```
Displays the calendar highlighting today's date.

### Display a Specific Number of Months from the Current Month
```bash
cal -A 3
```
Displays the calendar for the current month along with the next 3 months.
:::tip
Remember that the cal command in MacOS is used to display a calendar. It does not have any advanced options or features compared to other calendar commands, so its usage is straightforward and limited to displaying the calendar for the specified month and year.
:::

### How do I use cal in MacOS?
To use the cal command in MacOS, execute the following command:
```bash
cal
```

### How can I display a specific month in the calendar with cal in MacOS?
To display a specific month in the calendar using the cal command in MacOS, you can specify the month and the year like this:
```bash
cal 12 2022
```

### How do I show a specific year calendar using cal in MacOS?
To show the calendar for a specific year using the cal command in MacOS, provide the year as an argument:
```bash
cal 2023
```

### Can I highlight the current day in the cal output in MacOS?
To highlight the current day in the cal output in MacOS, you can use the command with the -h option like this:
```bash
cal -h
```

### How do I display a calendar for a specific month with a specific starting day in MacOS?
To display a calendar for a specific month with a specific starting day using the cal command in MacOS, you can specify the month, year, and day like this:
```bash
cal 4 2024 -m
```

### How can I show the calendar for a specific month in a different format using cal in MacOS?
To show the calendar for a specific month in a different format using the cal command in MacOS, you can use the -y option to display the year alongside the month like this:
```bash
cal -y 6 2025
```

### How do I get the cal command to display Monday as the first day of the week in MacOS?
To get the cal command to display Monday as the first day of the week in MacOS, you can use the -m option to start the week on Monday like this:
```bash
cal -m
```

### Can I display a specific month's calendar with week numbers using cal in MacOS?
To display a specific month's calendar with week numbers using the cal command in MacOS, you can use the -w option like this:
```bash
cal -w 8 2026
```
## Applications of the cal command

- Display a calendar for the current month
- Display a calendar for a specific month and year
- Provide an overview of the days of the week and dates for a given month