---
title: Minecraft clone command
description: Learn how to use the Minecraft clone command to create copies of blocks, structures, or entities in your world with ease. 
---

The Minecraft clone command is a useful tool that allows players to duplicate blocks, structures, or entities within the game. By specifying two sets of coordinates, players can choose an area to copy and paste to another location. This command is commonly used for building projects, creating backups, or replicating structures in-game. Mastering the clone command can save time and effort in Minecraft, making it a valuable skill for players looking to streamline their building process.
## clone Syntax:
```console
/clone <begin> <end> <destination> [maskMode] [cloneMode] [tileName]
```

## Options:
| Option     | Description                                                                                     |
|------------|-------------------------------------------------------------------------------------------------|
| maskMode   | Specifies how to handle blocks that are not specified by the tileName parameter.                |
| cloneMode  | Specifies how the blocks are cloned.                                                            |
| tileName   | Specifies the source tile to copy.                                                              |

## Parameters:
| Parameter   | Description                                              |
|-------------|----------------------------------------------------------|
| begin       | Specifies the coordinates of the first corner.            |
| end         | Specifies the coordinates of the second corner.           |
| destination | Specifies where to clone the blocks to.                   |

:::caution
It is essential to carefully specify the coordinates for the 'begin', 'end', and 'destination" parameters to ensure the correct placement and cloning of blocks. Incorrect usage of the clone command can result in unintended consequences, such as overwriting existing structures or disrupting the game environment.
:::

## clone Usage:
### Clone a Selection of Blocks to Another Location
```console
/clone 100 64 300 105 69 305 200 64 300
```
This command clones a selection of blocks from coordinates (100, 64, 300) to (105, 69, 305) to another location starting at (200, 64, 300).

### Clone and Replace Blocks in the Destination Area
```console
/clone 100 64 300 105 69 305 200 64 300 replace
```
By adding "replace" at the end of the command, the blocks in the destination area will be replaced with the cloned blocks.

### Clone Blocks and Mask the Destination Area
```console
/clone 100 64 300 105 69 305 200 64 300 replace masked
```
Including "masked" in the command will clone blocks, replacing only non-air blocks in the destination area with the cloned blocks.

### Clone Blocks with a Different Offset
```console
/clone 100 64 300 105 69 305 200 64 300 10 0 10
```
Adding three additional coordinates at the end (10, 0, 10) will offset the cloned blocks by the specified amount in each direction.
:::tip
When using the clone command in Minecraft, make sure to carefully specify the coordinates and options to ensure the desired outcome. It's recommended to practice in a test environment before implementing it in your actual gameplay to avoid any unintended consequences.
:::

## Common Questions on clone Usage:

### How do I use clone in Minecraft?
To use the clone command in Minecraft, execute the following command:
```console
clone <begin> <end> <destination> [maskMode:mask]
```

### What does the clone command do in Minecraft?
In Minecraft, the clone command clones blocks from one place to another. It can be used for various purposes like building, copying structures, or creating backups.

### Can I clone specific types of blocks in Minecraft?
Yes, you can specify a specific type of block to be cloned using the maskMode option in the clone command. This allows you to selectively clone only certain types of blocks.

### How can I clone a structure in Minecraft?
You can clone a structure in Minecraft by specifying the coordinates of the area you want to clone and the destination where you want the cloned structure to be placed.

### Is it possible to rotate a cloned structure in Minecraft?
Yes, you can rotate a cloned structure in Minecraft by using the appropriate rotation values in the clone command. This allows you to orient the cloned structure in different directions.

### Can I clone structures between different dimensions in Minecraft?
Yes, you can clone structures between different dimensions in Minecraft by specifying the coordinates in both the source and destination dimensions when using the clone command.

### Are there any limitations to the clone command in Minecraft?
The clone command in Minecraft has a limitation on the maximum size of the area that can be cloned at once. Make sure to check and divide your cloning tasks into manageable sections to work within these limitations.

## Applications of the clone command

- Copying structures
- Creating backups
- Moving buildings
- Duplicating complex creations
- Building symmetric structures
- Designing custom maps
- Implementing redstone contraptions
- Replicating landscape features