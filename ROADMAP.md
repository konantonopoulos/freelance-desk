# Roadmap

The first version handles projects, work hours and estimated gross earnings. The features below are planned for future releases. The order may change as the app develops.

## v0.1 — Initial version

- [x] Set up the Angular app with an overview, projects page and work log
- [x] Add and archive projects
- [x] Record work entries with the hourly rate saved at the time
- [x] Store data locally in the browser
- [x] Add fictional sample data and calculation tests

## v0.2 — Editing and filtering

- [ ] Edit project details and hourly rates
- [ ] Edit and delete work entries
- [ ] Filter entries by project and date
- [ ] Improve form validation and error messages
- [ ] Add tests for editing and filtering

## v0.3 — Payments

- [ ] Record payments separately from work entries
- [ ] Track amounts due and amounts received
- [ ] Support partial payments, fees and adjustments
- [ ] Link payments to the work they cover
- [ ] Keep earnings and payments separate in summaries
- [ ] Test partial payments and inconsistent amounts

## v0.4 — Expenses and reporting

- [ ] Add expense categories and recurring expenses
- [ ] Edit expenses and show monthly and yearly totals
- [ ] Compare earnings and expenses in reports
- [ ] Export and import data for local backups
- [ ] Validate imported files and handle errors

Expenses and potential tax deductions will be kept separate until tax rules are implemented and checked.

## v0.5 — Greek tax estimates

- [ ] Research official rules for supported tax years
- [ ] Add inputs for employment income, business profit and eligible deductions
- [ ] Calculate progressive brackets and applicable advance tax separately
- [ ] Show a breakdown of the estimates
- [ ] Compare scenarios and test bracket boundaries

This feature is intended for planning only, not for filing tax returns. The applicable tax rules and the project's eligibility requirements will be checked before implementation.

## v0.6 — Local backend

- [ ] Create an ASP.NET Core Web API
- [ ] Add EF Core, SQLite and migrations
- [ ] Create endpoints for projects, work entries, payments and expenses
- [ ] Replace browser storage with API requests
- [ ] Import existing browser data into SQLite
- [ ] Add API validation and integration tests

The API and database will run locally on macOS without paid hosting.

## v0.7 — Testing and maintenance

- [ ] Add UI tests for common workflows
- [ ] Improve keyboard navigation and accessibility
- [ ] Add GitHub Actions for build and test checks
- [ ] Handle failed imports and migrations more carefully
- [ ] Update setup documentation and prepare a release
