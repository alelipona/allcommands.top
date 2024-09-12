---
title: setidletimeout Minecraft command
description: Learn how to use the setidletimeout command in Minecraft to adjust the timeout duration for AFK players. 
---

The setidletimeout command in Minecraft allows players to change the timeout duration for players who are AFK. By setting a specific time limit, players can adjust when idle players will be automatically kicked from the server. This command can help server admins manage player activity and ensure that players are actively participating in the game. It is a useful tool for maintaining server performance and creating a more engaging multiplayer experience.

## setidletimeout Syntax:
```console
setidletimeout <minutes>
```

## setidletimeout Options:
| Option    | Description                           |
|-----------|---------------------------------------|
| <minutes> | The number of minutes of inactivity before a player is kicked from the server. |

:::caution
It is important to set a reasonable idle timeout value to avoid players being kicked from the server unexpectedly.
:::

## Parameters:
| Parameter | Description                           |
|-----------|---------------------------------------|
| <minutes> | The number of minutes of inactivity before a player is kicked from the server. |
## setidletimeout Command Usage Examples:
### Set Idle Timeout for Players to 10 Minutes
```console
setidletimeout 10
```
Sets the idle timeout for players to 10 minutes.

### Set Idle Timeout for Players to 30 Minutes
```console
setidletimeout 30
```
Sets the idle timeout for players to 30 minutes.

### Disable Idle Timeout for Players
```console
setidletimeout 0
```
Disables the idle timeout feature for players.

### Set Idle Timeout for Players to 5 Minutes
```console
setidletimeout 5
```
Sets the idle timeout for players to 5 minutes.

### Set Idle Timeout for Players to 15 Minutes
```console
setidletimeout 15
```
Sets the idle timeout for players to 15 minutes.
:::tip
Remember that the setidletimeout command in Minecraft is used to manage the idle timeout settings in a server. This setting dictates how long a player can be idle before being automatically kicked from the server.
:::

### How do I use setidletimeout in Minecraft?
To use the setidletimeout command in console, execute the following command:
```console
setidletimeout --timeout 600
```

### Can I disable idle timeout using setidletimeout?
Yes, you can disable idle timeout by setting the timeout value to 0:
```console
setidletimeout --timeout 0
```

### How can I check the current idle timeout setting?
You can check the current idle timeout setting by using the setidletimeout command without any additional parameters:
```console
setidletimeout
```

### Can I change the idle timeout duration using setidletimeout?
Yes, you can change the idle timeout duration by specifying a new value in seconds:
```console
setidletimeout --timeout 900
```

### How to set a custom kick message for idle players?
To set a custom kick message for idle players, include the message text after the timeout value:
```console
setidletimeout --timeout 300 --message "You were kicked for being idle too long."
```

### Is there a limit to how long the idle timeout can be set?
The idle timeout can be set to a maximum of 2147483647 seconds (or around 68 years).
```console
setidletimeout --timeout 2147483647
```

### What happens if a player performs an action before the idle timeout triggers?
If a player performs any action, such as moving or chatting, before the idle timeout triggers, the timer resets, and they will not be kicked for being idle.
```console
setidletimeout --timeout 120
```
## Applications of the setidletimeout command

- Adjusting the time limit before a player is kicked for being idle.