import {
  BookOpen,
  Scale,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Calendar,
  FileText,
  Building,
  ArrowRight,
  Home,
  Briefcase,
  Award,
  Heart
} from 'lucide-react'
import Link from 'next/link'

export default function SocialValueRequirements() {
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
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-100 mb-6">
              <Scale className="w-4 h-4" />
              UK Public Sector Procurement
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Social Value Requirements
              <span className="block text-blue-200">in Public Procurement</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Understanding the legal framework, requirements, and opportunities that shape
              how UK public sector organisations evaluate and award contracts based on social value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blue-200 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-200 hover:text-blue-600"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <Target className="w-4 h-4" />
                Try Our Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Social Value Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is Social Value?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Social value refers to the wider benefits to society that can be delivered through
              public sector procurement beyond the core service or product being purchased.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Benefits
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Creating employment, training opportunities, and support for local communities,
                particularly disadvantaged groups and areas.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-6">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Environmental Impact
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Reducing carbon emissions, promoting sustainability, and contributing to
                environmental protection and climate change objectives.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-6">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Economic Growth
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Supporting local businesses, innovation, and economic development within
                communities through procurement decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Legal Framework
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The Public Services (Social Value) Act 2012 requires public bodies to consider
                social value in their procurement processes. This landmark legislation transformed
                how UK public sector organisations approach purchasing decisions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Act applies to all services contracts above certain thresholds and requires
                commissioners to think about how they can improve the economic, environmental,
                and social well-being of their area.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Mandatory consideration for services contracts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Applies to contracts above EU procurement thresholds</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Must be considered at pre-procurement stage</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-md ring-1 ring-gray-100">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6">
                  <Scale className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Public Services Act 2012
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">£189k</div>
                    <div className="text-sm text-gray-600">Services Threshold</div>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <div className="text-2xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Coverage</div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  All relevant public bodies must consider social value when commissioning
                  services, creating opportunities for meaningful community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works in Practice Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Social Value Works in Procurement
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Understanding the practical implementation of social value requirements
              in tender processes and evaluation criteria.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Tender Requirements
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Public sector organisations include social value criteria in their tender documentation,
                typically worth 10-20% of the total evaluation score.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Weighted evaluation criteria</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Specific commitments required</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Evidence-based proposals</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Measurement & Monitoring
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Successful suppliers must demonstrate and track their social value delivery
                throughout the contract period with regular reporting.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Quarterly progress reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">KPI tracking and validation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Impact assessment reviews</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-6">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contract Performance
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Social value commitments become contractual obligations, with performance
                monitored alongside service delivery throughout the contract term.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Contractual obligations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Performance management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Contract variations if needed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 md:p-12 shadow-xl ring-1 ring-blue-200 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply blur-2xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply blur-2xl opacity-30"></div>

            <div className="relative text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Typical Social Value Weighting
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10-20%</div>
                  <div className="text-blue-200">of Total Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">£1 in £3</div>
                  <div className="text-blue-200">Public Spending</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-blue-200">Compliance Required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Social Value Areas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Common themes and measurement areas that public sector organisations
              prioritise in their social value requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl mb-4">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Employment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Creating jobs, apprenticeships, and training opportunities for local people and disadvantaged groups.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-xl mb-4">
                <Building className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Supply Chain
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting local businesses, SMEs, and social enterprises through procurement spend.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-xl mb-4">
                <Heart className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Environment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reducing carbon emissions, waste reduction, and promoting sustainable practices.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-xl mb-4">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting voluntary sector, skills development, and community infrastructure improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Navigate Social Value?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Understanding the requirements is just the beginning. Let us help you
              measure, report, and maximise your social value impact.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <Target className="w-5 h-5" />
              Try Our Calculator
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full border-2 border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-100"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}