---
layout: default
title: Category - Runtime
category: runtime
---

# Category: runtime

{% assign posts = site.pages | where_exp: "p", "p.url contains '/blog/' and p.url != '/blog/' and p.date and p.categories contains page.category" | sort: "date" | reverse %}

<section class="blog-grid">
{% for post in posts %}
  <a class="blog-card" href="{{ post.url | relative_url }}">
    <div class="blog-cover {% if post.cover %}cover-{{ post.cover }}{% else %}cover-default{% endif %}"></div>
    <div class="blog-card-body">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p class="blog-meta">Published: {{ post.date | date: "%B %-d, %Y" }}</p>
    </div>
  </a>
{% endfor %}
</section>
