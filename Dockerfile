FROM maven:3.8.2-jdk-11 AS build
COPY . .
RUN mvn clean package -Pprod -DskipTests


FROM openjdk:11-jdk-slim
COPY --from=build /target/IHSA-0.0.1-SNAPSHOT.jar IHSA.jar
CMD ["java", "-var", "IHSA.jar"]
