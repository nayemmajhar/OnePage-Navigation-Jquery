## OnePage Navigation Jquery ##
A simple jquery plugins to achive one-page site navigation functionality.

#### Example Jquery ####

<pre>
$('.scroll').onePgaeNav({
 activeClass		: 'active',
 wrapper			: '#onepage-nav',
 speed 			: 900,
 navStop 		: 50,
 navStart 		: 200,
});
</pre>

#### Example Markup ####

<pre>
&lt;ul id="onepage-nav">
 &lt;li>&lt;a class="scroll" href="#home">Home&lt;/a>&lt;/li>
 &lt;li>&lt;a class="scroll" href="#about">About&lt;/a>&lt;/li>
 &lt;li>&lt;a class="scroll" href="#more">More&lt;/a>&lt;/li>
&lt;/ul>

&lt;div id="home">
 &lt;h1>Home&lt;/h1>
 &lt;p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. &lt;/p>
&lt;/div>
&lt;div id="about">
 &lt;h1>About Us&lt;/h1>
 &lt;p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. &lt;/p>
&lt;/div>
&lt;div id="more">
 &lt;h1>More&lt;/h1>
 &lt;p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. &lt;/p>
&lt;/div>
</pre>

A pull request appreciate. Tweet me on [Nayem Majhar](https://twitter.com/nayemmajhar)

