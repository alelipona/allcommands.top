---
title: Minecraft save-all command
description: Automatically save all progress in your Minecraft world with the convenient save-all command. Learn how to use it efficiently to safeguard your creations.
---

The Minecraft save-all command is a useful tool for automatically saving all progress in your world. This command is essential for ensuring that your hard work and creations are safeguarded against any unexpected crashes or errors. By simply typing /save-all into the chat, you can quickly and efficiently save your world without the need to manually save. This command is especially important in multiplayer servers where multiple players are actively making changes to the world at the same time. Save time and protect your creations by utilizing the Minecraft save-all command in your gameplay.

## save-all Syntax:
```console
save-all
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
|        | No options available for save-all command. |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
|           | No parameters available for save-all command. |

:::caution
Exercise caution when using the save-all command as it will save the world data for all dimensions and may cause lag spikes in the game. It is recommended to use this command during off-peak times or when the server is not under heavy load.
:::
## save-all Usage:
### Save all game data
```console
save-all
```
This command saves all game data to the server.

### Perform a forced save
```console
save-all force
```
Executes a forced save of all game data without waiting for the standard save interval.

### Automatically save world data
```console
save-all 1h
```
Sets the automatic save interval to 1 hour for all world data.

### Save to a specific path
```console
save-all ./backups/world1
```
Saves all game data to a specific path within the server directory.
:::tip
Remember to regularly use the save-all command in Minecraft to ensure that your progress is saved in case of any unexpected events.
:::

### How do I use save-all in Minecraft?
To use the save-all command in Minecraft, execute the following command:
```console
save-all
```

### Can I use save-all in Minecraft to force a server save?
Yes, you can force a server save in Minecraft by using the save-all command with the flush option. This command saves all changes to the world on the disk immediately. Execute the following command:
```console
save-all flush
```

### Is it possible to schedule regular automatic saves in Minecraft using save-all?
Yes, you can schedule regular automatic saves in Minecraft by using the save-all command with the interval option. This command saves the world at regular intervals. Execute the following command to set a save interval of 10 minutes:
```console
save-all interval 10m
```

### How can I disable auto-saving using save-all in Minecraft?
To disable auto-saving in Minecraft using the save-all command, you can use the save-off option. This will stop the server from auto-saving changes. Execute the following command:
```console
save-all save-off
```

### How do I re-enable auto-saving after using save-off in Minecraft with save-all?
If you have disabled auto-saving in Minecraft using the save-off option, you can re-enable it by using the save-on option with the save-all command. This will allow the server to resume auto-saving changes. Execute the following command:
```console
save-all save-on
```

### Can I see the last time the world was saved in Minecraft with save-all?
Yes, you can view the time of the last save in Minecraft by using the save-all command with the query option. This command provides information on the last save time. Execute the following command:
```console
save-all query
```
## Applications of the save-all command

- Automatically save the game progress
- Backing up the world periodically
- Preventing the loss of recent changes in case of a crash or unexpected shutdown
- Synchronizing the world data across servers or realms