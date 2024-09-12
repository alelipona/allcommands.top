---
title: say command in Minecraft
description: Learn how to use the Minecraft say command to send messages in the game. Find out how to communicate with other players and entities.
---

The Minecraft say command allows players to send messages within the game. This command can be used to communicate with other players and entities, making it a useful tool for collaboration and coordination. By using the say command, players can share information, give instructions, or simply chat with others in the Minecraft world. This feature enhances gameplay by facilitating communication and teamwork among players.

## say Syntax:
```console
/say [message]
```
## Minecraft say Options:
| Option | Description                      |
|--------|----------------------------------|
| message| Specifies the message to display.|

## say Parameters:
| Parameter | Description                                      |
|-----------|--------------------------------------------------|
| message   | The message that will be displayed in the chat.  |

:::caution
Be cautious with the content of the message to be displayed using the say command, as it will be visible to all players on the server.
:::
## How to use say command:
### Say Hello World
```console
say Hello World!
```
This command will make the player character say "Hello World!" in the Minecraft chat.

### Send a Message to All Players
```console
say Welcome to our Minecraft server!
```
Allows the player to send a welcome message to all players currently on the server using the say command.

### Say a Player's Name
```console
say @p Hello, {player_name}!
```
Sends a personalized message to the nearest player with the placeholder {player_name} replaced with the actual player's name.

### Say the Current Time in Minecraft
```console
say The current time is now: Minecraft Day {time}.
```
Displays the current in-game time in Minecraft using the say command.

### Announce an Event
```console
say Don't miss the upcoming event this Saturday!
```
Can be used to announce important events or dates to all players on the server.

### Coordinate Sharing
```console
say My current coordinates are X: {x_coordinate}, Y: {y_coordinate}, Z: {z_coordinate}.
```
Allows players to easily share their location coordinates with others in the game using the say command.

### Say a Server Rule
```console
say Remember to always respect other players and their builds!
```
Use the say command to remind players about server rules or guidelines.

### Role-playing Interaction
```console
say As the king, I hereby decree that all players must pay tribute!
```
Players can use the say command for role-playing scenarios or to enhance immersion in the game world.
:::tip
When using the say command in Minecraft, make sure to include the message that you want to display after the command. For example, to display "Hello, World!" in the game chat, you would use the command: `say Hello, World!`
:::

## say Command Troubleshooting Q&A:

### How do I use say in Minecraft?
To use the say command in Minecraft, execute the following command:
```console
say Hello, World!
```

### Can I use colors with the say command in Minecraft?
Yes, you can use color codes with the say command. For example, to display a message in red, use the following command:
```console
say §cThis message is in red!
```

### How do I broadcast a message to all players using the say command?
To broadcast a message to all players in the game using the say command, you can use the following command:
```console
say @a Hello everyone!
```

### Is it possible to whisper to a specific player with the say command in Minecraft?
Yes, you can whisper to a specific player using the say command. Simply mention the player's name in the command. For example:
```console
say @p Hey there, Player!
```

### How can I include special characters or symbols in the message with the say command?
To include special characters or symbols in the message with the say command, you can use the escape character (\) before the special character. For example, to display a smiley face :)
```console
say Hello, \:)
```

### Can I customize the format of the message displayed with the say command?
Yes, you can customize the format of the message by using JSON text components. For example, to display a colored and bold message, you can use the following command:
```console
say {"text":"Bold Red Text","color":"red","bold":true}
```

### How do I use variables or placeholders with the say command?
To use variables or placeholders in the message displayed with the say command, you can use command blocks or functions in Minecraft to dynamically insert values into the message.

### When using the say command, how can I display the message only to players within a certain radius?
You can specify the target selector parameters to display the message only to players within a certain radius. For example, to target players within a 10-block radius, you can use the following command:
```console
say @a[r=10] Hello players within 10 blocks!
```

## Applications of the say command

1. Broadcasting messages to all players in the game.
2. Providing instructions or information to players in a specific area.
3. Creating interactive elements in Minecraft maps.
4. Adding dialogue or story elements to Minecraft gameplay.
5. Setting up automated notifications for players.
6. Creating custom alerts or warnings for specific events.
7. Facilitating communication between players on a server.
8. Implementing commands for gameplay or role-playing scenarios.
9. Enhancing multiplayer interactions by sending messages to all players.