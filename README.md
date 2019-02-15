# Memory game inspired by Simon Game #

## Hello and thank you for reading this page and give a try to this game.
## Because this is not a 100% copy of Simon Game , game flow will be a bit different!

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
Using  setInterval and setTimeOut as well as random numbers the game is pushing values into an array .That array is
compared with another array that keeps the values of the clicked buttons by the player.If the conditions are met
the player gets the score increased by one and the game continues.
I have added a reset button that is displayed only when the player gets the wrong combination,
this way the player doesn't have to wait until the timer ends.
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
 
 I have used border-radius property for divs to get the  quarter-circles .
 I have used user-select-none to get rid of the blue outer margins.
 Media queries used for repositioning for small devices.
 
 
 ### Javascript:
 Once the player clicks the "Click to play" button, a random number is generated(from 1 to 4) that is paired with the values of
 arr0. This takes a random button from the array and pushes it in another array.In the same time there is a setInterval that combined with 
 setTimeouts makes a sequence of random buttons played of a random number of times (from 1 - 10, depending of level of difficulty).
 The game adds a class to the buttons generated in arr1.Using a timeout the class is removed shortly.Then the values are pushed into arrbtn1
 At that time a timer starts and the player has 20 seconds to guess the correct combination.
 The player is expected to match the sequence **in the same order** .Once a button is clicked , the value is pushed into arrClick1.
 The two arrays are compared (elements,length,order), using **JSON.stringify**.
 If the player gets the correct combination,a "success" class is added to all game buttons and the game can continue.
 The player is expected to press on the "Click to play" button for a new sequence.
 If the player gets the wrong combination, the game displays a button that replaces the alphaThree div , where the game can be reset without 
 the need to wait until the countdown gets to zero.
 
 
 ### Testing:
 I have tested the responsivness using google developer tools the provided small devices: Galaxy S5,Pixel2,Pixe2 XL,Iphone 5/SE,Iphone 6/7/8,
 Iphone 6/7/8 plus, Iphone X,Ipad,Ipad Pro, as well as small and normal desktops.
 I have tested this game extensively until a score of 100 , I have tested the behaviour when giving wrong combinations, seems to work
 properly.
 **For testing purposes I have left  console log comments to be able to see the game generated sequences and the player generated sequences.**
 Good luck testing your short-term memory!
 
 ### I wish you all a good experience using this game!
  Deployed project: [GitHub Pages](https://flo0909.github.io/memory-game/)
  Source code: [GitHub](https://github.com/flo0909/memory-game) 