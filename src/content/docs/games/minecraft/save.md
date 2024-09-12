---
title: Minecraft save command
description: Learn how to use the Minecraft save command to create backups of your world, player progress, and structures easily. 
---

The Minecraft save command allows players to create backups of their world, player progress, and structures. By using this command, players can easily save their game state and prevent any loss of progress. This is especially useful in survival mode, where unexpected events can lead to the destruction of valuable items or structures. The save command is simple to use and can be executed quickly to ensure that your hard work is protected. Additionally, by regularly saving your game using this command, you can revert back to a previous state if needed, providing peace of mind while exploring and building in the Minecraft world.

## save Syntax:
```console
save <options> <parameters>
```
## Options:
| Option | Description                   |
|--------|-------------------------------|
| -a     | Save all changed chunks        |
| -l     | List current saved-state files |

## Parameters:
| Parameter     | Description                           |
|---------------|---------------------------------------|
| <filename>    | Name of the file to save the game to  |

:::caution
Use caution when using the 'save' command as it directly affects the state of the game and can potentially overwrite existing save files.
:::
## save Usage:
### Save the current world
```console
/save
```
Saves the current world in Minecraft.

### Save the current world with a specific name
```console
/save my_custom_world
```
Saves the current world in Minecraft with the custom name "my_custom_world".

### Save the world in a specific directory
```console
/save directory/world_name
```
Saves the world in a specific directory with the given name in Minecraft.

### Save the world with timestamps
```console
/save-all
```
Saves the world in Minecraft with timestamps to track the save time.
:::tip
When using the save command in Minecraft, make sure to specify the correct options and values to save your progress effectively. Additionally, always double-check your command before executing it to prevent any unexpected outcomes.
:::

### How do I use save in Minecraft?
To use the save command in Minecraft, execute the following command:
```console
save
```

### How can I save my world with a specific name in Minecraft?
To save your world with a specific name in Minecraft, use the following command format:
```console
save --name my_custom_save
```

### How do I force a save in Minecraft?
To force a save in Minecraft, you can use the following command:
```console
save --force
```

### Can I change the save location in Minecraft?
Yes, you can change the save location in Minecraft by specifying the desired directory in the command. Here's an example:
```console
save --location /path/to/new/directory
```

### How do I save without backing up in Minecraft?
To save without creating a backup in Minecraft, you can use the following command:
```console
save --no-backup
```

### How can I list all saved games in Minecraft?
To list all saved games in Minecraft, execute the following command:
```console
save --list
```

### Can I schedule automatic saves in Minecraft?
Yes, you can schedule automatic saves in Minecraft using the following command format:
```console
save --schedule <time_interval>
```

## Applications of the save command

- Creating backups of a Minecraft world
- Saving progress before making significant changes
- Recovering lost data or progress
- Protecting against unexpected crashes or bugs
- Sharing world files with others