# Lab 5 — Resume Builder (sessionStorage)

Build a tiny two-page app: collect resume info on `form.html`, store it in `sessionStorage`, then render it on `resume.html`. One JavaScript file (`src/script.js`) powers both pages. Do not edit the HTML or CSS.

## Run it

```bash
npm install
npm start
# then open http://localhost:8080/form.html
```

## What to implement (in `src/script.js`)

- On the form page:
  - Stop the default submit.
  - Read all inputs (personal, education, experience, skills, git platform, project).
  - Save a single JSON object to `sessionStorage` under the key `"resumeData"`.
  - Redirect to `resume.html`.

- On the resume page:
  - If `resumeData` exists: parse it and replace the placeholders with the values (use the provided classes like `.resume-name`, `.email-value`, etc.).
  - If not: redirect back to `form.html`.

Notes
- Use only JavaScript for behavior; HTML/CSS are fixed.
- Use `sessionStorage` (not `localStorage`). Data should last only for the current tab/session.
- Any DOM technique is fine (`textContent`, `innerHTML`, `querySelector`, etc.).
- Optional fields (work experience, responsibilities, skills) should display **"N/A"** or a friendly message (e.g., "No professional experience provided") when left blank, instead of showing placeholder text.

## Submit

1. Verify the flow works end‑to‑end (form → storage → resume; direct resume access redirects back).
2. Zip the entire project folder and upload to Canvas.

## References

- [Location API](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [sessionStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
- [JSON Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
