Title: Lightsketch

Link: https://lightsketch.netlify.app/

Purpose: A demo project for my application with Darktrace. It illustrates ... 1. Translate designs accurately from Figma 2. Provide accessibility features for an inclusive user experience 3. Use memoization to enhance performance. 4. Integrate with a backend API that isn't my own. 5. Build re-usable components (Toggle, LogoCard) 6. Proficiency with Git 7. Documentation through this README and descriptive commit messages.

Overview:

The app demonstrates simply the performance difference when loading ~1300 components with and without useMemo. Changing the Theme to dark without memoization (and referencing context directly in the component) results in lag and jankiness. Activating the memoization allows for faster, smoother performance.

Special thanks to the providers of the Logotypes api: https://logotypes.dev/

Tech Stack: Vite/React/Tailwind/JS. Hosted on Netlify.
