# Taxigo - Taxi Booking Website

Taxigo is a modern taxi booking website built using Next.js. It provides a seamless experience for users to book taxis for their journeys. The website incorporates several key features, including a dynamic map using Mapbox, and user authentication using the Clerk authentication provider. 
![web-screenshot-26-09-2023](https://github.com/ShivNandanJha/taxigo/assets/115362063/ba719adc-9eea-472d-8a73-c7aa9b426817)

## Features

- **Map Integration**: Taxigo utilizes Mapbox to provide a dynamic and interactive map interface. Users can easily locate their current position, select pickup and drop-off points, and view available taxis in real-time.

- **User Authentication**: We've integrated Clerk as the authentication provider, ensuring secure and hassle-free user registration and login. This feature enables users to manage their bookings and access personalized services.

- **Booking Management**: Users can easily create, modify, and cancel bookings. The website also provides a history of past journeys and receipts for reference.

- **Real-time Updates**: Taxigo offers real-time updates on the availability and location of taxis, ensuring users can make informed decisions when booking a ride.

- **Responsive Design**: The website is designed to be fully responsive, ensuring a seamless experience on a variety of devices, including smartphones, tablets, and desktops.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/ShivNandanJha/taxigo.git
   ```

2. Navigate to the project folder:

   ```shell
   cd taxigo
   ```

3. Install the project dependencies:

   ```shell
   npm install
   ```

### Configuration

To configure Taxigo for your specific use case, you'll need to set up the following environment variables:

- **MAPBOX_API_KEY**: Sign up for a Mapbox API key at [mapbox.com](https://www.mapbox.com/), and set it as an environment variable in a `.env.local` file.

- **CLERK_API_KEY**: Sign up for a Clerk API key at [clerk.dev](https://clerk.dev/), and set it as an environment variable in the same `.env.local` file.

### Running the Application

Once you've completed the installation and configuration steps, you can run Taxigo locally using the following command:

```shell
npm run dev
```


The website will be available at [http://localhost:3000](http://localhost:3000).

## Contributing

We welcome contributions from the community! If you'd like to contribute to Taxigo, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- We would like to express our gratitude to the open-source community for their invaluable contributions to the technologies used in this project.


Happy taxi booking! 🚕🌟






This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
