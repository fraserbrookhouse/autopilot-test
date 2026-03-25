export default function Home() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', color: '#1A1A1A', backgroundColor: '#FFFFFF' }}>

      {/* Hero Section */}
      <section style={{ backgroundColor: '#1B2A4A', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            Measure, Report & Maximise Your Social Value
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2rem', opacity: 0.9, lineHeight: 1.6 }}>
            UK public sector contracts now require demonstrable social value. Social Value Portal helps organisations track, report, and win with confidence.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#FFFFFF',
              color: '#1B2A4A',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '14px 36px',
              borderRadius: '4px',
              textDecoration: 'none',
            }}
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Why Social Value Matters */}
      <section style={{ padding: '72px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', color: '#1B2A4A', marginBottom: '48px' }}>
            Why Social Value Matters
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: '⚖️',
                title: 'Public Services (Social Value) Act 2012',
                body: 'UK law requires public bodies to consider social, economic, and environmental wellbeing in procurement. Compliance is not optional.',
              },
              {
                icon: '📋',
                title: 'Government Contract Requirements',
                body: 'Central government mandates social value in all major contracts. Failing to demonstrate it puts bids at a serious disadvantage.',
              },
              {
                icon: '🏆',
                title: 'Competitive Advantage',
                body: 'Organisations that can quantify and communicate their social impact consistently outperform competitors in tender evaluations.',
              },
              {
                icon: '🌍',
                title: 'Community Impact',
                body: 'Beyond compliance, measuring social value helps organisations understand and amplify the real difference they make in communities.',
              },
            ].map((item) => (
              <div key={item.title} style={{ padding: '28px', borderRadius: '8px', border: '1px solid #E0E6F0', backgroundColor: '#FFFFFF' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#1B2A4A' }}>{item.title}</h3>
                <p style={{ lineHeight: 1.6, color: '#1A1A1A' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Government Focus */}
      <section style={{ padding: '72px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#1B2A4A', marginBottom: '20px' }}>
              Social Value is Now Central to UK Procurement
            </h2>
            <p style={{ lineHeight: 1.8, color: '#1A1A1A', marginBottom: '16px' }}>
              Since the government's 2020 <strong>Procurement Policy Note 06/20</strong>, social value must be explicitly evaluated in all central government contracts — typically accounting for <strong>10–20% of the overall tender score</strong>.
            </p>
            <p style={{ lineHeight: 1.8, color: '#1A1A1A', marginBottom: '16px' }}>
              Local authorities, NHS trusts, and other public bodies are following suit. For suppliers, this means social value is no longer a nice-to-have — it is a <strong>critical differentiator</strong> that directly affects whether you win or lose contracts.
            </p>
            <p style={{ lineHeight: 1.8, color: '#1A1A1A' }}>
              Social Value Portal provides the framework, tools, and evidence base to help you respond with confidence.
            </p>
          </div>
          <div style={{ backgroundColor: '#1B2A4A', color: '#FFFFFF', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '8px' }}>10–20%</div>
            <div style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: '24px' }}>of tender evaluation scores are now allocated to social value in UK government contracts</div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px', fontSize: '0.95rem', opacity: 0.75 }}>
              Source: UK Government Procurement Policy Note 06/20
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section style={{ padding: '72px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', color: '#1B2A4A', marginBottom: '48px' }}>
            Key Benefits
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { icon: '📈', title: 'Win More Contracts', body: 'Strengthen your bids with verified social value evidence that evaluators can trust.' },
              { icon: '📊', title: 'Measure Real Impact', body: 'Go beyond anecdote. Quantify your community contributions using recognised national frameworks.' },
              { icon: '✅', title: 'Meet Compliance Requirements', body: 'Stay ahead of evolving legislation and procurement policy with built-in compliance tools.' },
              { icon: '🎯', title: 'Stand Out in Tenders', body: 'Differentiate your organisation with a clear, compelling social value narrative backed by data.' },
            ].map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  padding: '32px 24px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(27, 42, 74, 0.05)',
                  border: '1px solid #E0E6F0',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1B2A4A', marginBottom: '10px' }}>{benefit.title}</h3>
                <p style={{ color: '#1A1A1A', lineHeight: 1.6, fontSize: '0.95rem' }}>{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Validation USP */}
      <section style={{ padding: '72px 24px', backgroundColor: 'rgba(27, 42, 74, 0.05)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            padding: '48px 40px',
            borderRadius: '12px',
            border: '2px solid #1B2A4A',
            boxShadow: '0 8px 32px rgba(27, 42, 74, 0.15)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏆</div>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#1B2A4A', marginBottom: '24px' }}>
              The Only Independent Validation You Can Trust
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#1A1A1A', lineHeight: 1.7, marginBottom: '20px' }}>
              <strong>Social Value Portal is the only company that independently validates the social value created by organisations.</strong> This means our data can be trusted and used safely in official reporting, audits, and tender submissions.
            </p>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.6, marginBottom: '32px' }}>
              When procurement evaluators review your social value claims, they need confidence in your data. Our independent validation process provides that assurance, giving you a significant competitive advantage over suppliers using self-reported or unverified metrics.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 24px', backgroundColor: 'rgba(27, 42, 74, 0.1)', borderRadius: '6px' }}>
              <span style={{ fontSize: '1.5rem' }}>✓</span>
              <span style={{ fontWeight: 700, color: '#1B2A4A' }}>Independently Verified • Audit-Ready • Tender-Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" style={{ padding: '80px 24px', backgroundColor: '#1B2A4A', color: '#FFFFFF', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '20px' }}>
            Ready to Demonstrate Your Social Value?
          </h2>
          <p style={{ fontSize: '1.15rem', opacity: 0.88, lineHeight: 1.7, marginBottom: '36px' }}>
            Join thousands of organisations across the UK using Social Value Portal to measure impact, win contracts, and build a better future for their communities.
          </p>
          <a
            href="mailto:hello@socialvalueportal.com"
            style={{
              display: 'inline-block',
              backgroundColor: '#FFFFFF',
              color: '#1B2A4A',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '14px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
              marginRight: '16px',
            }}
          >
            Contact Us
          </a>
          <a
            href="#"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '1rem',
              padding: '14px 40px',
              borderRadius: '4px',
              textDecoration: 'none',
              border: '2px solid rgba(255,255,255,0.6)',
            }}
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111D30', color: 'rgba(255,255,255,0.5)', textAlign: 'center', padding: '24px' }}>
        <p style={{ margin: 0, fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Social Value Portal. All rights reserved.
        </p>
      </footer>

    </main>
  )
}
