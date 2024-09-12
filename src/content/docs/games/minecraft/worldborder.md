---
title: worldborder command in Minecraft
description: Learn how to use the worldborder command in Minecraft to set and modify the world border size.
---

The worldborder command in Minecraft allows players to control the size and shape of the world border. This command can be used to set the world border size, modify its diameter, or even teleport players who exceed the border limits. By using the worldborder command, players can create custom boundaries for their Minecraft worlds, adding a unique challenge or expanding the playable area. Mastering the worldborder command can enhance gameplay and create new opportunities for exploration and creativity in the game. 

## worldborder Syntax:
```console
worldborder add <distance> [time]
worldborder set <distance> [time]
worldborder center <x> <z>
worldborder damage <buffer> <amount>
worldborder get
worldborder warning <distance> [time]
```

## Minecraft worldborder Options:
| Option    | Description                                   |
|-----------|-----------------------------------------------|
| add       | Adds distance to the current world border.    |
| set       | Sets the world border to a specific distance. |
| center    | Sets the center of the world border.          |
| damage    | Sets the damage amount and buffer near the border. |
| get       | Retrieves the current world border information. |
| warning   | Sets the warning distance and time.           |

## worldborder Parameters:
| Parameter | Description                                 |
|-----------|---------------------------------------------|
| distance  | Specifies the distance for the world border. |
| time      | Specifies the transition time in seconds.    |
| x         | Specifies the x-coordinate of the center.    |
| z         | Specifies the z-coordinate of the center.    |
| buffer    | Specifies the buffer distance from the border. |
| amount    | Specifies the damage amount near the border. | 

:::caution
Exercise caution when using the worldborder command, as setting the border too small or too large can have unintended consequences on gameplay and player experience. Make sure to carefully consider the parameters and options to avoid potential issues with your world's border.
:::
### Set the World Border to 100 Blocks
```console
worldborder set 100
```
Sets the world border to a radius of 100 blocks.

### Generate a Square World Border of 500 Blocks
```console
worldborder set 500 500
```
Creates a square world border with a width and length of 500 blocks.

### Expand the World Border by 50 Blocks
```console
worldborder add 50
```
Expands the world border by 50 blocks in all directions.

### Shrink the World Border by 20 Blocks
```console
worldborder set 80
```
Reduces the world border size to 80 blocks, effectively shrinking it by 20 blocks.

### Get Information About the World Border
```console
worldborder get
```
Retrieves information about the current world border size, center, and warning time.

### Set Warning Time for World Border to 30 Seconds
```console
worldborder warning time 30
```
Sets the warning time for players approaching the world border to 30 seconds.

### Set Warning Distance for World Border to 10 Blocks
```console
worldborder warning distance 10
```
Adjusts the warning distance for players approaching the world border to 10 blocks.

### Damage Players Outside the World Border
```console
worldborder damage amount 2
```
Applies a damage amount of 2 hearts per second to players outside the world border.
:::tip
When using the worldborder command in Minecraft, make sure to always follow the correct syntax and provide the necessary options and values to avoid any errors or unintended results.
:::

### How do I set the worldborder size in Minecraft?
To set the worldborder size in Minecraft, use the following command:
```console
worldborder set <size>
```

### How do I change the center of the worldborder in Minecraft?
To change the center of the worldborder in Minecraft, use the following command:
```console
worldborder center <x> <z>
```

### How do I add or remove worldborder damage in Minecraft?
To add or remove worldborder damage in Minecraft, use the following command:
```console
worldborder damage amount <amount>
```

### How do I set the time before worldborder damage starts in Minecraft?
To set the time before worldborder damage starts in Minecraft, use the following command:
```console
worldborder damage buffer <time>
```

### How do I get information about the current worldborder in Minecraft?
To get information about the current worldborder in Minecraft, use the following command:
```console
worldborder get
```

### How do I increase or decrease the worldborder size gradually in Minecraft?
To increase or decrease the worldborder size gradually in Minecraft, use the following command:
```console
worldborder add <blocks to add> <time in seconds>
```

### How do I teleport a player to the edge of the worldborder in Minecraft?
To teleport a player to the edge of the worldborder in Minecraft, use the following command:
```console
worldborder knockback <player> <distance>
```

### How do I set warning time for the worldborder in Minecraft?
To set warning time for the worldborder in Minecraft, use the following command:
```console
worldborder warning time <time>
```

### How do I set the warning distance for the worldborder in Minecraft?
To set the warning distance for the worldborder in Minecraft, use the following command:
```console
worldborder warning distance <distance>
```

## Applications of the worldborder command

- Setting a world border within a Minecraft world
- Expanding or reducing the size of the world border
- Changing the damage behavior when players or entities touch the world border
- Displaying the current world border size and status on the screen