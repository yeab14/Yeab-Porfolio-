export const projectsData = [
  {
    id: 1,
    name: "Booking platform",
    client: "Zagoal",
    role: "Lead Backend Software Engineer",
    summary:
      "The platform books stays, activities, dining, entertainment, and transport. Each of those is its own service.",
    paragraphs: [
      "Requests that need an immediate answer go through NestJS and REST. Work that can wait goes to Kafka. The booking and the event are saved in the same database transaction, using the outbox pattern. An idempotency key stops a retry from creating a second booking.",
      "If a provider is slow, the service uses a circuit breaker, backoff, and a limit on how much work it accepts. Queues have priorities and capacity limits. Releases go out gradually. We follow requests with trace IDs, health checks, and metrics. The data layer is PostgreSQL, Redis, and Neo4j. Services run in Docker, and CI/CD is on GCP.",
    ],
    tools: [
      "NestJS",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Bull Queue",
      "Neo4j",
      "Docker",
      "GCP",
    ],
  },
  {
    id: 2,
    name: "Online shop and port delivery",
    client: "Inspur",
    role: "Software Engineer",
    summary:
      "Two related systems: an online shop, and logistics for a port delivery system.",
    paragraphs: [
      "The shop services are Spring Boot on MySQL. Schema changes go through Liquibase. Redis is the cache. Nginx and Docker sit in front of the app.",
      "The port delivery services use PostgreSQL, Spring Cloud Config, and Kafka. I also worked on their performance. A second shop system handles live orders and payments, again with Redis, Liquibase, and Nginx.",
    ],
    tools: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "PostgreSQL",
      "MySQL",
      "Kafka",
      "Redis",
      "Liquibase",
      "Nginx",
      "Docker",
    ],
  },
  {
    id: 3,
    name: "Housing, credit, and taxi admin",
    client: "Kegebrew Technology Solution",
    role: "Software Developer",
    summary:
      "Three products: a housing site, a consumer credit system, and an admin panel for taxi bookings.",
    paragraphs: [
      "I built the Node.js backends for all three. The taxi admin shows live booking data. The screens were React and Next.js, with Apollo Client and Redux.",
    ],
    tools: ["Node.js", "React", "Next.js", "Apollo Client", "Redux"],
  },
];
