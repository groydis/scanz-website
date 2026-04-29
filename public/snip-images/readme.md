SNIP inline image convention
============================

Store SNIP post images in folders that match the post slug:

- `content/snip/_images/<post-slug>/<filename>`

Markdown should reference published image URLs from site root:

- `![Alt text](/snip-images/<post-slug>/<filename>.webp)`

Naming rules:

- Use lowercase kebab-case file names.
- Do not use spaces in file names.
- Prefer `.webp` for smaller payloads.
