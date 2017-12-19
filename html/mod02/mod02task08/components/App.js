const GIPHY_API_URL = 'http://api.giphy.com';
const GIPHY_PUB_KEY = 'lILtfRAQVOQaDPmHB2zJZ4AsmTnvLbUn';

App = React.createClass({
	getInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},
	handleSearch: function(searchingText) {  // 1.
        this.setState({
            loading: true  // 2.
        });
        this.getGif(searchingText, function(gif) {  // 3.
            this.setState({  // 4
                loading: false,  // a
                gif: gif,  // b
                searchingText: searchingText  // c
            });
        }.bind(this));
	},
	/*getGif: function(searchingText, callback) {  // 1.
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
        var xhr = new XMLHttpRequest();  // 3.
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText).data; // 4.
                var gif = {  // 5.
                    url: data.fixed_width_downsampled_url,
                    sourceUrl: data.url
                };
                callback(gif);  // 6.
            }
        };
        xhr.send();
	},*/
	getGif: function(searchingText, callback) {  // 1.
        var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;  // 2.
		// httpGet(url) 
		// .then( function (response) {
		// 		var data = JSON.parse(response).data; // 4.
		// 		var gif = {  
		// 			url: data.fixed_width_downsampled_url,
		// 			sourceUrl: data.url
		// 		};
		// 		callback(gif);
		// 	}, function(response) {
		// 		console.log(response);
		// 	}
		// )
		fetch(url)
			.then( function(response) {
				return response.json() // 4.
				}
			)
			.then(function(response_json) {
					var data = response_json.data;
					var gif = {  
						url: data.fixed_width_downsampled_url,
						sourceUrl: data.url
					};
					callback(gif);
				}
			)
    },
    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%'
        };
        
        return(
        		<div style = {styles}>
        			<h1>Wyszukiwarka GIFów!</h1>
        			<p>Znajdź gifa na <a href='http://giphy.com'>Giphy</a>. Naciskaj ENTER, aby pobrać kolejne gify.</p>
        			<Search onSearch={this.handleSearch} />
        			<Gif loading={this.state.loading} url={this.state.gif.url} sourceUrl={this.state.gif.sourceUrl} />
        		</div>
        );
    }
});

function httpGet(url){
	return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    resolve(this.response); // Sukces
                } else {
                    reject(new Error(this.statusText)); // Dostaliśmy odpowiedź, ale jest to np 404
                }
            };
            request.onerror = function () {
                reject(new Error(
                   `XMLHttpRequest Error: ${this.statusText}`));
            };
            request.open('GET', url);
            request.send();
        });
}