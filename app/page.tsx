import {
  CheckCircle,
  BarChart3,
  Shield,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Target,
  ArrowRight,
  Calculator
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Win More Public Sector
              <span className="block text-blue-200">Contracts with Social Value</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Measure, report, and maximise your social value impact. Help UK organisations
              demonstrate real community benefits and secure more public sector opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5">
                Get Started Today
              </button>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-200 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-200 hover:text-blue-600"
              >
                <Calculator className="w-4 h-4" />
                Try the Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Social Value Matters Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Social Value Matters
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Social value requirements are transforming public procurement.
              Organizations that can demonstrate meaningful community impact win more contracts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Measure Impact
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Track and quantify your social value contributions with robust measurement frameworks
                that capture real community benefits.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Report Effectively
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Generate compelling reports that clearly communicate your social value story
                to procurement teams and stakeholders.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Maximize Value
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Identify opportunities to increase your social impact while delivering
                better outcomes for communities and your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Feature Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                See How Social Value Scoring Works
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our interactive calculator demonstrates exactly how social value metrics translate
                to tender scores. Input your commitments and see real-time calculations with
                step-by-step breakdowns.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Understanding the weighting of different metrics — from carbon reduction to local
                employment — helps you optimize your social value strategy and maximize your
                competitive advantage.
              </p>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5" />
                Try the Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-md ring-1 ring-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Interactive Calculator
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">6</div>
                    <div className="text-sm text-gray-600">Key Metrics</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">Live</div>
                    <div className="text-sm text-gray-600">Updates</div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Input your social value commitments and instantly see how they translate
                  to tender scores, complete with visual indicators and detailed explanations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Government Procurement Context */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                UK Public Sector Transformation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The UK government is revolutionizing public procurement. Social value is no longer
                optional—it's a requirement that can make or break your tender success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Organizations that can demonstrate measurable social impact, from local employment
                to environmental benefits, are winning more contracts and building stronger
                community relationships.
              </p>
              <div className="flex items-center gap-3 text-blue-600 font-semibold">
                <span>Learn about social value requirements</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-md ring-1 ring-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                  10-20%
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-2">
                  of Tender Scores
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Social value typically accounts for 10-20% of public sector tender evaluation criteria,
                  often determining the winning bid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our platform delivers measurable results for organizations serious about social value impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Higher Win Rates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Increase your public sector tender success with compelling social value propositions.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl mb-4">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Compliance Ready
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Meet all UK social value regulations with automated reporting and tracking.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-xl mb-4">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Demonstrate real, measurable benefits to local communities and stakeholders.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-xl mb-4">
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Strategic Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Build long-term value through sustainable social impact initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Independent Validation USP Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-12 shadow-xl ring-1 ring-blue-200 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply blur-2xl opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply blur-2xl opacity-30"></div>

              <div className="relative text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Independent Validation & Verification
                </h2>
                <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Unlike other platforms, our social value measurements are independently validated.
                  This gives procurement teams confidence in your claims and sets you apart from competitors
                  who rely on self-reported metrics.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
                    Learn About Our Validation Process
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block text-blue-400">Social Value Impact?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
            Join forward-thinking organizations who are already winning more public sector contracts
            through measurable social value delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5">
              Start Your Free Trial
            </button>
            <button className="rounded-full border-2 border-gray-400 px-8 py-4 text-sm font-semibold text-gray-300 transition-all hover:bg-white hover:text-gray-900">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-white mb-4">Social Value Portal</h3>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Helping UK organisations measure, report, and maximise social value to win
                public sector contracts and create lasting community impact.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                Platform
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                Support
              </h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-center">
              © 2026 Social Value Portal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}