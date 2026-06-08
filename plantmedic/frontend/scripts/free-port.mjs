import { execSync } from 'node:child_process'

const port = process.argv[2] || '5173'

function freeOnWindows() {
  try {
    const out = execSync(`netstat -ano | findstr :${port}`, { encoding: 'utf8' })
    const pids = new Set()
    for (const line of out.split('\n')) {
      if (!line.includes('LISTENING')) continue
      const parts = line.trim().split(/\s+/)
      const pid = parts[parts.length - 1]
      if (pid && pid !== '0') pids.add(pid)
    }
    for (const pid of pids) {
      try {
        execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' })
        console.log(`Freed port ${port} (stopped PID ${pid})`)
      } catch {
        // process may already have exited
      }
    }
  } catch {
    // nothing listening on this port
  }
}

function freeOnUnix() {
  try {
    const out = execSync(`lsof -ti :${port}`, { encoding: 'utf8' })
    for (const pid of out.trim().split('\n').filter(Boolean)) {
      try {
        process.kill(Number(pid), 'SIGTERM')
        console.log(`Freed port ${port} (stopped PID ${pid})`)
      } catch {
        // ignore
      }
    }
  } catch {
    // nothing listening on this port
  }
}

if (process.platform === 'win32') freeOnWindows()
else freeOnUnix()
