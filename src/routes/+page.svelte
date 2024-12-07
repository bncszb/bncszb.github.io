<script lang="ts">
	// You can add any necessary imports here
</script>

<svelte:head>
	<title>John Doe - CV</title>
	<meta name="description" content="John Doe's CV" />
</svelte:head>

<main>
	<header>
		<h1>John Doe</h1>
		<p>Web Developer</p>
	</header>

	<section>
		<h2>Contact Information</h2>
		<ul>
			<li>Email: john.doe@example.com</li>
			<li>Phone: (123) 456-7890</li>
			<li>Location: New York, NY</li>
		</ul>
	</section>

	<section>
		<h2>Summary</h2>
		<p>Experienced web developer with a passion for creating responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, and various modern frameworks.</p>
	</section>

	<section>
		<h2>Work Experience</h2>
		<div class="job">
			<h3>Senior Web Developer - Tech Solutions Inc.</h3>
			<p class="date">January 2018 - Present</p>
			<ul>
				<li>Lead a team of 5 developers in creating web applications for clients</li>
				<li>Implemented responsive design principles, improving mobile traffic by 40%</li>
				<li>Optimized website performance, reducing load times by 25%</li>
			</ul>
		</div>
		<div class="job">
			<h3>Web Developer - Digital Creations LLC</h3>
			<p class="date">June 2015 - December 2017</p>
			<ul>
				<li>Developed and maintained websites for small to medium-sized businesses</li>
				<li>Collaborated with designers to implement visually appealing interfaces</li>
				<li>Integrated third-party APIs to enhance website functionality</li>
			</ul>
		</div>
	</section>

	<section>
		<h2>Education</h2>
		<div class="education">
			<h3>Bachelor of Science in Computer Science</h3>
			<p>University of Technology, Graduated 2015</p>
		</div>
	</section>

	<section>
		<h2>Skills</h2>
		<ul>
			<li>HTML5, CSS3, JavaScript</li>
			<li>React, Vue.js, Svelte</li>
			<li>Node.js, Express</li>
			<li>Git, GitHub</li>
			<li>Responsive Web Design</li>
			<li>UI/UX Principles</li>
		</ul>
	</section>
</main>

<style>
	main {
		max-width: 800px;
		margin: 0 auto;
		padding: 20px;
		font-family: Arial, sans-serif;
	}

	header {
		text-align: center;
		margin-bottom: 20px;
	}

	h1 {
		margin-bottom: 5px;
	}

	h2 {
		border-bottom: 2px solid #333;
		padding-bottom: 5px;
	}

	.job, .education {
		margin-bottom: 15px;
	}

	.date {
		font-style: italic;
		color: #666;
	}

	ul {
		padding-left: 20px;
	}
</style>
