"use client"

import { useState } from 'react'
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Trophy,
  BookOpen,
  Target,
  Users,
  Award,
  Lightbulb,
  TrendingUp,
  Shield
} from 'lucide-react'

interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  category: string
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: "What is social value in UK public procurement?",
    options: [
      "The lowest cost option for taxpayers",
      "Additional benefits to society beyond the main contract purpose",
      "The environmental impact of a contract",
      "The profit margin for contractors"
    ],
    correctAnswer: 1,
    explanation: "Social value refers to the wider benefits to society that public sector organisations can achieve through their procurement activities, beyond the direct purpose of the contract.",
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "When was the Public Services (Social Value) Act introduced in the UK?",
    options: [
      "2010",
      "2012",
      "2014",
      "2016"
    ],
    correctAnswer: 1,
    explanation: "The Public Services (Social Value) Act 2012 requires public sector organisations to consider social value when commissioning services worth more than £173k.",
    category: "Legislation"
  },
  {
    id: 3,
    question: "What percentage of tender evaluation criteria typically focuses on social value?",
    options: [
      "5-8%",
      "10-20%",
      "25-30%",
      "35-40%"
    ],
    correctAnswer: 1,
    explanation: "Social value typically accounts for 10-20% of public sector tender evaluation criteria, making it a significant factor in winning contracts.",
    category: "Scoring"
  },
  {
    id: 4,
    question: "Which of these is NOT a key social value theme?",
    options: [
      "Creating jobs and skills opportunities",
      "Supporting local economic growth",
      "Maximizing profit margins",
      "Protecting the environment"
    ],
    correctAnswer: 2,
    explanation: "The key social value themes focus on community benefits: jobs & skills, local growth, environment, wellbeing, and social cohesion. Profit maximization is not a social value theme.",
    category: "Themes"
  },
  {
    id: 5,
    question: "What is the main advantage of independent social value validation?",
    options: [
      "It costs less than self-reporting",
      "It builds credibility and trust with procurement teams",
      "It requires less documentation",
      "It's not required by law"
    ],
    correctAnswer: 1,
    explanation: "Independent validation gives procurement teams confidence in your social value claims and sets you apart from competitors who rely on self-reported metrics.",
    category: "Validation"
  },
  {
    id: 6,
    question: "Which sector benefits most from demonstrating strong social value?",
    options: [
      "Private companies selling to consumers",
      "International corporations",
      "Organizations bidding for public sector contracts",
      "Small local businesses only"
    ],
    correctAnswer: 2,
    explanation: "Organizations of all sizes bidding for public sector contracts benefit most from demonstrating strong social value, as it's a key evaluation criterion in public procurement.",
    category: "Applications"
  },
  {
    id: 7,
    question: "What is a common mistake organizations make with social value reporting?",
    options: [
      "Measuring too many different outcomes",
      "Relying solely on self-reported metrics without verification",
      "Focusing on environmental benefits",
      "Including local employment data"
    ],
    correctAnswer: 1,
    explanation: "Many organizations undermine their credibility by relying solely on self-reported metrics. Independent validation and verification significantly strengthen social value propositions.",
    category: "Best Practices"
  },
  {
    id: 8,
    question: "Which of these is a measurable social value outcome?",
    options: [
      "Feeling good about helping the community",
      "Having good intentions for local impact",
      "Creating 25 apprenticeships for local young people",
      "Planning to support local businesses"
    ],
    correctAnswer: 2,
    explanation: "Social value must be measurable and specific. 'Creating 25 apprenticeships for local young people' is a concrete, quantifiable outcome that can be verified.",
    category: "Measurement"
  },
  {
    id: 9,
    question: "How should organizations approach social value in their tenders?",
    options: [
      "Add it as an afterthought to meet requirements",
      "Copy examples from other successful bids",
      "Integrate it strategically into their core service delivery",
      "Only focus on the cheapest social value options"
    ],
    correctAnswer: 2,
    explanation: "The most successful approach is to integrate social value strategically into core service delivery, making it a fundamental part of how you deliver value, not an add-on.",
    category: "Strategy"
  },
  {
    id: 10,
    question: "What happens to organizations that excel at social value delivery?",
    options: [
      "They typically have higher costs and lower profits",
      "They win more public sector contracts and build stronger community relationships",
      "They must focus less on service quality",
      "They are only suitable for small local contracts"
    ],
    correctAnswer: 1,
    explanation: "Organizations that excel at social value delivery typically win more public sector contracts, build stronger community relationships, and create sustainable competitive advantages.",
    category: "Benefits"
  }
]

