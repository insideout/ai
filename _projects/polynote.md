---
name: Polynote
excerpt: "Polynote is an experimental polyglot notebook environment. Currently, it supports Scala and Python (with or without Spark), SQL, and Vega."
website: https://polynote.org
type: code

github:
  url: https://github.com/polynote/polynote
  watches: 78
  stars: 3300
  forks: 253
  license: Apache License 2.0
  languages: [ "Scala", "TypeScript" ]

provider:
  name: polynote
  domain: polynote.org
  publishers:
    - name: Netflix
      domain: netflix.com
  
topics:
  - AI
  - Machine Learning

images:
  - url: https://miro.medium.com/max/855/1*eK9GxXL58o7SfE20LHsT0w.png
    width: 855
    height: 614
    title: "Polynote"
---

Polynote is an experimental polyglot notebook environment. Currently, it supports Scala and Python (with or without Spark),
SQL, and Vega.

For more information, see [Polynote's website](https://polynote.org)

## Why?

Current notebook solutions, like Jupyter and Zeppelin, are lacking in some fundamental features:

- *Code editing* – the code editing capabilities in most notebook tools leave plenty to be desired. Why can't a notebook
  tool have modern editing capabilities like those you'd find in an IDE? Polynote provides useful autocomplete,
  parameter hints, and more – we're planning to add even more features, like jump-to-definition.
- *Text editing* – you can use the WYSIWYG editor for composing text cells, so you'll know what the text will look like as
  you're writing. TeX equations are also supported.
- *Multi-language support* – Polynote allows you to mix multiple languages in one notebook, while sharing definitions
  seamlessly between them.
- *Runtime insight* – Polynote tries to keep you informed of what's going on at runtime:
    - The tasks area shows you what the kernel is doing at any given time.
    - The symbol table shows you what variables and functions you've defined, so you don't have to scroll around to remind yourself.
    - Compile failures and runtime exceptions are highlighted in the editor (for supported languages), so you can see exactly what's going wrong.
