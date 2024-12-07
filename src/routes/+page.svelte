<script lang="ts">
	import { onMount } from 'svelte';
	import AccordionItem from '$lib/components/AccordionItem.svelte';

	onMount(() => {
		const navLinks = document.querySelectorAll('nav a');
		navLinks.forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const targetId = link.getAttribute('href').slice(1);
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: 'smooth' });
				}
			});
		});
	});
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

	<AccordionItem header="Contact Information">
		<ul>
			<li>Email: john.doe@example.com</li>
			<li>Phone: (123) 456-7890</li>
			<li>Location: New York, NY</li>
		</ul>
	</AccordionItem>

	<AccordionItem header="Summary">
		<p>Experienced web developer with a passion for creating responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, and various modern frameworks.</p>
	</AccordionItem>

	<AccordionItem header="Work Experience">
		<AccordionItem header="Senior Web Developer - Tech Solutions Inc." level={2}>
			<p class="date">January 2018 - Present</p>
			<ul>
				<li>Lead a team of 5 developers in creating web applications for clients</li>
				<li>Implemented responsive design principles, improving mobile traffic by 40%</li>
				<li>Optimized website performance, reducing load times by 25%</li>
			</ul>
		</AccordionItem>
		<AccordionItem header="Web Developer - Digital Creations LLC" level={2}>
			<p class="date">June 2015 - December 2017</p>
			<ul>
				<li>Developed and maintained websites for small to medium-sized businesses</li>
				<li>Collaborated with designers to implement visually appealing interfaces</li>
				<li>Integrated third-party APIs to enhance website functionality</li>
			</ul>
		</AccordionItem>
	</AccordionItem>

	<AccordionItem header="Education">
		<h3>Bachelor of Science in Computer Science</h3>
		<p>University of Technology, Graduated 2015</p>
	</AccordionItem>

	<AccordionItem header="Skills">
		<ul>
			<li>HTML5, CSS3, JavaScript</li>
			<li>React, Vue.js, Svelte</li>
			<li>Node.js, Express</li>
			<li>Git, GitHub</li>
			<li>Responsive Web Design</li>
			<li>UI/UX Principles</li>
		</ul>
	</AccordionItem>
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
		padding-top: 20px;
	}

	h1 {
		margin-bottom: 5px;
	}

	.date {
		font-style: italic;
		color: #666;
	}

	ul {
		padding-left: 20px;
	}
</style>