export default function SocialValueQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null || showExplanation) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === quizData[currentQuestion].correctAnswer
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = isCorrect
    setAnswers(newAnswers)

    if (isCorrect) {
      setScore(score + 1)
    }

    setTimeout(() => {
      setShowExplanation(true)
    }, 500)
  }

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswers([])
    setQuizCompleted(false)
  }

  const getScoreMessage = () => {
    const percentage = (score / quizData.length) * 100
    if (percentage >= 90) return { title: "Outstanding!", message: "You're a social value expert!", icon: Trophy, color: "text-yellow-600" }
    if (percentage >= 70) return { title: "Well Done!", message: "Strong understanding of social value", icon: Award, color: "text-blue-600" }
    if (percentage >= 50) return { title: "Good Start!", message: "You're on the right track", icon: Target, color: "text-green-600" }
    return { title: "Keep Learning!", message: "There's room for improvement", icon: BookOpen, color: "text-purple-600" }
  }

  if (quizCompleted) {
    const scoreMessage = getScoreMessage()
    const ScoreIcon = scoreMessage.icon

    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="relative py-20 md:py-28">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-6">
            <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-2xl ring-1 ring-white/20">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-2xl mb-6`}>
                  <ScoreIcon className={`w-10 h-10 ${scoreMessage.color}`} />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Quiz Complete!
                </h1>

                <div className="text-6xl md:text-7xl font-extrabold text-blue-600 mb-2">
                  {score}/{quizData.length}
                </div>

                <p className="text-xl font-semibold text-gray-900 mb-2">
                  {scoreMessage.title}
                </p>

                <p className="text-lg text-gray-600 mb-8">
                  {scoreMessage.message}
                </p>

                {/* Score Breakdown */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {answers.map((correct, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                      <span className="text-sm font-medium text-gray-700">Q{index + 1}</span>
                      {correct ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border border-blue-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Ready to Put Your Knowledge to Work?
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      Discover how our Social Value Portal can help your organization win more public sector contracts
                      through measurable, independently validated social impact.
                    </p>
                    <button className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5">
                      Get Started with Social Value Portal
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={resetQuiz}
                      className="rounded-full border-2 border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
                    >
                      Retake Quiz
                    </button>
                    <a
                      href="/"
                      className="rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Back to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const question = quizData[currentQuestion]
  const progress = ((currentQuestion + 1) / quizData.length) * 100

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
      <div className="relative py-20 md:py-28">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-white mb-2">
              <span className="text-sm font-medium">Question {currentQuestion + 1} of {quizData.length}</span>
              <span className="text-sm font-medium">{question.category}</span>
            </div>
            <div className="w-full bg-blue-800 rounded-full h-2">
              <div
                className="bg-white rounded-full h-2 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="rounded-3xl bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-2xl ring-1 ring-white/20">
            {/* Question */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {question.question}
              </h1>

              {/* Answer Options */}
              <div className="space-y-4">
                {question.options.map((option, index) => {
                  let buttonClasses = "w-full p-6 rounded-2xl text-left font-semibold transition-all duration-300 shadow-md ring-1 ring-gray-100"

                  if (selectedAnswer === null) {
                    buttonClasses += " bg-white text-gray-900 hover:shadow-xl hover:-translate-y-1 hover:ring-blue-200"
                  } else if (index === question.correctAnswer) {
                    buttonClasses += " bg-green-100 text-green-800 ring-green-200 shadow-lg"
                  } else if (index === selectedAnswer && index !== question.correctAnswer) {
                    buttonClasses += " bg-red-100 text-red-800 ring-red-200 shadow-lg"
                  } else {
                    buttonClasses += " bg-gray-100 text-gray-500"
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={selectedAnswer !== null}
                      className={buttonClasses}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg leading-relaxed">{option}</span>
                        {selectedAnswer !== null && (
                          <div className="ml-4 flex-shrink-0">
                            {index === question.correctAnswer ? (
                              <CheckCircle className="w-6 h-6 text-green-600" />
                            ) : index === selectedAnswer ? (
                              <XCircle className="w-6 h-6 text-red-500" />
                            ) : null}
                          </div>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-8 p-6 rounded-2xl bg-blue-50 border border-blue-200">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Explanation</h3>
                    <p className="text-lg text-blue-800 leading-relaxed">{question.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            {showExplanation && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">Score: {score}/{currentQuestion + 1}</span>
                </div>

                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:-translate-y-0.5"
                >
                  {currentQuestion < quizData.length - 1 ? (
                    <>
                      Next Question
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      See Results
                      <Trophy className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}