# FreelanceDesk

FreelanceDesk is a web app for keeping track of freelance projects, working hours and estimated earnings. Each project has its own hourly rate, and work entries keep the rate that applied when the time was logged.

The app is still at an early stage. The current version covers project management, manual time entries and a simple overview. Payment tracking, expenses and tax estimates are planned for later releases.

## Features

- Create projects with an hourly rate in EUR.
- Archive projects without losing their work history.
- Record hours, dates and optional notes against active projects.
- View logged hours and estimated gross earnings across projects.
- See logged hours and gross earnings for each project, including archived projects.
- Load fictional sample data to try the app.
- Keep data in the browser using `localStorage`.

Editing and deleting entries are not supported yet. There is no backend or payment tracking in this version.

## Tech stack

- Angular 21 and TypeScript
- Angular Router and signals
- CSS
- Vitest for calculation tests

## Run locally

Node.js 24 is recommended; Node.js 22.12+ is also supported. The `.nvmrc` file specifies the Node version used during development.

```bash
npm install
npm start
```

Open http://localhost:4200. Add a project and then create an entry in the **Work log**, or load the sample data from the empty overview page.

To run the tests and production build:

```bash
npm run check
```

If npm fails during dependency resolution, `npm install --legacy-peer-deps` is a workaround for the installation issue seen with npm 11.19.0. No paid services are needed to run the application.

## Data storage

Projects and work entries are stored locally in the browser under the `freelance-desk-data-v1` key. They remain available after a page refresh, but they are not shared across browsers or backed up. Clearing the browser's site data will remove them.

The earnings shown in the app are calculated from logged hours and the hourly rate saved with each entry. They are estimates before taxes and fees, not a record of payments received.

The repository includes fictional examples only. There are no real work records or customer details in the sample data.

## Planned work

The next steps include editing and filtering entries, payment tracking, expenses, reporting and tax estimates for Greece. A local ASP.NET Core API with EF Core and SQLite is also planned. SQLite can run on macOS without a separate database server or paid hosting.

See [ROADMAP.md](ROADMAP.md) for the planned changes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
