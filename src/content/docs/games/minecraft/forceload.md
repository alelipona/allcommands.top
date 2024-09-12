---
title: forceload Minecraft command
description: Learn how to use the Minecraft forceload command to keep chunks loaded, ensuring constant activity and functionality in specific parts of your world.
---

The Minecraft forceload command allows players to keep chunks loaded at all times, ensuring continuous activity and functionality in specific parts of the world. By using this command, players can prevent chunks from unloading, regardless of player distance, guaranteeing that structures, redstone contraptions, or farms remain operational. This is particularly useful for automated systems, transport networks, or essential assets that need to be consistently active. The forceload command helps players maintain control and efficiency in their Minecraft world by ensuring that designated areas remain permanently loaded, enabling uninterrupted processes and operations.
## forceload Syntax:
```console
forceload [add|remove] <from> <to> [chunkX chunkZ [chunkX chunkZ ...]]
```
## Options:
| Option    | Description                             |
|-----------|-----------------------------------------|
| add       | Adds a forceloaded chunk or chunks       |
| remove    | Removes a forceloaded chunk or chunks    |

## Parameters:
| Parameter | Description                                                |
|-----------|------------------------------------------------------------|
| from      | Specifies the bottom corner of the area to be forceloaded  |
| to        | Specifies the top corner of the area to be forceloaded     |
| chunkX    | Optional parameter. Specifies the X coordinate of a chunk  |
| chunkZ    | Optional parameter. Specifies the Z coordinate of a chunk  |

:::caution
Using the forceload command improperly can cause performance issues and negatively impact your gameplay experience. Be sure to understand the command and use it responsibly.
:::
## forceload console Examples:
### Keep a Specific Chunk Loaded
```console
forceload add 10 20
```
This command adds the chunk located at coordinates (10, 20) to the list of chunks kept loaded in the game.

### Remove a Specific Chunk from Being Loaded
```console
forceload remove 10 20
```
By using this command, the chunk at coordinates (10, 20) will be removed from the list of chunks kept loaded in the game.

### List Currently Forceloaded Chunks
```console
forceload list
```
Executing this command will display a list of all the chunks that are currently set to be kept loaded in the game.

### Load Multiple Chunks
```console
forceload add 5 10 15 20
```
You can use this command to keep multiple chunks loaded by specifying the coordinates of each chunk one after another.

### Unload All Forceloaded Chunks
```console
forceload remove all
```
Executing this command will remove all chunks from the list of chunks being kept loaded, effectively unloading them.

### Load Chunks in a Specific Range
```console
forceload add 0 0 5 5
```
By using this command, you can keep a range of chunks loaded by specifying the coordinates of two opposite corners of the area you want to load.
:::tip
To prevent potential performance issues or conflicts, it is recommended to use the forceload command sparingly and only when necessary.
:::

### How do I use forceload in Minecraft?
To use the forceload command in Minecraft, execute the following command:
```console
forceload --add 100 64 -50 200 0 -150
```

### What is the purpose of the forceload command in Minecraft?
The forceload command in Minecraft is used to force chunks to remain loaded in memory, ensuring that specific areas of the world are always active and processing.

### How can I add chunks to be forceloaded in Minecraft?
To add chunks to be forceloaded in Minecraft, you can use the following command:
```console
forceload --add 50 70 -100 100 72 -150
```

### Can I remove chunks from being forceloaded in Minecraft?
Yes, you can remove chunks from being forceloaded in Minecraft using the following command:
```console
forceload --remove 50 70 -100
```

### How do I list all chunks that are currently forceloaded in Minecraft?
You can list all chunks that are currently forceloaded in Minecraft by using the following command:
```console
forceload --list
```

### Is it possible to set a ticking area using the forceload command in Minecraft?
Yes, you can set a ticking area using the forceload command in Minecraft with the following command:
```console
forceload --add 150 80 -200 200 0 -250 --ticking
```

### How can I remove all chunks that are forceloaded in Minecraft?
To remove all chunks that are forceloaded in Minecraft, you can use the following command:
```console
forceload --remove all
```

### Can I forceload chunks in multiple dimensions in Minecraft?
Yes, you can forceload chunks in multiple dimensions in Minecraft by specifying the dimension along with the chunk coordinates in the command. For example:
```console
forceload --add 0 70 0 100 72 50 --dimension the_end
```
## Applications of the forceload command
- Keeping specific chunks loaded at all times
- Creating custom mini-games or challenges in a designated area
- Ensuring certain areas remain active for redstone contraptions or farms
- Preserving specific areas for building or exploration
- Maintaining a chunk loaded for continuous map updating or resource gathering