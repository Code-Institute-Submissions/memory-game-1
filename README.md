# Memory game inspired by Simon Game #

## Hello and thank you for reading this page and give a try to this game.

From the three projects I have chosen to build a game inspired by Simon Game.
First I had to decide what do i need to make this project work.

### From looking at an online version of the game I needed first to get done the following:

I needed four buttons programmed to change colours in a random sequence and record the sequence and 
a way for the player to match the sequence.I also decided to make the game to
play one sequence at a time and wait for player input and after that to validate the result.
The player could after that play the next sequence.This I felt gives the player some time to prepare for 
the next sequence when the game gets really hard and also to take a short break anytime.
For the JS code, I've decided to use vanilla **Javascript** .I needed a way to make the buttons to change colors
and to record it. I've chosen to use **CSS** classes for that.
Using  setInterval and SetTimeOut as well as random numbers the game is pushing values into an array .That array is
compared with another array that keeps the values of the clicked buttons by the player.If the conditions are met
the player gets the score increased by one and the game continues.
Next, please read about the game flow:

### HTML:
 I have decided to use Bootstrap for responsive design although there is the grid option available 
 but i am more familiar with the Bootstrap.
 I have created three divs that would collapse for smaller devices, one being the
 main div containing the circle divided in four that represents the playable area.
 The second div would be a display area for a main start button and two divs to display
 a timer and player's score.
 The third main div is a footer .
 
 ### CSS:
 
 
 ### Javascript:
 Once the player clicks the "Click to play" button, a random number is generated(from 1 to 4) that is paired with the values of
 arr0. This takes a random button from the array and pushes it in another array.In the same time there is a setInterval that combined with 
 setTimeouts makes a sequence of random buttons played of a random number of times (from 1 - 10, depending of level of difficulty)
 