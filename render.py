from pathlib import Path

markdown_slides = Path("slides/markdown/tdd.md")
index_template = Path("slides/index.html.j2")
index = Path("slides/index.html")

html = index_template.read_text()
rendered = html.replace("{{ markdown }}", markdown_slides.read_text())

index.write_text(rendered)
