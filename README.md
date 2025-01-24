# <h1 align="center">🌦️ Skycast - The Airport Weather App 🌦️</h1>

## Table of Contents
- [🌞 Introduction](#introduction)
- [🛠️ Project Management](#project-management)
- [🎨 Design](#design)
- [💻 Development](#development)
- [🧪 Testing](#testing)
- [📚 Documentation](#documentation)
- [📝 Evaluation](#evaluation)

## <h2 id="introduction">🌞 Introduction</h2>
For the Software Engineering Summative One assignment, I have chosen to create a web app that displays the weather for any worldwide airport. There are two different users in mind for this. One is colleagues in various roles such as schedule manager who may need to make proactive changes due to adverse weather conditions. The other is customers who want to know what the weather will be like when they land so they can prepare. 

### Tech Stack
**HTML** - language used to structure content \
**CSS** - language used to define the visual appearance of the app \
**JavaScript** - language used to create interactivity \
**VS Code** - chosen code editor for development \
**Github** - used for version control and project management \
**Figma** - design tool used for prototyping \
**LocationIQ** - API used to obtain coordinates for airports \
**Open-Meteo** - API used to get current weather for given coordinates \
**Jest** - testing framework for JavaScript


## <h2 id="project-management">🛠️ Project Management</h2>
### Agile Approach
For project management, I have used the Github Projects kanban board to keep track of features and pull requests. 
I have followed an Agile approach. I had 6 weeks to complete this project and divided my time into 3 two week sprints. 
Talk about kanban board and details of agile

#### Sprint 1
This consisted of learning the basics of HTML, CSS, and JavaScript as well as how to use all of the necessary features of Github. At this point I also brainstormed project ideas that could be achievable in the time frame and relevent to my workplace. I also created the prototype during this sprint once I had decided on my plan. 
Initial brainstorm chart:
![Brainstorming mind map ](docs/brainstorm.png)

Ticket not shown here is the learning of code and Github as I did this before creating the project in Github.

#### Sprint 2
This was were the bulk of the work was done. I did all of the coding required for the program within this sprint.
For development, the first feature completed in the sprint was setting up the initial envronment. The next one was creating the weather display, the third one was creating the search functionality. I realised that I would not have enough story points to complete the 4th feature (history function) so I have left this in the backlog as a future improvement.

#### Sprint 3
In the final sprint, I did the testing for my application and created all of the documentation including this README file. 

For my tickets, I followed the hierarchy of Epic, Feature, Story, Task
I created acceptance critera for the Epics only as this is the highest level, each feature is linked to a branch and a pull request as this is a specific implementation realted to the wider Epic. The stories and tasks are for developers to see a more detailed view and manage workload. 
The tasks were assigned story points with 1 point = 1 hour. Each sprint had 16 points (equivalent to 2 off the job study days)

## <h2 id="design">🎨 Design</h2>
### Prototype
The prototype for this app has been created in [Figma](https://www.figma.com/). A screen recording of the prototype can be found below. \
<video width="320" height="240" controls>
  <source src="docs/figma_prototype_vid.mp4" type="video/mp4">
</video>
Video description: Screen recording of Figma prototype navigating between different pages of the web app \
A link to the Figma file is here https://www.figma.com/design/N3TybZpRVjDRYOr29QqwhH/Summative-1?node-id=0-1&t=BEyxLwm3nyauWsao-1

### Design Choices
#### Colours
Colour palette created using [Coolors](https://coolors.co/) website 
![Colour palette from left to right](docs/colours.jpg)
Background colour: light grey \
Main text colour: dark grey/blue \
Accent colours: blue and yellow

#### Fonts
For titles and other stylised words: [Abril Fatface](https://fonts.google.com/specimen/Abril+Fatface) \
Main body font: [Roboto](https://fonts.google.com/specimen/Roboto) \
Fallback: Arial

#### Icons
For the weather icons in this app, I am going to use the free library available from [Font Awesome](https://fontawesome.com/icons/categories/weather). This can be implemented in HTML and scaled/designed using CSS


### Accessibility
Best practises for accessible web app design have been set out by [W3](https://www.w3.org/WAI/tips/designing/) \
Some of the key takeaways that I will implement are:
- Have high contrast between text and background
- Use large and clear font size
- Design for multiple device types 
- Make everything accessible by keyboard and/or mouse
- Transcript or text descriptions for images and video
- Make html element names useful for screen readers
- Use tools for accessibly testing
https://codedamn.com/news/frontend/7-best-practices-accessible-web-applications


Useful resource to check constrast: 
https://webaim.org/resources/contrastchecker/

## <h2 id="development">💻 Development</h2>
### APIs
#### Weather API
I have chosen to use [Open-Meteo](https://open-meteo.com/) as the API to get the weather data from. This is because it does not require an API key and has a large limit for the number of daily calls (10,000) compared to other APIs that I looked at. It also uses longitude and latitude to locate place so this will be useful for getting to specific airports. 

The Open Meteo API contains weather codes which need to be mapped to descriptions to make them understandable to the user. The mapping from the documentation is below \
![](docs/code-map.png)

#### Geography API
I also needed to use an API for geolocation to turn airport codes into coordinates. I started the project using the [Searoutes](https://developer.searoutes.com/reference/getgeocodingairport) API to convert airport codes into long and lat coordinates.This is created to take in IATA airport codes and provide coordinates as the output. Unfortunately, the free version of this only allows for 100 API calls per account so I had to switch to a different API halfway through building. I found [LocationIQ](https://locationiq.com/) which gives the coordinates based on a location input and you can limit the output to certain place class and type to get the first airport response only. 

### Minimal Viable Product
The very first iteration of this was created with one hard coded airport to test the ability of calling both APIs. It has not been formatted at all either. \
![](docs/draft1.png)

The second iteration, once the CSS had been applied, tidied up the look and made it more professional. 
![](docs/draft2.png)

## <h2 id="testing"> 🧪 Testing</h2>
### Test Driven Development

### Accessibility
Accessibility testing: Lighthouse

## <h2 id="documentation">📚 Documentation</h2>
### User Documentation

### Technical Documentation

## <h2 id="evaluation">📝 Evaluation</h2>

### Future Improvements

### Conclusion

