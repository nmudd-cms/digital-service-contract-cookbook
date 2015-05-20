---
layout: home
title: Digital Services Contract Cookbook
permalink: /
---

<div class="contract-overview">

<h1>Digital Service Contract</h1>

<h2>Overview</h2>
<p>This is where we need to add a generic overview about a digital service contract. Aliquam lectus orci, adipiscing et, sodales ac, feugiat non, lacus. Ut dictum velit nec est. Quisque posuere, purus sit amet malesuada blandit, sapien sapien auctor arcu, sed pulvinar felis mi sollicitudin tortor. Maecenas volutpat, nisl et dignissim pharetra, urna lectus ultrices est, vel pretium pede turpis id velit. Aliquam sagittis magna in felis egestas rutrum. Proin wisi libero, vestibulum eget, pulvinar nec, suscipit ut, mi. Integer in arcu ultricies leo dapibus ultricies. Sed rhoncus lobortis dolor.</p>

<p>Suspendisse dolor. Mauris sapien velit, pulvinar non, rutrum non, consectetuer eget, metus. Morbi tincidunt lorem at urna. Etiam porta. Ut mauris. Phasellus tristique rhoncus magna. Nam tincidunt consequat urna. Sed tempor.</p>

</div>

## <span>Project Management</span>

<ul class="check-list">
  {% for task in site.tasks %}
    {% if task.category == "Project Management" %}
      <li class="check-item filter-item {{task.id}} culture">
        <input id="{{task.id}}" class="checkbox" type="checkbox">
        <label for="{{task.id}}" name="{{task.id}}" class="label">
        {{ task.title }}
        <span class="more">{{task.blurb}}
        <ul class="tags">
            <li class="filter-item culture"><a href="#">SLA</a></li>
            <li class="filter-item culture"><a href="#">Scenario</a></li>
            <li class="filter-item culture"><a href="{{task.url}}" target="_blank">Full Details</a></li>
        </ul>
        </span>
        <button class="toggle" title="Read more"><span>Read more</span></button>
        </label>
        <div class="full-content hide-task">
          <h2>{{task.title}}</h2>
          {{task.content}}
        </div>
      </li>
    {% endif %}
  {% endfor %}
</ul>

## <span>Cloud Hosting</span>

<ul class="check-list">
  {% for task in site.tasks %}
    {% if task.category == "Cloud Hosting" %}
    <li class="check-item filter-item {{task.title}} culture">
      <input id="{{task.id}}" class="checkbox" type="checkbox">
      <label for="{{task.id}}" name="{task.title}}" class="label">
      {{ task.title }}
      <span class="more">{{task.blurb}}
      <ul class="tags">
          <li class="filter-item culture"><a href="#">SLA</a></li>
          <li class="filter-item culture"><a href="#">Scenario</a></li>
          <li class="filter-item culture"><a href="{{task.url}}" target="_blank">Full Details</a></li>
      </ul>
      </span>
      <button class="toggle" title="Read more"><span>Read more</span></button>
      </label>
      <div class="full-content hide-task">
        <h2>{{task.title}}</h2>
        {{task.content}}
      </div>
    </li>
  {% endif %}
{% endfor %}
</ul>

## <span>Design & User Experience</span>

## <span>Development</span>

## <span>Testing</span>

## <span>Content Delivery Network (CDN)</span>

## <span>Digital Service Tools</span>
