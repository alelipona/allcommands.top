---
title: fill Minecraft command
description: Master the Minecraft fill command to efficiently modify large areas in your world. Learn how to use this powerful tool to quickly replace blocks and create intricate structures with ease.
---

The fill command in Minecraft is a powerful tool that allows players to modify large areas quickly and efficiently. By specifying the coordinates of two opposite corners of a cuboid region, players can replace blocks within that space with a different type of block. This command is particularly useful for building structures, clearing out unwanted terrain, or making large-scale modifications to your world. With the fill command, players can easily create intricate patterns, replace large sections of blocks, or even clone existing structures. Experimenting with different block types and shapes can lead to endless creative possibilities in your Minecraft world. Master the fill command and take your building skills to the next level.
## fill Syntax:
```console
fill <x1> <y1> <z1> <x2> <y2> <z2> <block> [dataValue] [oldBlockHandling] [replaceBlockHandling]
```
## Options:
| Option                | Description                                    |
|-----------------------|------------------------------------------------|
| <x1> <y1> <z1>        | Coordinates for the first corner of the area   |
| <x2> <y2> <z2>        | Coordinates for the second corner of the area  |
| <block>               | The block to fill the area with                |
| [dataValue]           | Optional. The data value of the block          |
| [oldBlockHandling]    | Optional. Handle existing blocks in the area   |
| [replaceBlockHandling]| Optional. Handle blocks outside the area       |

## Parameters:
| Parameter            | Description                                  |
|----------------------|----------------------------------------------|
| <x1> <y1> <z1>       | The coordinates for the first corner of the area   |
| <x2> <y2> <z2>       | The coordinates for the second corner of the area  |
| <block>              | The block to fill the area with                     |
| [dataValue]          | The optional data value of the block                |
| [oldBlockHandling]   | Specify how to handle existing blocks in the area   |
| [replaceBlockHandling]| Specify how to handle blocks outside the area       |

:::caution
Be cautious when using the fill command as it can overwrite existing blocks and structures. Make sure to double-check the coordinates and parameters to avoid unexpected results.
:::
## fill console Examples:
### Fill a specific region with stone
```console
fill 10 70 10 20 80 20 stone
```
Fills the region from coordinates (10, 70, 10) to (20, 80, 20) with stone blocks.

### Replace all grass blocks with dirt
```console
fill -10 64 -10 10 100 10 minecraft:dirt replace minecraft:grass_block
```
Replaces all grass blocks within the region from (X:-10, Y:64, Z:-10) to (X:10, Y:100, Z:10) with dirt blocks.

### Create a hollow cube of glass blocks
```console
fill 30 50 30 40 70 40 minecraft:glass replace minecraft:air hollow
```
Generates a hollow cube of glass blocks within the region from (30, 50, 30) to (40, 70, 40).

### Replace water source blocks with air
```console
fill -5 55 -5 5 70 5 minecraft:air replace minecraft:water[level=0]
```
Removes all water source blocks within the region from (-5, 55, -5) to (5, 70, 5) and replaces them with air.

### Fill a pyramid structure with sandstone
```console
fill 0 60 0 20 60 20 minecraft:sandstone replace minecraft:air pyramid
```
Creates a pyramid structure using sandstone blocks within the region from (0, 60, 0) to (20, 60, 20).

### Replace all oak wood planks with stone bricks
```console
fill -10 70 -10 10 80 10 minecraft:stone_bricks replace minecraft:oak_planks
```
Changes all oak wood plank blocks to stone brick blocks within the region from (-10, 70, -10) to (10, 80, 10).
:::tip
When using the fill command in Minecraft, make sure to carefully specify the coordinates and blocks you want to fill. Incorrect coordinates or block types can result in unexpected changes to your world.
:::

### How do I use fill in Minecraft?
To use the fill command in Minecraft, execute the following command:
```console
fill --from <starting_coordinate> --to <ending_coordinate> <block>
```

### What does the fill command do in Minecraft?
The fill command in Minecraft is used to fill a specific area with a certain type of block.

### How can I fill a large area in Minecraft?
You can fill a large area in Minecraft using the fill command with specific coordinates for the starting and ending points of the area.

### Can I replace existing blocks with the fill command in Minecraft?
Yes, you can replace existing blocks with the fill command in Minecraft by specifying the `replace` option.

### How do I fill a specific shape in Minecraft?
You can fill a specific shape in Minecraft by carefully selecting the coordinates for the starting and ending points of the area you want to fill.

### Is there a limit to the size of the area I can fill in Minecraft?
In Minecraft, the size of the area you can fill with the fill command may be limited by the game settings or server restrictions.

### What happens if I use invalid block types with the fill command in Minecraft?
Using invalid block types with the fill command in Minecraft will result in an error and the command will not be executed.

### Can I undo a fill command in Minecraft?
Unfortunately, there is no built-in undo feature for the fill command in Minecraft. It's important to double-check your command before executing it to avoid unintended changes to your world.
## Applications of the fill command

- Creating walls and structures
- Clearing out a specific area
- Terraforming landscapes
- Building roads and paths
- Constructing buildings and houses
- Designing custom dungeons and mazes
- Setting up redstone contraptions
- Transforming biomes
- Creating custom maps and worlds