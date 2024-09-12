---
title: structure Minecraft Command Guide
description: Everything you need to know about the Minecraft structure command. Learn how to use this powerful tool to create, load, and save structures in your world. 
---

The structure command in Minecraft allows players to manipulate and create structures within the game. This powerful command can be used to spawn structures, save them for later use, or even load structures from external files. By using the structure command, players can quickly and easily build complex structures, import custom creations, and streamline building processes. Whether you're looking to add some flair to your world or save time on repetitive building tasks, the structure command is a valuable tool for any Minecraft player.
## structure Syntax:
```console
/structure <save|load|corner> [structureName] [pos1] [pos2] <include_entities|exclude_entities>
```
## Options:
| Option             | Description                           |
|--------------------|---------------------------------------|
| save               | Save a structure                      |
| load               | Load a structure                      |
| corner             | Set the corners of the structure      |
| include_entities   | Include entities when saving a structure      |
| exclude_entities   | Exclude entities when saving a structure      |

## Parameters:
| Parameter     | Description                           |
|---------------|---------------------------------------|
| structureName | The name of the structure to save or load |
| pos1          | Position of the first corner of the structure |
| pos2          | Position of the second corner of the structure |

## structure Command Samples:
### Create a Small House Structure
```console
/structure save house ~ ~ ~10 ~10 ~10 ~10
```
Saves a small house structure with dimensions of 10x10x10 starting from the current position.

### Load a Saved Structure
```console
/structure load house ~ ~ ~
```
Loads the saved house structure at the current position in the world.

### Rotate a Structure
```console
/structure rotate house 90
```
Rotates the loaded house structure by 90 degrees.

### Mirror a Structure
```console
/structure mirror house x
```
Mirrors the loaded house structure along the x-axis.

### Move a Structure
```console
/structure move house ~ ~10 ~
```
Moves the loaded house structure 10 blocks up in the world.

### Clear a Structure
```console
/structure clear house ~10 ~ ~10 ~ ~10
```
Clears the area of the house structure in a region of 10 blocks around the starting point.

### List Saved Structures
```console
/structure list
```
Displays a list of all saved structures that can be loaded in the world.
:::tip
When using the structure command in Minecraft, make sure to carefully specify all the necessary options and values to ensure the desired outcome. Testing commands in a controlled environment before applying them in your main game or world is also recommended to avoid unintended consequences.
:::

## structure FAQ:
### How do I use structure in Minecraft?
To use the structure command in Minecraft, execute the following command:
```console
structure --option <value>
```

### What are some common options for the structure command in Minecraft?
Some common options for the structure command in Minecraft include specifying the position, size, rotation, and integrity of the structure to be generated.

### Can I save custom structures using the structure command in Minecraft?
Yes, you can save custom structures using the structure command in Minecraft. You can save and load structures using structure blocks or by exporting them to files.

### How can I paste a saved structure into my Minecraft world using the structure command?
You can paste a saved structure into your Minecraft world using the structure command by specifying the structure name and the coordinates where you want to paste it.

### Is it possible to adjust the positioning of a structure when pasting it in Minecraft using the structure command?
Yes, you can adjust the positioning of a structure when pasting it in Minecraft using the structure command by specifying offset values for the x, y, and z axes.

### How can I remove a structure from my Minecraft world using the structure command?
To remove a structure from your Minecraft world using the structure command, you can use the appropriate command with the necessary parameters such as the structure name or specific coordinates.
## Applications of the structure command
- Creating custom buildings
- Copying and pasting structures in the world
- Moving structures within the world
- Saving and sharing complex creations
- Generating templates for future use