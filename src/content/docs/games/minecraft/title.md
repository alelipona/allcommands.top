---
title: title Minecraft command
description: Learn how to use the title command in Minecraft to display text on the screen of players. Customize the size, color, and position of the text.
---

The title command in Minecraft allows players to display custom text on their screens. This versatile command can be used to create notifications, alerts, or messages for players. With the ability to customize the size, color, and position of the text, the title command offers a range of options for communicating with players in-game. By mastering the title command, players can enhance their gameplay experience and create unique experiences for themselves and others in the Minecraft world.
## title Syntax:
```console
title <selector> <title_text>
```

## title Options:
| Option     | Description                     |
|------------|---------------------------------|
| selector   | Specifies the target to give the title to. This can be a player name, target selector, or a combination of both. |
| title_text | The text to display as the title on the player's screen. |

:::caution
Make sure to specify a valid target selector for the selector parameter to ensure correct execution of the command.
:::

## Parameters:
| Parameter   | Description                                         |
|-------------|-----------------------------------------------------|
| selector    | Specifies the target to give the title to.          |
| title_text  | The text to display as the title on the player's screen. |
## title Command Usage Examples:
### Displaying a Custom Title
```console
title @a title {"text":"Welcome to Minecraft","color":"green"}
```
Display a custom title with the text "Welcome to Minecraft" in green to all players.

### Displaying a Subtitle
```console
title @a subtitle {"text":"Enjoy your adventure!","color":"gold"}
```
Show a subtitle with the text "Enjoy your adventure!" in gold to all players.

### Clearing Titles
```console
title @a clear
```
Clear all titles for all players on the screen.

### Displaying Title to a Single Player
```console
title @a[name="Steve"] title {"text":"Your Quest Begins Now","color":"blue"}
```
Show a specific player named "Steve" the title "Your Quest Begins Now" in blue.

### Fading Title Out
```console
title @a times 5 50 5
```
Adjust the times for titles to fade out for all players over 5 ticks, stay on screen for 50 ticks, and then fade out over 5 ticks.
:::tip
When using the title command in Minecraft, make sure to carefully follow the syntax and parameters to ensure the desired outcome. Remember that titles can be used to display messages and information on players' screens in the game.
:::

### How do I use title in Minecraft?
To use the title command in console, execute the following command:
```console
title @a title {"text":"Welcome to Minecraft","color":"blue"}
```

### How can I display a subtitle in Minecraft?
To display a subtitle on players' screens, use the following command:
```console
title @a subtitle {"text":"Explore the world!","color":"green"}
```

### How do I clear a title in Minecraft?
To clear a title from players' screens, you can use the following command:
```console
title @a clear
```

### How can I set the fade-in, stay, and fade-out times for a title in Minecraft?
To set the fade-in, stay, and fade-out times for a title, use the following command format:
```console
title @a times 10 40 10
```

### How do I display a title only to a specific player in Minecraft?
To display a title only to a specific player, use their player name or selector in the command:
```console
title @p title {"text":"You are the chosen one!","color":"gold"}
```

### How can I display a title with different formatting in Minecraft?
To display a title with different formatting, use text properties like "bold," "italic," or "underlined" in the command:
```console
title @a title {"text":"Bold Title","bold":true}
```

### How do I center a title on the screen in Minecraft?
To center a title on the screen, use the following command:
```console
title @a title {"text":"Centered Title","color":"red","align":"center"}
```
## Applications of the title command

- Displaying titles on the screen for important messages
- Creating custom titles for players in the game
- Providing information or instructions to players in a visually appealing way