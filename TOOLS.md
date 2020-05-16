# Tools

## sonarqube.org

* SonarQube (free Community edition)
* [Getting started](https://docs.sonarqube.org/latest/setup/overview/)
* run `docker run -it --rm --name sonarqube -p 9000:9000 sonarqube:8.3-community`
* Login http://localhost:9000 (admin/admin)
* Go though the project setup
* Go to Project Settings -> Quality Profiles -> Change TypeScript to "Sonar way recommended"
* Add `sonar-project.properties` to instruct SonarQube where to find code coverage report
