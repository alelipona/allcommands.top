---
title: Minecraft jfr command
description: Learn how to use the Minecraft jfr command efficiently to collect Java Flight Recorder data and analyze performance in-game.
---

The Minecraft jfr command is a powerful tool that allows players to collect detailed Java Flight Recorder data in-game. By using this command, players can monitor and analyze various aspects of the game's performance, such as CPU usage, memory allocation, and thread activity. The jfr command provides valuable insights for optimizing and troubleshooting issues, making it an essential tool for advanced players and server administrators. By mastering the jfr command, players can enhance their gameplay experience and fine-tune their Minecraft environment for optimal performance.

## jfr Syntax:
```console
/jfr start [options] [duration]
```
## Options:
| Option | Description                         |
|--------|-------------------------------------|
| --all  | Record all available events         |
| --cpu  | Record CPU profiling data           |
| --lock | Record monitor contention data      |
| --heap | Record heap allocation data         |
| --file | Specify the output file for the recording |
| --name | Set a custom name for the recording |

## Parameters:
| Parameter | Description                    |
|-----------|--------------------------------|
| duration  | Duration of the recording in seconds |

:::caution
Be cautious when using the jfr command as it can potentially cause performance issues in your Minecraft server if used excessively or incorrectly.
:::
## jfr Usage:
### Start Java Flight Recorder
```console
jfr start
```
Starts Java Flight Recorder for collecting diagnostic and profiling data from the JVM.

### Stop Java Flight Recorder
```console
jfr stop
```
Stops the Java Flight Recorder, ending the data collection process.

### Export Java Flight Recorder Data
```console
jfr dump filename=myrecording.jfr
```
Exports the data collected by Java Flight Recorder to a specified filename for further analysis.

### Enable Java Flight Recorder Event
```console
jfr set maxChunkSize=100M
```
Adjusts the maximum size of chunks generated by Java Flight Recorder to optimize the data collection process.
:::tip
When using the jfr command in Minecraft, make sure to carefully review the available options and values that can be used with the command to optimize its functionality based on your specific needs.
:::

### How do I use jfr in Minecraft?
To use the jfr command in Minecraft, execute the following command:
```console
jfr --start filename=myrecording.jfr
```

### How can I stop a recording using jfr in Minecraft?
To stop a recording using jfr in Minecraft, use the following command:
```console
jfr --stop filename=myrecording.jfr
```

### How do I configure the duration of a recording with jfr in Minecraft?
To configure the duration of a recording with jfr in Minecraft, you can use the following command:
```console
jfr --start filename=myrecording.jfr duration=30s
```

### How can I add custom events to a recording using jfr in Minecraft?
To add custom events to a recording using jfr in Minecraft, you can use the following command:
```console
jfr --start filename=myrecording.jfr settings=profile duration=1m
```

### How do I list the available settings for jfr in Minecraft?
To list the available settings for jfr in Minecraft, you can use the following command:
```console
jfr --help
```

### How can I manage disk usage when recording with jfr in Minecraft?
To manage disk usage when recording with jfr in Minecraft, you can set a maximum file size for recordings using the following command:
```console
jfr --start filename=myrecording.jfr maxsize=1GB
```

### How do I analyze a saved JFR recording in Minecraft?
To analyze a saved JFR recording in Minecraft, you can use the following command:
```console
jfr --analyzse filename=myrecording.jfr
```

## Applications of the jfr command

1. Record and analyze performance data in Minecraft.
2. Monitor and troubleshoot server performance issues.
3. Identify potential sources of lag or delays in the game.
4. Optimize and fine-tune server settings for better gameplay experience.
5. Track and resolve memory usage or garbage collection issues.