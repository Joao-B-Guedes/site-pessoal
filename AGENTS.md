# Project Guidelines

## Project Shape

- This is a framework-free static site. Keep page structure in HTML, presentation in CSS, and behavior/content rendering in JavaScript.
- The main terminal page is wired by `index.html`, `style.css`, and `script.js`.
- `consultas/` contains the working terminal implementation. Keep editable command data in the `blocos` array and behavior in the rendering functions; use `consultas/script_consulta.js` as the local example.
- Do not add Mermaid as a site dependency unless the user explicitly asks to render diagrams in the website. Mermaid diagrams in chat must be returned as fenced `mermaid` code blocks.

## Language And Style

- Preserve the existing Portuguese (`pt-BR`) UI and comments unless the user requests another language.
- Match the existing terminal visual language and JetBrains Mono styling. Keep changes focused and avoid introducing a framework for small site changes.
- Use ASCII for new source text when possible; preserve existing Portuguese characters where they are already part of user-facing content.

## Validation

- There is no package manager, build script, or test suite. Validate JavaScript with the editor diagnostics and open the affected HTML page directly in a browser.
- Check both the root page and any affected page under `consultas/`; confirm the terminal content, typing animation, links, and responsive layout still work.

## Mermaid Chat Output

- Use Mermaid only when a diagram clarifies structure, flow, relationships, or lifecycle; prefer a short prose explanation for simple answers.
- Wrap diagrams in a fenced block beginning with ` ```mermaid ` and choose a diagram type that matches the content (`flowchart`, `sequenceDiagram`, `classDiagram`, or `erDiagram`).
- Keep Mermaid labels and surrounding explanation in Portuguese by default. Use quoted labels when punctuation or spaces could make Mermaid syntax ambiguous.
- Keep diagrams small, deterministic, and readable in a narrow chat pane. Do not claim that this static site renders Mermaid unless Mermaid has been explicitly added and verified.