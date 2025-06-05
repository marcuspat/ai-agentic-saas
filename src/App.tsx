import { useState } from 'react'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [email, setEmail] = useState('demo@example.com')
  const [password, setPassword] = useState('password')
  const [currentView, setCurrentView] = useState('dashboard')

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSignedIn(true)
  }

  const handleSignOut = () => {
    setIsSignedIn(false)
    setCurrentView('dashboard')
  }

  // Mock data for the application
  const mockProjects = [
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Complete redesign of the company website',
      progress: 65,
      status: 'active',
      priority: 'high',
      dueDate: '2025-07-15',
      team: ['Alice Johnson', 'Bob Smith', 'Carol Davis']
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Build native mobile app for iOS and Android',
      progress: 30,
      status: 'active',
      priority: 'urgent',
      dueDate: '2025-08-30',
      team: ['David Wilson', 'Emma Brown', 'Frank Miller']
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q4 marketing campaign planning and execution',
      progress: 100,
      status: 'completed',
      priority: 'medium',
      dueDate: '2025-06-01',
      team: ['Grace Lee', 'Henry Taylor']
    },
    {
      id: 4,
      name: 'API Integration',
      description: 'Integrate third-party APIs for enhanced functionality',
      progress: 45,
      status: 'active',
      priority: 'high',
      dueDate: '2025-09-15',
      team: ['Alice Johnson', 'David Wilson']
    },
    {
      id: 5,
      name: 'Database Optimization',
      description: 'Optimize database queries and improve performance',
      progress: 80,
      status: 'active',
      priority: 'medium',
      dueDate: '2025-07-30',
      team: ['Bob Smith', 'Frank Miller']
    },
    {
      id: 6,
      name: 'User Testing',
      description: 'Conduct comprehensive user testing and feedback collection',
      progress: 100,
      status: 'completed',
      priority: 'low',
      dueDate: '2025-05-15',
      team: ['Emma Brown', 'Grace Lee']
    }
  ]

  const mockTeamMembers = [
    { id: 1, name: 'Alice Johnson', role: 'UI/UX Designer', avatar: '👩‍🎨', status: 'online' },
    { id: 2, name: 'Bob Smith', role: 'Frontend Developer', avatar: '👨‍💻', status: 'online' },
    { id: 3, name: 'Carol Davis', role: 'Content Manager', avatar: '👩‍💼', status: 'away' },
    { id: 4, name: 'David Wilson', role: 'Mobile Developer', avatar: '👨‍💻', status: 'online' },
    { id: 5, name: 'Emma Brown', role: 'Product Designer', avatar: '👩‍🎨', status: 'offline' },
    { id: 6, name: 'Frank Miller', role: 'iOS Developer', avatar: '👨‍💻', status: 'online' },
    { id: 7, name: 'Grace Lee', role: 'Marketing Manager', avatar: '👩‍💼', status: 'online' },
    { id: 8, name: 'Henry Taylor', role: 'Content Creator', avatar: '👨‍💼', status: 'away' }
  ]

  const mockNotifications = [
    { id: 1, message: 'New task assigned: Frontend development', time: '2 minutes ago', type: 'task' },
    { id: 2, message: 'Project deadline approaching: Mobile App Development', time: '1 hour ago', type: 'deadline' },
    { id: 3, message: 'Team member joined: John Doe', time: '3 hours ago', type: 'team' },
    { id: 4, message: 'Task completed: Design mockups', time: '1 day ago', type: 'completion' }
  ]

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              🚀 SaaS Project Manager
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Sign in to your account
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 
                className="text-2xl font-bold text-gray-900 cursor-pointer"
                onClick={() => setCurrentView('dashboard')}
              >
                🚀 SaaS Project Manager
              </h1>
              <div className="text-sm text-gray-500">
                / Acme Corp
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Navigation */}
              <nav className="hidden md:flex space-x-6">
                <button 
                  onClick={() => setCurrentView('dashboard')}
                  className={`text-sm font-medium ${currentView === 'dashboard' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Dashboard
                </button>
                <button 
                  onClick={() => setCurrentView('projects')}
                  className={`text-sm font-medium ${currentView === 'projects' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => setCurrentView('team')}
                  className={`text-sm font-medium ${currentView === 'team' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Team
                </button>
                <button 
                  onClick={() => setCurrentView('analytics')}
                  className={`text-sm font-medium ${currentView === 'analytics' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Analytics
                </button>
                <button 
                  onClick={() => setCurrentView('settings')}
                  className={`text-sm font-medium ${currentView === 'settings' ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`}
                >
                  Settings
                </button>
              </nav>

              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-600">
                  <span className="text-xl">🔔</span>
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {mockNotifications.length}
                  </span>
                </button>
              </div>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-700">
                  Welcome, Demo User
                </span>
                <button
                  onClick={handleSignOut}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Projects</p>
                    <p className="text-2xl font-bold text-gray-900">{mockProjects.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <span className="text-2xl">✅</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">{mockProjects.filter(p => p.status === 'completed').length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <span className="text-2xl">⏳</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold text-gray-900">{mockProjects.filter(p => p.status === 'active').length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Team Members</p>
                    <p className="text-2xl font-bold text-gray-900">{mockTeamMembers.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {mockNotifications.map(notification => (
                    <div key={notification.id} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        notification.type === 'task' ? 'bg-blue-500' :
                        notification.type === 'deadline' ? 'bg-red-500' :
                        notification.type === 'team' ? 'bg-green-500' : 'bg-purple-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                    <div className="text-2xl mb-2">➕</div>
                    <div className="text-sm font-medium text-gray-900">New Project</div>
                    <div className="text-xs text-gray-500">Create a new project</div>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="text-sm font-medium text-gray-900">Invite Team</div>
                    <div className="text-xs text-gray-500">Add team members</div>
                  </button>
                  <button 
                    onClick={() => setCurrentView('analytics')}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                  >
                    <div className="text-2xl mb-2">📈</div>
                    <div className="text-sm font-medium text-gray-900">View Reports</div>
                    <div className="text-xs text-gray-500">Analytics & insights</div>
                  </button>
                  <button 
                    onClick={() => setCurrentView('settings')}
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
                  >
                    <div className="text-2xl mb-2">⚙️</div>
                    <div className="text-sm font-medium text-gray-900">Settings</div>
                    <div className="text-xs text-gray-500">Workspace settings</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Active Projects Preview */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-gray-900">Active Projects</h3>
                <button 
                  onClick={() => setCurrentView('projects')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockProjects.filter(p => p.status === 'active').map(project => (
                  <div 
                    key={project.id} 
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-gray-900">{project.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: `${project.progress}%`}}></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                          project.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.priority}
                        </span>
                        <span className="text-gray-500">Due: {project.dueDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentView === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
              <div className="flex space-x-3">
                <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Completed</option>
                  <option>On Hold</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  New Project
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map(project => (
                <div 
                  key={project.id}
                  className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{project.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{width: `${project.progress}%`}}></div>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'active' ? 'bg-blue-100 text-blue-800' :
                          project.status === 'completed' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.status}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                          project.priority === 'urgent' ? 'bg-red-100 text-red-800' :
                          project.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {project.priority}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Due: {project.dueDate}</span>
                        <div className="flex -space-x-1">
                          {project.team.slice(0, 3).map((member, idx) => (
                            <div key={idx} className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs">
                              {member.charAt(0)}
                            </div>
                          ))}
                          {project.team.length > 3 && (
                            <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs">
                              +{project.team.length - 3}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'team' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Team Members</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Invite Member
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTeamMembers.map(member => (
                <div key={member.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-2xl">
                      {member.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'
                    }`}></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Active Projects</span>
                      <span className="font-medium">
                        {mockProjects.filter(p => p.team.includes(member.name)).length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Status</span>
                      <span className={`font-medium capitalize ${
                        member.status === 'online' ? 'text-green-600' :
                        member.status === 'away' ? 'text-yellow-600' : 'text-gray-600'
                      }`}>
                        {member.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'analytics' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completion Rate</p>
                    <p className="text-2xl font-bold text-gray-900">67%</p>
                  </div>
                  <div className="text-2xl">📊</div>
                </div>
                <div className="mt-2 text-sm text-green-600">↗ +12% from last month</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Task Time</p>
                    <p className="text-2xl font-bold text-gray-900">3.2d</p>
                  </div>
                  <div className="text-2xl">⏱️</div>
                </div>
                <div className="mt-2 text-sm text-red-600">↘ +0.5d from last month</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Productivity</p>
                    <p className="text-2xl font-bold text-gray-900">85%</p>
                  </div>
                  <div className="text-2xl">🚀</div>
                </div>
                <div className="mt-2 text-sm text-green-600">↗ +8% from last month</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">On-Time Delivery</p>
                    <p className="text-2xl font-bold text-gray-900">92%</p>
                  </div>
                  <div className="text-2xl">✅</div>
                </div>
                <div className="mt-2 text-sm text-green-600">↗ +5% from last month</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Project Status Distribution</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-sm text-gray-700">Completed</span>
                  </div>
                  <span className="text-sm font-medium">{mockProjects.filter(p => p.status === 'completed').length} projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-sm text-gray-700">In Progress</span>
                  </div>
                  <span className="text-sm font-medium">{mockProjects.filter(p => p.status === 'active').length} projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-sm text-gray-700">On Hold</span>
                  </div>
                  <span className="text-sm font-medium">0 projects</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Workspace Settings</h2>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Workspace Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Acme Corp"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    defaultValue="Main company workspace for project management"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>UTC-6 (Central Time)</option>
                    <option>UTC-5 (Eastern Time)</option>
                    <option>UTC-8 (Pacific Time)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive email updates for project activities</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Task Reminders</p>
                    <p className="text-sm text-gray-600">Get reminded about upcoming deadlines</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
