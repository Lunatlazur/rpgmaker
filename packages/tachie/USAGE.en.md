Usage
=====

 1. Place a character sprite file with the following format in the Picture folder.

        characterA1.png
        characterA2.png
        characterA3.png
        characterA4.png
        characterA5.png
        characterB1.png
        characterB2.png
        :
        :

 2. Create a character sprite definition file in the Data folder namedTachie.csv
    in the following format.

        characterA, CharactarA, smile, anger, disapointment, discontent
        characterB, CharacterB, smile, anger, disapointment, discontent
        :
        :

    - In the 1st column, specify the part obtained by removing the extension and
      the number at the end from the character sprite image file name placed in
      the Picture folder.
    - The 2nd column is the name of the character.  
      Use this name when specifying the character sprite file from the plugin
      command.
    - The 3rd and subsequent columns are the names of the expressions in the
      character sprite image file.  
      Use this name when specifying facial expressions from plugin commands.  
      Please name the expression difference after character image numbered in 2.  
      (Character image numbered in 1 is used when expression is not specified.)

    In the above example, characterA2.png is set to smile for character A,
    and characterA3.png is set to anger for character A.

 3. Input the character sprite display command to the plug-in command to display
    the character sprite. Refer to the following plug-in command list for details
    of plug-in commands.


Plug-in command list
====================

SHOW_TACHIE
-----------

    SHOW_TACHIE <character name> <expression> <position> <distance>
                <x> <y> <slide-x> <slide-y> <duration> <wait>

Show character sprite.


    <character name> string

The name of the character set in the character sprite definition file.


    <expression> string

Expression of character set in character sprite definition file.  
If unspecified, the expression of the character numbered 1 will be used.


    <position> { left | center | right }

Set X coordinate of character sprite according to position parameter.  
If unspecified, set to center position.


    <distance> { near | middle | far }

Set the magnification and Y coordinate of the character sprite to values
​​according to the distance parameter.  
If unspecified, set to middle distance.


    <x> x:%d

Add specified value to X coordinate of character sprite.


    <y> y:%d

Add specified number to Y coordinate of character sprite.


    <slide-x> slide-x:%d

Subtract the specified value from the X coordinate at the start of character
sprite display.


    <slide-y> slide-y:%d

Subtract the specified value from the Y coordinate at the start of character
sprite display.


    <duration> %dF

Specify the display time in frames.  
If unspecified, it will be displayed instantly.


    <wait> { wait | no-wait }

Wait until display is complete.  
If unspecified, set to no wait.  
If duration is unspecified, it should be ignored.


Example

    SHOW_TACHIE characterA near

Character A is instantly displayed in the center of the screen with expression
numbered in 1 at a near distance.


    SHOW_TACHIE characterA expression2 left x:5 y:-5 slide-x:20 60F wait

Character A is displayed with a expression numbered in 2 at the middle distance
for 60 frames, with sliding 20px from right to the position shifted 5px left and
5px upward from left side of screen.  
Wait until display is complete.


CHANGE_TACHIE
-------------

    CHANGE_TACHIE <character name before change> <character name after change>
                  <expression> <duration> <wait>

Change the character sprite.  
Mainly used to switch between facial expression differences and costume
differences.


    <character name before change> string

The name of the character set in the character sprite definition file.


    <character name after change> string

The name of the character set in the character sprite definition file.  
Use the same expression set as the current character if not specified.


    <expression> string

Expression of character set in character sprite definition file.  
If unspecified, set to expression numbered in 1.


    <duration> n%d

Specify the display time in frames.  
If unspecified, it will be displayed instantly.


    <wait> { wait | no-wait }

Wait until display is complete.  
If unspecified, set to no wait.  
If duration is unspecified, it should be ignored.


Example

    CHANGE_TACHIE characterA expression2 30F

Change character A to expression numbered in 2 for 30 frames.


    CHANGE_TACHIE characterA characterB 30F

Change character A to expression numbered in 1 of character B for 30 frames.


MOVE_TACHIE
-----------

    MOVE_TACHIE <character name> <position> <x> <y> <duration> <wait>

Move the character sprite.


    <character name> String

The name of the character set in the character sprite definition file


    <position> { left | middle | right }

Set X coordinate of character sprite according to position.  
If unspecified, set to center


    <x> x:%d

Add specified value to X coordinate of character sprite.


    <y> y:%d

Add specified number to Y coordinate of character sprite.


    <duration> %dF

Specify the display time in frames.  
If unspecified, it will be moved instantly.


    <wait> { wait | no-wait }

Wait until display is complete.  
If unspecified, set to no wait.  
If duration is unspecified, it should be ignored.


Example

    TACHIE_MOVE characterA right x:-15

Move character A to the position shifted 15px rightward on the right side
of the screen for 30 frames.


ERASE_TACHIE
------------

    ERASE_TACHIE <character name> <slide-x> <slide-y> <duration> <wait>

Erase character sprite.


    <character name> String

The name of the character set in the character sprite definition file


    <slide-x> slide-x:%d

Subtract the specified value from the X coordinate at the start of character
sprite display.


    <slide-y> slide-y:%d

Subtract the specified value from the Y coordinate at the start of character
sprite display.


    <duration> %dF

Specify the display time in frames.  
If unspecified, it will be moved instantly.


    <wait> { wait | no-wait }

Wait until display is complete.  
If unspecified, set to no wait.  
If duration is unspecified, it should be ignored.


Example

    ERASE_TACHIE characterA 30f

Delete characterA for 30 frames.


Q & A
=====

Q. character sprite is not displayed even though the plug-in command is correct.  
A. Even if the plugin is enabled, the plugin command will not be recognized
   unless the project is saved. Save the project and try again.

Q. I want to change character's expression.  
A. Use `CHANGE_TACHIE` command.

Q. I want to change the distance of the displayed character.  
A. Combine `ERASE_TACHIE` and `CHANGE_TACHIE`.

Q. Can't specify transparency.  
A. Unimplemented function. See upcoming implementation plans.

Q. I want to display multiple characters at the same distance and position.  
A. Unimplemented function. See upcoming implementation plans.

Q. I want to control the display order of characters.  
A. Unimplemented function. See upcoming implementation plans.


Future plans
============

- Transparency specification when displaying and moving  
  Transparency can be specified by SHOW_TACHIE / MOVE_TACHIE command.

- Display multiple characters at the same distance and same position  
  Multiple characters can be placed at the same distance and in the same
  position.

- Control of display order  
  Character display order can be explicitly specified.

- Supports preloading of images specified by plug-in commands  
  Preload images specified by plug-in commands at map transition.

- Set various values by plug-in parameters  
  The picture number etc. used in the character sprite plug-in can be
  specified by the plug-in parameter.
