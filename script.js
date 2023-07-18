const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '685239185amsh9e51d5ddd36e754p116dc1jsn81fe160acd17',
		'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
	}
};

function myfunc(search) {
    let url = 'https://google-search72.p.rapidapi.com/search?q=' + encodeURI(search) + '&num=1&start=0';
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById("title").innerHTML = response['items'][0]['title'];
            document.getElementById("titleUrl").innerHTML = response['items'][0]['link'];
            document.getElementById("titleLink").href = response['items'][0]['link'];
            document.getElementById("snippet").innerHTML = response['items'][0]['htmlSnippet'];
            console.log('done');
        })
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    myfunc(document.getElementById("search").value);
    document.getElementById("search").value = '';
})