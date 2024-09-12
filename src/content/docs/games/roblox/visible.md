---
title: visible command in Roblox
description: Learn how to use the Roblox visible command to control the visibility of parts and models in your game.
---

The Roblox visible command allows developers to easily toggle the visibility of parts and models in their game. By using this command, you can show or hide specific elements to create dynamic gameplay experiences and interactive environments. This feature is commonly used to optimize performance, create immersive scenarios, and enhance the overall player experience in Roblox games.

## visible Syntax:
```console
ls [option] [parameter]
```
## Roblox visible Options:
| Option | Description                  |
|--------|------------------------------|
| -a     | Show all files and folders   |
| -l     | List in long format          |
| -h     | Human-readable sizes         |

## visible Parameters:
| Parameter | Description              |
|-----------|--------------------------|
| directory | Specify a directory path |
| file      | Specify a file name      |

:::caution
Exercise caution when using the ls command, as it can display sensitive information. Make sure you have the necessary permissions before listing files and folders.
:::

## How to use visible command:
### Show a model at a specific location
```console
visible 1234567 1 10 15
```
Makes the model with the ID 1234567 visible at coordinates (1, 10, 15).

### Hide a specific part of a model
```console
visible 1234567 false 1
```
Hides the part with the ID 1 of the model with the ID 1234567. 

### Make all models in a specific region visible
```console
visible 0 true 10
```
Makes all models within a 10-stud radius from the origin visible.

### Toggle visibility for a specific part
```console
visible 9876543 toggle 5
```
Toggles the visibility of part 5 of model 9876543.

### Show all models in the workspace
```console
visible all true
```
Makes all models in the workspace visible.

### Hide all models in the workspace
```console
visible all false
```
Hides all models currently present in the workspace.

### Make a specific model visible to a specific player
```console
visible 555 player(true, 1234)
```
Makes model 555 visible to player 1234.

### Hide all parts with a specific material
```console
visible all false material("Glass")
```
Hides all parts in the workspace that have the material "Glass".
:::tip
When using the visible command in Roblox, make sure to carefully follow the syntax and provide the necessary options to achieve the desired visibility settings for objects in your game.
:::

### How do I use visible in Roblox?
To use the visible command in Roblox, execute the following command:
```console
visible --option <value>
```

### What are the different options available with the visible command?
When using the visible command in Roblox, you can utilize various options such as setting visibility to true or false for specific game objects.
```console
visible --set true
```

### Can I make multiple objects visible at once with the visible command?
Yes, you can make multiple objects visible simultaneously by specifying them in the command.
```console
visible --object <object1> --object <object2>
```

### How can I hide an object using the visible command?
To hide an object in Roblox using the visible command, set the visibility option to false.
```console
visible --set false
```

### Is there a way to toggle visibility with the visible command?
Yes, you can toggle visibility of objects by using conditional statements in your command.
```console
visible --toggle
```

### Can I adjust the transparency of objects with the visible command?
No, the visible command in Roblox is specifically for controlling the visibility of objects and does not include transparency adjustments.
```console
visible --transparency <value>
```

### How do I check the current visibility status of an object with the visible command?
To check the current visibility status of an object in Roblox, use the appropriate option in the visible command.
```console
visible --check
```

### What happens if I use the visible command on a non-existent object?
If you use the visible command on an object that does not exist in the game, you will likely receive an error message indicating that the object was not found.
```console
visible --object <nonexistent_object>
```

## Applications of the visible command

- Creating interactive user interfaces
- Hiding and showing elements in a game world
- Implementing visibility toggles for certain game features
- Controlling the visibility of in-game objects during gameplay
- Managing the visibility of GUI elements for a cleaner user experience