# Open Planner Website 

Jekyll based website for Open Planner Team

Run it yourself locally:
 1. Get Jekyll https://jekyllrb.com/
 2. Run `bundle exec jekyll s`
 
If you want to build it for production purposes, use `bundle exec jekyll b`

---
## Add new section

1. Create new `html` file in `_includes/sections`.
2. Include this new section in `index.html`, exemple: `{% include sections/developers.html %}`
3. Global css is in `_sass/global/base.scss`, and global sections css is in `_sass/partials/section.scss`.
4. You can create your custom css section, creating a new file w/ section name in `_sass/partials`. You need to include this new file in `_sass/partials/all.scss`.
5. Don't forget to link it in `_includes/navigation.html`.

