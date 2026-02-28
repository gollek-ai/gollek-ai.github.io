---
layout: default
title: Gollek Blog
---

<section class="hero hero-compact">
  <p class="eyebrow">Product Updates</p>
  <h1>Gollek Blog</h1>
  <p class="lead">Release notes, architecture deep dives, and practical guides for developers building with Gollek.</p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="/blog/categories">Browse Categories</a>
    <a class="btn btn-ghost" href="/blog/tags">Browse Tags</a>
    <a class="btn btn-ghost" href="/feed.xml">RSS Feed</a>
  </div>
</section>

{% assign posts = site.pages | where_exp: "p", "p.url contains '/blog/' and p.url != '/blog/' and p.title and p.date" | sort: "date" | reverse %}

<section class="subtle-panel">
  <strong>{{ posts | size }}</strong> article{% if posts.size != 1 %}s{% endif %} published.
</section>

<section class="blog-grid">
{% for post in posts %}
  <a class="blog-card" href="{{ post.url | relative_url }}">
    <div class="blog-cover {% if post.cover %}cover-{{ post.cover }}{% else %}cover-default{% endif %}"></div>
    <div class="blog-card-body">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
      <p class="blog-meta">Published: {{ post.date | date: "%B %-d, %Y" }}</p>
      {% if post.tags %}
      <div class="chip-row">
        {% for tag in post.tags limit: 4 %}
          <span class="chip">#{{ tag }}</span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </a>
{% endfor %}
</section>
