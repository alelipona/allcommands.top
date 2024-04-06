---
title: LOGMAN command in Windows
description: Manage performance data collection with the Windows logman command. Learn how to create, query, start, and stop data log collections.
---

The Windows logman command is a powerful tool for managing performance data collection. It allows users to create, query, start, and stop data log collections. By utilizing logman, users can monitor system performance, diagnose issues, and optimize their systems for better efficiency. The command provides a wide range of options for customizing data logging settings, enabling users to collect specific performance metrics based on their needs. With logman, users can efficiently gather and analyze performance data to make informed decisions and ensure their systems are running optimally.

## LOGMAN Syntax:
```cmd
logman [create|query|start|stop|delete|update|import|export|man|query providers|query contexts|query data|query counters|query definitions|query trace|query version|control|grid]
```

## Windows LOGMAN Options:
| Option                 | Description                                            |
|------------------------|--------------------------------------------------------|
| create                 | Creates a new data collector set.                      |
| query                  | Queries properties of a data collector set.            |
| start                  | Starts a data collector set.                           |
| stop                   | Stops a data collector set.                            |
| delete                 | Deletes a data collector set.                          |
| update                 | Updates the properties of a data collector set.        |
| import                 | Imports a data collector set to a .xml file.           |
| export                 | Exports a data collector set to a .xml file.           |
| man                    | Displays help for a particular subcommand.             |
| query providers        | Queries registered providers.                          |
| query contexts         | Queries available contexts.                            |
| query data             | Queries data from providers.                          |
| query counters         | Queries a list of counters from a provider.            |
| query definitions      | Queries the definitions of the counters.               |
| query trace            | Queries trace values.                                  |
| query version          | Queries the version of the performance monitoring API.|
| control                | Sends control messages to data collector sets.         |
| grid                   | Displays graphically a grid view of the performance data.|

## LOGMAN Parameters:
There are various parameters based on the selected option, and each option requires different parameters. Please refer to the specific help documentation for each option. 

:::caution
Exercise caution when using the logman command as it deals with performance monitoring and data collection settings in Windows, which can impact system resources and performance if misconfigured or misused.
:::

## How to use LOGMAN command:
### Start a Data Collector Set
```cmd
logman start MyDataCollector -p "Performance Counter" -s MySchedule
```
Starts a new Data Collector Set named "MyDataCollector" with the type "Performance Counter" and a custom schedule named "MySchedule".

### Stop a Data Collector Set
```cmd
logman stop MyDataCollector
```
Stops the Data Collector Set named "MyDataCollector".

### Query a Data Collector Set
```cmd
logman query MyDataCollector
```
Queries and displays information about the Data Collector Set named "MyDataCollector".

### Update a Data Collector Set
```cmd
logman update MyDataCollector -rl 30 -f csv
```
Updates the Data Collector Set named "MyDataCollector" to set the maximum file size to 30 MB and the file format to CSV.

### List all Data Collector Sets
```cmd
logman query
```
Lists all available Data Collector Sets.

### Delete a Data Collector Set
```cmd
logman delete MyDataCollector
```
Deletes the Data Collector Set named "MyDataCollector".

### Import Data Collector Set settings
```cmd
logman import -xml "C:\Path\To\MyDataCollector.xml"
```
Imports the settings of a Data Collector Set from an XML file located at the specified path.

### Export Data Collector Set settings
```cmd
logman export MyDataCollector -xml "C:\Path\To\Save\MyDataCollector.xml"
```
Exports the settings of the Data Collector Set named "MyDataCollector" to an XML file at the specified path.
:::tip
When using the logman command in Windows CMD, make sure to carefully follow the syntax and provide the necessary options to ensure the command functions correctly.
:::

### How do I use logman in Windows?
To use the logman command in Windows, execute the following command:
```cmd
logman --option <value>
```

### How can I create a new data collector set using logman?
To create a new data collector set with logman, use the following command:
```cmd
logman create datacollector -n "MyDataCollectorSet" -f csv -o "C:\PerfLogs\Data\Collector"
```

### How do I start a data collector set with logman?
To start a data collector set using logman, run the command:
```cmd
logman start "MyDataCollectorSet"
```

### How can I stop a data collector set with logman?
To stop a data collector set in logman, use the command:
```cmd
logman stop "MyDataCollectorSet"
```

### How do I display information about a specific data collector set with logman?
To display information about a specific data collector set, use the command:
```cmd
logman query "MyDataCollectorSet"
```

### How can I delete a data collector set using logman?
To delete a data collector set with logman, run this command:
```cmd
logman delete "MyDataCollectorSet"
```

### How do I list all existing data collector sets with logman?
To list all existing data collector sets, execute the command:
```cmd
logman query
```

### How can I export a data collector set configuration to a file in logman?
To export a data collector set configuration to a file, use this command:
```cmd
logman export -n "MyDataCollectorSet" -xml "C:\Path\To\Exported\Config.xml"
```

## Applications of the LOGMAN Command

- Manage performance counters.
- Create and manage data collector sets.
- Start and stop data collector sets.
- Export and import data collector sets.
- Query performance counter data.