'use client'
import React from 'react';
import { BarChart3, CheckSquare, Eye, MessageSquare, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const PlatformWalkthrough = () => {
  const features = [
    {
      id: 1,
      title: "Real-time Stats Dashboard",
      description: "Monitor your tests, projects, and payouts with live analytics. Track performance metrics, completion rates, and earnings in real-time.",
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      stats: [
        { label: "Active Tests", value: "24", icon: <Activity className="w-4 h-4" /> },
        { label: "Projects", value: "12", icon: <CheckSquare className="w-4 h-4" /> },
        { label: "Total Earnings", value: "$1,250", icon: <DollarSign className="w-4 h-4" /> }
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Module Selector",
      description: "Choose from multiple assessment tracks including annotations, codes, and QA modules. Customize your workflow based on project requirements.",
      icon: <CheckSquare className="w-8 h-8 text-green-500" />,
      modules: [
        { name: "Annotations", status: "active", color: "bg-green-500" },
        { name: "Code Review", status: "pending", color: "bg-yellow-500" },
        { name: "QA Testing", status: "completed", color: "bg-blue-500" }
      ],
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Task Preview",
      description: "Preview tasks before starting with detailed requirements, time estimates, and complexity ratings. Make informed decisions about your workload.",
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      taskInfo: {
        title: "Data Annotation Task",
        timeEstimate: "45 minutes",
        complexity: "Medium",
        reward: "$25"
      },
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "Feedback Center",
      description: "Access comprehensive feedback on your submissions, track improvement areas, and communicate with reviewers through our integrated messaging system.",
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      feedback: {
        rating: 4.8,
        totalReviews: 156,
        recentFeedback: "Excellent attention to detail!"
      },
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Platform Walkthrough
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our platform streamlines your workflow with powerful tools designed for efficiency and success
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient} shadow-lg`}>
                    {feature.icon}
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      Feature {feature.id}
                    </span>
                    <h2 className="text-3xl font-bold text-slate-800">
                      {feature.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Feature-specific content */}
                {feature.id === 1 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {feature.stats.map((stat, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-slate-500 text-sm">{stat.label}</span>
                          {stat.icon}
                        </div>
                        <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {feature.id === 2 && (
                  <div className="space-y-3">
                    {feature.modules.map((module, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-slate-200">
                        <div className={`w-3 h-3 rounded-full ${module.color}`}></div>
                        <span className="font-medium text-slate-700">{module.name}</span>
                        <span className="text-sm text-slate-500 ml-auto capitalize">{module.status}</span>
                      </div>
                    ))}
                  </div>
                )}

                {feature.id === 3 && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <h3 className="font-semibold text-slate-800 mb-4">{feature.taskInfo.title}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-slate-500">Time Estimate</span>
                        <p className="font-medium text-slate-700">{feature.taskInfo.timeEstimate}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Complexity</span>
                        <p className="font-medium text-slate-700">{feature.taskInfo.complexity}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Reward</span>
                        <p className="font-medium text-green-600">{feature.taskInfo.reward}</p>
                      </div>
                    </div>
                  </div>
                )}

                {feature.id === 4 && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl font-bold text-slate-800">{feature.feedback.rating}</div>
                      <div>
                        <div className="text-sm text-slate-500">Average Rating</div>
                        <div className="text-sm text-slate-600">{feature.feedback.totalReviews} reviews</div>
                      </div>
                    </div>
                    <div className="italic text-slate-600 border-l-4 border-orange-500 pl-4">
                      "{feature.feedback.recentFeedback}"
                    </div>
                  </div>
                )}
              </div>

              {/* Image/Visual Side */}
              <div className="flex-1">
                <div className={`relative h-96 w-full rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl overflow-hidden`}>
                  {/* Placeholder for screenshot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4 opacity-50">
                        {feature.icon}
                      </div>
                      <p className="text-lg opacity-75">
                        Dashboard Screenshot
                      </p>
                      <p className="text-sm opacity-60">
                        Insert image here
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white bg-opacity-5 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformWalkthrough;