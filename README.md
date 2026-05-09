# AI Powered SEO SaaS

A comprehensive SEO analysis SaaS platform built with Next.js, Convex, and Clerk. This application provides automated SEO audits, competitor analysis, keyword insights, and AI-powered recommendations to help businesses optimize their online presence.

## Features

- **Automated SEO Analysis**: Perform deep SEO audits on websites with comprehensive metrics
- **Competitor Analysis**: Compare your site against competitors with detailed strength assessments
- **Keyword Research**: Discover high-value keywords and analyze their performance
- **Real-time Reports**: Generate detailed SEO reports with visualizations and actionable insights
- **AI Chat Integration**: Get AI-powered explanations and recommendations for your SEO data
- **Brightdata Integration**: Leverage Brightdata's proxy network for reliable web scraping
- **User Authentication**: Secure user management with Clerk authentication
- **Dashboard**: Intuitive dashboard for managing analyses, reports, and subscriptions
- **Pricing Plans**: Flexible subscription tiers for different user needs

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Convex (database and serverless functions)
- **Authentication**: Clerk
- **UI Components**: Radix UI, Lucide Icons
- **Charts**: Recharts
- **Scraping**: Brightdata API
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Convex account
- Clerk account
- Brightdata account (for scraping features)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brightdata-seo-saas
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Brightdata
BRIGHTDATA_API_KEY=
BRIGHTDATA_ZONE=
```

4. Initialize Convex:
```bash
npx convex dev --once
```

5. Run the development server:
```bash
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

Run the Convex migration to set up the database schema:
```bash
npx convex run db:generate
```

## Project Structure

```
brightdata-seo-saas/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── pricing/           # Pricing page
├── components/            # Reusable UI components
├── convex/               # Convex backend functions and schema
├── lib/                  # Utility functions and schemas
├── prompts/              # AI prompts
└── public/               # Static assets
```

## Usage

1. **Sign Up/Login**: Create an account using Clerk authentication
2. **Start Analysis**: Enter a website URL to begin SEO analysis
3. **View Reports**: Access detailed reports in the dashboard
4. **AI Chat**: Use the integrated AI chat for insights and recommendations
5. **Manage Subscription**: Upgrade plans in the pricing section

## API Endpoints

- `POST /api/chat` - AI chat functionality
- Convex functions handle scraping, analysis, and data storage

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy the application

### Convex Deployment

```bash
npx convex deploy
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please join our [Discord community](https://discord.gg/your-server) or create an issue in this repository.

## Acknowledgments

- [Convex](https://convex.dev/) for the backend infrastructure
- [Clerk](https://clerk.com/) for authentication
- [Brightdata](https://brightdata.com/) for web scraping services
- [Next.js](https://nextjs.org/) for the React framework
- Follow [Convex on GitHub](https://github.com/get-convex/), star and contribute to the open-source implementation of Convex.
