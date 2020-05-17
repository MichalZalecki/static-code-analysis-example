# Tools

## sonarqube.org

* SonarQube (free Community edition)
* [Getting started](https://docs.sonarqube.org/latest/setup/overview/)
* run `docker run -it --rm --name sonarqube -p 9000:9000 sonarqube:8.3-community`
* Login http://localhost:9000 (admin/admin)
* Go though the project setup
* Go to Project Settings -> Quality Profiles -> Change TypeScript to "Sonar way recommended"
* Add `sonar-project.properties` to instruct SonarQube where to find code coverage report

## dependency-cruiser

* `npm install -D dependency-cruiser`
* Setup depcruise with `npx depcruise --init` and select `self-contained`
* Run `npx depcruise --validate .dependency-cruiser.js src pages server` to validate
* Run `npx depcruise --include-only "^(src|server|pages)" -x "\\.spec\\." --output-type dot . | dot -T svg > dependencygraph.svg` to generate graph

## ts-unused-exports

* `npm install -D ts-unused-exports`
* `npx ts-unused-exports tsconfig.json pages/*.tsx src/**/*.ts server/**/*.ts --showLineNumber --excludePathsFromReport=/pages/`

Pages are excluded from the report due to path-based routing/pages default export in Next.js
