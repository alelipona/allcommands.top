---
title: tellraw command in Minecraft
description: Learn how to use the tellraw command in Minecraft to send custom chat messages to players.
---

The tellraw command in Minecraft allows players to send customized chat messages to themselves or other players. By using JSON formatting, players can customize the color, style, and contents of the message, making it a powerful tool for game communication and user interface design. With the ability to include variables and clickable links, the tellraw command can enhance player experience and create dynamic interactions within the game.

## tellraw Syntax:
```console
tellraw [player] [message]
```
## Minecraft tellraw Options:
| Option   | Description                          |
|----------|--------------------------------------|
| player   | Specifies the target player or entity|
| message  | The text or JSON message to display  |

## tellraw Parameters:
| Parameter   | Description                                    |
|-------------|------------------------------------------------|
| player      | The player or entity to send the message to    |
| message     | The message to be displayed, can be plain text or JSON format |

:::caution
Be cautious while using JSON format for the message, incorrect JSON syntax can break the command.
:::
### Tellraw Example 1
```console
tellraw @a {"text":"Hello, world!"}
```
Sends a message "Hello, world!" to all players.

### Tellraw Example 2
```console
tellraw @a [{"text":"Greetings! "},{"text":"How are you today?","color":"green"}]
```
Displays a formatted message with colored text to all players.

### Tellraw Example 3
```console
tellraw @p {"text":"You won!","color":"gold","bold":true}
```
Notifies the nearest player that they have won with a bold and gold-colored message.

### Tellraw Example 4
```console
tellraw @a [{"text":"[WARNING] ","color":"red","bold":true},{"text":"Unauthorized access detected!","color":"red","bold":false}]
```
Alerts all players with a warning message about unauthorized access.

### Tellraw Example 5
```console
tellraw @a [{"text":"Server Restart","color":"dark_red","bold":true},{"text":" in 5 minutes. Please save your progress!"}]
```
Informs all players about an upcoming server restart in bold and dark red text.

### Tellraw Example 6
```console
tellraw @a {"text":"Join our Discord server for updates: ","extra":[{"text":"discord.gg/example","color":"blue","underlined":true, "clickEvent":{"action":"open_url","value":"https://discord.gg/example"}}]}
```
Prompts all players to join the Discord server by providing a clickable link.

### Tellraw Example 7
```console
tellraw @a [{"text":"[ANNOUNCEMENT] ","color":"gold"},{"text":"Visit our website for more information: ","color":"green","underlined":true,"clickEvent":{"action":"open_url","value":"http://example.com"} }]
```
Makes an announcement to all players with a clickable link to visit the website for more information.

### Tellraw Example 8
```console
tellraw @a [{"text":"Welcome, ","color":"yellow"},{"selector":"@p","color":"aqua"},{"text":" to the server!","color":"yellow"}]
```
Greets the nearest player in aqua color when they join the server.
:::tip
When using the tellraw command in Minecraft, make sure to properly format the JSON message you want to display to players. Incorrect formatting can lead to errors or unexpected results.
:::

### How do I use tellraw in Minecraft?
To use the tellraw command in Minecraft, execute the following command:
```console
tellraw @a {"text":"Hello, world!"}
```

### What does the tellraw command do in Minecraft?
The tellraw command in Minecraft is used to send a JSON message to players or a specific target within the game.

### How can I customize colors and formatting with tellraw?
You can customize colors and formatting in a tellraw message using JSON formatting. For example:
```console
tellraw @a {"text":"This is red text","color":"red"}
```

### Can I use the tellraw command to display clickable text in Minecraft?
Yes, you can use the tellraw command to display clickable text by specifying the click event using JSON formatting. Here's an example:
```console
tellraw @a {"text":"Click me!","clickEvent":{"action":"run_command","value":"/say Hello"}}
```

### Is it possible to display hover text with the tellraw command?
Yes, you can include hover text in a tellraw message by specifying the hover event using JSON formatting. Here's an example:
```console
tellraw @a {"text":"Hover over me!","hoverEvent":{"action":"show_text","value":"This is hover text"}}
```

### How do I target specific players with the tellraw command?
You can target specific players by specifying their usernames in the tellraw command. For example, to send a message to a player named "Steve":
```console
tellraw Steve {"text":"Hello, Steve!"}
```

### Can I include multiple JSON components in a single tellraw command?
Yes, you can include multiple JSON components in a single tellraw command to create more complex messages. Here's an example:
```console
tellraw @a [{"text":"Welcome, ","color":"gold"},{"text":"playername","color":"dark_blue"}]
```

### How do I include variables or dynamic content in a tellraw message?
You can include variables or dynamic content in a tellraw message by using score values or selector variables. Here's an example using a score value:
```console
tellraw @a {"text":"Your score is ","color":"blue","extra":[{"score":{"name":"@s","objective":"score"}}]}
```

## Applications of the tellraw command

1. Custom clickable text for players
2. Displaying messages with custom colors and formatting
3. Creating interactive menus or in-game instructions
4. Sending automated messages to players
5. Providing feedback or information to players in an interactive way