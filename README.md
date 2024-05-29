# AI-in-Browser
﻿Hey, thanks for downloading my repository.

﻿Here is step by step how to set this up:
﻿1 Open make.com
﻿2 Create a new scenario
﻿3 Press the three dots and import blueprint. Here you import blueprint.json from this repository.
﻿4 Create a new webhook
﻿5 Copy that webhook and put it in the background.js file
﻿6 Modify the OpenAI module im make.com to fit to your needs
﻿7 Activate the scenario and set the scheduling to "Immediately as data arrives."
﻿7 Go to chrome://extensions and press "load unpacked" and choose this folder
﻿8 Now you're ready to use the Chrome extension

﻿How to use the Chrome extension:
﻿1 mark the words you want to send to you make.com application. E.g. the contents of an email
﻿2 Right-click and press Generate response to "..."
﻿3 Wait a couple of seconds... And then a popup should pop up saaying "Response copied to clipboard!"

﻿Notes:
﻿If you want to modify the Make.com scenario so something else happens with the OpenAI response you can proceed in one of two ways:
﻿1 Either you have to add a router in make.com. One that sends the response to the webhook and the other can be whatever you want. E.g. Sending the response to yourself in an email.
﻿2 Or else, you can also have ChatGPT modify the background.js in a way so nothing is copied to the clipboard.
﻿If you don't do one of these things a very long string of text will be copied to your clipboard, and that can make your browser laggy.
﻿In the next update I will provide a second version of the background.js, so you don't have to do it yourself. (Thanks for your patience)

﻿If you find this Chrome extension useful, please follow me on LinkedIn: www.linkedin.com/in/oskar-gravesen-369262303
