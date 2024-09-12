---
title: fire Roblox command
description: Learn how to use the fire command in Roblox to create dynamic elements in your game.
---

The fire command in Roblox allows developers to create dynamic elements such as fire, smoke, and explosions in their games. By using this command, you can add realism and excitement to your gameplay experience. Experiment with different parameters and settings to customize the appearance and behavior of the fire effect. With a few simple lines of code, you can bring your game to life with the fire command in Roblox.

## fire Syntax:
```console
fire [player] [location]
```
## fire Options:
| Option | Description               |
|--------|---------------------------|
| -f     | Force the fire to start   |

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| player    | The player to set on fire              |
| location  | The location where the fire should start |

:::caution
Use this command carefully as it sets a player on fire in the specified location. Be cautious to avoid causing harm or discomfort to the player.
:::
## fire Command Usage Examples:
### Setting a Fire at a Specific Location
```console
fire 10, 20, 30
```
Places a fire at the coordinates (10, 20, 30) in the Roblox world.

### Creating a Large Blaze
```console
fire 0, 0, 0, 20
```
Generates a fire at the origin (0, 0, 0) with a large scale of 20 in Roblox.

### Triggering Fire at the Player's Location
```console
fire @me
```
Initiates a fire at the current player's position in the Roblox game.

### Igniting Multiple Fires
```console
fire 5, 5, 5; fire 10, 10, 10
```
Starts fires at two different locations (5, 5, 5) and (10, 10, 10) in the Roblox environment.

### Extinguishing a Fire
```console
fire 15, 15, 15, 0
```
Puts out the fire at the coordinates (15, 15, 15) by setting its scale to 0 in Roblox.
:::tip
Remember to always consult the Roblox documentation for the most up-to-date information on using console commands.
:::

### How do I use fire in Roblox?
To use the fire command in console, execute the following command:
```console
fire --option <value>
```

### What are the available options for the fire command?
To view all the available options for the fire command, use the following command:
```console
fire --help
```

### Can I adjust the intensity of the fire in Roblox?
Yes, you can adjust the intensity of the fire by specifying the intensity value in the command. Here's an example:
```console
fire --intensity 5
```

### How can I create a large fire in Roblox using the fire command?
To create a large fire in Roblox, you can set the size parameter in the fire command. For example:
```console
fire --size large
```

### Is it possible to specify the color of the fire in Roblox?
Yes, you can specify the color of the fire by providing the color value in the command. Here's how you can do it:
```console
fire --color red
```

### Can I make the fire spread dynamically in Roblox?
Yes, you can make the fire spread dynamically by using the spread option in the fire command. Here's an example:
```console
fire --spread true
```

### How do I extinguish a fire created using the fire command in Roblox?
To extinguish a fire created with the fire command, you can use the following command:
```console
fire --extinguish
```

### What is the default duration for a fire created in Roblox?
By default, the duration of a fire in Roblox is set to a standard time period. However, you can adjust the duration by specifying the duration value in the command. Here's an example:
```console
fire --duration 10
```
## Applications of the fire command

- Role-playing games
- Simulated disaster scenarios
- Creating dynamic and exciting gameplay
- Enhancing visual effects in a game
- Implementing fire-related challenges for players