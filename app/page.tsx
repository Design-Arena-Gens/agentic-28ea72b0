export default function HomePage() {
  return (
    <main style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1 data-testid="title">Playwright Starter</h1>
      <p>Welcome to the Next.js + Playwright starter deployed on Vercel.</p>
      <a href="/docs" data-testid="docs-link">Documentation</a>
    </main>
  );
}
