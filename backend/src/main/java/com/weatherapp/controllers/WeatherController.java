weather-app
├── backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── weatherapp
│   │   │   │           ├── WeatherApplication.java
│   │   │   │           ├── controllers
│   │   │   │           │   └── WeatherController.java
│   │   │   │           ├── models
│   │   │   │           │   └── Weather.java
│   │   │   │           └── services
│   │   │   │               └── WeatherService.java
│   │   │   └── resources
│   │   │       └── application.properties
│   │   └── test
│   │       └── java
│   │           └── com
│   │               └── weatherapp
│   │                   └── WeatherApplicationTests.java
│   ├── build.gradle
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   └── WeatherDisplay.tsx
│   │   ├── hooks
│   │   │   └── useWeather.ts
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md