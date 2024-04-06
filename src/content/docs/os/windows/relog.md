---
title: RELOG Windows Command Guide
description: Learn how to use the Windows relog command to create custom log files and analyze performance data efficiently.
---

The Windows relog command allows users to extract performance counters from log files and write them into new log files for further analysis. It is a powerful tool for monitoring system performance and troubleshooting issues. By using the relog command, users can create custom log files tailored to their specific needs and easily access valuable performance data.
## RELOG Syntax:
```cmd
relog [options] [parameters]
```
## Options:
| Option     | Description                               |
|------------|-------------------------------------------|
| /e         | Extracts data from a CounterLogs File      |
| /f         | Input file format (binary or tsv)         |
| /rt        | Replaces existing counter data             |
| /cf        | Configures specific counters               |
| /q         | Does not display the Relog banner         |
| /i         | Specifies an additional input file         |
| /o         | Specifies an output log file              |
| /c         | Specifies the counter input object        |
| /a         | Configures alerts for trace logs          |
| /global    | Applies the specified settings globally   |
| /b         | Specifies the current buffer size         |
| /min       | Specifies the time in minutes to collect data   |
| /max       | Specifies the time in minutes to collect data   |
| /f         | Specifies performance counter format       |

## Parameters:
| Parameter  | Description                                     |
|------------|-------------------------------------------------|
| fileName   | Specifies the name of the CounterLogs file       |
| inputData  | Data source or input file path                   |
| txtFile    | Specifies the path to the output logfile         |
| counter    | Indicates the specific counter to be configured  |
| range      | Specifies the date range for data extraction     |
| startTime  | Specifies the start time for data extraction     |
| endTime    | Specifies the end time for data extraction       |
| pid        | Specifies the process ID to monitor              |
| interval   | Specifies the sampling interval for log extraction|

:::caution
Exercise caution when using the relog command as it can overwrite existing data and configuration settings. Always verify the parameters and options to prevent data loss or unintended changes.
:::
## RELOG Command Samples:
### Extract Performance Data
```cmd
relog PerfData.etl -o PerfData.csv -f CSV
```
Extracts performance data from the "PerfData.etl" file and saves it as a CSV file.

### Merge Several Files
```cmd
relog log1.etl log2.etl log3.etl -o MergedData.etl
```
Merges multiple log files ("log1.etl", "log2.etl", "log3.etl") into a single file named "MergedData.etl".

### Change Output Format
```cmd
relog PerfData.etl -o PerfData.txt -f TXT
```
Converts the performance data from the "PerfData.etl" file into a text file format ("PerfData.txt").

### Filter Based on Event Type
```cmd
relog AppData.etl -o CriticalEvents.etl -if CriticalEvent
```
Filters events in the "AppData.etl" file and creates a new file ("CriticalEvents.etl") including only the "CriticalEvent" type.

### Set Time Range
```cmd
relog PerfData.etl -o LastHourData.etl -b 01/11/2022 10:00:00 -e 01/11/2022 11:00:00
```
Extracts performance data from the "PerfData.etl" file within a specific time range (from 10:00:00 to 11:00:00 on 01/11/2022).

### Exclude Specific Counters
```cmd
relog PerfData.etl -o PerfDataFiltered.etl -xl "\Memory\Available Bytes"
```
Creates a new file ("PerfDataFiltered.etl") excluding the counter "\Memory\Available Bytes" from the performance data in the "PerfData.etl" file.

### Include Specific Counters
```cmd
relog PerfData.etl -o PerfDataSpecific.etl -ic "\Processor(_Total)\% Processor Time"
```
Creates a new file ("PerfDataSpecific.etl") including only the specific counter "\Processor(_Total)\% Processor Time" from the performance data in the "PerfData.etl" file.
:::tip
When using the relog command in Windows, make sure to properly specify the options and values to achieve the desired results. Refer to the official documentation for a detailed list of available options and their usage.
:::

## RELOG FAQ:
### How do I use relog in Windows?
To use the relog command in Windows, execute the following command:
```cmd
relog --option <value>
```

### What is the purpose of the relog command in Windows?
The relog command in Windows is used to create new performance logs from data in existing log files. 

### How can I specify the input file for relog in Windows?
To specify the input file for relog in Windows, use the following syntax:
```cmd
relog input.etl
```

### Can I customize the output format when using relog in Windows?
Yes, you can customize the output format when using relog in Windows by specifying the desired format option. For example:
```cmd
relog input.etl -f csv
```

### How can I include specific counters from the input file with relog in Windows?
To include specific counters from the input file when using relog in Windows, you can use the following command:
```cmd
relog input.etl -cf counters.txt
```

### Is it possible to generate graphs from the output of relog in Windows?
Yes, you can generate graphs from the output of relog in Windows by specifying the graph option. For example:
```cmd
relog input.etl -o output.html -cf counters.txt -g
```
## Applications of the RELOG Command

- Converting performance counter logs to other formats
- Merging performance counter logs
- Filtering counters when converting logs from binary to CSV
- Summarizing performance data into database tables
- Displaying the contents of performance logs