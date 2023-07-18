const key = 'live_h2b7kch1OaMTzt0xZAbNjISsxub22E2GMZltE0dfyEuhe292LDCOIpNyDsJ6NbLL'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '531dcd1197msh8936d02515afaddp153462jsn17c197065bff',
		'X-RapidAPI-Host': 'google-search72.p.rapidapi.com'
	}
};

const myDiv = document.getElementById("answerBox");

function catfunc() {
    fetch('https://api.thecatapi.com/v1/images/search', {method: 'GET','x-api-key': key})
        .then(response => response.json())
        .then(response => {
            let answerDiv = document.createElement("div");
            answerDiv.setAttribute("class", "answerBox");
            answerDiv.setAttribute("id", "answerBox1");

            let image = document.createElement("img");
            image.src = response[0]['url']
            answerDiv.appendChild(image);
            myDiv.appendChild(answerDiv);
        })
}

function myfunc(search) {
    let url = 'https://google-search72.p.rapidapi.com/search?q=' + encodeURI(search) + '&num=3&start=0';
    fetch(url, options)
        .then(response => response.json())
        .then(response=> {
            for (let i = 0; i < 3; i++) {
                let answerDiv = document.createElement("div");
                answerDiv.setAttribute("class", "answerBox");
                answerDiv.setAttribute("id", "answerBox"+ i.toString());
                
                let titleLink = document.createElement("a");
                titleLink.href = response['items'][i]['link'];
                titleLink.setAttribute("class", "titleLink");
                titleLink.setAttribute("target", "_blank");
                
                let titleUrl = document.createElement("p");
                titleUrl.setAttribute("class", "titleUrl");
                titleUrl.innerHTML = response['items'][i]['link'];
                
                let title = document.createElement("h3");
                title.setAttribute("class", "title");
                title.innerHTML = response['items'][i]['title'];
                
                let snippet = document.createElement("p");
                snippet.setAttribute("class", "snippet");
                snippet.innerHTML = response['items'][i]['htmlSnippet'];
                
                titleLink.appendChild(titleUrl);
                titleLink.appendChild(title);
                answerDiv.appendChild(titleLink);
                answerDiv.appendChild(snippet);
                myDiv.appendChild(answerDiv);
                console.log('done');
            }
        })
}

function deletePrev() {
    for (let i = 0; i < 3; i++) {
        if (document.getElementById("answerBox" + i.toString()) != null) {
            document.getElementById("answerBox" + i.toString()).remove();    
        }
    }
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    console.log('submitted');
    deletePrev();
    event.preventDefault();
    myfunc(document.getElementById("search").value);
    document.getElementById("search").value = '';
})

document.getElementById("button2").addEventListener("click", function() {
    deletePrev();
    catfunc();
})