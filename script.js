const button = document.querySelector('button'); 

 
button.addEventListener('click', checkWeather); 

function checkWeather(){ 
    const degree = document.querySelector('h1');
    const para = document.querySelector('p');

    // Declaring the various weather conditons inan array**/
    const conditions = ['rainy', 'sunny', 'snowy', 'stormy', 'cloudy', 'overcast', 'foggy', 'windy'];

    //selecting a random weather condition from the array**/
    const result = Math.floor(Math.random() * conditions.length);
    const weather = conditions[result];
   
    //statements for various weather condition**/
    if(weather === 'sunny'){
     degree.textContent = 'SUNNY'; 
     degree.style.color = 'yellow';
     para.style.color = 'yellow';
     para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
     document.body.style.backgroundImage = "url('./images/sunnyday.gif')";
     document.body.style.backgroundRepeat = "no-repeat";
     document.body.style.backgroundSize = "cover"; 
     document.body.style.backgroundattachment = "fixed";
     document.body.style.backgroundheight = "100%";
     document.body.style.backgroundwidth = "100%";
    }
    else if(weather === 'rainy'){
        degree.textContent = 'RAINY'
        degree.style.color = 'white';
        para.style.color = 'white';
        para.textContent ='Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
        document.body.style.backgroundImage = "url('./images/rainy1.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%"; 
        document.body.style.backgroundattachment = "fixed";
        document.body.style.backgroundheight = "100%";
        document.body.style.backgroundwidth = "100%";
    } 
    else if(weather === 'snowy'){
        degree.textContent = 'SNOWY';
        para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman';
        document.body.style.backgroundImage = "url('./images/snowy.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%"; 
        document.body.style.backgroundattachment = "fixed";
        document.body.style.backgroundheight = "100%";
        document.body.style.backgroundwidth = "100%";

    } 
    else if(weather === 'stormy'){
        degree.textContent = 'STORMY';
        para.textContent = '';
        document.body.style.backgroundImage = "url('./images/stormy.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%"; 
        document.body.style.backgroundattachment = "fixed";
        document.body.style.backgroundheight = "100%";
        document.body.style.backgroundwidth = "100%";
    } 
    else if(weather === 'overcast'){
        degree.textContent = 'OVERCAST'
        para.textContent = '';
        document.body.style.backgroundImage = "url('./images/overcast.gif')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%"; 
        document.body.style.backgroundattachment = "fixed";
        document.body.style.backgroundheight = "100%";
        document.body.style.backgroundwidth = "100%";
    } 
    else if(weather === 'foggy'){
        degree.textContent = 'FOGGY'
        degree.style.color = 'white';
        para.textContent = '';
        document.body.style.backgroundImage = "url('./images/foggy2.gif')"; 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%"; 
        document.body.style.backgroundattachment = "fixed";
        document.body.style.backgroundheight = "100%";
        document.body.style.backgroundwidth = "100%";
    } 
    else if(weather === 'windy'){
        degree.textContent = 'WINDY'
        degree.style.color = 'white';
        para.textContent = '';
        document.body.style.backgroundImage = "url('./images/wind.gif')"; 
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "100% 100%"; 
        document.body.style.backgroundattachment = "fixed";
        document.body.style.backgroundheight = "100%";
        document.body.style.backgroundwidth = "100%";
    } 
    else{
        degree.textContent = 'WEATHER'
        degree.style.color = 'white';
        para.textContent = '';
        document.body.style.backgroundImage = "url('./images/weather background.png')"; 
    }

} 






