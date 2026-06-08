import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Uncaught render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="mb-4 text-sm text-earth-600">An unexpected error occurred while rendering the app.</p>
            <pre className="text-xs whitespace-pre-wrap bg-red-50 border border-red-100 rounded p-3 text-red-800">{String(this.state.error)}</pre>
            <p className="mt-4 text-sm">Try reloading the page. If the problem persists, check the browser console and report the error.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
