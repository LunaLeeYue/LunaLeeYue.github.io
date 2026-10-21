---
permalink: /
title: ""
excerpt: "Yue Li — remote sensing of hydrology and flood inundation forecasting."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<link rel="stylesheet" href="{{ '/assets/css/spotlight.css' | relative_url }}?v={{ site.time | date: '%s' }}">
<script src="{{ '/assets/js/spotlight.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>

<div class="profile-site">
<section class="site-panel home-panel" data-view="home" aria-label="About Me and News" markdown="1">
<div class="home-banner"><img src="{{ '/images/agu2025-study-area.jpg' | relative_url }}" alt="" aria-hidden="true"><span>Upper Mississippi Alluvial Plain · Study area</span></div>
<div class="home-columns" markdown="1">
<div id="about-me" class="editorial-about" markdown="1">
<h1 id="about-heading">About Me</h1>

Welcome! I am now a Ph.D student in Geosensing Systems Engineering and Sciences at the University of Houston. My current research focuses on **remote sensing of hydrology**, with a specific emphasis on **flood inundation forecasting**. For more information on my research interests and experience, check out my [research page](#-experience)!
</div>
<div class="news-section" id="-news" markdown="1">
{% include_relative includes/news.md %}
</div>
</div>
</section>

<section class="site-panel detail-panel" data-view="education" id="-educations" aria-label="Education" markdown="1">
<p class="eyebrow">BACKGROUND</p>
{% include_relative includes/education.md %}
</section>

<section class="site-panel detail-panel" data-view="publications" id="-publications" aria-label="Publications" markdown="1">
<p class="eyebrow">RESEARCH OUTPUT</p>
{% include_relative includes/pub.md %}
</section>

<section class="site-panel detail-panel" data-view="research" id="-experience" aria-label="Research Experience" markdown="1">
<p class="eyebrow">SELECTED PROJECTS</p>
{% include_relative includes/research.md %}
</section>

<section class="site-panel detail-panel" data-view="honors" id="-honors-and-awards" aria-label="Honors and Awards" markdown="1">
<p class="eyebrow">RECOGNITION</p>
{% include_relative includes/honers.md %}
</section>
</div>
