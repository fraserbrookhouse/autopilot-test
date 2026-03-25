'use client'

import { useState } from 'react'
import {
  Calculator as CalculatorIcon,
  TrendingUp,
  Users,
  Briefcase,
  Leaf,
  PoundSterling,
  Building,
  Heart,
  CheckCircle,
  ArrowLeft,
  Target,
  Award,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'

interface MetricInputs {
  localEmployment: number
  apprenticeships: number
  carbonReduction: number
  communityInvestment: number
  smeSubcontracting: number
  volunteerHours: number
}

interface MetricScore {
  rawScore: number
  weightedScore: number
  maxPoints: number
  color: string
  grade: string
}

interface MetricBreakdown {
  localEmployment: MetricScore
  apprenticeships: MetricScore
  carbonReduction: MetricScore
  communityInvestment: MetricScore
  smeSubcontracting: MetricScore
  volunteerHours: MetricScore
}

export default function Calculator() {
  const [inputs, setInputs] = useState<MetricInputs>({
    localEmployment: 25,
    apprenticeships: 3,
    carbonReduction: 15,
    communityInvestment: 50000,
    smeSubcontracting: 30,
    volunteerHours: 200
  })

  // Scoring logic - realistic but simplified for educational purposes
  const calculateMetricScore = (value: number, type: string): MetricScore => {
    let rawScore = 0
    let maxPoints = 10
    let weighting = 0

    switch (type) {
      case 'localEmployment':
        weighting = 0.20 // 20% weighting
        rawScore = Math.min(value / 5, 10) // 50% = max score
        break
      case 'apprenticeships':
        weighting = 0.15 // 15% weighting
        rawScore = Math.min(value * 1.5, 10) // ~7 positions = max score
        break
      case 'carbonReduction':
        weighting = 0.25 // 25% weighting
        rawScore = Math.min(value / 3, 10) // 30% reduction = max score
        break
      case 'communityInvestment':
        weighting = 0.15 // 15% weighting
        rawScore = Math.min(value / 10000, 10) // £100k = max score
        break
      case 'smeSubcontracting':
        weighting = 0.15 // 15% weighting
        rawScore = Math.min(value / 4, 10) // 40% = max score
        break
      case 'volunteerHours':
        weighting = 0.10 // 10% weighting
        rawScore = Math.min(value / 50, 10) // 500 hours = max score
        break
    }

    const weightedScore = rawScore * weighting

    // Determine color and grade
    let color = 'red'
    let grade = 'Poor'
    if (rawScore >= 8) {
      color = 'green'
      grade = 'Excellent'
    } else if (rawScore >= 6) {
      color = 'yellow'
      grade = 'Good'
    } else if (rawScore >= 4) {
      color = 'orange'
      grade = 'Fair'
    }

    return {
      rawScore,
      weightedScore,
      maxPoints,
      color,
      grade
    }
  }

  const calculateBreakdown = (): MetricBreakdown => {
    return {
      localEmployment: calculateMetricScore(inputs.localEmployment, 'localEmployment'),
      apprenticeships: calculateMetricScore(inputs.apprenticeships, 'apprenticeships'),
      carbonReduction: calculateMetricScore(inputs.carbonReduction, 'carbonReduction'),
      communityInvestment: calculateMetricScore(inputs.communityInvestment, 'communityInvestment'),
      smeSubcontracting: calculateMetricScore(inputs.smeSubcontracting, 'smeSubcontracting'),
      volunteerHours: calculateMetricScore(inputs.volunteerHours, 'volunteerHours')
    }
  }

  const breakdown = calculateBreakdown()
  const totalWeightedScore = Object.values(breakdown).reduce((sum, metric) => sum + metric.weightedScore, 0)
  const totalPossibleScore = Object.values(breakdown).reduce((sum, metric) => sum + metric.maxPoints, 0) * 0.10 +
                            Object.values(breakdown).reduce((sum, metric) => sum + metric.maxPoints, 0) * 0.15 +
                            Object.values(breakdown).reduce((sum, metric) => sum + metric.maxPoints, 0) * 0.15 +
                            Object.values(breakdown).reduce((sum, metric) => sum + metric.maxPoints, 0) * 0.15 +
                            Object.values(breakdown).reduce((sum, metric) => sum + metric.maxPoints, 0) * 0.20 +
                            Object.values(breakdown).reduce((sum, metric) => sum + metric.maxPoints, 0) * 0.25
  const overallPercentage = (totalWeightedScore / 10) * 100

  const getOverallGrade = () => {
    if (overallPercentage >= 80) return { grade: 'Excellent', color: 'green' }
    if (overallPercentage >= 65) return { grade: 'Good', color: 'blue' }
    if (overallPercentage >= 50) return { grade: 'Fair', color: 'yellow' }
    return { grade: 'Needs Improvement', color: 'red' }
  }

  const overallGrade = getOverallGrade()

  const updateInput = (key: keyof MetricInputs, value: number) => {
    setInputs(prev => ({ ...prev, [key]: value }))
  }

  const MetricCard = ({
    title,
    icon: Icon,
    value,
    onChange,
    unit,
    description,
    metric
  }: {
    title: string
    icon: any
    value: number
    onChange: (value: number) => void
    unit: string
    description: string
    metric: MetricScore
  }) => (
    <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${
          metric.color === 'green' ? 'bg-green-100' :
          metric.color === 'blue' ? 'bg-blue-100' :
          metric.color === 'yellow' ? 'bg-yellow-100' :
          metric.color === 'orange' ? 'bg-orange-100' :
          'bg-red-100'
        }`}>
          <Icon className={`w-5 h-5 ${
            metric.color === 'green' ? 'text-green-600' :
            metric.color === 'blue' ? 'text-blue-600' :
            metric.color === 'yellow' ? 'text-yellow-600' :
            metric.color === 'orange' ? 'text-orange-600' :
            'text-red-600'
          }`} />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Input
          </label>
          <div className="relative">
            <input
              type="number"
              value={value || ''}
              onChange={(e) => {
                const val = e.target.value === '' ? 0 : Number(e.target.value)
                onChange(val)
              }}
              className="w-full px-4 py-3 pr-16 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min="0"
              placeholder="0"
            />
            <span className="absolute right-4 top-3 text-gray-500 text-sm pointer-events-none">{unit}</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">{description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Score</span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              metric.color === 'green' ? 'bg-green-100 text-green-800' :
              metric.color === 'blue' ? 'bg-blue-100 text-blue-800' :
              metric.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
              metric.color === 'orange' ? 'bg-orange-100 text-orange-800' :
              'bg-red-100 text-red-800'
            }`}>
              {metric.grade}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                metric.color === 'green' ? 'bg-green-500' :
                metric.color === 'blue' ? 'bg-blue-500' :
                metric.color === 'yellow' ? 'bg-yellow-500' :
                metric.color === 'orange' ? 'bg-orange-500' :
                'bg-red-500'
              }`}
              style={{ width: `${(metric.rawScore / 10) * 100}%` }}
            ></div>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <div>Raw score: <strong>{metric.rawScore.toFixed(1)}/10 points</strong></div>
            <div>Weighted: <strong>{metric.weightedScore.toFixed(2)} points</strong></div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-8">
              <CalculatorIcon className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Social Value Calculator
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-3xl mx-auto">
              Discover how your social value commitments translate to tender scores.
              Input your metrics and see real-time calculations with detailed breakdowns.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Score Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white p-8 md:p-12 shadow-xl ring-1 ring-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Social Value Score
              </h2>

              <div className="text-6xl md:text-7xl font-extrabold text-blue-600 mb-4">
                {overallPercentage.toFixed(0)}%
              </div>

              <div className={`inline-block px-4 py-2 rounded-full text-lg font-semibold mb-6 ${
                overallGrade.color === 'green' ? 'bg-green-100 text-green-800' :
                overallGrade.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                overallGrade.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                overallGrade.color === 'orange' ? 'bg-orange-100 text-orange-800' :
                'bg-red-100 text-red-800'
              }`}>
                {overallGrade.grade}
              </div>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Based on typical UK public sector weighting, your social value score of <strong>{overallPercentage.toFixed(0)}%</strong> would
                contribute <strong>{((overallPercentage / 100) * 15).toFixed(1)} points</strong> to a tender where social value
                accounts for 15% of the evaluation criteria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Social Value Metrics
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Adjust the values below to see how different commitments impact your overall social value score.
              All calculations update in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MetricCard
              title="Local Employment"
              icon={Users}
              value={inputs.localEmployment}
              onChange={(value) => updateInput('localEmployment', value)}
              unit="%"
              description="Percentage of workforce from local area"
              metric={breakdown.localEmployment}
            />

            <MetricCard
              title="Apprenticeships"
              icon={Briefcase}
              value={inputs.apprenticeships}
              onChange={(value) => updateInput('apprenticeships', value)}
              unit="positions"
              description="Training positions created"
              metric={breakdown.apprenticeships}
            />

            <MetricCard
              title="Carbon Reduction"
              icon={Leaf}
              value={inputs.carbonReduction}
              onChange={(value) => updateInput('carbonReduction', value)}
              unit="%"
              description="CO₂ emissions reduction committed"
              metric={breakdown.carbonReduction}
            />

            <MetricCard
              title="Community Investment"
              icon={PoundSterling}
              value={inputs.communityInvestment}
              onChange={(value) => updateInput('communityInvestment', value)}
              unit="£"
              description="Annual spend on local initiatives"
              metric={breakdown.communityInvestment}
            />

            <MetricCard
              title="SME Subcontracting"
              icon={Building}
              value={inputs.smeSubcontracting}
              onChange={(value) => updateInput('smeSubcontracting', value)}
              unit="%"
              description="Contract value to local SMEs"
              metric={breakdown.smeSubcontracting}
            />

            <MetricCard
              title="Volunteer Hours"
              icon={Heart}
              value={inputs.volunteerHours}
              onChange={(value) => updateInput('volunteerHours', value)}
              unit="hours"
              description="Annual employee volunteer commitment"
              metric={breakdown.volunteerHours}
            />
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Your Score is Calculated
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Understanding the weighting and impact of each metric helps you optimize your social value strategy.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { key: 'carbonReduction', title: 'Carbon Reduction', weight: '25%', icon: Leaf, explanation: 'Environmental impact is heavily weighted due to net-zero commitments.' },
              { key: 'localEmployment', title: 'Local Employment', weight: '20%', icon: Users, explanation: 'Local job creation drives economic growth and is highly valued.' },
              { key: 'apprenticeships', title: 'Apprenticeships', weight: '15%', icon: Briefcase, explanation: 'Skills development addresses the UK productivity challenge.' },
              { key: 'communityInvestment', title: 'Community Investment', weight: '15%', icon: PoundSterling, explanation: 'Direct financial contribution to local community projects.' },
              { key: 'smeSubcontracting', title: 'SME Subcontracting', weight: '15%', icon: Building, explanation: 'Supporting small businesses strengthens the local economy.' },
              { key: 'volunteerHours', title: 'Volunteer Hours', weight: '10%', icon: Heart, explanation: 'Employee volunteering demonstrates genuine community engagement.' },
            ].map(({ key, title, weight, icon: Icon, explanation }) => {
              const metric = breakdown[key as keyof MetricBreakdown]
              return (
                <div key={key} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${
                        metric.color === 'green' ? 'bg-green-100' :
                        metric.color === 'blue' ? 'bg-blue-100' :
                        metric.color === 'yellow' ? 'bg-yellow-100' :
                        metric.color === 'orange' ? 'bg-orange-100' :
                        'bg-red-100'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          metric.color === 'green' ? 'text-green-600' :
                          metric.color === 'blue' ? 'text-blue-600' :
                          metric.color === 'yellow' ? 'text-yellow-600' :
                          metric.color === 'orange' ? 'text-orange-600' :
                          'text-red-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <p className="text-sm text-blue-600 font-medium">{weight} weighting</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{metric.rawScore.toFixed(1)}</div>
                      <div className="text-sm text-gray-500">/ 10 points</div>
                    </div>

                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{metric.weightedScore.toFixed(2)}</div>
                      <div className="text-sm text-gray-500">weighted points</div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600">{explanation}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-blue-600 p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Total Weighted Score</h3>
            </div>
            <div className="text-3xl font-bold mb-2">{totalWeightedScore.toFixed(2)} / 10.00 points</div>
            <p className="text-blue-100">
              This translates to a {overallPercentage.toFixed(0)}% social value score, which would typically
              contribute {((overallPercentage / 100) * 15).toFixed(1)} points in a tender where social value
              accounts for 15% of the evaluation criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Tips for Improvement */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tips for Improvement
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Based on your current score, here are some targeted recommendations to strengthen your social value proposition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Carbon Reduction Focus
              </h3>
              <p className="text-gray-600 leading-relaxed">
                With 25% weighting, carbon reduction offers the biggest impact. Consider setting ambitious but achievable targets around renewable energy, waste reduction, and sustainable transport.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Local Employment Strategy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Target 40-50% local employment for maximum scores. Partner with local job centers, colleges, and employment agencies to build a strong local recruitment pipeline.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Evidence-Based Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Procurement teams value verifiable commitments. Develop clear KPIs, measurement systems, and reporting processes to demonstrate accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your
            <span className="block text-blue-200">Social Value Strategy?</span>
          </h2>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
            This calculator provides educational estimates. Get professional support to develop
            a winning social value strategy tailored to your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5">
              Get Professional Support
            </button>
            <Link
              href="/"
              className="rounded-full border-2 border-blue-200 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-200 hover:text-blue-600"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}