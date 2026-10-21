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
<div id="about-me" class="spotlight" markdown="1">
<p class="eyebrow">REMOTE SENSING · HYDROLOGY</p>
<h1>Understanding water.<br><span>Anticipating floods.</span></h1>
<p class="spotlight-intro">I'm Yue Li, a Ph.D. student in Geosensing Systems Engineering and Sciences at the University of Houston. I study remote sensing of hydrology, with a focus on flood inundation forecasting.</p>
<div class="research-tags"><span>Satellite observations</span><span>Deep learning</span><span>Data assimilation</span></div>
<div class="spotlight-actions"><a class="primary-link" href="#-experience">Explore my research <span aria-hidden="true">↗</span></a><a href="#-publications">View publications <span aria-hidden="true">→</span></a></div>
<div class="water-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
</div>
<div class="news-section" id="-news" markdown="1">
{% include_relative includes/news.md %}
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
