# ReviewBoost Pro

ReviewBoost Pro is a comprehensive review management platform that helps businesses collect, monitor, and leverage customer reviews to build a stronger online presence.

## Features

- Smart QR code generation for each business location
- Review monitoring and analytics dashboard
- Customer feedback management
- Multi-location support
- Real-time review tracking
- Custom branding options

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Firebase (Authentication & Realtime Database)
- Vite
- React Router
- Zustand (State Management)
- Chart.js

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/review-boost-pro.git
```

2. Install dependencies:
```bash
cd review-boost-pro
npm install
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env with your Firebase configuration
# NEVER commit the .env file to version control!
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

The following environment variables are required:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ **IMPORTANT**: Never commit your actual `.env` file to version control. The `.env.example` file serves as a template with dummy values.

## Security Best Practices

1. Always use environment variables for sensitive configuration
2. Keep the `.env` file out of version control
3. Use Firebase Security Rules to restrict access to your database
4. Implement proper authentication and authorization
5. Regular security audits and updates

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request