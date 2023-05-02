<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<n-space vertical size="large">
	<n-layout>
		<n-layout-header>
			<div class="wrapper">
				<nav class="navbar navbar-expand-lg">
					<button class="navbar-toggler">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="container-fluid">
						<div class="collapse navbar-collapse">
							<ul class="navbar-nav">
								<li class="nav-item">
									<RouterLink to="/" class="nav-link active">Home</RouterLink>
								</li>
								<li class="nav-item">
									<RouterLink to="/about" class="nav-link">About</RouterLink>
								</li>
								<li class="nav-item">
									<RouterLink to="/editor" class="nav-link">Editor</RouterLink>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</n-layout-header>
		<RouterView />
	</n-layout>
</n-space>
</template>