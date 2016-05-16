# Metrimart

This is a project for RJMetrics as a step in their hiring process.

The goal was to recreate an e-commerce site from two images (desktop and mobile versions) that will display appropriately in desktop and mobile environments.  The necessary resources were provided including: images/icons, color hex codes, and font family info.  I built the html/css/javascript and I also used the jQuery library.

# Here was my thought process on building the site:

# File Organization:
I separated html files, images, css files, and javascript files into folders that would logically represent them.  This makes it significantly easier to find a file you are looking for.

# HTML:
I used as many meaningful html tags as I could.  So the top portion using a "<header>" tag, the content of the page using an '<article>' tag, additional content using '<aside>' tag, and the bottom portion using a '<footer>' tag.  I continued this semantic approach by giving every '<div>' tag a meaningful id or class attribute.  The rest of the content I used the appropriate tag for it's representation. I included title and alt attributes on '<a>' and '<img>' tags to make the site more accessible to e-readers.

# CSS:
I always separate css from the html using <link> tags in the '<head>' tag.  This keeps the both the html and css uncluttered. I ordered my styles in the same way that the html is ordered.  I also used comments to organize styles in bulk sections.  For instance, the html reads '<header>' then '<article>' then '<aside>' then '<footer>'. So the css is divided up by those tag names which makes it significantly easier to follow and read. 

I also made sure the styles would not interfere with the structure of the site.  An example is the header containing the search bar and icons needed to display in the correct order but centering the search bar.  This required the use of floats where it is possible to rearrange the html to acheieve the desired result.  I chose an alternate route using absolute positioning with the floats in order to keep the html as it is written.

In order to make the site responsive I used percent based widths and media queries to style for mobile.  I used a separate stylesheet for mobile overrides and additions.  I chose a single break point of 1000px width since the site started to look scrunched at any smaller screen size. I designed the mobile version with the smallest screen size in mind using chrome's device mode from the developer console.

# Javascript:
As with css, I always separate javascript from the html using <script> tags.  There were several small changes in content between the mobile and desktop versions. I used javascript to detect the screen width and change the html accordingly. Since, additional product images were given I used those to create a very simple slideshow.  I wanted to keep the site looking exactly like the provided screenshot so I opted for not including any thumbnails or extra icons.  It just cycles through the photos as they are clicked.

I use jQuery only because it makes traversing the DOM extremely easy.  I could have used '.getElementByID' or '.querySelectorAll()' but I really like jQuerys selector syntax: '$(selector)'.  There are also a ton of uses for jQuery that could become extremely useful later on if the project were to continue. (i.e. jQuery UI widgets)
