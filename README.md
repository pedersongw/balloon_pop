# balloon_pop
This is the first project I worked on incorporating all three basic languages (HTML, CSS, and Javascript) into a functioning webpage.

This project is based on an exercise from the book "Eloquent Javascript" by Marijn Haverbeke.

There are two divs in the body section of the HTML document. One contains the balloon emoji and is displayed on the page, the other contains an explosion emoji and has its display set to none in the CSS sheet.

An event listener waits for a keydown event. If the arrow up key is pressed the balloon increases in size by 10%. If the arrow down key is pressed the balloon decreases in size by 10%.

After a certain size increase the balloon div's display is set to none and the explosion div's display is set to block. The page must be refreshed to reset the balloon to its original size and to once again allow size increase or decrease. 