import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import { t } from '../translations'

export default function Community() {
  const { lang } = useLanguage()
  const isUr = lang === 'ur'
  const [activeTab, setActiveTab] = useState('forum')

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-4xl font-bold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                LeafLens Community
              </h1>
              <p className={`mt-2 text-lg text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Connect with farmers, experts, and plant enthusiasts worldwide
              </p>
            </div>
          </div>
        </header>

        <div className="mb-8">
          <div className="border-b border-leaf-200">
            <nav className="flex space-x-8">
              {[
                { id: 'forum', label: 'Forum', icon: '💬' },
                { id: 'success', label: 'Success Stories', icon: '🌟' },
                { id: 'experts', label: 'Expert Corner', icon: '👨‍🌾' },
                { id: 'events', label: 'Events', icon: '📅' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-leaf-600 text-leaf-600'
                      : 'border-transparent text-earth-500 hover:text-earth-700'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <main>
          {activeTab === 'forum' && (
            <div className="space-y-6">
              <section className="pm-card p-8">
                <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                  Community Forum
                </h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className={`text-lg font-semibold text-leaf-800 ${isUr ? 'font-urdu' : ''}`}>
                      Recent Discussions
                    </h3>
                    
                    {[
                      {
                        title: "Tomato blight treatment success!",
                        author: "Ahmed Khan",
                        replies: 23,
                        time: "2 hours ago",
                        category: "Success Stories"
                      },
                      {
                        title: "Help identifying this cucumber disease",
                        author: "Fatima Raza",
                        replies: 15,
                        time: "5 hours ago",
                        category: "Disease Identification"
                      },
                      {
                        title: "Best practices for cotton leaf curl",
                        author: "Muhammad Ali",
                        replies: 34,
                        time: "1 day ago",
                        category: "Prevention Tips"
                      }
                    ].map((post, index) => (
                      <div key={index} className="border border-leaf-200 rounded-xl p-4 hover:bg-leaf-50 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className={`font-medium text-leaf-800 ${isUr ? 'font-urdu' : ''}`}>
                            {post.title}
                          </h4>
                          <span className="text-xs bg-leaf-100 text-leaf-700 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-earth-600">
                          <span>{post.author}</span>
                          <span>{post.time}</span>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-earth-500">
                          <span>💬 {post.replies} replies</span>
                          <span>👍 45 likes</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className={`text-lg font-semibold text-leaf-800 ${isUr ? 'font-urdu' : ''}`}>
                      Popular Topics
                    </h3>
                    
                    <div className="space-y-3">
                      {[
                        { topic: "Organic farming solutions", posts: 156 },
                        { topic: "Seasonal disease prevention", posts: 89 },
                        { topic: "Irrigation and plant health", posts: 67 },
                        { topic: "Pest management strategies", posts: 124 },
                        { topic: "Soil health and nutrition", posts: 93 }
                      ].map((topic, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-leaf-50 rounded-lg">
                          <span className={`font-medium text-leaf-700 ${isUr ? 'font-urdu' : ''}`}>
                            {topic.topic}
                          </span>
                          <span className="text-sm text-earth-600">
                            {topic.posts} posts
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="pm-btn-primary w-full mt-4">
                      Start New Discussion
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'success' && (
            <div className="space-y-6">
              <section className="pm-card p-8">
                <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                  Success Stories
                </h2>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      farmer: "Rajesh Patel",
                      location: "Gujarat, India",
                      crop: "Cotton",
                      problem: "Leaf curl disease",
                      solution: "Early detection with LeafLens",
                      result: "Saved 70% of crop yield",
                      image: "👨‍🌾"
                    },
                    {
                      farmer: "Amina Yusuf",
                      location: "Lagos, Nigeria",
                      crop: "Tomatoes",
                      problem: "Bacterial wilt",
                      solution: "Targeted treatment plan",
                      result: "Doubled harvest production",
                      image: "👩‍🌾"
                    },
                    {
                      farmer: "Carlos Rodriguez",
                      location: "Mexico City, Mexico",
                      crop: "Corn",
                      problem: "Nutrient deficiency",
                      solution: "AI-recommended fertilization",
                      result: "Improved crop quality by 40%",
                      image: "🌽"
                    }
                  ].map((story, index) => (
                    <div key={index} className="bg-white border border-leaf-200 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">{story.image}</div>
                      <h3 className={`text-lg font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                        {story.farmer}
                      </h3>
                      <p className={`text-sm text-earth-600 mb-4 ${isUr ? 'font-urdu' : ''}`}>
                        {story.location}
                      </p>
                      <div className={`text-left space-y-2 text-sm ${isUr ? 'font-urdu' : ''}`}>
                        <p><strong>Crop:</strong> {story.crop}</p>
                        <p><strong>Problem:</strong> {story.problem}</p>
                        <p><strong>Solution:</strong> {story.solution}</p>
                        <p><strong>Result:</strong> <span className="text-green-600 font-semibold">{story.result}</span></p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'experts' && (
            <div className="space-y-6">
              <section className="pm-card p-8">
                <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                  Expert Corner
                </h2>
                
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      name: "Dr. Sarah Chen",
                      title: "Plant Pathologist",
                      expertise: "Tomato and pepper diseases",
                      avatar: "👩‍🔬",
                      available: "Online now",
                      articles: 45
                    },
                    {
                      name: "Prof. Michael Kumar",
                      title: "Agricultural Scientist",
                      expertise: "Sustainable farming practices",
                      avatar: "👨‍🔬",
                      available: "Available tomorrow",
                      articles: 67
                    },
                    {
                      name: "Dr. Maria Garcia",
                      title: "Crop Nutrition Specialist",
                      expertise: "Soil health and fertilization",
                      avatar: "👩‍🔬",
                      available: "Busy",
                      articles: 32
                    },
                    {
                      name: "Dr. James Wilson",
                      title: "Entomologist",
                      expertise: "Pest management",
                      avatar: "👨‍🔬",
                      available: "Online now",
                      articles: 58
                    }
                  ].map((expert, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border border-leaf-200 rounded-xl hover:bg-leaf-50 transition-colors">
                      <div className="text-3xl">{expert.avatar}</div>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-leaf-900 ${isUr ? 'font-urdu' : ''}`}>
                          {expert.name}
                        </h3>
                        <p className={`text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                          {expert.title}
                        </p>
                        <p className={`text-sm text-leaf-700 ${isUr ? 'font-urdu' : ''}`}>
                          {expert.expertise}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs">
                          <span className={`flex items-center gap-1 ${
                            expert.available === 'Online now' ? 'text-green-600' : 'text-earth-500'
                          }`}>
                            <span className={`w-2 h-2 rounded-full ${
                              expert.available === 'Online now' ? 'bg-green-600' : 'bg-earth-400'
                            }`}></span>
                            {expert.available}
                          </span>
                          <span className="text-earth-500">{expert.articles} articles</span>
                        </div>
                      </div>
                      <button className="pm-btn-secondary px-4 py-2 text-sm">
                        Consult
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'events' && (
            <div className="space-y-6">
              <section className="pm-card p-8">
                <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
                  Upcoming Events
                </h2>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Advanced Plant Disease Detection Workshop",
                      date: "December 15, 2024",
                      time: "2:00 PM UTC",
                      type: "Online Workshop",
                      speaker: "Dr. Sarah Chen",
                      participants: 245
                    },
                    {
                      title: "Sustainable Farming Practices Webinar",
                      date: "December 20, 2024",
                      time: "10:00 AM UTC",
                      type: "Webinar",
                      speaker: "Prof. Michael Kumar",
                      participants: 189
                    },
                    {
                      title: "Community Meetup: Seasonal Disease Prevention",
                      date: "December 28, 2024",
                      time: "3:00 PM UTC",
                      type: "Community Event",
                      speaker: "Multiple experts",
                      participants: 156
                    }
                  ].map((event, index) => (
                    <div key={index} className="border border-leaf-200 rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-leaf-100 text-leaf-700 text-xs px-2 py-1 rounded-full">
                              {event.type}
                            </span>
                            <span className="text-sm text-earth-500">
                              {event.participants} participants
                            </span>
                          </div>
                          <h3 className={`text-lg font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                            {event.title}
                          </h3>
                          <div className={`space-y-1 text-sm text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                            <p>📅 {event.date}</p>
                            <p>🕐 {event.time}</p>
                            <p>👤 Speaker: {event.speaker}</p>
                          </div>
                        </div>
                        <button className="pm-btn-primary px-6 py-2 ml-4">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </main>

        <section className="mt-12 pm-card p-8">
          <h2 className={`text-2xl font-bold text-leaf-900 mb-6 ${isUr ? 'font-urdu' : ''}`}>
            Join Our Growing Community
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className={`text-lg font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                50,000+ Farmers
              </h3>
              <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Active community members worldwide
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className={`text-lg font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                120+ Countries
              </h3>
              <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Global reach and local expertise
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💡</div>
              <h3 className={`text-lg font-semibold text-leaf-900 mb-2 ${isUr ? 'font-urdu' : ''}`}>
                10,000+ Solutions
              </h3>
              <p className={`text-earth-600 ${isUr ? 'font-urdu' : ''}`}>
                Problems solved collaboratively
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
