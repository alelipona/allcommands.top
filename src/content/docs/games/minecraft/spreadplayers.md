---
title: spreadplayers command in Minecraft
description: The Minecraft spreadplayers command allows you to spread players around a specified area randomly. Learn how to use this command effectively.
---

The spreadplayers command in Minecraft is used to spread players randomly within a specified area. This command can be helpful for creating randomized starting positions for players in a PvP map or for dispersing players in a mini-game. By specifying a center point, spread distance, and max range, you can control the spread of players to ensure a fair and balanced distribution. Additionally, you can choose to include specific entities or players to be spread or exclude certain areas from the spread. Mastering the spreadplayers command can add a new level of excitement and challenge to your Minecraft gameplay.
## spreadplayers Syntax:
```console
spreadplayers <center> <spreadDistance> <maxRange> <respectTeams> <player>...
```

## Minecraft spreadplayers Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| center | x and z coordinates for the center of the spread |
| spreadDistance | minimum distance between each spread player |
| maxRange | maximum distance from the center for spread players |
| respectTeams | whether to keep players on the same team together |
| player | one or more player selectors to spread |

## spreadplayers Parameters:
| Parameter       | Description                                      |
|-----------------|--------------------------------------------------|
| center          | x and z coordinates for the center of the spread |
| spreadDistance  | minimum distance between each spread player      |
| maxRange        | maximum distance from the center for spread players |
| respectTeams    | true to keep players on the same team together, false otherwise |
| player          | one or more player selectors to spread            |

:::caution
Use caution when using the `spreadplayers` command, as it can potentially spread players too far or too close together, resulting in unintended gameplay consequences.
:::
## How to use spreadplayers command:
### Spread Players in a Specified Area
```console
spreadplayers 100 50 0 10 true @a
```
This command spreads all players within a 10-block radius of the coordinates (100, 50, 0).

### Randomly Spread Players in a Larger Area
```console
spreadplayers 0 0 0 50 false @a
```
Executes a command that randomly spreads all players within a 50-block radius of the coordinates (0, 0, 0).

### Spread Players in a Circle Formation
```console
spreadplayers -200 200 0 5 true @a[c=10]
```
This command spreads a group of 10 players in a circle formation within a 5-block radius of the coordinates (-200, 200, 0).

### Spread Players in a Random Manner on Solid Ground
```console
spreadplayers 150 75 0 20 true @a[x=-100,dx=200,z=-100,dz=200]
```
Randomly disperses players horizontally and vertically within a 20-block radius of the coordinates (150, 75, 0), making sure they are placed only on solid ground.

### Spread Players and Keep Them Within Certain Boundaries
```console
spreadplayers 0 0 0 15 true @a[x=-50,dx=100,z=-50,dz=100]
```
This command spreads all players within a 15-block radius of the coordinates (0, 0, 0), but ensures they stay within the boundaries of x=-50 to 50 and z=-50 to 50.

### Spread Players and Ignore Teams
```console
spreadplayers 100 100 0 10 true @a[tag=!teamA,tag=!teamB]
```
Executes a command that spreads all players not belonging to "teamA" or "teamB" within a 10-block radius of the coordinates (100, 100, 0).

### Spread Players Among Non-Player Entities
```console
spreadplayers 50 50 0 5 true @e[type=!player]
```
Randomly disperses all non-player entities in a 5-block radius of the coordinates (50, 50, 0).

### Spread Players Based on Health Condition
```console
spreadplayers 0 0 0 20 true @a[h=10]
```
This command spreads all players with exactly 10 health points within a 20-block radius of the coordinates (0, 0, 0).
:::tip
When using the spreadplayers command in Minecraft, make sure to carefully set the coordinates, spread distance, and max range to avoid unexpected outcomes. Testing the command in a safe environment before implementing it in your actual gameplay can help prevent any unwanted consequences.
:::

### How do I use spreadplayers in Minecraft?
To use the spreadplayers command in Minecraft, execute the following command:
```console
spreadplayers <x> <z> <spreadDistance> <maxRange> <respectTeams> <player>
```

### What are the parameters for the spreadplayers command?
The parameters for the spreadplayers command in Minecraft are:
- `<x>`: X-coordinate
- `<z>`: Z-coordinate
- `<spreadDistance>`: Spread distance 
- `<maxRange>`: Maximum range
- `<respectTeams>`: Boolean value to respect teams
- `<players>`: Target player

### How can I spread players in a specific area using spreadplayers?
To spread players in a specific area, you can specify the range using coordinates for the X and Z axes. For example:
```console
spreadplayers 100 200 10 50 false @a
```

### How can I ensure players are spread out evenly using spreadplayers?
To ensure players are spread out evenly, adjust the spread distance parameter. A smaller spread distance will result in players being spread closer together, while a larger spread distance will increase the distance between players.

### Can I use the spreadplayers command to randomly position players in Minecraft?
Yes, you can use the spreadplayers command with appropriate parameters to randomly position players within a specified range in Minecraft.

### How does the spreadplayers command handle player collision?
The spreadplayers command will attempt to spread players without causing collisions. If players are too close together, the command will adjust their positions to prevent overlap.

### How do I target specific players using the spreadplayers command?
To target specific players, you can use player selectors such as @p (nearest player), @a (all players), @r (random player), or @e (all entities). Include the selector as the last parameter in the spreadplayers command.

### Can I use spreadplayers to spread players within a certain team in Minecraft?
Yes, you can use the `spreadplayers` command with the `respectTeams` parameter set to `true` to spread players within a specific team. Just ensure that the team settings are properly configured before executing the command.

## Applications of the spreadplayers command

- Setting up players in different locations for a mini-game
- Creating randomized starting locations for players in a multiplayer server
- Spreading out players evenly in a designated area for an event or competition
- Generating a scattered player spawn system for a custom map or adventure
- Distributing players to various outposts or bases in a large game world