export default function App() {
  return (
    <main style={{maxWidth: 920, margin: '0 auto', padding: 24}}>
      <h1>Serhiy Khraban — Frontend Developer</h1>
      <p>React • TypeScript • SCSS • Firebase</p>

      <h2 style={{marginTop: 32}}>Projects</h2>
      <ul>
        <li>
          <strong>Terra Alpha</strong> — online board game.
          {' '}<a href="https://github.com/S-Khraban/terra-alpha" target="_blank">GitHub</a>
        </li>
        <li>
          <strong>People Table</strong> — filters, sorting, pagination.
          {' '}<a href="https://github.com/S-Khraban/react_people-table-advanced" target="_blank">GitHub</a>
        </li>
        <li>
          <strong>Todos</strong> — CRUD + notifications.
          {' '}<a href="https://github.com/S-Khraban/react-todos" target="_blank">GitHub</a>
        </li>
      </ul>

      <h2 style={{marginTop: 32}}>Contacts</h2>
      <p>
        <a href="mailto:your.email@example.com">your.email@example.com</a> ·
        {' '}<a href="https://www.linkedin.com/in/sergiy-hraban" target="_blank">LinkedIn</a> ·
        {' '}<a href="https://github.com/S-Khraban" target="_blank">GitHub</a>
      </p>
    </main>
  );
}
