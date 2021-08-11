const projectsDiv = document.getElementById('projectContainer');

// Frequently updated array of my project information that will populate the projectsDiv container declared above. This will save space in the hardcoded HTML and can be modified just by adding array elements.
const projectsArray = 
[
    [
        'snackChat (group project)',
        'https://project-snackchat.herokuapp.com/',
        'https://github.com/glasscharlie/snack-chat',
        'snackchat'        
    ],
    [
        'Calorie Replacer (group project)',
        'https://rangamboa.github.io/training-calorie-tracker/',
        'https://github.com/rangamboa/training-calorie-tracker',
        'calorie'        
    ],
    [
        'Weather Dashboard',
        'https://rangamboa.github.io/weather-dashboard/',
        'https://github.com/rangamboa/weather-dashboard',
        'weather'        
    ],
    [
        'Workday Scheduler',
        'https://rangamboa.github.io/work-day-scheduler/',
        'https://github.com/rangamboa/work-day-scheduler',
        'workday'        
    ],
];

for (i = 0; i < projectsArray.length; i++) {
   
    // Build the div block for each project.
    let block = '<div class="project pure-u-1 pure-u-md-1-2" id="project'+ i +'">';
    block += '<p>' + projectsArray[i][0] + '<br>';
    block += '<span><a href="' + projectsArray[i][1] + '" target="_new">deployed site</a>';
    block += ' &middot; <a href="' + projectsArray[i][2] + '" target="_new">GitHub repo</a>';
    block += ' &middot; <a href="#open-screenshot-' + projectsArray[i][3] + '" target="_new">screenshot</a></span></p></div>';

    // Build a modal to dynamically display a screenshot for each project.
    block +='<div id="open-screenshot-' + projectsArray[i][3] + '" class="modal-window"><div>';
    block +='<a href="#modal-close" title="close" class="moodal-close">close</a>';
    block +='<h2>screenshot of ' + projectsArray[i][0] + '</h2><img src="./Images/Projects/screenshot-' + projectsArray[i][3] + '.jpg" style="width:700px;" title="screenshot of ' + projectsArray[i][0] + '"></div></div>';

    // Generate the div.
    projectsDiv.innerHTML+=block;

    // Assign an ID to each project div and give it a unique background image.
    bgDiv = document.getElementById('project'+i);
    let bgUrl = './Images/Projects/splash-' + projectsArray[i][3] + '.jpg';
    bgDiv.style.backgroundImage = 'url("'+bgUrl+'")';
}