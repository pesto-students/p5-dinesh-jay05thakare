
# Week 1 - HTML Assignment

## Exercise 1.1
**When a user enters an URL in the browser, how does the browser fetch the desired result? Explain this with the below in mind and Demonstrate this by drawing a diagram for the same.**

### Explanation

<details>
    <summary>Title 1</summary>
    <p>Content 1 Content 1 Content 1 Content 1 Content 1</p>
</details>

Internet is Global system of interconnected computer networks that uses the 
Internet Protocol suite(TCP/IP) to communicate between networks and devices.

With web we dont just mean websites but any interaction with a computer called
server and you are communicating with that server and get data present on the internet 

Components:
1. User Interface
2. Rendering engine (HTML CSS -> Webpage | renders img, video, html, css, svg, etc | chrome & opera use RE blink, firefox use gecko | gets data from the network)
3. Browser engine (Server <-> Rendering engine)
4. Network
5. JS interpreter (chrome-V8, firefox-spidermonkey)
6. Data storage (cookies and local storage)

Rendering:
RE reads HTML and constructs a dom content tree made up of dom nodes. Nodes can be images, text blocks, buttons, lists, etc
With the styling components, a new rendered tree is formed and it goes through a layout process where 
each node is positioned on the screen with coordinates. The rendered tree is then traversed
with each node painted using the UI backend layer. When the parsing process is finished 
the browser will mark the document as interactive and allow us(the user) to interact with the nodes on the page
1. Process HTML markup and build a DOM tree
2. Process CSS markup and build the CSSOM tree
3. Combine DOM and CSSOM into a render tree
4. Run layout on the render tree to compute the geometry of each node
5. Paint the individual nodes on the screen.

Let's take the most common scenario that you are visiting a web page like 
youtube.com. So we open up our browser and enter https://www.youtube.com. 
Now on the backend side, any website needs to be stored somewhere from where 
anyone could access them with some URL links. So the data center servers works 
as a storage centers. Now when ever you request youtube.com, server returns 
some UI files (HTML, CSS, JS) and some client side processing files (JS) to your browser. Because 
browser in the end is just an interpreter which gets some source code and it 
can display it on the screen.
But now the question is how does the servers know what data or web page are we
requesting. So every webpage has its address, more commonly known as IP address. 
This IP address points to a location in the server. So to get this address, our 
browser contacts a DNS(Domain Name System) server. DNS is like a huge dictionary 
and has key-value pairs. Key as the domain name and value as an IP address. On 
request from the browser, this IP address is returned to the browser.
Now the browser goes to server with this IP address via our router and TCP/IP 
(Trasmission Control Protocol/Internet Protocol). And how so ever the website is 
developed, processes takes place in server side and the result is returned to the 
browser. If the website has dynamic approaches, then an end-to-end encrypted connection is formed between 
client side and server side with https(Hypertext Transfer Protocol Secure).

Lets take a deeper look into involved techs and what source code does a broswer gets from a server.
Browser gets a combination of HTML CSS and JS. These are the three technologies 
involved into getting the screen what you see. HTML (Hypertext Markup Language) and 
it gives a web page a skeleton and is written in a standardized tags representing different
components of a website. Like header, footer, images, sections, etc. Css 
(Cascading Style Sheet) gives the styles/looks to a webpage like colors, animations, margin, padding, etc.
And then comes JS (JavaScript) which brings in all the logic to the UI and all the dynamic mobility of code.
For eg. events like onclick, drop-downs, generating product cards on e-commerce webpages, etc.
Now if the page is generated dynamically on the server side, then there need to be some code that runs on the server side. 
This is done by the techs like NodeJs, PHP, etc. There are some frameworks like ReactJs, VueJs, AngularJs, which 
makes parsing incoming requests easier and you get a finished parsed data. 
There are also some new techs for real time communication where you dont have request-response 
but server actively push a new message to the client so client never sent a request but gets 
new data anyways through a tech named WebSockets.