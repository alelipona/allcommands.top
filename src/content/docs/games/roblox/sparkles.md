---
title: sparkles command in Roblox
description: Use the sparkles command in Roblox to make objects shine and stand out in your game. Learn how to implement this feature to add visual appeal to your creations.
---

The sparkles command in Roblox allows you to add shimmering effects to objects in your game, making them visually appealing and stand out. Sparkles can be customized in terms of color, size, and duration to fit the aesthetic of your game. By using the sparkles command, you can enhance the overall look and feel of your Roblox creations, attracting players and making your game more engaging.

## sparkles Syntax:
```console
sparkles [toggle] [true/false]
```

## Roblox sparkles Options:
| Option    | Description                 |
|-----------|-----------------------------|
| toggle    | Toggles the sparkles effect on or off. |

## sparkles Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| true      | Enables the sparkles effect.              |
| false     | Disables the sparkles effect.             |

:::caution
Exercise caution when using the sparkles command, as it directly affects the visual appearance of the game environment.
:::

## How to use sparkles command:
### Add Sparkles Effect to a Part
```console
game.Workspace.Part:ActivateSparkles()
```
Activates sparkles effect on a specific part in the workspace.

### Change Sparkles Color
```console
game.Workspace.Part.Sparkles.Color = Color3.fromRGB(255, 0, 0)
```
Changes the color of the sparkles effect on a part to red.

### Adjust Sparkles Size
```console
game.Workspace.Part.Sparkles.Size = 10
```
Adjusts the size of the sparkles effect on a part to a value of 10.

### Remove Sparkles Effect from a Part
```console
game.Workspace.Part:DeactivateSparkles()
```
Deactivates and removes the sparkles effect from a specific part in the workspace.

### Customize Sparkles Transparency
```console
game.Workspace.Part.Sparkles.Transparency = 0.5
```
Sets the transparency level of the sparkles effect on a part to 0.5.

### Modify Sparkles Frequency
```console
game.Workspace.Part.Sparkles.Frequency = 2
```
Changes the frequency of the sparkles effect on a part to occur every 2 seconds.

### Rotate Sparkles Effect
```console
game.Workspace.Part.Sparkles.Rotation = Vector3.new(0, 90, 0)
```
Rotates the sparkles effect on a part by 90 degrees around the Y-axis.

### Control Sparkles Speed
```console
game.Workspace.Part.Sparkles.Speed = 15
```
Adjusts the speed of the sparkles effect on a part to 15 units per second.
:::tip
Remember to experiment with different options and values to customize the sparkles effect to your liking.
:::

### How do I use sparkles in Roblox?
To use the sparkles command in Roblox, execute the following command:
```console
sparkles --enable
```

### How do I enable sparkles with specific color in Roblox?
To enable sparkles with a specific color in Roblox, use the following command:
```console
sparkles --color blue
```

### How can I adjust the size of sparkles in Roblox?
To adjust the size of sparkles in Roblox, you can use the following command:
```console
sparkles --size large
```

### Can I make sparkles in Roblox move in a specific pattern?
Yes, you can make sparkles move in a specific pattern by using the following command:
```console
sparkles --movement zigzag
```

### How can I control the speed of sparkles in Roblox?
To control the speed of sparkles in Roblox, you can use the following command:
```console
sparkles --speed 2x
```

### Is it possible to make sparkles in Roblox appear randomly?
Yes, you can make sparkles appear randomly by using the following command:
```console
sparkles --pattern random
```

### How do I customize the density of sparkles in Roblox?
To customize the density of sparkles in Roblox, you can use the following command:
```console
sparkles --density high
```

### Can I disable sparkles in Roblox if needed?
Yes, you can disable sparkles in Roblox by using the following command:
```console
sparkles --disable
```

## Applications of the sparkles command
- Adding a sparkling effect to a player's avatar or object
- Creating a magical or whimsical atmosphere in a game
- Enhancing visual appeal during special events or celebrations